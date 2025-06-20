"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  firstName: string
  lastName: string
  workEmail: string
  howCanWeHelp: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    howCanWeHelp: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          howCanWeHelp: "",
        })
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Let's Start a Conversation</CardTitle>
        <CardDescription className="text-center">
          Tell us about your project and how we can help transform your data operations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Enter your first name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Enter your last name"
                className="w-full"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="workEmail">Work Email *</Label>
            <Input
              id="workEmail"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleInputChange}
              required
              placeholder="Enter your work email"
              className="w-full"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="howCanWeHelp">How Can We Help? *</Label>
            <Textarea
              id="howCanWeHelp"
              name="howCanWeHelp"
              value={formData.howCanWeHelp}
              onChange={handleInputChange}
              required
              placeholder="Tell us about your project, challenges, or goals..."
              className="w-full min-h-[120px] resize-vertical"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and consent to being contacted about our services.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
