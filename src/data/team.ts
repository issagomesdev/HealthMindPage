export interface TeamMember {
  name: string
  initials: string
  role: string
  linkedIn: string
  color: 'primary' | 'secondary' | 'tertiary'
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Hayssa Gomes',
    initials: 'HG',
    role: 'Desenvolvimento Front-end & Produto',
    linkedIn: 'https://www.linkedin.com/in/issagomesdev',
    color: 'primary',
  },
  {
    name: 'Vitoria Inacia',
    initials: 'VI',
    role: 'Produto, Pesquisa & Experiência',
    linkedIn: 'https://www.linkedin.com/in/vitoria-inacia-0a1086250',
    color: 'secondary',
  },
  {
    name: 'Kelvson Nilson',
    initials: 'KN',
    role: 'Desenvolvimento & Solução Técnica',
    linkedIn: 'https://www.linkedin.com/in/kelvson-nilson-129751286/',
    color: 'tertiary',
  },
  {
    name: 'Leticia Oliveira',
    initials: 'LO',
    role: 'Pesquisa, Estratégia & Experiência',
    linkedIn: 'https://www.linkedin.com/in/-leticiaoliveira/',
    color: 'primary',
  },
  {
    name: 'Arthur Santo',
    initials: 'AS',
    role: 'Produto, Tecnologia & Apresentação',
    linkedIn: 'https://www.linkedin.com/in/arthur-santo-b8651a2b6/',
    color: 'secondary',
  },
]
