# 🧘 Calma Global

Blog sobre **ansiedade na era digital** — conteúdo prático e comprovado pela ciência para
reduzir a ansiedade causada por IA, redes sociais e pela vida moderna.

## 🚀 Stack

- **[Next.js 14](https://nextjs.org/)** (App Router + TypeScript)
- **[Tailwind CSS](https://tailwindcss.com/)** + `@tailwindcss/typography`
- **[Supabase](https://supabase.com/)** (banco de dados, storage, auth) — _opcional em dev_
- **[react-markdown](https://github.com/remarkjs/react-markdown)** para renderizar os posts
- Deploy na **[Vercel](https://vercel.com/)**

## ✨ O que já está pronto (fase base)

- Homepage com hero, categorias e posts recentes
- Blog: listagem com busca/filtro por categoria + página de post (Markdown)
- Produtos: listagem + página de detalhe (checkout entra na próxima fase)
- Páginas Sobre e Contato, página 404 personalizada
- SEO: metadata dinâmica, Open Graph, `sitemap.xml` e `robots.txt` automáticos
- Terreno multilíngue: coluna `language` no banco + seletor de idioma (EN/ES "em breve")
- **Funciona sem backend:** enquanto o Supabase não estiver configurado, o site usa dados
  de exemplo locais (`src/data/`), permanecendo 100% navegável.

## 🏁 Como rodar localmente

```bash
npm install
cp .env.local.example .env.local   # opcional: preencha o Supabase
npm run dev
```

Acesse http://localhost:3000

## 🔌 Configurando o Supabase (opcional)

1. Crie um projeto em [supabase.com](https://supabase.com) (região São Paulo).
2. No **SQL Editor**, execute `supabase/schema.sql` e depois `supabase/seed.sql`.
3. Em **Settings > API**, copie a URL e a `anon key` para o `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
4. Reinicie o servidor. A aplicação passa a ler os dados do banco automaticamente.

## 📁 Estrutura

```
src/
├── app/                  # Rotas (App Router)
│   ├── blog/[slug]/      # Post único
│   ├── produtos/[slug]/  # Produto único
│   ├── sobre/ contato/
│   ├── sitemap.ts robots.ts
│   └── layout.tsx page.tsx
├── components/
│   ├── ui/               # Button, Card, Navbar, Footer, LanguageSelector...
│   ├── blog/             # PostCard, PostList
│   └── products/         # ProductCard
├── lib/                  # supabase, posts, products, site, utils
├── data/                 # dados de exemplo (fallback sem backend)
└── types/                # tipos TypeScript
supabase/                 # schema.sql + seed.sql
```

## 🗺️ Próximas fases (roadmap)

- [ ] **Monetização:** integração com Stripe (checkout, Pix), página de sucesso, downloads
- [ ] **Auth:** login/cadastro de usuários (Supabase Auth)
- [ ] **Newsletter:** captura de e-mails (Mailchimp/ConvertKit)
- [ ] **Analytics:** Google Analytics 4 + Search Console
- [ ] **Internacionalização:** ativar EN e ES com i18n do Next.js
- [ ] **AdSense** após aprovação

> ⚠️ O conteúdo do Calma Global é informativo e não substitui acompanhamento profissional de saúde.
