'use client';

import { useState, type FormEvent } from 'react';

type Errors = { name?: string; email?: string; message?: string };

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm({ defaultSubject = '' }: { defaultSubject?: string }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: defaultSubject,
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function validate(v: typeof values): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = 'Informe seu nome.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'E-mail inválido.';
    if (v.message.trim().length < 10) e.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    return e;
  }

  function update(field: keyof typeof values, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field as keyof Errors]) setErrors(validate(next));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');

    // Envio real via Web3Forms (quando NEXT_PUBLIC_WEB3FORMS_KEY estiver configurado).
    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: values.subject || 'Nova mensagem — Calma Global',
            name: values.name,
            email: values.email,
            message: values.message,
            from_name: 'Calma Global',
          }),
        });
        const data = await res.json();
        setStatus(data.success ? 'sent' : 'error');
      } catch {
        setStatus('error');
      }
      return;
    }

    // Sem chave configurada: simula sucesso (útil em desenvolvimento).
    // TODO: defina NEXT_PUBLIC_WEB3FORMS_KEY para enviar de verdade.
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <p className="rounded-lg bg-green-50 px-4 py-3 font-medium text-green-800">
        ✓ Mensagem enviada! Responderei o mais breve possível.
      </p>
    );
  }

  const inputBase =
    'w-full rounded-lg border px-4 py-2 focus:outline-none focus:border-primary-500';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => update('name', e.target.value)}
          className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
          Assunto
        </label>
        <input
          id="subject"
          type="text"
          value={values.subject}
          onChange={(e) => update('subject', e.target.value)}
          placeholder="Sobre o que você quer falar?"
          className={`${inputBase} border-gray-300`}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputBase} ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-primary-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  );
}
