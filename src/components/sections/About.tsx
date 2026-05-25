import { Badge } from '@/components/ui/Badge'
import { FloatingWidget } from '@/components/ui/FloatingWidget'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { aboutFeatures } from '@/data/about'

const ABOUT_PHONE =
  '/images/mockups/professional/message.png'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-container-margin">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Visual */}
          <div
            className="lg:w-1/2 relative flex items-center justify-center order-2 lg:order-1"
            style={{ minHeight: '480px' }}
          >
            {/* Outer ambient glow */}
            <div className="absolute w-[380px] h-[380px] bg-primary-fixed/8 rounded-full blur-[100px] pointer-events-none" />
            {/* Inner spotlight */}
            <div className="absolute w-[185px] h-[185px] bg-primary-fixed/12 rounded-full blur-[60px] pointer-events-none" />

            {/* Phone mockup */}
            <div className="relative z-10">
              <PhoneMockup
                src={ABOUT_PHONE}
                alt="HealthMind sobre o projeto"
                size="xl"
                glowClass="bg-primary-fixed/15"
              />

              {/* Floating widgets */}
              <FloatingWidget
                icon="mood"
                title="Como você está hoje?"
                subtitle="Check-in diário"
                variant="light"
                className="-left-36 top-12 hidden md:flex"
                animationDelay="0s"
                animationDuration="6s"
              />
              <FloatingWidget
                icon="psychology"
                title="Sessão agendada"
                subtitle="Amanhã às 14h"
                variant="primary"
                className="-right-32 top-24 hidden md:flex"
                animationDelay="1s"
                animationDuration="7s"
              />
              <FloatingWidget
                icon="trending_up"
                title="Evolução +12%"
                subtitle="Esta semana"
                variant="secondary"
                className="-left-28 bottom-20 hidden md:flex"
                animationDelay="1.5s"
                animationDuration="6.5s"
              />
              <FloatingWidget
                icon="lock"
                title="100% Seguro"
                subtitle="Dados criptografados"
                variant="light"
                className="-right-28 bottom-10 hidden md:flex"
                animationDelay="0.5s"
                animationDuration="8s"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <Badge icon="info">SOBRE O PROJETO</Badge>
              <h2 className="font-h1 text-h1 font-bold text-on-surface text-4xl leading-tight">
                Cuidado Humanizado & Acessível
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                O HealthMind nasceu da necessidade real de tornar o cuidado com a saúde mental mais
                próximo, organizado e humano. Desenvolvido como projeto acadêmico na UNICAP, une
                tecnologia moderna com design empático para criar uma experiência que realmente
                importa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {aboutFeatures.map((feature) => (
                <div
                  key={feature.icon}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface text-body-md mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-body-sm text-on-surface-variant">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
