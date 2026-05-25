export interface ComparisonItem {
  text: string
}

export interface ImpactPillar {
  icon: string
  title: string
  description: string
}

export const beforeItems: ComparisonItem[] = [
  { text: 'Dificuldade de acesso a profissionais de saúde mental' },
  { text: 'Registros manuais e fragmentados do paciente' },
  { text: 'Comunicação limitada entre consultas' },
  { text: 'Falta de continuidade no acompanhamento' },
  { text: 'Gestão de agenda manual e desorganizada' },
  { text: 'Sem visibilidade da evolução emocional' },
]

export const afterItems: ComparisonItem[] = [
  { text: 'Conexão direta e acessível com profissionais qualificados' },
  { text: 'Prontuário digital integrado e sempre atualizado' },
  { text: 'Comunicação segura e contínua via plataforma' },
  { text: 'Acompanhamento contínuo com check-ins diários' },
  { text: 'Agenda inteligente com confirmações automáticas' },
  { text: 'Relatórios e gráficos de evolução emocional' },
]

export const impactPillars: ImpactPillar[] = [
  {
    icon: 'open_in_new',
    title: 'Acesso',
    description: 'Democratiza o acesso à saúde mental conectando pacientes a profissionais de forma simples e direta.',
  },
  {
    icon: 'loop',
    title: 'Continuidade',
    description: 'Garante acompanhamento contínuo com registros diários, comunicação ativa e histórico completo.',
  },
  {
    icon: 'center_focus_strong',
    title: 'Clareza',
    description: 'Fornece insights claros sobre a evolução emocional com gráficos, padrões e relatórios personalizados.',
  },
  {
    icon: 'favorite',
    title: 'Humanização',
    description: 'Coloca o cuidado humano no centro, com design empático e experiências acolhedoras para todos.',
  },
]
