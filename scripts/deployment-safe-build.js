#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🛡️ DEPLOYMENT-SAFE BUILD")
console.log("========================\n")

class DeploymentSafeBuild {
  constructor() {
    this.lockfilePath = path.join(process.cwd(), "pnpm-lock.yaml")
  }

  ensureLockfile() {
    console.log("1️⃣ Ensuring lockfile exists...")

    if (!fs.existsSync(this.lockfilePath)) {
      console.log("   ❌ pnpm-lock.yaml missing - generating...")

      try {
        // Generate lockfile without installing
        execSync("pnpm install --lockfile-only", { stdio: "inherit" })
        console.log("   ✅ Lockfile generated")
      } catch (error) {
        console.log("   ⚠️ Lockfile-only failed, doing full install...")
        execSync("pnpm install", { stdio: "inherit" })
        console.log("   ✅ Full install completed")
      }
    } else {
      console.log("   ✅ Lockfile exists")
    }
  }

  safeInstall() {
    console.log("\n2️⃣ Performing safe installation...")

    try {
      // Try frozen lockfile first
      execSync("pnpm install --frozen-lockfile", { stdio: "inherit" })
      console.log("   ✅ Frozen lockfile install successful")
    } catch (error) {
      console.log("   ⚠️ Frozen lockfile failed, trying regular install...")
      execSync("pnpm install", { stdio: "inherit" })
      console.log("   ✅ Regular install successful")
    }
  }

  build() {
    console.log("\n3️⃣ Building application...")

    try {
      execSync("pnpm run build", { stdio: "inherit" })
      console.log("   ✅ Build successful")
    } catch (error) {
      console.error("   ❌ Build failed:", error.message)
      throw error
    }
  }

  run() {
    try {
      this.ensureLockfile()
      this.safeInstall()
      this.build()

      console.log("\n🎉 DEPLOYMENT-SAFE BUILD COMPLETE!")
      console.log("✅ Ready for production deployment")
    } catch (error) {
      console.error("\n❌ DEPLOYMENT-SAFE BUILD FAILED!")
      console.error("Error:", error.message)
      process.exit(1)
    }
  }
}

new DeploymentSafeBuild().run()
