import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface BlogPostHeaderProps {
  title: string
  author: string
  date: string
  category: string
  content: string
}

export default function BlogPostHeader({ title, author, date, category, content }: BlogPostHeaderProps) {
  const readTime = calculateReadTime(content)

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/insights"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>

        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wide">
            {category}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{title}</h1>

        <div className="flex items-center text-sm text-gray-600 space-x-4">
          <span>{author}</span>
          <span>•</span>
          <span>{formatDate(date)}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  )
}
