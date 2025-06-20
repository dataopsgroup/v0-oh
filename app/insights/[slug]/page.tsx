import { notFound } from "next/navigation"
import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import { BlogPostHeader } from "@/components/blog/BlogPostHeader"
import { BlogPostContent } from "@/components/blog/BlogPostContent"
import { RelatedArticles } from "@/components/blog/RelatedArticles"
import GlobalCTA from "@/components/global-cta"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | DataOps Insights`,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <PageLayout>
      <article className="min-h-screen bg-white">
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
        <RelatedArticles posts={relatedPosts} />
        <GlobalCTA
          primaryButtonText="Take Free Assessment"
          primaryButtonHref="/data-operations-assessment"
          secondaryButtonText="Book Consultation"
          secondaryButtonHref="/contact"
        />
      </article>
    </PageLayout>
  )
}
