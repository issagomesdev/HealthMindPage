import { useState } from 'react'
import { navLinks, observedSectionIds } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import { useActiveSection } from '@/hooks/useActiveSection'

const HEADER_HEIGHT = 56

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - 8
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const downloadUrl = import.meta.env.VITE_APP_DOWNLOAD_URL as string
  const currentSectionId = useActiveSection(observedSectionIds)

  return (
    <header className="fixed top-0 w-full z-50 h-14 glass-nav">
      <div className="max-w-[1300px] mx-auto px-container-margin h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline group">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-primary/40 transition-shadow duration-300 overflow-hidden">
            <img src="/logo/white-w-green.png" alt="HealthMind logo" className="w-full h-full object-contain p-0.5" />
          </div>
          <span className="font-h1 font-bold text-xl text-on-surface tracking-tight">
            HealthMind
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentSectionId !== null && link.activeIds.includes(currentSectionId)
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className={cn(
                  'px-4 py-2 rounded-full text-body-lg font-semibold transition-all duration-200 no-underline cursor-pointer',
                  isActive
                    ? 'text-primary bg-primary/8'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/8',
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href={downloadUrl} variant="primary" size="sm">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Download App
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-on-surface hover:bg-surface-container transition-colors duration-200"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-[24px]">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="glass-nav border-t border-outline-variant/30 px-container-margin py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = currentSectionId !== null && link.activeIds.includes(currentSectionId)
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                  setMobileOpen(false)
                }}
                className={cn(
                  'px-4 py-3 rounded-xl text-body-md font-semibold transition-all duration-200 no-underline cursor-pointer',
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/8',
                )}
              >
                {link.label}
              </a>
            )
          })}
          <div className="mt-3 pt-3 border-t border-outline-variant/30">
            <Button
              href={downloadUrl}
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
