import PageLayout from "@/components/layout/PageLayout"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              We are a leading data operations consultancy specializing in helping businesses transform their data
              infrastructure and optimize their marketing operations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower organizations with data-driven insights and streamlined operations that drive sustainable
              growth and competitive advantage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Do</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Data Operations Implementation</li>
              <li>Marketing Operations & RevOps</li>
              <li>Analytics & Business Intelligence</li>
              <li>Team Training & Development</li>
              <li>Private Equity Value Creation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We believe in a collaborative approach that combines deep technical expertise with practical business
              understanding. Our team works closely with your organization to deliver solutions that are both innovative
              and implementable.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
