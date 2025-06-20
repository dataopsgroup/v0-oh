import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight, TrendingUp, Target, BarChart3, Users, Lightbulb, FileText } from "lucide-react"
import Link from "next/link"
import { getAllPosts, formatDate } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Insights & Resources | DataOps Consulting",
  description:
    "Expert insights on data operations, HubSpot optimization, marketing automation, and revenue operations. Learn from our team's experience helping businesses transform their data strategies.",
  keywords:
    "data operations, hubspot consulting, marketing automation, revenue operations, business intelligence, data strategy",
}

// Enhanced color-coding system for topic tags with unique colors
const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    // Core Topics
    Analytics: "bg-blue-600 text-white hover:bg-blue-700",
    Strategy: "bg-purple-600 text-white hover:bg-purple-700",
    Operations: "bg-green-600 text-white hover:bg-green-700",
    HubSpot: "bg-orange-600 text-white hover:bg-orange-700",
    Marketing: "bg-pink-600 text-white hover:bg-pink-700",
    Sales: "bg-red-600 text-white hover:bg-red-700",

    // Data & Management
    "Data Management": "bg-indigo-600 text-white hover:bg-indigo-700",
    "Data Quality": "bg-stone-700 text-white hover:bg-stone-800",
    "Data Operations": "bg-slate-700 text-white hover:bg-slate-800",
    "Data Strategy": "bg-zinc-700 text-white hover:bg-zinc-800",

    // Revenue & Operations
    "Revenue Operations": "bg-teal-600 text-white hover:bg-teal-700",
    "Marketing Operations": "bg-cyan-700 text-white hover:bg-cyan-800",
    "Sales Operations": "bg-emerald-700 text-white hover:bg-emerald-800",
    RevOps: "bg-teal-700 text-white hover:bg-teal-800",

    // Lead & Customer Management
    "Lead Generation": "bg-cyan-600 text-white hover:bg-cyan-700",
    "Lead Scoring": "bg-sky-700 text-white hover:bg-sky-800",
    "Customer Segmentation": "bg-violet-700 text-white hover:bg-violet-800",
    "Customer Acquisition": "bg-fuchsia-700 text-white hover:bg-fuchsia-800",

    // Tools & Technology
    CRM: "bg-amber-600 text-white hover:bg-amber-700",
    Automation: "bg-emerald-600 text-white hover:bg-emerald-700",
    "Marketing Automation": "bg-lime-700 text-white hover:bg-lime-800",
    Attribution: "bg-rose-700 text-white hover:bg-rose-800",

    // Business & Industry
    "Private Equity": "bg-slate-600 text-white hover:bg-slate-700",
    "Case Study": "bg-yellow-600 text-white hover:bg-yellow-700", // Changed to yellow for distinction
    Implementation: "bg-rose-600 text-white hover:bg-rose-700",
    Consulting: "bg-sky-600 text-white hover:bg-sky-700",

    // Best Practices & Tips
    "Best Practices": "bg-lime-600 text-white hover:bg-lime-700",
    "Tips & Tricks": "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
    Insights: "bg-purple-700 text-white hover:bg-purple-800", // Kept purple for Insights
    "Thought Leadership": "bg-indigo-700 text-white hover:bg-indigo-800",

    // Specific Areas
    Segmentation: "bg-neutral-700 text-white hover:bg-neutral-800",
    "Lead Nurturing": "bg-orange-700 text-white hover:bg-orange-800",
    "Pipeline Management": "bg-blue-700 text-white hover:bg-blue-800",
    "Workflow Optimization": "bg-green-700 text-white hover:bg-green-800",

    // Additional Categories
    "HubSpot Consultant": "bg-amber-700 text-white hover:bg-amber-800",
    "Marketing Dashboard": "bg-pink-700 text-white hover:bg-pink-800",
    "Sales Pipeline": "bg-red-700 text-white hover:bg-red-800",
    "Data Governance": "bg-gray-700 text-white hover:bg-gray-800",
    "Business Intelligence": "bg-blue-800 text-white hover:bg-blue-900",
    "Revenue Growth": "bg-green-800 text-white hover:bg-green-900",
  }

  return categoryColors[category] || "bg-gray-600 text-white hover:bg-gray-700"
}

export default function InsightsPage() {
  const blogPosts = getAllPosts()

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20" style={{ background: "linear-gradient(to bottom right, #14213D, #4A5F7A)" }}>
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
                  <Button variant="outline" className="bg-white text-gray-900 hover:bg-white/90 border-white">
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
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/insights/${post.id}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md cursor-pointer">
                    <CardHeader className="pb-4">
                      {/* Color-coded topic tag */}
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
      </div>
    </PageLayout>
  )
}
