import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do Calma Global.',
};

export default function ContatoPage() {
  return (
    <Container className="max-w-xl py-12">
      <h1 className="mb-2 text-3xl font-bold">Contato</h1>
      <p className="mb-8 text-gray-600">
        Tem uma dúvida, sugestão ou proposta de parceria? Envie sua mensagem.
      </p>

      {/*
        Formulário estático (front-end). A integração de envio (e-mail/Supabase)
        será conectada em uma fase posterior.
      */}
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary-600 px-6 py-2.5 font-medium text-white hover:bg-primary-700"
        >
          Enviar mensagem
        </button>
      </form>
    </Container>
  );
}
