#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

console.log("🎯 Final Environment Verification")
console.log("=================================\n")

// Load environment variables
require("dotenv").config({ path: ".env.local" })

const checks = []

// Check CSRF Secret
const csrfSecret = process.env.CSRF_SECRET
if (csrfSecret && csrfSecret.length === 64) {
  checks.push({ name: "CSRF_SECRET", status: "✅", message: "Valid 64-character secret" })
} else {
  checks.push({ name: "CSRF_SECRET", status: "❌", message: "Missing or invalid length" })
}

// Check Resend API Key
const resendKey = process.env.RESEND_API_KEY
if (resendKey && resendKey.startsWith("re_") && resendKey.length > 20) {
  checks.push({ name: "RESEND_API_KEY", status: "✅", message: "Valid Resend API key format" })
} else if (resendKey && !resendKey.includes("your-resend-api-key")) {
  checks.push({ name: "RESEND_API_KEY", status: "⚠️", message: "API key present but format unclear" })
} else {
  checks.push({ name: "RESEND_API_KEY", status: "❌", message: "Missing or placeholder value" })
}

// Check SMTP Configuration
const smtpChecks = [
  { key: "SMTP_HOST", expected: "smtp.resend.com" },
  { key: "SMTP_PORT", expected: "587" },
  { key: "SMTP_USER", expected: "resend" },
  { key: "SMTP_FROM", shouldContain: "@" },
]

smtpChecks.forEach((check) => {
  const value = process.env[check.key]
  if (check.expected && value === check.expected) {
    checks.push({ name: check.key, status: "✅", message: `Correct: ${value}` })
  } else if (check.shouldContain && value && value.includes(check.shouldContain)) {
    checks.push({ name: check.key, status: "✅", message: `Valid email format: ${value}` })
  } else if (value) {
    checks.push({ name: check.key, status: "⚠️", message: `Set to: ${value}` })
  } else {
    checks.push({ name: check.key, status: "❌", message: "Missing" })
  }
})

// Display results
console.log("📋 Environment Variable Status:")
console.log("─".repeat(60))

checks.forEach((check) => {
  console.log(`${check.status} ${check.name.padEnd(20)} ${check.message}`)
})

console.log("\n🔍 Security Check:")
console.log("─".repeat(30))

const securityIssues = []

if (process.env.CSRF_SECRET && process.env.CSRF_SECRET.length < 32) {
  securityIssues.push("CSRF_SECRET too short")
}

if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.includes("your-resend-api-key")) {
  securityIssues.push("RESEND_API_KEY still has placeholder value")
}

if (securityIssues.length === 0) {
  console.log("✅ No security issues detected")
} else {
  console.log("⚠️  Security issues found:")
  securityIssues.forEach((issue) => console.log(`   • ${issue}`))
}

// Overall status
const criticalIssues = checks.filter((c) => c.status === "❌").length
const warnings = checks.filter((c) => c.status === "⚠️").length

console.log("\n🎯 Overall Status:")
console.log("─".repeat(20))

if (criticalIssues === 0 && warnings === 0) {
  console.log("🎉 Perfect! Everything is configured correctly.")
  console.log("\n✨ You're ready to:")
  console.log("   • Start your development server: npm run dev")
  console.log("   • Test your contact forms")
  console.log("   • Deploy to production")
} else if (criticalIssues === 0) {
  console.log("✅ Good! Setup is functional with minor warnings.")
  console.log(`   ${warnings} warning(s) - review items marked with ⚠️`)
} else {
  console.log("⚠️  Setup needs attention.")
  console.log(`   ${criticalIssues} critical issue(s) - fix items marked with ❌`)
  console.log(`   ${warnings} warning(s) - review items marked with ⚠️`)
}

console.log("\n🚀 Next Steps:")
if (criticalIssues === 0) {
  console.log("   1. Start development server: npm run dev")
  console.log("   2. Test contact form functionality")
  console.log("   3. Monitor for any runtime errors")
} else {
  console.log("   1. Fix critical issues above")
  console.log("   2. Re-run this verification: node scripts/final-verification.js")
  console.log("   3. Start development server when all issues resolved")
}
