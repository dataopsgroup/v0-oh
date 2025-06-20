"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  email: string
  firstName: string
  lastName: string
  company: string
  phone: string
  message: string
  howDidYouHear: string
}

export default function NativeStyledForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    message: "",
    howDidYouHear: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to Google Forms using the form action URL
      const googleFormData = new FormData()

      // Map your form fields to Google Form entry IDs
      // You'll need to inspect your Google Form to get these entry IDs
      googleFormData.append("entry.1234567890", formData.email) // Replace with actual entry ID
      googleFormData.append("entry.1234567891", formData.firstName) // Replace with actual entry ID
      googleFormData.append("entry.1234567892", formData.lastName) // Replace with actual entry ID
      googleFormData.append("entry.1234567893", formData.company) // Replace with actual entry ID
      googleFormData.append("entry.1234567894", formData.phone) // Replace with actual entry ID
      googleFormData.append("entry.1234567895", formData.message) // Replace with actual entry ID
      googleFormData.append("entry.1234567896", formData.howDidYouHear) // Replace with actual entry ID

      // Submit to Google Forms
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfD0uVl3lx1keZsrbZLmAmz880HiZpuw0ztHTCJOruQ6O1RbA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: googleFormData,
        },
      )

      // Since it's no-cors, we can't check the response, so we assume success
      setIsSubmitted(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within one business day.",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Contacting Us</h2>
          <h3 className="text-xl text-gray-600 mb-6">We will follow up within one business day.</h3>
          <p className="text-gray-500">
            Your message has been received and we'll get back to you soon with next steps.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
              placeholder="your.email@company.com"
            />
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Company Field */}
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-gray-700">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Your Company Name"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* How Did You Hear About Us */}
          <div className="space-y-2">
            <Label htmlFor="howDidYouHear" className="text-sm font-medium text-gray-700">
              How did you hear about us?
            </Label>
            <select
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Google Search">Google Search</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referral">Referral</option>
              <option value="Industry Event">Industry Event</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              How can we help you? *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full min-h-[120px]"
              placeholder="Tell us about your project and how we can help transform your data operations..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and consent to being contacted about our services.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
