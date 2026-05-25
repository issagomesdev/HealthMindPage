export interface TechPoint {
  icon: string
  title: string
  description: string
}

export interface StackLayer {
  label: string
  tech: string
  colorVariant: 'primary' | 'secondary' | 'tertiary'
}

export interface TechAttribute {
  icon: string
  title: string
  description: string
}

export const techPoints: TechPoint[] = [
  {
    icon: 'security',
    title: 'Segurança e Privacidade',
    description: 'Autenticação JWT, criptografia de dados sensíveis e boas práticas de segurança em toda a camada de API.',
  },
  {
    icon: 'speed',
    title: 'Performance Otimizada',
    description: 'Arquitetura RESTful com Fastify, queries otimizadas com Prisma ORM e cache eficiente para máxima velocidade.',
  },
  {
    icon: 'code',
    title: 'Código Limpo e Escalável',
    description: 'TypeScript em toda a stack, validação com Zod, testes com Vitest e documentação automática com Swagger.',
  },
]

export const stackLayers: StackLayer[] = [
  { label: 'App Mobile', tech: 'React Native + Expo', colorVariant: 'primary' },
  { label: 'Design System', tech: 'NativeWind', colorVariant: 'tertiary' },
  { label: 'API', tech: 'Node.js + Fastify', colorVariant: 'secondary' },
  { label: 'Banco de Dados', tech: 'Prisma + PostgreSQL', colorVariant: 'primary' },
  { label: 'Documentação', tech: 'Swagger + OpenAPI', colorVariant: 'tertiary' },
]

export const techAttributes: TechAttribute[] = [
  {
    icon: 'bolt',
    title: 'Performance',
    description: 'Respostas rápidas e experiência fluida em todas as interações.',
  },
  {
    icon: 'lock',
    title: 'Segurança',
    description: 'Dados protegidos com criptografia e autenticação robusta.',
  },
  {
    icon: 'build',
    title: 'Manutenção',
    description: 'Código tipado, testado e documentado para facilitar evoluções.',
  },
  {
    icon: 'trending_up',
    title: 'Escalabilidade',
    description: 'Arquitetura preparada para crescer junto com a demanda.',
  },
]
