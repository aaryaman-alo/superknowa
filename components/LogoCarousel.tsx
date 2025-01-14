'use client'

import Image from "next/image"

export function LogoCarousel() {
  return (
    <div className="overflow-hidden">
      <div className="animate-slide-left flex gap-8 whitespace-nowrap">
        {/* Duplicate logos to create seamless loop */}
        {[...Array(8)].map((_, i) => (
          <Image
            key={i}
            src="/logo-white.svg"
            alt="Client Logo"
            width={120}
            height={32}
            className="h-8 w-auto opacity-50"
          />
        ))}
      </div>
    </div>
  )
} 