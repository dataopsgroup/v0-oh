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
      </div>
    </PageLayout>
  )
}
