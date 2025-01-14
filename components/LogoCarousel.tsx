'use client'

import Image from "next/image"

const logos = [
  "/logos/decathlon.svg",
  "/logos/adyen.svg",
  "/logos/akzo.svg",
  "/logos/sabic.svg",
  "/logos/dsm.svg",
  "/logos/total.svg",
  "/logos/verifone.svg",
  "/logos/bny.svg",
  // Add more logos as needed
]

export function LogoCarousel() {
  return (
    <div className="overflow-hidden">
      <div className="animate-slide-left flex gap-8 whitespace-nowrap">
        {/* Duplicate logos to create seamless loop */}
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src={logos[i % logos.length]} // Cycle through logos
            alt={`Client Logo ${i + 1}`}
            width={120}
            height={32}
            className="h-8 w-auto opacity-70"
          />
        ))}
      </div>
    </div>
  )
} 