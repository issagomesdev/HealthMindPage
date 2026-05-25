import { cn } from '@/utils/cn'

interface PhoneMockupProps {
  src: string
  alt: string
  /** Visual size of the phone */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rotate?: number
  animationDuration?: string
  animationDelay?: string
  /** White frame (default) looks great on both light/dark backgrounds */
  frameVariant?: 'white' | 'dark' | 'none'
  /** Optional Tailwind glow class applied behind the phone */
  glowClass?: string
  className?: string
  style?: React.CSSProperties
}

const sizes = {
  sm: 'w-[182px] md:w-[214px]',
  md: 'w-[205px] md:w-[241px]',
  lg: 'w-[195px] md:w-[230px]',
  xl: 'w-[228px] md:w-[268px]',
}

export function PhoneMockup({
  src,
  alt,
  size = 'lg',
  rotate = 0,
  animationDuration = '6s',
  animationDelay = '0s',
  frameVariant = 'white',
  glowClass,
  className,
  style,
}: PhoneMockupProps) {
  return (
    // Outer div: static rotation only — never animated
    <div
      className={cn('relative flex-shrink-0', sizes[size], className)}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
    >
      {/* Inner div: float animation only — no rotation */}
      <div
        style={{
          animation: `float-slow ${animationDuration} ease-in-out infinite`,
          animationDelay,
        }}
      >
        {/* Glow behind phone */}
        {glowClass && (
          <div className={cn('absolute inset-0 rounded-[2.5rem] blur-2xl scale-110 -z-10', glowClass)} />
        )}

        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            'w-full rounded-[2.5rem]',
            frameVariant === 'white' && 'border-[10px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.35)]',
            frameVariant === 'dark' && 'border-[10px] border-white/15 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.55)]',
            frameVariant === 'none' && 'shadow-2xl',
          )}
        />
      </div>
    </div>
  )
}
