/**
 * Route Optimization Utilities
 * Centralizes route management and optimization
 */

// Centralized route definitions
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  APPROACH: "/approach",
  SERVICES: {
    BASE: "/services",
    ANALYTICS_BI: "/services/analytics-bi",
    DATAOPS_IMPLEMENTATION: "/services/dataops-implementation",
    TEAM_TRAINING: "/services/team-training",
    MARKETING_OPERATIONS: "/services/marketing-operations-revops",
    PE_VALUE_CREATION: "/services/pe-value-creation",
  },
  INSIGHTS: {
    BASE: "/insights",
    HUBSPOT_PE: "/insights/hubspot-for-private-equity",
  },
  GUIDES: {
    HUBSPOT_EXPERT: "/guides/hubspot-expert",
  },
  CONTACT: "/contact",
  ASSESSMENT: "/data-operations-assessment",
  PRIVACY: "/privacy",
  TERMS: "/terms",
} as const

// Route validation utilities
export function isValidRoute(path: string): boolean {
  const allRoutes = flattenRoutes(ROUTES)
  return allRoutes.includes(path) || isDynamicRoute(path)
}

export function isDynamicRoute(path: string): boolean {
  return path.startsWith("/insights/") && path !== "/insights"
}

function flattenRoutes(routes: any): string[] {
  const result: string[] = []

  function traverse(obj: any) {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        result.push(obj[key])
      } else if (typeof obj[key] === "object") {
        traverse(obj[key])
      }
    }
  }

  traverse(routes)
  return result
}

// SEO-optimized route metadata
export const ROUTE_METADATA = {
  [ROUTES.HOME]: {
    title: "DataOps Group - Data Operations Excellence",
    description: "Transform your data operations with expert consulting and implementation services.",
  },
  [ROUTES.ABOUT]: {
    title: "About DataOps Group - Expert Data Operations Team",
    description: "Learn about our experienced team of data operations specialists.",
  },
  // Add more as needed
} as const
