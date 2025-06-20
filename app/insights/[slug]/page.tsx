import type { Metadata } from "next"
import { notFound } from "next/navigation"
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
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | DataOps Group",
    }
  }

  return {
    title: `${post.title} | DataOps Group`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords,
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.twitterTitle || post.title,
      description: post.seo?.twitterDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)

  return (
    <article className="min-h-screen bg-white">
      <BlogPostHeader
        title={post.title}
        author={post.author}
        date={post.date}
        category={post.category}
        content={post.content}
      />

      <BlogPostContent content={post.content} />

      <BlogCTA
        title="Ready to Transform Your Operations?"
        description="Get expert guidance to implement the strategies discussed in this article."
        primaryButton={{
          text: "Take Free Assessment",
          href: "/data-operations-assessment",
        }}
        secondaryButton={{
          text: "Book Consultation",
          href: "/contact",
        }}
      />

      <RelatedArticles posts={relatedPosts} />
    </article>
  )
}
