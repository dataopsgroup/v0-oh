import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import DynamicHomePage from "@/components/client/DynamicHomePage"

export const metadata: Metadata = {
  title: "DataOps Group - PE Portfolio Transformation | Turn Operations Into Profit Drivers",
  description:
    "Transform PE portfolio operations into profit drivers in 100 days. Expert HubSpot implementation and data operations consulting for private equity firms. 19% higher valuation multiples, 73% faster EBITDA growth.",
  keywords: [
    "PE portfolio transformation",
    "private equity operations",
    "HubSpot implementation",
    "data operations consulting",
    "portfolio company optimization",
    "revenue operations",
    "marketing automation",
    "business intelligence",
    "DataOps consulting",
  ].join(", "),
  openGraph: {
    title: "DataOps Group - PE Portfolio Transformation",
    description:
      "Transform portfolio operations into profit drivers with expert HubSpot implementation and data operations consulting",
    type: "website",
    url: "https://dataopsgroup.com",
    images: [
      {
        url: "/images/dataops-assessment-og.png",
        width: 1200,
        height: 630,
        alt: "DataOps Group - PE Portfolio Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataOps Group - PE Portfolio Transformation",
    description: "Transform portfolio operations into profit drivers in 100 days",
    images: ["/images/dataops-assessment-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://dataopsgroup.com",
  },
}

export default function HomePage() {
  return (
    <PageLayout>
      <DynamicHomePage />
    </PageLayout>
  )
}
