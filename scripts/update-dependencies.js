#!/usr/bin/env node

/**
 * Safe Dependency Update Script
 * Updates dependencies with safety checks
 */

const { execSync } = require("child_process")

console.log("🔄 Starting safe dependency update...\n")

try {
  // Backup package.json
  console.log("1. Backing up package.json...")
  execSync("cp package.json package.json.backup")

  // Update patch versions (safe)
  console.log("2. Updating patch versions...")
  execSync("npm update", { stdio: "inherit" })

  // Check build after updates
  console.log("3. Testing build after updates...")
  execSync("npm run build", { stdio: "inherit" })

  console.log("\n✅ Dependencies updated successfully!")
  console.log("🗑️  You can remove package.json.backup if everything works")
} catch (error) {
  console.error("❌ Update failed, restoring backup...")
  execSync("mv package.json.backup package.json")
  console.error("Error:", error.message)
  process.exit(1)
}
