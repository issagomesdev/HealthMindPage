export interface NavLink {
  id: string
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'app-highlights', label: 'Destaques', href: '#app-highlights' },
  { id: 'for-patients', label: 'Pacientes', href: '#for-patients' },
  { id: 'for-professionals', label: 'Profissionais', href: '#for-professionals' },
  { id: 'technology', label: 'Tecnologia', href: '#technology' },
  { id: 'equipe', label: 'Equipe', href: '#equipe' },
]

export const footerNavLinks: NavLink[] = [
  { id: 'about', label: 'Sobre o Projeto', href: '#about' },
  { id: 'app-highlights', label: 'Destaques', href: '#app-highlights' },
  { id: 'for-patients', label: 'Para Pacientes', href: '#for-patients' },
  { id: 'for-professionals', label: 'Para Profissionais', href: '#for-professionals' },
  { id: 'impact', label: 'Impacto', href: '#impact' },
  { id: 'technology', label: 'Tecnologia', href: '#technology' },
  { id: 'equipe', label: 'Equipe', href: '#equipe' },
]

export const footerResourceLinks: NavLink[] = [
  { id: 'breathing', label: 'Respiração Guiada', href: '#breathing-feature' },
  { id: 'community', label: 'Comunidade', href: '#community' },
  { id: 'impact', label: 'Nosso Impacto', href: '#impact' },
  { id: 'privacy', label: 'Privacidade', href: '#' },
  { id: 'terms', label: 'Termos de Uso', href: '#' },
]
