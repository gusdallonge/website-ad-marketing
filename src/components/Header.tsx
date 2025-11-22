import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-4 left-0 right-0 z-50 px-6 mb-4">
      <div className="glass-header mx-auto max-w-full">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="AD Marketing"
              width={200}
              height={40}
              className="w-[180px] sm:w-[220px] h-auto"
              priority
            />
          </Link>
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
  )
}
