import type { Language } from '@/types';

/** Configuração central do site — usada em SEO, layout, navegação. */
export const siteConfig = {
  name: 'Calma Global',
  tagline: 'Controle a Ansiedade na Era Digital',
  description:
    'Dicas práticas e técnicas comprovadas pela ciência para reduzir a ansiedade causada por IA, redes sociais e pela vida moderna.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  defaultLanguage: 'pt-br' as Language,
  locale: 'pt_BR',
  keywords: [
    'ansiedade',
    'como controlar ansiedade',
    'ansiedade por IA',
    'ansiedade redes sociais',
    'técnicas para ansiedade',
    'saúde mental',
  ],
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Produtos', href: '/produtos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  legal: [
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
  social: {
    instagram: 'https://instagram.com/calmaglobal',
    tiktok: 'https://tiktok.com/@calmaglobal',
    linkedin: 'https://linkedin.com/company/calmaglobal',
  },
};

/** Idiomas disponíveis. Apenas pt-br está ativo; EN/ES ficam "em breve". */
export const languages: { code: Language; label: string; flag: string; enabled: boolean }[] = [
  { code: 'pt-br', label: 'Português', flag: '🇧🇷', enabled: true },
  { code: 'en', label: 'English', flag: '🇺🇸', enabled: false },
  { code: 'es', label: 'Español', flag: '🇪🇸', enabled: false },
];

/** Rótulos legíveis para as categorias (slug -> nome exibido). */
export const categoryLabels: Record<string, string> = {
  'tecnicas-para-ansiedade': 'Técnicas para Ansiedade',
  'ansiedade-ia': 'Ansiedade e IA',
  'ansiedade-redes-sociais': 'Ansiedade e Redes Sociais',
  'ansiedade-trabalho': 'Ansiedade no Trabalho',
  'ansiedade-sono': 'Ansiedade e Sono',
  'sintomas-ansiedade': 'Sintomas de Ansiedade',
};

export function categoryLabel(slug: string): string {
  return (
    categoryLabels[slug] ||
    slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  );
}
