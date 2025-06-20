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
        className="blog-content-inner prose prose-lg max-w-none
          [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-8 [&_h1]:mt-12
          [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-8
          [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-3 [&_h4]:mt-6
          [&_p]:text-lg [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
          [&_li]:text-lg [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-2
          [&_a]:text-blue-600 [&_a]:font-medium [&_a]:no-underline hover:[&_a]:underline
          [&_strong]:text-gray-900 [&_strong]:font-semibold
          [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
          [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-6
          [&_hr]:border-gray-300 [&_hr]:my-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Add a colored accent bar at the bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mt-12"></div>
    </div>
  )
}
