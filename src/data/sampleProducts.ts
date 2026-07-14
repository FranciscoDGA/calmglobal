import type { Product } from '@/types';

/** Produtos de exemplo (e-books/cursos) usados quando o Supabase não está configurado. */
export const sampleProducts: Product[] = [
  {
    id: '10000000-0000-0000-0000-000000000001',
    title: 'Guia Gratuito: 10 Técnicas para Controlar a Ansiedade',
    slug: 'guia-gratis-10-tecnicas-ansiedade',
    description:
      'Baixe nosso guia gratuito com 10 técnicas comprovadas pela ciência para reduzir a ansiedade em minutos. Inclui checklist para imprimir.',
    price: 0,
    type: 'ebook',
    download_url: null,
    image_url:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    is_active: true,
    created_at: '2026-07-14T09:00:00Z',
  },
  {
    id: '10000000-0000-0000-0000-000000000002',
    title: 'Guia Definitivo para Controlar a Ansiedade na Era Digital',
    slug: 'guia-definitivo-ansiedade-era-digital',
    description:
      'E-book completo com 20 técnicas e exercícios práticos para dominar a ansiedade causada por IA, redes sociais e a vida moderna. 50 páginas.',
    price: 49.9,
    type: 'ebook',
    download_url: null,
    image_url:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    is_active: true,
    created_at: '2026-07-14T09:00:00Z',
  },
  {
    id: '10000000-0000-0000-0000-000000000003',
    title: '21 Dias para Controlar a Ansiedade',
    slug: 'curso-21-dias-controlar-ansiedade',
    description:
      'Curso em 10 módulos (vídeo + PDF) com um plano diário para transformar sua relação com a ansiedade em 21 dias.',
    price: 297,
    type: 'curso',
    download_url: null,
    image_url:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
    is_active: true,
    created_at: '2026-07-14T09:00:00Z',
  },
];
