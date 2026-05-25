import { SectionHeader } from '@/components/ui/SectionHeader'
import { beforeItems, afterItems, impactPillars } from '@/data/impact'

export default function Impact() {
  return (
    <section id="impact" className="py-16 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-container-margin">
        <SectionHeader
          badge={{ icon: 'auto_graph', text: 'IMPACTO DO HEALTHMIND' }}
          title="Uma jornada de cuidado mais clara, acessível e contínua"
          description="Veja como o HealthMind transforma a experiência de cuidado com a saúde mental, para pacientes e profissionais."
          align="center"
          className="mb-10"
        />

        {/* Comparison panel */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-primary/5 overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
            {/* Before */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 text-error rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">cancel</span>
                </div>
                <div>
                  <p className="text-label-caps text-on-surface-variant uppercase tracking-widest">
                    Sem o HealthMind
                  </p>
                  <h3 className="font-h3 text-h3 font-semibold text-on-surface">Antes</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-error/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[12px] text-error">close</span>
                    </div>
                    <span className="text-body-sm text-on-surface-variant">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connector */}
            <div className="hidden md:flex flex-col items-center justify-center px-4 py-10">
              <div className="w-px flex-1 bg-outline-variant/50" />
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 my-4 flex-shrink-0">
                <span className="material-symbols-outlined text-white text-[22px]">
                  arrow_forward
                </span>
              </div>
              <div className="w-px flex-1 bg-outline-variant/50" />
            </div>

            {/* Mobile connector */}
            <div className="md:hidden flex items-center justify-center py-6 border-t border-outline-variant/30">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white text-[22px]">
                  arrow_downward
                </span>
              </div>
            </div>

            {/* After */}
            <div className="p-8 md:p-10 bg-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </div>
                <div>
                  <p className="text-label-caps text-primary uppercase tracking-widest">
                    Com o HealthMind
                  </p>
                  <h3 className="font-h3 text-h3 font-semibold text-on-surface">Depois</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[12px] text-primary">check</span>
                    </div>
                    <span className="text-body-sm text-on-surface">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {impactPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center gap-3 p-5 bg-white rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">{pillar.icon}</span>
              </div>
              <div>
                <h4 className="font-h3 text-h3 font-semibold text-on-surface mb-2">
                  {pillar.title}
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 flex items-start gap-3 p-5 bg-surface-container rounded-2xl border border-outline-variant/20">
          <span className="material-symbols-outlined text-[20px] text-outline flex-shrink-0 mt-0.5">info</span>
          <p className="text-body-sm text-on-surface-variant">
            <strong className="text-on-surface">Nota:</strong> O O HealthMind foi desenvolvido como projeto acadêmico para o Hackathon da 1ª Jornada de Tecnologia da UNICAP, com o objetivo de propor uma solução digital de apoio à saúde mental. A plataforma não substitui o acompanhamento profissional. Em situações de crise, procure um profissional qualificado ou ligue para o CVV: 188.
          </p>
        </div>
      </div>
    </section>
  )
}
