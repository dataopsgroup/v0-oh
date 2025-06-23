const fs = require("fs")
const path = require("path")

console.log("🔍 COMPREHENSIVE CODEBASE AUDIT")
console.log("================================\n")

class CodebaseAuditor {
  constructor() {
    this.issues = []
    this.projectRoot = process.cwd()
    this.packageJson = null
    this.tsConfig = null
    this.nextConfig = null
  }

  // Issue severity levels
  SEVERITY = {
    CRITICAL: "CRITICAL",
    HIGH: "HIGH",
    MEDIUM: "MEDIUM",
    LOW: "LOW",
  }

  // Issue categories
  CATEGORY = {
    SYNTAX: "SYNTAX_ERROR",
    DEPENDENCY: "DEPENDENCY_ISSUE",
    BUILD: "BUILD_CONFIG",
    DEPLOYMENT: "DEPLOYMENT_CONFIG",
    SECURITY: "SECURITY_ISSUE",
    PERFORMANCE: "PERFORMANCE_ISSUE",
    TYPE_ERROR: "TYPE_ERROR",
    FILE_STRUCTURE: "FILE_STRUCTURE",
    IMPORT_EXPORT: "IMPORT_EXPORT",
  }

  addIssue(severity, category, description, location, solution, lineNumber = null) {
    this.issues.push({
      id: this.issues.length + 1,
      severity,
      category,
      description,
      location,
      lineNumber,
      solution,
      timestamp: new Date().toISOString(),
    })
  }

  async loadProjectFiles() {
    console.log("📋 Loading project configuration files...")

    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json")
      if (fs.existsSync(packageJsonPath)) {
        this.packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
        console.log("   ✅ package.json loaded")
      } else {
        this.addIssue(
          this.SEVERITY.CRITICAL,
          this.CATEGORY.FILE_STRUCTURE,
          "package.json file missing",
          "package.json",
          "Create package.json with proper project configuration",
        )
      }

      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json")
      if (fs.existsSync(tsConfigPath)) {
        this.tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"))
        console.log("   ✅ tsconfig.json loaded")
      } else {
        this.addIssue(
          this.SEVERITY.HIGH,
          this.CATEGORY.BUILD,
          "tsconfig.json file missing",
          "tsconfig.json",
          "Create TypeScript configuration file",
        )
      }

      const nextConfigPath = path.join(this.projectRoot, "next.config.mjs")
      if (fs.existsSync(nextConfigPath)) {
        console.log("   ✅ next.config.mjs found")
      } else {
        this.addIssue(
          this.SEVERITY.MEDIUM,
          this.CATEGORY.BUILD,
          "next.config.mjs file missing",
          "next.config.mjs",
          "Create Next.js configuration file for optimal build settings",
        )
      }
    } catch (error) {
      this.addIssue(
        this.SEVERITY.CRITICAL,
        this.CATEGORY.SYNTAX,
        `Failed to parse configuration files: ${error.message}`,
        "Configuration files",
        "Fix JSON syntax errors in configuration files",
      )
    }
  }

  async auditDependencies() {
    console.log("\n📦 Auditing dependencies...")

    if (!this.packageJson) {
      console.log("   ❌ Cannot audit dependencies - package.json missing")
      return
    }

    const dependencies = { ...this.packageJson.dependencies, ...this.packageJson.devDependencies }

    // Check for problematic dependencies
    const problematicDeps = [
      "some-chrome-extension-library", // This looks suspicious
      "crypto", // Built-in Node.js module, shouldn't be in dependencies
      "fs", // Built-in Node.js module
      "path", // Built-in Node.js module
      "url", // Built-in Node.js module
      "child_process", // Built-in Node.js module
    ]

    problematicDeps.forEach((dep) => {
      if (dependencies[dep]) {
        this.addIssue(
          this.SEVERITY.HIGH,
          this.CATEGORY.DEPENDENCY,
          `Unnecessary dependency: ${dep} is a built-in Node.js module or suspicious package`,
          "package.json",
          `Remove ${dep} from dependencies as it's either built-in or potentially problematic`,
        )
      }
    })

    // Check for version conflicts
    if (dependencies["react"] && dependencies["@types/react"]) {
      console.log("   ✅ React and React types found")
    }

    // Check for missing peer dependencies
    if (dependencies["@radix-ui/react-accordion"] && !dependencies["react"]) {
      this.addIssue(
        this.SEVERITY.HIGH,
        this.CATEGORY.DEPENDENCY,
        "Radix UI components require React as peer dependency",
        "package.json",
        "Ensure React is properly installed and configured",
      )
    }

    console.log("   📊 Dependencies audit completed")
  }

  async auditTypeScriptFiles() {
    console.log("\n🔧 Auditing TypeScript files...")

    const tsFiles = await this.findFiles([".ts", ".tsx"])
    let processedFiles = 0

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, "utf8")
        const relativePath = path.relative(this.projectRoot, file)

        // Check for common syntax issues
        this.checkSyntaxIssues(content, relativePath)

        // Check for import/export issues
        this.checkImportExportIssues(content, relativePath)

        // Check for TypeScript specific issues
        this.checkTypeScriptIssues(content, relativePath)

        processedFiles++
      } catch (error) {
        this.addIssue(
          this.SEVERITY.HIGH,
          this.CATEGORY.SYNTAX,
          `Cannot read file: ${error.message}`,
          path.relative(this.projectRoot, file),
          "Fix file permissions or encoding issues",
        )
      }
    }

    console.log(`   📊 Processed ${processedFiles} TypeScript files`)
  }

  checkSyntaxIssues(content, filePath) {
    const lines = content.split("\n")

    lines.forEach((line, index) => {
      const lineNumber = index + 1

      // Check for unclosed brackets
      const openBrackets = (line.match(/\{/g) || []).length
      const closeBrackets = (line.match(/\}/g) || []).length

      // Check for JSX in .ts files
      if (filePath.endsWith(".ts") && !filePath.endsWith(".d.ts")) {
        if (line.includes("<") && line.includes(">") && line.includes("className")) {
          this.addIssue(
            this.SEVERITY.CRITICAL,
            this.CATEGORY.SYNTAX,
            "JSX syntax found in .ts file",
            filePath,
            "Change file extension to .tsx or convert JSX to plain TypeScript",
            lineNumber,
          )
        }
      }

      // Check for console.log in production files
      if (line.includes("console.log") && !filePath.includes("scripts/")) {
        this.addIssue(
          this.SEVERITY.LOW,
          this.CATEGORY.PERFORMANCE,
          "console.log statement found",
          filePath,
          "Remove console.log or use proper logging library",
          lineNumber,
        )
      }

      // Check for TODO/FIXME comments
      if (line.includes("TODO") || line.includes("FIXME")) {
        this.addIssue(
          this.SEVERITY.LOW,
          this.CATEGORY.FILE_STRUCTURE,
          "TODO/FIXME comment found",
          filePath,
          "Address the TODO/FIXME or create proper issue tracking",
          lineNumber,
        )
      }
    })
  }

  checkImportExportIssues(content, filePath) {
    const lines = content.split("\n")

    lines.forEach((line, index) => {
      const lineNumber = index + 1

      // Check for relative imports going up too many levels
      if (line.includes("import") && line.includes("../../../")) {
        this.addIssue(
          this.SEVERITY.MEDIUM,
          this.CATEGORY.IMPORT_EXPORT,
          "Deep relative import path",
          filePath,
          "Consider using absolute imports or restructuring files",
          lineNumber,
        )
      }

      // Check for missing file extensions in imports
      if (
        line.includes("import") &&
        line.includes("./") &&
        !line.includes(".ts") &&
        !line.includes(".tsx") &&
        !line.includes(".js")
      ) {
        // This might be okay for TypeScript, but worth noting
      }
    })
  }

  checkTypeScriptIssues(content, filePath) {
    // Check for 'any' type usage
    if (content.includes(": any") || content.includes("<any>")) {
      this.addIssue(
        this.SEVERITY.MEDIUM,
        this.CATEGORY.TYPE_ERROR,
        'Usage of "any" type found',
        filePath,
        'Replace "any" with proper TypeScript types for better type safety',
      )
    }

    // Check for @ts-ignore comments
    if (content.includes("@ts-ignore")) {
      this.addIssue(
        this.SEVERITY.MEDIUM,
        this.CATEGORY.TYPE_ERROR,
        "@ts-ignore comment found",
        filePath,
        "Fix underlying TypeScript error instead of ignoring it",
      )
    }
  }

  async auditBlogFiles() {
    console.log("\n📝 Auditing blog files...")

    const blogDir = path.join(this.projectRoot, "data", "blog")

    if (!fs.existsSync(blogDir)) {
      this.addIssue(
        this.SEVERITY.HIGH,
        this.CATEGORY.FILE_STRUCTURE,
        "Blog directory not found",
        "data/blog",
        "Create blog directory structure",
      )
      return
    }

    const blogFiles = fs.readdirSync(blogDir).filter((file) => file.endsWith(".ts"))

    for (const file of blogFiles) {
      const filePath = path.join(blogDir, file)
      const relativePath = path.relative(this.projectRoot, filePath)

      try {
        const content = fs.readFileSync(filePath, "utf8")

        // Check for required exports
        const expectedExportName = file.replace(".ts", "").replace(/-([a-z])/g, (g) => g[1].toUpperCase())

        if (!content.includes(`export const ${expectedExportName}`)) {
          this.addIssue(
            this.SEVERITY.CRITICAL,
            this.CATEGORY.IMPORT_EXPORT,
            `Missing required export: ${expectedExportName}`,
            relativePath,
            `Add "export const ${expectedExportName}" to the file`,
          )
        }

        // Check for required properties
        if (!content.includes("tags:") && !content.includes("tags =")) {
          this.addIssue(
            this.SEVERITY.HIGH,
            this.CATEGORY.TYPE_ERROR,
            "Missing tags property",
            relativePath,
            "Add tags property to blog post metadata",
          )
        }

        if (!content.includes("seo:") && !content.includes("seo =")) {
          this.addIssue(
            this.SEVERITY.HIGH,
            this.CATEGORY.TYPE_ERROR,
            "Missing seo property",
            relativePath,
            "Add seo property to blog post metadata",
          )
        }
      } catch (error) {
        this.addIssue(
          this.SEVERITY.HIGH,
          this.CATEGORY.SYNTAX,
          `Cannot process blog file: ${error.message}`,
          relativePath,
          "Fix file syntax or encoding issues",
        )
      }
    }

    console.log(`   📊 Processed ${blogFiles.length} blog files`)
  }

  async auditEnvironmentConfig() {
    console.log("\n🔐 Auditing environment configuration...")

    const envFiles = [".env.local", ".env.example", ".env"]
    let foundEnvFile = false

    for (const envFile of envFiles) {
      const envPath = path.join(this.projectRoot, envFile)
      if (fs.existsSync(envPath)) {
        foundEnvFile = true
        console.log(`   ✅ Found ${envFile}`)

        const content = fs.readFileSync(envPath, "utf8")

        // Check for required environment variables
        const requiredVars = ["RESEND_API_KEY", "CSRF_SECRET"]

        requiredVars.forEach((varName) => {
          if (!content.includes(`${varName}=`)) {
            this.addIssue(
              this.SEVERITY.HIGH,
              this.CATEGORY.DEPLOYMENT,
              `Missing required environment variable: ${varName}`,
              envFile,
              `Add ${varName} to environment configuration`,
            )
          } else if (content.includes(`${varName}=your_`) || content.includes(`${varName}=placeholder`)) {
            this.addIssue(
              this.SEVERITY.CRITICAL,
              this.CATEGORY.DEPLOYMENT,
              `Environment variable ${varName} has placeholder value`,
              envFile,
              `Set real value for ${varName}`,
            )
          }
        })
      }
    }

    if (!foundEnvFile) {
      this.addIssue(
        this.SEVERITY.CRITICAL,
        this.CATEGORY.DEPLOYMENT,
        "No environment configuration file found",
        "Environment files",
        "Create .env.local with required environment variables",
      )
    }
  }

  async auditBuildConfiguration() {
    console.log("\n🏗️ Auditing build configuration...")

    // Check package.json scripts
    if (this.packageJson && this.packageJson.scripts) {
      const requiredScripts = ["build", "dev", "start"]

      requiredScripts.forEach((script) => {
        if (!this.packageJson.scripts[script]) {
          this.addIssue(
            this.SEVERITY.HIGH,
            this.CATEGORY.BUILD,
            `Missing required script: ${script}`,
            "package.json",
            `Add "${script}" script to package.json`,
          )
        }
      })
    }

    // Check for lockfile
    const lockFiles = ["pnpm-lock.yaml", "package-lock.json", "yarn.lock"]
    let foundLockFile = false

    for (const lockFile of lockFiles) {
      if (fs.existsSync(path.join(this.projectRoot, lockFile))) {
        foundLockFile = true
        console.log(`   ✅ Found ${lockFile}`)
        break
      }
    }

    if (!foundLockFile) {
      this.addIssue(
        this.SEVERITY.HIGH,
        this.CATEGORY.BUILD,
        "No package lock file found",
        "Package lock files",
        "Run package manager install to generate lock file",
      )
    }
  }

  async findFiles(extensions) {
    const files = []

    const traverse = (dir) => {
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
    }

    traverse(this.projectRoot)
    return files
  }

  generateReport() {
    console.log("\n📊 GENERATING COMPREHENSIVE AUDIT REPORT")
    console.log("=========================================\n")

    // Group issues by severity
    const issuesBySeverity = {
      [this.SEVERITY.CRITICAL]: [],
      [this.SEVERITY.HIGH]: [],
      [this.SEVERITY.MEDIUM]: [],
      [this.SEVERITY.LOW]: [],
    }

    this.issues.forEach((issue) => {
      issuesBySeverity[issue.severity].push(issue)
    })

    // Generate summary
    console.log("📋 EXECUTIVE SUMMARY")
    console.log("===================")
    console.log(`Total Issues Found: ${this.issues.length}`)
    console.log(`🔴 Critical: ${issuesBySeverity[this.SEVERITY.CRITICAL].length}`)
    console.log(`🟠 High: ${issuesBySeverity[this.SEVERITY.HIGH].length}`)
    console.log(`🟡 Medium: ${issuesBySeverity[this.SEVERITY.MEDIUM].length}`)
    console.log(`🟢 Low: ${issuesBySeverity[this.SEVERITY.LOW].length}\n`)

    // Detailed breakdown
    Object.entries(issuesBySeverity).forEach(([severity, issues]) => {
      if (issues.length > 0) {
        const icon = {
          [this.SEVERITY.CRITICAL]: "🔴",
          [this.SEVERITY.HIGH]: "🟠",
          [this.SEVERITY.MEDIUM]: "🟡",
          [this.SEVERITY.LOW]: "🟢",
        }[severity]

        console.log(`${icon} ${severity} PRIORITY ISSUES (${issues.length})`)
        console.log("=".repeat(40))

        issues.forEach((issue, index) => {
          console.log(`\n${index + 1}. ${issue.description}`)
          console.log(`   📁 Location: ${issue.location}`)
          if (issue.lineNumber) {
            console.log(`   📍 Line: ${issue.lineNumber}`)
          }
          console.log(`   🏷️ Category: ${issue.category}`)
          console.log(`   💡 Solution: ${issue.solution}`)
        })
        console.log("\n")
      }
    })

    // Save report to file
    const report = {
      summary: {
        totalIssues: this.issues.length,
        critical: issuesBySeverity[this.SEVERITY.CRITICAL].length,
        high: issuesBySeverity[this.SEVERITY.HIGH].length,
        medium: issuesBySeverity[this.SEVERITY.MEDIUM].length,
        low: issuesBySeverity[this.SEVERITY.LOW].length,
        timestamp: new Date().toISOString(),
      },
      issues: this.issues,
      issuesBySeverity,
    }

    const reportsDir = path.join(this.projectRoot, "reports")
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true })
    }

    fs.writeFileSync(path.join(reportsDir, "comprehensive-audit-report.json"), JSON.stringify(report, null, 2))

    console.log("💾 Detailed report saved to: reports/comprehensive-audit-report.json")

    return report
  }

  async runFullAudit() {
    console.log("🚀 Starting comprehensive codebase audit...\n")

    await this.loadProjectFiles()
    await this.auditDependencies()
    await this.auditTypeScriptFiles()
    await this.auditBlogFiles()
    await this.auditEnvironmentConfig()
    await this.auditBuildConfiguration()

    const report = this.generateReport()

    console.log("\n✅ AUDIT COMPLETED")
    console.log("==================")
    console.log("Next steps: Review the generated report and follow the remediation plan.")

    return report
  }
}

// Run the audit
const auditor = new CodebaseAuditor()
auditor.runFullAudit().catch(console.error)
