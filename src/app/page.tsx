import { CheckCircle, Clock, Star, Award } from "lucide-react"
import Header from "@/components/Header"
import BrandLogos from "@/components/BrandLogos"
import Services from "@/components/Services"
import FloatingStats from "@/components/FloatingStats"
import ClientGlobe from "@/components/ClientGlobe"

export default function Home() {

  return (
    <>
      <Header />

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
            <p className="text-white/50 mb-6 sm:mb-8 mx-auto md:text-lg" style={{ maxWidth: '95%', fontSize: '17px' }}>
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
