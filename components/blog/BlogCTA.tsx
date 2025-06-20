import Link from "next/link"
import { Button } from "@/components/ui/button"

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
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
            <Link href={primaryButton.href}>{primaryButton.text}</Link>
          </Button>
          {secondaryButton && (
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 font-semibold">
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
