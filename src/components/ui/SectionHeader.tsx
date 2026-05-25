import { cn } from '@/utils/cn'
import { Badge } from './Badge'

interface SectionHeaderProps {
  badge?: { icon?: string; text: string }
  title: string
  description?: string
  align?: 'left' | 'center'
  titleClassName?: string
  dark?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  titleClassName,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        align === 'left' && 'items-start text-left',
        className,
      )}
    >
      {badge && (
        <Badge icon={badge.icon} variant={dark ? 'white' : 'primary'}>
          {badge.text}
        </Badge>
      )}
      <h2
        className={cn(
          'font-h1 text-h1 font-bold max-w-3xl',
          dark ? 'text-white' : 'text-on-surface',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-body-lg max-w-2xl',
            dark ? 'text-white/75' : 'text-on-surface-variant',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
