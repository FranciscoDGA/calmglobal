-- ==========================================================================
-- Calma Global — Schema do banco de dados (Supabase / PostgreSQL)
-- Execute no SQL Editor do Supabase para criar as tabelas.
-- ==========================================================================

-- --------------------------------------------------------------------------
-- Tabela de Posts
-- --------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,               -- Markdown
  excerpt TEXT,
  category TEXT NOT NULL,              -- ex: 'tecnicas-para-ansiedade'
  featured_image TEXT,                 -- URL (Supabase Storage / Unsplash)
  image_alt TEXT,                      -- texto alternativo descritivo (SEO)
  language TEXT NOT NULL DEFAULT 'pt-br', -- 'pt-br' | 'en' | 'es' (i18n)
  translated_from UUID REFERENCES posts(id), -- post original (traduções)
  published_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS posts_language_idx ON posts (language);
CREATE INDEX IF NOT EXISTS posts_category_idx ON posts (category);
CREATE INDEX IF NOT EXISTS posts_published_at_idx ON posts (published_at DESC);

-- --------------------------------------------------------------------------
-- Tabela de Produtos (e-books, cursos, templates)
-- --------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  old_price DECIMAL(10, 2),            -- preço "de" (apenas promoções reais)
  type TEXT NOT NULL,                  -- 'ebook' | 'curso' | 'template'
  checkout_url TEXT,                   -- link de checkout externo (ex.: Hotmart)
  benefits JSONB,                      -- array de benefícios (string[])
  faq JSONB,                           -- array de { question, answer }
  download_url TEXT,
  image_url TEXT,
  image_alt TEXT,                      -- texto alternativo descritivo (SEO)
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------------
-- Tabela de Usuários
-- --------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- --------------------------------------------------------------------------
-- Tabela de Compras
-- --------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  product_id UUID REFERENCES products(id),
  payment_status TEXT NOT NULL,        -- 'pending' | 'completed' | 'failed'
  payment_method TEXT,                 -- 'pix' | 'credit_card'
  amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================================================
-- Row Level Security (RLS)
-- Posts e produtos são de leitura pública; escrita apenas via service role.
-- ==========================================================================
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Posts são públicos para leitura" ON posts;
CREATE POLICY "Posts são públicos para leitura"
  ON posts FOR SELECT USING (true);

DROP POLICY IF EXISTS "Produtos ativos são públicos para leitura" ON products;
CREATE POLICY "Produtos ativos são públicos para leitura"
  ON products FOR SELECT USING (is_active = true);
