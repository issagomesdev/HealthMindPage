export interface HighlightCard {
  icon: string
  title: string
  description: string
  color: 'primary' | 'secondary'
}

export const highlightCards: HighlightCard[] = [
  {
    icon: 'psychology',
    title: 'Acompanhamento contínuo',
    description:
      'Registros de humor, diários emocionais e históricos detalhados que acompanham a evolução do paciente ao longo do tempo.',
    color: 'primary',
  },
  {
    icon: 'groups',
    title: 'Conexão entre paciente e profissional',
    description:
      'Canal seguro e humanizado que aproxima pacientes e profissionais de saúde mental, facilitando comunicação e acompanhamento.',
    color: 'secondary',
  },
  {
    icon: 'trending_up',
    title: 'Evolução emocional',
    description:
      'Visualização de progresso emocional com gráficos, insights personalizados e gamificação para engajar o autocuidado.',
    color: 'primary',
  },
  {
    icon: 'calendar_month',
    title: 'Gestão inteligente para profissionais',
    description:
      'Agenda integrada, prontuários digitais, lembretes automáticos e relatórios de evolução para otimizar a prática clínica.',
    color: 'secondary',
  },
  {
    icon: 'self_improvement',
    title: 'Recursos de autocuidado',
    description:
      'Exercícios de respiração guiada, meditações, leituras e ferramentas de bem-estar para uso diário pelos pacientes.',
    color: 'primary',
  },
  {
    icon: 'eco',
    title: 'Experiência humanizada',
    description:
      'Design acolhedor, linguagem empática e fluxos intuitivos que tornam a saúde mental mais acessível e menos intimidante.',
    color: 'primary',
  },
]
