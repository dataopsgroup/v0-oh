import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import BlogCard from "@/components/blog/BlogCard"

export const metadata: Metadata = {
  title: "Insights | DataOps Group",
  description:
    "Expert insights on HubSpot implementation, data operations, and marketing automation for private equity portfolio companies.",
  openGraph: {
    title: "Insights | DataOps Group",
    description:
      "Expert insights on HubSpot implementation, data operations, and marketing automation for private equity portfolio companies.",
    type: "website",
  },
}

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on HubSpot implementation, data operations, and marketing automation for private equity
              portfolio companies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Blog posts will appear here once you add your content files.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
