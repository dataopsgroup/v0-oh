import Link from "next/link"
import type { BlogPost } from "@/types/blog"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const readTime = calculateReadTime(post.content || "")

  // Category color mapping with better variety and contrast
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Analytics: "bg-blue-600 text-white",
      Operations: "bg-green-600 text-white",
      "Tips & Tricks": "bg-purple-600 text-white",
      "Case Studies": "bg-orange-600 text-white",
      Guides: "bg-indigo-600 text-white",
      Strategy: "bg-red-600 text-white",
      "Private Equity": "bg-gray-700 text-white",
      HubSpot: "bg-yellow-600 text-white",
    }
    return colors[category] || "bg-slate-600 text-white"
  }

  return (
    <Link href={`/insights/${post.id}`} className="group block h-full">
      <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full flex flex-col p-6 cursor-pointer">
        <div className="mb-3">
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${getCategoryColor(post.category)}`}
          >
            {post.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-1">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <span>{readTime} min read</span>
        </div>
      </article>
    </Link>
  )
}
