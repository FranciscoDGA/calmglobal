import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button, Container } from '@/components/ui';
import { Testimonials } from '@/components/marketing/Testimonials';
import { LeadMagnetForm } from '@/components/marketing/LeadMagnetForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProductBySlug, getProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import { siteConfig } from '@/lib/site';

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
  ebook: '📖 E-book',
  curso: '🎓 Curso',
  template: '📄 Template',
};

export default async function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const isFree = product.price === 0;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image_url ? [product.image_url] : undefined,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/produtos/${product.slug}`,
    },
  };

  return (
    <Container className="max-w-4xl py-12">
      <JsonLd data={productSchema} />

      <div className="grid gap-8 md:grid-cols-2">
        {product.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.image_alt ?? product.title}
            className="h-full max-h-96 w-full rounded-xl object-cover"
            style={{ filter: 'grayscale(15%) brightness(96%)' }}
          />
        )}

        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-medium text-gold-600">
              {typeLabels[product.type] ?? product.type}
            </span>
            {isFree && (
              <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                Grátis
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl font-bold text-dark-900">{product.title}</h1>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-bold text-primary-500">
              {isFree ? 'Gratuito' : formatPrice(product.price)}
            </span>
            {product.old_price ? (
              <span className="mb-1 text-lg text-gray-400 line-through">
                {formatPrice(product.old_price)}
              </span>
            ) : null}
          </div>

          <div className="mt-6">
            {isFree ? (
              product.download_url ? (
                <LeadMagnetForm downloadUrl={product.download_url} title={product.title} />
              ) : (
                <Button size="lg" disabled>
                  Download em breve
                </Button>
              )
            ) : product.checkout_url ? (
              <Button href={product.checkout_url} size="lg">
                Comprar agora
              </Button>
            ) : (
              <Button size="lg" disabled>
                Compra em breve
              </Button>
            )}
          </div>

          {!isFree && (
            <>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
                <span className="inline-flex items-center gap-1">🛡️ Garantia de 7 dias</span>
                <span className="inline-flex items-center gap-1">🔒 Pagamento seguro</span>
                <span className="inline-flex items-center gap-1">⚡ Acesso imediato</span>
              </div>
              {!product.checkout_url && (
                <p className="mt-3 text-sm text-gray-500">
                  Botão de compra será ativado assim que o link da Hotmart for adicionado.
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Benefícios */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="mt-12 rounded-xl border border-gray-100 bg-white p-8">
          <h2 className="mb-6 font-serif text-2xl font-bold text-dark-900">O que está incluído</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="mt-0.5 text-primary-500" aria-hidden>
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      {product.faq && product.faq.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-6 font-serif text-2xl font-bold text-dark-900">Perguntas frequentes</h2>
          <div className="space-y-3">
            {product.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-100 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-medium text-dark-900">
                  {item.question}
                  <span className="text-primary-500 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <Testimonials />
    </Container>
  );
}
