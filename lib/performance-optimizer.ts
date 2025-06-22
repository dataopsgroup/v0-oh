/**
 * Performance Optimization Utilities
 */

// Image optimization configuration
export const IMAGE_CONFIG = {
  domains: ["blob.v0.dev", "dataopsgroup.com"],
  formats: ["image/webp", "image/avif"],
  sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  quality: 85,
  minimumCacheTTL: 31536000, // 1 year
} as const

// Bundle optimization
export const BUNDLE_CONFIG = {
  // Critical CSS paths
  criticalCSS: ["/globals.css", "/components/ui/button.css"],

  // Preload resources
  preloadResources: ["/images/dataops-logo-horizontal.jpg", "/fonts/inter-subset/inter-latin-400-normal.woff2"],

  // Code splitting boundaries
  splitChunks: {
    blog: ["blog", "insights"],
    services: ["services"],
    assessment: ["assessment", "quiz"],
  },
} as const

// Performance monitoring
export function measurePerformance(name: string, fn: () => void) {
  if (typeof window !== "undefined" && "performance" in window) {
    const start = performance.now()
    fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
  } else {
    fn()
  }
}

// Lazy loading utilities
export function createIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null
  }

  return new IntersectionObserver(callback, {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  })
}
