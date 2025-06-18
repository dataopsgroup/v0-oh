import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"
import { CheckCircle, Users, Clock, DollarSign, Star, AlertTriangle, Target, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Hire a HubSpot Expert: Complete Guide for 2025 | DataOps Group",
  description:
    "Complete guide to hiring HubSpot experts. Learn how to find, evaluate, and work with certified HubSpot consultants for maximum ROI.",
  keywords:
    "HubSpot expert, HubSpot consultant, hire HubSpot specialist, HubSpot implementation, HubSpot integration, marketing operations",
  authors: [{ name: "Geoff Tucker" }],
  openGraph: {
    title: "How to Hire a HubSpot Expert: Complete Guide for 2025",
    description:
      "Complete guide to hiring HubSpot experts. Learn how to find, evaluate, and work with certified HubSpot consultants for maximum ROI.",
    type: "article",
    url: "https://www.dataopsgroup.com/guides/hubspot-expert",
    images: [
      {
        url: "/images/dataops-logo-main.jpg",
        width: 1200,
        height: 630,
        alt: "HubSpot Expert Hiring Guide - DataOps Group",
      },
    ],
    siteName: "DataOps Group",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DataOpsGroup",
    creator: "@GeoffTucker",
    title: "How to Hire a HubSpot Expert: Complete Guide for 2025",
    description:
      "Complete guide to hiring HubSpot experts. Learn how to find, evaluate, and work with certified HubSpot consultants for maximum ROI.",
    images: ["/images/dataops-logo-main.jpg"],
  },
  alternates: {
    canonical: "https://www.dataopsgroup.com/guides/hubspot-expert",
  },
}

export default function HubSpotExpertGuidePage() {
  const faqItems = [
    {
      question: "What qualifications should I look for in a HubSpot expert?",
      answer:
        "Look for HubSpot certifications, integration experience, portfolio of successful implementations, and expertise in your specific industry or use case.",
    },
    {
      question: "How much does hiring a HubSpot expert cost?",
      answer:
        "Costs range from $75-400 per hour depending on experience level. Project-based pricing ranges from $3,500 for basic setup to $75,000+ for enterprise implementations.",
    },
    {
      question: "What's the difference between a HubSpot expert and agency?",
      answer:
        "Experts offer specialized knowledge and direct access, while agencies provide broader resources but may assign junior staff to your project.",
    },
    {
      question: "How long does a typical HubSpot implementation take?",
      answer:
        "Basic implementations take 30-60 days, comprehensive multi-hub setups take 60-120 days, and enterprise integrations can take 120-180 days.",
    },
    {
      question: "When should I hire a HubSpot expert vs doing it myself?",
      answer:
        "Consider hiring an expert when you need complex integrations, have limited technical resources, require industry-specific customization, or want to avoid costly implementation mistakes.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/guides" className="text-blue-600 hover:text-blue-800">
                  Guides
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">How to Hire a HubSpot Expert</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section - Unique styling */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How to Hire a <span className="text-orange-600">HubSpot Expert</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              The complete guide to finding, evaluating, and working with certified HubSpot consultants for maximum ROI
              in 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>By Geoff Tucker</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Updated Jan 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents - Unique styling */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">When to hire vs. DIY approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Essential qualifications to look for</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Cost breakdown and budgeting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Red flags to avoid</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Interview questions that matter</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Project timeline expectations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Maximizing your investment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Long-term partnership strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* When to Hire Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">When Should You Hire a HubSpot Expert?</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">The $50,000 Mistake</h3>
                  <p className="text-yellow-700">
                    Companies that attempt complex HubSpot implementations without expert guidance often spend 2-3x more
                    fixing mistakes than hiring an expert from the start. Don't let this be you.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Hire an Expert When:
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You need complex integrations with existing systems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Your team lacks technical HubSpot experience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You're implementing multiple hubs simultaneously
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Time-to-value is critical for your business
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You need industry-specific customizations
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  DIY Approach When:
                </h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You have a dedicated, certified team member
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Your needs are basic (simple lead capture, email marketing)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You have 6+ months for gradual implementation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Budget is extremely limited
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You're using HubSpot as a simple CRM only
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cost Breakdown Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">HubSpot Expert Pricing Guide</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="text-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Basic Setup</h3>
                  <p className="text-3xl font-bold text-green-600 mt-2">$3,500 - $8,000</p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Initial configuration</li>
                  <li>• Basic automation setup</li>
                  <li>• Team training (2-4 hours)</li>
                  <li>• Email templates</li>
                  <li>• Simple reporting</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-300 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Comprehensive</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">$15,000 - $35,000</p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-hub implementation</li>
                  <li>• Advanced workflows</li>
                  <li>• Custom integrations</li>
                  <li>• Extensive training</li>
                  <li>• Custom reporting dashboards</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                <div className="text-center mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
                  <p className="text-3xl font-bold text-purple-600 mt-2">$50,000+</p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complex system integrations</li>
                  <li>• Custom development</li>
                  <li>• Ongoing optimization</li>
                  <li>• Dedicated project manager</li>
                  <li>• 6-month support included</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">💡 Pro Tip: Hourly vs. Project Pricing</h3>
              <p className="text-orange-700 mb-3">
                <strong>Hourly rates:</strong> $75-400/hour depending on experience and specialization.
              </p>
              <p className="text-orange-700">
                <strong>Project pricing</strong> is often more cost-effective for comprehensive implementations, as
                experts can work more efficiently without hourly pressure.
              </p>
            </div>
          </section>

          {/* Qualifications Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Qualifications to Look For</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  HubSpot Certifications (Must-Have)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ HubSpot Marketing Hub Implementation</li>
                    <li>✅ HubSpot Sales Hub Implementation</li>
                    <li>✅ HubSpot Service Hub Implementation</li>
                    <li>✅ HubSpot CMS Hub Implementation</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ HubSpot Operations Hub Implementation</li>
                    <li>✅ HubSpot Reporting Certification</li>
                    <li>✅ HubSpot API Certification (for integrations)</li>
                    <li>✅ Solutions Partner status (agencies)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-6 h-6 text-blue-500 mr-2" />
                  Technical Skills (Nice-to-Have)
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Integrations</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Salesforce</li>
                      <li>• Zapier/Make</li>
                      <li>• Custom APIs</li>
                      <li>• Webhooks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Development</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• HubL templating</li>
                      <li>• CSS/HTML</li>
                      <li>• JavaScript</li>
                      <li>• Custom modules</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Analytics</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Google Analytics</li>
                      <li>• Attribution modeling</li>
                      <li>• Custom reporting</li>
                      <li>• Data analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your HubSpot Expert?</h2>
            <p className="text-xl mb-6 opacity-90">
              Skip the guesswork. Our certified team has implemented HubSpot for 200+ companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </a>
              <a
                href="/services/analytics-bi"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </section>
        </div>
      </article>

      <GlobalFooter />
    </div>
  )
}
