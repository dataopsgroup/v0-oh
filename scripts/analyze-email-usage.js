const fs = require("fs")
const path = require("path")

console.log("🔍 COMPREHENSIVE EMAIL FUNCTIONALITY ANALYSIS")
console.log("=".repeat(60))

// Files that potentially contain email functionality
const emailRelatedFiles = [
  "app/api/contact/route.ts",
  "lib/email-service.ts",
  "components/contact/ContactForm.tsx",
  "components/contact/NativeStyledForm.tsx",
  "components/forms/EnhancedContactForm.tsx",
  "app/contact/contact-form.css",
  "app/contact/page.tsx",
]

// Dependencies that might be email-related
const potentialEmailDeps = ["resend", "@hookform/resolvers", "react-hook-form", "zod", "nodemailer"]

// Environment variables that might be email-related
const emailEnvVars = ["RESEND_API_KEY", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM", "CSRF_SECRET"]

function analyzeFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath)

  if (!fs.existsSync(fullPath)) {
    return { exists: false, analysis: null }
  }

  try {
    const content = fs.readFileSync(fullPath, "utf8")

    const analysis = {
      exists: true,
      size: content.length,
      lines: content.split("\n").length,
      imports: [],
      exports: [],
      emailKeywords: [],
      formKeywords: [],
      dependencies: [],
    }

    // Find imports
    const importMatches = content.match(/^import.*from.*$/gm) || []
    analysis.imports = importMatches

    // Find exports
    const exportMatches = content.match(/^export.*$/gm) || []
    analysis.exports = exportMatches

    // Check for email-related keywords
    const emailKeywords = ["resend", "Resend", "email", "Email", "smtp", "SMTP", "mail", "Mail"]
    emailKeywords.forEach((keyword) => {
      if (content.includes(keyword)) {
        analysis.emailKeywords.push(keyword)
      }
    })

    // Check for form-related keywords
    const formKeywords = ["useForm", "FormData", "onSubmit", "handleSubmit", "validation", "zod"]
    formKeywords.forEach((keyword) => {
      if (content.includes(keyword)) {
        analysis.formKeywords.push(keyword)
      }
    })

    return { exists: true, analysis }
  } catch (error) {
    return { exists: true, analysis: { error: error.message } }
  }
}

function analyzePackageJson() {
  const packagePath = path.join(process.cwd(), "package.json")

  if (!fs.existsSync(packagePath)) {
    return { exists: false }
  }

  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"))

  const foundDeps = {
    dependencies: {},
    devDependencies: {},
  }

  potentialEmailDeps.forEach((dep) => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      foundDeps.dependencies[dep] = packageJson.dependencies[dep]
    }
    if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
      foundDeps.devDependencies[dep] = packageJson.devDependencies[dep]
    }
  })

  return { exists: true, foundDeps, allDeps: Object.keys(packageJson.dependencies || {}) }
}

function analyzeEnvFiles() {
  const envFiles = [".env.local", ".env.example", ".env"]
  const results = {}

  envFiles.forEach((envFile) => {
    const envPath = path.join(process.cwd(), envFile)
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf8")
      const foundVars = {}

      emailEnvVars.forEach((envVar) => {
        const regex = new RegExp(`^${envVar}=(.*)$`, "m")
        const match = content.match(regex)
        if (match) {
          foundVars[envVar] = match[1] || "(empty)"
        }
      })

      results[envFile] = { exists: true, foundVars }
    } else {
      results[envFile] = { exists: false }
    }
  })

  return results
}

function findAllReferences() {
  console.log("\n🔍 Scanning entire codebase for email references...")

  const searchTerms = [
    "resend",
    "Resend",
    "RESEND",
    "ContactForm",
    "contact-form",
    "contactForm",
    "EnhancedContactForm",
    "NativeStyledForm",
    "/api/contact",
    "email-service",
    "EmailService",
  ]

  const references = {}

  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return

    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (
        stat.isDirectory() &&
        !file.startsWith(".") &&
        file !== "node_modules" &&
        file !== "dist" &&
        file !== ".next"
      ) {
        scanDirectory(filePath)
      } else if (
        stat.isFile() &&
        (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx"))
      ) {
        try {
          const content = fs.readFileSync(filePath, "utf8")
          const relativePath = path.relative(process.cwd(), filePath)

          searchTerms.forEach((term) => {
            if (content.includes(term)) {
              if (!references[relativePath]) {
                references[relativePath] = []
              }

              const lines = content.split("\n")
              lines.forEach((line, index) => {
                if (line.includes(term)) {
                  references[relativePath].push({
                    term,
                    line: index + 1,
                    content: line.trim(),
                  })
                }
              })
            }
          })
        } catch (error) {
          // Skip files that can't be read
        }
      }
    })
  }

  scanDirectory(process.cwd())
  return references
}

// Run analysis
console.log("\n📁 ANALYZING EMAIL-RELATED FILES:")
console.log("-".repeat(40))

emailRelatedFiles.forEach((file) => {
  const result = analyzeFile(file)
  console.log(`\n📄 ${file}:`)

  if (!result.exists) {
    console.log("   ❌ File does not exist")
  } else if (result.analysis.error) {
    console.log(`   ⚠️  Error reading file: ${result.analysis.error}`)
  } else {
    const analysis = result.analysis
    console.log(`   ✅ Exists (${analysis.size} bytes, ${analysis.lines} lines)`)

    if (analysis.imports.length > 0) {
      console.log(`   📥 Imports (${analysis.imports.length}):`)
      analysis.imports.forEach((imp) => console.log(`      ${imp}`))
    }

    if (analysis.exports.length > 0) {
      console.log(`   📤 Exports (${analysis.exports.length}):`)
      analysis.exports.forEach((exp) => console.log(`      ${exp}`))
    }

    if (analysis.emailKeywords.length > 0) {
      console.log(`   📧 Email keywords: ${analysis.emailKeywords.join(", ")}`)
    }

    if (analysis.formKeywords.length > 0) {
      console.log(`   📝 Form keywords: ${analysis.formKeywords.join(", ")}`)
    }
  }
})

console.log("\n📦 ANALYZING DEPENDENCIES:")
console.log("-".repeat(40))

const packageAnalysis = analyzePackageJson()
if (packageAnalysis.exists) {
  console.log("✅ package.json exists")

  if (Object.keys(packageAnalysis.foundDeps.dependencies).length > 0) {
    console.log("\n📧 Email-related dependencies:")
    Object.entries(packageAnalysis.foundDeps.dependencies).forEach(([dep, version]) => {
      console.log(`   ${dep}: ${version}`)
    })
  }

  if (Object.keys(packageAnalysis.foundDeps.devDependencies).length > 0) {
    console.log("\n📧 Email-related devDependencies:")
    Object.entries(packageAnalysis.foundDeps.devDependencies).forEach(([dep, version]) => {
      console.log(`   ${dep}: ${version}`)
    })
  }

  if (
    Object.keys(packageAnalysis.foundDeps.dependencies).length === 0 &&
    Object.keys(packageAnalysis.foundDeps.devDependencies).length === 0
  ) {
    console.log("✅ No email-related dependencies found")
  }
} else {
  console.log("❌ package.json not found")
}

console.log("\n🔐 ANALYZING ENVIRONMENT VARIABLES:")
console.log("-".repeat(40))

const envAnalysis = analyzeEnvFiles()
Object.entries(envAnalysis).forEach(([file, result]) => {
  console.log(`\n📄 ${file}:`)
  if (!result.exists) {
    console.log("   ❌ File does not exist")
  } else {
    if (Object.keys(result.foundVars).length > 0) {
      console.log("   📧 Email-related variables:")
      Object.entries(result.foundVars).forEach(([varName, value]) => {
        console.log(`   ${varName}=${value}`)
      })
    } else {
      console.log("   ✅ No email-related variables found")
    }
  }
})

console.log("\n🔍 FINDING ALL REFERENCES:")
console.log("-".repeat(40))

const allReferences = findAllReferences()
if (Object.keys(allReferences).length > 0) {
  Object.entries(allReferences).forEach(([file, refs]) => {
    console.log(`\n📄 ${file}:`)
    refs.forEach((ref) => {
      console.log(`   Line ${ref.line} (${ref.term}): ${ref.content}`)
    })
  })
} else {
  console.log("✅ No email references found in codebase")
}

console.log("\n" + "=".repeat(60))
console.log("📊 ANALYSIS COMPLETE")
console.log("\nNext: Review findings and create targeted cleanup plan")
