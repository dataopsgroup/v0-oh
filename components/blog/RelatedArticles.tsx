import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
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
                  <div className="aspect-video bg-gradient-to-br from-dataops-blue-light to-dataops-blue rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-dataops-blue transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                    <div className="flex items-center font-semibold text-dataops-blue group-hover:text-dataops-blue-dark">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
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
