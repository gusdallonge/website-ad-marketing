"use client"

export default function FloatingStats() {
  return (
    <>
      {/* Top Left - Growth Chart */}
      <div className="hidden lg:block absolute left-32 top-32">
        <div className="glass-badge p-4 rounded-2xl backdrop-blur-xl w-[180px] h-[140px] flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium">Growth Rate</span>
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
          <p className="text-white/90 text-2xl font-semibold mt-auto">+245%</p>
        </div>
      </div>

      {/* Top Right - Active Projects */}
      <div className="hidden lg:block absolute right-32 top-32">
        <div className="glass-badge p-4 rounded-2xl backdrop-blur-xl w-[180px] h-[140px] flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium">Active Now</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 transform -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="url(#blueGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="126"
                  strokeDashoffset="31.5"
                  className="animate-circle-draw"
                />
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold">75%</span>
              </div>
            </div>
            <div>
              <p className="text-white/90 text-xl font-semibold">12</p>
              <p className="text-white/50 text-xs">Projects</p>
            </div>
          </div>
          <p className="text-white/90 text-2xl font-semibold mt-auto">Active</p>
        </div>
      </div>

      {/* Bottom Left - Delivery Rate */}
      <div className="hidden lg:block absolute left-32 bottom-40">
        <div className="glass-badge p-4 rounded-2xl backdrop-blur-xl w-[180px] h-[140px] flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium">Delivery Rate</span>
          </div>
          <div className="relative h-12 mb-2">
            <svg width="100%" height="48" viewBox="0 0 120 48" className="overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                d="M 0 40 Q 20 35, 30 30 T 60 20 T 90 15 T 120 10"
                stroke="url(#lineGradient)"
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
          <p className="text-white/90 text-2xl font-semibold mt-auto">100%</p>
        </div>
      </div>

      {/* Bottom Right - Client Satisfaction */}
      <div className="hidden lg:block absolute right-32 bottom-40">
        <div className="glass-badge p-4 rounded-2xl backdrop-blur-xl w-[180px] h-[140px] flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium">Satisfaction</span>
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
          <p className="text-white/90 text-2xl font-semibold mt-auto">5.0 ★</p>
        </div>
      </div>
    </>
  )
}
