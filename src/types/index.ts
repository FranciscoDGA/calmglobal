export type Language = 'pt-br' | 'en' | 'es';

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  featured_image: string | null;
  /** Texto alternativo descritivo da imagem (SEO/acessibilidade). */
  image_alt?: string | null;
  /** Perguntas frequentes do artigo (gera FAQPage schema — "People Also Ask"). */
  faq?: FaqItem[];
  language: Language;
  published_at: string;
  updated_at: string;
};

export type FaqItem = { question: string; answer: string };

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  /** Preço "de" — use APENAS em promoções reais (nunca âncora fictícia). */
  old_price?: number | null;
  type: 'ebook' | 'curso' | 'template';
  /** Lista de benefícios do produto (bullet points de conversão). */
  benefits?: string[];
  /** Perguntas frequentes específicas do produto. */
  faq?: FaqItem[];
  download_url: string | null;
  image_url: string | null;
  image_alt?: string | null;
  is_active: boolean;
  created_at: string;
};

export type Purchase = {
  id: string;
  user_id: string;
  product_id: string;
  payment_status: 'pending' | 'completed' | 'failed';
  payment_method: string | null;
  amount: number;
  created_at: string;
};
