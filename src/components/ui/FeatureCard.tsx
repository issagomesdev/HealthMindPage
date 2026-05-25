import { cn } from '@/utils/cn'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'light' | 'dark'
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  color = 'primary',
  variant = 'light',
  className,
}: FeatureCardProps) {
  const iconColorLight = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    tertiary: 'bg-tertiary/10 text-tertiary',
  }

  const iconColorDark = {
    primary: 'bg-primary/25 text-primary-fixed-dim',
    secondary: 'bg-secondary/25 text-secondary-fixed-dim',
    tertiary: 'bg-tertiary/25 text-tertiary-fixed-dim',
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1',
        variant === 'light' &&
          'bg-white border border-outline-variant/30 hover:shadow-lg hover:shadow-primary/10',
        variant === 'dark' &&
          'bg-white/8 border border-white/15 hover:bg-white/12 hover:border-white/25',
        className,
      )}
    >
      <div
        className={cn(
          'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
          variant === 'light' ? iconColorLight[color] : iconColorDark[color],
        )}
      >
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div>
        <h4
          className={cn(
            'font-h3 text-h3 font-semibold mb-1',
            variant === 'light' ? 'text-on-surface' : 'text-white',
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            'text-body-sm leading-relaxed',
            variant === 'light' ? 'text-on-surface-variant' : 'text-white/70',
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
