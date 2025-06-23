"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { createIntersectionObserver } from "@/lib/performance-optimizer"

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = "empty",
  blurDataURL,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = createIntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer?.disconnect()
          }
        })
      },
      { rootMargin: "50px" },
    )

    if (observer && imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer?.disconnect()
  }, [priority])

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  )
}
