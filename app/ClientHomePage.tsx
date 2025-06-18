"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"

export default function ClientHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DataOps Group",
    description:
      "Expert HubSpot implementation and data operations consulting for private equity firms and portfolio companies",
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
        <Navigation />

        {/* Rest of homepage content remains the same */}
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium">
                      Private Equity Data Operations
                    </div>
                    <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                      Transform Portfolio Operations Into Profit Drivers
                    </h1>
                    <p className="body-copy text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                      Stop losing deals to manual processes and fragmented data. Our HubSpot implementation and data
                      operations expertise helps PE firms increase portfolio company valuations by 15-30% through
                      systematic operational improvements.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-none flex items-center justify-center">
                      <Link href="#operations-assessment" className="flex items-center">
                        Get Your Operations Assessment
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="body-copy border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-base flex items-center justify-center rounded-none"
                    >
                      View Our Portfolio Results
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/ibm-hero-illustration.png"
                    alt="DataOps Group - Portfolio Operations Transformation"
                    className="w-full h-auto"
                  />
                </div>
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
                  Most portfolio companies discover critical operational gaps only after investor reviews. Our
                  assessment tools identify these blind spots and visualize your improvement potential before they
                  impact your valuation.
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
                    Access PE Readiness
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
                  Comprehensive HubSpot implementation and data operations solutions designed to transform your
                  business. Learn more about our{" "}
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
                    <ArrowRight className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">HubSpot Implementation</h3>
                  <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                    Complete HubSpot setup and optimization for portfolio companies.
                  </p>
                  <Link
                    href="/services/hubspot-implementation"
                    className="body-copy text-blue-600 hover:underline flex items-center text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>

                <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">Analytics & Business Intelligence</h3>
                  <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                    Advanced analytics and BI solutions for data-driven decision making.
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
                    <Shield className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">DataOps Implementation</h3>
                  <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                    End-to-end data operations implementation and automation.
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
                  <h3 className="headline text-lg text-gray-900 mb-3">Team Training</h3>
                  <p className="body-copy text-sm text-gray-600 mb-4 leading-relaxed">
                    Comprehensive HubSpot and data operations training programs.
                  </p>
                  <Link href="#" className="body-copy text-blue-600 hover:underline flex items-center text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
                  </Link>
                </div>

                <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-blue-600" strokeWidth={1} />
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
                    Get Your Free Assessment
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <GlobalFooter />
      </div>
    </>
  )
}
