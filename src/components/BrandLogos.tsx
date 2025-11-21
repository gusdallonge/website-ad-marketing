"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const logos = [
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "Supabase", src: "/logos/supabase.svg" },
  { name: "WordPress", src: "/logos/wordpress.svg" },
  { name: "Mercury", src: "/logos/mercury.svg" },
  { name: "Spaceship", src: "/logos/spaceship.svg" },
]

export default function BrandLogos() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="w-full py-4 sm:py-12">
      <div className={`overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-1-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center w-[80px] h-[35px] sm:w-[120px] sm:h-[50px]"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={50}
                className="max-w-full max-h-full object-contain opacity-50"
              />
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-2-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center w-[80px] h-[35px] sm:w-[120px] sm:h-[50px]"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={50}
                className="max-w-full max-h-full object-contain opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
