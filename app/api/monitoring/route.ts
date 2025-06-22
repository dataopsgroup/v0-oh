import { type NextRequest, NextResponse } from "next/server"
import { RateLimiter } from "@/lib/security"

interface MonitoringData {
  type: "error" | "performance" | "metric" | "form"
  data: any
  timestamp?: number
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting for monitoring endpoint
    const clientIP = request.ip ?? "anonymous"
    if (!RateLimiter.isAllowed(clientIP, 100, 60000)) {
      // 100 requests per minute
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
    }

    const body: MonitoringData = await request.json()

    // Validate monitoring data
    if (!body.type || !body.data) {
      return NextResponse.json({ error: "Invalid monitoring data" }, { status: 400 })
    }

    // Add server timestamp
    body.timestamp = Date.now()

    // In production, you would send this to your monitoring service
    // For now, we'll log it and store in a simple way
    console.log(`[MONITORING] ${body.type.toUpperCase()}:`, JSON.stringify(body.data, null, 2))

    // Store critical errors for review
    if (body.type === "error" && body.data.context?.component) {
      // In production, store in database or send to external service
      await storeError(body.data)
    }

    // Track performance metrics
    if (body.type === "performance") {
      await trackPerformanceMetrics(body.data)
    }

    // Track form submissions
    if (body.type === "form") {
      await trackFormMetrics(body.data)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Monitoring endpoint error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function storeError(errorData: any) {
  // In production, implement proper error storage
  // For now, just enhanced logging
  console.error("[ERROR STORAGE]", {
    timestamp: new Date().toISOString(),
    message: errorData.message,
    component: errorData.context?.component,
    url: errorData.context?.url,
    userAgent: errorData.context?.userAgent,
    stack: errorData.stack?.split("\n").slice(0, 5), // First 5 lines of stack
  })
}

async function trackPerformanceMetrics(performanceData: any) {
  // Log performance metrics
  console.log("[PERFORMANCE]", {
    timestamp: new Date().toISOString(),
    url: performanceData.url,
    loadTime: performanceData.metrics?.loadTime,
    renderTime: performanceData.metrics?.renderTime,
    coreWebVitals: performanceData.metrics?.coreWebVitals,
  })
}

async function trackFormMetrics(formData: any) {
  // Log form submission metrics
  console.log("[FORM METRICS]", {
    timestamp: new Date().toISOString(),
    formName: formData.formName,
    success: formData.success,
    errorMessage: formData.errorMessage,
    url: formData.url,
  })
}
