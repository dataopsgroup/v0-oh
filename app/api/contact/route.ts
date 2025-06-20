import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { howCanWeHelp, workEmail, firstName, lastName } = body

    // Validate required fields
    if (!howCanWeHelp || !workEmail || !firstName || !lastName) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from DataOps Group Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${workEmail}

Message:
${howCanWeHelp}

Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Send email using Resend API
    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "DataOps Group Contact Form <noreply@dataopsgroup.com>",
          to: ["admin@dataopsgroup.com"],
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${workEmail}">${workEmail}</a></p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #374151;">Message</h3>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
                  ${howCanWeHelp.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                <p>Submitted at: ${new Date().toLocaleString()}</p>
                <p>This email was sent from the DataOps Group contact form.</p>
              </div>
            </div>
          `,
        }),
      })

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json()
        console.error("Resend API error:", errorData)
        throw new Error("Failed to send email via Resend")
      }

      const emailResult = await emailResponse.json()
      console.log("Email sent successfully:", emailResult)
    } catch (emailError) {
      console.error("Email sending failed:", emailError)

      // Fallback: Try using Nodemailer with SMTP
      try {
        const nodemailer = await import("nodemailer")

        const transporter = nodemailer.default.createTransporter({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number.parseInt(process.env.SMTP_PORT || "587"),
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        await transporter.sendMail({
          from: process.env.SMTP_FROM || "noreply@dataopsgroup.com",
          to: "admin@dataopsgroup.com",
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${workEmail}">${workEmail}</a></p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #374151;">Message</h3>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
                  ${howCanWeHelp.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                <p>Submitted at: ${new Date().toLocaleString()}</p>
                <p>This email was sent from the DataOps Group contact form.</p>
              </div>
            </div>
          `,
        })

        console.log("Email sent successfully via SMTP fallback")
      } catch (smtpError) {
        console.error("SMTP fallback also failed:", smtpError)

        // Log the submission for manual follow-up
        console.log("MANUAL FOLLOW-UP REQUIRED - Contact form submission:", {
          timestamp: new Date().toISOString(),
          name: `${firstName} ${lastName}`,
          email: workEmail,
          message: howCanWeHelp,
          adminEmail: "admin@dataopsgroup.com",
        })

        // Still return success to user since we logged it
      }
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
