const fs = require("fs")
const path = require("path")

console.log("📋 CREATING TARGETED EMAIL CLEANUP PLAN")
console.log("=".repeat(50))

// This will create a step-by-step plan based on actual findings
function createCleanupPlan() {
  const plan = {
    phase1_critical: [],
    phase2_cleanup: [],
    phase3_verification: [],
    dependencies_to_remove: [],
    env_vars_to_remove: [],
    files_to_remove: [],
    files_to_update: [],
    manual_review_needed: [],
  }

  // Check what actually exists and needs to be cleaned up
  const filesToCheck = [
    "app/api/contact/route.ts",
    "lib/email-service.ts",
    "components/contact/ContactForm.tsx",
    "components/contact/NativeStyledForm.tsx",
    "components/forms/EnhancedContactForm.tsx",
    "app/contact/contact-form.css",
  ]

  filesToCheck.forEach((file) => {
    const fullPath = path.join(process.cwd(), file)
    if (fs.existsSync(fullPath)) {
      plan.files_to_remove.push(file)
    }
  })

  // Check package.json for dependencies
  const packagePath = path.join(process.cwd(), "package.json")
  if (fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"))

    const emailDeps = ["resend", "nodemailer"]
    const formDeps = ["@hookform/resolvers", "react-hook-form", "zod"]

    // Only remove if they're actually present and not used elsewhere
    emailDeps.forEach((dep) => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        plan.dependencies_to_remove.push(dep)
      }
    })

    // Form dependencies need manual review - they might be used elsewhere
    formDeps.forEach((dep) => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        plan.manual_review_needed.push(`Review if ${dep} is used elsewhere before removing`)
      }
    })
  }

  // Environment variables to remove
  plan.env_vars_to_remove = ["RESEND_API_KEY", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]

  // Files that need updates (not removal)
  plan.files_to_update = [
    "app/contact/page.tsx", // Ensure it only shows LinkedIn contact
  ]

  // Create phases
  plan.phase1_critical = [
    "Remove API route that handles form submissions",
    "Remove email service library",
    "Remove contact form components",
  ]

  plan.phase2_cleanup = [
    "Remove email-related dependencies from package.json",
    "Clean environment variables",
    "Remove CSS files for forms",
    "Update contact page to be LinkedIn-only",
  ]

  plan.phase3_verification = [
    "Scan for remaining references",
    "Test build process",
    "Verify contact page works",
    "Check for broken imports",
  ]

  return plan
}

const plan = createCleanupPlan()

console.log("📋 CLEANUP PLAN GENERATED:")
console.log("\n🔴 PHASE 1 - CRITICAL REMOVALS:")
plan.phase1_critical.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`)
})

console.log("\n🟡 PHASE 2 - CLEANUP:")
plan.phase2_cleanup.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`)
})

console.log("\n🟢 PHASE 3 - VERIFICATION:")
plan.phase3_verification.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`)
})

console.log("\n📁 FILES TO REMOVE:")
plan.files_to_remove.forEach((file) => {
  console.log(`   ❌ ${file}`)
})

console.log("\n📁 FILES TO UPDATE:")
plan.files_to_update.forEach((file) => {
  console.log(`   ✏️  ${file}`)
})

console.log("\n📦 DEPENDENCIES TO REMOVE:")
plan.dependencies_to_remove.forEach((dep) => {
  console.log(`   ❌ ${dep}`)
})

console.log("\n🔐 ENVIRONMENT VARIABLES TO REMOVE:")
plan.env_vars_to_remove.forEach((envVar) => {
  console.log(`   ❌ ${envVar}`)
})

console.log("\n⚠️  MANUAL REVIEW NEEDED:")
plan.manual_review_needed.forEach((item) => {
  console.log(`   🔍 ${item}`)
})

// Save plan to file for reference
fs.writeFileSync(path.join(process.cwd(), "cleanup-plan.json"), JSON.stringify(plan, null, 2))

console.log("\n✅ Cleanup plan saved to cleanup-plan.json")
console.log("\n📋 NEXT STEPS:")
console.log("1. Review the analysis results")
console.log("2. Confirm which files/dependencies are safe to remove")
console.log("3. Execute cleanup in phases")
console.log("4. Test after each phase")
