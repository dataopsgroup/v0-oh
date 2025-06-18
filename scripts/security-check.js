#!/usr/bin/env node

/**
 * Security and Dependency Update Script
 * Run this monthly or before deployments
 */

const { execSync } = require("child_process")
const fs = require("fs")

console.log("🔍 Starting security and dependency check...\n")

try {
  // 1. Check for security vulnerabilities
  console.log("1. Running security audit...")
  execSync("npm audit", { stdio: "inherit" })

  // 2. Check for outdated packages
  console.log("\n2. Checking for outdated packages...")
  execSync("npm outdated", { stdio: "inherit" })

  // 3. Update patch and minor versions
  console.log("\n3. Updating patch and minor versions...")
  execSync("npm update", { stdio: "inherit" })

  // 4. Check for major version updates
  console.log("\n4. Checking for major version updates...")
  execSync("npx npm-check-updates", { stdio: "inherit" })

  console.log("\n✅ Security check completed!")
  console.log("\n📋 Next steps:")
  console.log("- Review any security vulnerabilities above")
  console.log("- Consider major version updates shown")
  console.log("- Test your application after updates")
  console.log("- Run: npm run build && npm run test")
} catch (error) {
  console.error("❌ Error during security check:", error.message)
  process.exit(1)
}
