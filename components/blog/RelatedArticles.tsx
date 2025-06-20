import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/blog"

interface RelatedArticlesProps {
  posts: BlogPost[]
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
                  <CardHeader>
                    <Badge className="w-fit mb-3 bg-blue-600 text-white hover:bg-blue-700">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <CardTitle className="group-hover:text-dataops-blue transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
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
