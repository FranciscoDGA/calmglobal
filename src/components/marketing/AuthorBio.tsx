import Link from 'next/link';
import { AuthorAvatar } from './AuthorAvatar';

/**
 * Caixa de autor exibida ao final dos posts.
 * Reforça a autoridade (E-E-A-T) e direciona para o atendimento individual.
 */
export function AuthorBio() {
  return (
    <aside className="mt-12 rounded-2xl border border-gold-500/20 bg-white p-6 sm:flex sm:items-center sm:gap-6">
      <div className="mb-4 flex justify-center sm:mb-0">
        <AuthorAvatar name="Francisco Gomes" size={96} />
      </div>
      <div className="text-center sm:text-left">
        <p className="font-serif text-lg font-bold text-dark-900">Francisco Gomes</p>
        <p className="text-sm text-gray-500">Pastor · Terapeuta em TRG e ETF</p>
        <p className="mt-2 text-sm text-gray-600">
          Ajudo pessoas a lidarem com a ansiedade e a angústia na era digital, com acolhimento e
          terapias complementares. Se você sente que precisa de apoio, podemos conversar.
        </p>
        <div className="mt-4">
          <Link
            href="/atendimento"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Conheça o atendimento →
          </Link>
        </div>
      </div>
    </aside>
  );
}
