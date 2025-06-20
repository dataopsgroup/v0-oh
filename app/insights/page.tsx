import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import BlogCard from "@/components/blog/BlogCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Insights & Resources | DataOps Group",
  description: "Expert advice on transforming your HubSpot setup into a revenue-generating machine.",
  openGraph: {
    title: "Insights & Resources | DataOps Group",
    description: "Expert advice on transforming your HubSpot setup into a revenue-generating machine.",
    type: "website",
  },
}

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Compact Header */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-3">Insights & Resources</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Expert advice on transforming your HubSpot setup into a revenue-generating machine.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid - 3 columns, newest first (top-left to bottom-right) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Portfolio Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 50+ companies that have already transformed their business operations with DataOps Group. Our proven
            methodology helps PE portfolio companies increase valuation and drive growth through data.
          </p>
          <Link href="/data-operations-assessment">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Get Your Free Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
