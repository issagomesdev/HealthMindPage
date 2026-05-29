import { Badge } from '@/components/ui/Badge'
import { FloatingWidget } from '@/components/ui/FloatingWidget'
import { PhoneMockup } from '@/components/ui/PhoneMockup'

const COMMUNITY_PHONE = '/images/mockups/community.png'

export default function Community() {
  return (
    <section id="community" className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-container-margin">
        {/*
          Mobile  (<lg): intro(order-1) → visual(order-2) → cards(order-3)
          Desktop (≥lg): flex-row — visual left | intro + cards right (original layout)
          Intro is duplicated: lg:hidden version for mobile, hidden lg:flex version for desktop.
        */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          {/* ── Mobile intro — hidden on desktop ── */}
          <div className="lg:hidden order-1 flex flex-col gap-4">
            <Badge icon="groups">COMUNIDADE</Badge>
            <h2 className="font-h1 text-h1 font-bold text-on-surface text-4xl leading-tight">
              Uma comunidade construída para acolher
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              No HealthMind, você não está sozinho. Nossa comunidade foi criada para que pacientes
              possam compartilhar experiências, se apoiar mutuamente e celebrar conquistas em um
              ambiente seguro, moderado e empático.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Participe de grupos temáticos, compartilhe suas conquistas de autocuidado, encontre
              pessoas que entendem o que você está passando e construa vínculos que fortalecem sua
              jornada de saúde mental.
            </p>
          </div>

          {/* ── Visual — order-2 mobile, left column desktop ── */}
          <div className="order-2 lg:order-none lg:w-1/2 relative flex items-center justify-center" style={{ minHeight: '480px' }}>
            <div className="absolute w-[380px] h-[380px] bg-primary-fixed/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute w-[185px] h-[185px] bg-primary-fixed/12 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <PhoneMockup src={COMMUNITY_PHONE} alt="HealthMind comunidade" size="xl" glowClass="bg-primary-fixed/15" />

              <FloatingWidget icon="groups" title="Comunidade ativa" subtitle="1.2k membros"
                variant="light"
                className="flex -left-10 sm:-left-20 md:-left-20 top-[22%] md:top-[22%]"
                animationDelay="0.5s" animationDuration="6s" />

              <FloatingWidget icon="forum" title="Nova mensagem" subtitle="Ana compartilhou algo"
                variant="secondary"
                className="flex -right-8 sm:-right-16 md:-right-28 top-12 md:top-20"
                animationDelay="1s" animationDuration="7s" />

              <FloatingWidget icon="favorite" title="24 curtidas" subtitle="No seu post"
                variant="light"
                className="flex -left-10 sm:-left-16 md:-left-32 bottom-[19%] sm:bottom-[20%] md:bottom-[17%]"
                animationDelay="1.5s" animationDuration="8s" />

              <FloatingWidget icon="celebration" title="Conquista partilhada!"
                variant="light"
                className="flex -left-6 sm:-left-20 md:-left-38 bottom-[12%] sm:bottom-16"
                animationDelay="2s" animationDuration="7.5s" />

              <FloatingWidget icon="shield" title="Ambiente seguro" subtitle="Moderação ativa"
                variant="primary"
                className="flex -right-10 sm:-right-12 md:-right-24 bottom-40 md:bottom-24"
                animationDelay="0.5s" animationDuration="6.5s" />
            </div>
          </div>

          {/* ── Right column — order-3 mobile, right column desktop ── */}
          <div className="order-3 lg:order-none lg:w-1/2 flex flex-col gap-8">

            {/* Desktop intro — hidden on mobile (shown in block above) */}
            <div className="hidden lg:flex flex-col gap-4">
              <Badge icon="groups">COMUNIDADE</Badge>
              <h2 className="font-h1 text-h1 font-bold text-on-surface text-4xl leading-tight">
                Uma comunidade construída para acolher
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                No HealthMind, você não está sozinho. Nossa comunidade foi criada para que pacientes
                possam compartilhar experiências, se apoiar mutuamente e celebrar conquistas em um
                ambiente seguro, moderado e empático.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Participe de grupos temáticos, compartilhe suas conquistas de autocuidado, encontre
                pessoas que entendem o que você está passando e construa vínculos que fortalecem sua
                jornada de saúde mental.
              </p>
            </div>

            {/* Feature cards — always visible */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'security', title: 'Espaço Seguro',    desc: 'Moderação ativa e regras claras de respeito' },
                { icon: 'groups',   title: 'Grupos Temáticos', desc: 'Comunidades por temas e experiências' },
                { icon: 'stars',    title: 'Conquistas',       desc: 'Celebre marcos da sua jornada de cuidado' },
                { icon: 'support',  title: 'Suporte Mútuo',    desc: 'Apoio genuíno de pessoas que entendem' },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-3 p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors duration-200">
                  <div className="w-9 h-9 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface text-body-sm">{item.title}</h4>
                    <p className="text-on-surface-variant text-[12px]">{item.desc}</p>
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
