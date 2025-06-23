#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

/**
 * Check the current project structure and locate where .env.local should be
 */

console.log("📁 Project Structure Check")
console.log("==========================\n")

const currentDir = process.cwd()
console.log(`📍 Current directory: ${currentDir}`)

// Check for key files that indicate we're in the right place
const keyFiles = ["package.json", "next.config.mjs", "tailwind.config.ts", "app/layout.tsx", ".gitignore"]

console.log("\n🔍 Looking for key project files:")
keyFiles.forEach((file) => {
  const filePath = path.join(currentDir, file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} - Found`)
  } else {
    console.log(`❌ ${file} - Not found`)
  }
})

// Check for existing env files
console.log("\n🔧 Environment files:")
const envFiles = [".env", ".env.local", ".env.example", ".env.development"]
envFiles.forEach((file) => {
  const filePath = path.join(currentDir, file)
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} - Exists`)
  } else {
    console.log(`❌ ${file} - Not found`)
  }
})

// List all files in current directory
console.log("\n📂 Files in current directory:")
try {
  const files = fs.readdirSync(currentDir)
  files.slice(0, 20).forEach((file) => {
    const filePath = path.join(currentDir, file)
    const stats = fs.statSync(filePath)
    const type = stats.isDirectory() ? "📁" : "📄"
    console.log(`   ${type} ${file}`)
  })

  if (files.length > 20) {
    console.log(`   ... and ${files.length - 20} more files`)
  }
} catch (error) {
  console.log("   Error reading directory:", error.message)
}

console.log("\n💡 Where .env.local should be:")
console.log(`   ${path.join(currentDir, ".env.local")}`)

console.log("\n🚀 To create .env.local file:")
console.log("   node scripts/create-env-file.js")
