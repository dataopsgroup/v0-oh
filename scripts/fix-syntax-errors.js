const fs = require("fs")
const path = require("path")

console.log("🔍 Checking for syntax errors in blog files...")

const blogDir = path.join(process.cwd(), "data", "blog")

if (!fs.existsSync(blogDir)) {
  console.error("Blog directory not found")
  process.exit(1)
}

const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".ts"))

let hasErrors = false

files.forEach((file) => {
  const filePath = path.join(blogDir, file)
  try {
    const content = fs.readFileSync(filePath, "utf8")

    // Check for common syntax issues
    const issues = []

    // Check for JSX in .ts files (should be .tsx)
    if (content.includes("<>") || content.includes("</")) {
      issues.push("Contains JSX syntax in .ts file")
    }

    // Check for missing exports
    if (!content.includes("export const meta")) {
      issues.push("Missing meta export")
    }

    // Check for malformed export statements
    const exportMatches = content.match(/export const \w+/g)
    if (exportMatches) {
      exportMatches.forEach((match) => {
        const line = content.split("\n").find((l) => l.includes(match))
        if (line && !line.includes("=")) {
          issues.push(`Malformed export: ${match}`)
        }
      })
    }

    if (issues.length > 0) {
      console.log(`❌ ${file}:`)
      issues.forEach((issue) => console.log(`   - ${issue}`))
      hasErrors = true
    } else {
      console.log(`✅ ${file}`)
    }
  } catch (error) {
    console.log(`❌ ${file}: ${error.message}`)
    hasErrors = true
  }
})

if (hasErrors) {
  console.log("\n❌ Syntax errors found. Please fix the issues above.")
  process.exit(1)
} else {
  console.log("\n✅ No syntax errors found in blog files.")
}
