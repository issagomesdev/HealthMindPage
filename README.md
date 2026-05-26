# HealthMind — Landing Page

Landing page oficial do **HealthMind**, uma plataforma mobile que conecta pacientes e profissionais de saúde mental, tornando o cuidado emocional mais acessível, organizado e humanizado.

Projeto acadêmico desenvolvido na **UNICAP — Universidade Católica de Pernambuco**.

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Estilização | Tailwind CSS 3 |
| Utilitários | clsx + tailwind-merge |
| Web Server | Nginx (produção) |
| Container | Docker + Docker Compose |

---

## Estrutura de Pastas

```
HealtMindPage/
├── public/        
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/              # Dados estáticos das seções
│   ├── hooks/             # Custom hooks (useCarousel)
│   ├── styles/            # globals.css com Tailwind
│   ├── utils/             # cn() utility
│   ├── App.tsx
│   └── main.tsx
├── Dockerfile             # Dev
├── Dockerfile.prod        # Produção multi-stage
├── docker-compose.yml
├── docker-compose.prod.yml
├── nginx.conf
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## Como Começar 

### Ambiente de Desenvolvimento

```bash
# Construir e iniciar o container
docker-compose up --build

# Em background
docker-compose up -d --build
```

Acesse: [http://localhost:5173](http://localhost:5173)

### Ambiente de Produção

```bash
# Construir e iniciar com Nginx
docker-compose -f docker-compose.prod.yml up --build -d
```

Acesse: [http://localhost](http://localhost)

---

## Deploy em VPS

### Passo a passo

1. **Clone o repositório na VPS:**
   ```bash
   git clone <seu-repositorio> healthmind-web
   cd healthmind-web
   ```

2. **Configure as variáveis de produção:**
   ```bash
   cp .env.example .env.production
   nano .env.production
   # Edite VITE_SITE_URL com seu domínio real
   ```

3. **Build e subida com Docker:**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build -d
   ```

4. **Configure o Nginx como reverse proxy (opcional se usar porta 80 diretamente):**
   ```nginx
   server {
       listen 80;
       server_name seudominio.com.br;
       location / {
           proxy_pass http://localhost:80;
       }
   }
   ```

5. **SSL com Certbot:**
   ```bash
   sudo certbot --nginx -d seudominio.com.br
   ```

---

## Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `VITE_APP_NAME` | Nome do app | `HealthMind` |
| `VITE_APP_ENV` | Ambiente | `development` / `production` |
| `VITE_SITE_URL` | URL base do site | `https://healthmind.com.br` |
| `VITE_APP_DOWNLOAD_URL` | Caminho do APK | `/download/HEALTHMIND.apk` |

Copie `.env.example` para `.env.development` ou `.env.production` e ajuste os valores.

---

## Onde Colocar o APK

Coloque o arquivo `HEALTHMIND.apk` na pasta:

```
public/download/HEALTHMIND.apk
```

O botão "Baixar APP" e "Download App" na interface irão apontar para `/download/HEALTHMIND.apk` automaticamente.

---

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev               # Inicia servidor dev na porta 5173
npm run build             # Build de produção (TypeScript + Vite)
npm run preview           # Preview do build de produção
npm run lint              # Lint com ESLint

# Docker
docker-compose up -d                              # Dev em background
docker-compose down                               # Para containers dev
docker-compose -f docker-compose.prod.yml up -d  # Produção
docker-compose -f docker-compose.prod.yml down   # Para produção
docker-compose logs -f healthmind-web             # Ver logs

# Build manual da imagem
docker build -t healthmind-web .                  # Dev
docker build -f Dockerfile.prod -t healthmind-web:prod .  # Prod
```

---

## Seções da Landing Page

| ID | Seção |
|----|-------|
| `#about` | Sobre o Projeto |
| `#app-highlights` | Destaques do App |
| `#breathing-feature` | Respiração Guiada |
| `#community` | Comunidade |
| `#for-patients` | Para Pacientes |
| `#for-professionals` | Para Profissionais |
| `#impact` | Impacto |
| `#technology` | Tecnologia |
| `#equipe` | Equipe |

---

## Equipe

| Nome | Papel |
|------|-------|
| Hayssa Gomes | Desenvolvimento Front-end & Produto |
| Vitoria Inacia | Produto, Pesquisa & Experiência |
| Kelvson Nilson | Desenvolvimento & Solução Técnica |
| Leticia Oliveira | Pesquisa, Estratégia & Experiência |
| Arthur Santo | Produto, Tecnologia & Apresentação |

---

*Projeto acadêmico — UNICAP 2026*
