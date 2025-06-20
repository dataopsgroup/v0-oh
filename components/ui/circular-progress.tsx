"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface CircularProgressProps extends React.SVGProps<SVGSVGElement> {
  value: number
  max?: number
  radius?: number
  strokeWidth?: number
  progressColor?: string
  backgroundColor?: string
  textColor?: string
  showValue?: boolean
  className?: string
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max = 100,
  radius = 50,
  strokeWidth = 10,
  progressColor = "hsl(var(--primary))",
  backgroundColor = "hsl(var(--muted))",
  textColor = "hsl(var(--foreground))",
  showValue = true,
  className,
  ...props
}) => {
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / max) * circumference

  return (
    <svg
      className={cn("transform -rotate-90", className)}
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      {...props}
    >
      <circle
        stroke={backgroundColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={progressColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
      />
      {showValue && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={textColor}
          fontSize={radius * 0.4}
          fontWeight="bold"
          className="font-sans"
        >
          {Math.round(value)}
        </text>
      )}
    </svg>
  )
}

export default CircularProgress
