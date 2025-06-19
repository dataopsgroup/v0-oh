import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/blog"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const readTime = calculateReadTime(post.content)

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/insights/${post.id}`}>
        <div className="aspect-video relative">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        <Link href={`/insights/${post.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <span>{readTime} min read</span>
        </div>

        <Link
          href={`/insights/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4 text-sm font-medium"
        >
          Read article →
        </Link>
      </div>
    </article>
  )
}
