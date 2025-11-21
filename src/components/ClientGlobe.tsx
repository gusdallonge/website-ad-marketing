"use client"

import { useEffect, useRef, useState } from "react"

// Centre de connexion
const center = { x: 50, y: 50 }
const radius = 35

// Pays répartis en cercle autour du centre
const locationNames = [
  "New York",
  "San Francisco",
  "New Orleans",
  "Toronto",
  "Zurich",
  "Luxembourg",
  "Brussels",
  "Paris",
  "Bali",
  "Belgrade",
  "Zagreb",
  "Bucharest",
  "Dubai"
]

const locations = locationNames.map((name, i) => {
  const angle = (i * 360 / locationNames.length) * (Math.PI / 180)
  // Round to 2 decimal places to ensure server/client hydration match
  return {
    x: Math.round((center.x + radius * Math.cos(angle)) * 100) / 100,
    y: Math.round((center.y + radius * Math.sin(angle)) * 100) / 100,
    name
  }
})

export default function ClientGlobe() {
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
    <section ref={sectionRef} className="w-full py-12 sm:py-24">
      <div className="w-full px-6">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-white font-medium text-center mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Trusted worldwide
        </h2>
        <p className={`text-white/60 text-center text-sm sm:text-base mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          Delivering digital excellence across 11 countries
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT: Animation avec lignes */}
            <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="glass-card p-6 sm:p-8">
                <div className="w-full h-[400px] sm:h-[500px] relative">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <radialGradient id="dotGradient">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                      </radialGradient>
                    </defs>

                    {/* Cercle de fond subtil */}
                    <circle
                      cx={center.x}
                      cy={center.y}
                      r={radius}
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.1)"
                      strokeWidth="0.2"
                      className={isVisible ? "animate-dot-appear" : "opacity-0"}
                    />

                    {/* Lignes courbes animées */}
                    {locations.map((location, i) => {
                      // Courbe plus élégante qui passe par l'extérieur du cercle
                      const dx = location.x - center.x
                      const dy = location.y - center.y
                      const dist = Math.sqrt(dx * dx + dy * dy)
                      const controlDist = dist * 0.6

                      const angle = Math.atan2(dy, dx)
                      const perpAngle = angle + Math.PI / 2

                      // Round to 2 decimal places to prevent hydration mismatch
                      const midX = Math.round(((location.x + center.x) / 2 + Math.cos(perpAngle) * 8) * 100) / 100
                      const midY = Math.round(((location.y + center.y) / 2 + Math.sin(perpAngle) * 8) * 100) / 100

                      return (
                        <g key={i}>
                          {/* Ligne glow (arrière-plan) */}
                          <path
                            d={`M ${location.x} ${location.y} Q ${midX} ${midY}, ${center.x} ${center.y}`}
                            stroke="url(#lineGradient)"
                            strokeWidth="1.2"
                            fill="none"
                            opacity="0.3"
                            filter="url(#glow)"
                            className={isVisible ? "animate-path-draw" : "opacity-0"}
                            style={{
                              animationDelay: `${i * 0.08}s`,
                              strokeDasharray: "100",
                              strokeDashoffset: isVisible ? "0" : "100"
                            }}
                          />

                          {/* Ligne principale */}
                          <path
                            d={`M ${location.x} ${location.y} Q ${midX} ${midY}, ${center.x} ${center.y}`}
                            stroke="url(#lineGradient)"
                            strokeWidth="0.6"
                            fill="none"
                            opacity="0.9"
                            className={isVisible ? "animate-path-draw" : "opacity-0"}
                            strokeLinecap="round"
                            style={{
                              animationDelay: `${i * 0.08}s`,
                              strokeDasharray: "100",
                              strokeDashoffset: isVisible ? "0" : "100"
                            }}
                          />

                          {/* Point glow */}
                          <circle
                            cx={location.x}
                            cy={location.y}
                            r="2"
                            fill="#10b981"
                            opacity="0.3"
                            filter="url(#glow)"
                            className={isVisible ? "animate-dot-appear" : "opacity-0"}
                            style={{ animationDelay: `${i * 0.08 + 0.3}s` }}
                          />

                          {/* Point principal */}
                          <circle
                            cx={location.x}
                            cy={location.y}
                            r="1.3"
                            fill="url(#dotGradient)"
                            className={isVisible ? "animate-dot-appear" : "opacity-0"}
                            style={{ animationDelay: `${i * 0.08 + 0.3}s` }}
                          />

                          {/* Nom du pays avec fond semi-transparent */}
                          <text
                            x={location.x}
                            y={location.y - 3}
                            fill="#ffffff"
                            fontSize="2.8"
                            fontWeight="500"
                            textAnchor="middle"
                            className={isVisible ? "animate-dot-appear" : "opacity-0"}
                            style={{
                              animationDelay: `${i * 0.08 + 0.5}s`,
                              textShadow: '0 0 4px rgba(0,0,0,0.8), 0 0 2px rgba(0,0,0,0.9)'
                            }}
                          >
                            {location.name}
                          </text>
                        </g>
                      )
                    })}

                    {/* Point central avec pulse */}
                    <circle
                      cx={center.x}
                      cy={center.y}
                      r="2.5"
                      fill="#3b82f6"
                      opacity="0.4"
                      filter="url(#glow)"
                      className={isVisible ? "animate-pulse" : "opacity-0"}
                    />
                    <circle
                      cx={center.x}
                      cy={center.y}
                      r="1.5"
                      fill="#60a5fa"
                      className={isVisible ? "animate-pulse" : "opacity-0"}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT: Stats */}
            <div className={`order-1 lg:order-2 space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Projects Delivered</span>
                </div>
                <div className="text-xl lg:text-2xl text-white font-semibold mb-2">170+</div>
                <p className="text-white/50 text-sm">
                  Successfully completed projects across landing pages, websites, e-commerce stores, and web applications
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Global Reach</span>
                </div>
                <div className="text-xl lg:text-2xl text-white font-semibold mb-2">11</div>
                <p className="text-white/50 text-sm">
                  Countries served from North America to Europe, Middle East, and Asia-Pacific
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">On-Time Delivery</span>
                </div>
                <div className="text-xl lg:text-2xl text-white font-semibold mb-2">100%</div>
                <p className="text-white/50 text-sm">
                  Perfect track record delivering projects on schedule without compromising quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
