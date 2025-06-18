"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"

export default function TermsOfService() {
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
                <div className="relative group">
                  <button className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                    Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/services/analytics-bi"
                        className="block px-4 py-2 text-sm body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Analytics & BI
                      </Link>
                      <Link
                        href="/services/dataops-implementation"
                        className="block px-4 py-2 text-sm body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        DataOps Implementation
                      </Link>
                      <Link
                        href="/services/team-training"
                        className="block px-4 py-2 text-sm body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Team Training
                      </Link>
                      <Link
                        href="/services/marketing-operations-revops"
                        className="block px-4 py-2 text-sm body-copy text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Marketing Operations & RevOps
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/approach" className="text-sm body-copy text-gray-700 hover:text-blue-600">
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

      {/* Terms of Service Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="headline text-4xl text-gray-900 mb-4">Terms of Service</h1>
              <p className="body-copy text-gray-600">Last Updated: May 14, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="body-copy text-gray-700 leading-relaxed space-y-6">
                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">1. Introduction</h3>
                <p>
                  Welcome to DataOps Group. These Terms of Service govern your use of our website, services, and any
                  associated content or materials. By accessing or using our services, you agree to be bound by these
                  terms. If you do not agree with any part of these terms, you may not use our services.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">2. Services Description</h3>
                <p>
                  DataOps Group provides HubSpot consultancy services, including but not limited to HubSpot
                  implementation, optimization, training, analytics, business intelligence, and related data operation
                  services. The specific details of services will be outlined in separate service agreements or
                  statements of work between DataOps Group and the client.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">3. User Responsibilities</h3>
                <p>
                  You are responsible for maintaining the confidentiality of any login credentials associated with your
                  access to our services. You agree to notify us immediately of any unauthorized use of your account or
                  any other breach of security. You are responsible for all activities that occur under your account.
                </p>
                <p>
                  When using our services, you agree to comply with all applicable laws and regulations and not to use
                  our services for any unlawful purposes.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">4. Intellectual Property</h3>
                <p>
                  All content on our website, including text, graphics, logos, images, and software, is the property of
                  DataOps Group or our content suppliers and is protected by copyright and other intellectual property
                  laws. You may not reproduce, distribute, modify, or create derivative works from any content without
                  our express written consent.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">5. Privacy Policy</h3>
                <p>
                  Our Privacy Policy, available at{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  , describes how we collect, use, and disclose information about you. By using our services, you
                  consent to our collection and use of information as described in the Privacy Policy.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">6. Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, DataOps Group shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                  incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                  resulting from your use of our services.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">7. Termination</h3>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or
                  liability, for any reason whatsoever, including without limitation if you breach these Terms of
                  Service.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">8. Changes to Terms</h3>
                <p>
                  We reserve the right to modify or replace these Terms of Service at any time. If a revision is
                  material, we will provide at least 30 days' notice prior to any new terms taking effect. What
                  constitutes a material change will be determined at our sole discretion.
                </p>

                <h3 className="headline text-2xl text-gray-900 mt-12 mb-6">9. Contact Information</h3>
                <p>If you have any questions about these Terms of Service, please contact us at:</p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold text-gray-900">DataOps Group</p>
                  <p className="text-gray-700">Email: admin@dataopsgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </div>
  )
}
