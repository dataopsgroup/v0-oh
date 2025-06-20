export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  coverImage: string
  content: string
  tags: string[]
  seo: {
    metaDescription: string
    keywords: string
    ogTitle: string
    ogDescription: string
    twitterTitle: string
    twitterDescription: string
  }
}

export interface BlogCategory {
  name: string
  slug: string
  description?: string
}
