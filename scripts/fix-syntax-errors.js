const fs = require("fs")
const path = require("path")

console.log("🔍 Checking for syntax errors in blog files...")

// More explicit path construction
const blogDir = path.resolve(__dirname, "..", "data", "blog")
console.log(`Looking for blog directory at: ${blogDir}`)

if (!fs.existsSync(blogDir)) {
  console.error(`❌ Blog directory not found at: ${blogDir}`)

  // Show what directories do exist
  const dataDir = path.resolve(__dirname, "..", "data")
  if (fs.existsSync(dataDir)) {
    console.log("📁 Contents of data directory:")
    const dataContents = fs.readdirSync(dataDir)
    dataContents.forEach((item) => {
      const itemPath = path.join(dataDir, item)
      const isDir = fs.statSync(itemPath).isDirectory()
      console.log(`   ${isDir ? "📁" : "📄"} ${item}`)
    })
  } else {
    console.log("❌ Data directory also not found")
    console.log("📁 Current working directory contents:")
    const cwdContents = fs.readdirSync(process.cwd())
    cwdContents.forEach((item) => {
      const itemPath = path.join(process.cwd(), item)
      try {
        const isDir = fs.statSync(itemPath).isDirectory()
        console.log(`   ${isDir ? "📁" : "📄"} ${item}`)
      } catch (e) {
        console.log(`   ❓ ${item}`)
      }
    })
  }
  process.exit(1)
}

const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".ts"))
console.log(`📄 Found ${files.length} TypeScript files in blog directory`)

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

    // Check for unclosed template literals
    const backtickCount = (content.match(/`/g) || []).length
    if (backtickCount % 2 !== 0) {
      issues.push("Unclosed template literal (backtick mismatch)")
    }

    // Check for unclosed objects/arrays
    const openBraces = (content.match(/{/g) || []).length
    const closeBraces = (content.match(/}/g) || []).length
    if (openBraces !== closeBraces) {
      issues.push(`Brace mismatch: ${openBraces} open, ${closeBraces} close`)
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
