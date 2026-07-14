'use client';

import { useState, type FormEvent } from 'react';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

/**
 * Formulário de captura de lead que LIBERA o download só após o e-mail.
 * É o coração da isca (lead magnet): trocamos o material pelo contato.
 *
 * - Se NEXT_PUBLIC_WEB3FORMS_KEY estiver definido, o lead é registrado
 *   (você recebe um e-mail com nome/e-mail da pessoa).
 * - Em seguida, o botão de download é revelado.
 */
export function LeadMagnetForm({
  downloadUrl,
  title,
}: {
  downloadUrl: string;
  title: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ready'>('idle');

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
            subject: `Novo lead — ${title}`,
            name: name || '(não informado)',
            email,
            message: `Novo download do material: ${title}`,
            from_name: 'Calma Global',
          }),
        });
      } catch {
        /* mesmo se o registro falhar, liberamos o download */
      }
    }

    setStatus('ready');
  }

  if (status === 'ready') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-semibold text-green-800">
          ✓ Pronto{name ? `, ${name.split(' ')[0]}` : ''}! Seu guia está liberado.
        </p>
        <div className="mt-4">
          <a
            href={downloadUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
          >
            📥 Baixar o guia em PDF
          </a>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Guarde este material com carinho. Em breve você receberá mais dicas no seu e-mail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6">
      <p className="mb-4 font-medium text-dark-900">
        Digite seus dados para receber o guia gratuito 👇
      </p>
      <div className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome (opcional)"
          aria-label="Seu nome"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          aria-label="Seu e-mail"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
        >
          {status === 'sending' ? 'Liberando...' : 'Quero o guia gratuito'}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <p className="mt-3 text-xs text-gray-500">
        Sem spam. Você pode cancelar a inscrição quando quiser.
      </p>
    </form>
  );
}
