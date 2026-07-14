'use client';

import { useState, type FormEvent } from 'react';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const GUIA_PDF = '/ebook/kit-anti-ansiedade.pdf';

/**
 * Seção de captura de e-mails (isca do guia gratuito).
 * Captura o e-mail e LIBERA o download do guia — a troca que gera o lead.
 * Registra o contato via Web3Forms quando NEXT_PUBLIC_WEB3FORMS_KEY existe.
 */
export function Newsletter({
  title = 'Baixe o Guia Gratuito',
  subtitle = 'Deixe seu e-mail e receba na hora o Kit Anti-Ansiedade (PDF) com 10 técnicas + checklist.',
}: {
  title?: string;
  subtitle?: string;
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Digite um e-mail válido.');
      return;
    }
    setError('');
    setStatus('sending');

    if (WEB3FORMS_KEY) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: 'Novo lead — Kit Anti-Ansiedade',
            email,
            message: 'Novo download do guia gratuito (Kit Anti-Ansiedade).',
            from_name: 'Calma Global',
          }),
        });
      } catch {
        /* mesmo se falhar o registro, liberamos o download */
      }
    }

    setStatus('done');
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-dark-900 p-8 text-white ring-1 ring-gold-500/30">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-white/90">{subtitle}</p>

        {status === 'done' ? (
          <div className="mt-6 rounded-lg bg-white/15 px-4 py-4">
            <p className="font-medium">✓ Tudo certo! Seu guia está liberado.</p>
            <a
              href={GUIA_PDF}
              download
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-100"
            >
              📥 Baixar o guia em PDF
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              aria-label="Seu e-mail"
              className="w-full flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-100 disabled:opacity-70"
            >
              {status === 'sending' ? 'Liberando...' : 'Quero o guia'}
            </button>
          </form>
        )}

        {error && <p className="mt-2 text-sm text-red-100">{error}</p>}
        <p className="mt-3 text-xs text-white/70">
          Sem spam. Você pode cancelar a inscrição quando quiser.
        </p>
      </div>
    </div>
  );
}
