"use client"

import { useEffect } from "react"
import { getAllPosts } from "@/lib/blog"
import BlogCard from "@/components/blog/BlogCard"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"

export default function InsightsPage() {
  const posts = getAllPosts()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <section className="bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Insights & Resources</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Expert insights on data operations, marketing automation, and business growth strategies
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No insights available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <GlobalFooter />
    </div>
  )
}
