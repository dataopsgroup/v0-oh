#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🚨 EMERGENCY LOCKFILE FIX")
console.log("========================\n")

class EmergencyLockfileFix {
  constructor() {
    this.projectRoot = process.cwd()
    this.lockfilePath = path.join(this.projectRoot, "pnpm-lock.yaml")
    this.packageJsonPath = path.join(this.projectRoot, "package.json")
    this.nodeModulesPath = path.join(this.projectRoot, "node_modules")
  }

  checkFiles() {
    console.log("1️⃣ Checking project files...")

    const packageJsonExists = fs.existsSync(this.packageJsonPath)
    const lockfileExists = fs.existsSync(this.lockfilePath)
    const nodeModulesExists = fs.existsSync(this.nodeModulesPath)

    console.log(`   📄 package.json: ${packageJsonExists ? "✅" : "❌"}`)
    console.log(`   🔒 pnpm-lock.yaml: ${lockfileExists ? "✅" : "❌"}`)
    console.log(`   📁 node_modules: ${nodeModulesExists ? "✅" : "❌"}`)

    if (!packageJsonExists) {
      throw new Error("package.json is missing! Cannot proceed.")
    }

    return { packageJsonExists, lockfileExists, nodeModulesExists }
  }

  cleanInstall() {
    console.log("\n2️⃣ Performing clean installation...")

    try {
      // Remove node_modules if it exists
      if (fs.existsSync(this.nodeModulesPath)) {
        console.log("   🧹 Removing existing node_modules...")
        execSync(`rm -rf "${this.nodeModulesPath}"`, { stdio: "pipe" })
      }

      // Remove existing lockfile if it exists
      if (fs.existsSync(this.lockfilePath)) {
        console.log("   🧹 Removing existing lockfile...")
        fs.unlinkSync(this.lockfilePath)
      }

      // Clear pnpm cache
      console.log("   🧹 Clearing pnpm cache...")
      try {
        execSync("pnpm store prune", { stdio: "pipe" })
      } catch (error) {
        console.log("   ⚠️ Could not clear pnpm cache (continuing anyway)")
      }

      console.log("   ✅ Cleanup complete")
    } catch (error) {
      console.log(`   ⚠️ Cleanup warning: ${error.message}`)
    }
  }

  generateLockfile() {
    console.log("\n3️⃣ Generating fresh lockfile...")

    try {
      console.log("   📦 Running pnpm install...")
      execSync("pnpm install", {
        stdio: "inherit",
        cwd: this.projectRoot,
      })

      console.log("   ✅ Fresh lockfile generated successfully!")

      // Verify the lockfile was created
      if (fs.existsSync(this.lockfilePath)) {
        const stats = fs.statSync(this.lockfilePath)
        console.log(`   📊 Lockfile size: ${(stats.size / 1024).toFixed(2)} KB`)
        console.log(`   📅 Created: ${stats.birthtime.toISOString()}`)
      } else {
        throw new Error("Lockfile was not created despite successful install")
      }
    } catch (error) {
      console.error("   ❌ Failed to generate lockfile:", error.message)
      throw error
    }
  }

  validateInstallation() {
    console.log("\n4️⃣ Validating installation...")

    try {
      // Test frozen lockfile install
      console.log("   🧪 Testing frozen lockfile install...")
      execSync("pnpm install --frozen-lockfile", {
        stdio: "pipe",
        cwd: this.projectRoot,
      })
      console.log("   ✅ Frozen lockfile install works!")

      // Test build
      console.log("   🏗️ Testing build process...")
      execSync("pnpm run build", {
        stdio: "pipe",
        cwd: this.projectRoot,
      })
      console.log("   ✅ Build process works!")
    } catch (error) {
      console.error("   ❌ Validation failed:", error.message)
      throw error
    }
  }

  createBackup() {
    console.log("\n5️⃣ Creating backup...")

    try {
      const backupDir = path.join(this.projectRoot, ".deployment-backups")
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true })
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
      const backupPath = path.join(backupDir, `pnpm-lock-${timestamp}.yaml`)

      fs.copyFileSync(this.lockfilePath, backupPath)
      console.log(`   💾 Backup created: ${backupPath}`)
    } catch (error) {
      console.log(`   ⚠️ Backup warning: ${error.message}`)
    }
  }

  run() {
    try {
      console.log("Starting emergency lockfile fix...\n")

      this.checkFiles()
      this.cleanInstall()
      this.generateLockfile()
      this.validateInstallation()
      this.createBackup()

      console.log("\n🎉 EMERGENCY FIX COMPLETE!")
      console.log("✅ pnpm-lock.yaml has been generated and validated")
      console.log("✅ Ready for deployment")
      console.log("\n💡 Next steps:")
      console.log("   1. Commit the new pnpm-lock.yaml file")
      console.log("   2. Push to your repository")
      console.log("   3. Redeploy")
    } catch (error) {
      console.error("\n❌ EMERGENCY FIX FAILED!")
      console.error("Error:", error.message)
      console.error("\n🆘 Manual steps required:")
      console.error("   1. Delete node_modules: rm -rf node_modules")
      console.error("   2. Delete lockfile: rm -f pnpm-lock.yaml")
      console.error("   3. Fresh install: pnpm install")
      console.error("   4. Commit lockfile: git add pnpm-lock.yaml && git commit -m 'Add lockfile'")
      process.exit(1)
    }
  }
}

new EmergencyLockfileFix().run()
