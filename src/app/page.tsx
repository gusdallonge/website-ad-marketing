import Image from "next/image"
import { Linkedin, CheckCircle, Clock, Star, Award } from "lucide-react"
import BrandLogos from "@/components/BrandLogos"
import Services from "@/components/Services"
import FloatingStats from "@/components/FloatingStats"
import ClientGlobe from "@/components/ClientGlobe"

export default function Home() {

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-4 left-0 right-0 z-50 px-6 mb-4">
        <div className="glass-header mx-auto max-w-full">
          <div className="flex items-center justify-between px-6 py-4">
            <Image
              src="/logo.svg"
              alt="AD Marketing"
              width={200}
              height={40}
              className="w-[180px] sm:w-[220px] h-auto"
              priority
            />
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/ad-marketing-agency-lcc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-300" />
                <Linkedin size={20} strokeWidth={1.5} className="relative z-10 text-white/80 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/admarketingllc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-300" />
                <svg viewBox="0 0 24 24" className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white transition-colors fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="lg:relative lg:h-[85vh]">
        {/* Floating Stats */}
        <FloatingStats />

        {/* Center Content - Taglines - Absolutely centered */}
        <div className="lg:absolute lg:inset-0 flex flex-col items-center justify-center px-6 sm:px-8 py-12 lg:py-0">
          <div className="text-center max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 italic" style={{ fontFamily: 'var(--font-instrument)' }}>
              Founders, Business Owners, Consultants:
            </p>
            <p className="text-4xl sm:text-6xl md:text-7xl text-white font-medium mb-4">
              <span className="italic" style={{ fontFamily: 'var(--font-instrument)' }}>Zero</span> BS. <span className="italic" style={{ fontFamily: 'var(--font-instrument)' }}>100%</span> results.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/50 mb-6 sm:mb-8 mx-auto" style={{ maxWidth: '90%' }}>
              Digital products that actually work for your business. Websites that convert, apps that perform, stores that sell. All delivered with agency standards and freelance flexibility.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="glass-badge px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle size={14} className="text-white/50 flex-shrink-0" strokeWidth={2} />
              <span className="text-white/70 text-xs sm:text-xs font-medium">170+ Projects</span>
            </div>
            <div className="glass-badge px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-full flex items-center gap-1.5">
              <Clock size={14} className="text-white/50 flex-shrink-0" strokeWidth={2} />
              <span className="text-white/70 text-xs sm:text-xs font-medium">48h Response</span>
            </div>
            <div className="glass-badge px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-full flex items-center gap-1.5">
              <Star size={14} className="text-white/50 flex-shrink-0" strokeWidth={2} />
              <span className="text-white/70 text-xs sm:text-xs font-medium">100% Satisfaction</span>
            </div>
            <div className="glass-badge px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-full flex items-center gap-1.5">
              <Award size={14} className="text-white/50 flex-shrink-0" strokeWidth={2} />
              <span className="text-white/70 text-xs sm:text-xs font-medium">5+ Years</span>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="mailto:contact@admarketing.cc"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full glass-badge hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-300" />
              <span className="relative z-10 text-white text-base font-medium whitespace-nowrap">
                Book a Free Call
              </span>
              <svg className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Brand Logos Section - Positioned at bottom on desktop only */}
        <div className="hidden lg:block absolute -bottom-12 left-0 right-0 z-10">
          <BrandLogos />
        </div>
      </div>

      {/* Brand Logos Section - In flow on mobile */}
      <div className="lg:hidden">
        <BrandLogos />
      </div>

      {/* Services Section */}
      <Services />

      {/* Client Globe Section */}
      <ClientGlobe />
    </>
  )
}
