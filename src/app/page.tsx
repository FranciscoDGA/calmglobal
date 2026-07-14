import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { PostList } from '@/components/blog';
import { getPosts, getCategories } from '@/lib/posts';
import { categoryLabel } from '@/lib/site';

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getPosts({ limit: 6 }),
    getCategories(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-calm-600 py-20 text-white">
        <Container className="text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Controle a Ansiedade na Era Digital
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Técnicas comprovadas pela ciência para reduzir a ansiedade causada por IA, redes
            sociais e pela vida moderna — de forma prática e gratuita.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/produtos/guia-gratis-10-tecnicas-ansiedade" variant="secondary" size="lg">
              Baixe o Guia Gratuito
            </Button>
            <Button
              href="/blog"
              size="lg"
              className="border border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              Explorar o Blog
            </Button>
          </div>
        </Container>
      </section>

      {/* Categorias */}
      {categories.length > 0 && (
        <section className="border-b border-gray-100 py-12">
          <Container>
            <h2 className="mb-8 text-center text-2xl font-bold">Explore por tema</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-100"
                >
                  {categoryLabel(cat)}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Posts recentes */}
      <section className="py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Posts recentes</h2>
            <Link href="/blog" className="text-sm font-medium text-primary-600 hover:underline">
              Ver todos →
            </Link>
          </div>
          <PostList posts={posts} />
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-primary-50 py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold">Comece sua jornada de calma hoje</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Receba dicas semanais e nosso guia gratuito com 10 técnicas para controlar a
            ansiedade em minutos.
          </p>
          <div className="mt-6">
            <Button href="/produtos" size="lg">
              Ver materiais gratuitos
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
