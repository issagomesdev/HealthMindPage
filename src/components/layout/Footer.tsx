import { useState } from 'react'
import { footerNavLinks, footerResourceLinks } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

type ModalId = 'privacy' | 'terms' | 'contact' | null

function scrollToTeam() {
  const el = document.getElementById('team')
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 56 - 8
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Footer() {
  const downloadUrl = import.meta.env.VITE_APP_DOWNLOAD_URL as string
  const currentYear = new Date().getFullYear()
  const [openModal, setOpenModal] = useState<ModalId>(null)
  const close = () => setOpenModal(null)

  return (
    <>
      <footer className="bg-surface-muted border-t border-outline-variant/30">
        <div className="max-w-[1300px] mx-auto px-container-margin py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <a href="#" className="flex items-center gap-2 no-underline group w-fit">
                <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                  <img src="/logo/white-w-green.png" alt="HealthMind logo" className="w-full h-full object-contain p-0.5" />
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
                {footerResourceLinks.map((link) => {
                  if (link.id === 'privacy' || link.id === 'terms') {
                    return (
                      <li key={link.id}>
                        <button
                          onClick={() => setOpenModal(link.id as 'privacy' | 'terms')}
                          className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-left"
                        >
                          {link.label}
                        </button>
                      </li>
                    )
                  }
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
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
              <button
                onClick={() => setOpenModal('privacy')}
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Privacidade
              </button>
              <span className="text-outline-variant">·</span>
              <button
                onClick={() => setOpenModal('terms')}
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Termos
              </button>
              <span className="text-outline-variant">·</span>
              <button
                onClick={() => setOpenModal('contact')}
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Modal isOpen={openModal === 'privacy'} onClose={close} title="Política de Privacidade">
        <div className="flex flex-col gap-4 text-body-md text-on-surface-variant leading-relaxed">
          <p>
            O HealthMind é um projeto acadêmico desenvolvido para fins demonstrativos durante o
            Hackathon da 1ª Jornada de Tecnologia da UNICAP.
          </p>
          <p>
            Nesta versão de apresentação, não realizamos coleta real, armazenamento ou
            compartilhamento de dados pessoais por meio desta landing page.
          </p>
          <p>
            As telas, informações e recursos exibidos têm finalidade de demonstração do conceito
            do produto.
          </p>
          <p>
            Caso o aplicativo evolua para uma versão pública ou comercial, uma política de
            privacidade completa deverá ser disponibilizada, detalhando coleta, uso, armazenamento,
            segurança e direitos dos usuários conforme a legislação aplicável.
          </p>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal isOpen={openModal === 'terms'} onClose={close} title="Termos de Uso e Responsabilidade">
        <div className="flex flex-col gap-4 text-body-md text-on-surface-variant leading-relaxed">
          <p>
            O HealthMind é uma solução acadêmica e demonstrativa voltada ao apoio da jornada em
            saúde mental.
          </p>
          <p>
            A plataforma não substitui acompanhamento psicológico, psiquiátrico ou qualquer
            atendimento profissional de saúde.
          </p>
          <p>
            Os recursos apresentados — como check-ins emocionais, respiração guiada, comunidade,
            relatórios e acompanhamento — têm caráter complementar e informativo.
          </p>
          <div className="flex items-start gap-3 p-4 bg-error/8 rounded-2xl border border-error/20 mt-1">
            <span className="material-symbols-outlined text-[20px] text-error flex-shrink-0 mt-0.5">emergency</span>
            <p className="text-body-sm text-error font-medium leading-relaxed">
              Em situações de crise, sofrimento intenso ou risco à vida, procure imediatamente um
              profissional qualificado, serviço de emergência ou ligue para o CVV:{' '}
              <strong className="font-bold">188</strong>.
            </p>
          </div>
        </div>
      </Modal>

      {/* Contact Modal */}
      <Modal isOpen={openModal === 'contact'} onClose={close} title="Contato">
        <div className="flex flex-col gap-5 text-body-md text-on-surface-variant leading-relaxed">
          <p>
            O HealthMind foi desenvolvido por uma equipe acadêmica durante o Hackathon da 1ª
            Jornada de Tecnologia da UNICAP.
          </p>

          {/* Contact channels */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contato@byissa.dev"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface-container-low hover:bg-primary/8 hover:text-primary transition-all duration-200 no-underline text-on-surface group"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-label-caps text-on-surface-variant uppercase tracking-widest text-[0.65rem]">E-mail</span>
                <span className="font-semibold text-body-md group-hover:text-primary transition-colors duration-200">contato@byissa.dev</span>
              </span>
            </a>
            <a
              href="https://wa.me/5581991080086"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface-container-low hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all duration-200 no-underline text-on-surface group"
            >
              <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="flex flex-col gap-0.5">
                <span className="text-label-caps text-on-surface-variant uppercase tracking-widest text-[0.65rem]">WhatsApp</span>
                <span className="font-semibold text-body-md group-hover:text-[#25D366] transition-colors duration-200">(81) 99108-0086</span>
              </span>
            </a>
          </div>

          <p className="text-body-sm">
            Ou conheça os perfis dos integrantes diretamente na seção Equipe.
          </p>
          <button
            onClick={() => {
              close()
              setTimeout(() => scrollToTeam(), 150)
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-body-md hover:opacity-90 transition-opacity duration-200 border-none cursor-pointer self-start"
          >
            <span className="material-symbols-outlined text-[18px]">groups</span>
            Ver equipe
          </button>
        </div>
      </Modal>
    </>
  )
}
