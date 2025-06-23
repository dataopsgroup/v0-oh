const fs = require("fs")
const path = require("path")

console.log("🔍 CASE SENSITIVITY ANALYSIS")
console.log("============================\n")

class CaseSensitivityChecker {
  constructor() {
    this.issues = []
    this.projectRoot = process.cwd()
  }

  addIssue(type, description, location, suggestion) {
    this.issues.push({
      type,
      description,
      location,
      suggestion,
      timestamp: new Date().toISOString(),
    })
  }

  async checkBlogExports() {
    console.log("📝 Checking blog post exports...")

    const blogDir = path.join(this.projectRoot, "data", "blog")

    if (!fs.existsSync(blogDir)) {
      this.addIssue("MISSING_DIRECTORY", "Blog directory not found", "data/blog", "Create the blog directory")
      return
    }

    const blogFiles = fs.readdirSync(blogDir).filter((file) => file.endsWith(".ts"))

    for (const file of blogFiles) {
      const filePath = path.join(blogDir, file)
      const content = fs.readFileSync(filePath, "utf8")

      // Convert filename to expected export name
      const expectedExportName = this.filenameToExportName(file)

      // Check if the expected export exists
      const exportPattern = new RegExp(`export\\s+const\\s+${expectedExportName}\\s*[:=]`)

      if (!exportPattern.test(content)) {
        this.addIssue(
          "MISSING_EXPORT",
          `Missing expected export: ${expectedExportName}`,
          `data/blog/${file}`,
          `Add: export const ${expectedExportName}: BlogPost = { ... }`,
        )
      } else {
        console.log(`   ✅ ${file} → ${expectedExportName}`)
      }

      // Check for common case sensitivity issues
      this.checkCommonCaseIssues(content, `data/blog/${file}`)
    }
  }

  filenameToExportName(filename) {
    // Remove .ts extension and convert kebab-case to camelCase
    return filename.replace(".ts", "").replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
  }

  checkCommonCaseIssues(content, filePath) {
    // Check for HubSpot capitalization
    const hubspotVariations = ["hubspot", "Hubspot", "HUBSPOT", "hubSpot"]

    hubspotVariations.forEach((variation) => {
      if (content.includes(variation) && variation !== "HubSpot") {
        this.addIssue(
          "BRAND_CAPITALIZATION",
          `Incorrect HubSpot capitalization: "${variation}"`,
          filePath,
          'Use "HubSpot" (capital H and S)',
        )
      }
    })

    // Check for inconsistent import paths
    const importLines = content.split("\n").filter((line) => line.includes("import"))
    importLines.forEach((line, index) => {
      if (line.includes("../") && (line.match(/\.\.\//g) || []).length > 2) {
        this.addIssue(
          "DEEP_IMPORT_PATH",
          "Deep relative import path detected",
          `${filePath}:${index + 1}`,
          "Consider using absolute imports or restructuring",
        )
      }
    })
  }

  async checkImportExportConsistency() {
    console.log("\n🔗 Checking import/export consistency...")

    const tsFiles = await this.findFiles([".ts", ".tsx"])

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, "utf8")
        const relativePath = path.relative(this.projectRoot, file)

        // Find all import statements
        const importRegex = /import\s+.*?\s+from\s+['"`]([^'"`]+)['"`]/g
        let match

        while ((match = importRegex.exec(content)) !== null) {
          const importPath = match[1]

          // Check if it's a relative import
          if (importPath.startsWith("./") || importPath.startsWith("../")) {
            const resolvedPath = path.resolve(path.dirname(file), importPath)

            // Check if the file exists (with common extensions)
            const extensions = ["", ".ts", ".tsx", ".js", ".jsx"]
            let fileExists = false

            for (const ext of extensions) {
              if (fs.existsSync(resolvedPath + ext)) {
                fileExists = true
                break
              }
            }

            if (!fileExists) {
              this.addIssue(
                "BROKEN_IMPORT",
                `Import path not found: ${importPath}`,
                relativePath,
                "Check the file path and ensure the file exists",
              )
            }
          }
        }
      } catch (error) {
        this.addIssue(
          "FILE_READ_ERROR",
          `Cannot read file: ${error.message}`,
          path.relative(this.projectRoot, file),
          "Check file permissions and encoding",
        )
      }
    }
  }

  async findFiles(extensions) {
    const files = []

    const traverse = (dir) => {
      try {
        const items = fs.readdirSync(dir)

        for (const item of items) {
          const fullPath = path.join(dir, item)
          const stat = fs.statSync(fullPath)

          if (stat.isDirectory()) {
            // Skip node_modules, .next, .git, etc.
            if (!item.startsWith(".") && item !== "node_modules" && item !== "dist") {
              traverse(fullPath)
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item)
            if (extensions.includes(ext)) {
              files.push(fullPath)
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    }

    traverse(this.projectRoot)
    return files
  }

  async checkFileNamingConventions() {
    console.log("\n📁 Checking file naming conventions...")

    const allFiles = await this.findFiles([".ts", ".tsx", ".js", ".jsx"])

    for (const file of allFiles) {
      const filename = path.basename(file)
      const relativePath = path.relative(this.projectRoot, file)

      // Check for mixed case in filenames (should be kebab-case or camelCase consistently)
      if (filename.includes("_") && filename.includes("-")) {
        this.addIssue(
          "MIXED_NAMING_CONVENTION",
          "File uses both underscores and hyphens",
          relativePath,
          "Use consistent naming convention (prefer kebab-case)",
        )
      }

      // Check for spaces in filenames
      if (filename.includes(" ")) {
        this.addIssue(
          "SPACES_IN_FILENAME",
          "Filename contains spaces",
          relativePath,
          "Replace spaces with hyphens or underscores",
        )
      }
    }
  }

  generateReport() {
    console.log("\n📊 CASE SENSITIVITY REPORT")
    console.log("==========================")

    if (this.issues.length === 0) {
      console.log("✅ No case sensitivity issues found!")
      return
    }

    console.log(`Found ${this.issues.length} potential issues:\n`)

    // Group issues by type
    const issuesByType = {}
    this.issues.forEach((issue) => {
      if (!issuesByType[issue.type]) {
        issuesByType[issue.type] = []
      }
      issuesByType[issue.type].push(issue)
    })

    Object.entries(issuesByType).forEach(([type, issues]) => {
      console.log(`🔴 ${type} (${issues.length} issues)`)
      console.log("-".repeat(40))

      issues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue.description}`)
        console.log(`   📁 Location: ${issue.location}`)
        console.log(`   💡 Suggestion: ${issue.suggestion}`)
        console.log()
      })
    })

    // Save detailed report
    const reportsDir = path.join(this.projectRoot, "reports")
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true })
    }

    const report = {
      summary: {
        totalIssues: this.issues.length,
        issueTypes: Object.keys(issuesByType),
        timestamp: new Date().toISOString(),
      },
      issues: this.issues,
      issuesByType,
    }

    fs.writeFileSync(path.join(reportsDir, "case-sensitivity-report.json"), JSON.stringify(report, null, 2))

    console.log("💾 Detailed report saved to: reports/case-sensitivity-report.json")
  }

  async runFullCheck() {
    console.log("🚀 Starting case sensitivity analysis...\n")

    await this.checkBlogExports()
    await this.checkImportExportConsistency()
    await this.checkFileNamingConventions()

    this.generateReport()

    console.log("\n✅ CASE SENSITIVITY CHECK COMPLETED")
    console.log("===================================")

    if (this.issues.length > 0) {
      console.log("⚠️  Issues found - review the report above")
      console.log("🔧 Fix these issues before deployment")
    } else {
      console.log("🎉 No case sensitivity issues detected!")
    }
  }
}

// Run the check
const checker = new CaseSensitivityChecker()
checker.runFullCheck().catch(console.error)
