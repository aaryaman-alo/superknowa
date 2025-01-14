'use client'

import Image from "next/image"
import { useState, useEffect } from "react"

const images = [
  "/nasa1.webp",
  "/nasa2.webp",
  "/nasa3.webp",
  "/nasa4.webp",
]

export function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative md:h-screen top-0">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`NASA Image ${index + 1}`}
          fill
          sizes="50vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  )
} 