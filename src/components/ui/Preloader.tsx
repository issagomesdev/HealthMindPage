import { useEffect, useRef, useState } from 'react'

const MIN_MS = 4000

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [exiting, setExiting] = useState(false)
  const startRef = useRef(Date.now())

  // Lock body scroll while visible
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Begin exit after min duration + page load
  useEffect(() => {
    const triggerExit = () => {
      const remaining = Math.max(0, MIN_MS - (Date.now() - startRef.current))
      setTimeout(() => {
        setExiting(true)
        setTimeout(onComplete, 560)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      triggerExit()
    } else {
      window.addEventListener('load', triggerExit, { once: true })
      return () => window.removeEventListener('load', triggerExit)
    }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[9999] serenity-gradient flex flex-col items-center justify-center overflow-hidden"
      style={{
        transition: 'opacity 0.56s ease',
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 560,
          height: 560,
          background: 'radial-gradient(circle, rgba(0,168,150,0.16) 0%, transparent 68%)',
          animation: 'breathing-pulse 4s ease-in-out infinite',
        }}
      />

      {/* Ripple ring 1 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          border: '1px solid rgba(111,216,200,0.22)',
          animation: 'preloader-ripple 2.6s cubic-bezier(0,0.2,0.8,1) infinite',
        }}
      />

      {/* Ripple ring 2 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          border: '1px solid rgba(111,216,200,0.14)',
          animation: 'preloader-ripple 2.6s cubic-bezier(0,0.2,0.8,1) infinite',
          animationDelay: '1.3s',
        }}
      />

      {/* Center content */}
      <div
        className="flex flex-col items-center relative"
        style={{ animation: 'preloader-enter 0.7s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        {/* Logo icon */}
        <img
          src="/logo/white.png"
          alt="HealthMind"
          className="w-40 h-40 object-contain"
          style={{ animation: 'float-slow 6s ease-in-out infinite' }}
        />

        {/* Brand + tagline */}
        <div className="relative bottom-3.5 flex flex-col items-center gap-2.5">
          <span className="text-white text-[2.2rem] font-bold tracking-tight leading-none">
            HealthMind
          </span>

          <div
            className="rounded-full bg-teal-400/50"
            style={{
              width: 36,
              height: 2,
              animation: 'preloader-enter 0.45s 0.3s cubic-bezier(0.22,1,0.36,1) both',
            }}
          />

          <span
            className="text-white/55 text-[0.85rem] font-medium tracking-wide"
            style={{
              animation: 'preloader-enter 0.45s 0.45s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            cuidando da sua mente, todos os dias.
          </span>
        </div>
      </div>

      {/* Loading dots */}
      <div
        className="absolute bottom-16 flex items-center gap-2.5"
        style={{ animation: 'preloader-enter 0.45s 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: 6,
              height: 6,
              backgroundColor: 'rgba(111,216,200,0.85)',
              animation: 'dot-wave 1.4s ease-in-out infinite',
              animationDelay: `${i * 0.22}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
