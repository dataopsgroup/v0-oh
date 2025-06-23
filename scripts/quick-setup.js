#!/usr/bin/env node

const crypto = require("crypto")

/**
 * Quick setup script - just generates the secret without modifying files
 */

console.log("🔐 CSRF Secret Generator")
console.log("========================\n")

const secret = crypto.randomBytes(32).toString("hex")

console.log("Your CSRF Secret:")
console.log(`CSRF_SECRET=${secret}`)

console.log("\n📝 Copy this line and add it to your .env.local file")
console.log("\n💡 Alternative methods to generate a secret:")
console.log("   • Command line: openssl rand -hex 32")
console.log("   • Node.js REPL: require('crypto').randomBytes(32).toString('hex')")
console.log("   • Online generator: (search for 'secure random string generator')")

console.log("\n🔒 Remember:")
console.log("   • Keep this secret secure")
console.log("   • Never commit it to version control")
console.log("   • Use different secrets for different environments")
