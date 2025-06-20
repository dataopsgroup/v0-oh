"use client"

import { useMemo } from "react"

interface Scores {
  [key: string]: number
}

export function useAssessmentResults(scores: Scores) {
  const overallScore = useMemo(() => {
    const totalSections = Object.keys(scores).length
    if (totalSections === 0) return 0
    const sumOfScores = Object.values(scores).reduce((sum, score) => sum + score, 0)
    return Math.round(sumOfScores / totalSections) // Average score per section
  }, [scores])

  const scoreLabel = useMemo(() => {
    if (overallScore >= 80) return "Excellent"
    if (overallScore >= 60) return "Good"
    if (overallScore >= 40) return "Developing"
    return "Needs Improvement"
  }, [overallScore])

  const priorities = useMemo(() => {
    const sectionScores = Object.entries(scores).map(([key, value]) => ({
      section: key,
      score: value,
    }))

    // Sort sections by score in ascending order to identify lowest scoring areas
    sectionScores.sort((a, b) => a.score - b.score)

    const topPriorities: string[] = []
    if (sectionScores.length > 0) {
      // Example: Identify the lowest scoring section as a top priority
      const lowestScoreSection = sectionScores[0]
      topPriorities.push(
        `Focus on improving ${lowestScoreSection.section.replace("section", "Section ")} (Score: ${lowestScoreSection.score})`,
      )
    }

    // Add more generic priorities based on overall score
    if (overallScore < 50) {
      topPriorities.push("Fundamental data governance and quality improvements.")
    } else if (overallScore < 70) {
      topPriorities.push("Optimizing existing data workflows and automation.")
    } else {
      topPriorities.push("Exploring advanced analytics and predictive modeling.")
    }

    return topPriorities
  }, [scores, overallScore])

  const rescuePlan = useMemo(() => {
    // Define a comprehensive set of rescue plan items
    const allRescuePlanItems = [
      "Conduct a detailed data audit to identify critical issues.",
      "Establish basic data quality checks and validation processes.",
      "Implement foundational data documentation and metadata management.",
      "Streamline data integration processes and reduce manual efforts.",
      "Enhance data accessibility for relevant teams.",
      "Develop a roadmap for automation of routine data tasks.",
      "Optimize data pipelines for performance and scalability.",
      "Explore advanced analytics tools and techniques.",
      "Foster a data-driven culture with regular training and workshops.",
      "Innovate with AI/ML for predictive insights and automation.",
      "Continuously monitor and refine data operations for peak efficiency.",
      "Expand data governance to include emerging data sources and compliance.",
    ]

    // Select 9 items based on overall score, ensuring variety
    let selectedPlan: string[] = []
    if (overallScore < 40) {
      selectedPlan = allRescuePlanItems.slice(0, 9) // Focus on foundational and some transformation
    } else if (overallScore < 60) {
      selectedPlan = allRescuePlanItems.slice(3, 12) // Mix of transformation and optimization
    } else if (overallScore < 80) {
      selectedPlan = allRescuePlanItems.slice(6, 12).concat(allRescuePlanItems.slice(0, 3)) // More optimization, some foundational
    } else {
      selectedPlan = allRescuePlanItems.slice(9, 12).concat(allRescuePlanItems.slice(0, 6)) // Heavily optimized, some foundational
    }

    // Ensure exactly 9 items are returned, padding if necessary (though slices above should ensure this)
    return selectedPlan.slice(0, 9)
  }, [overallScore])

  return {
    overallScore,
    scoreLabel,
    priorities,
    rescuePlan,
  }
}
