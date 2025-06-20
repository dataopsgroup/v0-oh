import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import GlobalFooter from "@/components/global-footer"
// Removed: import { HelmetProvider } from "react-helmet-async"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Removed: <HelmetProvider> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <GlobalFooter />
        </ThemeProvider>
        {/* Removed: </HelmetProvider> */}
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
