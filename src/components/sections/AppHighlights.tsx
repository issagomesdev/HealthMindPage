import { useRef, useEffect, useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { highlightCards } from '@/data/highlights'
import { useCarousel } from '@/hooks/useCarousel'
import { cn } from '@/utils/cn'

export default function AppHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [pageCount, setPageCount] = useState(highlightCards.length)
  const isProgrammatic = useRef(false)
  const { currentIndex, prev, next, goTo } = useCarousel({ total: pageCount })

  // Calculate number of distinct scroll positions based on container size
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const update = () => {
      const first = container.children[0] as HTMLElement | null
      const second = container.children[1] as HTMLElement | null
      if (!first) return
      // Measure real step from DOM (card width + actual rendered gap)
      const step = second
        ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
        : first.getBoundingClientRect().width
      const maxScroll = container.scrollWidth - container.clientWidth
      setPageCount(maxScroll > 0 ? Math.floor(maxScroll / step) + 1 : 1)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  const getStep = () => {
    const container = scrollRef.current
    if (!container) return 0
    const first = container.children[0] as HTMLElement | null
    const second = container.children[1] as HTMLElement | null
    if (!first) return 0
    return second
      ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
      : first.getBoundingClientRect().width
  }

  // Scroll to the correct position when currentIndex changes via buttons/dots
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const step = getStep()
    if (!step) return
    isProgrammatic.current = true
    container.scrollTo({ left: currentIndex * step, behavior: 'smooth' })
    setTimeout(() => { isProgrammatic.current = false }, 450)
  }, [currentIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  // Update currentIndex when user scrolls manually
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    let debounce: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      if (isProgrammatic.current) return
      clearTimeout(debounce)
      debounce = setTimeout(() => {
        const step = getStep()
        if (!step) return
        goTo(Math.round(container.scrollLeft / step))
      }, 60)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      clearTimeout(debounce)
    }
  }, [goTo])

  return (
    <section
      id="app-highlights"
      className="py-16 bg-surface-container-low overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dot-grid" />

      <div className="max-w-[1300px] mx-auto px-container-margin relative">
        <SectionHeader
          badge={{ icon: 'auto_awesome', text: 'Tecnologia & Cuidado Contínuo' }}
          title="Destaques do Projeto"
          description="Conheça as principais funcionalidades que fazem do HealthMind uma ferramenta completa para o cuidado da saúde mental."
          align="center"
          className="mb-8"
        />

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Arrow left */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 bg-white rounded-full shadow-md items-center justify-center text-on-surface hover:bg-surface-container hover:shadow-lg transition-all duration-200"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>

          {/* Cards scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-1"
          >
            {highlightCards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  'snap-start flex-shrink-0 w-[260px] md:w-[300px] glass-card rounded-3xl p-5 flex flex-col gap-4 transition-all duration-300 cursor-pointer',
                  index === currentIndex ? 'ring-2 ring-primary/50' : '',
                )}
                style={{
                  boxShadow: index === currentIndex
                    ? '0 12px 40px -8px rgba(0,104,93,0.12)'
                    : '0 2px 20px rgba(0,0,0,0.04)',
                }}
                onClick={() => goTo(Math.min(index, pageCount - 1))}
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center',
                    card.color === 'primary' ? 'bg-primary/12 text-primary' : 'bg-secondary/12 text-secondary',
                  )}
                >
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <div>
                  <h3 className="font-h3 text-h3 font-semibold text-on-surface mb-2">
                    {card.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div
                  className={cn(
                    'mt-auto flex items-center gap-1 text-label-caps font-semibold',
                    card.color === 'primary' ? 'text-primary' : 'text-secondary',
                  )}
                >
                  Saiba mais
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 bg-white rounded-full shadow-md items-center justify-center text-on-surface hover:bg-surface-container hover:shadow-lg transition-all duration-200"
            aria-label="Próximo"
          >
            <span className="material-symbols-outlined text-[22px]">chevron_right</span>
          </button>
        </div>

        {/* Dots — one per scroll page, not one per card */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-outline-variant hover:bg-primary/50',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
