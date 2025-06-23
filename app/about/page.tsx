import PageLayout from "@/components/layout/PageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About DataOps Group - Data Operations Consulting Experts",
  description:
    "Learn about DataOps Group's mission to transform data operations for private equity portfolio companies and growing businesses through expert consulting and implementation.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About DataOps Group</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                We transform data operations for private equity portfolio companies and growing businesses, turning data
                chaos into competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At DataOps Group, we believe that data should be your greatest asset, not your biggest headache. We
                  specialize in helping private equity portfolio companies and growing businesses implement robust data
                  operations that drive measurable results.
                </p>
                <p className="text-lg text-gray-700">
                  Our proven methodologies have helped dozens of companies transform their data infrastructure, improve
                  decision-making, and accelerate growth within their first 100 days.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">→</span>
                    <span>DataOps Implementation & Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">→</span>
                    <span>Analytics & Business Intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">→</span>
                    <span>Marketing Operations & RevOps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">→</span>
                    <span>Team Training & Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">→</span>
                    <span>PE Value Creation Programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We bring deep expertise across the entire data operations spectrum, from strategy to implementation to
                ongoing optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
                <p className="text-gray-700">
                  Our team combines technical depth with business acumen, ensuring that every solution we implement
                  drives real business value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">PE Focus</h3>
                <p className="text-gray-700">
                  We understand the unique challenges and timelines of private equity portfolio companies, delivering
                  results within critical investment periods.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-700">
                  Our methodologies have been tested across dozens of implementations, consistently delivering
                  measurable improvements in data quality and insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Results-Driven</h3>
                <p className="text-gray-700">Every project is measured by tangible business outcomes.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Speed to Value</h3>
                <p className="text-gray-700">We deliver meaningful results within the first 100 days.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-700">We work as an extension of your team, not just consultants.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Practical Solutions</h3>
                <p className="text-gray-700">We focus on solutions that work in the real world.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data Operations?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization turn data into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/data-operations-assessment"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Take Our Assessment
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
