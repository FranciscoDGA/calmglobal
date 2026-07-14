import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container } from '@/components/ui';
import { Breadcrumbs, ShareButtons } from '@/components/blog';
import { Newsletter } from '@/components/marketing/Newsletter';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPostBySlug, getRelatedPosts, getPosts } from '@/lib/posts';
import { categoryLabel, siteConfig } from '@/lib/site';
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image ? [post.featured_image] : undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <Container className="max-w-3xl py-12">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: categoryLabel(post.category), href: `/blog?category=${post.category}` },
          { label: post.title },
        ]}
      />
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
              className="my-6 h-80 w-full rounded-xl object-cover"
              style={{ filter: 'grayscale(25%) brightness(94%)' }}
            />
          )}
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <ShareButtons slug={post.slug} title={post.title} />

        {/* Captura de leads */}
        <div className="mt-12">
          <Newsletter />
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
