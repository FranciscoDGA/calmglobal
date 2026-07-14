import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { sampleProducts } from '@/data/sampleProducts';
import type { Product } from '@/types';

/** Retorna produtos ativos, ordenados por preço. */
export async function getProducts(): Promise<Product[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('price', { ascending: true });
    if (error) {
      console.error('[products] erro ao buscar no Supabase:', error.message);
      return [];
    }
    return (data as Product[]) ?? [];
  }

  return [...sampleProducts]
    .filter((p) => p.is_active)
    .sort((a, b) => a.price - b.price);
}

/** Retorna um produto pelo slug, ou null se não existir. */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();
    if (error) return null;
    return data as Product;
  }

  return sampleProducts.find((p) => p.slug === slug) ?? null;
}
