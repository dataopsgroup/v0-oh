// Comprehensive debugging script for contact form issues
const { Resend } = require("resend")

async function debugContactForm() {
  console.log("🔍 Debugging Contact Form Issues...\n")

  // Step 1: Check environment variables
  console.log("1️⃣ Checking Environment Variables:")
  const resendKey = process.env.RESEND_API_KEY

  if (!resendKey) {
    console.error("❌ RESEND_API_KEY is not set")
    console.log("   Please add RESEND_API_KEY to your .env.local file")
    return
  } else {
    console.log("✅ RESEND_API_KEY is set")
    console.log(`   Key starts with: ${resendKey.substring(0, 8)}...`)
  }

  // Step 2: Test Resend API directly
  console.log("\n2️⃣ Testing Resend API Connection:")
  try {
    const resend = new Resend(resendKey)

    const testEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["admin@dataopsgroup.com"],
      subject: "Contact Form Debug Test",
      html: `
        <h2>Contact Form Debug Test</h2>
        <p>This is a direct test of the Resend API to verify it's working.</p>
        <p>Sent at: ${new Date().toLocaleString()}</p>
        <p>If you receive this, the Resend API is working correctly.</p>
      `,
    })

    console.log("✅ Resend API test successful!")
    console.log(`   Email ID: ${testEmail.data?.id}`)
  } catch (error) {
    console.error("❌ Resend API test failed:")
    console.error(`   Error: ${error.message}`)

    if (error.message.includes("API key")) {
      console.log("   🔧 Check your RESEND_API_KEY - it may be invalid")
    }
    return
  }

  // Step 3: Test the API endpoint
  console.log("\n3️⃣ Testing Contact Form API Endpoint:")
  const testFormData = {
    firstName: "Debug",
    lastName: "Test",
    workEmail: "debug@test.com",
    howCanWeHelp: "This is a debug test to check if the contact form API is working properly.",
  }

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testFormData),
    })

    const result = await response.json()

    if (response.ok) {
      console.log("✅ API endpoint test successful!")
      console.log(`   Response: ${result.message}`)
      console.log(`   Email ID: ${result.emailId}`)
    } else {
      console.error("❌ API endpoint test failed:")
      console.error(`   Status: ${response.status}`)
      console.error(`   Error: ${result.error}`)
    }
  } catch (error) {
    console.error("❌ API endpoint test failed:")
    console.error(`   Error: ${error.message}`)

    if (error.code === "ECONNREFUSED") {
      console.log("   🔧 Make sure your Next.js server is running (npm run dev)")
    }
  }

  // Step 4: Check browser console instructions
  console.log("\n4️⃣ Browser Debugging Instructions:")
  console.log("   Open your browser's Developer Tools (F12)")
  console.log("   Go to the Network tab")
  console.log("   Submit the contact form")
  console.log("   Look for the POST request to /api/contact")
  console.log("   Check if there are any error messages in the Console tab")

  console.log("\n📋 Common Issues to Check:")
  console.log("   • Form validation preventing submission")
  console.log("   • JavaScript errors in browser console")
  console.log("   • Network connectivity issues")
  console.log("   • CORS issues (check browser console)")
  console.log("   • Server not running or API route not found")
}

// Run the debug script
debugContactForm().catch(console.error)
