import { cn } from '@/utils/cn'

interface FloatingWidgetProps {
  icon: string
  title: string
  subtitle?: string
  className?: string
  variant?: 'light' | 'dark' | 'primary' | 'secondary'
  animationDelay?: string
  animationDuration?: string
}

export function FloatingWidget({
  icon,
  title,
  subtitle,
  className,
  variant = 'light',
  animationDelay = '0s',
  animationDuration = '6s',
}: FloatingWidgetProps) {
  return (
    <div
      className={cn(
        'absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl shadow-lg z-10 whitespace-nowrap',
        variant === 'light' && 'glass-card',
        variant === 'dark' && 'glass-card-dark',
        variant === 'primary' && 'bg-primary text-white shadow-primary/30',
        variant === 'secondary' && 'bg-secondary text-white shadow-secondary/30',
        className,
      )}
      style={{
        animation: `float-slow ${animationDuration} ease-in-out infinite`,
        animationDelay,
      }}
    >
      <div
        className={cn(
          'w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0',
          variant === 'light' && 'bg-primary/10 text-primary',
          variant === 'dark' && 'bg-white/15 text-white',
          variant === 'primary' && 'bg-white/20 text-white',
          variant === 'secondary' && 'bg-white/20 text-white',
        )}
      >
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
      <div>
        <div
          className={cn(
            'font-semibold text-xs leading-tight',
            variant === 'light' && 'text-on-surface',
            variant === 'dark' && 'text-white',
            variant === 'primary' && 'text-white',
            variant === 'secondary' && 'text-white',
          )}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className={cn(
              'text-[11px] leading-tight mt-0.5',
              variant === 'light' && 'text-on-surface-variant',
              variant === 'dark' && 'text-white/70',
              variant === 'primary' && 'text-white/80',
              variant === 'secondary' && 'text-white/80',
            )}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  )
}
