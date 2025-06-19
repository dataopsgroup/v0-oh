import type { BlogPost } from "@/types/blog"

// Cache for blog posts to avoid re-importing
let cachedPosts: BlogPost[] | null = null

export async function getAllPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts
  }

  const posts: BlogPost[] = []

  // List of all blog post file names (without extension)
  const blogFiles = [
    "3-tips-for-smart-workflows",
    "audio-visual-equipment-wholesaler",
    "create-pro-level-hubspot-lead-score-model",
    "crm-cleanup-plan",
    "customer-acquisition-cost",
    "customer-churn-blindspot",
    "customer-segmentation-mistake-icp",
    "customer-segmentation-mistake",
    "data-enrichment-strategy",
    "data-truth-gap",
    "demystifying-utm-parameters",
    "forgotten-art-campaign-documentation",
    "hidden-revenue-leak",
    "hiring-and-working-with-a-hubspot-consultant",
    "how-to-hire-a-hubspot-consultant",
    "hubspot-blog-best-practices",
    "lead-scoring-pitfalls",
    "lead-tiers-case-study",
    "marketing-attribution-models-broken",
    "marketing-dashboards-fail",
    "marketing-data-management",
    "marketing-leaders-data-quality-crisis",
    "marketing-operations-isnt-it",
    "multi-national-specialty-insurance",
    "navigating-first-90-days-revops",
    "psychology-data-governance",
    "saas-healthcare-achieves-remarkable-insights",
    "sales-follow-up-myth",
    "sales-ignoring-marketing-leads",
    "sales-pipeline-metrics",
    "sales-team-stalling-deals",
    "silent-sales-marketing-divide",
    "stop-buying-contact-lists",
    "true-cost-of-bad-data",
    "upscale-home-improvement-goods-manufacturer",
    "what-does-a-hubspot-consultant-cost",
    "what-hubspot-does-for-marketing",
    "why-64-percent-pe-portfolio-companies-fail-hubspot-implementation",
  ]

  // Dynamically import each blog post
  for (const fileName of blogFiles) {
    try {
      const module = await import(`@/data/blog/${fileName}`)

      // Try different export patterns
      let post: BlogPost | null = null

      // Try default export first
      if (module.default && typeof module.default === "object") {
        post = module.default
      }
      // Try named export (look for any export that looks like a blog post)
      else {
        const exportKeys = Object.keys(module)
        for (const key of exportKeys) {
          if (module[key] && typeof module[key] === "object" && module[key].id) {
            post = module[key]
            break
          }
        }
      }

      if (post && post.id) {
        posts.push(post)
      } else {
        console.warn(`Could not find valid blog post export in ${fileName}`)
      }
    } catch (error) {
      console.warn(`Failed to import blog post ${fileName}:`, error)
    }
  }

  // Sort posts by date (newest first)
  cachedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return cachedPosts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts()
  return posts.find((post) => post.id === slug)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category === category)
}

export async function getRelatedPosts(currentPost: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category ||
          (post.tags && currentPost.tags && post.tags.some((tag) => currentPost.tags.includes(tag)))),
    )
    .slice(0, limit)
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch {
    return dateString
  }
}

export function calculateReadTime(content: string): number {
  if (!content) return 1

  const wordsPerMinute = 200
  const wordCount = content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}
