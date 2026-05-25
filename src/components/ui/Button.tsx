import { cn } from '@/utils/cn'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold font-button transition-all duration-300 cursor-pointer no-underline',
        size === 'sm' && 'px-5 py-2.5 text-sm',
        size === 'md' && 'px-6 py-3 text-button',
        size === 'lg' && 'px-8 py-4 text-button',
        variant === 'primary' &&
          'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5',
        variant === 'outline' &&
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-0.5',
        variant === 'gradient' &&
          'bg-gradient-to-r from-primary to-primary-container text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
