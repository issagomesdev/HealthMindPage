import { SectionHeader } from '@/components/ui/SectionHeader'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { FloatingWidget } from '@/components/ui/FloatingWidget'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { professionalFeatures } from '@/data/professionals'

const PROS_SCHEDULE  = '/images/mockups/professional/schedule.png'
const PROS_REPORTS   = '/images/mockups/professional/reports.png'
const PROS_EVOLUTION = '/images/mockups/professional/evolution.png'
const PROS_DASHBOARD = '/images/mockups/professional/home.png'
const PROS_LEVELS    = '/images/mockups/professional/levels.png'

export default function ForProfessionals() {
  return (
    <section id="for-professionals" className="py-16 serenity-gradient relative overflow-hidden scroll-mt-[60px]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-container-margin relative z-10">
        <SectionHeader
          badge={{ icon: 'medical_services', text: 'PARA PROFISSIONAIS' }}
          title="Organização clínica e gestão inteligente"
          description="Uma plataforma completa para profissionais de saúde mental gerenciarem pacientes, agenda, prontuários e relatórios em um único lugar."
          align="center"
          dark
          className="mb-14"
        />

        <div className="relative flex items-end justify-center mb-14" style={{ minHeight: '520px' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          {/* Far left — same breakpoint as ForPatients outer */}
          <div className="absolute left-[0%] sm:left-[2%] md:left-[4%] bottom-0 z-[5] hidden md:block opacity-85">
            <PhoneMockup src={PROS_SCHEDULE} alt="Agenda" size="sm" rotate={-18} frameVariant="dark" animationDuration="9s" animationDelay="3s" />
          </div>
          {/* Left inner */}
          <div className="absolute left-[15%] sm:left-[18%] md:left-[21%] bottom-0 z-10 hidden sm:block">
            <PhoneMockup src={PROS_REPORTS} alt="Relatórios" size="md" rotate={-10} frameVariant="dark" animationDuration="8s" animationDelay="2s" />
          </div>

          {/* Center phone */}
          <div className="relative z-20">
            <PhoneMockup src={PROS_DASHBOARD} alt="Dashboard profissional" size="xl" frameVariant="dark" glowClass="bg-primary/15" />

            {/* TOP cards */}
            <FloatingWidget icon="groups" title="28 pacientes ativos"
              variant="dark"
              className="flex -left-20 sm:-left-24 md:-left-36 top-4 sm:top-6 md:top-8"
              animationDelay="0s" animationDuration="6s" />
            <FloatingWidget icon="calendar_today" title="5 consultas hoje" subtitle="Próxima às 14h"
              variant="primary"
              className="flex -right-20 sm:-right-16 md:-right-32 top-10 md:top-16"
              animationDelay="1s" animationDuration="7s" />
            <FloatingWidget icon="check_circle" title="Consulta confirmada" subtitle="João A. — 16h"
              variant="secondary"
              className="flex -right-20 sm:-right-20 md:-right-36 -top-2"
              animationDelay="0.8s" animationDuration="9s" />

            {/* BOTTOM cards */}
            <FloatingWidget icon="notifications" title="3 novos alertas" subtitle="Check-ins recebidos"
              variant="dark"
              className="flex left-2 sm:-left-16 md:-left-32 bottom-20 md:bottom-28"
              animationDelay="1.5s" animationDuration="8s" />
            <FloatingWidget icon="insights" title="Relatório semanal" subtitle="Disponível agora"
              variant="dark"
              className="flex right-2 sm:-right-16 md:-right-32 bottom-12 md:bottom-20"
              animationDelay="0.5s" animationDuration="6.5s" />
            <FloatingWidget icon="folder_shared" title="Prontuário atualizado" subtitle="Maria S."
              variant="dark"
              className="flex left-2 sm:-left-28 md:-left-40 bottom-4"
              animationDelay="2s" animationDuration="7.5s" />
          </div>

          {/* Right inner */}
          <div className="absolute right-[15%] sm:right-[18%] md:right-[21%] bottom-0 z-10 hidden sm:block">
            <PhoneMockup src={PROS_EVOLUTION} alt="Evolução" size="md" rotate={10} frameVariant="dark" animationDuration="7s" animationDelay="1s" />
          </div>
          {/* Far right */}
          <div className="absolute right-[0%] sm:right-[2%] md:right-[4%] bottom-0 z-[5] hidden md:block opacity-85">
            <PhoneMockup src={PROS_LEVELS} alt="Níveis" size="sm" rotate={18} frameVariant="dark" animationDuration="8.5s" animationDelay="2.5s" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {professionalFeatures.map((feature) => (
            <FeatureCard key={feature.icon} icon={feature.icon} title={feature.title} description={feature.description} color="primary" variant="dark" />
          ))}
        </div>
      </div>
    </section>
  )
}
