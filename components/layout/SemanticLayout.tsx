import type React from "react"
import type { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface SemanticLayoutProps {
  children: ReactNode
  hideHeader?: boolean
  hideFooter?: boolean
}

const SemanticLayout: React.FC<SemanticLayoutProps> = ({
  children,
  hideHeader,
  hideFooter,
}) => {
  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  )
}

export default SemanticLayout
