import { Badge } from '@/components/ui/Badge'
import { FloatingWidget } from '@/components/ui/FloatingWidget'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { breathingFeatures } from '@/data/breathing'

const BREATHING_PHONE =
  '/images/mockups/breathing.png'

export default function Breathing() {
  return (
    <section id="breathing-feature" className="py-16 serenity-gradient relative overflow-hidden">
      {/* Wave container */}
      <div className="wave-container" style={{ height: '50%', top: '30%', bottom: 'auto', transform: 'translateY(-40%)' }}>
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>

      {/* Particles */}
      <div className="particle w-3 h-3 top-[20%] left-[10%]"   style={{ animationDelay: '0s',   animationDuration: '6s' }} />
      <div className="particle w-2 h-2 top-[60%] left-[15%]"   style={{ animationDelay: '1s',   animationDuration: '8s' }} />
      <div className="particle w-4 h-4 top-[30%] right-[12%]"  style={{ animationDelay: '2s',   animationDuration: '7s' }} />
      <div className="particle w-2 h-2 top-[70%] right-[8%]"   style={{ animationDelay: '0.5s', animationDuration: '9s' }} />
      <div className="particle w-2 h-2 top-[10%] left-[30%]"   style={{ animationDelay: '1.5s', animationDuration: '7s' }} />
      <div className="particle w-3 h-3 top-[80%] left-[25%]"   style={{ animationDelay: '3s',   animationDuration: '10s' }} />
      <div className="particle w-2 h-2 top-[45%] left-[5%]"    style={{ animationDelay: '0.8s', animationDuration: '8.5s' }} />
      <div className="particle w-3 h-3 top-[15%] right-[25%]"  style={{ animationDelay: '2.5s', animationDuration: '6.5s' }} />
      <div className="particle w-2 h-2 top-[55%] right-[20%]"  style={{ animationDelay: '1.2s', animationDuration: '9s' }} />
      <div className="particle w-1 h-1 top-[85%] right-[30%]"  style={{ animationDelay: '0.3s', animationDuration: '7.5s' }} />
      <div className="particle w-2 h-2 top-[40%] left-[40%]"   style={{ animationDelay: '2.2s', animationDuration: '11s' }} />
      <div className="particle w-1 h-1 top-[90%] left-[45%]"   style={{ animationDelay: '1.8s', animationDuration: '8s' }} />
      <div className="particle w-3 h-3 top-[5%]  right-[40%]"  style={{ animationDelay: '3.5s', animationDuration: '9.5s' }} />
      <div className="particle w-1 h-1 top-[75%] left-[55%]"   style={{ animationDelay: '0.7s', animationDuration: '6s' }} />
      <div className="particle w-2 h-2 top-[25%] left-[60%]"   style={{ animationDelay: '4s',   animationDuration: '7s' }} />

      <div className="max-w-[1300px] mx-auto px-container-margin relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Content */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Badge icon="air" variant="white">
                RESPIRAÇÃO GUIADA
              </Badge>
              <h2 className="font-h1 text-4xl font-bold text-white leading-tight">
                Uma pausa para respirar, desacelerar e recuperar o equilíbrio.
              </h2>
              <p className="text-body-lg text-white/75">
                Técnicas de respiração guiada e mindfulness integradas ao app para momentos de
                ansiedade, estresse ou simplesmente quando você precisa de uma pausa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {breathingFeatures.map((feature) => (
                <div
                  key={feature.icon}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/8 border border-white/12 hover:bg-white/12 transition-colors duration-200"
                >
                  <div className="w-9 h-9 bg-primary-fixed-dim/20 text-primary-fixed-dim rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-body-sm mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-white/65 text-[12px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            className="lg:w-1/2 relative flex items-center justify-center"
            style={{ minHeight: '480px' }}
          >
            {/* Breathing pulse rings */}
            <div
              className="absolute w-[300px] h-[300px] rounded-full border-2 border-primary-fixed/20"
              style={{ animation: 'breathing-pulse 4s ease-in-out infinite' }}
            />
            <div
              className="absolute w-[230px] h-[230px] rounded-full border-2 border-primary-fixed/30"
              style={{ animation: 'breathing-pulse 4s ease-in-out infinite 1.3s' }}
            />
            <div
              className="absolute w-[165px] h-[165px] rounded-full border-2 border-primary-fixed/40"
              style={{ animation: 'breathing-pulse 4s ease-in-out infinite 2.6s' }}
            />

            {/* Phone */}
            <div className="relative z-10">
              <PhoneMockup
                src={BREATHING_PHONE}
                alt="HealthMind respiração guiada"
                size="xl"
                frameVariant="dark"
                glowClass="bg-primary-fixed/15"
              />

              {/* Floating widgets */}
              <FloatingWidget
                icon="air"
                title="Inspire por 4s"
                subtitle="Técnica 4-7-8"
                variant="dark"
                className="-left-32 top-12 hidden md:flex"
                animationDelay="0s"
                animationDuration="6s"
              />
              <FloatingWidget
                icon="self_improvement"
                title="Sessão ativa"
                subtitle="5 min restantes"
                variant="primary"
                className="-right-28 top-24 hidden md:flex"
                animationDelay="1s"
                animationDuration="7s"
              />
              <FloatingWidget
                icon="bedtime"
                title="Relaxamento noturno"
                variant="dark"
                className="-left-28 bottom-20 hidden md:flex"
                animationDelay="2s"
                animationDuration="8s"
              />
              <FloatingWidget
                icon="favorite"
                title="BPM: 72"
                subtitle="Frequência ideal"
                variant="dark"
                className="-right-24 bottom-12 hidden md:flex"
                animationDelay="0.5s"
                animationDuration="6.5s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
