// Quick status check for contact form functionality
const { Resend } = require("resend")

async function quickStatusCheck() {
  console.log("🔍 QUICK STATUS CHECK - Contact Form Email Functionality")
  console.log("=".repeat(60))

  let allGood = true

  // 1. Environment Check
  console.log("\n1️⃣ Environment Variables:")
  if (process.env.RESEND_API_KEY) {
    console.log("✅ RESEND_API_KEY is set")
  } else {
    console.log("❌ RESEND_API_KEY is missing")
    allGood = false
  }

  // 2. Quick Resend Test
  console.log("\n2️⃣ Resend API Test:")
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const result = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["admin@dataopsgroup.com"],
        subject: "Quick Status Check - Contact Form Working",
        html: "<p>This email confirms the contact form is working! ✅</p>",
      })
      console.log("✅ Email sent successfully!")
      console.log(`   Email ID: ${result.data?.id}`)
    } catch (error) {
      console.log("❌ Email sending failed:")
      console.log(`   Error: ${error.message}`)
      allGood = false
    }
  }

  // 3. API Endpoint Test
  console.log("\n3️⃣ API Endpoint Test:")
  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Test",
        lastName: "User",
        workEmail: "test@example.com",
        howCanWeHelp: "Status check test message",
      }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log("✅ API endpoint working!")
      console.log(`   Response: ${result.message}`)
    } else {
      console.log("❌ API endpoint failed")
      allGood = false
    }
  } catch (error) {
    console.log("❌ Cannot reach API endpoint")
    console.log("   Make sure your dev server is running: npm run dev")
    allGood = false
  }

  // Final Status
  console.log("\n" + "=".repeat(60))
  if (allGood) {
    console.log("🎉 STATUS: CONTACT FORM IS WORKING!")
    console.log("   ✅ All systems operational")
    console.log("   ✅ Emails should be sending successfully")
  } else {
    console.log("❌ STATUS: CONTACT FORM HAS ISSUES")
    console.log("   Please run the comprehensive diagnosis:")
    console.log("   node scripts/comprehensive-form-diagnosis.js")
  }
  console.log("=".repeat(60))
}

quickStatusCheck().catch(console.error)
