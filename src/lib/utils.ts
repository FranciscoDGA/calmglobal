import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/** Formata uma data ISO para o padrão brasileiro legível. */
export function formatDate(iso: string, pattern = "dd 'de' MMMM 'de' yyyy"): string {
  try {
    return format(new Date(iso), pattern, { locale: ptBR });
  } catch {
    return iso;
  }
}

/** Formata um valor numérico como moeda brasileira (R$). */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/** Estima o tempo de leitura de um texto (≈ 200 palavras/min). */
export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Combina classes CSS ignorando valores falsy. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
