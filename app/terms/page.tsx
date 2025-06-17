"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

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
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                  Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/approach" className="text-sm body-copy text-gray-700 hover:text-blue-600">
                  Approach
                </Link>
                <Link href="#" className="text-sm body-copy text-gray-700 hover:text-blue-600 flex items-center">
                  Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                </Link>
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
