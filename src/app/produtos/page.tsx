import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ProductCard } from '@/components/products';
import { getProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'E-books, cursos e materiais para você controlar a ansiedade na era digital.',
};

export default async function ProdutosPage() {
  const products = await getProducts();

  return (
    <Container className="py-12">
      <h1 className="mb-2 text-3xl font-bold">Produtos</h1>
      <p className="mb-8 text-gray-600">
        Materiais práticos para aprofundar sua jornada de bem-estar mental.
      </p>

      {products.length === 0 ? (
        <p className="py-12 text-center text-gray-500">
          Nenhum produto disponível no momento. Volte em breve! ✨
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
}
