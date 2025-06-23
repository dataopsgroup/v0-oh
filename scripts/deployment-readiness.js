#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🚀 COMPREHENSIVE DEPLOYMENT READINESS CHECK")
console.log("==========================================\n")

class DeploymentReadiness {
  constructor() {
    this.checks = []
    this.errors = []
    this.warnings = []
  }

  async runCheck(name, checkFn) {
    console.log(`🔍 ${name}...`)
    try {
      await checkFn()
      this.checks.push({ name, status: "✅ PASS" })
      console.log(`   ✅ ${name} passed`)
    } catch (error) {
      this.checks.push({ name, status: "❌ FAIL", error: error.message })
      this.errors.push(`${name}: ${error.message}`)
      console.log(`   ❌ ${name} failed: ${error.message}`)
    }
  }

  async checkDependencies() {
    // Check if lockfile exists and is up to date
    if (!fs.existsSync("pnpm-lock.yaml")) {
      throw new Error("pnpm-lock.yaml not found")
    }

    try {
      execSync("pnpm install --frozen-lockfile --dry-run", { stdio: "pipe" })
    } catch {
      throw new Error("Lockfile is outdated - run pnpm install")
    }
  }

  async checkBuild() {
    try {
      execSync("pnpm build", { stdio: "pipe" })
    } catch (error) {
      throw new Error("Build failed")
    }

    if (!fs.existsSync(".next")) {
      throw new Error("Build output not found")
    }
  }

  async checkEnvironment() {
    if (!fs.existsSync(".env.local")) {
      throw new Error(".env.local not found")
    }

    const envContent = fs.readFileSync(".env.local", "utf8")
    const requiredVars = ["RESEND_API_KEY", "CSRF_SECRET"]

    for (const varName of requiredVars) {
      if (!envContent.includes(`${varName}=`)) {
        throw new Error(`${varName} not configured`)
      }

      const value = envContent.match(new RegExp(`${varName}=(.*)`))?.[1]
      if (!value || value.includes("your_") || value.includes("here")) {
        throw new Error(`${varName} has placeholder value`)
      }
    }
  }

  async checkSecurity() {
    const envContent = fs.readFileSync(".env.local", "utf8")
    const csrfMatch = envContent.match(/CSRF_SECRET=(.*)/)

    if (!csrfMatch || !csrfMatch[1] || csrfMatch[1].trim().length < 32) {
      throw new Error("CSRF_SECRET must be at least 32 characters")
    }
  }

  async checkTypeScript() {
    try {
      execSync("pnpm type-check", { stdio: "pipe" })
    } catch {
      throw new Error("TypeScript compilation failed")
    }
  }

  async checkLinting() {
    try {
      execSync("pnpm lint", { stdio: "pipe" })
    } catch {
      throw new Error("Linting failed")
    }
  }

  generateReport() {
    console.log("\n📊 DEPLOYMENT READINESS REPORT")
    console.log("===============================")

    this.checks.forEach(({ name, status, error }) => {
      console.log(`${status} ${name}`)
      if (error) {
        console.log(`     ${error}`)
      }
    })

    const passedChecks = this.checks.filter((c) => c.status.includes("✅")).length
    const totalChecks = this.checks.length
    const score = Math.round((passedChecks / totalChecks) * 100)

    console.log(`\n📈 READINESS SCORE: ${score}% (${passedChecks}/${totalChecks} checks passed)`)

    if (score === 100) {
      console.log("🎉 READY FOR DEPLOYMENT!")
      return true
    } else if (score >= 80) {
      console.log("⚠️ DEPLOYMENT POSSIBLE WITH WARNINGS")
      return true
    } else {
      console.log("❌ NOT READY FOR DEPLOYMENT")
      return false
    }
  }

  async run() {
    await this.runCheck("Dependency Management", () => this.checkDependencies())
    await this.runCheck("Build Process", () => this.checkBuild())
    await this.runCheck("Environment Configuration", () => this.checkEnvironment())
    await this.runCheck("Security Configuration", () => this.checkSecurity())
    await this.runCheck("TypeScript Compilation", () => this.checkTypeScript())
    await this.runCheck("Code Linting", () => this.checkLinting())

    const isReady = this.generateReport()
    process.exit(isReady ? 0 : 1)
  }
}

new DeploymentReadiness().run()
