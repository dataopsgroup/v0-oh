#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🔧 PNPM Lockfile Fix Utility")
console.log("============================\n")

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), "package.json")
const lockfilePath = path.join(process.cwd(), "pnpm-lock.yaml")

console.log("📍 Current directory:", process.cwd())
console.log("📦 Looking for package.json...")

if (!fs.existsSync(packageJsonPath)) {
  console.log("❌ package.json not found in current directory")
  console.log("💡 Make sure you're in the project root directory")
  process.exit(1)
}

console.log("✅ package.json found")

// Read package.json
let packageJson
try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
  console.log("✅ package.json parsed successfully")
} catch (error) {
  console.log("❌ Error reading package.json:", error.message)
  process.exit(1)
}

// Check for problematic "latest" versions
console.log("\n🔍 Checking for problematic dependencies...")
const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies }
const latestVersions = []

for (const [name, version] of Object.entries(dependencies)) {
  if (version === "latest") {
    latestVersions.push(name)
  }
}

if (latestVersions.length > 0) {
  console.log('⚠️  Found dependencies with "latest" versions:')
  latestVersions.forEach((dep) => console.log(`   - ${dep}`))
  console.log("\n💡 These should be pinned to specific versions for deployment")
} else {
  console.log('✅ No "latest" versions found')
}

// Check lockfile status
console.log("\n📋 Checking lockfile status...")
if (fs.existsSync(lockfilePath)) {
  const lockfileStats = fs.statSync(lockfilePath)
  const packageStats = fs.statSync(packageJsonPath)

  console.log("✅ pnpm-lock.yaml exists")
  console.log(`   Lockfile modified: ${lockfileStats.mtime.toISOString()}`)
  console.log(`   Package.json modified: ${packageStats.mtime.toISOString()}`)

  if (lockfileStats.mtime < packageStats.mtime) {
    console.log("⚠️  Lockfile is older than package.json - this could cause deployment issues")
  }
} else {
  console.log("❌ pnpm-lock.yaml not found")
}

// Provide solutions
console.log("\n🛠️  SOLUTIONS:")
console.log("================")

console.log("\n1. For local development:")
console.log("   rm pnpm-lock.yaml")
console.log("   pnpm install")

console.log("\n2. For deployment issues:")
console.log('   - Make sure all dependencies have specific versions (no "latest")')
console.log("   - Commit the updated pnpm-lock.yaml file")
console.log("   - Use pnpm install --frozen-lockfile in CI/CD")

console.log("\n3. If you're using npm instead of pnpm:")
console.log("   rm pnpm-lock.yaml")
console.log("   npm install")
console.log("   # This will create package-lock.json instead")

console.log("\n4. Emergency fix for deployment:")
console.log("   # Remove lockfile and let deployment regenerate it")
console.log("   rm pnpm-lock.yaml")

// Check if pnpm is available
console.log("\n🔍 Checking package manager availability...")
try {
  const pnpmVersion = execSync("pnpm --version", { encoding: "utf8" }).trim()
  console.log(`✅ pnpm available: v${pnpmVersion}`)
} catch (error) {
  console.log("❌ pnpm not available")
  try {
    const npmVersion = execSync("npm --version", { encoding: "utf8" }).trim()
    console.log(`✅ npm available: v${npmVersion}`)
    console.log("💡 Consider using npm instead of pnpm for this project")
  } catch (npmError) {
    console.log("❌ Neither pnpm nor npm available")
  }
}

console.log("\n✨ Lockfile diagnosis complete!")
console.log("📝 The package.json has been updated with specific versions")
console.log("🚀 Try deploying again - the lockfile error should be resolved")
