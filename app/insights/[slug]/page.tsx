import { notFound } from "next/navigation"
import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import { BlogPostHeader } from "@/components/blog/BlogPostHeader"
import { BlogPostContent } from "@/components/blog/BlogPostContent"
import { RelatedArticles } from "@/components/blog/RelatedArticles"
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
      title: "Post Not Found | DataOps Insights",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | DataOps Insights`,
    description: post.excerpt,
    keywords: post.tags?.join(", ") || "",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
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
        {/* Blog Post Header */}
        <BlogPostHeader post={post} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <BlogPostContent post={post} />
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <RelatedArticles posts={relatedPosts} />
            </div>
          </section>
        )}
      </article>
    </PageLayout>
  )
}
