import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { RateLimiter, sanitizeInput, validateEmail, validateRequest } from "@/lib/security"
import { errorTracker } from "@/lib/error-tracking"

const resend = new Resend(process.env.RESEND_API_KEY)

// Environment validation
const requiredEnvVars = ["RESEND_API_KEY"]
const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName])

if (missingEnvVars.length > 0) {
  console.error("Missing required environment variables:", missingEnvVars)
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    // Basic request validation
    const requestValidation = validateRequest(request)
    if (!requestValidation.valid) {
      return NextResponse.json({ error: "Invalid request", details: requestValidation.errors }, { status: 400 })
    }

    // Rate limiting
    const clientIP = request.ip ?? request.headers.get("x-forwarded-for") ?? "anonymous"
    if (!RateLimiter.isAllowed(clientIP, 5, 900000)) {
      // 5 requests per 15 minutes
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Parse and validate request body
    let body: any
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
    }

    const { firstName, lastName, workEmail, company, phone, howCanWeHelp, consent } = body

    // Validate required fields
    if (!firstName || !lastName || !workEmail || !howCanWeHelp) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, workEmail, howCanWeHelp" },
        { status: 400 },
      )
    }

    // Validate consent
    if (!consent) {
      return NextResponse.json({ error: "Privacy policy consent is required" }, { status: 400 })
    }

    // Validate email
    const emailValidation = validateEmail(workEmail)
    if (!emailValidation.valid) {
      return NextResponse.json({ error: emailValidation.reason || "Invalid email format" }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName).substring(0, 50),
      lastName: sanitizeInput(lastName).substring(0, 50),
      workEmail: sanitizeInput(workEmail).substring(0, 100),
      company: company ? sanitizeInput(company).substring(0, 100) : "",
      phone: phone ? sanitizeInput(phone).substring(0, 20) : "",
      howCanWeHelp: sanitizeInput(howCanWeHelp).substring(0, 1000),
    }

    // Validate field lengths
    if (sanitizedData.howCanWeHelp.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long" }, { status: 400 })
    }

    // Check for environment variables
    if (missingEnvVars.length > 0) {
      console.error("Email service not configured properly")
      return NextResponse.json({ error: "Email service temporarily unavailable" }, { status: 503 })
    }

    // Send email with retry logic
    let emailResult
    let retryCount = 0
    const maxRetries = 3

    while (retryCount < maxRetries) {
      try {
        emailResult = await resend.emails.send({
          from: `DataOps Group Contact Form <noreply@email.dataopsgroup.com>`,
          to: ["admin@dataopsgroup.com"],
          subject: `New Contact Form Submission from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
          html: generateEmailHTML(sanitizedData),
          text: generateEmailText(sanitizedData),
          replyTo: sanitizedData.workEmail,
        })
        break // Success, exit retry loop
      } catch (error) {
        retryCount++
        if (retryCount >= maxRetries) {
          throw error // Re-throw after max retries
        }
        // Wait before retry (exponential backoff)
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, retryCount) * 1000))
      }
    }

if (emailResult && emailResult.error)
      console.error("Resend error:", emailResult.error)

      // Track error
      errorTracker.captureError(new Error(`Email send failed: ${emailResult.error}`), {
        component: "ContactAPI",
        action: "send_email",
        metadata: { retryCount, emailService: "resend" },
      })

      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
    }

    // Log successful submission
    console.log("Contact form submitted successfully:", {
      emailId: emailResult?.data?.id,
      from: sanitizedData.workEmail,
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - startTime,
    })

    // Track successful submission
    errorTracker.trackFormSubmission("contact", true)

    // Clean up rate limiter periodically
    if (Math.random() < 0.1) {
      // 10% chance
      RateLimiter.cleanup()
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      emailId: emailResult?.data?.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)

    // Track error
    errorTracker.captureError(error instanceof Error ? error : new Error("Unknown contact form error"), {
      component: "ContactAPI",
      action: "process_request",
      metadata: { processingTime: Date.now() - startTime },
    })

    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}

function generateEmailHTML(data: any): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">DataOps Group Website</p>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
        <h2 style="color: #374151; margin-top: 0; font-size: 18px;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
            <td style="padding: 8px 0; color: #6b7280;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.workEmail}" style="color: #2563eb; text-decoration: none;">${data.workEmail}</a></td>
          </tr>
          ${
            data.company
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
            <td style="padding: 8px 0; color: #6b7280;">${data.company}</td>
          </tr>
          `
              : ""
          }
          ${
            data.phone
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
            <td style="padding: 8px 0; color: #6b7280;">${data.phone}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
            <td style="padding: 8px 0; color: #6b7280;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
      
      <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #374151; margin-top: 0; font-size: 18px;">Message</h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #374151;">${data.howCanWeHelp}</p>
        </div>
      </div>
      
      <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
        <p style="margin: 0;">This email was sent from the DataOps Group contact form.</p>
        <p style="margin: 5px 0 0 0;">Reply to: <a href="mailto:${data.workEmail}" style="color: #2563eb;">${data.workEmail}</a></p>
      </div>
    </div>
  `
}

function generateEmailText(data: any): string {
  return `
New Contact Form Submission from DataOps Group Website

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.workEmail}
${data.company ? `- Company: ${data.company}` : ""}
${data.phone ? `- Phone: ${data.phone}` : ""}

Message:
${data.howCanWeHelp}

Submitted at: ${new Date().toLocaleString()}

Reply to this person at: ${data.workEmail}
  `.trim()
}
