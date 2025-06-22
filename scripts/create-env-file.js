#!/usr/bin/env node

const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

/**
 * Create .env.local file with all necessary environment variables
 */

console.log("🚀 Creating .env.local file")
console.log("===========================\n")

const envPath = path.join(process.cwd(), ".env.local")

// Generate a secure CSRF secret
const csrfSecret = crypto.randomBytes(32).toString("hex")

// Create the .env.local content
const envContent = `# Environment variables for local development
# Created on ${new Date().toISOString()}
# 
# IMPORTANT: This file contains secrets - never commit to version control!

# Email Configuration (Resend API)
RESEND_API_KEY=your-resend-api-key-here
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASS=your-resend-api-key-here
SMTP_FROM=noreply@dataopsgroup.com

# CSRF Protection Secret (Auto-generated)
CSRF_SECRET=${csrfSecret}

# Optional: Error Tracking Services
# SENTRY_DSN=your-sentry-dsn-here
# DATADOG_API_KEY=your-datadog-key-here

# Optional: Analytics
# GOOGLE_ANALYTICS_ID=your-ga-id-here

# Development Settings
NODE_ENV=development
`

try {
  // Check if file already exists
  if (fs.existsSync(envPath)) {
    console.log("⚠️  .env.local already exists!")
    console.log("   Current file will be backed up as .env.local.backup")

    // Create backup
    const backupPath = path.join(process.cwd(), ".env.local.backup")
    fs.copyFileSync(envPath, backupPath)
    console.log("✅ Backup created: .env.local.backup")
  }

  // Write the new .env.local file
  fs.writeFileSync(envPath, envContent)

  console.log("✅ Created .env.local file successfully!")
  console.log(`📍 Location: ${envPath}`)

  console.log("\n🔐 Generated CSRF Secret:")
  console.log(`   ${csrfSecret}`)
  console.log(`   Length: ${csrfSecret.length} characters`)

  console.log("\n📧 Email Configuration:")
  console.log("   • RESEND_API_KEY: Replace with your actual Resend API key")
  console.log("   • SMTP settings are pre-configured for Resend")
  console.log("   • Update SMTP_FROM with your verified domain")

  console.log("\n📁 File Contents Preview:")
  console.log("─".repeat(50))
  console.log(envContent.split("\n").slice(0, 15).join("\n"))
  console.log("   ... (and more)")
  console.log("─".repeat(50))

  console.log("\n✨ Next Steps:")
  console.log("1. 📝 Edit .env.local and replace 'your-resend-api-key-here' with your actual Resend API key")
  console.log("2. 🔧 Update SMTP_FROM with your verified email domain")
  console.log("3. 🚀 Restart your development server: npm run dev")
  console.log("4. ✅ Run verification: node scripts/verify-setup.js")

  console.log("\n🔒 Security Reminder:")
  console.log("   • Never commit .env.local to version control")
  console.log("   • Keep your API keys secret")
  console.log("   • Use different secrets for production")
} catch (error) {
  console.error("❌ Error creating .env.local file:", error.message)
  console.log("\n🛠️  Manual Creation:")
  console.log("1. Create a file named '.env.local' in your project root")
  console.log("2. Copy and paste this content:")
  console.log("\n" + envContent)
}
