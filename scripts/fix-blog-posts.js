const fs = require("fs")
const path = require("path")

// Get the correct path to the blog directory
const blogDir = path.join(__dirname, "..", "data", "blog")

console.log(`Looking for blog directory at: ${blogDir}`)

function generateTags(title, content) {
  const text = `${title} ${content}`.toLowerCase()

  const relevantTerms = [
    "hubspot",
    "marketing",
    "sales",
    "crm",
    "data",
    "analytics",
    "operations",
    "revops",
    "lead",
    "scoring",
    "automation",
    "workflow",
    "pipeline",
    "roi",
    "conversion",
    "attribution",
    "segmentation",
    "personalization",
    "optimization",
    "integration",
    "reporting",
    "dashboard",
    "metrics",
    "kpi",
    "strategy",
    "implementation",
    "consulting",
    "training",
  ]

  const foundTerms = relevantTerms.filter((term) => text.includes(term))

  if (foundTerms.length >= 3) {
    return foundTerms.slice(0, 5)
  }

  const titleWords = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .slice(0, 5)

  return titleWords.length > 0 ? titleWords : ["marketing", "hubspot", "strategy"]
}

function generateSeo(title, excerpt, content) {
  let metaDescription = excerpt || ""
  if (!metaDescription && content) {
    const firstSentence = content.match(/^[^.!?]*[.!?]/)
    metaDescription = firstSentence ? firstSentence[0] : content.substring(0, 150)
  }

  metaDescription = metaDescription.replace(/[#*`]/g, "").trim()
  if (metaDescription.length > 160) {
    metaDescription = metaDescription.substring(0, 157) + "..."
  }

  const keywords = generateTags(title, content).join(", ")

  return {
    metaDescription,
    keywords,
    ogTitle: title,
    ogDescription: metaDescription,
    twitterTitle: title,
    twitterDescription: metaDescription,
  }
}

function extractBlogPostData(sourceCode) {
  const titleMatch = sourceCode.match(/title:\s*['"`]([^'"`]+)['"`]/)
  const excerptMatch = sourceCode.match(/excerpt:\s*['"`]([^'"`]+)['"`]/)
  const contentMatch = sourceCode.match(/content:\s*['"`]([\s\S]*?)['"`](?=,|\s*})/)

  return {
    title: titleMatch ? titleMatch[1] : "",
    excerpt: excerptMatch ? excerptMatch[1] : "",
    content: contentMatch ? contentMatch[1].substring(0, 500) : "",
  }
}

function fixBlogPostFile(filePath) {
  try {
    console.log(`Processing: ${path.basename(filePath)}`)

    const sourceCode = fs.readFileSync(filePath, "utf8")

    const hasTags = /tags:\s*\[/.test(sourceCode)
    const hasSeo = /seo:\s*{/.test(sourceCode)

    if (hasTags && hasSeo) {
      console.log(`  ✓ Already has tags and seo properties`)
      return
    }

    const { title, excerpt, content } = extractBlogPostData(sourceCode)

    if (!title) {
      console.log(`  ⚠ Could not extract title, skipping`)
      return
    }

    const modifications = []

    if (!hasTags) {
      const tags = generateTags(title, content)
      const tagsString = `  tags: ${JSON.stringify(tags)},`
      modifications.push({ type: "tags", content: tagsString })
    }

    if (!hasSeo) {
      const seo = generateSeo(title, excerpt, content)
      const seoString = `  seo: ${JSON.stringify(seo, null, 4).replace(/\n/g, "\n  ")},`
      modifications.push({ type: "seo", content: seoString })
    }

    if (modifications.length > 0) {
      const exportMatch = sourceCode.match(/(export const \w+ = {)/)
      if (exportMatch) {
        let newSourceCode = sourceCode
        const insertPoint = exportMatch.index + exportMatch[1].length

        const insertContent = "\n" + modifications.map((mod) => mod.content).join("\n")
        newSourceCode = newSourceCode.slice(0, insertPoint) + insertContent + newSourceCode.slice(insertPoint)

        fs.writeFileSync(filePath, newSourceCode, "utf8")
        console.log(`  ✓ Added: ${modifications.map((m) => m.type).join(", ")}`)
      } else {
        console.log(`  ⚠ Could not find export statement`)
      }
    }
  } catch (error) {
    console.error(`  ✗ Error processing ${path.basename(filePath)}:`, error.message)
  }
}

function main() {
  try {
    if (!fs.existsSync(blogDir)) {
      console.error(`Blog directory not found: ${blogDir}`)
      console.log("Make sure you are running this script from your project root directory.")
      return
    }

    const files = fs.readdirSync(blogDir)
    const tsFiles = files.filter((file) => file.endsWith(".ts"))

    console.log(`Found ${tsFiles.length} TypeScript files in blog directory`)

    if (tsFiles.length === 0) {
      console.log("No TypeScript files found to process")
      return
    }

    tsFiles.forEach((file) => {
      const filePath = path.join(blogDir, file)
      fixBlogPostFile(filePath)
    })

    console.log("\n✓ Blog post fixing complete!")
  } catch (error) {
    console.error("Error:", error.message)
  }
}

main()
