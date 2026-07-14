import Link from 'next/link';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

const typeLabels: Record<Product['type'], string> = {
  ebook: '📖 E-book',
  curso: '🎓 Curso',
  template: '📄 Template',
};

export function ProductCard({ product }: { product: Product }) {
  const isFree = product.price === 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gold-500/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-md">
      {product.image_url && (
        <Link href={`/produtos/${product.slug}`} className="block overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image_url}
            alt={product.title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: 'grayscale(15%) brightness(95%)' }}
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-sm font-medium text-gold-600">{typeLabels[product.type]}</span>
          {isFree && (
            <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
              Grátis
            </span>
          )}
        </div>
        <h3 className="mb-2 font-serif text-xl font-semibold leading-snug text-dark-900">
          <Link href={`/produtos/${product.slug}`} className="transition-colors group-hover:text-primary-500">
            {product.title}
          </Link>
        </h3>
        <p className="mb-6 flex-1 text-sm text-gray-600">{product.description}</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-primary-500">
            {isFree ? 'Gratuito' : formatPrice(product.price)}
          </span>
          <Link
            href={`/produtos/${product.slug}`}
            className="text-sm font-semibold text-primary-500 transition-colors hover:text-primary-700"
          >
            Ver detalhes →
          </Link>
        </div>
      </div>
    </article>
  );
}
