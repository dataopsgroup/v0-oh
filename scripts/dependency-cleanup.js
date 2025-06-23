#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🧹 DEPENDENCY CLEANUP")
console.log("====================\n")

class DependencyCleanup {
  constructor() {
    this.projectRoot = process.cwd()
    this.packageJsonPath = path.join(this.projectRoot, "package.json")
    this.lockfilePath = path.join(this.projectRoot, "pnpm-lock.yaml")
    this.nodeModulesPath = path.join(this.projectRoot, "node_modules")
  }

  cleanPackageJson() {
    console.log("1️⃣ Cleaning package.json...")

    try {
      const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, "utf8"))

      // List of known problematic dependencies
      const problematicDeps = [
        "some-chrome-extension-library",
        "chrome-extension-library",
        "browser-extension-lib",
        "chrome-extension",
        "extension-lib",
      ]

      let cleaned = false

      // Clean dependencies
      if (packageJson.dependencies) {
        problematicDeps.forEach((dep) => {
          if (packageJson.dependencies[dep]) {
            console.log(`   🗑️ Removing invalid dependency: ${dep}`)
            delete packageJson.dependencies[dep]
            cleaned = true
          }
        })
      }

      // Clean devDependencies
      if (packageJson.devDependencies) {
        problematicDeps.forEach((dep) => {
          if (packageJson.devDependencies[dep]) {
            console.log(`   🗑️ Removing invalid devDependency: ${dep}`)
            delete packageJson.devDependencies[dep]
            cleaned = true
          }
        })
      }

      if (cleaned) {
        fs.writeFileSync(this.packageJsonPath, JSON.stringify(packageJson, null, 2))
        console.log("   ✅ package.json cleaned")
      } else {
        console.log("   ✅ package.json is already clean")
      }
    } catch (error) {
      console.error(`   ❌ Error cleaning package.json: ${error.message}`)
      throw error
    }
  }

  removeCorruptedFiles() {
    console.log("\n2️⃣ Removing corrupted files...")

    try {
      // Remove lockfile
      if (fs.existsSync(this.lockfilePath)) {
        fs.unlinkSync(this.lockfilePath)
        console.log("   🗑️ Removed pnpm-lock.yaml")
      }

      // Remove node_modules
      if (fs.existsSync(this.nodeModulesPath)) {
        execSync(`rm -rf "${this.nodeModulesPath}"`, { stdio: "pipe" })
        console.log("   🗑️ Removed node_modules")
      }

      // Clear pnpm cache
      try {
        execSync("pnpm store prune", { stdio: "pipe" })
        console.log("   🗑️ Cleared pnpm cache")
      } catch (error) {
        console.log("   ⚠️ Could not clear pnpm cache (continuing)")
      }

      console.log("   ✅ Cleanup complete")
    } catch (error) {
      console.error(`   ❌ Error during cleanup: ${error.message}`)
      throw error
    }
  }

  freshInstall() {
    console.log("\n3️⃣ Performing fresh install...")

    try {
      console.log("   📦 Running pnpm install...")
      execSync("pnpm install", {
        stdio: "inherit",
        cwd: this.projectRoot,
      })
      console.log("   ✅ Fresh install complete")
    } catch (error) {
      console.error(`   ❌ Install failed: ${error.message}`)
      throw error
    }
  }

  run() {
    try {
      this.cleanPackageJson()
      this.removeCorruptedFiles()
      this.freshInstall()

      console.log("\n🎉 DEPENDENCY CLEANUP COMPLETE!")
      console.log("✅ All invalid dependencies removed")
      console.log("✅ Fresh lockfile generated")
      console.log("✅ Ready for deployment")
    } catch (error) {
      console.error("\n❌ CLEANUP FAILED!")
      console.error("Error:", error.message)
      process.exit(1)
    }
  }
}

new DependencyCleanup().run()
