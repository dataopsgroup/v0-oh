"use client" // This component wraps client-side content

import type React from "react"

interface SemanticLayoutProps {
  children: React.ReactNode
  hideFooter?: boolean
}

const SemanticLayout = ({ children, hideFooter }: SemanticLayoutProps) => {
  return (
    <>
      {/* Navbar, Footer, ScrollToTop, and SEO monitors removed as per instructions */}
      <main className="min-h-screen">{children}</main>
    </>
  )
}

export default SemanticLayout
