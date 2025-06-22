import type { Metadata } from "next"
import PageLayout from "@/components/layout/PageLayout"
import DynamicHomePage from "@/components/client/DynamicHomePage"

export const metadata: Metadata = {
  title: "DataOps Group - PE Portfolio Transformation | Turn Operations Into Profit Drivers",
  description: "Transform PE portfolio operations into profit drivers in 100 days. Expert HubSpot implementation and data operations consulting for private equity firms. 19% higher valuation multiples, 73% faster EBITDA growth.",
  // ... rest of the metadata from main
}

export default function HomePage() {
  return (
    <PageLayout>
      <DynamicHomePage />
    </PageLayout>
  )
}
