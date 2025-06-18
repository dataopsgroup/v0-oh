"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"
import { Phone, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    howCanWeHelp: "",
    workEmail: "",
    firstName: "",
    lastName: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact DataOps Group",
    description: "Get in touch with DataOps Group for HubSpot implementation and data operations consulting",
    mainEntity: {
      "@type": "Organization",
      name: "DataOps Group",
      email: "admin@dataopsgroup.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "admin@dataopsgroup.com",
      },
    },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          howCanWeHelp: "",
          workEmail: "",
          firstName: "",
          lastName: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <div className="min-h-screen bg-white">
        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-yellow-500 text-sm font-medium mb-2">
                    Get In Touch
                  </div>
                  <h1 className="headline text-4xl md:text-5xl text-gray-900 leading-tight">
                    Ready to Transform Your Operations?
                  </h1>
                  <p className="body-copy text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                    Get started with a free consultation. Our HubSpot experts will assess your current operations and
                    provide a customized roadmap for your portfolio transformation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                    <h2 className="headline text-2xl text-gray-900 mb-6">Send Us a Message</h2>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <p className="body-copy text-green-800 font-medium">Message sent successfully!</p>
                          <p className="body-copy text-sm text-green-700">We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                        <div>
                          <p className="body-copy text-red-800 font-medium">Something went wrong.</p>
                          <p className="body-copy text-sm text-red-700">
                            Please try again or email us directly at admin@dataopsgroup.com
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* How Can We Help */}
                      <div>
                        <label
                          htmlFor="howCanWeHelp"
                          className="block body-copy text-sm font-medium text-gray-700 mb-2"
                        >
                          How Can We Help? *
                        </label>
                        <textarea
                          id="howCanWeHelp"
                          name="howCanWeHelp"
                          required
                          rows={4}
                          value={formData.howCanWeHelp}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 body-copy"
                          placeholder="Tell us about your current challenges and goals..."
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label htmlFor="workEmail" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          name="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 body-copy"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      {/* First Name */}
                      <div>
                        <label htmlFor="firstName" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 body-copy"
                          placeholder="John"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label htmlFor="lastName" className="block body-copy text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 body-copy"
                          placeholder="Smith"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="body-copy bg-blue-600 hover:bg-blue-700 text-white w-full py-3 px-6 rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>

                    <p className="body-copy text-xs text-gray-500 mt-4 text-center">
                      We respect your privacy and will never share your information.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="headline text-2xl text-gray-900 mb-6">Get In Touch</h2>
                    <p className="body-copy text-gray-700 leading-relaxed mb-8">
                      Ready to transform your portfolio operations? Our team of HubSpot experts is here to help you
                      streamline processes, improve reporting, and drive measurable growth across your portfolio
                      companies.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="headline text-lg text-gray-900 mb-1">Schedule a Call</h3>
                        <p className="body-copy text-gray-700">
                          <a
                            href="https://meetings.hubspot.com/dataopsgroup/gtclient"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            Click to Schedule a Call
                          </a>
                        </p>
                        <p className="body-copy text-sm text-gray-500">
                          Available Monday - Thursday, 9 AM - 5 PM Central Time
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                    <h3 className="headline text-lg text-blue-900 mb-4">What to Expect</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="body-copy text-gray-700">Free initial consultation and assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="body-copy text-gray-700">Customized recommendations for your portfolio</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="body-copy text-gray-700">Clear roadmap with timeline and ROI projections</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="body-copy text-gray-700">No obligation or sales pressure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="headline text-3xl text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="body-copy text-lg text-gray-700 leading-relaxed">
                  Common questions about our services and process
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="headline text-lg text-gray-900 mb-3">How long does implementation take?</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    Our proven methodology delivers full portfolio standardization within 100 days, including setup,
                    training, and go-live.
                  </p>
                </div>

                <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="headline text-lg text-gray-900 mb-3">What's included in the assessment?</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    We evaluate your current operations, identify gaps, and provide a detailed roadmap with ROI
                    projections.
                  </p>
                </div>

                <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="headline text-lg text-gray-900 mb-3">Do you work with all portfolio sizes?</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    Yes, we work with PE firms of all sizes, from single acquisitions to large multi-company portfolios.
                  </p>
                </div>

                <div className="bg-white p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="headline text-lg text-gray-900 mb-3">What's the typical ROI?</h3>
                  <p className="body-copy text-sm text-gray-600 leading-relaxed">
                    Most clients see 18-22x return on investment within the first year through operational efficiency
                    gains.
                  </p>
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
