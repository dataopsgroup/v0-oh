#!/usr/bin/env node

/**
 * Dependency Update Script
 * Updates project dependencies to their latest compatible versions
 */

const { execSync } = require("child_process")

console.log("🔄 Starting dependency update process...\n")

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
  // 1. Check current package status
  console.log("1. Checking current package status...")
  try {
    execSync("npm outdated", { stdio: "inherit" })
  } catch (error) {
    // npm outdated exits with code 1 when packages are outdated, this is normal
    console.log("ℹ️  Package status check completed")
  }

  // 2. Update patch and minor versions
  console.log("\n2. Updating patch and minor versions...")
  const updateResult = runCommand("npm update", "Package updates")

  // 3. Install any missing dependencies
  console.log("\n3. Installing dependencies...")
  const installResult = runCommand("npm install", "Dependency installation")

  // 4. Run build test to ensure compatibility
  console.log("\n4. Testing build compatibility...")
  const buildResult = runCommand("npm run build", "Build test")

  console.log("\n✅ Dependency update completed!")
  console.log("\n📋 Summary:")
  console.log(`- Package updates: ${updateResult ? "✅ Completed" : "❌ Failed"}`)
  console.log(`- Installation: ${installResult ? "✅ Completed" : "❌ Failed"}`)
  console.log(`- Build test: ${buildResult ? "✅ Passed" : "❌ Failed"}`)

  console.log("\n🔧 Next steps:")
  console.log("- Test your application locally: npm run dev")
  console.log("- Verify all pages load correctly")
  console.log("- Check for any TypeScript errors")

  if (!buildResult) {
    console.log("\n⚠️  Build failed - check for compatibility issues")
    console.log("- Review error messages above")
    console.log("- Consider rolling back problematic updates")
  }
} catch (error) {
  console.error("❌ Unexpected error during dependency update:", error.message)
  process.exit(1)
}
