#!/usr/bin/env node

/**
 * Security and Dependency Update Script
 * Compatible with GitHub Codespaces and CI/CD
 */

const { execSync } = require("child_process")

console.log("🔍 Starting security and dependency check...\n")

function runCommand(command, description) {
  try {
    console.log(`${description}...`)
    execSync(command, { stdio: "inherit" })
    return true
  } catch (error) {
    console.error(`❌ Failed: ${description}`)
    console.error(`Command: ${command}`)
    console.error(`Error: ${error.message}`)
    return false
  }
}

try {
  // 1. Check for security vulnerabilities
  console.log("1. Running security audit...")
  const auditResult = runCommand("npm audit --audit-level moderate", "Security audit")

  // 2. Check for outdated packages (non-blocking)
  console.log("\n2. Checking for outdated packages...")
  try {
    execSync("npm outdated", { stdio: "inherit" })
  } catch (error) {
    // npm outdated exits with code 1 when packages are outdated, this is normal
    console.log("ℹ️  Some packages may be outdated (this is normal)")
  }

  // 3. Update patch and minor versions
  console.log("\n3. Updating patch and minor versions...")
  const updateResult = runCommand("npm update", "Package updates")

  console.log("\n✅ Security check completed!")
  console.log("\n📋 Summary:")
  console.log(`- Security audit: ${auditResult ? "✅ Passed" : "❌ Issues found"}`)
  console.log(`- Package updates: ${updateResult ? "✅ Completed" : "❌ Failed"}`)
  console.log("\n🔧 Next steps:")
  console.log("- Review any security vulnerabilities above")
  console.log("- Test your application: npm run build")
  console.log("- Consider major version updates manually")
} catch (error) {
  console.error("❌ Unexpected error during security check:", error.message)
  process.exit(1)
}
