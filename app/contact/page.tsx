import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | DataOps Group",
  description:
    "Get in touch with DataOps Group for expert HubSpot implementation, data operations consulting, and marketing operations solutions.",
}

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">Get in Touch</h1>
              <p className="mt-6 text-xl text-gray-600">
                Ready to transform your data operations? Let's discuss how we can help drive your business forward.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px:4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:hello@dataopsgroup.com" className="text-blue-600 hover:text-blue-800">
                      hello@dataopsgroup.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule a Call</h3>
                  <p className="text-gray-600">Book a consultation to discuss your specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
