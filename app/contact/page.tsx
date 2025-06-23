import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"

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

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Linkedin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect on LinkedIn</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    The best way to reach us is through LinkedIn. We'll respond quickly to discuss your data operations
                    needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-md transition-colors"
                  >
                    <a
                      href="https://www.linkedin.com/company/dataops-group"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect with DataOps Group
                    </a>
                  </Button>

                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center justify-center gap-3">
                        <Mail className="w-4 h-4" />
                        <span>admin@dataopsgroup.com</span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <Phone className="w-4 h-4" />
                        <span>Available upon LinkedIn connection</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    We typically respond to LinkedIn messages within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
