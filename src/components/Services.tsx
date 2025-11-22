"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Custom landing page that converts",
    icon: "landing",
    color: "from-blue-500 to-cyan-400",
    description: "From ebook launches to webinar signups, consultation to course sales, we build pages that convert for coaches, consultants and creators.",
    whatYouGet: [
      "Mobile-first design",
      "Conversion-optimized layout",
      "Fast loading (under 2s)",
      "Analytics & tracking setup",
      "GDPR compliant forms"
    ]
  },
  {
    title: "Professional WordPress websites",
    icon: "wordpress",
    color: "from-purple-500 to-pink-500",
    description: "Professional websites for businesses, agencies, and consultants who want a strong online presence they can manage themselves.",
    whatYouGet: [
      "Custom design",
      "SEO optimized structure",
      "Easy content management",
      "Security & backup setup",
      "30-day post-launch support"
    ]
  },
  {
    title: "Shopify e-commerce that sells",
    icon: "ecommerce",
    color: "from-green-500 to-emerald-400",
    description: "Complete e-commerce solutions for product businesses, dropshippers, and digital sellers ready to own their customer experience.",
    whatYouGet: [
      "Complete store setup",
      "Payment integration",
      "Inventory system",
      "Mobile shopping optimized",
      "Email automation setup"
    ]
  },
  {
    title: "Custom digital web app solutions",
    icon: "webapp",
    color: "from-orange-500 to-red-500",
    description: "Tailored digital solutions, from SaaS platforms to internal tools, for businesses that have outgrown off-the-shelf software.",
    whatYouGet: [
      "Scalable architecture",
      "Cloud deployment",
      "User authentication",
      "Real-time features",
      "Maintenance available"
    ]
  }
]

export default function Services() {
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
    <section ref={sectionRef} className="w-full pt-16 pb-8 sm:pt-24 sm:pb-24">
      <div className="max-w-[90rem] mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-white font-medium text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Four ways to win online
        </h2>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card p-8 flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl lg:text-2xl text-white font-semibold mb-6">
                {service.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mt-auto">
                <p className="text-sm text-white/40 uppercase tracking-wider mb-4 font-medium">
                  What you get:
                </p>
                <ul className="space-y-2.5">
                  {service.whatYouGet.map((item, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start leading-relaxed">
                      <span className="text-purple-400 mr-2.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className={`sm:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6 scrollbar-hide transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col min-w-[85vw] snap-center"
              >
                <h3 className="text-xl text-white font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <p className="text-sm text-white/40 uppercase tracking-wider mb-3 font-medium">
                    What you get:
                  </p>
                  <ul className="space-y-2">
                    {service.whatYouGet.map((item, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
