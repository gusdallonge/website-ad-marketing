import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">

      {/* Header */}
      <header className="absolute top-6 left-6 right-6 z-10 glass-header animate-header">
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
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-400 to-gray-600 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-300" />
              <svg viewBox="0 0 24 24" className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white transition-colors fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Center Content - Taglines */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 sm:px-8">
        <div className="text-center animate-fade-in-1 max-w-4xl">
          <p className="text-base sm:text-lg md:text-xl text-white/50 mb-4 italic" style={{ fontFamily: 'var(--font-instrument)' }}>
            Founders, Business Owners, Consultants:
          </p>
          <p className="text-4xl sm:text-6xl md:text-7xl text-white font-medium mb-4">
            <span className="italic" style={{ fontFamily: 'var(--font-instrument)' }}>Zero</span> BS. <span className="italic" style={{ fontFamily: 'var(--font-instrument)' }}>100%</span> results.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/50 mb-8 mx-auto" style={{ maxWidth: '90%' }}>
            Digital products that actually work for your business. Websites that convert, apps that perform, stores that sell. All delivered with agency standards and freelance flexibility.
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="animate-fade-in-2 group">
          <div className="relative px-6 py-3 rounded-full glass-badge cursor-default">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            <span className="relative z-10 text-white/80 text-sm font-medium tracking-wider uppercase">
              Coming Soon
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
