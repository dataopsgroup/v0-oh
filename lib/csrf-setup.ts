/**
 * CSRF Secret Generation and Setup Guide
 *
 * The CSRF_SECRET should be:
 * - At least 32 characters long
 * - Cryptographically random
 * - Kept secret and never exposed in client-side code
 * - Different for each environment (development, staging, production)
 */

import crypto from "crypto"

// Generate a secure CSRF secret (run this once to generate your secret)
export function generateCSRFSecret(): string {
  return crypto.randomBytes(32).toString("hex")
}

// Example of what your CSRF_SECRET should look like:
// CSRF_SECRET=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456

console.log("Generated CSRF Secret:", generateCSRFSecret())
console.log("\nAdd this to your .env.local file:")
console.log(`CSRF_SECRET=${generateCSRFSecret()}`)
