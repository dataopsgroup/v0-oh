interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className="blog-content">
      {/* Add a colored accent bar at the top */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mb-8"></div>

      <div
        id="blog-post-content"
        className="blog-content-inner prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Add a colored accent bar at the bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mt-12"></div>
    </div>
  )
}
