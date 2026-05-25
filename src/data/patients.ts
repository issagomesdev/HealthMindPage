export interface PatientFeature {
  icon: string
  title: string
  description: string
  color: 'primary' | 'secondary' | 'tertiary'
}

export const patientFeatures: PatientFeature[] = [
  {
    icon: 'mood',
    title: 'Check-in Emocional Diário',
    description: 'Registre como se sente cada dia com escalas visuais intuitivas e palavras-chave emocionais.',
    color: 'primary',
  },
  {
    icon: 'auto_stories',
    title: 'Diário Emocional',
    description: 'Espaço seguro e privado para escrever pensamentos, sentimentos e reflexões pessoais.',
    color: 'secondary',
  },
  {
    icon: 'spa',
    title: 'Respiração Guiada',
    description: 'Técnicas de respiração e mindfulness para momentos de ansiedade, estresse ou descanso.',
    color: 'tertiary',
  },
  {
    icon: 'air',
    title: 'Meditações e Pausas',
    description: 'Biblioteca de meditações guiadas e micropausas de bem-estar para o dia a dia.',
    color: 'primary',
  },
  {
    icon: 'groups',
    title: 'Comunidade de Apoio',
    description: 'Conecte-se com outras pessoas em jornadas similares em um ambiente seguro e moderado.',
    color: 'secondary',
  },
  {
    icon: 'forum',
    title: 'Comunicação com Profissional',
    description: 'Mensagens seguras e agendamento de consultas diretamente com seu profissional de saúde.',
    color: 'tertiary',
  },
  {
    icon: 'event_available',
    title: 'Agenda de Consultas',
    description: 'Visualize, confirme e receba lembretes de todas as suas consultas e compromissos.',
    color: 'primary',
  },
  {
    icon: 'stars',
    title: 'Gamificação & Conquistas',
    description: 'Ganhe pontos de experiência, desbloqueie conquistas e acompanhe sua evolução com motivação.',
    color: 'secondary',
  },
  {
    icon: 'insights',
    title: 'Relatórios Personalizados',
    description: 'Visualize sua evolução emocional com gráficos, padrões e insights gerados automaticamente.',
    color: 'tertiary',
  },
]
