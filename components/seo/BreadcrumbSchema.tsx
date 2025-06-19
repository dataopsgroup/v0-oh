// This component should ONLY return the script tag for JSON-LD.
import { buildAbsoluteUrl } from "@/utils/url-builder"

interface BreadcrumbSchemaProps {
  items: {
    name: string
    url: string
  }[]
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.url),
    })),
  }

  return (
    <script
      key="breadcrumb-schema" // Add a unique key for React reconciliation
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  )
}

export default BreadcrumbSchema
