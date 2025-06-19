"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Database, BookOpen, Megaphone, Users, Target, BarChart3 } from "lucide-react"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"

export default function ClientHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DataOps Group",
    description:
      "PE-specialized HubSpot experts who transform fragmented systems into unified platforms that drive visibility, streamline reporting, and improve efficiency.",
    url: "https://dataopsgroup.com",
    logo: "https://dataopsgroup.com/images/dataops-logo-horizontal.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "admin@dataopsgroup.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: ["https://www.linkedin.com/company/dataops-group"],
    foundingDate: "2020",
    numberOfEmployees: "2-10",
    industry: "Data Analytics and Business Intelligence",
    serviceArea: {
      "@type": "Place",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DataOps Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HubSpot Implementation",
            description: "Complete HubSpot setup and optimization for portfolio companies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Analytics & Business Intelligence",
            description: "Advanced analytics and BI solutions for data-driven decision making",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DataOps Implementation",
            description: "End-to-end data operations implementation and automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Team Training",
            description: "Comprehensive HubSpot and data operations training programs",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DataOps Group",
    url: "https://dataopsgroup.com",
    description:
      "Transform portfolio operations into profit drivers with expert HubSpot implementation and data operations consulting",
    publisher: {
      "@type": "Organization",
      name: "DataOps Group",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dataopsgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 relative">
              <div className="flex items-center">
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
              </div>
              <nav className="hidden md:flex space-x-8 mx-auto">
                <div className="relative group">
                  <button className="text-base body-copy text-gray-700 hover:text-blue-600 flex items-center">
                    Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/services/analytics-bi"
                        className="block px-4 py-2 text-base body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Analytics & BI
                      </Link>
                      <Link
                        href="/services/dataops-implementation"
                        className="block px-4 py-2 text-base body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        DataOps Implementation
                      </Link>
                      <Link
                        href="/services/team-training"
                        className="block px-4 py-2 text-base body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Team Training
                      </Link>
                      <Link
                        href="/services/marketing-operations-revops"
                        className="block px-4 py-2 text-base body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Marketing Operations & RevOps
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="text-base body-copy text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/approach" className="text-base body-copy text-gray-700 hover:text-blue-600">
                  Approach
                </Link>
                <div className="relative group">
                  <button className="text-base body-copy text-gray-700 hover:text-blue-600 flex items-center">
                    Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/insights/hubspot-for-private-equity"
                        className="block px-4 py-2 text-base body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        HubSpot for Private Equity
                      </Link>
                      <Link
                        href="/guides/hubspot-expert"
                        className="block px-4 py-2 text-base body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        How to Hire a HubSpot Expert
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
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

        {/* Hero Section */}
        <section
          className="bg-gray-50 relative overflow-hidden"
          style={{
            backgroundImage: "url(/images/hero-wireframe-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay to control opacity - Changed to 75% opacity for 75% transparency (paler background) */}
          <div className="absolute inset-0 bg-gray-50 opacity-75"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="subheadline text-sm text-gray-600">PE Portfolio Transformation</p>
                  <h1 className="headline text-5xl lg:text-6xl text-gray-900 leading-tight">
                    Turn PE Portfolio
                    <br />
                    Operations Into
                    <br />
                    Profit Drivers
                    <span className="block text-yellow-500 mt-2">in 100 Days</span>
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base rounded-none">
                    <Link href="/data-operations-assessment">Get Your Free Assessment</Link>
                  </Button>
                </div>
              </div>
              {/* No image here - removed the placeholder image div completely */}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="subheadline text-sm text-gray-600 mb-4">Our Expertise</p>
                <p className="body-copy text-lg text-gray-700 leading-relaxed">
                  We are PE-specialized{" "}
                  <Link href="/about" className="text-blue-600 hover:underline">
                    HubSpot experts
                  </Link>{" "}
                  who transform fragmented systems into unified platforms that drive visibility, streamline reporting,
                  improve efficiency, and create the data infrastructure your investors expect.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center body-copy text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    <span>19% higher valuation multiples</span>
                  </li>
                  <li className="flex items-center body-copy text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    <span>73% faster EBITDA growth</span>
                  </li>
                  <li className="flex items-center body-copy text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    <span>$18-22 ROI per $1 invested in HubSpot</span>
                  </li>
                </ul>
                <div className="space-y-3 mt-6">
                  <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center">
                    Learn more about our proven methodology
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center">
                    and explore our client success stories
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-2 bg-green-50 p-8 space-y-8">
                <div>
                  <p className="subheadline text-sm text-gray-600 mb-4">Proven Results</p>
                  <h3 className="headline text-xl text-gray-900">
                    Trusted by 50+ Companies to Rescue Their HubSpot Investments
                  </h3>
                </div>
                {/* Updated stats boxes to match IBM style */}
                <div className="grid grid-cols-3 gap-px bg-gray-200">
                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                    <div className="headline text-3xl text-blue-600">47%</div>
                    <div className="body-copy text-sm text-gray-600">in 90 days</div>
                    <div className="body-copy text-xs text-gray-400">Audio Visual Equipment Wholesaler</div>
                  </div>
                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                    <div className="headline text-3xl text-blue-600">28%</div>
                    <div className="body-copy text-sm text-gray-600">Reduced sales cycle</div>
                    <div className="body-copy text-xs text-gray-400">Multi-National Insurance Provider</div>
                  </div>
                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors text-center space-y-2">
                    <div className="headline text-3xl text-blue-600">35%</div>
                    <div className="body-copy text-sm text-gray-600">Improvement in close rates</div>
                    <div className="body-copy text-xs text-gray-400">SaaS Healthcare Tech</div>
                  </div>
                </div>
                <div className="body-copy text-base text-gray-600">
                  Ready to transform your operations? Explore our comprehensive{" "}
                  <Link href="/services" className="text-blue-600 hover:underline">
                    service offerings
                  </Link>{" "}
                  or learn more about{" "}
                  <Link href="/about" className="text-blue-600 hover:underline">
                    our team
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Tools */}
        <section className="py-20" id="operations-assessment">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-6">
              <p className="subheadline text-sm text-gray-600">Assessment Tools</p>
              <h2 className="headline text-3xl text-gray-900 max-w-3xl mx-auto">
                Wondering if Your Operations Are PE-Ready?
              </h2>
              <p className="body-copy text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Most portfolio companies discover critical operational gaps only after investor reviews. Our assessment
                tools identify these blind spots and visualize your improvement potential before they impact your
                valuation.
              </p>
            </div>

            {/* Updated to match IBM grid style */}
            <div className="grid md:grid-cols-2 gap-px bg-gray-200">
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <h3 className="headline text-xl text-gray-900 mb-4">Operations Assessment</h3>
                <p className="body-copy text-gray-700 leading-relaxed mb-6">
                  5-minute assessment to identify operational gaps and prioritize improvements for maximum impact.
                </p>
                <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-none">
                  <Link href="/data-operations-assessment">Access PE Readiness</Link>
                </Button>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <h3 className="headline text-xl text-gray-900 mb-4">ROI Calculator</h3>
                <p className="body-copy text-gray-700 leading-relaxed mb-6">
                  Calculate potential revenue gains and operational savings from optimizing your tech stack.
                </p>
                <Button className="body-copy bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-none">
                  Calculate ROI
                </Button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="body-copy text-lg text-gray-700">
                Join 50+ companies that have already strengthened their operational foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Transformation Services - IBM Style Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="headline text-3xl text-gray-900 mb-4">Our Transformation Services</h2>
              <p className="body-copy text-gray-700 max-w-3xl leading-relaxed">
                Comprehensive HubSpot implementation and data operations solutions designed to transform your business.
                Learn more about our{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  proven methodology
                </Link>{" "}
                and view our{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  success stories
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-gray-200 mb-8">
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-lg text-gray-900 mb-3">Analytics & BI</h3>
                <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                  Transform data into actionable insights with comprehensive analytics and business intelligence
                  solutions.
                </p>
                <Link
                  href="/services/analytics-bi"
                  className="body-copy text-blue-600 hover:underline flex items-center text-sm"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Database className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-lg text-gray-900 mb-3">DataOps Implementation</h3>
                <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                  Streamline your data operations with automated processes and improved data quality.
                </p>
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-lg text-gray-900 mb-3">HubSpot Training and Implementation</h3>
                <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                  Comprehensive HubSpot setup and team training to maximize your investment.
                </p>
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Megaphone className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-lg text-gray-900 mb-3">Marketing Operations & RevOps</h3>
                <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                  Optimize your revenue operations with strategic marketing automation and process improvement.
                  Calculate your potential ROI with our RevOps calculator.
                </p>
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-lg text-gray-900 mb-3">PE Value Creation Program</h3>
                <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                  Specialized program for private equity firms to optimize portfolio company operations.
                </p>
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-lg text-gray-900 mb-3">Custom Solutions</h3>
                <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                  Tailored data operations solutions designed specifically for your unique business needs.
                </p>
                <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h2 className="headline text-2xl text-gray-700">
                Want to see all our services? Visit our{" "}
                <Link href="/services" className="text-blue-600 hover:underline">
                  complete services page
                </Link>{" "}
                or{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  contact us for a custom consultation
                </Link>
                .
              </h2>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-6">
              <p className="subheadline text-sm text-gray-600">How We Work</p>
              <h2 className="headline text-3xl text-gray-900">Our Process</h2>
              <p className="body-copy text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A systematic process that delivers reliable results. Learn more about our{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  comprehensive methodology
                </Link>{" "}
                and see how we've helped other{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  portfolio companies achieve success
                </Link>
                .
              </p>
            </div>

            {/* Updated to match IBM grid style */}
            <div className="grid md:grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="space-y-4">
                  <h3 className="headline text-xl text-gray-900">Step 1: PE-Standard Assessment</h3>
                  <p className="body-copy text-gray-700 leading-relaxed">
                    We audit operations against PE growth expectations and identify gaps that slow portfolio value
                    creation.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="space-y-4">
                  <h3 className="headline text-xl text-gray-900">Step 2: Rapid Implementation</h3>
                  <p className="body-copy text-gray-700 leading-relaxed">
                    We deploy proven HubSpot systems designed for PE portfolio scalability and investor reporting
                    requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 hover:bg-gray-50 transition-colors relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="space-y-4">
                  <h3 className="headline text-xl text-gray-900">Step 3: Portfolio Optimization</h3>
                  <p className="body-copy text-gray-700 leading-relaxed">
                    We optimize for the metrics PE firms track and ensure systems can scale across other portfolio
                    companies.
                  </p>
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
                  <Link href="/data-operations-assessment">Get Your Free Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <GlobalFooter />
      </div>
    </>
  )
}
