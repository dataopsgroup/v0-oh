"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: string
}

interface AssessmentQuizProps {
  questions: Question[]
  onComplete: (score: number) => void
}

const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    setSelectedAnswer(null)
    setIsSubmitted(false)
  }, [currentQuestionIndex])

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setIsSubmitted(true)

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      onComplete(score)
    }
  }

  return (
    <Box>
      <Typography variant="h6">
        Question {currentQuestionIndex + 1}/{questions.length}
      </Typography>
      <Typography variant="subtitle1">{currentQuestion.text}</Typography>

      <FormControl component="fieldset">
        <RadioGroup name={`question-${currentQuestion.id}`} value={selectedAnswer} onChange={handleAnswerChange}>
          {currentQuestion.options.map((option) => (
            <FormControlLabel key={option} value={option} control={<Radio />} label={option} disabled={isSubmitted} />
          ))}
        </RadioGroup>
      </FormControl>

      <Box mt={2}>
        {!isSubmitted ? (
          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={selectedAnswer === null}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next Question"}
          </Button>
        )}
      </Box>

      {isSubmitted && (
        <Typography variant="body2" mt={2}>
          {selectedAnswer === currentQuestion.correctAnswer
            ? "Correct!"
            : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}`}
        </Typography>
      )}
    </Box>
  )
}

export default AssessmentQuiz
