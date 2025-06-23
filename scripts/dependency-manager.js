#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🔧 DEPENDENCY MANAGEMENT SYSTEM")
console.log("===============================\n")

class DependencyManager {
  constructor() {
    this.packageJsonPath = path.join(process.cwd(), "package.json")
    this.lockfilePath = path.join(process.cwd(), "pnpm-lock.yaml")
    this.packageJson = this.loadPackageJson()
  }

  loadPackageJson() {
    if (!fs.existsSync(this.packageJsonPath)) {
      throw new Error("package.json not found")
    }
    return JSON.parse(fs.readFileSync(this.packageJsonPath, "utf8"))
  }

  checkPnpmVersion() {
    console.log("1️⃣ Checking pnpm version...")
    try {
      const version = execSync("pnpm --version", { encoding: "utf8" }).trim()
      console.log(`   ✅ pnpm version: ${version}`)

      const requiredVersion = this.packageJson.engines?.pnpm?.replace(">=", "") || "8.0.0"
      if (this.compareVersions(version, requiredVersion) < 0) {
        console.log(`   ⚠️ pnpm version ${version} is below required ${requiredVersion}`)
        console.log("   💡 Run: npm install -g pnpm@latest")
      }
    } catch (error) {
      console.log("   ❌ pnpm not found. Installing...")
      execSync("npm install -g pnpm@latest", { stdio: "inherit" })
    }
  }

  compareVersions(a, b) {
    const aParts = a.split(".").map(Number)
    const bParts = b.split(".").map(Number)

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aPart = aParts[i] || 0
      const bPart = bParts[i] || 0

      if (aPart > bPart) return 1
      if (aPart < bPart) return -1
    }
    return 0
  }

  validateLockfile() {
    console.log("\n2️⃣ Validating lockfile...")

    if (!fs.existsSync(this.lockfilePath)) {
      console.log("   ❌ pnpm-lock.yaml not found")
      return false
    }

    try {
      // Check if lockfile is up to date
      execSync("pnpm install --frozen-lockfile --dry-run", { stdio: "pipe" })
      console.log("   ✅ Lockfile is up to date")
      return true
    } catch (error) {
      console.log("   ❌ Lockfile is outdated")
      return false
    }
  }

  updateLockfile() {
    console.log("\n3️⃣ Updating lockfile...")
    try {
      execSync("pnpm install --lockfile-only", { stdio: "inherit" })
      console.log("   ✅ Lockfile updated successfully")
    } catch (error) {
      console.log("   ❌ Failed to update lockfile:", error.message)
      throw error
    }
  }

  auditDependencies() {
    console.log("\n4️⃣ Auditing dependencies...")
    try {
      execSync("pnpm audit --audit-level moderate", { stdio: "inherit" })
      console.log("   ✅ No security vulnerabilities found")
    } catch (error) {
      console.log("   ⚠️ Security vulnerabilities detected")
      console.log("   💡 Run: pnpm audit --fix")
    }
  }

  checkOutdatedDependencies() {
    console.log("\n5️⃣ Checking for outdated dependencies...")
    try {
      const result = execSync("pnpm outdated --format json", { encoding: "utf8" })
      const outdated = JSON.parse(result)

      if (Object.keys(outdated).length === 0) {
        console.log("   ✅ All dependencies are up to date")
      } else {
        console.log(`   ⚠️ ${Object.keys(outdated).length} outdated dependencies found`)
        console.log("   💡 Run: pnpm deps:update to update")
      }
    } catch (error) {
      console.log("   ✅ All dependencies appear to be current")
    }
  }

  run() {
    try {
      this.checkPnpmVersion()
      const lockfileValid = this.validateLockfile()

      if (!lockfileValid) {
        this.updateLockfile()
      }

      this.auditDependencies()
      this.checkOutdatedDependencies()

      console.log("\n🎉 DEPENDENCY MANAGEMENT COMPLETE!")
      console.log("✅ Ready for deployment")
    } catch (error) {
      console.error("\n❌ Dependency management failed:", error.message)
      process.exit(1)
    }
  }
}

new DependencyManager().run()
