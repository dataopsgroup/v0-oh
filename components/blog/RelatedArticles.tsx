import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/blog"

interface RelatedArticlesProps {
  posts: BlogPost[]
}

// Color-coding system for topic tags (matching the main blog listings)
const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    Analytics: "bg-blue-600 text-white hover:bg-blue-700",
    Strategy: "bg-purple-600 text-white hover:bg-purple-700",
    Operations: "bg-green-600 text-white hover:bg-green-700",
    HubSpot: "bg-orange-600 text-white hover:bg-orange-700",
    Marketing: "bg-pink-600 text-white hover:bg-pink-700",
    Sales: "bg-red-600 text-white hover:bg-red-700",
    "Data Management": "bg-indigo-600 text-white hover:bg-indigo-700",
    "Revenue Operations": "bg-teal-600 text-white hover:bg-teal-700",
    "Lead Generation": "bg-cyan-600 text-white hover:bg-cyan-700",
    CRM: "bg-amber-600 text-white hover:bg-amber-700",
    Automation: "bg-emerald-600 text-white hover:bg-emerald-700",
    "Private Equity": "bg-slate-600 text-white hover:bg-slate-700",
    "Case Study": "bg-violet-600 text-white hover:bg-violet-700",
    Implementation: "bg-rose-600 text-white hover:bg-rose-700",
    "Best Practices": "bg-lime-600 text-white hover:bg-lime-700",
    "Tips & Tricks": "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
    Consulting: "bg-sky-600 text-white hover:bg-sky-700",
    "Data Quality": "bg-stone-600 text-white hover:bg-stone-700",
    Attribution: "bg-zinc-600 text-white hover:bg-zinc-700",
    Segmentation: "bg-neutral-600 text-white hover:bg-neutral-700",
  }

  return categoryColors[category] || "bg-gray-600 text-white hover:bg-gray-700"
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline text-3xl md:text-4xl font-bold text-center mb-12">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/insights/${post.id}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    {/* Color-coded topic tag matching main blog listings */}
                    <div className="mb-4">
                      <Badge className={`${getCategoryColor(post.category)} transition-colors duration-200`}>
                        {post.category}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <CardTitle className="group-hover:text-dataops-blue transition-colors duration-300 leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 line-clamp-3 text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
