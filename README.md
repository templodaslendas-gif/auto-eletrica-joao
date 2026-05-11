# Auto Elétrica e Mecânica do João — Bosch Car Service

Site institucional premium em React + Vite + Tailwind CSS.
Arquitetura **white-label**: troque empresa, cores e conteúdo editando apenas `src/config/config.js`.

---

## 🚀 Setup local

```bash
npm install
npm run dev
```

Acessa em `http://localhost:5173`.

## 🏗️ Build produção

```bash
npm run build
npm run preview
```

## ☁️ Deploy Vercel (zero-config)

1. Suba o projeto no GitHub.
2. No Vercel, clique em **New Project → Import** e selecione o repo.
3. Vercel detecta Vite automaticamente. Deploy.

Ou via CLI:
```bash
npx vercel
```

---

## 🎨 Como customizar (WHITE-LABEL)

### 1. Trocar dados da empresa
Edite `src/config/config.js` — **único arquivo que precisa mexer** para:
- Nome, slogan, sub-brand
- WhatsApp, telefone, endereço, horários
- Lista de serviços (texto + imagens)
- Avaliações
- Diferenciais
- SEO (título, descrição, keywords)

### 2. Trocar cores (mudança de marca)
Edite `tailwind.config.js` — paleta `bosch`:
```js
bosch: {
  red: '#E2001A',       // CTAs, destaques
  blue: '#0073B5',      // links secundários
  'blue-deep': '#003B5C', // backgrounds escuros
  graphite: '#1A1D21',  // texto principal
}
```

### 3. Trocar imagens
- **Hero**: `config.hero.imagem`
- **Sobre**: `config.sobre.imagem`
- **Serviços**: `config.servicos[].imagem`
- **Galeria**: `config.galeria[].url`

> Placeholders atuais são do Unsplash. Substituir por fotos reais da oficina (formato WebP, otimizadas, max ~200kb).

### 4. SEO local
- `index.html` → meta tags + JSON-LD `AutoRepair` (schema.org)
- Atualizar coordenadas em `config.contato.endereco.lat/lng`
- Atualizar URL do embed em `config.contato.endereco.mapsEmbedUrl`

---

## 📁 Estrutura

```
src/
├── config/
│   └── config.js          ← ÚNICO arquivo para customizar conteúdo
├── components/
│   ├── Header.jsx
│   ├── Logo.jsx
│   └── WhatsAppFloat.jsx
├── sections/
│   ├── Hero.jsx
│   ├── Servicos.jsx
│   ├── Sobre.jsx
│   ├── Galeria.jsx
│   ├── Avaliacoes.jsx
│   ├── Diferenciais.jsx
│   ├── CTAFinal.jsx
│   ├── Contato.jsx
│   └── Footer.jsx
├── hooks/
│   └── useReveal.js       ← Animação on-scroll
├── App.jsx
├── main.jsx
└── index.css
```

---

## ✅ Checklist antes do deploy em produção

- [ ] Trocar todas as imagens placeholder por fotos reais da oficina (WebP)
- [ ] Atualizar coordenadas exatas em `config.contato.endereco`
- [ ] Atualizar `seo.url` em `config.js` com o domínio real
- [ ] Atualizar URL em `index.html` (canonical, og:url)
- [ ] Adicionar favicon real (substituir o SVG inline)
- [ ] Verificar Google Maps embed com endereço exato
- [ ] Conferir todos os links e telefones
- [ ] Testar mobile (iPhone SE até iPhone Pro Max)
- [ ] Rodar Lighthouse — meta: 90+ em todas as métricas

---

## 🔧 Stack

- **React 18** + **Vite 5** — build rápido, HMR instantâneo
- **Tailwind CSS 3** — design system tokenizado
- **Lucide React** — ícones tree-shakable
- **IntersectionObserver** — animações reveal (sem libs)
- **schema.org JSON-LD** — SEO local AutoRepair

---

## 📝 Notas técnicas

1. **Sem Framer Motion** — animações em CSS puro + IntersectionObserver. Bundle 50kb+ menor.
2. **Parallax via `bg-fixed`** — performático em desktop, fallback automático em mobile.
3. **Imagens lazy** — todas com `loading="lazy"`, exceto hero (above-the-fold).
4. **Schema AutoRepair** — Google identifica como oficina automotiva para resultados locais.
5. **Geo meta tags** — reforça SEO regional Marechal Cândido Rondon.
