import { allPosts } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"

const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

export const metadata: Metadata = {
  title: "Insights",
  description: "Insights and articles about our company and industry.",
}

const InsightsPage = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Insights</h1>
          <p className="text-lg">Stay up-to-date with the latest news and articles.</p>
        </div>
      </header>

      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={post.url}>
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-700">{post.summary}</p>
                  <p className="text-gray-500 mt-2">{format(parseISO(post.date), "MMMM dd, yyyy")}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-lg mb-8">Contact us to discover how we can help your business.</p>
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default InsightsPage
