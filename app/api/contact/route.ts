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

How Can We Help:
${howCanWeHelp}

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${workEmail}

Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // In a real implementation, you would send this email using a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    // - Resend
    // - etc.

    // For now, we'll log it and return success
    console.log("Contact form submission:", {
      to: "admin@dataopsgroup.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      content: emailContent,
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
