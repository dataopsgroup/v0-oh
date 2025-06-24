"use client"

import type React from "react"
import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  onRetakeQuiz: () => void
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, onRetakeQuiz }) => {
  const navigate = useNavigate()
  const percentage = (score / totalQuestions) * 100

  const handleGoHome = () => {
    navigate("/")
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Quiz Results
      </Typography>
      <Typography variant="h6" gutterBottom>
        You scored {score} out of {totalQuestions}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Percentage: {percentage.toFixed(2)}%
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={onRetakeQuiz} sx={{ mr: 2 }}>
          Retake Quiz
        </Button>
        <Button variant="outlined" color="primary" onClick={handleGoHome}>
          Go Home
        </Button>
      </Box>
    </Box>
  )
}

export default QuizResults
