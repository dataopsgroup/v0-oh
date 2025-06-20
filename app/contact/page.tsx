import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import NativeStyledForm from "@/components/contact/NativeStyledForm"

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NativeStyledForm />

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Having trouble with the form? Email us directly at{" "}
                <a href="mailto:admin@dataopsgroup.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  admin@dataopsgroup.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
