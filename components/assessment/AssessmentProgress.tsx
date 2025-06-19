"use client"

import type React from "react"
import { Progress } from "@/components/ui/progress"

interface AssessmentProgressProps {
  currentSection: number
  totalSections: number
}

const AssessmentProgress: React.FC<AssessmentProgressProps> = ({ currentSection, totalSections }) => {
  const progressValue = (currentSection / totalSections) * 100

  return (
    <div className="mb-8 p-4 bg-white rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold text-dataops-blue-dark mb-2">
        Section {currentSection} of {totalSections}
      </h2>
      <Progress value={progressValue} className="w-full h-2 bg-dataops-gray/50 [&>*]:bg-dataops-accent-blue" />
    </div>
  )
}

export default AssessmentProgress
