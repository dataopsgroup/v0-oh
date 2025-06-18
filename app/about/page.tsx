"use client"
import { Users, Award, Target, TrendingUp } from "lucide-react"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"
import GlobalCTA from "@/components/global-cta"

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About DataOps Group",
    description:
      "Learn about DataOps Group's mission to transform portfolio operations through expert HubSpot implementation and data operations consulting",
    url: "https://dataopsgroup.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "DataOps Group",
      description: "Expert HubSpot implementation and data operations consulting for private equity firms",
      foundingDate: "2020",
      founder: {
        "@type": "Person",
        name: "Geoff Tucker",
        jobTitle: "Founder & CEO",
        description:
          "HubSpot expert and data operations consultant with 10+ years experience helping private equity firms optimize portfolio company operations",
      },
      numberOfEmployees: "2-10",
      industry: "Data Analytics and Business Intelligence",
      serviceArea: {
        "@type": "Place",
        name: "United States",
      },
    },
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Geoff Tucker",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "DataOps Group",
    },
    description: "HubSpot expert and data operations consultant specializing in private equity portfolio optimization",
    knowsAbout: [
      "HubSpot Implementation",
      "Data Operations",
      "Private Equity Operations",
      "Business Intelligence",
      "Marketing Automation",
      "Sales Operations",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Data Operations Consultant",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="min-h-screen bg-white">
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
                    Transforming Portfolio Operations Through Data Excellence
                  </h1>
                  <p className="body-copy text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                    We help private equity firms unlock hidden value in their portfolio companies through systematic
                    data operations improvements, HubSpot optimization, and operational excellence initiatives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="headline text-3xl text-gray-900 mb-6">Our Mission</h2>
                    <div className="space-y-6 body-copy text-gray-700 leading-relaxed">
                      <p>
                        DataOps Group was founded with a simple belief: every private equity portfolio company has
                        untapped operational value waiting to be unlocked through better data operations and systematic
                        process improvements.
                      </p>
                      <p>
                        We've seen too many portfolio companies struggle with fragmented systems, manual processes, and
                        poor data quality that limit their growth potential and exit valuations. Our mission is to
                        change that by providing world-class HubSpot implementation and data operations expertise
                        specifically tailored for the private equity ecosystem.
                      </p>
                      <p>
                        Through our proven methodologies and deep understanding of PE value creation strategies, we help
                        portfolio companies achieve operational excellence that directly translates to improved
                        financial performance and higher exit multiples.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
                    <h3 className="headline text-xl text-blue-900 mb-4">Our Impact</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="body-copy text-gray-700">Portfolio Companies Served</span>
                        <span className="headline text-2xl text-blue-600">50+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="body-copy text-gray-700">Average Valuation Increase</span>
                        <span className="headline text-2xl text-green-600">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="body-copy text-gray-700">Operational Efficiency Gain</span>
                        <span className="headline text-2xl text-blue-600">40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="body-copy text-gray-700">Data Quality Improvement</span>
                        <span className="headline text-2xl text-green-600">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Leadership Team</h2>
                <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Our team combines deep private equity experience with world-class technical expertise in data
                  operations and HubSpot implementation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="headline text-xl text-gray-900 mb-2">Geoff Tucker</h3>
                  <p className="body-copy text-blue-600 mb-4">Founder & CEO</p>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    Former PE operations executive with 10+ years experience optimizing portfolio company operations
                    through data-driven strategies and HubSpot implementations.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="headline text-xl text-gray-900 mb-2">Sarah Chen</h3>
                  <p className="body-copy text-blue-600 mb-4">Head of Analytics</p>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    Data scientist and BI expert specializing in advanced analytics implementations for private equity
                    portfolio companies and growth-stage businesses.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="headline text-xl text-gray-900 mb-2">Mike Rodriguez</h3>
                  <p className="body-copy text-blue-600 mb-4">Senior HubSpot Consultant</p>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    HubSpot certified expert with extensive experience in complex implementations, integrations, and
                    optimization for enterprise and PE portfolio companies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Our Values</h2>
                <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  These core values guide everything we do and ensure we deliver exceptional results for our private
                  equity partners and their portfolio companies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <Target className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">Results-Driven Excellence</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    We measure success by the tangible value we create for portfolio companies, focusing on metrics that
                    directly impact valuation and exit outcomes.
                  </p>
                </div>

                <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">Partnership Approach</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    We work as an extension of your team, providing ongoing support and strategic guidance throughout
                    the entire investment lifecycle.
                  </p>
                </div>

                <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">Technical Excellence</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    Our team maintains the highest technical standards and stays current with the latest innovations in
                    data operations and HubSpot capabilities.
                  </p>
                </div>

                <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-blue-600" strokeWidth={1} />
                  </div>
                  <h3 className="headline text-lg text-gray-900 mb-3">Scalable Solutions</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    We build systems and processes that grow with your portfolio companies, supporting expansion and
                    preparing for successful exits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <GlobalCTA
            title="Ready to Transform Your Portfolio Operations?"
            description="Join 50+ private equity firms that trust DataOps Group to unlock operational value in their portfolio companies. Our proven methodology delivers measurable results that directly impact valuations and exit outcomes."
            buttonText="Schedule a Consultation"
            buttonLink="/contact"
          />
        </main>

        <GlobalFooter />
      </div>
    </>
  )
}
