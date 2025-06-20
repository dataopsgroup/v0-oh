import type { BlogPost } from "@/types/blog"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // Process content to add numbered sections and proper formatting
  const processContent = (content: string) => {
    // Add numbered section styling
    let processedContent = content.replace(
      /^(\d+)\.\s+(.+)$/gm,
      '<div class="numbered-section"><span class="section-number">$1</span><h2 class="section-title">$2</h2></div>',
    )

    // Ensure proper paragraph breaks
    processedContent = processedContent.replace(/\n\n/g, "</p><p>")
    processedContent = `<p>${processedContent}</p>`

    return processedContent
  }

  return (
    <article className="blog-post-content max-w-4xl mx-auto">
      {/* Main Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: processContent(post.content || post.excerpt),
        }}
      />

      {/* CTA Box Example */}
      <div className="blog-cta-box">
        <h3>Ready to Optimize Your Content Strategy?</h3>
        <p>Get expert guidance to implement these best practices and maximize your content ROI.</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Free Assessment
          </button>
          <button className="bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
