"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  // Schema.org markup for About page
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About DataOps Group - Meet Geoff Tucker",
    description:
      "Meet Geoff Tucker, Founder & Lead HubSpot Implementation Specialist at DataOps Group. 15+ years experience rescuing failed HubSpot projects and transforming them into competitive advantages.",
    url: "https://dataopsgroup.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "DataOps Group",
      description:
        "Specialized HubSpot implementation experts who rescue failed projects and transform chaotic systems into profit-driving platforms",
      founder: {
        "@type": "Person",
        name: "Geoff Tucker",
        jobTitle: "Founder & Lead HubSpot Implementation Specialist",
        description:
          "HubSpot Solutions Partner with 15+ years experience rescuing failed implementations and transforming them into competitive advantages",
      },
    },
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Geoff Tucker",
    jobTitle: "Founder & Lead HubSpot Implementation Specialist",
    worksFor: {
      "@type": "Organization",
      name: "DataOps Group",
    },
    description:
      "HubSpot Solutions Partner with over 15 years of experience in HubSpot implementations and revenue operations, specializing in rescuing failed projects and transforming them into competitive advantages.",
    knowsAbout: [
      "HubSpot Implementation Rescue & Optimization",
      "Private Equity Portfolio Operations",
      "Revenue Operations (RevOps) Strategy",
      "Marketing Automation & Process Design",
      "Data Quality Management & Governance",
      "Sales Process Optimization",
      "Business Intelligence & Analytics",
    ],
    hasCredential: [
      "HubSpot Solutions Partner",
      "HubSpot Marketing Software Certified",
      "HubSpot Sales Software Certified",
      "HubSpot Service Hub Certified",
      "HubSpot CMS Hub Certified",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                    About DataOps Group
                  </div>
                  <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                    Meet the Team Behind Your Data Success
                  </h1>
                  <p className="body-copy text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                    We're specialized HubSpot implementation experts who rescue failed projects and transform chaotic
                    systems into profit-driving platforms that meet private equity standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Geoff Tucker Bio */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="headline text-3xl text-gray-900 mb-6">Geoff Tucker</h2>
                    <h3 className="subheadline text-xl text-blue-600 font-semibold mb-6">
                      Founder & Lead HubSpot Implementation Specialist
                    </h3>

                    <div className="space-y-6 body-copy text-gray-700 leading-relaxed">
                      <p>
                        With over 15 years of experience in HubSpot implementations and revenue operations, Geoff has
                        rescued hundreds of failed projects and transformed them into competitive advantages. His
                        expertise spans across multiple industries, with particular specialization in private equity
                        portfolio company optimizations.
                      </p>

                      <p>
                        Geoff's approach combines deep technical knowledge with strategic business insight. He
                        understands that successful implementations aren't just about technology—they're about creating
                        systems that people actually want to use and that drive measurable business outcomes.
                      </p>

                      <p>
                        As a certified HubSpot Solutions Partner, Geoff has led implementations that have delivered
                        measurable business value for clients. His systematic methodology ensures that every system he
                        designs directly contributes to bottom-line results while meeting the operational standards that
                        private equity firms expect.
                      </p>

                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 my-8">
                        <h4 className="headline text-lg text-blue-800 mb-3">
                          Curious About Your Implementation's Health?
                        </h4>
                        <p className="body-copy text-gray-700 mb-4">
                          Before working together, Geoff recommends taking our assessment to identify your biggest
                          operational gaps and growth opportunities.
                        </p>
                        <Button className="body-copy bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-none">
                          <Link href="#operations-assessment">Take the Operations Assessment</Link>
                        </Button>
                      </div>

                      <h4 className="headline text-xl text-gray-900 mt-8 mb-4">Core Specializations:</h4>
                      <ul className="list-disc pl-6 space-y-2 body-copy text-gray-700">
                        <li>HubSpot Implementation Rescue & Optimization</li>
                        <li>Private Equity Portfolio Operations</li>
                        <li>Revenue Operations (RevOps) Strategy</li>
                        <li>Marketing Automation & Process Design</li>
                        <li>Data Quality Management & Governance</li>
                        <li>Sales Process Optimization</li>
                        <li>Business Intelligence & Analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="headline text-lg text-gray-900 mb-4">Track Record</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="headline text-2xl text-blue-600">15+</div>
                        <div className="body-copy text-sm text-gray-600">Years of Experience</div>
                      </div>
                      <div>
                        <div className="headline text-2xl text-blue-600">30+</div>
                        <div className="body-copy text-sm text-gray-600">Successful Implementations</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="headline text-lg text-gray-900 mb-4">Certifications</h3>
                    <ul className="space-y-2 body-copy text-sm text-gray-700">
                      <li>• HubSpot Solutions Partner</li>
                      <li>• HubSpot Marketing Software Certified</li>
                      <li>• HubSpot Sales Software Certified</li>
                      <li>• HubSpot Service Hub Certified</li>
                      <li>• HubSpot CMS Hub Certified</li>
                    </ul>
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
        <GlobalFooter />
      </div>
    </>
  )
}
