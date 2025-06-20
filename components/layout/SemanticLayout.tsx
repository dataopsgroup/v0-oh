"use client" // This component wraps client-side content

import type React from "react"

interface SemanticLayoutProps {
  children: React.ReactNode
}

const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  return <>{children}</>
}

export default SemanticLayout
