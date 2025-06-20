import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/blog" // Assuming this function exists
import SemanticLayout from "@/components/layout/SemanticLayout"
import BlogPostHeader from "@/components/blog/BlogPostHeader"
import BlogPostContent from "@/components/blog/BlogPostContent"
import RelatedArticles from "@/components/blog/RelatedArticles"
import BlogCTA from "@/components/blog/BlogCTA" // Updated import
import CalloutBox from "@/components/blog/CalloutBox" // New import

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <SemanticLayout>
      <BlogPostHeader
        title={post.title}
        author={post.author}
        date={post.date}
        category={post.category}
        content={post.content}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPostContent content={post.content} />

        {/* Example Callout Box - You would place these strategically in your content or page layout */}
        <CalloutBox
          title="PE Portfolio Application"
          description="This strategy applies directly to portfolio companies looking to optimize their HubSpot investment and accelerate revenue growth through better data management and operational efficiency."
          icon="target"
          variant="saffron"
        />

        <RelatedArticles currentPostSlug={params.slug} />
      </main>
      {/* First CTA: Dark background with white text and saffron button */}
      <BlogCTA
        title="Ready to Fix Your HubSpot Ordeal?"
        description="Stop throwing money at new leads when your existing contacts could be paying customers. Schedule a consultation to see how we can convert your HubSpot portal into a revenue engine."
        primaryButton={{ text: "Schedule a Consultation", href: "/contact" }}
        sectionVariant="dark"
      />
      {/* Second CTA: Light background with blue text and blue outline buttons */}
      <BlogCTA
        title="Ready to Transform Your Operations?"
        description="Get expert guidance to implement the strategies discussed in this article."
        primaryButton={{ text: "Take Free Assessment", href: "/data-operations-assessment" }}
        secondaryButton={{ text: "Book Consultation", href: "/contact" }}
        sectionVariant="light"
      />
    </SemanticLayout>
  )
}
