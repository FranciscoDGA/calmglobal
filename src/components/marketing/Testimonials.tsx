import { testimonials } from '@/data/testimonials';

/**
 * Renderiza os depoimentos reais cadastrados em src/data/testimonials.ts.
 * Se não houver depoimentos, não renderiza nada (evita "prova social" falsa).
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-center text-2xl font-bold">O que dizem nossos leitores</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-xl bg-white p-6 shadow-md">
            <blockquote className="text-gray-700">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-gray-900">
              {t.name}
              {t.role && <span className="font-normal text-gray-500"> · {t.role}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
