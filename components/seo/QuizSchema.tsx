// This component should ONLY return the script tag for JSON-LD.
// It does not need 'use client' if it only returns static JSON-LD.
import { CANONICAL_DOMAIN, buildAbsoluteUrl } from "@/utils/url-builder"

interface QuizSchemaProps {
  name: string
  description: string
  url: string
  about?: string
  educationalLevel?: string
  timeRequired?: string
  numberOfQuestions?: number
}

const QuizSchema = ({
  name,
  description,
  url,
  about = "Data Operations and HubSpot Implementation",
  educationalLevel = "Intermediate",
  timeRequired = "PT10M",
  numberOfQuestions = 20,
}: QuizSchemaProps) => {
  const baseUrl = CANONICAL_DOMAIN
  const fullUrl = buildAbsoluteUrl(url)

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": `${fullUrl}#quiz`,
    name: name,
    description: description,
    url: fullUrl,
    about: about,
    educationalLevel: educationalLevel,
    timeRequired: timeRequired,
    numberOfQuestions: numberOfQuestions,
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "assesses",
      educationalFramework: "Business Operations Assessment",
      targetDescription: "Evaluates data operations maturity and HubSpot implementation readiness",
    },
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "DataOps Group",
      url: baseUrl,
    },
    creator: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
    },
    isAccessibleForFree: true,
    inLanguage: "en-US",
    hasPart: {
      "@type": "WebPage",
      url: fullUrl,
      name: `${name} Results Page`,
    },
  }

  return (
    <script
      key="quiz-schema" // Add a unique key for React reconciliation
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export default QuizSchema
