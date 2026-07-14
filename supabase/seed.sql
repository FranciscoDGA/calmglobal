-- ==========================================================================
-- Calma Global — Seed inicial (produtos de exemplo)
-- Execute APÓS o schema.sql. Os posts podem ser inseridos pela interface
-- do Supabase ou por script (os dados de exemplo estão em src/data/).
-- ==========================================================================

INSERT INTO products (title, slug, description, price, type, is_active) VALUES
  (
    'Guia Gratuito: 10 Técnicas para Controlar a Ansiedade',
    'guia-gratis-10-tecnicas-ansiedade',
    'Baixe nosso guia gratuito com 10 técnicas comprovadas pela ciência para reduzir a ansiedade em minutos.',
    0.00, 'ebook', TRUE
  ),
  (
    'Guia Definitivo para Controlar a Ansiedade na Era Digital',
    'guia-definitivo-ansiedade-era-digital',
    'E-book completo com 20 técnicas e exercícios práticos. 50 páginas.',
    49.90, 'ebook', TRUE
  ),
  (
    '21 Dias para Controlar a Ansiedade',
    'curso-21-dias-controlar-ansiedade',
    'Curso em 10 módulos (vídeo + PDF) com um plano diário para transformar sua relação com a ansiedade.',
    297.00, 'curso', TRUE
  )
ON CONFLICT (slug) DO NOTHING;
