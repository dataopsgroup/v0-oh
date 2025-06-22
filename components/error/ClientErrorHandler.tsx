"use client"

import { useEffect } from "react"
import { chrome } from "some-chrome-extension-library" // Placeholder for actual import or declaration

export function ClientErrorHandler() {
  useEffect(() => {
    // Handle runtime errors
    const handleError = (event: ErrorEvent) => {
      console.error("Runtime error caught:", event.error)
      // You can send this to your error tracking service
    }

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason)
      // You can send this to your error tracking service
    }

    // Handle Chrome extension errors (common in development)
    const handleChromeExtensionError = () => {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.lastError) {
        // Suppress Chrome extension errors in development
        return
      }
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    // Suppress Chrome extension port errors
    if (typeof window !== "undefined") {
      const originalError = console.error
      console.error = (...args) => {
        if (args[0]?.includes?.("message port closed") || args[0]?.includes?.("runtime.lastError")) {
          return // Suppress these specific errors
        }
        originalError.apply(console, args)
      }
    }

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return null
}
