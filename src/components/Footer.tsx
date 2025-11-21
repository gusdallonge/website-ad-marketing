"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full px-6 pt-48 sm:pt-48 pb-6">
      <div className="absolute bottom-6 left-6 right-6 glass-header z-10">
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between px-6 py-4">
          <Image
            src="/logo.svg"
            alt="AD Marketing"
            width={200}
            height={40}
            className="w-[180px] sm:w-[220px] h-auto"
          />
          <div className="flex items-center gap-4 text-xs text-white/30">
            <a href="mailto:contact@admarketing.cc" className="hover:text-white/60 transition-colors">
              contact@admarketing.cc
            </a>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">•</span>
            <span>© Copyright 2026</span>
            <span className="text-white/20">•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex sm:hidden flex-col items-center gap-2 px-6 py-4 text-xs text-white/30">
          <Image
            src="/logo.svg"
            alt="AD Marketing"
            width={140}
            height={28}
            className="w-[140px] h-auto"
          />
          <a href="mailto:contact@admarketing.cc" className="hover:text-white/60 transition-colors">
            contact@admarketing.cc
          </a>
          <Link href="/terms" className="hover:text-white/60 transition-colors">
            Terms & Conditions
          </Link>
          <span>© Copyright 2026</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}
