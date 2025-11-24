"use client"

import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function TestLight() {
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [statCounts, setStatCounts] = useState({ projects: 0, years: 0, countries: 0 })
  const statsRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isStatsVisible) {
            setIsStatsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isStatsVisible])

  useEffect(() => {
    if (isStatsVisible) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const animate = (key: keyof typeof statCounts, target: number) => {
        let current = 0
        const increment = target / steps
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setStatCounts(prev => ({ ...prev, [key]: target }))
            clearInterval(timer)
          } else {
            setStatCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
          }
        }, interval)
      }

      setTimeout(() => animate('projects', 170), 0)
      setTimeout(() => animate('years', 5), 100)
      setTimeout(() => animate('countries', 11), 200)
    }
  }, [isStatsVisible])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-4 left-0 right-0 z-50 px-6 mb-4">
        <div
          className="mx-auto max-w-full rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl sm:text-2xl font-semibold flex items-center gap-2" style={{ fontFamily: 'var(--font-poppins)', color: '#121212' }}>
              <span className="inline-block" style={{ transform: 'rotate(90deg)' }}>人</span>
              ad marketing
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/ad-marketing-agency-lcc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-10 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                <Linkedin size={20} strokeWidth={1.5} className="relative z-10 text-[#121212] group-hover:text-[#121212] transition-colors" />
              </a>
              <a
                href="https://x.com/admarketingllc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-500 opacity-10 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                <svg viewBox="0 0 24 24" className="relative z-10 w-5 h-5 text-[#121212] group-hover:text-[#121212] transition-colors fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: '#def3ff' }} />

      <main className="relative z-10">
        {/* Hero Section */}
        <div className="lg:relative lg:h-[85vh]">
          {/* Floating Stats */}
          <>
            {/* Top Left - Growth Chart */}
            <div className="hidden lg:block absolute left-16 top-20">
              <div
                className="p-4 rounded-[24px] w-[180px] h-[140px] flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-gray-600 text-xs font-medium">Growth Rate</span>
                </div>
                <div className="flex items-end gap-1 h-12 mb-2">
                  {[40, 65, 45, 80, 60, 95, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-green-500/50 to-green-400/30 rounded-t animate-bar-grow"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-[#121212] text-2xl font-semibold mt-auto">+245%</p>
              </div>
            </div>

            {/* Top Right - Active Projects */}
            <div className="hidden lg:block absolute right-16 top-20">
              <div
                className="p-4 rounded-[24px] w-[180px] h-[140px] flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-gray-600 text-xs font-medium">Active Now</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="url(#blueGradientLight)"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="126"
                        strokeDashoffset="31.5"
                        className="animate-circle-draw"
                      />
                      <defs>
                        <linearGradient id="blueGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#121212] text-xs font-bold">75%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#121212] text-xl font-semibold">12</p>
                    <p className="text-gray-600 text-xs">Projects</p>
                  </div>
                </div>
                <p className="text-[#121212] text-2xl font-semibold mt-auto">Active</p>
              </div>
            </div>

            {/* Bottom Left - Delivery Rate */}
            <div className="hidden lg:block absolute left-16 bottom-32">
              <div
                className="p-4 rounded-[24px] w-[180px] h-[140px] flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-gray-600 text-xs font-medium">Delivery Rate</span>
                </div>
                <div className="relative h-12 mb-2">
                  <svg width="100%" height="48" viewBox="0 0 120 48" className="overflow-visible">
                    <defs>
                      <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 40 Q 20 35, 30 30 T 60 20 T 90 15 T 120 10"
                      stroke="url(#lineGradientLight)"
                      strokeWidth="3"
                      fill="none"
                      className="animate-path-draw"
                      strokeLinecap="round"
                    />
                    {[0, 30, 60, 90, 120].map((x, i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={[40, 30, 20, 15, 10][i]}
                        r="3"
                        fill="#a855f7"
                        className="animate-dot-appear"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </svg>
                </div>
                <p className="text-[#121212] text-2xl font-semibold mt-auto">100%</p>
              </div>
            </div>

            {/* Bottom Right - Client Satisfaction */}
            <div className="hidden lg:block absolute right-16 bottom-32">
              <div
                className="p-4 rounded-[24px] w-[180px] h-[140px] flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-gray-600 text-xs font-medium">Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 mb-2 justify-center">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 animate-star-pop"
                      style={{ animationDelay: `${i * 0.1}s` }}
                      viewBox="0 0 24 24"
                      fill="#fbbf24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#121212] text-2xl font-semibold mt-auto">5.0 ★</p>
              </div>
            </div>
          </>

          <div className="lg:absolute lg:inset-0 flex flex-col items-center justify-center px-6 sm:px-8 py-12 lg:py-0">
            <div className="text-center max-w-4xl w-full">
              <p className="text-lg sm:text-xl mb-4 italic w-full text-center md:text-[25px]" style={{ fontFamily: 'var(--font-instrument)', color: '#121212' }}>
                Founders, Business Owners, Consultants:
              </p>
              <p className="text-5xl sm:text-7xl md:text-8xl font-medium mb-4 w-full text-center" style={{ color: '#121212' }}>
                <span className="italic" style={{ fontFamily: 'var(--font-instrument)' }}>Zero</span> BS. <span className="italic" style={{ fontFamily: 'var(--font-instrument)' }}>100%</span> results.
              </p>
              <p className="text-gray-600 font-medium mb-3 mx-auto md:text-lg w-full text-center" style={{ fontSize: '19px' }}>
                Partner with us to build digital products that drive real revenue and scale with your success.
              </p>
              <p className="text-gray-600 font-medium mb-6 sm:mb-8 mx-auto w-full text-center" style={{ fontSize: '19px' }}>
                We create landing pages, Shopify and WordPress websites and dedicated web apps.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="mailto:contact@admarketing.cc"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full transition-all duration-300 overflow-hidden hover:px-12 hover:bg-black"
                style={{
                  background: '#021520',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="relative z-10 text-white text-base font-medium whitespace-nowrap">
                  Apply now
                </span>
                <svg className="relative z-10 w-5 h-5 text-white group-hover:rotate-45 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Brand Logos Section - Animated Carousel */}
        <section className="w-full py-2 sm:py-4 -mt-12 sm:-mt-16">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {[
                { name: "Stripe", src: "/logos/stripe.svg" },
                { name: "Shopify", src: "/logos/shopify.svg" },
                { name: "Anthropic", src: "/logos/anthropic.svg" },
                { name: "Vercel", src: "/logos/vercel.svg" },
                { name: "Supabase", src: "/logos/supabase.svg" },
                { name: "WordPress", src: "/logos/wordpress.svg" },
                { name: "Mercury", src: "/logos/mercury.svg" },
                { name: "Spaceship", src: "/logos/spaceship.svg" },
              ].map((logo, index) => (
                <div
                  key={`${logo.name}-1-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center w-[80px] h-[35px] sm:w-[120px] sm:h-[50px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={50}
                    className="max-w-full max-h-full object-contain opacity-40 brightness-0"
                  />
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {[
                { name: "Stripe", src: "/logos/stripe.svg" },
                { name: "Shopify", src: "/logos/shopify.svg" },
                { name: "Anthropic", src: "/logos/anthropic.svg" },
                { name: "Vercel", src: "/logos/vercel.svg" },
                { name: "Supabase", src: "/logos/supabase.svg" },
                { name: "WordPress", src: "/logos/wordpress.svg" },
                { name: "Mercury", src: "/logos/mercury.svg" },
                { name: "Spaceship", src: "/logos/spaceship.svg" },
              ].map((logo, index) => (
                <div
                  key={`${logo.name}-2-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center w-[80px] h-[35px] sm:w-[120px] sm:h-[50px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={50}
                    className="max-w-full max-h-full object-contain opacity-40 brightness-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="w-full pt-12 sm:pt-20 pb-6 sm:pb-10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[48px] p-8 sm:p-12 md:p-14 max-w-7xl mx-auto shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-medium mb-4 italic" style={{ color: '#121212', fontFamily: 'var(--font-instrument)' }}>
                  Trusted by businesses worldwide
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 - Projects */}
              <div
                className="relative p-6 rounded-[32px] flex flex-col"
                style={{
                  background: '#def3ff',
                  animationName: isStatsVisible ? 'fadeInUp' : 'none',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards',
                  animationDelay: '0s',
                  opacity: isStatsVisible ? 1 : 0
                }}
              >
                <div className="mb-6">
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden relative">
                    {/* Horizontal sliding project cards */}
                    <div className="absolute w-full h-full flex items-center">
                      <div className="flex gap-4 animate-scroll">
                        {[...Array(10)].map((_, i) => {
                          const colors = [
                            ['#3B82F6', '#2563EB'], // Blue
                            ['#06B6D4', '#0284C7'], // Cyan
                            ['#8B5CF6', '#7C3AED'], // Purple
                            ['#EC4899', '#DB2777'], // Pink
                            ['#10B981', '#059669'], // Green
                          ];
                          const [color1, color2] = colors[i % colors.length];
                          return (
                            <div
                              key={i}
                              className="flex-shrink-0 w-20 h-24 rounded-xl shadow-lg flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, ${color1}, ${color2})`
                              }}
                            >
                              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          );
                        })}
                        {/* Duplicate for seamless loop */}
                        {[...Array(10)].map((_, i) => {
                          const colors = [
                            ['#3B82F6', '#2563EB'], // Blue
                            ['#06B6D4', '#0284C7'], // Cyan
                            ['#8B5CF6', '#7C3AED'], // Purple
                            ['#EC4899', '#DB2777'], // Pink
                            ['#10B981', '#059669'], // Green
                          ];
                          const [color1, color2] = colors[i % colors.length];
                          return (
                            <div
                              key={`dup-${i}`}
                              className="flex-shrink-0 w-20 h-24 rounded-xl shadow-lg flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, ${color1}, ${color2})`
                              }}
                            >
                              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold mb-3" style={{ color: '#0284C7' }}>
                    {statCounts.projects}+
                  </div>

                  <div className="text-xl font-semibold mb-3" style={{ color: '#121212' }}>
                    Projects Delivered
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    From landing pages to full web apps, we've shipped products that actually work and make money.
                  </p>
                </div>
              </div>

              {/* Stat 2 - Experience */}
              <div
                className="relative p-6 rounded-[32px] flex flex-col"
                style={{
                  background: '#ffecde',
                  animationName: isStatsVisible ? 'fadeInUp' : 'none',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards',
                  animationDelay: '0.1s',
                  opacity: isStatsVisible ? 1 : 0
                }}
              >
                <div className="mb-6">
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center overflow-hidden relative">
                    {/* Calendar pages flipping through years */}
                    <div className="absolute w-full h-full flex items-center">
                      <div className="flex gap-3 animate-scroll">
                        {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year, i) => (
                          <div
                            key={i}
                            className="flex-shrink-0 w-24 h-28 rounded-xl shadow-lg flex flex-col items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#FBBF24' : '#FCD34D'}, ${i % 3 === 0 ? '#D97706' : i % 3 === 1 ? '#F59E0B' : '#FBBF24'})`
                            }}
                          >
                            <div className="text-3xl font-bold text-white mb-1">{year}</div>
                            <div className="w-12 h-0.5 bg-white opacity-50" />
                            <div className="flex gap-1 mt-1">
                              {[1, 2, 3].map((dot) => (
                                <div key={dot} className="w-1.5 h-1.5 rounded-full bg-white opacity-70" />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold mb-3" style={{ color: '#CA8A04' }}>
                    {statCounts.years}+
                  </div>

                  <div className="text-xl font-semibold mb-3" style={{ color: '#121212' }}>
                    Years of Experience
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    Half a decade building digital products. We've seen what works and what doesn't.
                  </p>
                </div>
              </div>

              {/* Stat 3 - Countries */}
              <div
                className="relative p-6 rounded-[32px] flex flex-col"
                style={{
                  background: '#deffde',
                  animationName: isStatsVisible ? 'fadeInUp' : 'none',
                  animationDuration: '0.6s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards',
                  animationDelay: '0.2s',
                  opacity: isStatsVisible ? 1 : 0
                }}
              >
                <div className="mb-6">
                  <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center overflow-hidden relative">
                    {/* Flag emojis scrolling horizontally */}
                    <div className="absolute w-full h-full flex items-center">
                      <div className="flex gap-4 animate-scroll">
                        {['🇺🇸', '🇨🇦', '🇫🇷', '🇧🇪', '🇨🇭', '🇱🇺', '🇮🇹', '🇭🇷', '🇷🇸', '🇷🇴', '🇦🇪', '🇮🇩', '🇺🇸', '🇨🇦', '🇫🇷', '🇧🇪', '🇨🇭', '🇱🇺', '🇮🇹', '🇭🇷', '🇷🇸', '🇷🇴', '🇦🇪', '🇮🇩'].map((flag, i) => (
                          <div
                            key={i}
                            className="flex-shrink-0 w-24 h-24 rounded-xl shadow-lg flex items-center justify-center text-5xl"
                            style={{
                              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#10B981' : '#34D399'}, ${i % 2 === 0 ? '#059669' : '#10B981'})`
                            }}
                          >
                            {flag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold mb-3" style={{ color: '#059669' }}>
                    {statCounts.countries}
                  </div>

                  <div className="text-xl font-semibold mb-3" style={{ color: '#121212' }}>
                    Countries Served
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    From North America to Asia-Pacific. We work across time zones to deliver worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a
                href="mailto:contact@admarketing.cc"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full transition-all duration-300 overflow-hidden hover:px-12 hover:bg-black"
                style={{
                  background: '#021520',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                <span className="relative z-10 text-white text-base font-medium whitespace-nowrap">
                  Apply now
                </span>
                <svg className="relative z-10 w-5 h-5 text-white group-hover:rotate-45 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="w-full py-6 sm:py-10 relative">
          <div className="max-w-7xl mx-auto px-6">
            {/* Title */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl sm:text-5xl font-medium italic" style={{ fontFamily: 'var(--font-instrument)', color: '#121212' }}>
                What we do?
              </h2>
            </div>

            {/* First Row: Card 1 + Card 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Card 1 - Landing Pages */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#def3ff] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0284C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#121212' }}>Landing Pages</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    High-converting landing pages designed to capture leads and drive conversions.
                  </p>
                </div>
              </div>

              {/* Card 2 - WordPress */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#def3ff] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0284C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#121212' }}>WordPress Websites</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Custom WordPress sites built for performance, SEO, and easy content management.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row: Card 3 + Card 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 3 - Shopify */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#def3ff] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0284C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#121212' }}>Shopify Stores</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    E-commerce stores optimized for sales with seamless checkout experiences.
                  </p>
                </div>
              </div>

              {/* Card 4 - Web Apps */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#def3ff] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#0284C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#121212' }}>Web Apps</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Custom web applications tailored to your specific business needs and workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Word from Our Clients Section */}
        <section className="w-full py-6 sm:py-10 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[48px] p-8 sm:p-12 md:p-14 max-w-7xl mx-auto shadow-xl">
              {/* Title with Write Review Button and Navigation Arrows */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl sm:text-5xl font-medium italic" style={{ fontFamily: 'var(--font-instrument)', color: '#121212' }}>
                  Words from our clients
                </h2>

                {/* Write us a review button - centered */}
                <a
                  href="https://www.trustpilot.com/review/admarketing.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: '#021520',
                    color: 'white',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000000'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#021520'
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  Write us a review
                </a>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const totalTestimonials = 6
                      setCurrentTestimonial((prev) => (prev === 0 ? totalTestimonials - 1 : prev - 1))
                    }}
                    className="w-12 h-12 rounded-full bg-[#def3ff] flex items-center justify-center transition-all duration-300"
                    style={{ color: '#0284C7' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#021520'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#def3ff'
                      e.currentTarget.style.color = '#0284C7'
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      const totalTestimonials = 6
                      setCurrentTestimonial((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1))
                    }}
                    className="w-12 h-12 rounded-full bg-[#def3ff] flex items-center justify-center transition-all duration-300"
                    style={{ color: '#0284C7' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#021520'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#def3ff'
                      e.currentTarget.style.color = '#0284C7'
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="overflow-hidden">
                <div
                  ref={testimonialRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {[
                    { name: "John Doe", role: "CEO, Tech Startup Inc.", initials: "JD", quote: "Working with AD Marketing transformed our online presence. Their attention to detail and commitment to delivering results exceeded our expectations. The landing page increased our conversion rate by 245%!" },
                    { name: "Sarah Johnson", role: "Founder, E-commerce Brand", initials: "SJ", quote: "The Shopify store they built for us is beautiful and converts like crazy. Our sales have tripled since launch. Couldn't be happier with the results!" },
                    { name: "Michael Chen", role: "Director, Marketing Agency", initials: "MC", quote: "Professional, responsive, and delivered exactly what we needed. The web app they created streamlined our entire workflow. Highly recommend!" },
                    { name: "Emma Williams", role: "CMO, SaaS Company", initials: "EW", quote: "Outstanding work on our WordPress site. Fast, SEO-optimized, and exactly matches our brand. The team was amazing to work with throughout the project." },
                    { name: "David Brown", role: "Owner, Consulting Firm", initials: "DB", quote: "They didn't just build a website, they built a growth machine. Our lead generation has increased 300% since working with AD Marketing. Game changers!" },
                    { name: "Lisa Anderson", role: "VP Product, Tech Startup", initials: "LA", quote: "The custom web application exceeded all our expectations. Clean code, intuitive design, and delivered on time. Will definitely work with them again!" },
                  ].map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full rounded-[32px] p-8 sm:p-10" style={{ background: '#def3ff' }}>
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Client Image */}
                        <div className="flex-shrink-0">
                          <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
                              {testimonial.initials}
                            </div>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex-1">
                          {/* Quote */}
                          <p className="text-gray-800 text-base leading-relaxed mb-4">
                            "{testimonial.quote}"
                          </p>

                          {/* Client Info */}
                          <div>
                            <p className="text-lg font-semibold" style={{ color: '#121212' }}>{testimonial.name}</p>
                            <p className="text-gray-700 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="w-full py-6 sm:py-10 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[48px] p-8 sm:p-12 md:p-14 max-w-7xl mx-auto shadow-xl">
              {/* Title with Apply Now Button */}
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl sm:text-5xl font-medium italic" style={{ fontFamily: 'var(--font-instrument)', color: '#121212' }}>
                  Our Process:
                </h2>

                {/* Apply now button */}
                <a
                  href="mailto:contact@admarketing.cc"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full transition-all duration-300 hover:bg-black"
                  style={{
                    background: '#021520',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span className="text-white text-base font-medium whitespace-nowrap">
                    Apply now
                  </span>
                  <svg className="w-5 h-5 text-white group-hover:rotate-45 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>

              {/* First Row: 50% + 50% */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 relative">
              {/* Step 1 - Discovery (50%) */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg lg:min-h-[220px]" style={{ background: '#def3ff' }}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
                    <span className="text-4xl font-bold italic" style={{ color: '#0284C7', fontFamily: 'var(--font-instrument)' }}>1</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: '#121212' }}>Discovery & Strategy</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We learn about your business and define clear goals. Simple brief, no BS.
                  </p>
                </div>
              </div>

              {/* Step 2 - Design (50%) */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg lg:min-h-[220px]" style={{ background: '#ffecde' }}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
                    <span className="text-4xl font-bold italic" style={{ color: '#CA8A04', fontFamily: 'var(--font-instrument)' }}>2</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: '#121212' }}>Design & Development</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We build fast, following your brand identity. Focus on what converts, skip what doesn't.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row: 50% + 50% */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Step 3 - Testing (50%) */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg lg:min-h-[220px]" style={{ background: '#deffde' }}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
                    <span className="text-4xl font-bold italic" style={{ color: '#059669', fontFamily: 'var(--font-instrument)' }}>3</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: '#121212' }}>Testing & Launch</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Test everything. Deploy smoothly. You're live and making money.
                  </p>
                </div>
              </div>

              {/* Step 4 - Support (50%) */}
              <div className="bg-white rounded-[32px] p-8 shadow-lg lg:min-h-[220px]" style={{ background: '#f4deff' }}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md">
                    <span className="text-4xl font-bold italic" style={{ color: '#9333EA', fontFamily: 'var(--font-instrument)' }}>4</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: '#121212' }}>Support & Growth</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We stick around to help you scale and optimize based on real data.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
