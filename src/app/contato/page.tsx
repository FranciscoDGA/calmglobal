import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do Calma Global — dúvidas, sugestões e parcerias.',
};

export default function ContatoPage() {
  return (
    <Container className="max-w-xl py-12">
      <h1 className="mb-2 text-3xl font-bold">Contato</h1>
      <p className="mb-8 text-gray-600">
        Tem uma dúvida, sugestão ou proposta de parceria? Envie sua mensagem.
      </p>
      <ContactForm />
    </Container>
  );
}
