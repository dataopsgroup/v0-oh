"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import CircularProgress from "@/components/ui/circular-progress" // Ensure CircularProgress is imported
import { CheckIcon, ArrowRightIcon } from "lucide-react"

interface QuizResultsProps {
  overallScore: number;
  scores: Record<string, number>;
  sectionTitles: string[];
  priorities: string[];
  rescuePlan: string[];
  // _onEmailResults removed entirely
}
const QuizResults = ({
  overallScore,
  scores,
  sectionTitles,
  priorities,
  rescuePlan,
}) => {
  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Developing"
    return "Needs Improvement"
  }

  // Calculate max overall score (5 sections * 5 questions/section * 5 points/question)
  const maxOverallScore = 5 * 5 * 5
  const overallPercentage = (overallScore / maxOverallScore) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 px-4 font-lato">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-dataops-blue-dark mb-4">
          Your Assessment Results
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">{`  Here is how your HubSpot implementation measures up`}</p>

        {/* Overall Score Section */}
        <Card className="bg-dataops-saffron-light rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 border border-dataops-saffron-light">
          <div className="relative w-40 h-40 flex items-center justify-center flex-shrink-0">
            <CircularProgress
              value={overallPercentage}
              radius={70}
              strokeWidth={12}
              progressColor="hsl(var(--dataops-blue-dark))" // Black progress
              backgroundColor="hsl(var(--dataops-gray-light))" // Light gray background for track
              textColor="hsl(var(--dataops-blue-dark))" // Dark blue text for score
              showValue={false} // Value is rendered separately
              className="absolute"
            />
            <div className="flex flex-col items-center justify-center z-10">
              <div className="text-dataops-blue-dark text-6xl font-extrabold tabular-nums">{overallScore}</div>
              <div className="text-gray-700 text-lg tabular-nums">/{maxOverallScore}</div>
            </div>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-3xl font-bold text-dataops-saffron mb-2">{getScoreLabel(overallPercentage)}</h2>
            <p className="text-lg text-gray-700 mb-6">Good foundation with room for improvement</p>
            <div className="flex items-baseline gap-8">
              <div>
                <p className="text-3xl font-bold text-dataops-blue-dark tabular-nums">
                  {Math.round(overallPercentage)}%
                </p>
                <p className="text-base text-gray-700">Overall Score</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-dataops-accent-blue tabular-nums">{sectionTitles.length}</p>
                <p className="text-base text-gray-700">Areas Assessed</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Ready for Action? Section */}
        <div className="bg-dataops-accent-blue/10 rounded-xl p-6 text-center mb-12">
          <p className="text-xl font-semibold text-dataops-blue-dark">Ready for Action?</p>
          <p className="text-lg text-gray-700">
            Your personalized improvement plan is ready below. Let us get started!
          </p>
        </div>

        {/* Section Performance */}
        <h2 className="text-3xl font-bold text-center text-dataops-blue-dark mb-8">Section Performance</h2>
        <p className="text-lg text-center text-gray-700 mb-12">{`  Here is how your HubSpot implementation measures up`}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sectionTitles.map((title, index) => {
            const sectionScore = scores[`section${index + 1}`] || 0
            const maxSectionScore = 25
            const percentage = (sectionScore / maxSectionScore) * 100
            const scoreLabel = getScoreLabel(percentage)

            return (
              <Card
                key={index}
                className="bg-dataops-saffron-light rounded-xl shadow-sm p-6 border border-dataops-saffron-light"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-dataops-blue-dark">{title}</h3>
                  <div className="w-4 h-4 rounded-full bg-gray-300" aria-hidden="true" />
                </div>
                <Progress value={percentage} className="h-2 rounded-full bg-gray-200 [&>*]:bg-dataops-saffron" />
                <div className="flex justify-between items-baseline mt-4">
                  <p className="text-base font-semibold text-dataops-saffron">{scoreLabel}</p>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-dataops-blue-dark tabular-nums">
                      {sectionScore}/{maxSectionScore}
                    </p>
                    <p className="text-sm text-gray-600 tabular-nums">{Math.round(percentage)}%</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Priority Improvement Areas */}
        <h2 className="text-3xl font-bold text-dataops-blue-dark mb-6">Your Priority Improvement Areas</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 space-y-6">
          {priorities.map((priority, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dataops-accent-blue text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700 flex-grow">{priority}</p>
            </div>
          ))}
        </div>

        {/* 90-Day Implementation Rescue Plan */}
        <h2 className="text-3xl font-bold text-dataops-blue-dark mb-6">90-Day Implementation Rescue Plan</h2>
        <p className="text-lg text-gray-700 mb-8">
          Based on your assessment results, we recommend focusing on the following actions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-dataops-blue-dark mb-4">Days 1-30: Foundation</h3>
            <ul className="space-y-2 text-gray-700">
              {rescuePlan.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-dataops-accent-blue flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-dataops-blue-dark mb-4">Days 31-60: Transformation</h3>
            <ul className="space-y-2 text-gray-700">
              {rescuePlan.slice(3, 6).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-dataops-accent-blue flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-dataops-blue-dark mb-4">Days 61-90: Optimization</h3>
            <ul className="space-y-2 text-gray-700">
              {rescuePlan.slice(6, 9).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-dataops-accent-blue flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="bg-blue-50 rounded-2xl shadow-xl p-8 text-center mb-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-dataops-blue-dark mb-4">
            Get Your Personalized HubSpot Recovery Strategy
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">{`  Here is how your HubSpot implementation measures up`}</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium
                       bg-dataops-blue-dark text-white hover:bg-dataops-blue-dark/90
                       h-12 px-8 transition-colors focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Book Your Recovery Consultation
          </a>
          <div className="border-t border-gray-300 my-8 w-full max-w-md mx-auto" />
          <p className="text-base text-gray-700 mb-4">See how we have transformed similar implementations:</p>
          <a href="#" className="inline-flex items-center text-dataops-accent-blue font-semibold text-base group">
            View Transformation Stories
            <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default QuizResults
