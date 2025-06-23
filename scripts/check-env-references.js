const fs = require("fs")
const path = require("path")

console.log("🔍 Checking for Environment Variable References")
console.log("=".repeat(50))

const removedEnvVars = [
  "RESEND_API_KEY",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
  "CSRF_SECRET",
]

function scanForEnvReferences(dir, results = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules" && file !== "dist") {
      scanForEnvReferences(filePath, results)
    } else if (
      stat.isFile() &&
      (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx"))
    ) {
      try {
        const content = fs.readFileSync(filePath, "utf8")

        removedEnvVars.forEach((envVar) => {
          if (content.includes(`process.env.${envVar}`) || content.includes(`env.${envVar}`)) {
            results.push({
              file: path.relative(process.cwd(), filePath),
              envVar: envVar,
              lines: content
                .split("\n")
                .map((line, index) =>
                  line.includes(`process.env.${envVar}`) || line.includes(`env.${envVar}`)
                    ? `Line ${index + 1}: ${line.trim()}`
                    : null,
                )
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

const references = scanForEnvReferences(process.cwd())

if (references.length > 0) {
  console.log("⚠️  Found environment variable references that need cleanup:")
  references.forEach((ref) => {
    console.log(`\n📄 ${ref.file} (${ref.envVar}):`)
    ref.lines.forEach((line) => console.log(`   ${line}`))
  })

  console.log("\n🔧 These references need to be removed or updated.")
} else {
  console.log("✅ No problematic environment variable references found!")
}

console.log("\n" + "=".repeat(50))
console.log("🎉 Environment Variable Check Complete!")
