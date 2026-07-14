import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { PostList } from '@/components/blog';
import { Newsletter } from '@/components/marketing/Newsletter';
import { getPosts, getCategories } from '@/lib/posts';
import { categoryLabel } from '@/lib/site';

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getPosts({ limit: 6 }),
    getCategories(),
  ]);

  return (
    <>
      {/* Hero — minimalista e claro */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-24 lg:py-32">
        <Container className="text-center">
          <span className="mb-6 inline-block rounded-full border border-gold-500/40 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-600">
            Saúde mental na era digital
          </span>
          <h1 className="mx-auto max-w-4xl font-serif text-4xl font-bold leading-tight text-dark-900 md:text-6xl">
            Controle a Ansiedade na Era Digital
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Técnicas comprovadas pela ciência para reduzir a ansiedade causada por IA, redes
            sociais e pela vida moderna — de forma prática e gratuita.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/produtos/guia-gratis-10-tecnicas-ansiedade" size="lg">
              Baixe o Guia Gratuito
            </Button>
            <Button href="/blog" variant="outline" size="lg">
              Explorar o Blog
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            📄 Guia em PDF com 10 técnicas · 100% gratuito · sem spam
          </p>
        </Container>
      </section>

      {/* Categorias — toque dourado */}
      {categories.length > 0 && (
        <section className="border-b border-gray-100 py-16">
          <Container>
            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-dark-900">
              Explore por tema
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className="rounded-full border border-gold-500/40 px-5 py-2.5 text-sm font-medium text-dark-900 transition-all hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-50"
                >
                  {categoryLabel(cat)}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Posts recentes */}
      <section className="py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-serif text-3xl font-bold text-dark-900">Posts recentes</h2>
            <Link href="/blog" className="text-sm font-semibold text-primary-500 hover:text-primary-700">
              Ver todos →
            </Link>
          </div>
          <PostList posts={posts} />
        </Container>
      </section>

      {/* Newsletter / captura de leads */}
      <section className="bg-primary-50 py-20">
        <Container>
          <Newsletter />
        </Container>
      </section>
    </>
  );
}
