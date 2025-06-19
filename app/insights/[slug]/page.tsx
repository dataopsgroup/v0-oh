import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog"
import { BlogPostHeader } from "@/components/blog/BlogPostHeader"
import { BlogPostContent } from "@/components/blog/BlogPostContent"
import { RelatedArticles } from "@/components/blog/RelatedArticles"
import { BlogCTA } from "@/components/blog/BlogCTA"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post)

  return (
    <article className="min-h-screen bg-white">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      <RelatedArticles posts={relatedPosts} />
      <BlogCTA />
    </article>
  )
}
