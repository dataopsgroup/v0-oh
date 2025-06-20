"use client"

import type React from "react"
import { Button } from "../ui/button"

interface AssessmentIntroProps {
  onStart: () => void
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Assessment!</h1>
      <p className="text-gray-700 mb-8 text-center">
        This assessment will help you evaluate your skills and knowledge.
      </p>
      <Button
        onClick={onStart}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
      >
        Start Your Assessment
      </Button>
    </div>
  )
}

export default AssessmentIntro
