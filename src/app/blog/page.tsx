import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { PostList } from '@/components/blog';
import { getPosts, getCategories } from '@/lib/posts';
import { categoryLabel } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos sobre ansiedade na era digital: técnicas práticas, ciência e bem-estar mental.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const category = searchParams.category;
  const search = searchParams.search;

  const [posts, categories] = await Promise.all([
    getPosts({ category, search }),
    getCategories(),
  ]);

  return (
    <Container className="py-12">
      <h1 className="mb-2 text-3xl font-bold">Blog</h1>
      <p className="mb-8 text-gray-600">
        Conteúdo prático e comprovado pela ciência para você viver com mais calma.
      </p>

      {/* Filtros */}
      <form className="mb-8 flex flex-col gap-4 sm:flex-row" action="/blog" method="get">
        <input
          type="search"
          name="search"
          defaultValue={search}
          placeholder="Buscar posts..."
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
        />
        <select
          name="category"
          defaultValue={category ?? ''}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
        >
          <option value="">Todas as categorias</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {categoryLabel(cat)}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-lg bg-primary-600 px-5 py-2 font-medium text-white hover:bg-primary-700"
        >
          Filtrar
        </button>
      </form>

      {category && (
        <p className="mb-6 text-sm text-gray-500">
          Mostrando posts de <strong>{categoryLabel(category)}</strong>
        </p>
      )}

      <PostList posts={posts} />
    </Container>
  );
}
