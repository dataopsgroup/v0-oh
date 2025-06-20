import { notFound } from "next/navigation"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog"
import BlogPostHeader from "@/components/blog/BlogPostHeader"
import BlogPostContent from "@/components/blog/BlogPostContent"
import RelatedArticles from "@/components/blog/RelatedArticles"
import BlogCTA from "@/components/blog/BlogCTA"
import CalloutBox from "@/components/blog/CalloutBox" // New import
import type { Metadata } from "next"

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPostContent content={post.content} />

        {/* Example Callout Box - Placed here for demonstration. For content-specific callouts,
            you would embed the HTML for the CalloutBox directly into your blog post's Markdown/HTML source. */}
        <CalloutBox
          title="PE Portfolio Application"
          description="This strategy applies directly to portfolio companies looking to optimize their HubSpot investment and accelerate revenue growth through better data management and operational efficiency."
          icon="target"
          variant="saffron"
        />
      </main>

      {/* Second CTA: Light background with blue text and blue outline buttons */}
      <BlogCTA
        title="Ready to Transform Your Operations?"
        description="Get expert guidance to implement the strategies discussed in this article."
        primaryButton={{ text: "Take Free Assessment", href: "/data-operations-assessment" }}
        secondaryButton={{ text: "Book Consultation", href: "/contact" }}
        sectionVariant="light"
      />

      <RelatedArticles posts={relatedPosts} />
    </article>
  )
}
