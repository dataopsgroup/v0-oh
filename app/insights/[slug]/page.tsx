import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog"
import BlogPostHeader from "@/components/blog/BlogPostHeader"
import BlogPostContent from "@/components/blog/BlogPostContent"
import RelatedArticles from "@/components/blog/RelatedArticles"
import BlogCTA from "@/components/blog/BlogCTA"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seo?.ogTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords,
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "DataOps Group"],
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.twitterTitle || post.title,
      description: post.seo?.twitterDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post)

  return (
    <div className="min-h-screen bg-white">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      {relatedPosts.length > 0 && <RelatedArticles posts={relatedPosts} />}
      <BlogCTA />
    </div>
  )
}
