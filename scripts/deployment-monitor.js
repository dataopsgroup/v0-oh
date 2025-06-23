#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("📊 DEPLOYMENT MONITORING SYSTEM")
console.log("===============================\n")

class DeploymentMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), "deployment.log")
    this.errorLog = path.join(process.cwd(), "deployment-errors.log")
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${level}] ${message}\n`

    console.log(logEntry.trim())
    fs.appendFileSync(this.logFile, logEntry)

    if (level === "ERROR") {
      fs.appendFileSync(this.errorLog, logEntry)
    }
  }

  async monitorBuild() {
    this.log("Starting build monitoring...")

    try {
      // Pre-build checks
      this.log("Running pre-build checks...")
      execSync("npm run lint", { stdio: "pipe" })
      this.log("✅ Linting passed")

      execSync("npm run type-check", { stdio: "pipe" })
      this.log("✅ Type checking passed")

      // Build process
      this.log("Starting build process...")
      const buildStart = Date.now()

      execSync("npm run build", { stdio: "pipe" })

      const buildTime = Date.now() - buildStart
      this.log(`✅ Build completed in ${buildTime}ms`)

      // Post-build validation
      this.validateBuildOutput()

      this.log("🎉 Build monitoring completed successfully")
      return true
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, "ERROR")
      this.generateErrorReport(error)
      return false
    }
  }

  validateBuildOutput() {
    this.log("Validating build output...")

    const buildDir = path.join(process.cwd(), ".next")
    if (!fs.existsSync(buildDir)) {
      throw new Error("Build directory not found")
    }

    const staticDir = path.join(buildDir, "static")
    if (!fs.existsSync(staticDir)) {
      throw new Error("Static assets not generated")
    }

    this.log("✅ Build output validated")
  }

  generateErrorReport(error) {
    const report = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      environment: {
        node: process.version,
        platform: process.platform,
        arch: process.arch,
      },
      packageInfo: this.getPackageInfo(),
    }

    const reportPath = path.join(process.cwd(), "error-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

    this.log(`Error report generated: ${reportPath}`, "ERROR")
  }

  getPackageInfo() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"))
      return {
        name: packageJson.name,
        version: packageJson.version,
        dependencies: Object.keys(packageJson.dependencies || {}),
        devDependencies: Object.keys(packageJson.devDependencies || {}),
      }
    } catch {
      return null
    }
  }

  async run() {
    const success = await this.monitorBuild()
    process.exit(success ? 0 : 1)
  }
}

new DeploymentMonitor().run()
