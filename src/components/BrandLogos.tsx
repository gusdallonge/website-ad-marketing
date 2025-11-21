"use client"

import Image from "next/image"

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
  return (
    <section className="w-full py-8 sm:py-8 py-6">
      <h2 className="text-center text-white/40 text-xs font-medium tracking-widest uppercase mb-4 sm:mb-6">
        Powered by Industry Leaders
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-1-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center"
              style={{ width: "80px", height: "35px" }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={35}
                className="max-w-full max-h-full object-contain opacity-50 sm:w-[120px] sm:h-[50px]"
              />
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-2-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center"
              style={{ width: "80px", height: "35px" }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={35}
                className="max-w-full max-h-full object-contain opacity-50 sm:w-[120px] sm:h-[50px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
