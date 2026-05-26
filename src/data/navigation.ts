export interface NavLink {
  id: string
  label: string
  href: string
  activeIds: string[]
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    label: 'Sobre',
    href: '#about',
    activeIds: ['about'],
  },
  {
    id: 'app-highlights',
    label: 'Destaques',
    href: '#app-highlights',
    // Active across Destaques → Respiração → Comunidade
    activeIds: ['app-highlights', 'breathing-feature', 'community'],
  },
  {
    id: 'for-patients',
    label: 'Pacientes',
    href: '#for-patients',
    activeIds: ['for-patients'],
  },
  {
    id: 'for-professionals',
    label: 'Profissionais',
    href: '#for-professionals',
    activeIds: ['for-professionals'],
  },
  {
    id: 'technology',
    label: 'Tecnologia',
    href: '#impact',
    // Scrolls to Impacto, stays active through Tecnologia & Performance
    activeIds: ['impact', 'technology'],
  },
  {
    id: 'equipe',
    label: 'Equipe',
    href: '#equipe',
    activeIds: ['equipe'],
  },
]

// All section ids observed by useActiveSection, in page (top-to-bottom) order.
// Hero has no entry — hook returns null when above the first section.
export const observedSectionIds = [
  'about',
  'app-highlights',
  'breathing-feature',
  'community',
  'for-patients',
  'for-professionals',
  'impact',
  'technology',
  'equipe',
] as const

export interface FooterNavLink {
  id: string
  label: string
  href: string
}

export const footerNavLinks: FooterNavLink[] = [
  { id: 'about',            label: 'Sobre o Projeto',    href: '#about' },
  { id: 'app-highlights',   label: 'Destaques',          href: '#app-highlights' },
  { id: 'for-patients',     label: 'Para Pacientes',     href: '#for-patients' },
  { id: 'for-professionals',label: 'Para Profissionais', href: '#for-professionals' },
  { id: 'technology',       label: 'Tecnologia',         href: '#technology' },
  { id: 'equipe',           label: 'Equipe',             href: '#equipe' },
]

export const footerResourceLinks: FooterNavLink[] = [
  { id: 'breathing',  label: 'Respiração Guiada', href: '#breathing-feature' },
  { id: 'community',  label: 'Comunidade',        href: '#community' },
  { id: 'impact',     label: 'Nosso Impacto',     href: '#impact' },
  { id: 'privacy',    label: 'Privacidade',        href: '#' },
  { id: 'terms',      label: 'Termos de Uso',     href: '#' },
]
