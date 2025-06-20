// This is a Server Component, leveraging Next.js's native Metadata API.
// No 'use client' here.
import type { Metadata } from "next"
import { buildCanonicalUrl, buildOGUrl } from "@/utils/url-builder"
import HubSpotAssessmentPageClient from "./AssessmentPageClient"

// Use Next.js's native Metadata API
export const metadata: Metadata = {
  title: "Free DataOps Maturity Assessment - 10-Minute Data Operations Audit | DataOps Group",
  description:
    "Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly.",
  keywords: "dataops assessment, data operations audit, hubspot assessment, data maturity assessment, free assessment",
  alternates: {
    canonical: buildCanonicalUrl("/data-operations-assessment"),
  },
  openGraph: {
    type: "website",
    title: "Free DataOps Maturity Assessment - 10-Minute Data Operations Audit",
    description:
      "Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly.",
    url: buildOGUrl("/data-operations-assessment"),
    images: "/images/dataops-assessment-og.png", // Relative path for Next.js static assets
  },
  twitter: {
    card: "summary_large_image",
    title: "Free DataOps Maturity Assessment - 10-Minute Data Operations Audit",
    description:
      "Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly.",
    images: "/images/dataops-assessment-og.png", // Relative path for Next.js static assets
  },
}

const HubSpotAssessmentPage = () => {
  return <HubSpotAssessmentPageClient />
}

export default HubSpotAssessmentPage
