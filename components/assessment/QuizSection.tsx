"use client"

import type React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  id: string
  text: string
  options: { value: number; label: string }[]
}

interface QuizSectionProps {
  title: string
  questions: Question[]
  answers: Record<string, number>
  onAnswer: (questionId: string, value: number) => void
  unansweredQuestionIds: string[]
}

const QuizSection: React.FC<QuizSectionProps> = ({ title, questions, answers, onAnswer, unansweredQuestionIds }) => {
  return (
    <div className="p-8 font-sans">
      <h2 className="text-3xl font-bold text-dataops-blue-dark mb-6 headline">{title}</h2>
      <div className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm border border-dataops-gray">
            <p className="text-xl font-semibold text-dataops-blue-dark mb-4">{question.text}</p>
            <RadioGroup
              onValueChange={(value) => onAnswer(question.id, Number.parseInt(value))}
              value={answers[question.id]?.toString()}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {question.options.map((option) => (
                <div key={option.value} className="relative">
                  <RadioGroupItem
                    value={option.value.toString()}
                    id={`${question.id}-${option.value}`}
                    className="sr-only peer"
                  />
                  <Label
                    htmlFor={`${question.id}-${option.value}`}
                    className={`
                      flex flex-col items-center justify-center p-4 text-center
                      border rounded-lg cursor-pointer transition-all duration-200
                      text-dataops-blue-dark font-medium text-sm md:text-base
                      hover:border-dataops-accent-blue hover:bg-dataops-accent-blue/5
                      peer-data-[state=checked]:bg-dataops-blue-dark
                      peer-data-[state=checked]:text-white
                      peer-data-[state=checked]:border-dataops-blue-dark
                      peer-data-[state=checked]:shadow-md
                      h-full w-full whitespace-pre-line
                    `}
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {unansweredQuestionIds.includes(question.id) && (
              <p className="bg-red-500 text-white text-sm px-3 py-1 rounded-full mt-2 inline-block">
                Please select an answer before going to the next section.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizSection
