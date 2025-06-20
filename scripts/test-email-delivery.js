// Test script to verify email delivery functionality
async function testEmailDelivery() {
  console.log("🧪 Testing Contact Form Email Delivery...\n")

  const testSubmission = {
    firstName: "Test",
    lastName: "User",
    workEmail: "test@example.com",
    howCanWeHelp: "This is a test submission to verify email delivery functionality.",
  }

  try {
    console.log("📤 Sending test submission...")

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testSubmission),
    })

    const result = await response.json()

    if (response.ok) {
      console.log("✅ API Response: Success")
      console.log("📧 Check admin@dataopsgroup.com for the test email")
      console.log("\n📋 Expected Email Content:")
      console.log("- Subject: New Contact Form Submission from Test User")
      console.log("- From: DataOps Group Contact Form")
      console.log("- To: admin@dataopsgroup.com")
      console.log("- Content: Contact details and test message")
    } else {
      console.log("❌ API Response: Error")
      console.log("Error:", result.error)
    }
  } catch (error) {
    console.log("❌ Network Error:", error.message)
  }

  console.log("\n🔧 Troubleshooting Steps:")
  console.log("1. Check environment variables are set correctly")
  console.log("2. Verify email service API key/credentials")
  console.log("3. Check spam folder in admin@dataopsgroup.com")
  console.log("4. Review server console logs for detailed error messages")
}

// Run the test
testEmailDelivery()
