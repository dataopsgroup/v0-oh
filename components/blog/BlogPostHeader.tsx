import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const readTime = calculateReadTime(post.content || "")

  // Category color mapping
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
    <header className="bg-gradient-to-br from-dataops-blue-dark to-dataops-blue py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className={`mb-6 ${getCategoryColor(post.category)}`}>{post.category}</Badge>

          <h1 className="headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>

          <p className="body-copy text-xl md:text-2xl mb-8 text-white/90">{post.excerpt}</p>

          <div className="flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
