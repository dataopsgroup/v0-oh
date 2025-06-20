"use client"

import Link from "next/link"

interface BlogCTAProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

export default function BlogCTA({ title, description, primaryButton, secondaryButton }: BlogCTAProps) {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-blue-100 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButton.href}>
            <button
              className="px-8 py-4 text-lg font-semibold rounded-md transition-colors"
              style={{
                backgroundColor: "#f59e0b",
                color: "#000000",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d97706"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f59e0b"
              }}
            >
              {primaryButton.text}
            </button>
          </Link>
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <button
                className="px-8 py-4 text-lg font-semibold rounded-md transition-colors"
                style={{
                  backgroundColor: "#059669",
                  color: "#ffffff",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#047857"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#059669"
                }}
              >
                {secondaryButton.text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
