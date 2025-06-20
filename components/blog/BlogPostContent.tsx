import type { BlogPost } from "@/types/blog"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="blog-content">
      {/* Add a colored accent bar at the top */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mb-8"></div>

      <div
        id="blog-post-content"
        className="blog-content-inner prose prose-lg max-w-none
          [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-8 [&_h1]:mt-12
          [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-10
          [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-8
          [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-3 [&_h4]:mt-6
          [&_p]:text-lg [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6
          [&_li]:text-lg [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-2
          [&_ul]:mb-6 [&_ol]:mb-6
          [&_a]:text-blue-600 [&_a]:font-medium [&_a]:no-underline hover:[&_a]:underline
          [&_strong]:text-gray-900 [&_strong]:font-semibold
          [&_em]:text-gray-800 [&_em]:italic
          [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
          [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-6 [&_pre]:overflow-x-auto
          [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-6
          [&_hr]:border-gray-300 [&_hr]:my-8
          [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
          [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-100 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold
          [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2
          [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-6"
        dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
      />

      {/* Tags Section */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Add a colored accent bar at the bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mt-12"></div>
    </div>
  )
}
