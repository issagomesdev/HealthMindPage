import { SectionHeader } from '@/components/ui/SectionHeader'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { FloatingWidget } from '@/components/ui/FloatingWidget'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { patientFeatures } from '@/data/patients'

const PATIENTS_CENTER      = '/images/mockups/patient/home.png'
const PATIENTS_GAMIFICATION = '/images/mockups/patient/levels.png'
const PATIENTS_CHECKIN     = '/images/mockups/patient/checkin.png'
const PATIENTS_COMMUNITY   = '/images/mockups/patient/new_post.png'
const PATIENTS_BREATHING   = '/images/mockups/patient/breathing.png'

export default function ForPatients() {
  return (
    <section id="for-patients" className="py-16 bg-gradient-to-br from-surface-container-low to-background overflow-hidden scroll-mt-[60px]">
      <div className="max-w-[1300px] mx-auto px-container-margin">
        <SectionHeader
          badge={{ icon: 'person', text: 'PARA PACIENTES' }}
          title="Autocuidado, acompanhamento emocional e suporte contínuo"
          description="Todas as ferramentas que você precisa para cuidar da sua saúde mental de forma organizada, motivadora e acessível."
          align="center"
          className="mb-16"
        />

        <div className="relative flex items-end justify-center mb-14" style={{ minHeight: '560px' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          {/* Side phones — left */}
          <div className="absolute left-[0%] md:left-[1%] lg:left-[5%] bottom-0 z-[5] hidden md:block">
            <PhoneMockup src={PATIENTS_BREATHING} alt="Respiração" size="sm" rotate={-16} animationDuration="8s" animationDelay="2s" />
          </div>
          <div className="absolute left-[15%] md:left-[18%] lg:left-[21%] bottom-0 z-10 hidden sm:block">
            <PhoneMockup src={PATIENTS_COMMUNITY} alt="Comunidade" size="md" rotate={-9} animationDuration="7s" animationDelay="1s" />
          </div>

          {/* Center phone */}
          <div className="relative z-20">
            <PhoneMockup src={PATIENTS_CENTER} alt="HealthMind para pacientes" size="xl" glowClass="bg-primary/20" />

            {/* TOP cards */}
            <FloatingWidget icon="mood" title="Como você está?" subtitle="Check-in diário"
              variant="light"
              className="flex -left-20 sm:-left-24 md:-left-36 top-4 sm:top-6 md:top-8"
              animationDelay="0s" animationDuration="6s" />
            <FloatingWidget icon="stars" title="+50 XP ganhos!" subtitle="Nível 5 desbloqueado"
              variant="primary"
              className="flex right-0 sm:-right-16 md:-right-32 top-10 md:top-16"
              animationDelay="1s" animationDuration="7s" />
            <FloatingWidget icon="spa" title="Meditação concluída" subtitle="10 minutos"
              variant="light"
              className="flex right-0 sm:-right-20 md:-right-36 -top-2"
              animationDelay="0.8s" animationDuration="9s" />

            {/* BOTTOM cards */}
            <FloatingWidget icon="auto_stories" title="Diário atualizado" subtitle="Há 2 horas"
              variant="light"
              className="flex left-2 sm:-left-16 md:-left-32 bottom-20 sm:bottom-16 md:bottom-24"
              animationDelay="1.5s" animationDuration="8s" />
            <FloatingWidget icon="calendar_today" title="Próxima consulta" subtitle="Sexta às 15h"
              variant="secondary"
              className="flex right-2 sm:-right-12 md:-right-28 bottom-8 md:bottom-16"
              animationDelay="0.5s" animationDuration="6.5s" />
            <FloatingWidget icon="insights" title="Semana positiva!" subtitle="Humor médio: 8.2"
              variant="light"
              className="flex left-2 sm:-left-28 md:-left-40 bottom-4"
              animationDelay="2s" animationDuration="7.5s" />
          </div>

          {/* Side phones — right */}
          <div className="absolute right-[15%] md:right-[18%] lg:right-[21%] bottom-0 z-10 hidden sm:block">
            <PhoneMockup src={PATIENTS_CHECKIN} alt="Check-in" size="md" rotate={9} animationDuration="7s" animationDelay="0.5s" />
          </div>
          <div className="absolute right-[0%] md:right-[1%] lg:right-[5%] bottom-0 z-[5] hidden md:block">
            <PhoneMockup src={PATIENTS_GAMIFICATION} alt="Gamificação" size="sm" rotate={16} animationDuration="8s" animationDelay="3s" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {patientFeatures.map((feature) => (
            <FeatureCard key={feature.icon} icon={feature.icon} title={feature.title} description={feature.description} color={feature.color} variant="light" />
          ))}
        </div>
      </div>
    </section>
  )
}
