import type { Product } from '@/types';

/** Produtos de exemplo (e-books/cursos) usados quando o Supabase não está configurado. */
export const sampleProducts: Product[] = [
  {
    id: '10000000-0000-0000-0000-000000000001',
    title: 'Kit Anti-Ansiedade: 10 Técnicas para Controlar a Ansiedade',
    slug: 'guia-gratis-10-tecnicas-ansiedade',
    description:
      'Baixe gratuitamente o Kit Anti-Ansiedade: 10 técnicas comprovadas pela ciência, com exercícios práticos e checklist diário para imprimir.',
    price: 0,
    type: 'ebook',
    benefits: [
      '10 técnicas passo a passo, com exercício prático em cada uma',
      'Checklist diário para imprimir e colar na geladeira',
      'Rotina anti-ansiedade (manhã, dia e noite)',
      'Lista de apps, livros e onde buscar ajuda',
      'Acesso imediato após o cadastro',
    ],
    faq: [
      { question: 'O guia é realmente gratuito?', answer: 'Sim, 100% gratuito. Basta informar seu e-mail para receber o link de download.' },
      { question: 'Em que formato recebo?', answer: 'Um arquivo PDF que você pode ler no celular, computador ou imprimir.' },
    ],
    download_url: '/ebook/kit-anti-ansiedade.pdf',
    image_url:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    image_alt: 'Capa do guia gratuito com 10 técnicas para controlar a ansiedade',
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
    benefits: [
      '50 páginas com 20 técnicas comprovadas pela ciência',
      'Exercícios práticos ao final de cada capítulo',
      'Checklist diário e planner anti-ansiedade',
      'Acesso vitalício + atualizações gratuitas',
      'Garantia de 7 dias — reembolso sem perguntas',
    ],
    faq: [
      { question: 'Quantas páginas tem o e-book?', answer: 'São 50 páginas de conteúdo prático e direto ao ponto.' },
      { question: 'Como recebo o material após a compra?', answer: 'O download é liberado imediatamente após a confirmação do pagamento.' },
      { question: 'Existe garantia?', answer: 'Sim. Você tem 7 dias para pedir reembolso caso não fique satisfeito.' },
      { question: 'Preciso de conhecimento prévio?', answer: 'Não. O guia foi escrito para qualquer pessoa, do iniciante ao mais experiente.' },
    ],
    download_url: null,
    image_url:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    image_alt: 'Capa do e-book Guia Definitivo para Controlar a Ansiedade na Era Digital',
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
    benefits: [
      '10 módulos em vídeo + PDFs de apoio',
      'Plano diário guiado por 21 dias',
      '10 meditações guiadas em áudio (bônus)',
      'Acesso vitalício em qualquer dispositivo',
      'Garantia de 7 dias — reembolso sem perguntas',
    ],
    faq: [
      { question: 'Quanto tempo tenho de acesso?', answer: 'O acesso é vitalício, incluindo futuras atualizações do curso.' },
      { question: 'Preciso assistir tudo de uma vez?', answer: 'Não. O curso segue um ritmo diário, mas você avança no seu próprio tempo.' },
      { question: 'Como funciona a garantia?', answer: 'Você tem 7 dias para solicitar reembolso integral caso não goste.' },
    ],
    download_url: null,
    image_url:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
    image_alt: 'Pessoa em ambiente tranquilo participando do curso 21 Dias para Controlar a Ansiedade',
    is_active: true,
    created_at: '2026-07-14T09:00:00Z',
  },
];
