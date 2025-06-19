import type { BlogPost } from "@/types/blog"

// For now, let's create some sample posts to make sure the layout works
// Then we can connect your real blog data once the layout is working
const samplePosts: BlogPost[] = [
  {
    id: "sample-post-1",
    title: "How to Transform Your HubSpot Setup Into a Revenue Machine",
    excerpt:
      "Learn the proven strategies that help companies increase their revenue by 40% through better HubSpot configuration and data management.",
    content: "Sample content here...",
    author: "DataOps Group",
    date: "2024-01-15",
    category: "HubSpot",
    tags: ["hubspot", "revenue", "optimization"],
    coverImage: "/placeholder.svg?height=200&width=400&text=HubSpot+Revenue",
  },
  {
    id: "sample-post-2",
    title: "The Hidden Revenue Leak in Your Sales Pipeline",
    excerpt:
      "Discover the common data quality issues that are costing your company thousands in lost revenue every month.",
    content: "Sample content here...",
    author: "DataOps Group",
    date: "2024-01-10",
    category: "Analytics",
    tags: ["sales", "pipeline", "data-quality"],
    coverImage: "/placeholder.svg?height=200&width=400&text=Revenue+Leak",
  },
  {
    id: "sample-post-3",
    title: "Private Equity Portfolio Company Success Story",
    excerpt: "How one PE portfolio company increased valuation by 25% through strategic data operations improvements.",
    content: "Sample content here...",
    author: "DataOps Group",
    date: "2024-01-05",
    category: "Case Studies",
    tags: ["private-equity", "case-study", "valuation"],
    coverImage: "/placeholder.svg?height=200&width=400&text=PE+Success",
  },
  {
    id: "sample-post-4",
    title: "Marketing Attribution Models That Actually Work",
    excerpt:
      "Stop wasting budget on broken attribution. Here's how to build attribution models that drive real business decisions.",
    content: "Sample content here...",
    author: "DataOps Group",
    date: "2023-12-28",
    category: "Strategy",
    tags: ["marketing", "attribution", "analytics"],
    coverImage: "/placeholder.svg?height=200&width=400&text=Attribution+Models",
  },
  {
    id: "sample-post-5",
    title: "The Complete Guide to HubSpot Lead Scoring",
    excerpt: "Build a lead scoring model that actually predicts revenue. Step-by-step guide with real examples.",
    content: "Sample content here...",
    author: "DataOps Group",
    date: "2023-12-20",
    category: "Guides",
    tags: ["hubspot", "lead-scoring", "guide"],
    coverImage: "/placeholder.svg?height=200&width=400&text=Lead+Scoring",
  },
  {
    id: "sample-post-6",
    title: "Why 64% of PE Portfolio Companies Fail HubSpot Implementation",
    excerpt:
      "The critical mistakes that doom HubSpot implementations and how to avoid them in your portfolio companies.",
    content: "Sample content here...",
    author: "DataOps Group",
    date: "2023-12-15",
    category: "Private Equity",
    tags: ["private-equity", "hubspot", "implementation"],
    coverImage: "/placeholder.svg?height=200&width=400&text=HubSpot+Failures",
  },
]

export function getAllPosts(): BlogPost[] {
  // Sort by date - newest first (top-left to bottom-right in grid)
  return samplePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return samplePosts.find((post) => post.id === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return samplePosts.filter((post) => post.category === category)
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return samplePosts
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
