#!/usr/bin/env node

/**
 * Simple script to show what the quick-setup.js generated
 */

const crypto = require("crypto")

console.log("🔍 Last Generated CSRF Secret Info")
console.log("==================================\n")

// Generate a new one to show format
const exampleSecret = crypto.randomBytes(32).toString("hex")

console.log("📋 Expected format:")
console.log(`CSRF_SECRET=${exampleSecret}`)
console.log(`Length: ${exampleSecret.length} characters`)

console.log("\n🔧 To check if yours worked:")
console.log("1. Look in your .env.local file")
console.log("2. Find the line starting with CSRF_SECRET=")
console.log("3. Make sure it's 64 characters long")
console.log("4. Make sure it contains only letters and numbers")

console.log("\n📁 Your .env.local should contain:")
console.log("   CSRF_SECRET=your_64_character_string")
console.log("   RESEND_API_KEY=your_resend_key")
console.log("   SMTP_HOST=smtp.resend.com")
console.log("   (and other email settings)")

console.log("\n🚀 Run this to verify everything:")
console.log("   node scripts/verify-setup.js")
