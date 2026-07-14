'use client';

import { useState, type FormEvent } from 'react';

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

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
    // Revalida em tempo real apenas os campos já com erro
    if (errors[field]) setErrors(validate(next));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    // TODO: enviar para backend/e-mail (Supabase, Resend, etc.)
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-lg bg-green-50 px-4 py-3 font-medium text-green-800">
        ✓ Mensagem enviada! Responderemos em breve.
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

      <button
        type="submit"
        className="rounded-lg bg-primary-600 px-6 py-2.5 font-medium text-white hover:bg-primary-700"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
