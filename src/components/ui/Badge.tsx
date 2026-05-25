import { cn } from '@/utils/cn'

interface BadgeProps {
  icon?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function Badge({ icon, children, variant = 'primary', className }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex w-fit items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.70rem] uppercase tracking-widest font-semibold',
        variant === 'primary' && 'bg-primary/10 text-primary border border-primary/20',
        variant === 'secondary' && 'bg-secondary/10 text-secondary border border-secondary/20',
        variant === 'white' && 'bg-primary-fixed/20 text-primary-fixed border border-primary-fixed/35',
        className,
      )}
    >
      {icon && (
        <span className="material-symbols-outlined text-[12px] leading-none">{icon}</span>
      )}
      {children}
    </div>
  )
}
