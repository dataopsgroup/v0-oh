import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Use Resend's verified domain as fallback until dataopsgroup.com is verified
    const fromEmail = "onboarding@resend.dev"

    const { data, error } = await resend.emails.send({
      from: `DataOps Group Contact Form <${fromEmail}>`,
      to: ["admin@dataopsgroup.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
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
            <td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${workEmail}" style="color: #2563eb; text-decoration: none;">${workEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
            <td style="padding: 8px 0; color: #6b7280;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
      
      <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #374151; margin-top: 0; font-size: 18px;">Message</h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #374151;">${howCanWeHelp}</p>
        </div>
      </div>
      
      <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
        <p style="margin: 0;">This email was sent from the DataOps Group contact form.</p>
        <p style="margin: 5px 0 0 0;">Reply to: <a href="mailto:${workEmail}" style="color: #2563eb;">${workEmail}</a></p>
      </div>
    </div>
  `,
      text: `
New Contact Form Submission from DataOps Group Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${workEmail}

Message:
${howCanWeHelp}

Submitted at: ${new Date().toLocaleString()}

Reply to this person at: ${workEmail}
  `.trim(),
      replyTo: workEmail,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      emailId: data?.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    )
  }
}
