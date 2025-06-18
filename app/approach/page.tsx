"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Lightbulb, BookOpen, Users, Rocket } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    title: "Discovery",
    description: "We assess your current data landscape, identify challenges, and define clear objectives.",
    activities: [
      "Data landscape assessment",
      "Stakeholder interviews",
      "Challenge identification",
      "Objective definition",
    ],
  },
  {
    icon: <BookOpen className="h-10 w-10 text-white" />,
    title: "Strategy",
    description: "Our team designs a tailored roadmap to transform your data operations approach.",
    activities: ["Solution architecture", "Technology selection", "Roadmap development", "Resource planning"],
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "Implementation",
    description: "We execute the plan, integrating solutions that address your specific needs.",
    activities: ["Solution development", "Process integration", "Team training", "Deployment management"],
  },
  {
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: "Optimization",
    description: "Continuous improvement ensures your data operations evolve with your business.",
    activities: ["Performance monitoring", "Continuous improvement", "Knowledge transfer", "Success measurement"],
  },
]

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center py-2">
                {/* 
                  !IMPORTANT: DATAOPS LOGO SIZING - DO NOT CHANGE WITHOUT EXPLICIT REQUEST
                  This logo MUST always be rendered as:
                  - w-[200px] h-[68px] object-contain
                  - Navigation bar height: h-20 (80px)
                  - Image source: /images/dataops-logo-horizontal.jpg
                  
                  These dimensions have been specifically tested and approved.
                  DO NOT modify these classes unless explicitly requested by the client.
                */}
                <img
                  src="/images/dataops-logo-horizontal.jpg"
                  alt="DataOps Group - Home"
                  className="w-[200px] h-[68px] object-contain"
                />
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/services"
                  className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center"
                >
                  Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                </Link>
                <Link href="/about" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/approach" className="text-sm body-copy text-blue-600 font-medium">
                  Approach
                </Link>
                <div className="relative group">
                  <button className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                    Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/insights/hubspot-for-private-equity"
                        className="block px-4 py-2 text-sm body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        HubSpot for Private Equity
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                className="body-copy text-white hover:bg-blue-400 rounded-none"
                style={{ backgroundColor: "#8CC7E3" }}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                className="body-copy text-gray-900 hover:bg-yellow-500 rounded-none"
                style={{ backgroundColor: "#FBB03B" }}
              >
                <Link href="/book">📖 Copy Our Playbook</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                  Our Methodology
                </div>
                <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">Our Systematic Approach</h1>
                <p className="body-copy text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                  We follow a proven, repeatable methodology that consistently delivers results for our clients. Our
                  structured approach ensures every implementation meets private equity standards for scalability,
                  reporting, and operational excellence.
                </p>

                {/* Assessment CTA - unique to approach page */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                  <h3 className="headline text-lg text-blue-900 mb-2">See Where You Stand Before We Begin</h3>
                  <p className="body-copy text-blue-800 mb-4">
                    Our methodology starts with understanding your current operational maturity. Take our comprehensive
                    assessment to see exactly where improvements will deliver the highest impact on your growth metrics.
                  </p>
                  <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-none">
                    <Link href="/#operations-assessment">Assess Your Current Operations</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                {/* Methodology Section */}
                <section className="space-y-6">
                  <h2 className="headline text-3xl text-gray-900">Our Data Operations Methodology</h2>
                  <p className="body-copy text-lg text-gray-700 leading-relaxed">
                    We believe in collaboration, transparency, and measurable outcomes. Each step in our process is
                    carefully executed to ensure your organization achieves its data objectives. Working with leading
                    organizations across industries, we've refined our methodology to deliver consistent results.
                  </p>
                </section>

                {/* Steps Section */}
                <section className="space-y-8">
                  <h2 className="headline text-3xl text-gray-900">Our Four-Step Approach</h2>

                  <div className="grid grid-cols-1 gap-8">
                    {steps.map((step, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-6">
                        <h3 className="headline text-2xl text-gray-900 mb-3">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="body-copy text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                        <div className="mt-4">
                          <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-2 body-copy text-gray-700">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Benefits Section */}
                <section className="space-y-6">
                  <h2 className="headline text-3xl text-gray-900">Why Our Approach Works</h2>
                  <p className="body-copy text-lg text-gray-700 leading-relaxed">
                    Our methodology is built on years of experience working with organizations of all sizes. We've
                    refined our approach to address the common challenges businesses face when implementing data
                    operations solutions. The result is a proven system that delivers consistent results.
                  </p>

                  <div className="grid md:grid-cols-3 gap-px bg-gray-200 mt-8">
                    <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="headline text-lg text-gray-900 mb-3">Data-Driven Decision Making</h3>
                      <p className="body-copy text-sm text-gray-600 leading-relaxed">
                        Our approach emphasizes using data analytics to drive all strategic decisions.
                      </p>
                    </div>
                    <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="headline text-lg text-gray-900 mb-3">Collaborative Implementation</h3>
                      <p className="body-copy text-sm text-gray-600 leading-relaxed">
                        We work closely with your team to ensure seamless integration of new data systems.
                      </p>
                    </div>
                    <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="headline text-lg text-gray-900 mb-3">Continuous Optimization</h3>
                      <p className="body-copy text-sm text-gray-600 leading-relaxed">
                        Our data governance framework ensures ongoing improvement of your data operations.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 sticky top-8">
                  <h3 className="headline text-xl text-gray-900 mb-6">Benefits of Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Faster time to value from data investments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Reduced implementation risk and complexity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Higher user adoption across the organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">Improved data quality and reliability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">
                        Better alignment between data strategy and business objectives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-0.5">•</span>
                      <span className="body-copy text-gray-700">
                        Sustainable data operations that grow with your business
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="headline text-xl text-gray-900 mb-4">Ready to transform your data operations?</h3>
                    <p className="body-copy text-gray-700 mb-6 leading-relaxed">
                      Contact us today to schedule a consultation and learn how our approach can help your organization.
                    </p>
                    <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white w-full py-2 px-4 rounded-none">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <p className="subheadline text-sm text-blue-100">Ready to Get Started?</p>
                <h2 className="headline text-3xl text-white">Ready to Transform Your Operations?</h2>
              </div>
              <p className="body-copy text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join 50+ companies that have already transformed their business operations with DataOps Group. Our
                proven methodology helps PE portfolio companies increase valuation and drive growth through data.
              </p>
              <div className="flex justify-center">
                <Button
                  className="body-copy text-gray-900 hover:bg-yellow-500 px-8 py-3 text-base rounded-none"
                  style={{ backgroundColor: "#FBB03B" }}
                >
                  Get Your Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <div className="mb-6">
                {/* 
                  Footer Logo - Optimized for SEO and Performance
                  - Uses descriptive alt text for accessibility
                  - Sized appropriately for footer context
                  - White version for dark background
                  - Maintains aspect ratio with object-contain
                */}
                <img
                  src="/images/dataops-logo-white-footer.png"
                  alt="DataOps Group - Expert HubSpot Implementation and Data Operations Consulting"
                  className="w-[160px] h-[54px] object-contain"
                  loading="lazy"
                />
              </div>
              <p className="body-copy text-sm text-gray-400 leading-relaxed">
                Transforming portfolio operations into profit drivers through expert HubSpot implementation and data
                operations consulting.
              </p>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Analytics & BI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    DataOps Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    HubSpot Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Marketing Operations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    PE Value Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    PE Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    HubSpot Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Client Support Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Schedule a Call
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="subheadline text-xs text-gray-300 mb-4">FAQs</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="body-copy text-sm text-gray-400 hover:text-white">
                    Placeholder FAQ 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="body-copy text-sm text-gray-400">
                <p>© 2025 DataOps Group. All rights reserved.</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="body-copy text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="body-copy text-sm text-gray-400 hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
