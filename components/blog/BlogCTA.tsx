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
  sectionVariant?: "dark" | "light" // New prop for section background
}

export default function BlogCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  sectionVariant = "dark",
}: BlogCTAProps) {
  const sectionClasses =
    sectionVariant === "dark"
      ? "bg-dataops-blue-dark text-white" // Using dataops-blue-dark for the dark CTA
      : "bg-white border border-gray-200 rounded-lg shadow-sm text-gray-900"

  const titleClasses = sectionVariant === "dark" ? "text-white" : "text-gray-900"
  const descriptionClasses = sectionVariant === "dark" ? "text-blue-100" : "text-gray-700"

  const primaryButtonClasses =
    sectionVariant === "dark"
      ? "bg-white text-dataops-blue-dark hover:bg-gray-100" // Button text matches dark background
      : "bg-dataops-accent-blue text-white hover:bg-dataops-blue-dark"

  const secondaryButtonClasses =
    sectionVariant === "dark"
      ? "border-white text-white hover:bg-white hover:text-dataops-blue-dark"
      : "border-dataops-accent-blue text-dataops-accent-blue hover:bg-dataops-light-blue/20 hover:text-dataops-accent-blue"

  return (
    <section className={`${sectionClasses} py-16 my-8`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>{title}</h2>
        <p className={`text-xl mb-8 ${descriptionClasses}`}>{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className={primaryButtonClasses}>
            <Link href={primaryButton.href}>{primaryButton.text}</Link>
          </Button>
          {secondaryButton && (
            <Button asChild variant="outline" size="lg" className={secondaryButtonClasses}>
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
