export type Language = 'pt-br' | 'en' | 'es';

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  featured_image: string | null;
  language: Language;
  published_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  type: 'ebook' | 'curso' | 'template';
  download_url: string | null;
  image_url: string | null;
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
