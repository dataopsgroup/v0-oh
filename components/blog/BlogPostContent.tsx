import type { BlogPost } from "@/types/blog"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{
          __html: post.content?.replace(/\n/g, "<br>") || post.excerpt,
        }}
      />

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
