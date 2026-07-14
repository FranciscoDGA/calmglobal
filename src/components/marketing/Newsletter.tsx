'use client';

import { useState, type FormEvent } from 'react';

/**
 * Seção de captura de e-mails (newsletter + isca do guia gratuito).
 * Front-end apenas — a integração com Mailchimp/ConvertKit entra em fase posterior.
 */
export function Newsletter({
  title = 'Baixe o Guia Gratuito',
  subtitle = 'Receba 10 técnicas para controlar a ansiedade em PDF + dicas semanais no seu e-mail.',
}: {
  title?: string;
  subtitle?: string;
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError('Digite um e-mail válido.');
      return;
    }
    setError('');
    // TODO: integrar com Mailchimp/ConvertKit
    setDone(true);
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-dark-900 p-8 text-white ring-1 ring-gold-500/30">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-white/90">{subtitle}</p>

        {done ? (
          <p className="mt-6 rounded-lg bg-white/15 px-4 py-3 font-medium">
            ✓ Tudo certo! Em breve você receberá o guia no seu e-mail.
          </p>
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
              className="rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-gray-100"
            >
              Quero o guia
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
