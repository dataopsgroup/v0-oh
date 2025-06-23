"use client"

import { useState, useEffect } from "react"

export default function GoogleFormEmbed() {
  const [method, setMethod] = useState<"mask" | "clip" | "overlay">("mask")
  const [isLoaded, setIsLoaded] = useState(false)

  // Method 1: Container Masking (Most Reliable)
  const MaskMethod = () => (
    <div className="google-form-container">
      <div className="form-mask-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfD0uVl3lx1keZsrbZLmAmz880HiZpuw0ztHTCJOruQ6O1RbA/viewform?embedded=true&chrome=false&header=false"
          width="100%"
          height="1020"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="DataOps Group Contact Form"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            border: "none",
            position: "absolute",
            top: "-120px",
            left: "0",
            width: "100%",
            height: "calc(100% + 120px)",
          }}
        >
          Loading contact form...
        </iframe>
      </div>
    </div>
  )

  // Method 2: CSS Clip Path (Good Browser Support)
  const ClipMethod = () => (
    <div className="google-form-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfD0uVl3lx1keZsrbZLmAmz880HiZpuw0ztHTCJOruQ6O1RbA/viewform?embedded=true&chrome=false&header=false"
        width="100%"
        height="1020"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="DataOps Group Contact Form"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{
          border: "none",
          marginTop: "-120px",
          paddingTop: "120px",
          clipPath: "inset(120px 0 0 0)",
        }}
      >
        Loading contact form...
      </iframe>
    </div>
  )

  // Method 3: Overlay Technique (Fallback)
  const OverlayMethod = () => (
    <div className="google-form-container" style={{ position: "relative" }}>
      <div
        className="form-header-overlay"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "120px",
          background: "white",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfD0uVl3lx1keZsrbZLmAmz880HiZpuw0ztHTCJOruQ6O1RbA/viewform?embedded=true&chrome=false&header=false"
        width="100%"
        height="1020"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="DataOps Group Contact Form"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{ border: "none" }}
      >
        Loading contact form...
      </iframe>
    </div>
  )

  // Auto-detect best method based on browser capabilities
  useEffect(() => {
    const supportsClipPath = CSS.supports("clip-path", "inset(10px)")
    const supportsPositioning = CSS.supports("position", "absolute")

    if (supportsClipPath) {
      setMethod("clip")
    } else if (supportsPositioning) {
      setMethod("mask")
    } else {
      setMethod("overlay")
    }
  }, [])

  const renderForm = () => {
    switch (method) {
      case "mask":
        return <MaskMethod />
      case "clip":
        return <ClipMethod />
      case "overlay":
        return <OverlayMethod />
      default:
        return <MaskMethod />
    }
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="google-form-loading bg-white rounded-lg shadow-lg p-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      )}
      <div className={isLoaded ? "opacity-100" : "opacity-0"}>{renderForm()}</div>
    </div>
  )
}
