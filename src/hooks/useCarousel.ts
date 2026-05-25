import { useState, useCallback } from 'react'

interface UseCarouselOptions {
  total: number
  initialIndex?: number
}

interface UseCarouselReturn {
  currentIndex: number
  prev: () => void
  next: () => void
  goTo: (index: number) => void
}

export function useCarousel({ total, initialIndex = 0 }: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1))
  }, [total])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1))
  }, [total])

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < total) {
      setCurrentIndex(index)
    }
  }, [total])

  return { currentIndex, prev, next, goTo }
}
