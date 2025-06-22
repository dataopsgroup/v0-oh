#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

console.log("🔍 DIAGNOSTIC CHECK")
console.log("==================\n")

console.log("📍 Current working directory:", process.cwd())
console.log("📅 Check time:", new Date().toISOString())

// Check if scripts directory exists
const scriptsDir = path.join(process.cwd(), "scripts")
console.log("\n📁 Scripts directory check:")
console.log(`   Path: ${scriptsDir}`)

if (fs.existsSync(scriptsDir)) {
  console.log("✅ Scripts directory exists")

  try {
    const files = fs.readdirSync(scriptsDir)
    console.log(`   Found ${files.length} files:`)

    files.forEach((file) => {
      const filePath = path.join(scriptsDir, file)
      const stats = fs.statSync(filePath)
      console.log(`   📄 ${file} (${stats.size} bytes, modified: ${stats.mtime.toISOString()})`)
    })
  } catch (error) {
    console.log("❌ Error reading scripts directory:", error.message)
  }
} else {
  console.log("❌ Scripts directory does not exist")
}

// List what we can see in the current directory
console.log("\n📂 Current directory contents:")
try {
  const files = fs.readdirSync(process.cwd())
  files.forEach((file) => {
    const filePath = path.join(process.cwd(), file)
    const stats = fs.statSync(filePath)
    const type = stats.isDirectory() ? "📁" : "📄"
    console.log(`   ${type} ${file}`)
  })
} catch (error) {
  console.log("❌ Error reading current directory:", error.message)
}

console.log("\n🔧 Environment check:")
console.log("   Node version:", process.version)
console.log("   Platform:", process.platform)

console.log("\n💡 If scripts are missing:")
console.log("   1. Check if you're in the right directory")
console.log("   2. Look for the scripts folder in your file explorer")
console.log("   3. The CodeProject might not be syncing properly")
