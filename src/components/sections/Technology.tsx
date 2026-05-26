import { SectionHeader } from '@/components/ui/SectionHeader'
import { techPoints, stackLayers, techAttributes } from '@/data/technology'

export default function Technology() {
  return (
    <section
      id="technology"
      className="py-24 overflow-hidden serenity-gradient scroll-mt-[60px]"
    >
      {/* Background orbs */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-container-margin relative">
        <SectionHeader
          badge={{ icon: 'code', text: 'TECNOLOGIA & PERFORMANCE' }}
          title="Construído com uma base moderna, segura e escalável"
          description="Uma stack cuidadosamente escolhida para garantir performance, segurança e uma ótima experiência de desenvolvimento."
          align="center"
          dark
          className="mb-16"
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: points */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {techPoints.map((point) => (
                <div
                  key={point.icon}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/8 border border-white/12 hover:bg-white/12 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-primary-fixed-dim/20 text-primary-fixed-dim rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">{point.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-h3 font-semibold text-white mb-1">{point.title}</h4>
                    <p className="text-body-sm text-white/70 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stack diagram */}
          <div className="lg:w-1/2">
            <h3 className="font-h2 text-h2 font-semibold text-white mb-8 text-center">
              Stack Tecnológica
            </h3>
            <div className="flex flex-col gap-3">
              {stackLayers.map((layer, index) => (
                <div key={layer.label} className="relative flex items-center gap-4">
                  {/* Connector line */}
                  {index < stackLayers.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-3 bg-white/20 z-0" />
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10 border ${
                      layer.colorVariant === 'secondary'
                        ? 'bg-secondary/20 border-secondary/40'
                        : layer.colorVariant === 'tertiary'
                        ? 'bg-tertiary/20 border-tertiary/40'
                        : 'bg-primary/20 border-primary/40'
                    }`}
                  >
                    <span
                      className={`font-bold text-lg ${
                        layer.colorVariant === 'secondary'
                          ? 'text-secondary-fixed-dim'
                          : layer.colorVariant === 'tertiary'
                          ? 'text-tertiary-fixed-dim'
                          : 'text-accent'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex-1 bg-white/10 border border-white/15 rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-label-caps text-white/60 uppercase tracking-widest mb-1">
                          {layer.label}
                        </p>
                        <p className="text-white font-semibold">{layer.tech}</p>
                      </div>
                      <span className="material-symbols-outlined text-[20px] text-white/40">
                        chevron_right
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attributes row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {techAttributes.map((attr) => (
            <div
              key={attr.title}
              className="flex flex-col items-center text-center gap-3 p-6 bg-white/8 border border-white/12 rounded-2xl hover:bg-white/12 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-primary-fixed-dim/15 text-primary-fixed-dim rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">{attr.icon}</span>
              </div>
              <h4 className="font-semibold text-white">{attr.title}</h4>
              <p className="text-white/65 text-body-sm">{attr.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
