import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button, Container } from '@/components/ui';
import { getProductBySlug, getProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Produto não encontrado' };
  return { title: product.title, description: product.description };
}

const typeLabels: Record<string, string> = {
  ebook: 'E-book',
  curso: 'Curso',
  template: 'Template',
};

export default async function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const isFree = product.price === 0;

  return (
    <Container className="max-w-4xl py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {product.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.title}
            className="h-full max-h-96 w-full rounded-xl object-cover"
          />
        )}

        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded bg-calm-100 px-2 py-1 text-xs font-medium text-calm-700">
              {typeLabels[product.type] ?? product.type}
            </span>
            {isFree && (
              <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Grátis
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6 text-3xl font-bold text-gray-900">
            {isFree ? 'Gratuito' : formatPrice(product.price)}
          </div>

          <div className="mt-6">
            {isFree ? (
              product.download_url ? (
                <Button href={product.download_url} size="lg">
                  Baixar agora
                </Button>
              ) : (
                <Button size="lg" disabled>
                  Download em breve
                </Button>
              )
            ) : (
              <Button size="lg" disabled>
                Compra em breve
              </Button>
            )}
          </div>

          {!isFree && (
            <p className="mt-3 text-sm text-gray-500">
              O checkout (Stripe/Pix) será ativado na próxima fase do projeto.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
