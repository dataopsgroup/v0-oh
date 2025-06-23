#!/usr/bin/env node

const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

/**
 * Generate a secure CSRF secret for your application
 */

function generateSecureSecret() {
  return crypto.randomBytes(32).toString("hex")
}

function updateEnvFile() {
  const envPath = path.join(process.cwd(), ".env.local")
  const secret = generateSecureSecret()

  console.log("🔐 Generated CSRF Secret:", secret)
  console.log("\n📝 Add this to your .env.local file:")
  console.log(`CSRF_SECRET=${secret}`)

  // Check if .env.local exists
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8")

    if (envContent.includes("CSRF_SECRET=")) {
      console.log("\n⚠️  CSRF_SECRET already exists in .env.local")
      console.log("   Replace the existing value with the new one above")
    } else {
      // Append to existing .env.local
      fs.appendFileSync(envPath, `\n# CSRF Protection Secret\nCSRF_SECRET=${secret}\n`)
      console.log("\n✅ Added CSRF_SECRET to .env.local")
    }
  } else {
    // Create new .env.local
    const envContent = `# Environment variables for local development
# Generated on ${new Date().toISOString()}

# Email Configuration (already exists)
RESEND_API_KEY=${process.env.RESEND_API_KEY || "your-resend-api-key"}
SMTP_HOST=${process.env.SMTP_HOST || "smtp.resend.com"}
SMTP_PORT=${process.env.SMTP_PORT || "587"}
SMTP_USER=${process.env.SMTP_USER || "resend"}
SMTP_PASS=${process.env.SMTP_PASS || "your-resend-api-key"}
SMTP_FROM=${process.env.SMTP_FROM || "noreply@email.dataopsgroup.com"}

# CSRF Protection Secret
CSRF_SECRET=${secret}

# Optional: Error tracking (if you want to use external service)
# SENTRY_DSN=your-sentry-dsn
# DATADOG_API_KEY=your-datadog-key
`

    fs.writeFileSync(envPath, envContent)
    console.log("\n✅ Created .env.local with CSRF_SECRET")
  }
}

// Main execution
console.log("🚀 CSRF Secret Generator")
console.log("========================\n")

updateEnvFile()

console.log("\n📋 What is CSRF_SECRET?")
console.log("   - A secret key used to sign CSRF tokens")
console.log("   - Protects against Cross-Site Request Forgery attacks")
console.log("   - Should be kept secret and never exposed publicly")
console.log("   - Should be different for each environment")

console.log("\n🔒 Security Notes:")
console.log("   - Keep this secret secure")
console.log("   - Use different secrets for dev/staging/production")
console.log("   - Never commit secrets to version control")
console.log("   - Rotate secrets periodically")

console.log("\n✨ Next Steps:")
console.log("   1. Restart your development server")
console.log("   2. The CSRF protection is now active")
console.log("   3. Forms will be protected against CSRF attacks")
