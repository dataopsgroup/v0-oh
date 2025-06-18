const ClientHomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-wireframe-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-50 opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Turn PE Portfolio Operations Into Profit Drivers</h1>
          <p className="text-xl text-gray-200">Unlock hidden value and optimize performance across your portfolio.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Schedule a Demo
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Expertise, Your Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
              <p className="text-gray-700">Drive efficiency and effectiveness across your portfolio companies.</p>
            </div>
            {/* Expertise 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-700">Leverage data to identify opportunities and mitigate risks.</p>
            </div>
            {/* Expertise 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Strategic Alignment</h3>
              <p className="text-gray-700">
                Ensure your portfolio companies are aligned with your investment strategy.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700">We've helped our clients achieve:</p>
            <div className="flex justify-center space-x-8 mt-4">
              <div>
                <span className="text-2xl font-bold">20%</span>
                <p className="text-sm">Increase in EBITDA</p>
              </div>
              <div>
                <span className="text-2xl font-bold">15%</span>
                <p className="text-sm">Reduction in Operating Costs</p>
              </div>
              <div>
                <span className="text-2xl font-bold">30%</span>
                <p className="text-sm">Improvement in Portfolio Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tools Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Unlock Deeper Insights with Our Assessment Tools</h2>
          <p className="text-gray-700 mb-4">
            Our suite of assessment tools provides a comprehensive view of your portfolio's operational health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Operational Maturity Assessment</h3>
              <p className="text-gray-700">Evaluate the maturity of your portfolio companies' operations.</p>
            </div>
            {/* Tool 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Data Readiness Assessment</h3>
              <p className="text-gray-700">Assess your portfolio companies' ability to leverage data for insights.</p>
            </div>
            {/* Tool 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Strategic Alignment Assessment</h3>
              <p className="text-gray-700">Determine how well your portfolio companies align with your strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Transformation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Operational Improvement</h3>
              <p className="text-gray-700">Optimize processes, reduce costs, and improve efficiency.</p>
            </div>
            {/* Service 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
              <p className="text-gray-700">Unlock the power of your data to drive better decisions.</p>
            </div>
            {/* Service 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Technology Enablement</h3>
              <p className="text-gray-700">Implement the right technology solutions to support your goals.</p>
            </div>
            {/* Service 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
              <p className="text-gray-700">Develop and execute strategies to achieve your investment objectives.</p>
            </div>
            {/* Service 5 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Change Management</h3>
              <p className="text-gray-700">Ensure successful adoption of new processes and technologies.</p>
            </div>
            {/* Service 6 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Performance Monitoring</h3>
              <p className="text-gray-700">Track progress and identify areas for improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Proven Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Assess</h3>
              <p className="text-gray-700">Evaluate your current state and identify opportunities.</p>
            </div>
            {/* Step 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Plan</h3>
              <p className="text-gray-700">Develop a customized transformation plan.</p>
            </div>
            {/* Step 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Execute</h3>
              <p className="text-gray-700">Implement the plan and drive results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Portfolio?</h2>
          <p className="text-xl mb-8">Contact us today to learn more about our services.</p>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100">Get in Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-white text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ClientHomePage
