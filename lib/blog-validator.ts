import type { BlogPost } from "@/types/blog"

export interface BlogValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export function validateBlogPost(post: BlogPost): BlogValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Required fields validation
  const requiredFields: (keyof BlogPost)[] = ["id", "title", "excerpt", "content", "date", "author", "category"]

  for (const field of requiredFields) {
    if (!post[field]) {
      errors.push(`Missing required field: ${field}`)
    }
  }

  // Content validation
  if (post.content && post.content.length < 100) {
    warnings.push("Content is very short (less than 100 characters)")
  }

  if (post.excerpt && post.excerpt.length > 200) {
    warnings.push("Excerpt is quite long (over 200 characters)")
  }

  // Date validation
  if (post.date) {
    const date = new Date(post.date)
    if (isNaN(date.getTime())) {
      errors.push("Invalid date format")
    }
  }

  // Category validation
  const validCategories = [
    "Analytics",
    "Strategy",
    "Operations",
    "HubSpot",
    "Marketing",
    "Sales",
    "Data Management",
    "Data Quality",
    "Data Operations",
    "Data Strategy",
    "Revenue Operations",
    "Marketing Operations",
    "Sales Operations",
    "RevOps",
    "Lead Generation",
    "Lead Scoring",
    "Customer Segmentation",
    "Customer Acquisition",
    "CRM",
    "Automation",
    "Marketing Automation",
    "Attribution",
    "Private Equity",
    "Case Study",
    "Implementation",
    "Consulting",
    "Best Practices",
    "Tips & Tricks",
    "Insights",
    "Thought Leadership",
  ]

  if (post.category && !validCategories.includes(post.category)) {
    warnings.push(`Category "${post.category}" is not in the standard list`)
  }

  // Tags validation
  if (post.tags && post.tags.length === 0) {
    warnings.push("No tags specified")
  }

  if (post.tags && post.tags.length > 10) {
    warnings.push("Too many tags (over 10)")
  }

  // SEO validation
  if (post.seo) {
    if (post.seo.metaDescription && post.seo.metaDescription.length > 160) {
      warnings.push("Meta description is too long (over 160 characters)")
    }

    if (post.seo.metaDescription && post.seo.metaDescription.length < 120) {
      warnings.push("Meta description is quite short (under 120 characters)")
    }
  } else {
    warnings.push("No SEO metadata provided")
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

export function validateAllBlogPosts(posts: BlogPost[]): {
  validPosts: BlogPost[]
  invalidPosts: { post: BlogPost; validation: BlogValidationResult }[]
  summary: {
    total: number
    valid: number
    invalid: number
    totalWarnings: number
  }
} {
  const validPosts: BlogPost[] = []
  const invalidPosts: { post: BlogPost; validation: BlogValidationResult }[] = []
  let totalWarnings = 0

  for (const post of posts) {
    const validation = validateBlogPost(post)
    totalWarnings += validation.warnings.length

    if (validation.isValid) {
      validPosts.push(post)
    } else {
      invalidPosts.push({ post, validation })
    }
  }

  return {
    validPosts,
    invalidPosts,
    summary: {
      total: posts.length,
      valid: validPosts.length,
      invalid: invalidPosts.length,
      totalWarnings,
    },
  }
}

// Link validation utility
export function validateBlogLinks(content: string): {
  internalLinks: string[]
  externalLinks: string[]
  brokenLinks: string[]
} {
  const internalLinks: string[] = []
  const externalLinks: string[] = []
  const brokenLinks: string[] = []

  // Extract all links from HTML content
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi
  let match

  while ((match = linkRegex.exec(content)) !== null) {
    const url = match[1]

    if (url.startsWith("/") || url.startsWith("#")) {
      internalLinks.push(url)
    } else if (url.startsWith("http")) {
      externalLinks.push(url)
    } else if (url.startsWith("mailto:") || url.startsWith("tel:")) {
      // Skip these for now
    } else {
      brokenLinks.push(url)
    }
  }

  return {
    internalLinks,
    externalLinks,
    brokenLinks,
  }
}
