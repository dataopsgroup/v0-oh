import type { Metadata } from "next"
import ClientHomePage from "./ClientHomePage"

export const metadata: Metadata = {
  title: "DataOps Group - HubSpot Implementation & Data Operations for Private Equity",
  description:
    "Transform portfolio operations into profit drivers with expert HubSpot implementation, analytics, and data operations consulting for private equity firms.",
}

export default function HomePage() {
  return <ClientHomePage />
}
