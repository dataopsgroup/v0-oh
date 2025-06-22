#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🏗️ BUILD ENVIRONMENT VALIDATOR")
console.log("==============================\n")

class BuildValidator {
  constructor() {
    this.errors = []
    this.warnings = []
  }

  checkNodeVersion() {
    console.log("1️⃣ Checking Node.js version...")
    const nodeVersion = process.version
    const requiredVersion = "18.17.0"

    console.log(`   Current: ${nodeVersion}`)
    console.log(`   Required: >= ${requiredVersion}`)

    if (this.compareVersions(nodeVersion.slice(1), requiredVersion) < 0) {
      this.errors.push(`Node.js version ${nodeVersion} is below required ${requiredVersion}`)
    } else {
      console.log("   ✅ Node.js version is compatible")
    }
  }

  checkTypeScript() {
    console.log("\n2️⃣ Checking TypeScript configuration...")

    const tsconfigPath = path.join(process.cwd(), "tsconfig.json")
    if (!fs.existsSync(tsconfigPath)) {
      this.errors.push("tsconfig.json not found")
      return
    }

    try {
      execSync("npx tsc --noEmit", { stdio: "pipe" })
      console.log("   ✅ TypeScript compilation successful")
    } catch (error) {
      this.errors.push("TypeScript compilation failed")
      console.log("   ❌ TypeScript errors found")
    }
  }

  checkNextConfig() {
    console.log("\n3️⃣ Checking Next.js configuration...")

    const nextConfigPath = path.join(process.cwd(), "next.config.mjs")
    if (!fs.existsSync(nextConfigPath)) {
      this.warnings.push("next.config.mjs not found - using defaults")
    } else {
      console.log("   ✅ Next.js configuration found")
    }
  }

  checkBuildProcess() {
    console.log("\n4️⃣ Testing build process...")

    try {
      console.log("   Building application...")
      execSync("npm run build", { stdio: "pipe" })
      console.log("   ✅ Build successful")

      // Check if build output exists
      const buildDir = path.join(process.cwd(), ".next")
      if (fs.existsSync(buildDir)) {
        console.log("   ✅ Build output generated")
      } else {
        this.errors.push("Build output directory not found")
      }
    } catch (error) {
      this.errors.push("Build process failed")
      console.log("   ❌ Build failed")
    }
  }

  checkEnvironmentVariables() {
    console.log("\n5️⃣ Checking environment variables...")

    const envPath = path.join(process.cwd(), ".env.local")
    if (fs.existsSync(envPath)) {
      console.log("   ✅ Environment file found")

      const envContent = fs.readFileSync(envPath, "utf8")
      const requiredVars = ["RESEND_API_KEY", "CSRF_SECRET"]

      requiredVars.forEach((varName) => {
        if (envContent.includes(`${varName}=`)) {
          console.log(`   ✅ ${varName} configured`)
        } else {
          this.warnings.push(`${varName} not found in environment`)
        }
      })
    } else {
      this.warnings.push("No .env.local file found")
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

  generateReport() {
    console.log("\n📊 BUILD VALIDATION REPORT")
    console.log("==========================")

    if (this.errors.length === 0) {
      console.log("🎉 NO CRITICAL ERRORS!")
    } else {
      console.log(`❌ ERRORS: ${this.errors.length}`)
      this.errors.forEach((error) => console.log(`   • ${error}`))
    }

    if (this.warnings.length > 0) {
      console.log(`\n⚠️ WARNINGS: ${this.warnings.length}`)
      this.warnings.forEach((warning) => console.log(`   • ${warning}`))
    }

    const score = Math.max(0, 100 - this.errors.length * 25 - this.warnings.length * 5)
    console.log(`\n📈 BUILD READINESS: ${score}%`)

    if (score >= 90) {
      console.log("🟢 READY FOR DEPLOYMENT")
      return true
    } else if (score >= 70) {
      console.log("🟡 DEPLOYMENT POSSIBLE WITH WARNINGS")
      return true
    } else {
      console.log("🔴 NOT READY - FIX CRITICAL ERRORS")
      return false
    }
  }

  run() {
    this.checkNodeVersion()
    this.checkTypeScript()
    this.checkNextConfig()
    this.checkBuildProcess()
    this.checkEnvironmentVariables()

    const isReady = this.generateReport()
    process.exit(isReady ? 0 : 1)
  }
}

new BuildValidator().run()
