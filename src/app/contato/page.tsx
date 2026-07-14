import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com Francisco Gomes — dúvidas, sugestões, parcerias ou agendamento de sessões.',
};

export default function ContatoPage({
  searchParams,
}: {
  searchParams: { assunto?: string };
}) {
  const defaultSubject = searchParams.assunto ?? '';

  return (
    <Container className="max-w-xl py-12">
      <h1 className="mb-2 text-3xl font-bold">Contato</h1>
      <p className="mb-8 text-gray-600">
        Tem uma dúvida, sugestão, proposta de parceria ou quer agendar uma sessão? Envie sua
        mensagem.
      </p>
      <ContactForm defaultSubject={defaultSubject} />
    </Container>
  );
}
