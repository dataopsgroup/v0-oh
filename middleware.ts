import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isValidRoute } from "@/lib/route-optimizer"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/fonts/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Validate routes and redirect if necessary
  if (!isValidRoute(pathname)) {
    // Check if it's a blog post route
    if (pathname.startsWith("/insights/") && pathname !== "/insights") {
      return NextResponse.next() // Let the dynamic route handle it
    }

    // Redirect invalid routes to 404
    return NextResponse.redirect(new URL("/404", request.url))
  }

  // Add security headers
  const response = NextResponse.next()

  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
