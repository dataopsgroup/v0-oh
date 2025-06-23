#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🩺 LOCKFILE DOCTOR")
console.log("==================\n")

class LockfileDoctor {
  constructor() {
    this.packageJsonPath = path.join(process.cwd(), "package.json")
    this.lockfilePath = path.join(process.cwd(), "pnpm-lock.yaml")
  }

  diagnose() {
    console.log("🔍 Diagnosing lockfile issues...")

    const issues = []

    // Check if package.json exists
    if (!fs.existsSync(this.packageJsonPath)) {
      issues.push("❌ package.json not found")
      return issues
    }

    // Check if lockfile exists
    if (!fs.existsSync(this.lockfilePath)) {
      issues.push("❌ pnpm-lock.yaml not found")
    }

    // Check for version conflicts
    try {
      const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, "utf8"))
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies }

      // Check for "latest" versions
      const latestVersions = Object.entries(deps).filter(([_, version]) => version === "latest")
      if (latestVersions.length > 0) {
        issues.push(`❌ Found ${latestVersions.length} dependencies with "latest" versions`)
        issues.push("   This causes lockfile inconsistencies")
      }

      // Check for caret/tilde ranges that might cause issues
      const rangeVersions = Object.entries(deps).filter(
        ([_, version]) => version.startsWith("^") || version.startsWith("~"),
      )
      if (rangeVersions.length > 10) {
        issues.push(`⚠️ Found ${rangeVersions.length} dependencies with version ranges`)
        issues.push("   Consider pinning versions for more predictable builds")
      }
    } catch (error) {
      issues.push("❌ Cannot parse package.json")
    }

    // Test lockfile validity
    if (fs.existsSync(this.lockfilePath)) {
      try {
        execSync("pnpm install --frozen-lockfile --dry-run", { stdio: "pipe" })
        issues.push("✅ Lockfile is valid and up-to-date")
      } catch {
        issues.push("❌ Lockfile is outdated or invalid")
      }
    }

    return issues
  }

  fix() {
    console.log("\n🔧 Applying fixes...")

    try {
      // Step 1: Clean slate
      console.log("1️⃣ Removing old files...")
      const filesToRemove = ["pnpm-lock.yaml", "package-lock.json", "yarn.lock"]
      filesToRemove.forEach((file) => {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file)
          console.log(`   🗑️ Removed ${file}`)
        }
      })

      if (fs.existsSync("node_modules")) {
        execSync("rm -rf node_modules", { stdio: "inherit" })
        console.log("   🗑️ Removed node_modules")
      }

      // Step 2: Fix package.json
      console.log("\n2️⃣ Fixing package.json...")
      const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, "utf8"))

      // Remove "latest" versions
      const versionMap = {
        "@radix-ui/react-accordion": "1.1.2",
        "@radix-ui/react-alert-dialog": "1.0.5",
        "@radix-ui/react-aspect-ratio": "1.0.3",
        "@radix-ui/react-avatar": "1.0.4",
        "@radix-ui/react-checkbox": "1.0.4",
        "@radix-ui/react-collapsible": "1.0.3",
        "@radix-ui/react-context-menu": "2.1.5",
        "@radix-ui/react-dialog": "1.0.5",
        "@radix-ui/react-dropdown-menu": "2.0.6",
        "@radix-ui/react-hover-card": "1.0.7",
        "@radix-ui/react-label": "2.0.2",
        "@radix-ui/react-menubar": "1.0.4",
        "@radix-ui/react-navigation-menu": "1.1.4",
        "@radix-ui/react-popover": "1.0.7",
        "@radix-ui/react-progress": "1.0.3",
        "@radix-ui/react-radio-group": "1.1.3",
        "@radix-ui/react-scroll-area": "1.0.5",
        "@radix-ui/react-select": "2.0.0",
        "@radix-ui/react-separator": "1.0.3",
        "@radix-ui/react-slider": "1.1.2",
        "@radix-ui/react-slot": "1.0.2",
        "@radix-ui/react-switch": "1.0.3",
        "@radix-ui/react-tabs": "1.0.4",
        "@radix-ui/react-toast": "1.1.5",
        "@radix-ui/react-toggle": "1.0.3",
        "@radix-ui/react-toggle-group": "1.0.4",
        "@radix-ui/react-tooltip": "1.0.7",
        "next-themes": "0.3.0",
        cmdk: "0.2.1",
        "embla-carousel-react": "8.3.0",
        "input-otp": "1.2.4",
        "react-day-picker": "8.10.1",
        "react-hook-form": "7.53.2",
        "react-resizable-panels": "2.1.4",
        recharts: "2.12.7",
        sonner: "1.7.3",
        vaul: "1.0.0",
      }

      let fixed = false
      Object.keys(packageJson.dependencies || {}).forEach((dep) => {
        if (packageJson.dependencies[dep] === "latest" && versionMap[dep]) {
          packageJson.dependencies[dep] = versionMap[dep]
          console.log(`   ✅ Fixed ${dep}: latest → ${versionMap[dep]}`)
          fixed = true
        }
      })

      Object.keys(packageJson.devDependencies || {}).forEach((dep) => {
        if (packageJson.devDependencies[dep] === "latest" && versionMap[dep]) {
          packageJson.devDependencies[dep] = versionMap[dep]
          console.log(`   ✅ Fixed ${dep}: latest → ${versionMap[dep]}`)
          fixed = true
        }
      })

      if (fixed) {
        fs.writeFileSync(this.packageJsonPath, JSON.stringify(packageJson, null, 2))
        console.log("   ✅ package.json updated")
      }

      // Step 3: Fresh install
      console.log("\n3️⃣ Fresh installation...")
      execSync("pnpm install", { stdio: "inherit" })

      // Step 4: Verify
      console.log("\n4️⃣ Verifying fix...")
      execSync("pnpm install --frozen-lockfile --dry-run", { stdio: "pipe" })

      console.log("\n🎉 LOCKFILE FIXED SUCCESSFULLY!")
      console.log("✅ pnpm-lock.yaml is now consistent with package.json")
      console.log("🚀 Ready for deployment!")

      return true
    } catch (error) {
      console.error("\n❌ Fix failed:", error.message)
      console.log("\n🔧 Manual steps required:")
      console.log("   1. Delete pnpm-lock.yaml, package-lock.json, yarn.lock")
      console.log("   2. Delete node_modules directory")
      console.log("   3. Fix any 'latest' versions in package.json")
      console.log("   4. Run: pnpm install")
      console.log("   5. Commit the new pnpm-lock.yaml")
      return false
    }
  }

  run() {
    const issues = this.diagnose()

    console.log("\n📋 DIAGNOSIS RESULTS:")
    issues.forEach((issue) => console.log(`   ${issue}`))

    const hasErrors = issues.some((issue) => issue.includes("❌"))

    if (hasErrors) {
      console.log("\n🩺 Issues found - applying fixes...")
      const success = this.fix()
      process.exit(success ? 0 : 1)
    } else {
      console.log("\n✅ No lockfile issues found!")
      console.log("🚀 Ready for deployment!")
      process.exit(0)
    }
  }
}

new LockfileDoctor().run()
