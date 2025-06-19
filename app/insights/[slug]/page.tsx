import { getPostBySlug, getRelatedPosts } from "@/lib/blog"
import BlogPostHeader from "@/components/blog/BlogPostHeader"
import BlogPostContent from "@/components/blog/BlogPostContent"
import RelatedArticles from "@/components/blog/RelatedArticles"
import BlogCTA from "@/components/blog/BlogCTA"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post)

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
