import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { samplePosts } from '@/data/samplePosts';
import { morePosts } from '@/data/morePosts';
import { morePosts2 } from '@/data/morePosts2';
import { morePosts3 } from '@/data/morePosts3';
import { morePosts4 } from '@/data/morePosts4';
import type { Language, Post } from '@/types';

const DEFAULT_LANGUAGE: Language = 'pt-br';

/** Todos os posts de exemplo (fallback sem Supabase). */
const allSamplePosts: Post[] = [
  ...samplePosts,
  ...morePosts,
  ...morePosts2,
  ...morePosts3,
  ...morePosts4,
];

type GetPostsOptions = {
  language?: Language;
  category?: string;
  search?: string;
  limit?: number;
};

/** Retorna posts publicados, com filtros opcionais. */
export async function getPosts(options: GetPostsOptions = {}): Promise<Post[]> {
  const { language = DEFAULT_LANGUAGE, category, search, limit } = options;

  if (isSupabaseConfigured && supabase) {
    let query = supabase
      .from('posts')
      .select('*')
      .eq('language', language)
      .order('published_at', { ascending: false });

    if (category) query = query.eq('category', category);
    if (search) query = query.ilike('title', `%${search}%`);
    if (limit) query = query.limit(limit);

    const { data, error } = await query;
    if (error) {
      console.error('[posts] erro ao buscar no Supabase:', error.message);
      return [];
    }
    return (data as Post[]) ?? [];
  }

  // Fallback: dados de exemplo locais
  let posts = allSamplePosts.filter((p) => p.language === language);
  if (category) posts = posts.filter((p) => p.category === category);
  if (search) {
    const term = search.toLowerCase();
    posts = posts.filter((p) => p.title.toLowerCase().includes(term));
  }
  posts = posts.sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );
  return limit ? posts.slice(0, limit) : posts;
}

/** Retorna um post pelo slug, ou null se não existir. */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();
    if (error) return null;
    return data as Post;
  }

  return allSamplePosts.find((p) => p.slug === slug) ?? null;
}

/** Retorna posts relacionados (mesma categoria, excluindo o atual). */
export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
  const posts = await getPosts({ language: post.language, category: post.category });
  return posts.filter((p) => p.id !== post.id).slice(0, limit);
}

/** Retorna a lista de categorias distintas presentes nos posts. */
export async function getCategories(language: Language = DEFAULT_LANGUAGE): Promise<string[]> {
  const posts = await getPosts({ language });
  return [...new Set(posts.map((p) => p.category))];
}
