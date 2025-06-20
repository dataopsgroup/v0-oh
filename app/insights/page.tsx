import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Lightbulb,
  FileText,
} from "lucide-react"
import Link from "next/link"

// Import all blog data
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Insights & Resources | DataOps Consulting",
  description:
    "Expert insights on data operations, HubSpot optimization, marketing automation, and revenue operations. Learn from our team's experience helping businesses transform their data strategies.",
  keywords:
    "data operations, hubspot consulting, marketing automation, revenue operations, business intelligence, data strategy",
}

export default function InsightsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-dataops-blue-dark to-dataops-blue py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Latest Insights
              </Badge>
              <h1 className="headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Data Operations Insights</h1>
              <p className="body-copy text-xl md:text-2xl mb-8 text-white/90">
                Expert guidance on transforming your data operations, optimizing HubSpot, and driving revenue growth
                through strategic data management.
              </p>

              {/* Featured Article Callout */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Featured Article</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Why 64% of PE Portfolio Companies Fail HubSpot Implementation
                </h3>
                <p className="text-white/80 mb-4">
                  Discover the critical mistakes that lead to failed implementations and how to avoid them.
                </p>
                <Link href="/insights/why-64-percent-pe-portfolio-companies-fail-hubspot-implementation">
                  <Button variant="outline" className="bg-white text-dataops-blue-dark hover:bg-white/90">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="Search articles..." className="pl-10 py-3" />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="cursor-pointer hover:bg-dataops-blue hover:text-white">
                    All Topics
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-dataops-blue hover:text-white">
                    <Target className="w-3 h-3 mr-1" />
                    Strategy
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-dataops-blue hover:text-white">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    Analytics
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-dataops-blue hover:text-white">
                    <Users className="w-3 h-3 mr-1" />
                    Operations
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-dataops-blue hover:text-white">
                    <Lightbulb className="w-3 h-3 mr-1" />
                    Tips & Tricks
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
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
                        {post.publishDate}
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
                    <Link href={`/insights/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-semibold text-dataops-blue hover:text-dataops-blue-dark group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button className="bg-dataops-blue hover:bg-dataops-blue-dark">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="headline text-3xl md:text-4xl font-bold mb-4">Stay Updated with DataOps Insights</h2>
              <p className="body-copy text-xl text-gray-600 mb-8">
                Get the latest articles, case studies, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-dataops-blue hover:bg-dataops-blue-dark">Subscribe</Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
