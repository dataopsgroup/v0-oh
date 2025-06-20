import type React from "react"
// Removed: import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// Removed: import { HelmetProvider } from "react-helmet-async"

// Removed: const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body /* Removed: className={inter.className} */>
        {/* Removed: <HelmetProvider> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {/* Removed: </HelmetProvider> */}
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
