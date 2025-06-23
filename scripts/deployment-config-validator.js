#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

console.log("⚙️ DEPLOYMENT CONFIGURATION VALIDATOR")
console.log("=====================================\n")

class DeploymentConfigValidator {
  constructor() {
    this.errors = []
    this.warnings = []
  }

  checkVercelConfig() {
    console.log("1️⃣ Checking Vercel configuration...")

    const vercelConfigPath = path.join(process.cwd(), "vercel.json")
    if (!fs.existsSync(vercelConfigPath)) {
      this.warnings.push("vercel.json not found - using defaults")
      return
    }

    try {
      const config = JSON.parse(fs.readFileSync(vercelConfigPath, "utf8"))

      // Check essential configurations
      if (!config.buildCommand) {
        this.warnings.push("No buildCommand specified in vercel.json")
      }

      if (!config.installCommand) {
        this.warnings.push("No installCommand specified in vercel.json")
      }

      if (config.installCommand && !config.installCommand.includes("--frozen-lockfile")) {
        this.errors.push("installCommand should include --frozen-lockfile for reliable builds")
      }

      console.log("   ✅ Vercel configuration validated")
    } catch (error) {
      this.errors.push("Invalid vercel.json format")
    }
  }

  checkEnvironmentVariables() {
    console.log("\n2️⃣ Checking environment variables...")

    const requiredVars = [
      { name: "RESEND_API_KEY", required: true },
      { name: "CSRF_SECRET", required: true },
      { name: "NEXT_PUBLIC_APP_URL", required: false },
    ]

    const envExamplePath = path.join(process.cwd(), ".env.example")
    const envLocalPath = path.join(process.cwd(), ".env.local")

    if (!fs.existsSync(envExamplePath)) {
      this.warnings.push(".env.example not found - create for documentation")
    }

    if (fs.existsSync(envLocalPath)) {
      const envContent = fs.readFileSync(envLocalPath, "utf8")

      requiredVars.forEach(({ name, required }) => {
        if (envContent.includes(`${name}=`)) {
          const value = envContent.match(new RegExp(`${name}=(.*)`))?.[1]
          if (!value || value.includes("your_") || value.includes("here")) {
            if (required) {
              this.errors.push(`${name} has placeholder value - set real value`)
            } else {
              this.warnings.push(`${name} has placeholder value`)
            }
          } else {
            console.log(`   ✅ ${name} configured`)
          }
        } else if (required) {
          this.errors.push(`Required environment variable ${name} not found`)
        }
      })
    } else {
      this.errors.push(".env.local not found - required for deployment")
    }
  }

  checkSecurityConfiguration() {
    console.log("\n3️⃣ Checking security configuration...")

    // Check if CSRF secret is properly configured
    const envLocalPath = path.join(process.cwd(), ".env.local")
    if (fs.existsSync(envLocalPath)) {
      const envContent = fs.readFileSync(envLocalPath, "utf8")
      const csrfMatch = envContent.match(/CSRF_SECRET=(.*)/)

      if (csrfMatch && csrfMatch[1]) {
        const csrfSecret = csrfMatch[1].trim()
        if (csrfSecret.length < 32) {
          this.errors.push("CSRF_SECRET must be at least 32 characters long")
        } else {
          console.log("   ✅ CSRF_SECRET properly configured")
        }
      }
    }

    // Check Next.js security headers
    const nextConfigPath = path.join(process.cwd(), "next.config.mjs")
    if (fs.existsSync(nextConfigPath)) {
      const configContent = fs.readFileSync(nextConfigPath, "utf8")
      if (configContent.includes("X-Frame-Options")) {
        console.log("   ✅ Security headers configured")
      } else {
        this.warnings.push("Consider adding security headers to next.config.mjs")
      }
    }
  }

  checkBuildConfiguration() {
    console.log("\n4️⃣ Checking build configuration...")

    const packageJsonPath = path.join(process.cwd(), "package.json")
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))

    // Check essential scripts
    const requiredScripts = ["build", "start", "dev"]
    requiredScripts.forEach((script) => {
      if (!packageJson.scripts?.[script]) {
        this.errors.push(`Missing required script: ${script}`)
      } else {
        console.log(`   ✅ ${script} script configured`)
      }
    })

    // Check engines
    if (!packageJson.engines?.node) {
      this.warnings.push("No Node.js engine specified - add to package.json")
    }
  }

  generateReport() {
    console.log("\n📊 DEPLOYMENT CONFIGURATION REPORT")
    console.log("===================================")

    if (this.errors.length === 0) {
      console.log("🎉 NO CRITICAL CONFIGURATION ERRORS!")
    } else {
      console.log(`❌ CONFIGURATION ERRORS: ${this.errors.length}`)
      this.errors.forEach((error) => console.log(`   • ${error}`))
    }

    if (this.warnings.length > 0) {
      console.log(`\n⚠️ CONFIGURATION WARNINGS: ${this.warnings.length}`)
      this.warnings.forEach((warning) => console.log(`   • ${warning}`))
    }

    const score = Math.max(0, 100 - this.errors.length * 20 - this.warnings.length * 5)
    console.log(`\n📈 CONFIGURATION SCORE: ${score}%`)

    return score >= 80
  }

  run() {
    this.checkVercelConfig()
    this.checkEnvironmentVariables()
    this.checkSecurityConfiguration()
    this.checkBuildConfiguration()

    const isReady = this.generateReport()
    console.log(isReady ? "\n🟢 DEPLOYMENT CONFIGURATION READY" : "\n🔴 FIX CONFIGURATION ISSUES")

    return isReady
  }
}

new DeploymentConfigValidator().run()
