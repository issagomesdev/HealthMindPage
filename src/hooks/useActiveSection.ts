import { useState, useEffect } from 'react'

const HEADER_HEIGHT = 56

/**
 * Returns the id of the section currently in view, or null when scrolled
 * above all observed sections (Hero zone). Uses a scroll-position activation
 * line rather than IntersectionObserver so click-driven scrolls activate the
 * correct link immediately with no delay.
 *
 * activationY = scrollY + headerHeight + viewportHeight * 0.25
 * The last section whose top edge is <= activationY wins.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const compute = () => {
      const activationY = window.scrollY + HEADER_HEIGHT + window.innerHeight * 0.25

      let winner: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= activationY) {
          winner = id
        } else {
          break
        }
      }

      setActiveId(winner)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute, { passive: true })
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [ids])

  return activeId
}
