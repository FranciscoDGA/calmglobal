/**
 * Renderiza um bloco JSON-LD (schema.org) para SEO.
 * Uso: <JsonLd data={{ '@context': 'https://schema.org', ... }} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
