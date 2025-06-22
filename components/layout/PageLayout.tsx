import type React from "react"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <GlobalFooter />
    </>
  )
}
