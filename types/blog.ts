export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  coverImage?: string
  tags: string[]
  featured?: boolean
  seo?: {
    metaDescription: string
    keywords: string
    ogTitle: string
    ogDescription: string
    twitterTitle: string
    twitterDescription: string
  }
}

export interface BlogMeta {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  coverImage?: string
  featured?: boolean
}
