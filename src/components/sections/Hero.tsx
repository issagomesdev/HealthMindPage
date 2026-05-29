import { Button } from '@/components/ui/Button'
import { FloatingWidget } from '@/components/ui/FloatingWidget'
import { PhoneMockup } from '@/components/ui/PhoneMockup'

const HERO_CENTER = '/images/mockups/professional/home.png'
const HERO_LEFT = '/images/mockups/professional/levels.png'
const HERO_RIGHT = '/images/mockups/community.png'

export default function Hero() {
  const downloadUrl = import.meta.env.VITE_APP_DOWNLOAD_URL as string

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-surface-container-low via-background to-surface-container-low pt-16">
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[320px] h-[320px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-container-margin w-full py-8 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">

          {/* ── Content ── */}
          <div className="lg:w-[48%] flex flex-col gap-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[0.62rem] uppercase tracking-widest font-semibold self-center lg:self-start w-fit">
              <span className="material-symbols-outlined text-[10px]">favorite</span>
              Saúde Mental Acessível
            </div>
            <h1 className="font-h1 text-3xl md:text-[2.6rem] lg:text-[2.8rem] font-bold text-on-surface leading-[1.1] tracking-tight">
              HealthMind{' '}
              <span className="text-primary">— Conectando</span> pacientes e profissionais de saúde mental
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Uma plataforma mobile que torna o cuidado emocional mais acessível, organizado e
              humanizado, para pacientes e profissionais de saúde mental.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button href={downloadUrl} variant="primary" size="lg">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Baixar APP
              </Button>
              <Button href="#app-highlights" variant="outline" size="lg">
                Ver funcionalidades
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </div>
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-1">
              {['Gratuito para baixar', 'Seguro e privado', 'Android'].map((label) => (
                <div key={label} className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Mockup cluster ── */}
          <div className="lg:w-[52%] relative flex items-center justify-center" style={{ minHeight: '560px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-primary/12 rounded-full blur-[80px] pointer-events-none" />

            <div className="absolute left-[-70%] lg:left-[2%] md:left-[-80%] bottom-8 z-10 hidden sm:block opacity-90">
              <PhoneMockup src={HERO_LEFT} alt="HealthMind — tela de níveis" size="md" rotate={-13} animationDuration="8s" animationDelay="1s" />
            </div>
            <div className="absolute right-[-70%] lg:right-[2%] md:right-[-80%] bottom-8 z-10 hidden sm:block opacity-90">
              <PhoneMockup src={HERO_RIGHT} alt="HealthMind — tela de comunidade" size="md" rotate={13} animationDuration="7s" animationDelay="2s" />
            </div>

            <div className="relative z-20">
              <PhoneMockup src={HERO_CENTER} alt="HealthMind — tela principal" size="xl" glowClass="bg-primary/20" />

              {/* Agenda */}
              <FloatingWidget icon="calendar_today" title="Agenda inteligente" subtitle="3 consultas hoje"
                variant="light"
                className="flex -left-10 sm:-left-40 md:-left-40 top-20 sm:top-8 md:top-10"
                animationDelay="0.5s" animationDuration="6s" />

              {/* Conquistas */}
              <FloatingWidget icon="stars" title="+30 XP" subtitle="Conquista desbloqueada!"
                variant="secondary"
                className="flex -right-10 sm:-right-20 md:-right-36 top-[60%] md:top-1/2"
                animationDelay="2s" animationDuration="6.5s" />

              {/* Check-in */}
              <FloatingWidget icon="check_circle" title="Check-in concluído" subtitle="Hoje às 08:30"
                variant="primary"
                className="flex -right-10 sm:-right-16 md:-right-30 top-[5%] md:top-[42%]"
                animationDelay="1s" animationDuration="7s" />

              {/* Consulta */}
              <FloatingWidget icon="schedule" title="Consulta em 15 min"
                variant="light"
                className="flex -left-10 md:-left-32 bottom-[18%]"
                animationDelay="0.5s" animationDuration="8s" />

              {/* Dashboard */}
              <FloatingWidget icon="dashboard" title="Dashboard personalizado"
                variant="light"
                className="flex -left-8 sm:-left-32 md:-left-40 bottom-16 md:bottom-16"
                animationDelay="1s" animationDuration="7.5s" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
