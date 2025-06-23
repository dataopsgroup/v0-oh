const fs = require("fs")
const path = require("path")

console.log("🔍 Verifying Dependency Cleanup")
console.log("=".repeat(40))

// Check package.json
const packagePath = path.join(process.cwd(), "package.json")
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"))

console.log("📦 Checking package.json...")

// Problematic dependencies that should be removed
const problematicDeps = [
  "crypto",
  "fs",
  "path",
  "url",
  "child_process", // Built-in Node.js modules
  "resend",
  "nodemailer", // Email-related
  "@hookform/resolvers",
  "react-hook-form",
  "zod", // Form-related (if not used elsewhere)
  "dotenv", // Environment (Next.js handles this)
  "some-chrome-extension-library", // Suspicious dependency
]

const foundProblematic = []
const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies }

problematicDeps.forEach((dep) => {
  if (allDeps[dep]) {
    foundProblematic.push(dep)
  }
})

if (foundProblematic.length > 0) {
  console.log("❌ Found problematic dependencies:")
  foundProblematic.forEach((dep) => console.log(`   - ${dep}`))
} else {
  console.log("✅ No problematic dependencies found")
}

// Check for imports of removed dependencies
console.log("\n🔍 Scanning for imports of removed dependencies...")

function scanForImports(dir, results = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules" && file !== "dist") {
      scanForImports(filePath, results)
    } else if (
      stat.isFile() &&
      (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx"))
    ) {
      try {
        const content = fs.readFileSync(filePath, "utf8")

        // Check for imports of removed dependencies
        const removedDeps = ["resend", "nodemailer", "react-hook-form", "zod", "@hookform/resolvers"]
        removedDeps.forEach((dep) => {
          if (content.includes(`from '${dep}'`) || content.includes(`from "${dep}"`)) {
            results.push({
              file: path.relative(process.cwd(), filePath),
              dependency: dep,
              line: content.split("\n").findIndex((line) => line.includes(dep)) + 1,
            })
          }
        })
      } catch (error) {
        // Skip files that can't be read
      }
    }
  })

  return results
}

const importIssues = scanForImports(process.cwd())

if (importIssues.length > 0) {
  console.log("❌ Found imports of removed dependencies:")
  importIssues.forEach((issue) => {
    console.log(`   ${issue.file}:${issue.line} - imports '${issue.dependency}'`)
  })
} else {
  console.log("✅ No problematic imports found")
}

console.log("\n" + "=".repeat(40))
console.log("🎯 Dependency Cleanup Summary:")
console.log(`✅ Removed ${problematicDeps.length - foundProblematic.length} problematic dependencies`)
console.log(`❌ ${foundProblematic.length} problematic dependencies remain`)
console.log(`❌ ${importIssues.length} import issues found`)

if (foundProblematic.length === 0 && importIssues.length === 0) {
  console.log("\n🎉 Dependency cleanup complete!")
} else {
  console.log("\n⚠️  Manual cleanup required for remaining issues")
}
