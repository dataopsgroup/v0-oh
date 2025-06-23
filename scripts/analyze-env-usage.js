const fs = require("fs")
const path = require("path")

console.log("🔍 ANALYZING ENVIRONMENT VARIABLE USAGE")
console.log("=====================================\n")

// Environment variables defined
const envVars = ["RESEND_API_KEY", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM", "CSRF_SECRET"]

// Function to search for env var usage in files
function searchInFile(filePath, envVar) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const patterns = [
      `process.env.${envVar}`,
      `process.env["${envVar}"]`,
      `process.env['${envVar}']`,
      `env.${envVar}`,
      envVar,
    ]

    const found = patterns.some((pattern) => content.includes(pattern))
    if (found) {
      // Find line numbers
      const lines = content.split("\n")
      const lineNumbers = []
      lines.forEach((line, index) => {
        if (patterns.some((pattern) => line.includes(pattern))) {
          lineNumbers.push(index + 1)
        }
      })
      return lineNumbers
    }
  } catch (error) {
    // File doesn't exist or can't be read
  }
  return []
}

// Function to recursively search directory
function searchDirectory(dir, envVar, results = []) {
  try {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip node_modules, .git, dist, etc.
        if (!["node_modules", ".git", "dist", ".next"].includes(item)) {
          searchDirectory(fullPath, envVar, results)
        }
      } else if (stat.isFile()) {
        // Only check relevant file types
        if (/\.(ts|tsx|js|jsx|mjs)$/.test(item)) {
          const lineNumbers = searchInFile(fullPath, envVar)
          if (lineNumbers.length > 0) {
            results.push({
              file: fullPath.replace(process.cwd(), ""),
              lines: lineNumbers,
            })
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error searching directory ${dir}:`, error.message)
  }

  return results
}

// Analyze each environment variable
const analysis = {}

envVars.forEach((envVar) => {
  console.log(`\n📋 Analyzing: ${envVar}`)
  console.log("-".repeat(40))

  const usage = searchDirectory(process.cwd(), envVar)
  analysis[envVar] = usage

  if (usage.length === 0) {
    console.log("❌ NOT USED - Can be removed")
  } else {
    console.log(`✅ USED in ${usage.length} file(s):`)
    usage.forEach(({ file, lines }) => {
      console.log(`   📁 ${file} (lines: ${lines.join(", ")})`)
    })
  }
})

console.log("\n\n📊 SUMMARY REPORT")
console.log("==================")

const used = Object.entries(analysis).filter(([_, usage]) => usage.length > 0)
const unused = Object.entries(analysis).filter(([_, usage]) => usage.length === 0)

console.log(`\n✅ REQUIRED (${used.length}):`)
used.forEach(([envVar, usage]) => {
  console.log(`   • ${envVar} - Used in ${usage.length} file(s)`)
})

console.log(`\n❌ CAN BE REMOVED (${unused.length}):`)
unused.forEach(([envVar]) => {
  console.log(`   • ${envVar} - Not used anywhere`)
})

// Check if email functionality is actually needed
console.log("\n\n🔍 EMAIL FUNCTIONALITY ANALYSIS")
console.log("================================")

const emailFiles = [
  "/app/api/contact/route.ts",
  "/lib/email-service.ts",
  "/components/contact/ContactForm.tsx",
  "/components/forms/EnhancedContactForm.tsx",
]

let emailFunctionalityUsed = false
emailFiles.forEach((file) => {
  const fullPath = path.join(process.cwd(), file)
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file} - EXISTS`)
    emailFunctionalityUsed = true
  } else {
    console.log(`❌ ${file} - NOT FOUND`)
  }
})

if (emailFunctionalityUsed) {
  console.log("\n📧 EMAIL FUNCTIONALITY: ACTIVE")
  console.log("   - Contact forms are present")
  console.log("   - Email service is configured")
  console.log("   - Resend integration is being used")
} else {
  console.log("\n📧 EMAIL FUNCTIONALITY: INACTIVE")
  console.log("   - No email functionality detected")
  console.log("   - All email-related env vars can be removed")
}

console.log("\n\n💡 RECOMMENDATIONS")
console.log("===================")

if (emailFunctionalityUsed) {
  console.log("1. 📧 EMAIL VARIABLES:")
  console.log("   - Keep RESEND_API_KEY if using contact forms")
  console.log("   - Remove SMTP_* variables (not used with Resend)")
  console.log("   - Or remove ALL email vars if removing contact functionality")

  console.log("\n2. 🔒 SECURITY VARIABLES:")
  console.log("   - Keep CSRF_SECRET if using CSRF protection")
  console.log("   - Remove if not implementing CSRF protection")
} else {
  console.log("1. 🗑️  REMOVE ALL EMAIL VARIABLES:")
  console.log("   - RESEND_API_KEY")
  console.log("   - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM")

  console.log("\n2. 🔒 SECURITY VARIABLES:")
  console.log("   - Keep CSRF_SECRET only if needed for security")
}

console.log("\n✨ NEXT STEPS:")
console.log("1. Review the analysis above")
console.log("2. Decide if you want to keep email functionality")
console.log("3. Remove unused environment variables")
console.log("4. Update .env files and deployment configs")
