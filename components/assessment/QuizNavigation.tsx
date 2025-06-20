"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface QuizNavigationProps {
  currentSection: number
  prevSection: () => void
  nextSection: () => void
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({ currentSection, prevSection, nextSection }) => {
  return (
    <div className="flex justify-between p-8 border-t border-dataops-gray/50 bg-white rounded-b-2xl">
      <Button
        onClick={prevSection}
        disabled={currentSection === 1}
        variant="outline"
        className="px-6 py-3 text-dataops-blue-dark border-dataops-gray/50 hover:bg-dataops-gray/10"
      >
        Previous
      </Button>
      <Button
        onClick={nextSection}
        className="px-6 py-3 bg-dataops-accent-blue text-white hover:bg-dataops-accent-blue/90"
      >
        {currentSection < 5 ? "Next Section" : "View Results"}
      </Button>
    </div>
  )
}

export default QuizNavigation
