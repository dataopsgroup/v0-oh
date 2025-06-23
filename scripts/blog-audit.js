const fs = require("fs")
const path = require("path")

// Blog audit script
function auditBlogSetup() {
  console.log("🔍 Starting Comprehensive Blog Audit...\n")

  const results = {
    files: { found: [], missing: [] },
    components: { working: [], broken: [] },
    posts: { valid: [], invalid: [] },
    links: { internal: [], external: [], broken: [] },
    categories: new Set(),
    tags: new Set(),
    authors: new Set(),
    issues: [],
    recommendations: [],
  }

  // Check required files
  const requiredFiles = [
    "types/blog.ts",
    "lib/blog.ts",
    "components/blog/BlogCard.tsx",
    "components/blog/BlogPostContent.tsx",
    "components/blog/BlogPostHeader.tsx",
    "components/blog/RelatedArticles.tsx",
    "app/insights/page.tsx",
    "app/insights/[slug]/page.tsx",
  ]

  console.log("📁 Checking Required Files:")
  requiredFiles.forEach((file) => {
    const filePath = path.join(process.cwd(), file)
    if (fs.existsSync(filePath)) {
      results.files.found.push(file)
      console.log(`  ✅ ${file}`)
    } else {
      results.files.missing.push(file)
      console.log(`  ❌ ${file} - MISSING`)
      results.issues.push(`Missing required file: ${file}`)
    }
  })

  // Check blog data directory
  console.log("\n📝 Checking Blog Posts:")
  const blogDataDir = path.join(process.cwd(), "data", "blog")

  if (fs.existsSync(blogDataDir)) {
    const blogFiles = fs.readdirSync(blogDataDir).filter((file) => file.endsWith(".ts"))
    console.log(`  Found ${blogFiles.length} blog post files`)

    blogFiles.forEach((file) => {
      console.log(`  📄 ${file}`)
    })
  } else {
    console.log("  ❌ Blog data directory not found")
    results.issues.push("Blog data directory missing")
  }

  // Check for common issues
  console.log("\n🔧 Checking for Common Issues:")

  // Check if lib/blog.ts imports are correct
  const blogLibPath = path.join(process.cwd(), "lib", "blog.ts")
  if (fs.existsSync(blogLibPath)) {
    const blogLibContent = fs.readFileSync(blogLibPath, "utf8")

    // Check for import issues
    if (blogLibContent.includes("import {") && blogLibContent.includes('} from "@/data/blog/')) {
      console.log("  ✅ Blog imports look correct")
    } else {
      console.log("  ⚠️  Blog imports might have issues")
      results.issues.push("Blog imports in lib/blog.ts might be incorrect")
    }

    // Check for export issues
    if (blogLibContent.includes("export function getAllPosts")) {
      console.log("  ✅ getAllPosts function exported")
    } else {
      console.log("  ❌ getAllPosts function missing")
      results.issues.push("getAllPosts function not found")
    }
  }

  // Check types/blog.ts
  const blogTypesPath = path.join(process.cwd(), "types", "blog.ts")
  if (fs.existsSync(blogTypesPath)) {
    const blogTypesContent = fs.readFileSync(blogTypesPath, "utf8")

    if (blogTypesContent.includes("export interface BlogPost")) {
      console.log("  ✅ BlogPost interface exported")
    } else {
      console.log("  ❌ BlogPost interface missing")
      results.issues.push("BlogPost interface not properly exported")
    }
  }

  // Generate recommendations
  console.log("\n💡 Recommendations:")

  if (results.files.missing.length > 0) {
    results.recommendations.push("Create missing required files")
    console.log("  📝 Create missing required files")
  }

  if (results.issues.length === 0) {
    results.recommendations.push("Blog setup looks good!")
    console.log("  🎉 Blog setup appears to be complete!")
  } else {
    results.recommendations.push("Fix identified issues before deployment")
    console.log("  🔧 Address the issues listed above")
  }

  // Summary
  console.log("\n📊 Audit Summary:")
  console.log(`  Files Found: ${results.files.found.length}/${requiredFiles.length}`)
  console.log(`  Issues Found: ${results.issues.length}`)
  console.log(`  Recommendations: ${results.recommendations.length}`)

  if (results.issues.length > 0) {
    console.log("\n🚨 Issues to Fix:")
    results.issues.forEach((issue, index) => {
      console.log(`  ${index + 1}. ${issue}`)
    })
  }

  return results
}

// Run the audit
if (require.main === module) {
  auditBlogSetup()
}

module.exports = { auditBlogSetup }
