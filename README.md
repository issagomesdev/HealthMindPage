# HealthMind Page — Landing Page Oficial

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Status](https://img.shields.io/badge/status-em_desenvolvimento-yellow?style=for-the-badge)

![Preview do site](https://media.byissa.dev/healthmind/page/preview.png)

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#objetivo">Objetivo</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#estrutura">Estrutura</a> •
  <a href="#secoes">Seções</a> •
  <a href="#componentes">Componentes</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deploy">Deploy</a> •
  <a href="#team">Equipe</a> •
  <a href="#related-projects">Projetos relacionados</a> •
  <a href="#licenca">Licença</a>
</p>

Landing page oficial do **HealthMind**, uma plataforma voltada para conectar pacientes e profissionais de saúde mental de forma acessível, acolhedora e humanizada.

O projeto apresenta a proposta, os diferenciais, os recursos do aplicativo, a equipe responsável e o impacto da solução, funcionando como página institucional e vitrine do produto.

<h2 id="sobre">📌 Sobre</h2>

O **HealthMind Page** é a landing page institucional do ecossistema HealthMind.

A página foi desenvolvida para comunicar de forma clara a proposta do projeto: aproximar pacientes e profissionais de saúde mental por meio da tecnologia, oferecendo uma experiência moderna, confiável e emocionalmente segura.

Projeto acadêmico desenvolvido na **UNICAP — Universidade Católica de Pernambuco**, durante a **1ª Jornada de Tecnologia 2026**.

<h2 id="objetivo">🎯 Objetivo</h2>

A landing page tem como objetivo apresentar o HealthMind para usuários, avaliadores, recrutadores e possíveis interessados no produto.

Ela reúne informações sobre:

| Área | Descrição |
|---|---|
| **Produto** | Explicação da proposta e dos principais recursos do HealthMind |
| **Pacientes** | Benefícios voltados para autocuidado, diário emocional, consultas e comunidade |
| **Profissionais** | Recursos para agenda, acompanhamento, relatórios e gestão de pacientes |
| **Tecnologia** | Stack utilizada, arquitetura visual e proposta técnica |
| **Impacto** | Valor social e potencial de apoio contínuo à saúde mental |
| **Equipe** | Integrantes envolvidos na criação, desenvolvimento e apresentação do projeto |

<h2 id="tecnologias">🧪 Tecnologias</h2>

| Tecnologia | Uso |
|---|---|
| React 18 | Construção da interface web |
| TypeScript | Tipagem estática e maior segurança no desenvolvimento |
| Vite 5 | Build tool e ambiente de desenvolvimento rápido |
| Tailwind CSS 3 | Estilização utilitária e responsiva |
| clsx | Composição condicional de classes |
| tailwind-merge | Resolução de conflitos entre classes Tailwind |
| Nginx | Servidor web para produção |
| Docker | Containerização da aplicação |
| Docker Compose | Orquestração dos ambientes de desenvolvimento e produção |

<h2 id="estrutura">📁 Estrutura</h2>

```txt
HealthMindPage/
├── public/                   # Arquivos públicos e estáticos do projeto
├── src/
│   ├── components/
│   │   ├── layout/           # Estrutura da página, como Header e Footer
│   │   ├── sections/         # Seções da página, uma por arquivo
│   │   └── ui/               # Componentes visuais reutilizáveis
│   ├── data/                 # Dados estáticos usados nas seções
│   ├── hooks/                # Hooks personalizados
│   ├── styles/               # Estilos globais do projeto
│   ├── utils/                # Funções utilitárias
│   ├── App.tsx               # Componente principal da aplicação
│   └── main.tsx              # Ponto de entrada da aplicação
├── Dockerfile                # Configuração Docker para desenvolvimento
├── Dockerfile.prod           # Configuração Docker para produção com multi-stage build
├── docker-compose.yml        # Orquestração dos containers em desenvolvimento
├── docker-compose.prod.yml   # Orquestração dos containers em produção
├── nginx.conf                # Configuração do Nginx para servir a aplicação
├── tailwind.config.ts        # Configuração do Tailwind CSS
├── vite.config.ts            # Configuração do Vite
└── tsconfig.json             # Configuração do TypeScript
```

<h2 id="secoes">🧩 Seções da Landing Page</h2>

| ID | Seção | Objetivo |
|---|---|---|
| `#about` | Sobre o Projeto | Apresentar o contexto, origem e proposta do HealthMind |
| `#app-highlights` | Destaques do App | Resumir os principais recursos do aplicativo |
| `#breathing-feature` | Respiração Guiada | Destacar a funcionalidade de respiração e autorregulação emocional |
| `#community` | Comunidade | Mostrar o espaço de acolhimento e troca entre usuários |
| `#for-patients` | Para Pacientes | Apresentar benefícios e recursos do perfil paciente |
| `#for-professionals` | Para Profissionais | Apresentar recursos de gestão, agenda e acompanhamento clínico |
| `#impact` | Impacto | Comunicar o valor social e emocional da solução |
| `#technology` | Tecnologia | Mostrar a stack, diferenciais técnicos e maturidade do produto |
| `#team` | Equipe | Apresentar os integrantes do projeto |

<h2 id="componentes">🧱 Componentes de UI</h2>

| Componente | Descrição |
|---|---|
| `Button` | Botão reutilizável com variantes `primary`, `outline` e `ghost`, com suporte a link |
| `Badge` | Chip visual para destacar seções e categorias |
| `PhoneMockup` | Mockup de celular com efeitos visuais, glow, rotação e animação |
| `FloatingWidget` | Card flutuante animado usado para destacar informações da interface |
| `Modal` | Dialog acessível com overlay, usado em links e informações complementares |
| `FeatureCard` | Card de funcionalidade com ícone, título e descrição |
| `SectionHeader` | Cabeçalho padronizado para seções da página |
| `Carousel` | Carrossel com navegação por setas para exibição de destaques |

<h2 id="getting-started">▶️ Getting Started</h2>

### Pré-requisitos

- Node.js 18+
- npm
- Docker e Docker Compose, caso deseje rodar com containers

### Instalação

```bash
git clone https://github.com/issagomesdev/HealthMindPage.git
cd HealthMindPage
```

### Variáveis de ambiente

Copie o arquivo de exemplo para o ambiente desejado:

```bash
cp .env.example .env.development
# ou
cp .env.example .env.production
```

Edite o arquivo correspondente:

```bash
nano .env.development
# ou
nano .env.production
```

Ajuste as variáveis conforme as configurações do seu ambiente.

### Exemplo de `.env.example`

```env
# Porta exposta pelo Docker Compose
# Exemplo em desenvolvimento: 5173
# Exemplo em produção: 80
APP_PORT=

# Nome da aplicação
VITE_APP_NAME=HealthMind

# Ambiente atual: development ou production
VITE_APP_ENV=production

# URL pública do projeto
VITE_SITE_URL=https://healthmind.com.br

# Caminho ou URL para download do APK
VITE_APP_DOWNLOAD_URL=/download/HEALTHMIND.apk
```

### Rodando localmente

```bash
npm install
npm run dev
```

Acesse:

```txt
http://localhost:5173
```

### Rodando com Docker em desenvolvimento

```bash
docker compose --env-file .env.development up --build

```

Em background:

```bash
docker compose --env-file .env.development up -d --build

```

<h2 id="deploy">🚀 Deploy</h2>

### Produção com Docker Compose

```bash
docker compose --env-file .env.production -f docker-compose.prod.yml up --build -d

## Após subir o container, confira a porta publicada:
docker ps

#Exemplo esperado usando APP_PORT=80:
0.0.0.0:3007->80/tcp
```


### Configuração com Nginx

Exemplo de configuração como reverse proxy:

```nginx
server {
    listen 80;
    server_name url.com.br;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### SSL com Certbot

```bash
sudo certbot --nginx -d seudominio.com.br
```

<h2 id="team">👥 Equipe</h2>

| Nome | Papel | LinkedIn |
|---|---|---|
| Hayssa Gomes | Desenvolvimento Front-end & Produto | [LinkedIn](https://www.linkedin.com/in/issagomesdev) |
| Vitoria Inacia | Produto, Pesquisa & Experiência | [LinkedIn](https://www.linkedin.com/in/vitoria-inacia-0a1086250) |
| Kelvson Nilson | Desenvolvimento & Solução Técnica | [LinkedIn](https://www.linkedin.com/in/kelvson-nilson-129751286/) |
| Leticia Oliveira | Pesquisa, Estratégia & Experiência | [LinkedIn](https://www.linkedin.com/in/-leticiaoliveira/) |
| Arthur Santo | Produto, Tecnologia & Apresentação | [LinkedIn](https://www.linkedin.com/in/arthur-santo-b8651a2b6/) |

<h2 id="related-projects">🔗 Projetos relacionados</h2>

| Projeto | Descrição | Link |
|---|---|---|
| **HealthMind App** | Aplicativo front-end mobile desenvolvido com React Native, Expo e TypeScript | <a href="https://github.com/issagomesdev/HealthMind">Acessar repositório</a> |
| **HealthMind API** | Backend/API do ecossistema HealthMind | <a href="https://github.com/issagomesdev/HealthMind-api">Acessar repositório</a> |

<h2 id="licenca">📄 Licença</h2>

Projeto desenvolvido para fins acadêmicos, demonstração técnica e evolução da plataforma HealthMind.