// Test script for Resend email delivery
const { Resend } = require("resend")

async function testResendDelivery() {
  console.log("🧪 Testing Resend Email Delivery...\n")

  // Check if API key is available
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY environment variable not found")
    console.log("💡 Make sure to set RESEND_API_KEY in your environment variables")
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    // Test email data
    const testData = {
      firstName: "John",
      lastName: "Doe",
      workEmail: "john.doe@example.com",
      howCanWeHelp: "This is a test message from the contact form test script. Please ignore this email.",
    }

    console.log("📧 Sending test email...")
    console.log("From: DataOps Group <noreply@dataopsgroup.com>")
    console.log("To: admin@dataopsgroup.com")
    console.log("Subject: New Contact Form Submission from John Doe")
    console.log("")

    // Send test email
    const { data, error } = await resend.emails.send({
      from: "DataOps Group <noreply@dataopsgroup.com>",
      to: ["admin@dataopsgroup.com"],
      subject: `New Contact Form Submission from ${testData.firstName} ${testData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">DataOps Group Website - TEST EMAIL</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
            <h2 style="color: #374151; margin-top: 0; font-size: 18px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #6b7280;">${testData.firstName} ${testData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${testData.workEmail}" style="color: #2563eb; text-decoration: none;">${testData.workEmail}</a></td>
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
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #374151;">${testData.howCanWeHelp}</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
            <p style="margin: 0;">This email was sent from the DataOps Group contact form test script.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission from DataOps Group Website - TEST EMAIL

Contact Information:
- Name: ${testData.firstName} ${testData.lastName}
- Email: ${testData.workEmail}

Message:
${testData.howCanWeHelp}

Submitted at: ${new Date().toLocaleString()}
      `.trim(),
      replyTo: testData.workEmail,
    })

    if (error) {
      console.error("❌ Resend API Error:", error)

      // Provide specific troubleshooting based on error type
      if (error.message?.includes("API key")) {
        console.log("\n💡 Troubleshooting:")
        console.log("- Check that RESEND_API_KEY is correctly set")
        console.log("- Verify the API key is valid and not expired")
        console.log("- Make sure the API key has send permissions")
      } else if (error.message?.includes("domain")) {
        console.log("\n💡 Troubleshooting:")
        console.log("- Verify your domain is verified in Resend")
        console.log("- Check DNS records are properly configured")
        console.log('- Ensure the "from" email uses your verified domain')
      }

      return
    }

    console.log("✅ Email sent successfully!")
    console.log("📧 Email ID:", data?.id)
    console.log("")
    console.log("🔍 Next steps:")
    console.log("1. Check admin@dataopsgroup.com for the test email")
    console.log("2. Check spam/junk folder if not in inbox")
    console.log("3. If email received, your Resend integration is working!")
    console.log("4. Test the actual contact form on your website")
  } catch (error) {
    console.error("❌ Unexpected error:", error)

    if (error.message?.includes("fetch")) {
      console.log("\n💡 This might be a network connectivity issue")
      console.log("- Check your internet connection")
      console.log("- Verify Resend API is accessible")
    }
  }
}

// Test API connectivity
async function testResendAPI() {
  console.log("🔌 Testing Resend API connectivity...")

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY not found")
    return false
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    // Test API key validity by attempting to get domains
    const response = await fetch("https://api.resend.com/domains", {
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("✅ Resend API connection successful")
      return true
    } else {
      console.error("❌ Resend API connection failed:", response.status, response.statusText)
      return false
    }
  } catch (error) {
    console.error("❌ Failed to connect to Resend API:", error.message)
    return false
  }
}

// Run tests
async function runTests() {
  console.log("🚀 Starting Resend Email Delivery Tests\n")

  // Test API connectivity first
  const apiConnected = await testResendAPI()
  console.log("")

  if (apiConnected) {
    // If API is connected, test email delivery
    await testResendDelivery()
  } else {
    console.log("💡 Fix API connectivity issues before testing email delivery")
  }

  console.log("\n✨ Test completed!")
}

// Execute tests
runTests().catch(console.error)
