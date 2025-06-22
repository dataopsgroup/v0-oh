/**
 * Centralized Email Service
 * Handles all email operations through Resend
 */

import { Resend } from "resend"

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is required")
}

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  firstName: string
  lastName: string
  workEmail: string
  howCanWeHelp: string
}

export interface EmailResult {
  success: boolean
  emailId?: string
  error?: string
}

export class EmailService {
  private static readonly FROM_EMAIL = "noreply@email.dataopsgroup.com"
  private static readonly TO_EMAIL = "admin@dataopsgroup.com"

  static async sendContactForm(data: ContactFormData): Promise<EmailResult> {
    try {
      const { firstName, lastName, workEmail, howCanWeHelp } = data

      const { data: emailData, error } = await resend.emails.send({
        from: `DataOps Group Contact Form <${this.FROM_EMAIL}>`,
        to: [this.TO_EMAIL],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: this.generateContactEmailHTML(data),
        text: this.generateContactEmailText(data),
        replyTo: workEmail,
      })

      if (error) {
        console.error("Resend error:", error)
        return {
          success: false,
          error: "Failed to send email. Please try again later.",
        }
      }

      return {
        success: true,
        emailId: emailData?.id,
      }
    } catch (error) {
      console.error("Email service error:", error)
      return {
        success: false,
        error: "Internal server error",
      }
    }
  }

  private static generateContactEmailHTML(data: ContactFormData): string {
    const { firstName, lastName, workEmail, howCanWeHelp } = data

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
    `
  }

  private static generateContactEmailText(data: ContactFormData): string {
    const { firstName, lastName, workEmail, howCanWeHelp } = data

    return `
New Contact Form Submission from DataOps Group Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${workEmail}

Message:
${howCanWeHelp}

Submitted at: ${new Date().toLocaleString()}

Reply to this person at: ${workEmail}
    `.trim()
  }
}
