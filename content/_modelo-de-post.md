# Modelo padrão de post — Calma Global

Use este checklist ao criar **qualquer novo artigo**. Ele garante que cada post
já nasça otimizado para SEO e conversão (o mesmo padrão aplicado aos posts atuais).

## Campos do post (objeto em `src/data/samplePosts.ts` ou linha no Supabase)

- `title` — Fórmula: **Número + palavra-chave + benefício + urgência**
  (ex.: "10 Técnicas Científicas para Controlar a Ansiedade em 5 Minutos").
- `slug` — curto e com a palavra-chave (ex.: `sintomas-de-ansiedade`).
- `excerpt` — 150–160 caracteres; vira a **meta description** automaticamente.
- `image_alt` — **texto alternativo descritivo** (ex.: "Mulher praticando
  respiração para controlar a ansiedade"). Nunca deixe vazio.
- `category` — use um slug existente (ver `categoryLabels` em `src/lib/site.ts`).
- `faq` — 3 a 5 perguntas/respostas. Gera **FAQPage schema** ("As pessoas
  também perguntam" no Google). Respostas de 1 a 3 frases.

## Estrutura do `content` (Markdown)

1. **Introdução (gancho + dor + promessa)** — 2 a 3 parágrafos. Coloque a
   palavra-chave nas primeiras 100 palavras.
2. **Bloco "Leia também"** — 1 ou 2 links internos para posts relacionados:
   `> 📚 **Leia também:** [Título](/blog/outro-slug)`
3. **Aviso legal** (saúde): `> ⚠️ Conteúdo informativo, não substitui...`
4. **Seções `## H2`** com subtítulos `###` claros. Em conteúdos de técnicas,
   use o padrão: **Como fazer** · **Por que funciona** · **Exemplo prático**.
5. **Blocos de destaque** para dados: `> 📊 **Dado:** ...` (só com fonte real).
6. **CTA no meio** (após ~metade): link para o guia gratuito.
7. **Conclusão + "🚀 Próximos passos"** com 3 ações (praticar, baixar, compartilhar).
8. **Fontes** — links externos de autoridade (OMS, Harvard, Ministério da Saúde…).

## Regras de integridade (importante)

- ❌ **Nunca** inventar estatísticas, percentuais ou estudos. Só cite números
  com fonte real e verificável (link/DOI). Isso protege o E-E-A-T e evita
  problemas com o Google e com o AdSense.
- ❌ **Nunca** criar depoimentos fictícios. Use o componente de depoimentos
  apenas com avaliações reais e autorizadas.
- ✅ Tamanho recomendado: 1.500–2.500+ palavras de conteúdo real e útil
  (sem "encher linguiça").
- ✅ Sempre incluir os elementos de SEO on-page: título, slug, excerpt,
  image_alt, links internos e FAQ.

## O que já é automático (não precisa se preocupar)

- Meta tags, Open Graph e canonical (via `generateMetadata`).
- JSON-LD de `Article` e `BreadcrumbList`.
- `sitemap.xml` e `robots.txt`.
- Breadcrumbs, botões de compartilhamento, newsletter e posts relacionados.
- FAQPage schema (quando o campo `faq` estiver preenchido).
