import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/blog"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  // Safely calculate read time
  const readTime = calculateReadTime(post.content || "")

  // Category color mapping with fallback
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Analytics: "bg-blue-100 text-blue-800",
      Operations: "bg-green-100 text-green-800",
      "Tips & Tricks": "bg-purple-100 text-purple-800",
      "Case Studies": "bg-orange-100 text-orange-800",
      Guides: "bg-indigo-100 text-indigo-800",
      Strategy: "bg-red-100 text-red-800",
      "Private Equity": "bg-gray-100 text-gray-800",
      HubSpot: "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  // Fallback values for missing data
  const title = post.title || "Untitled Post"
  const excerpt = post.excerpt || "No excerpt available."
  const author = post.author || "DataOps Group"
  const category = post.category || "Insights"
  const coverImage = post.coverImage || "/placeholder.svg?height=200&width=400"
  const date = post.date || new Date().toISOString()

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <Link href={`/insights/${post.id}`}>
        <div className="aspect-video relative">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=200&width=400"
            }}
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-3">
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${getCategoryColor(category)}`}
          >
            {category}
          </span>
        </div>

        <Link href={`/insights/${post.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <span>{author}</span>
            <span>•</span>
            <span>{formatDate(date)}</span>
          </div>
          <span>{readTime} min read</span>
        </div>
      </div>
    </article>
  )
}
