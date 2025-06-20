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
          [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-10 [&_h2]:border-b [&_h2]:border-dataops-saffron [&_h2]:pb-2
          [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-8
          [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-3 [&_h4]:mt-6
          [&_p]:text-lg [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
          /* Custom UL styling */
          [&_ul]:list-none [&_ul]:pl-0 [&_ul_li]:relative [&_ul_li]:pl-6
          [&_ul_li::before]:content-['\27A4'] [&_ul_li::before]:text-dataops-saffron [&_ul_li::before]:absolute [&_ul_li::before]:left-0 [&_ul_li::before]:top-1 [&_ul_li::before]:text-sm
          /* Custom OL styling */
          [&_ol]:list-none [&_ol]:pl-0 [&_ol]:counter-reset-list-counter [&_ol_li]:relative [&_ol_li]:pl-8
          [&_ol_li::before]:counter-increment-list-counter [&_ol_li::before]:content-[counter(list-counter)_'.'] [&_ol_li::before]:text-dataops-accent-blue [&_ol_li::before]:font-bold [&_ol_li::before]:absolute [&_ol_li::before]:left-0 [&_ol_li::before]:top-0
          [&_li]:text-lg [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-2
          [&_a]:text-blue-600 [&_a]:font-medium [&_a]:no-underline hover:[&_a]:underline
          [&_strong]:text-gray-900 [&_strong]:font-semibold
          [&_blockquote]:border-l-4 [&_blockquote]:border-dataops-accent-blue [&_blockquote]:bg-dataops-light-blue/20 [&_blockquote]:p-4 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:shadow-sm
          [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
          [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-6
          [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-8
          [&_hr]:border-gray-300 [&_hr]:my-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Add a colored accent bar at the bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mt-12"></div>
    </div>
  )
}
