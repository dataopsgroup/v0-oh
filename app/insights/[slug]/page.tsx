"use client"
import { notFound } from "next/navigation"
import { useEffect } from "react"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog"
import BlogPostHeader from "@/components/blog/BlogPostHeader"
import BlogPostContent from "@/components/blog/BlogPostContent"
import RelatedArticles from "@/components/blog/RelatedArticles"
import BlogCTA from "@/components/blog/BlogCTA"
import GlobalFooter from "@/components/global-footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.slug])

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post).slice(0, 3) // Ensure exactly 3 articles

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

      <RelatedArticles posts={relatedPosts} />

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

      <GlobalFooter />
    </article>
  )
}
