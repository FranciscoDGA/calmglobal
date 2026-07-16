'use client';

import { useState, type FormEvent } from 'react';

const PDF_URL = '/downloads/guia-definitivo-ansiedade.pdf';

/**
 * Formulário da landing de captura do Guia Definitivo.
 * Envia o lead para /api/captura-guia (MailerLite) e libera o download.
 */
export function GuiaCaptureForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nome.trim()) {
      setError('Digite seu nome.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Digite um e-mail válido.');
      return;
    }
    setError('');
    setStatus('sending');

    try {
      const res = await fetch('/api/captura-guia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Não foi possível concluir. Tente novamente.');
        setStatus('idle');
        return;
      }
      setStatus('done');
    } catch {
      setError('Erro de conexão. Tente novamente.');
      setStatus('idle');
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-semibold text-green-800">
          ✓ Pronto{nome ? `, ${nome.split(' ')[0]}` : ''}! Seu guia está liberado.
        </p>
        <p className="mt-1 text-sm text-green-700">
          Também enviamos o link para o seu e-mail. Confira a caixa de entrada (e o spam).
        </p>
        <div className="mt-4">
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
          >
            📥 Baixar o Guia Definitivo (PDF)
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="mb-4 font-medium text-dark-900">Preencha e receba o guia agora 👇</p>
      <div className="space-y-3">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          aria-label="Seu nome"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          aria-label="Seu e-mail"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
        >
          {status === 'sending' ? 'Enviando...' : 'Quero o Guia Definitivo grátis'}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <p className="mt-3 text-xs text-gray-500">
        Sem spam. Você pode cancelar a inscrição quando quiser. Ao enviar, você concorda com nossa{' '}
        <a href="/privacidade" className="underline hover:text-primary-600">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}
