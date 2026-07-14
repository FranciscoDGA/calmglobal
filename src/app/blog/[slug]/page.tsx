import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button, Container } from '@/components/ui';
import { getPostBySlug, getRelatedPosts, getPosts } from '@/lib/posts';
import { categoryLabel } from '@/lib/site';
import { formatDate, readingTime } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post não encontrado' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [{ url: post.featured_image }] : undefined,
      publishedTime: post.published_at,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post);

  return (
    <Container className="max-w-3xl py-12">
      <article>
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="rounded bg-primary-100 px-2 py-1 font-medium text-primary-800">
              {categoryLabel(post.category)}
            </span>
            <span>{formatDate(post.published_at)}</span>
            <span className="text-gray-400">· {readingTime(post.content)} min de leitura</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
          {post.featured_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.featured_image}
              alt={post.title}
              className="my-6 h-72 w-full rounded-xl object-cover"
            />
          )}
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        {/* CTA e-book */}
        <div className="mt-12 rounded-xl bg-primary-50 p-6">
          <h3 className="text-xl font-bold">Gostou deste conteúdo?</h3>
          <p className="mt-2 text-gray-700">
            Baixe nosso <strong>Guia Gratuito</strong> com 10 técnicas para controlar a ansiedade
            em minutos.
          </p>
          <div className="mt-4">
            <Button href="/produtos/guia-gratis-10-tecnicas-ansiedade">
              Baixar Guia Gratuito
            </Button>
          </div>
        </div>
      </article>

      {/* Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Posts relacionados</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <div key={related.id} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-semibold leading-snug">{related.title}</h3>
                <Link
                  href={`/blog/${related.slug}`}
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
