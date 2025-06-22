"use client"

import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { errorTracker } from "@/lib/error-tracking"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
  workEmail: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  howCanWeHelp: z.string().min(10, "Please provide more details (minimum 10 characters)").max(1000, "Message too long"),
  consent: z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface SubmissionState {
  status: "idle" | "submitting" | "success" | "error"
  message?: string
  retryCount: number
}

export default function EnhancedContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
    retryCount: 0,
  })

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      company: "",
      phone: "",
      howCanWeHelp: "",
      consent: false,
    },
  })

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      setSubmissionState((prev) => ({ ...prev, status: "submitting" }))

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest", // CSRF protection
          },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || `HTTP ${response.status}`)
        }

        // Success
        setSubmissionState({
          status: "success",
          message: "Thank you! Your message has been sent successfully.",
          retryCount: 0,
        })

        // Track successful submission
        errorTracker.trackFormSubmission("contact", true)

        // Reset form
        form.reset()
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"

        setSubmissionState((prev) => ({
          status: "error",
          message: errorMessage,
          retryCount: prev.retryCount + 1,
        }))

        // Track failed submission
        errorTracker.trackFormSubmission("contact", false, errorMessage)
        errorTracker.captureError(error instanceof Error ? error : new Error(errorMessage), {
          component: "ContactForm",
          action: "submit",
          metadata: { retryCount: submissionState.retryCount + 1 },
        })
      }
    },
    [form, submissionState.retryCount],
  )

  const handleRetry = useCallback(() => {
    setSubmissionState((prev) => ({ ...prev, status: "idle", message: undefined }))
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>Tell us about your data operations challenges and how we can help.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Success Message */}
            {submissionState.status === "success" && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">{submissionState.message}</AlertDescription>
              </Alert>
            )}

            {/* Error Message */}
            {submissionState.status === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {submissionState.message}
                  {submissionState.retryCount < 3 && (
                    <Button
                      type="button"
                      variant="link"
                      size="sm"
                      onClick={handleRetry}
                      className="ml-2 p-0 h-auto text-red-600 underline"
                    >
                      Try again
                    </Button>
                  )}
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="workEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="howCanWeHelp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How can we help? *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your data operations challenges..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input type="checkbox" checked={field.value} onChange={field.onChange} className="mt-1" />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm">
                      I agree to the{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about DataOps services.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={submissionState.status === "submitting"}>
              {submissionState.status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
