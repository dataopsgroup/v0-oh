"use client"

import { useState, useCallback, useMemo } from "react"
import AssessmentIntro from "./AssessmentIntro"
import QuizResults from "./QuizResults"
import QuizSection from "./QuizSection"
import QuizNavigation from "./QuizNavigation"
import AssessmentProgress from "./AssessmentProgress"
import { useAssessmentResults } from "@/hooks/useAssessmentResults"
import { quizSections } from "@/data/assessment/quizData"

const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState("intro")
  const [currentSection, setCurrentSection] = useState(1)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [scores, setScores] = useState<Record<string, number>>({})
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<string[]>([]) // New state for validation

  const { overallScore, priorities, rescuePlan } = useAssessmentResults(scores)

  const startQuiz = useCallback(() => {
    setCurrentStep("quiz")
    setCurrentSection(1)
    setUnansweredQuestionIds([]) // Clear any previous validation errors
  }, [])

  const handleAnswer = useCallback((questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
    // Remove the question from unanswered list if it's now answered
    setUnansweredQuestionIds((prev) => prev.filter((id) => id !== questionId))
  }, [])

  // Memoize section score calculation
  const calculateSectionScore = useCallback(
    (sectionId: number) => {
      const section = quizSections.find((s) => s.id === sectionId)
      if (!section) return 0

      let totalScore = 0
      let questionCount = 0

      for (const question of section.questions) {
        const answer = answers[question.id]
        if (answer !== undefined) {
          totalScore += answer
          questionCount++
        }
      }

      return questionCount > 0 ? totalScore : 0
    },
    [answers],
  )

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }, [])

  const nextSection = useCallback(() => {
    const currentQuizSection = quizSections.find((s) => s.id === currentSection)

    if (!currentQuizSection) {
      return // Should not happen
    }

    // Validate if all questions in the current section are answered
    const missingAnswers = currentQuizSection.questions.filter((question) => answers[question.id] === undefined)

    if (missingAnswers.length > 0) {
      setUnansweredQuestionIds(missingAnswers.map((q) => q.id))
      scrollToTop() // Scroll to top to show errors
      return // Prevent navigation
    }

    // If all questions are answered, clear errors and proceed
    setUnansweredQuestionIds([])

    if (currentSection < quizSections.length) {
      setCurrentSection((prev) => prev + 1)
      scrollToTop()
    } else {
      // Calculate final scores for all sections efficiently
      const finalScores: Record<string, number> = {}

      for (const section of quizSections) {
        const sectionKey = `section${section.id}`
        finalScores[sectionKey] = calculateSectionScore(section.id)
      }

      setScores(finalScores)
      setCurrentStep("results")
      scrollToTop()
    }
  }, [currentSection, answers, calculateSectionScore, scrollToTop])

  const prevSection = useCallback(() => {
    if (currentSection > 1) {
      setCurrentSection((prev) => prev - 1)
      setUnansweredQuestionIds([]) // Clear errors when going back
      scrollToTop()
    }
  }, [currentSection, scrollToTop])

  const handleEmailResults = useCallback(() => {
    console.log("Email results requested")
  }, [])

  // Memoize section titles to prevent recreation
  const sectionTitles = useMemo(() => quizSections.map((section) => section.title), [])

  if (currentStep === "intro") {
    return <AssessmentIntro startQuiz={startQuiz} />
  }

  if (currentStep === "quiz") {
    const currentQuizSection = quizSections.find((s) => s.id === currentSection)

    if (!currentQuizSection) {
      return <div>Section not found</div>
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto py-8">
          <AssessmentProgress currentSection={currentSection} totalSections={quizSections.length} />

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <QuizSection
              title={currentQuizSection.title}
              questions={currentQuizSection.questions}
              answers={answers}
              onAnswer={handleAnswer}
              unansweredQuestionIds={unansweredQuestionIds} // Pass validation state
            />

            <QuizNavigation currentSection={currentSection} prevSection={prevSection} nextSection={nextSection} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <QuizResults
      overallScore={overallScore}
      scores={scores}
      sectionTitles={sectionTitles}
      priorities={priorities}
      rescuePlan={rescuePlan}
      onEmailResults={handleEmailResults}
    />
  )
}

export default AssessmentQuiz
