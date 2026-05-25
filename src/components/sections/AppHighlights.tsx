import { useRef, useEffect } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { highlightCards } from '@/data/highlights'
import { useCarousel } from '@/hooks/useCarousel'
import { cn } from '@/utils/cn'

export default function AppHighlights() {
  const { currentIndex, prev, next, goTo } = useCarousel({ total: highlightCards.length })
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[currentIndex] as HTMLElement
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [currentIndex])

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

      <div className="max-w-7xl mx-auto px-container-margin relative">
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
                  'snap-center flex-shrink-0 w-[260px] md:w-[300px] glass-card rounded-3xl p-5 flex flex-col gap-4 transition-all duration-300 cursor-pointer',
                  index === currentIndex
                    ? 'ring-2 ring-primary/50 shadow-xl shadow-primary/10'
                    : 'hover:shadow-lg',
                )}
                onClick={() => goTo(index)}
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

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {highlightCards.map((_, index) => (
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
