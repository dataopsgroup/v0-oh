// Test script to verify email delivery functionality
const nodemailer = require("nodemailer")

async function testEmailDelivery() {
  console.log("🧪 Testing Email Delivery Configuration...\n")

  // Check environment variables
  const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    console.error("❌ Missing required environment variables:")
    missingVars.forEach((varName) => console.error(`   - ${varName}`))
    console.log("\n📝 Please ensure these environment variables are set:")
    console.log("   SMTP_HOST=your-smtp-server.com")
    console.log("   SMTP_PORT=587")
    console.log("   SMTP_USER=your-email@domain.com")
    console.log("   SMTP_PASS=your-email-password")
    console.log("   SMTP_FROM=noreply@dataopsgroup.com")
    return
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log("✅ SMTP Configuration:")
    console.log(`   Host: ${process.env.SMTP_HOST}`)
    console.log(`   Port: ${process.env.SMTP_PORT}`)
    console.log(`   User: ${process.env.SMTP_USER}`)
    console.log(`   From: ${process.env.SMTP_FROM}`)

    // Verify connection
    console.log("\n🔗 Testing SMTP connection...")
    await transporter.verify()
    console.log("✅ SMTP connection successful!")

    // Send test email
    console.log("\n📧 Sending test email to admin@dataopsgroup.com...")
    const testEmailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "admin@dataopsgroup.com",
      subject: "Test Email - Contact Form Setup Verification",
      text: `
This is a test email to verify the contact form email delivery setup.

Test Details:
- Sent at: ${new Date().toLocaleString()}
- From: Contact Form Test Script
- SMTP Host: ${process.env.SMTP_HOST}
- SMTP Port: ${process.env.SMTP_PORT}

If you receive this email, the contact form email delivery is working correctly.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">Contact Form Test Email</h2>
          <p>This is a test email to verify the contact form email delivery setup.</p>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151;">Test Details:</h3>
            <ul>
              <li><strong>Sent at:</strong> ${new Date().toLocaleString()}</li>
              <li><strong>From:</strong> Contact Form Test Script</li>
              <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
              <li><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</li>
            </ul>
          </div>
          <div style="background: #dcfce7; padding: 15px; border-radius: 8px; border-left: 4px solid #16a34a;">
            <p style="margin: 0; color: #166534;">
              <strong>✅ Success!</strong> If you receive this email, the contact form email delivery is working correctly.
            </p>
          </div>
        </div>
      `,
    })

    console.log("✅ Test email sent successfully!")
    console.log(`   Message ID: ${testEmailResult.messageId}`)
    console.log("   Check admin@dataopsgroup.com for the test email")
  } catch (error) {
    console.error("❌ Email delivery test failed:")
    console.error(`   Error: ${error.message}`)

    if (error.code === "EAUTH") {
      console.log("\n🔧 Authentication failed. Please check:")
      console.log("   - SMTP username and password are correct")
      console.log("   - Account has SMTP access enabled")
      console.log("   - Two-factor authentication is properly configured")
    } else if (error.code === "ECONNECTION") {
      console.log("\n🔧 Connection failed. Please check:")
      console.log("   - SMTP host and port are correct")
      console.log("   - Network connectivity")
      console.log("   - Firewall settings")
    }
  }
}

// Test the contact form API endpoint
async function testContactFormAPI() {
  console.log("\n🧪 Testing Contact Form API Endpoint...\n")

  const testData = {
    firstName: "Test",
    lastName: "User",
    workEmail: "test@example.com",
    howCanWeHelp: "This is a test submission to verify the contact form API is working correctly.",
  }

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })

    const result = await response.json()

    if (response.ok) {
      console.log("✅ Contact form API test successful!")
      console.log(`   Response: ${result.message}`)
      console.log("   Check admin@dataopsgroup.com for the test submission")
    } else {
      console.error("❌ Contact form API test failed:")
      console.error(`   Status: ${response.status}`)
      console.error(`   Error: ${result.error}`)
    }
  } catch (error) {
    console.error("❌ Contact form API test failed:")
    console.error(`   Error: ${error.message}`)
    console.log("\n💡 Make sure the Next.js development server is running (npm run dev)")
  }
}

// Run tests
async function runAllTests() {
  await testEmailDelivery()
  await testContactFormAPI()

  console.log("\n📋 Next Steps:")
  console.log("1. Check admin@dataopsgroup.com for test emails")
  console.log("2. Test the contact form in the browser")
  console.log("3. Verify form validation works correctly")
  console.log("4. Confirm thank you message displays after submission")
}

runAllTests().catch(console.error)
