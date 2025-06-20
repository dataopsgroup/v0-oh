// Comprehensive diagnostic tool for contact form issues
const { Resend } = require("resend")
const fs = require("fs")
const path = require("path")

async function comprehensiveFormDiagnosis() {
  console.log("🔍 COMPREHENSIVE CONTACT FORM DIAGNOSIS")
  console.log("=".repeat(50))

  const issues = []
  const fixes = []

  // 1. Environment Variables Check
  console.log("\n1️⃣ ENVIRONMENT VARIABLES:")
  console.log("-".repeat(30))

  const requiredEnvVars = ["RESEND_API_KEY"]
  const envIssues = []

  requiredEnvVars.forEach((varName) => {
    const value = process.env[varName]
    if (!value) {
      console.log(`❌ ${varName}: NOT SET`)
      envIssues.push(`${varName} is missing`)
      issues.push(`Missing environment variable: ${varName}`)
      fixes.push(`Add ${varName} to your .env.local file`)
    } else {
      console.log(`✅ ${varName}: SET (${value.substring(0, 8)}...)`)
    }
  })

  // 2. File Structure Check
  console.log("\n2️⃣ FILE STRUCTURE:")
  console.log("-".repeat(30))

  const requiredFiles = ["app/api/contact/route.ts", "components/contact/ContactForm.tsx", "app/contact/page.tsx"]

  requiredFiles.forEach((filePath) => {
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${filePath}: EXISTS`)
    } else {
      console.log(`❌ ${filePath}: MISSING`)
      issues.push(`Missing file: ${filePath}`)
      fixes.push(`Create the missing file: ${filePath}`)
    }
  })

  // 3. API Route Analysis
  console.log("\n3️⃣ API ROUTE ANALYSIS:")
  console.log("-".repeat(30))

  try {
    const apiRoutePath = "app/api/contact/route.ts"
    if (fs.existsSync(apiRoutePath)) {
      const apiContent = fs.readFileSync(apiRoutePath, "utf8")

      // Check for common issues in API route
      const apiChecks = [
        { pattern: /import.*Resend/, name: "Resend import" },
        { pattern: /new Resend\(/, name: "Resend initialization" },
        { pattern: /resend\.emails\.send/, name: "Email sending method" },
        { pattern: /NextResponse\.json/, name: "Response handling" },
        { pattern: /try.*catch/, name: "Error handling" },
      ]

      apiChecks.forEach((check) => {
        if (check.pattern.test(apiContent)) {
          console.log(`✅ ${check.name}: FOUND`)
        } else {
          console.log(`❌ ${check.name}: MISSING`)
          issues.push(`API route missing: ${check.name}`)
        }
      })
    }
  } catch (error) {
    console.log(`❌ Error reading API route: ${error.message}`)
    issues.push(`Cannot read API route file`)
  }

  // 4. Resend API Test
  console.log("\n4️⃣ RESEND API TEST:")
  console.log("-".repeat(30))

  if (!envIssues.length) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)

      const testResult = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["admin@dataopsgroup.com"],
        subject: "Contact Form Diagnosis Test",
        html: `
          <h2>Contact Form Diagnosis Test</h2>
          <p>This email confirms that the Resend API is working correctly.</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        `,
      })

      console.log("✅ Resend API: WORKING")
      console.log(`   Email ID: ${testResult.data?.id}`)
    } catch (error) {
      console.log("❌ Resend API: FAILED")
      console.log(`   Error: ${error.message}`)
      issues.push(`Resend API error: ${error.message}`)

      if (error.message.includes("Invalid API key")) {
        fixes.push("Check your RESEND_API_KEY - it may be incorrect or expired")
      } else if (error.message.includes("rate limit")) {
        fixes.push("You've hit the Resend rate limit - wait a few minutes and try again")
      }
    }
  } else {
    console.log("⏭️  Skipping Resend test due to missing environment variables")
  }

  // 5. Local Server Test
  console.log("\n5️⃣ LOCAL SERVER TEST:")
  console.log("-".repeat(30))

  try {
    const testData = {
      firstName: "Test",
      lastName: "User",
      workEmail: "test@example.com",
      howCanWeHelp: "This is a diagnostic test message.",
    }

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })

    const result = await response.json()

    if (response.ok) {
      console.log("✅ Local API endpoint: WORKING")
      console.log(`   Response: ${result.message}`)
    } else {
      console.log("❌ Local API endpoint: FAILED")
      console.log(`   Status: ${response.status}`)
      console.log(`   Error: ${result.error}`)
      issues.push(`API endpoint error: ${result.error}`)
    }
  } catch (error) {
    console.log("❌ Local API endpoint: UNREACHABLE")
    console.log(`   Error: ${error.message}`)

    if (error.code === "ECONNREFUSED") {
      issues.push("Next.js development server is not running")
      fixes.push("Start the development server with: npm run dev")
    } else {
      issues.push(`Network error: ${error.message}`)
    }
  }

  // 6. Summary and Recommendations
  console.log("\n" + "=".repeat(50))
  console.log("📋 DIAGNOSIS SUMMARY")
  console.log("=".repeat(50))

  if (issues.length === 0) {
    console.log("🎉 NO ISSUES FOUND!")
    console.log("   Your contact form should be working correctly.")
    console.log("   If you're still having problems, check the browser console for client-side errors.")
  } else {
    console.log(`❌ FOUND ${issues.length} ISSUE(S):`)
    issues.forEach((issue, index) => {
      console.log(`   ${index + 1}. ${issue}`)
    })

    console.log("\n🔧 RECOMMENDED FIXES:")
    fixes.forEach((fix, index) => {
      console.log(`   ${index + 1}. ${fix}`)
    })
  }

  console.log("\n📝 NEXT STEPS:")
  console.log("   1. Fix any issues listed above")
  console.log("   2. Test the form in your browser")
  console.log("   3. Check browser console for client-side errors")
  console.log("   4. Monitor server logs during form submission")
  console.log("   5. Verify emails are received at admin@dataopsgroup.com")
}

// Run the comprehensive diagnosis
comprehensiveFormDiagnosis().catch(console.error)
