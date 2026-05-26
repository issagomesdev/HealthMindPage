import { SectionHeader } from '@/components/ui/SectionHeader'
import { teamMembers } from '@/data/team'
import { cn } from '@/utils/cn'

const colorConfig = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    hoverBg: 'group-hover:bg-primary',
    hoverText: 'group-hover:text-white',
    border: 'border-primary/20',
    badge: 'bg-primary/10 text-primary',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    hoverBg: 'group-hover:bg-secondary',
    hoverText: 'group-hover:text-white',
    border: 'border-secondary/20',
    badge: 'bg-secondary/10 text-secondary',
  },
  tertiary: {
    bg: 'bg-tertiary/10',
    text: 'text-tertiary',
    hoverBg: 'group-hover:bg-tertiary',
    hoverText: 'group-hover:text-white',
    border: 'border-tertiary/20',
    badge: 'bg-tertiary/10 text-tertiary',
  },
}

export default function Team() {
  const firstThree = teamMembers.slice(0, 3)
  const lastTwo = teamMembers.slice(3)

  return (
    <section
      id="equipe"
      className="py-16 overflow-hidden section-gradient-light"
    >
      <div className="max-w-[1300px] mx-auto px-container-margin">
        <SectionHeader
          badge={{ icon: 'groups', text: 'EQUIPE HEALTHMIND' }}
          title="Desenvolvido com dedicação na UNICAP"
          description="Um projeto acadêmico criado por estudantes apaixonados por tecnologia e saúde mental, com o objetivo de transformar o acesso ao cuidado emocional."
          align="center"
          className="mb-10"
        />

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {firstThree.map((member) => {
            const colors = colorConfig[member.color]
            return (
              <div
                key={member.name}
                className="group flex flex-col items-center text-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Avatar */}
                <div
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl transition-all duration-300',
                    colors.bg,
                    colors.text,
                    colors.hoverBg,
                    colors.hoverText,
                  )}
                >
                  {member.initials}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-h3 text-h3 font-semibold text-on-surface">{member.name}</h3>
                  <p className="text-body-sm text-on-surface-variant">{member.role}</p>
                </div>

                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-label-caps font-semibold border transition-all duration-200 no-underline hover:opacity-80',
                    colors.badge,
                    colors.border,
                  )}
                >
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  LinkedIn
                </a>
              </div>
            )
          })}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8">
          {lastTwo.map((member) => {
            const colors = colorConfig[member.color]
            return (
              <div
                key={member.name}
                className="group flex flex-col items-center text-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Avatar */}
                <div
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl transition-all duration-300',
                    colors.bg,
                    colors.text,
                    colors.hoverBg,
                    colors.hoverText,
                  )}
                >
                  {member.initials}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-h3 text-h3 font-semibold text-on-surface">{member.name}</h3>
                  <p className="text-body-sm text-on-surface-variant">{member.role}</p>
                </div>

                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-label-caps font-semibold border transition-all duration-200 no-underline hover:opacity-80',
                    colors.badge,
                    colors.border,
                  )}
                >
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  LinkedIn
                </a>
              </div>
            )
          })}
        </div>

        {/* Complementary block */}
        <div className="flex flex-col items-center gap-5 p-7 bg-white rounded-3xl shadow-sm border border-outline-variant/20 text-center max-w-2xl mx-auto">
          <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">school</span>
          </div>
          <div>
            <h3 className="font-h3 text-h3 font-semibold text-on-surface mb-2">
              Da ideia ao protótipo
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              O HealthMind foi desenvolvido como projeto acadêmico na UNICAP — Universidade Católica de Pernambuco, durante o Hackathon da 1ª Jornada de Tecnologia, unindo pesquisa, design e tecnologia para criar
              uma solução real para a saúde mental.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-label-caps uppercase tracking-widest font-semibold">
              UNICAP
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-label-caps uppercase tracking-widest font-semibold">
              Pernambuco, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
