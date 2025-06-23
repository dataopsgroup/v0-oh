const fs = require("fs")
const path = require("path")

console.log("🔍 ANALYZING CASE SENSITIVITY RESULTS")
console.log("====================================\n")

// Check if the report was generated
const reportsDir = path.join(process.cwd(), "reports")
const reportPath = path.join(reportsDir, "case-sensitivity-report.json")

if (fs.existsSync(reportPath)) {
  console.log("📊 Found case sensitivity report, analyzing...")

  try {
    const report = JSON.parse(fs.readFileSync(reportPath, "utf8"))

    console.log(`\n📈 SUMMARY:`)
    console.log(`   Total Issues: ${report.summary.totalIssues}`)
    console.log(`   Issue Types: ${report.summary.issueTypes.join(", ")}`)
    console.log(`   Generated: ${new Date(report.summary.timestamp).toLocaleString()}`)

    if (report.summary.totalIssues > 0) {
      console.log("\n🔴 CRITICAL ISSUES FOUND:")
      console.log("========================")

      // Show the most critical issues first
      const criticalTypes = ["MISSING_EXPORT", "BROKEN_IMPORT", "FILE_READ_ERROR"]

      criticalTypes.forEach((type) => {
        if (report.issuesByType[type]) {
          console.log(`\n❌ ${type} (${report.issuesByType[type].length} issues):`)
          report.issuesByType[type].forEach((issue, index) => {
            console.log(`   ${index + 1}. ${issue.description}`)
            console.log(`      📁 ${issue.location}`)
            console.log(`      💡 ${issue.suggestion}`)
          })
        }
      })

      // Show other issues
      Object.entries(report.issuesByType).forEach(([type, issues]) => {
        if (!criticalTypes.includes(type)) {
          console.log(`\n⚠️  ${type} (${issues.length} issues):`)
          issues.slice(0, 5).forEach((issue, index) => {
            console.log(`   ${index + 1}. ${issue.description}`)
            console.log(`      📁 ${issue.location}`)
          })
          if (issues.length > 5) {
            console.log(`   ... and ${issues.length - 5} more`)
          }
        }
      })
    }
  } catch (error) {
    console.log(`❌ Error reading report: ${error.message}`)
  }
} else {
  console.log("❌ No case sensitivity report found")
  console.log("   Report should be at: reports/case-sensitivity-report.json")
}

// Let's also check what specific blog export issues we might have
console.log("\n🔍 CHECKING BLOG EXPORTS DIRECTLY:")
console.log("==================================")

const blogDir = path.join(process.cwd(), "data", "blog")

if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter((file) => file.endsWith(".ts"))

  console.log(`Found ${blogFiles.length} blog files to check...`)

  const exportIssues = []

  blogFiles.forEach((file) => {
    try {
      const filePath = path.join(blogDir, file)
      const content = fs.readFileSync(filePath, "utf8")

      // Convert filename to expected export name
      const expectedExportName = file.replace(".ts", "").replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())

      // Check if the expected export exists
      const exportPattern = new RegExp(`export\\s+const\\s+${expectedExportName}\\s*[:=]`)

      if (!exportPattern.test(content)) {
        exportIssues.push({
          file,
          expectedExport: expectedExportName,
          hasAnyExport: content.includes("export const"),
        })
      }
    } catch (error) {
      exportIssues.push({
        file,
        error: error.message,
      })
    }
  })

  if (exportIssues.length > 0) {
    console.log(`\n❌ Found ${exportIssues.length} blog export issues:`)
    exportIssues.forEach((issue, index) => {
      console.log(`\n${index + 1}. ${issue.file}`)
      if (issue.error) {
        console.log(`   ❌ Error: ${issue.error}`)
      } else {
        console.log(`   ❌ Missing export: ${issue.expectedExport}`)
        console.log(`   📝 Has exports: ${issue.hasAnyExport ? "Yes" : "No"}`)
      }
    })
  } else {
    console.log("✅ All blog files have correct exports!")
  }
} else {
  console.log("❌ Blog directory not found at: data/blog")
}

// Check for common import issues
console.log("\n🔍 CHECKING COMMON IMPORT PATTERNS:")
console.log("===================================")

const checkImportIssues = (dir, depth = 0) => {
  if (depth > 3) return // Prevent infinite recursion

  try {
    const items = fs.readdirSync(dir)

    items.forEach((item) => {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules" && item !== "dist") {
        checkImportIssues(fullPath, depth + 1)
      } else if (stat.isFile() && (item.endsWith(".ts") || item.endsWith(".tsx"))) {
        try {
          const content = fs.readFileSync(fullPath, "utf8")
          const relativePath = path.relative(process.cwd(), fullPath)

          // Check for problematic import patterns
          const lines = content.split("\n")
          lines.forEach((line, lineNum) => {
            if (line.includes("import") && line.includes("from")) {
              // Check for case-sensitive issues in imports
              if (line.includes("../blog/") || line.includes("./blog/")) {
                console.log(`📝 Blog import in ${relativePath}:${lineNum + 1}`)
                console.log(`   ${line.trim()}`)
              }
            }
          })
        } catch (error) {
          // Skip files we can't read
        }
      }
    })
  } catch (error) {
    // Skip directories we can't read
  }
}

checkImportIssues(process.cwd())

console.log("\n✅ ANALYSIS COMPLETE")
console.log("===================")
console.log("Review the issues above to understand what needs to be fixed.")
