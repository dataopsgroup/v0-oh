#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🔧 FORCE LOCKFILE RESET")
console.log("=======================\n")

try {
  // 1. Remove all lockfiles
  console.log("1️⃣ Removing all lockfiles...")
  const lockfiles = ["pnpm-lock.yaml", "package-lock.json", "yarn.lock", "node_modules"]

  lockfiles.forEach((file) => {
    const filePath = path.join(process.cwd(), file)
    if (fs.existsSync(filePath)) {
      if (file === "node_modules") {
        console.log(`   🗑️ Removing ${file} directory...`)
        execSync(`rm -rf ${filePath}`, { stdio: "inherit" })
      } else {
        console.log(`   🗑️ Removing ${file}...`)
        fs.unlinkSync(filePath)
      }
    }
  })

  // 2. Clear pnpm cache
  console.log("\n2️⃣ Clearing pnpm cache...")
  try {
    execSync("pnpm store prune", { stdio: "inherit" })
    console.log("   ✅ pnpm cache cleared")
  } catch (error) {
    console.log("   ⚠️ Could not clear pnpm cache (this is okay)")
  }

  // 3. Fresh install
  console.log("\n3️⃣ Fresh installation...")
  execSync("pnpm install", { stdio: "inherit" })

  console.log("\n🎉 LOCKFILE RESET COMPLETE!")
  console.log("✅ Fresh pnpm-lock.yaml generated")
  console.log("🚀 Ready for deployment!")
} catch (error) {
  console.error("❌ Error during reset:", error.message)
  console.log("\n🔧 Manual steps:")
  console.log("   1. Delete pnpm-lock.yaml")
  console.log("   2. Delete node_modules")
  console.log("   3. Run: pnpm install")
  console.log("   4. Try deployment again")
}
