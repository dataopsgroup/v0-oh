import type { BlogPost } from "@/types/blog"

// Define all blog post file names (without extensions)
const BLOG_POST_FILES = [
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

// Cache for loaded blog posts
let blogPostsCache: BlogPost[] | null = null

// Dynamic import function with error handling
async function loadBlogPost(fileName: string): Promise<BlogPost | null> {
  try {
    const module = await import(`@/data/blog/${fileName}`)

    // Try different export patterns
    const possibleExports = [
      module.default,
      ...Object.values(module).filter(
        (exp): exp is BlogPost => exp && typeof exp === "object" && "id" in exp && "title" in exp,
      ),
    ]

    const blogPost = possibleExports.find(
      (exp): exp is BlogPost => exp && typeof exp === "object" && "id" in exp && "title" in exp,
    )

    if (blogPost) {
      return blogPost
    } else {
      console.warn(`No valid blog post export found in ${fileName}`)
      return null
    }
  } catch (error) {
    console.warn(`Failed to load blog post ${fileName}:`, error)
    return null
  }
}

// Load all blog posts with error handling
async function loadAllBlogPosts(): Promise<BlogPost[]> {
  if (blogPostsCache) {
    return blogPostsCache
  }

  const loadPromises = BLOG_POST_FILES.map((fileName) => loadBlogPost(fileName))
  const results = await Promise.all(loadPromises)

  // Filter out failed imports and cache results
  blogPostsCache = results.filter((post): post is BlogPost => post !== null)

  console.log(`Successfully loaded ${blogPostsCache.length} out of ${BLOG_POST_FILES.length} blog posts`)

  return blogPostsCache
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await loadAllBlogPosts()
  // Sort by date - newest first (top-left to bottom-right in grid)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await loadAllBlogPosts()
  return posts.find((post) => post.id === slug)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await loadAllBlogPosts()
  return posts.filter((post) => post.category === category)
}

export async function getRelatedPosts(currentPost: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = await loadAllBlogPosts()
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

// Synchronous versions for components that need immediate data
// These will return cached data or empty arrays if not loaded yet
export function getAllPostsSync(): BlogPost[] {
  return blogPostsCache || []
}

export function getPostBySlugSync(slug: string): BlogPost | undefined {
  return blogPostsCache?.find((post) => post.id === slug)
}
