"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface GlobalCTAProps {
  subtitle?: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function GlobalCTA({
  subtitle = "Ready to Transform Your Operations?",
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: GlobalCTAProps) {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="subheadline text-sm text-blue-100">{subtitle}</p>
            <h2 className="headline text-3xl text-white">{title}</h2>
          </div>
          <p className="body-copy text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">{description}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              className="body-copy text-gray-900 hover:bg-yellow-500 px-8 py-3 text-base rounded-none font-medium"
              style={{ backgroundColor: "#F4A460" }}
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button className="body-copy text-white hover:bg-green-600 px-8 py-3 text-base rounded-none bg-green-500 font-medium">
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
