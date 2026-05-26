import { footerNavLinks, footerResourceLinks } from '@/data/navigation'
import { Button } from '@/components/ui/Button'

export default function Footer() {
  const downloadUrl = import.meta.env.VITE_APP_DOWNLOAD_URL as string
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-muted border-t border-outline-variant/30">
      <div className="max-w-[1300px] mx-auto px-container-margin py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2 no-underline group w-fit">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-white text-[20px]">favorite</span>
              </div>
              <span className="font-h1 font-bold text-xl text-on-surface">HealthMind</span>
            </a>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Uma plataforma mobile que conecta pacientes e profissionais de saúde mental, tornando
              o cuidado emocional mais acessível, organizado e humanizado.
            </p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-label-caps rounded-full border border-primary/20">
                UNICAP 2026
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-label-caps rounded-full border border-secondary/20">
                Projeto Acadêmico
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-h3 text-h3 font-semibold text-on-surface">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-h3 text-h3 font-semibold text-on-surface">Recursos</h4>
            <ul className="flex flex-col gap-2.5">
              {footerResourceLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-5">
            <h4 className="font-h3 text-h3 font-semibold text-on-surface">Experimente Agora</h4>
            <p className="text-body-sm text-on-surface-variant">
              Baixe o aplicativo HealthMind e comece sua jornada de cuidado emocional hoje mesmo.
            </p>
            <Button href={downloadUrl} variant="primary" size="md">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Baixar o APP
            </Button>
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-primary">android</span>
              <span>Disponível para Android</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-on-surface-variant text-center sm:text-left">
            © {currentYear} HealthMind. Projeto acadêmico desenvolvido na UNICAP — Universidade
            Católica de Pernambuco.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
            >
              Privacidade
            </a>
            <span className="text-outline-variant">·</span>
            <a
              href="#"
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
            >
              Termos
            </a>
            <span className="text-outline-variant">·</span>
            <a
              href="#"
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
