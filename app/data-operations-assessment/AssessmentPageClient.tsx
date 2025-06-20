"use client"
import SemanticLayout from "@/components/layout/SemanticLayout"
import AssessmentQuiz from "@/components/assessment/AssessmentQuiz"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"
import QuizSchema from "@/components/seo/QuizSchema"

const HubSpotAssessmentPageClient = () => {
  return (
    <SemanticLayout>
      {/* JSON-LD schemas rendered directly, not wrapped in Helmet */}
      <QuizSchema
        name="DataOps Maturity Assessment"
        description="Comprehensive assessment to evaluate your data operations maturity and HubSpot implementation readiness"
        url="/data-operations-assessment"
        about="Data Operations, HubSpot Implementation, and Marketing Operations"
        educationalLevel="Intermediate to Advanced"
        timeRequired="PT10M"
        numberOfQuestions={20}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "DataOps Assessment", url: "/data-operations-assessment" },
        ]}
      />

      <AssessmentQuiz />
    </SemanticLayout>
  )
}

export default HubSpotAssessmentPageClient
