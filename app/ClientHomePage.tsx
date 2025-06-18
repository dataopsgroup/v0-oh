const ClientHomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-50 opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-200">Your gateway to seamless solutions.</p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-700">Description of feature 1.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-700">Description of feature 2.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-700">Description of feature 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Us Text */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            {/* About Us Image */}
            <div>
              <img src="/images/about-us.jpg" alt="About Us" className="rounded-lg shadow-md" />
            </div>
          </div>
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
