import { useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={cn(
          'relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90dvh] overflow-y-auto',
          'animate-[modal-in_0.2s_ease-out]',
          className,
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl flex items-start justify-between px-7 pt-6 pb-4 border-b border-outline-variant/20">
          <h2 id="modal-title" className="font-h2 font-bold text-on-surface text-xl leading-snug pr-4">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all duration-200"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="px-7 py-5">{children}</div>
      </div>
    </div>
  )
}
