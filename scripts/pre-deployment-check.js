#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("🚀 PRE-DEPLOYMENT COMPREHENSIVE CHECK")
console.log("=====================================\n")

const errors = []
const warnings = []
const fixes = []

// 1. CHECK FOR SSR ISSUES
console.log("1️⃣ Checking for SSR/Client Component Issues...")

function checkSSRIssues() {
  const appDir = path.join(process.cwd(), "app")

  if (!fs.existsSync(appDir)) {
    errors.push("❌ App directory not found")
    return
  }

  // Check all page.tsx files for SSR issues
  function checkFile(filePath) {
    if (!fs.existsSync(filePath)) return

    const content = fs.readFileSync(filePath, "utf8")

    // Check for ssr: false in server components
    if (content.includes("ssr: false") && !content.includes('"use client"')) {
      errors.push(`❌ SSR Issue: ${filePath} has 'ssr: false' but is not a client component`)
      fixes.push(`Fix: Move dynamic import to a client component or add "use client" directive`)
    }

    // Check for client-only features in server components
    if (
      !content.includes('"use client"') &&
      (content.includes("useState") || content.includes("useEffect") || content.includes("onClick"))
    ) {
      warnings.push(`⚠️ Potential SSR Issue: ${filePath} uses client features without "use client"`)
    }
  }

  // Check main pages
  const pagesToCheck = [
    path.join(appDir, "page.tsx"),
    path.join(appDir, "layout.tsx"),
    path.join(appDir, "loading.tsx"),
  ]

  pagesToCheck.forEach(checkFile)
}

checkSSRIssues()

// 2. CHECK PACKAGE.JSON AND LOCKFILE
console.log("2️⃣ Checking Package Management Issues...")

function checkPackageIssues() {
  const packageJsonPath = path.join(process.cwd(), "package.json")

  if (!fs.existsSync(packageJsonPath)) {
    errors.push("❌ package.json not found")
    return
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))

  // Check for "latest" versions
  const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies }
  const latestVersions = Object.entries(allDeps).filter(([_, version]) => version === "latest")

  if (latestVersions.length > 0) {
    errors.push(`❌ Lockfile Issue: Found ${latestVersions.length} dependencies with "latest" versions`)
    fixes.push("Fix: Pin all dependencies to specific versions")
    latestVersions.forEach(([name]) => {
      fixes.push(`  - Update ${name} to specific version`)
    })
  }

  // Check lockfile consistency
  const lockfiles = [
    { name: "pnpm-lock.yaml", manager: "pnpm" },
    { name: "package-lock.json", manager: "npm" },
    { name: "yarn.lock", manager: "yarn" },
  ]

  const existingLockfiles = lockfiles.filter(({ name }) => fs.existsSync(path.join(process.cwd(), name)))

  if (existingLockfiles.length === 0) {
    warnings.push("⚠️ No lockfile found - this may cause deployment issues")
  } else if (existingLockfiles.length > 1) {
    errors.push("❌ Multiple lockfiles found - this will cause conflicts")
    fixes.push("Fix: Remove all but one lockfile and reinstall dependencies")
  }
}

checkPackageIssues()

// 3. CHECK FOR MISSING EXPORTS
console.log("3️⃣ Checking for Missing Component Exports...")

function checkMissingExports() {
  const componentsToCheck = [
    { path: "components/layout/Header.tsx", exports: ["Header"] },
    { path: "components/layout/Footer.tsx", exports: ["Footer"] },
    { path: "components/layout/PageLayout.tsx", exports: ["default"] },
  ]

  componentsToCheck.forEach(({ path: componentPath, exports: expectedExports }) => {
    const fullPath = path.join(process.cwd(), componentPath)

    if (!fs.existsSync(fullPath)) {
      errors.push(`❌ Missing Component: ${componentPath}`)
      fixes.push(`Fix: Create ${componentPath} with required exports`)
      return
    }

    const content = fs.readFileSync(fullPath, "utf8")

    expectedExports.forEach((exportName) => {
      const hasExport =
        exportName === "default"
          ? content.includes("export default")
          : content.includes(`export { ${exportName} }`) ||
            content.includes(`export const ${exportName}`) ||
            content.includes(`export function ${exportName}`)

      if (!hasExport) {
        errors.push(`❌ Missing Export: ${componentPath} missing ${exportName} export`)
        fixes.push(
          `Fix: Add 'export ${exportName === "default" ? "default" : `{ ${exportName} }`}' to ${componentPath}`,
        )
      }
    })
  })
}

checkMissingExports()

// 4. CHECK SCRIPT AVAILABILITY
console.log("4️⃣ Checking Script Availability...")

function checkScripts() {
  const scriptsDir = path.join(process.cwd(), "scripts")

  if (!fs.existsSync(scriptsDir)) {
    warnings.push("⚠️ Scripts directory not found")
    return
  }

  const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"))
  const scripts = packageJson.scripts || {}

  Object.entries(scripts).forEach(([scriptName, scriptCommand]) => {
    if (scriptCommand.startsWith("node scripts/")) {
      const scriptFile = scriptCommand.replace("node ", "")
      const scriptPath = path.join(process.cwd(), scriptFile)

      if (!fs.existsSync(scriptPath)) {
        errors.push(`❌ Missing Script: ${scriptFile} referenced in package.json but not found`)
        fixes.push(`Fix: Create ${scriptFile} or remove from package.json scripts`)
      }
    }
  })
}

checkScripts()

// 5. GENERATE REPORT
console.log("\n📊 DEPLOYMENT READINESS REPORT")
console.log("===============================")

if (errors.length === 0) {
  console.log("🎉 NO CRITICAL ERRORS FOUND!")
} else {
  console.log(`❌ CRITICAL ERRORS: ${errors.length}`)
  errors.forEach((error) => console.log(`   ${error}`))
}

if (warnings.length > 0) {
  console.log(`\n⚠️ WARNINGS: ${warnings.length}`)
  warnings.forEach((warning) => console.log(`   ${warning}`))
}

if (fixes.length > 0) {
  console.log(`\n🔧 REQUIRED FIXES: ${fixes.length}`)
  fixes.forEach((fix) => console.log(`   ${fix}`))
}

// 6. DEPLOYMENT READINESS SCORE
const totalIssues = errors.length + warnings.length
let readinessScore = 100 - errors.length * 20 - warnings.length * 5
readinessScore = Math.max(0, readinessScore)

console.log(`\n📈 DEPLOYMENT READINESS SCORE: ${readinessScore}%`)

if (readinessScore >= 90) {
  console.log("🟢 READY FOR DEPLOYMENT")
} else if (readinessScore >= 70) {
  console.log("🟡 DEPLOYMENT POSSIBLE WITH WARNINGS")
} else {
  console.log("🔴 NOT READY FOR DEPLOYMENT - FIX CRITICAL ERRORS")
}

console.log("\n✨ Run this check before every deployment!")
