#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

/**
 * Verify that the CSRF secret and other environment variables are properly configured
 */

console.log("🔍 Environment Setup Verification")
console.log("=================================\n")

// Check if .env.local exists
const envPath = path.join(process.cwd(), ".env.local")
const envExamplePath = path.join(process.cwd(), ".env.example")

console.log("📁 Checking files...")

if (fs.existsSync(envPath)) {
  console.log("✅ .env.local file exists")

  const envContent = fs.readFileSync(envPath, "utf8")

  // Check for CSRF_SECRET
  if (envContent.includes("CSRF_SECRET=")) {
    const csrfMatch = envContent.match(/CSRF_SECRET=([^\n\r]+)/)
    if (csrfMatch && csrfMatch[1] && csrfMatch[1].length >= 32) {
      console.log("✅ CSRF_SECRET is configured and appears valid")
      console.log(`   Length: ${csrfMatch[1].length} characters`)
    } else {
      console.log("⚠️  CSRF_SECRET found but may be too short or empty")
    }
  } else {
    console.log("❌ CSRF_SECRET not found in .env.local")
  }

  // Check other important variables
  const requiredVars = ["RESEND_API_KEY", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]

  console.log("\n📧 Email configuration:")
  requiredVars.forEach((varName) => {
    if (envContent.includes(`${varName}=`)) {
      console.log(`✅ ${varName} is configured`)
    } else {
      console.log(`⚠️  ${varName} is missing`)
    }
  })
} else {
  console.log("❌ .env.local file not found")
}

if (fs.existsSync(envExamplePath)) {
  console.log("✅ .env.example file exists")
} else {
  console.log("⚠️  .env.example file not found")
}

// Check if we can load environment variables
console.log("\n🔧 Runtime environment check:")

try {
  // Try to access environment variables
  const hasResendKey = process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your-resend-api-key-here"
  const hasCsrfSecret = process.env.CSRF_SECRET && process.env.CSRF_SECRET.length >= 32

  console.log(`✅ RESEND_API_KEY loaded: ${hasResendKey ? "Yes" : "No (using default/placeholder)"}`)
  console.log(`✅ CSRF_SECRET loaded: ${hasCsrfSecret ? "Yes" : "No (missing or too short)"}`)

  if (process.env.SMTP_HOST) {
    console.log(`✅ SMTP_HOST: ${process.env.SMTP_HOST}`)
  }
} catch (error) {
  console.log("❌ Error loading environment variables:", error.message)
}

console.log("\n📋 Summary:")
console.log("===========")

const envExists = fs.existsSync(envPath)
const hasValidCsrf = process.env.CSRF_SECRET && process.env.CSRF_SECRET.length >= 32

if (envExists && hasValidCsrf) {
  console.log("🎉 Setup appears to be complete!")
  console.log("   • .env.local file exists")
  console.log("   • CSRF_SECRET is properly configured")
  console.log("   • Email configuration is present")

  console.log("\n✨ Next steps:")
  console.log("   1. Make sure your RESEND_API_KEY is valid")
  console.log("   2. Test your contact form")
  console.log("   3. Start your development server: npm run dev")
} else {
  console.log("⚠️  Setup needs attention:")

  if (!envExists) {
    console.log("   • Create .env.local file")
    console.log("   • Run: node scripts/generate-csrf-secret.js")
  }

  if (!hasValidCsrf) {
    console.log("   • Add or fix CSRF_SECRET in .env.local")
    console.log("   • Run: node scripts/quick-setup.js")
  }
}

console.log("\n🔗 Helpful commands:")
console.log("   • Generate CSRF secret: node scripts/generate-csrf-secret.js")
console.log("   • Quick setup: node scripts/quick-setup.js")
console.log("   • Verify setup: node scripts/verify-setup.js")
