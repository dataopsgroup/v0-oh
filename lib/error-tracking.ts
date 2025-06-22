/**
 * Comprehensive Error Tracking and Monitoring
 */

interface ErrorContext {
  userId?: string
  sessionId: string
  userAgent: string
  url: string
  timestamp: number
  component?: string
  action?: string
  metadata?: Record<string, any>
}

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  interactionTime: number
  coreWebVitals: {
    lcp?: number // Largest Contentful Paint
    fid?: number // First Input Delay
    cls?: number // Cumulative Layout Shift
  }
}

class ErrorTracker {
  private sessionId: string
  private isProduction: boolean

  constructor() {
    this.sessionId = this.generateSessionId()
    this.isProduction = process.env.NODE_ENV === "production"
    this.initializeErrorTracking()
    this.initializePerformanceTracking()
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  private initializeErrorTracking() {
    if (typeof window === "undefined") return

    // Global error handler
    window.addEventListener("error", (event) => {
      this.captureError(event.error, {
        type: "javascript",
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      })
    })

    // Unhandled promise rejection handler
    window.addEventListener("unhandledrejection", (event) => {
      this.captureError(event.reason, {
        type: "promise",
        promise: event.promise,
      })
    })
  }

  private initializePerformanceTracking() {
    if (typeof window === "undefined") return

    // Core Web Vitals tracking
    this.trackCoreWebVitals()

    // Navigation timing
    window.addEventListener("load", () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        this.trackPerformance({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          renderTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          interactionTime: navigation.domInteractive - navigation.navigationStart,
          coreWebVitals: {},
        })
      }, 0)
    })
  }

  private trackCoreWebVitals() {
    // LCP - Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        this.trackMetric("lcp", lastEntry.startTime)
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          this.trackMetric("fid", entry.processingStart - entry.startTime)
        })
      })
      fidObserver.observe({ entryTypes: ["first-input"] })

      // CLS - Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        this.trackMetric("cls", clsValue)
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })
    }
  }

  captureError(error: Error, context: Partial<ErrorContext> = {}) {
    const errorContext: ErrorContext = {
      sessionId: this.sessionId,
      userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "server",
      url: typeof window !== "undefined" ? window.location.href : "server",
      timestamp: Date.now(),
      ...context,
    }

    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context: errorContext,
    }

    // Log to console in development
    if (!this.isProduction) {
      console.error("Error captured:", errorData)
    }

    // Send to monitoring service
    this.sendToMonitoring("error", errorData)
  }

  trackPerformance(metrics: PerformanceMetrics) {
    const performanceData = {
      sessionId: this.sessionId,
      timestamp: Date.now(),
      url: typeof window !== "undefined" ? window.location.href : "server",
      metrics,
    }

    if (!this.isProduction) {
      console.log("Performance tracked:", performanceData)
    }

    this.sendToMonitoring("performance", performanceData)
  }

  trackMetric(name: string, value: number) {
    const metricData = {
      sessionId: this.sessionId,
      timestamp: Date.now(),
      name,
      value,
      url: typeof window !== "undefined" ? window.location.href : "server",
    }

    this.sendToMonitoring("metric", metricData)
  }

  trackFormSubmission(formName: string, success: boolean, errorMessage?: string) {
    const formData = {
      sessionId: this.sessionId,
      timestamp: Date.now(),
      formName,
      success,
      errorMessage,
      url: typeof window !== "undefined" ? window.location.href : "server",
    }

    this.sendToMonitoring("form", formData)
  }

  private async sendToMonitoring(type: string, data: any) {
    try {
      // Send to internal API endpoint
      await fetch("/api/monitoring", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, data }),
      })
    } catch (error) {
      // Fallback: store in localStorage for later retry
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("pending_monitoring") || "[]"
        const pending = JSON.parse(stored)
        pending.push({ type, data, timestamp: Date.now() })
        localStorage.setItem("pending_monitoring", JSON.stringify(pending.slice(-50))) // Keep last 50
      }
    }
  }
}

export const errorTracker = new ErrorTracker()
