"use client"

import { Button } from "@/components/ui/button"
import { Calculator, Target, TrendingUp, Users, CheckCircle, Clock, DollarSign, BarChart3 } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"

export default function PEValueCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
                    PE Value Creation Program
                  </div>
                  <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                    100-Day PE Portfolio Company Transformation
                  </h1>
                  <p className="body-copy text-lg md:text-xl text-gray-700 leading-relaxed">
                    Systematic 100-day program transforms PE portfolio companies into unified value creation engines.
                    Drive EBITDA growth through operational excellence and data-driven decision making.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="body-copy text-white hover:bg-blue-700 px-8 py-3 text-base rounded-none"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    <Link href="/contact">Start Your Transformation</Link>
                  </Button>
                  <Button
                    className="body-copy text-gray-900 hover:bg-yellow-500 px-8 py-3 text-base rounded-none border border-gray-300"
                    style={{ backgroundColor: "#FBB03B" }}
                  >
                    <Link href="#roi-calculator">Calculate ROI</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h3 className="headline text-xl text-gray-900 mb-6">Program Results</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="body-copy text-gray-700">Revenue Growth</span>
                      <span className="headline text-green-600 font-semibold">25-40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="body-copy text-gray-700">Operational Efficiency</span>
                      <span className="headline text-green-600 font-semibold">30-50%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="body-copy text-gray-700">Time to Value</span>
                      <span className="headline text-blue-600 font-semibold">100 Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="body-copy text-gray-700">ROI</span>
                      <span className="headline text-green-600 font-semibold">300-500%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">The PE Portfolio Company Challenge</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Most portfolio companies struggle with fragmented operations, inconsistent data, and misaligned teams
                that prevent them from reaching their full value creation potential.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-red-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-xl text-gray-900 mb-3">Fragmented Systems</h3>
                <p className="body-copy text-sm text-gray-600 leading-relaxed">
                  Disconnected tools and processes create data silos, making it impossible to get a unified view of
                  business performance and growth opportunities.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-red-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-xl text-gray-900 mb-3">Misaligned Teams</h3>
                <p className="body-copy text-sm text-gray-600 leading-relaxed">
                  Sales, marketing, and operations teams work in isolation with different goals, metrics, and processes,
                  leading to inefficiencies and missed opportunities.
                </p>
              </div>
              <div className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-red-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-xl text-gray-900 mb-3">Limited Visibility</h3>
                <p className="body-copy text-sm text-gray-600 leading-relaxed">
                  Without real-time insights and predictive analytics, leadership makes decisions based on outdated
                  information, slowing growth and value creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Our 100-Day Transformation Solution</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A systematic approach that unifies your operations, aligns your teams, and creates a data-driven
                foundation for sustainable growth and value creation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="headline text-xl text-gray-900 mb-2">Assessment & Strategy (Days 1-14)</h3>
                      <p className="body-copy text-gray-600">
                        Comprehensive audit of current systems, processes, and team alignment to identify key
                        opportunities and create a customized transformation roadmap.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="headline text-xl text-gray-900 mb-2">System Integration (Days 15-60)</h3>
                      <p className="body-copy text-gray-600">
                        Implement and integrate HubSpot with existing systems, create unified data flows, and establish
                        automated processes for maximum efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="headline text-xl text-gray-900 mb-2">Team Alignment (Days 61-85)</h3>
                      <p className="body-copy text-gray-600">
                        Train teams on new processes, establish shared KPIs, and create accountability structures that
                        drive consistent execution across all departments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="headline text-xl text-gray-900 mb-2">Optimization & Handoff (Days 86-100)</h3>
                      <p className="body-copy text-gray-600">
                        Fine-tune systems based on initial results, establish ongoing monitoring, and transfer full
                        ownership to your internal team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="headline text-2xl text-gray-900 mb-6">What You Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" strokeWidth={1.5} />
                    <span className="body-copy text-gray-700">Unified HubSpot implementation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" strokeWidth={1.5} />
                    <span className="body-copy text-gray-700">Custom dashboards & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" strokeWidth={1.5} />
                    <span className="body-copy text-gray-700">Automated workflows & processes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" strokeWidth={1.5} />
                    <span className="body-copy text-gray-700">Team training & certification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" strokeWidth={1.5} />
                    <span className="body-copy text-gray-700">Performance monitoring system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" strokeWidth={1.5} />
                    <span className="body-copy text-gray-700">90-day post-launch support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section id="roi-calculator" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">See Your 100-Day Transformation ROI</h2>
              <p className="body-copy text-lg text-gray-700 mb-8 leading-relaxed">
                Before committing to our program, calculate the expected return on investment from your portfolio
                company's operational transformation. Our ROI calculator shows revenue gains, efficiency improvements,
                and cost savings specific to your company's profile.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Calculator className="w-10 h-10 text-green-600 mr-3" strokeWidth={1} />
                  <h3 className="headline text-2xl text-gray-900">RevOps ROI Calculator</h3>
                </div>
                <p className="body-copy text-gray-600 mb-6 leading-relaxed">
                  Get a detailed projection of revenue gains, operational cost savings, and efficiency improvements from
                  implementing our 100-day transformation program.
                </p>
                <Button
                  className="body-copy text-white hover:bg-green-700 px-8 py-3 text-lg rounded-none"
                  style={{ backgroundColor: "#16a34a" }}
                >
                  <Link href="/revops-roi-calculator">Calculate Your Program ROI</Link>
                </Button>
                <p className="body-copy text-sm text-gray-500 mt-4">
                  Takes 3 minutes • Shows 12-month projection • Industry benchmarks included
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Program Investment</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transparent pricing with guaranteed results. Our program typically pays for itself within the first 6
                months through increased efficiency and revenue growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-xl text-gray-900 mb-3">100-Day Timeline</h3>
                <p className="body-copy text-gray-600">
                  Complete transformation in just over 3 months with minimal disruption to daily operations.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 text-center border-2 border-blue-200">
                <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-green-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-xl text-gray-900 mb-3">Fixed Investment</h3>
                <p className="body-copy text-gray-600 mb-4">
                  One-time program fee with no hidden costs or ongoing commitments required.
                </p>
                <Button
                  className="body-copy text-white hover:bg-blue-700 px-6 py-2 rounded-none"
                  style={{ backgroundColor: "#1e40af" }}
                >
                  <Link href="/contact">Get Pricing</Link>
                </Button>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-green-600" strokeWidth={1} />
                </div>
                <h3 className="headline text-xl text-gray-900 mb-3">Guaranteed ROI</h3>
                <p className="body-copy text-gray-600">
                  We guarantee measurable results or we'll work with you until you achieve them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Proven Results</h2>
              <p className="body-copy text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our 100-day transformation program has helped dozens of PE portfolio companies achieve breakthrough
                results and accelerated value creation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">$2.4M</div>
                  <div className="body-copy text-gray-600">Additional ARR in 6 months</div>
                </div>
                <p className="body-copy text-gray-700 text-center">
                  "The transformation was incredible. We went from fragmented operations to a unified growth engine."
                </p>
                <div className="text-center mt-4">
                  <div className="body-copy text-sm text-gray-500">SaaS Portfolio Company</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                  <div className="body-copy text-gray-600">Reduction in sales cycle</div>
                </div>
                <p className="body-copy text-gray-700 text-center">
                  "Our sales team is now 3x more efficient with the new processes and automation."
                </p>
                <div className="text-center mt-4">
                  <div className="body-copy text-sm text-gray-500">Manufacturing Company</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">8x</div>
                  <div className="body-copy text-gray-600">Increase in qualified leads</div>
                </div>
                <p className="body-copy text-gray-700 text-center">
                  "The marketing automation and lead scoring completely transformed our pipeline."
                </p>
                <div className="text-center mt-4">
                  <div className="body-copy text-sm text-gray-500">Professional Services</div>
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
                <p className="subheadline text-sm text-blue-100">Ready to Transform Your Portfolio Company?</p>
                <h2 className="headline text-3xl text-white">Start Your 100-Day Transformation</h2>
              </div>
              <p className="body-copy text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join the PE firms that have already accelerated their portfolio company value creation through our
                proven 100-day transformation program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="body-copy text-gray-900 hover:bg-yellow-500 px-8 py-3 text-base rounded-none"
                  style={{ backgroundColor: "#FBB03B" }}
                >
                  <Link href="/contact">Schedule Strategy Call</Link>
                </Button>
                <Button className="body-copy text-blue-600 hover:bg-gray-100 bg-white px-8 py-3 text-base rounded-none">
                  <Link href="#roi-calculator">Calculate Your ROI</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="headline text-3xl md:text-4xl text-gray-900 mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="headline text-xl text-gray-900 mb-3">
                  What makes this different from other consulting programs?
                </h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Our program is specifically designed for PE portfolio companies with a fixed 100-day timeline,
                  guaranteed results, and a systematic approach that's been proven across dozens of implementations. We
                  focus on rapid value creation, not lengthy consulting engagements.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <h3 className="headline text-xl text-gray-900 mb-3">
                  How much disruption will this cause to our daily operations?
                </h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  Minimal disruption is a key design principle. We work around your existing operations and implement
                  changes gradually. Most team members spend less than 2-3 hours per week on transformation activities
                  during the 100-day period.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <h3 className="headline text-xl text-gray-900 mb-3">
                  What if our company already uses other CRM or marketing tools?
                </h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  We specialize in integrating HubSpot with existing systems. Our approach includes data migration,
                  system integration, and ensuring all your current tools work seamlessly together. We don't force you
                  to abandon working systems.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <h3 className="headline text-xl text-gray-900 mb-3">What happens after the 100 days are complete?</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  You receive 90 days of post-launch support, complete documentation, trained internal champions, and
                  ongoing access to our resource library. Your team will be fully equipped to maintain and optimize the
                  systems independently.
                </p>
              </div>
              <div>
                <h3 className="headline text-xl text-gray-900 mb-3">How do you guarantee results?</h3>
                <p className="body-copy text-gray-700 leading-relaxed">
                  We establish clear, measurable KPIs at the beginning of the program based on your specific goals. If
                  you don't achieve the agreed-upon results within 6 months of program completion, we'll continue
                  working with you at no additional cost until you do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  )
}
