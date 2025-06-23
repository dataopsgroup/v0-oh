#!/usr/bin/env node

/**
 * Comprehensive test runner for all implemented features
 */

import { FormTester, SecurityTester } from "../lib/test-utils.js"

async function runAllTests() {
  console.log("🧪 Running Comprehensive Test Suite...\n")

  const results = {
    passed: 0,
    failed: 0,
    total: 0,
    details: [],
  }

  // 1. Form Validation Tests
  console.log("📝 Testing Form Validation...")
  try {
    const formTests = await FormTester.testFormValidation()
    formTests.forEach((test) => {
      results.total++
      if (test.passed) {
        results.passed++
        console.log(`✅ ${test.message}`)
      } else {
        results.failed++
        console.log(`❌ ${test.message}`)
      }
      results.details.push(test)
    })
  } catch (error) {
    console.error("❌ Form validation tests failed:", error.message)
    results.failed++
    results.total++
  }

  // 2. Security Tests
  console.log("\n🔒 Testing Security Features...")

  const csrfTest = SecurityTester.testCSRFProtection()
  results.total++
  if (csrfTest.passed) {
    results.passed++
    console.log(`✅ ${csrfTest.message}`)
  } else {
    results.failed++
    console.log(`❌ ${csrfTest.message}`)
  }
  results.details.push(csrfTest)

  const sanitizationTest = SecurityTester.testInputSanitization('<script>alert("xss")</script>')
  results.total++
  if (sanitizationTest.passed) {
    results.passed++
    console.log(`✅ ${sanitizationTest.message}`)
  } else {
    results.failed++
    console.log(`❌ ${sanitizationTest.message}`)
  }
  results.details.push(sanitizationTest)

  // 3. API Endpoint Tests
  console.log("\n🌐 Testing API Endpoints...")
  try {
    const contactTest = await FormTester.testContactForm({
      firstName: "Test",
      lastName: "User",
      workEmail: "test@example.com",
      howCanWeHelp: "This is a comprehensive test of the contact form API",
      consent: true,
    })

    results.total++
    if (contactTest.passed) {
      results.passed++
      console.log(`✅ ${contactTest.message}`)
    } else {
      results.failed++
      console.log(`❌ ${contactTest.message}`)
    }
    results.details.push(contactTest)
  } catch (error) {
    console.error("❌ API endpoint test failed:", error.message)
    results.failed++
    results.total++
  }

  // 4. Environment Variable Checks
  console.log("\n🔧 Checking Environment Configuration...")
  const requiredEnvVars = ["RESEND_API_KEY", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]

  requiredEnvVars.forEach((varName) => {
    results.total++
    if (process.env[varName]) {
      results.passed++
      console.log(`✅ ${varName} is configured`)
    } else {
      results.failed++
      console.log(`❌ ${varName} is missing`)
    }
  })

  // 5. Build and Bundle Checks
  console.log("\n📦 Checking Build Configuration...")
  try {
    const fs = await import("fs/promises")
    const path = await import("path")

    const configFiles = ["next.config.mjs", "tailwind.config.ts", "tsconfig.json", "package.json"]

    for (const file of configFiles) {
      results.total++
      try {
        await fs.access(file)
        results.passed++
        console.log(`✅ ${file} exists`)
      } catch {
        results.failed++
        console.log(`❌ ${file} is missing`)
      }
    }
  } catch (error) {
    console.error("❌ Build configuration check failed:", error.message)
  }

  // Generate Report
  console.log("\n📊 Test Results Summary:")
  console.log(`Total Tests: ${results.total}`)
  console.log(`Passed: ${results.passed}`)
  console.log(`Failed: ${results.failed}`)
  console.log(`Success Rate: ${((results.passed / results.total) * 100).toFixed(1)}%`)

  if (results.failed > 0) {
    console.log("\n⚠️  Some tests failed. Please review the issues above.")
    process.exit(1)
  } else {
    console.log("\n🎉 All tests passed!")
  }

  // Save detailed report
  try {
    const fs = await import("fs/promises")
    const reportPath = "reports/comprehensive-test-report.json"
    await fs.mkdir("reports", { recursive: true })
    await fs.writeFile(
      reportPath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          summary: {
            total: results.total,
            passed: results.passed,
            failed: results.failed,
            successRate: (results.passed / results.total) * 100,
          },
          details: results.details,
        },
        null,
        2,
      ),
    )
    console.log(`📄 Detailed report saved to ${reportPath}`)
  } catch (error) {
    console.error("❌ Failed to save report:", error.message)
  }
}

runAllTests().catch(console.error)
