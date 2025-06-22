/**
 * Security utilities and CSRF protection
 */

import type { NextRequest } from "next/server"
import crypto from "crypto"

// CSRF Token Management
export class CSRFProtection {
  private static getSecret(): string {
    const secret = process.env.CSRF_SECRET

    if (!secret) {
      console.warn("CSRF_SECRET not set! Using fallback secret. This is NOT secure for production!")
      // Generate a temporary secret for development (not recommended for production)
      return crypto.randomBytes(32).toString("hex")
    }

    if (secret.length < 32) {
      throw new Error("CSRF_SECRET must be at least 32 characters long")
    }

    return secret
  }

  private static readonly TOKEN_LIFETIME = 3600000 // 1 hour

  static generateToken(sessionId: string): string {
    const timestamp = Date.now().toString()
    const data = `${sessionId}:${timestamp}`
    const signature = crypto.createHmac("sha256", this.getSecret()).update(data).digest("hex")

    return Buffer.from(`${data}:${signature}`).toString("base64")
  }

  static validateToken(token: string, sessionId: string): boolean {
    try {
      const decoded = Buffer.from(token, "base64").toString()
      const [receivedSessionId, timestamp, signature] = decoded.split(":")

      // Check session ID
      if (receivedSessionId !== sessionId) return false

      // Check timestamp (token expiry)
      const tokenAge = Date.now() - Number.parseInt(timestamp)
      if (tokenAge > this.TOKEN_LIFETIME) return false

      // Verify signature
      const data = `${receivedSessionId}:${timestamp}`
      const expectedSignature = crypto.createHmac("sha256", this.getSecret()).update(data).digest("hex")

      return signature === expectedSignature
    } catch {
      return false
    }
  }
}

// Input Sanitization
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocols
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim()
}

// Email validation with additional security checks
export function validateEmail(email: string): { valid: boolean; reason?: string } {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return { valid: false, reason: "Invalid email format" }
  }

  if (email.includes("..") || email.includes("--")) {
    return { valid: false, reason: "Suspicious email pattern" }
  }

  const domain = email.split("@")[1]
  if (domain.length > 253) {
    return { valid: false, reason: "Domain too long" }
  }

  return { valid: true }
}

// Rate limiting
export class RateLimiter {
  private static requests = new Map<string, number[]>()

  static isAllowed(identifier: string, maxRequests = 5, windowMs = 900000): boolean {
    const now = Date.now()
    const windowStart = now - windowMs

    const requests = this.requests.get(identifier) || []
    const recentRequests = requests.filter((time) => time > windowStart)

    if (recentRequests.length >= maxRequests) {
      return false
    }

    recentRequests.push(now)
    this.requests.set(identifier, recentRequests)

    return true
  }

  static cleanup(): void {
    const now = Date.now()
    const cutoff = now - 900000 // 15 minutes

    for (const [identifier, requests] of this.requests.entries()) {
      const recentRequests = requests.filter((time) => time > cutoff)
      if (recentRequests.length === 0) {
        this.requests.delete(identifier)
      } else {
        this.requests.set(identifier, recentRequests)
      }
    }
  }
}

// Content Security Policy
export const CSP_HEADER = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hsforms.net https://js.hscollectedforms.net;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  connect-src 'self' https://api.hsforms.com https://forms.hubspot.com;
  frame-src 'self' https://forms.hubspot.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s+/g, " ")
  .trim()

// Request validation middleware
export function validateRequest(request: NextRequest): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (request.method === "POST") {
    const contentType = request.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      errors.push("Invalid Content-Type")
    }
  }

  const userAgent = request.headers.get("user-agent")
  if (!userAgent || userAgent.length < 10) {
    errors.push("Invalid User-Agent")
  }

  const suspiciousHeaders = ["x-forwarded-for", "x-real-ip"]
  for (const header of suspiciousHeaders) {
    const value = request.headers.get(header)
    if (value && (value.includes("<") || value.includes(">"))) {
      errors.push(`Suspicious ${header} header`)
    }
  }

  return { valid: errors.length === 0, errors }
}
