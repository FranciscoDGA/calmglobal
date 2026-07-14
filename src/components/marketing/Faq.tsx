import type { FaqItem } from '@/types';
import { JsonLd } from '@/components/seo/JsonLd';

/**
 * Seção de Perguntas Frequentes (acordeão) com JSON-LD FAQPage.
 * O schema ajuda o Google a exibir o conteúdo em "As pessoas também perguntam".
 * Passe `schema={false}` se já houver outro FAQPage na mesma página.
 */
export function Faq({
  items,
  title = 'Perguntas frequentes',
  schema = true,
}: {
  items: FaqItem[];
  title?: string;
  schema?: boolean;
}) {
  if (!items || items.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section className="mt-12">
      {schema && <JsonLd data={faqSchema} />}
      <h2 className="mb-6 font-serif text-2xl font-bold text-dark-900">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
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
  );
}
