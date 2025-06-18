import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function AnalyticsBi() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <img className="h-8 w-auto" src="/images/dataops-logo-horizontal.jpg" alt="DataOps Group" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Home
                </Link>
                <div className="relative group">
                  <button
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <Link
                        href="/services/analytics-bi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Analytics & BI
                      </Link>
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        DataOps Implementation
                      </Link>
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Team Training
                      </Link>
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Marketing Operations & RevOps
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  href="/approach"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Approach
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  About
                </Link>
                <Link
                  href="/insights/hubspot-for-private-equity"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Insights
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Rest of the page content */}
      <main>
        <div className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl text-center"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Analytics & BI Services
            </h1>
            <p
              className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto text-center"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Unlock the power of your data with our comprehensive analytics and business intelligence services.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
