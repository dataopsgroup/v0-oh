"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TestButtons() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Button Color Tests</h1>

        {/* Test 1: Current approach with !important */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Test 1: Current (!important classes)</h2>
          <Button className="body-copy text-white rounded-none !bg-green-500 hover:!bg-green-600">
            <Link href="/contact">Get Started - Test 1</Link>
          </Button>
        </div>

        {/* Test 2: Inline styles */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Test 2: Inline styles</h2>
          <Button
            className="body-copy text-white rounded-none"
            style={{
              backgroundColor: "#22c55e !important",
              borderColor: "#22c55e !important",
            }}
          >
            <Link href="/contact">Get Started - Test 2</Link>
          </Button>
        </div>

        {/* Test 3: Custom CSS class */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Test 3: Custom CSS class</h2>
          <Button className="body-copy text-white rounded-none custom-green-button">
            <Link href="/contact">Get Started - Test 3</Link>
          </Button>
        </div>

        {/* Test 4: Different variant */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibent mb-4">Test 4: Secondary variant with override</h2>
          <Button
            variant="secondary"
            className="body-copy text-white rounded-none"
            style={{ backgroundColor: "#22c55e", color: "white" }}
          >
            <Link href="/contact">Get Started - Test 4</Link>
          </Button>
        </div>

        {/* Test 5: Ghost variant with override */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Test 5: Ghost variant with override</h2>
          <Button
            variant="ghost"
            className="body-copy text-white rounded-none"
            style={{ backgroundColor: "#22c55e", color: "white" }}
          >
            <Link href="/contact">Get Started - Test 5</Link>
          </Button>
        </div>

        {/* Test 6: No Button component - direct button element */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Test 6: Direct button element</h2>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 body-copy text-white"
            style={{ backgroundColor: "#22c55e" }}
          >
            <Link href="/contact">Get Started - Test 6</Link>
          </button>
        </div>

        {/* Test 7: CSS custom properties override */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Test 7: CSS custom properties</h2>
          <Button
            className="body-copy text-white rounded-none"
            style={
              {
                "--tw-bg-opacity": "1",
                backgroundColor: "rgb(34 197 94 / var(--tw-bg-opacity))",
              } as React.CSSProperties
            }
          >
            <Link href="/contact">Get Started - Test 7</Link>
          </Button>
        </div>

        {/* Current working button for comparison */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Navigation Button (for comparison)</h2>
          <Button
            className="body-copy text-white hover:bg-blue-400 rounded-none"
            style={{ backgroundColor: "#8CC7E3" }}
          >
            <Link href="/contact">Current Button</Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        .custom-green-button {
          background-color: #22c55e !important;
          border-color: #22c55e !important;
        }
        .custom-green-button:hover {
          background-color: #16a34a !important;
        }
      `}</style>
    </div>
  )
}
