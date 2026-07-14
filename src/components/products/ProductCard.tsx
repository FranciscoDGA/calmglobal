import Link from 'next/link';
import type { Product } from '@/types';
import { Card } from '@/components/ui';
import { formatPrice } from '@/lib/utils';

const typeLabels: Record<Product['type'], string> = {
  ebook: 'E-book',
  curso: 'Curso',
  template: 'Template',
};

export function ProductCard({ product }: { product: Product }) {
  const isFree = product.price === 0;

  return (
    <Card className="flex h-full flex-col">
      {product.image_url && (
        <Link href={`/produtos/${product.slug}`} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image_url}
            alt={product.title}
            className="h-48 w-full object-cover"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded bg-calm-100 px-2 py-1 text-xs font-medium text-calm-700">
            {typeLabels[product.type]}
          </span>
          {isFree && (
            <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
              Grátis
            </span>
          )}
        </div>
        <h3 className="mb-2 text-lg font-bold leading-snug">
          <Link href={`/produtos/${product.slug}`} className="hover:text-primary-600">
            {product.title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {isFree ? 'Gratuito' : formatPrice(product.price)}
          </span>
          <Link
            href={`/produtos/${product.slug}`}
            className="text-sm font-medium text-primary-600 hover:underline"
          >
            Ver detalhes →
          </Link>
        </div>
      </div>
    </Card>
  );
}
