"use client"

import dynamic from "next/dynamic"

// Dynamically import the client component to avoid SSR issues
const ClientHomePage = dynamic(() => import("../../app/ClientHomePage"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600">Loading DataOps Group...</p>
      </div>
    </div>
  ),
})

export default function DynamicHomePage() {
  return <ClientHomePage />
}
