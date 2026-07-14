export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

/**
 * Depoimentos REAIS de leitores/clientes.
 *
 * ⚠️ Deixe este array vazio até ter depoimentos verdadeiros e autorizados.
 * Não inclua depoimentos fictícios: avaliações falsas apresentadas como reais
 * violam a política do Google AdSense e o Código de Defesa do Consumidor.
 *
 * Quando tiver depoimentos reais, adicione assim:
 *   { name: 'Maria S.', role: 'Leitora', quote: 'As técnicas me ajudaram muito.' }
 */
export const testimonials: Testimonial[] = [];
