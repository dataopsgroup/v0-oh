const fs = require("fs")
const path = require("path")

console.log("🧹 Removing Email Functionality Cleanup Script")
console.log("=".repeat(50))

const filesToRemove = [
  "app/api/contact/route.ts",
  "lib/email-service.ts",
  "components/contact/ContactForm.tsx",
  "components/contact/NativeStyledForm.tsx",
  "components/forms/EnhancedContactForm.tsx",
  "app/contact/contact-form.css",
]

const filesToUpdate = ["package.json", ".env.local", ".env.example", "app/contact/page.tsx"]

function removeFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath)
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath)
    console.log(`✅ Removed: ${filePath}`)
  } else {
    console.log(`⚠️  File not found: ${filePath}`)
  }
}

function updatePackageJson() {
  const packagePath = path.join(process.cwd(), "package.json")
  if (fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"))

    // Remove email-related dependencies
    const depsToRemove = ["resend", "@hookform/resolvers", "react-hook-form", "zod"]

    const removed = []
    depsToRemove.forEach((dep) => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        delete packageJson.dependencies[dep]
        removed.push(dep)
      }
      if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
        delete packageJson.devDependencies[dep]
        removed.push(dep)
      }
    })

    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
    console.log(`✅ Updated package.json - Removed: ${removed.join(", ")}`)
  }
}

function cleanEnvFiles() {
  const envFiles = [".env.local", ".env.example"]

  envFiles.forEach((envFile) => {
    const envPath = path.join(process.cwd(), envFile)
    if (fs.existsSync(envPath)) {
      let content = fs.readFileSync(envPath, "utf8")

      // Remove email-related environment variables
      const emailEnvVars = [
        "RESEND_API_KEY",
        "SMTP_HOST",
        "SMTP_PORT",
        "SMTP_USER",
        "SMTP_PASS",
        "SMTP_FROM",
        "CSRF_SECRET",
      ]

      emailEnvVars.forEach((envVar) => {
        const regex = new RegExp(`^${envVar}=.*$`, "gm")
        content = content.replace(regex, "")
      })

      // Clean up extra newlines
      content = content.replace(/\n\n+/g, "\n\n").trim()

      fs.writeFileSync(envPath, content)
      console.log(`✅ Cleaned ${envFile}`)
    }
  })
}

function findEmailReferences() {
  console.log("\n🔍 Scanning for remaining email references...")

  const searchTerms = [
    "resend",
    "Resend",
    "RESEND_API_KEY",
    "ContactForm",
    "EnhancedContactForm",
    "email-service",
    "EmailService",
    "/api/contact",
  ]

  function scanDirectory(dir, results = []) {
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules" && file !== "dist") {
        scanDirectory(filePath, results)
      } else if (
        stat.isFile() &&
        (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx"))
      ) {
        try {
          const content = fs.readFileSync(filePath, "utf8")
          searchTerms.forEach((term) => {
            if (content.includes(term)) {
              results.push({
                file: path.relative(process.cwd(), filePath),
                term: term,
                lines: content
                  .split("\n")
                  .map((line, index) => (line.includes(term) ? `Line ${index + 1}: ${line.trim()}` : null))
                  .filter(Boolean),
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

  const references = scanDirectory(process.cwd())

  if (references.length > 0) {
    console.log("\n⚠️  Found remaining email references:")
    references.forEach((ref) => {
      console.log(`\n📄 ${ref.file} (${ref.term}):`)
      ref.lines.forEach((line) => console.log(`   ${line}`))
    })
  } else {
    console.log("✅ No remaining email references found!")
  }

  return references
}

// Execute cleanup
console.log("\n1️⃣ Removing email-related files...")
filesToRemove.forEach(removeFile)

console.log("\n2️⃣ Updating package.json...")
updatePackageJson()

console.log("\n3️⃣ Cleaning environment files...")
cleanEnvFiles()

console.log("\n4️⃣ Scanning for remaining references...")
const remainingRefs = findEmailReferences()

console.log("\n" + "=".repeat(50))
console.log("🎉 Email Functionality Removal Complete!")
console.log("\n📋 Next Steps:")
console.log("1. Run: pnpm install (to update dependencies)")
console.log("2. Run: pnpm run build (to test build)")
console.log("3. Review and fix any remaining references shown above")
console.log("4. Test the LinkedIn contact page functionality")

if (remainingRefs.length > 0) {
  console.log("\n⚠️  Manual cleanup required for remaining references")
}
