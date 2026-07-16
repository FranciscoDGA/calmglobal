import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { GuiaCaptureForm } from '@/components/marketing/GuiaCaptureForm';

export const metadata: Metadata = {
  title: 'Baixe o Guia Definitivo para Controlar a Ansiedade (Grátis)',
  description:
    'Receba gratuitamente o Guia Definitivo com 20 técnicas e exercícios práticos para controlar a ansiedade na era digital. Basta informar seu e-mail.',
  robots: { index: true, follow: true },
};

const benefits = [
  '20 técnicas práticas, organizadas em blocos',
  'Um exercício aplicável ao final de cada técnica',
  'Plano de crise (SOS) e rotina anti-ansiedade',
  'Checklist semanal para acompanhar seu progresso',
  'Onde e como buscar ajuda quando precisar',
];

export default function CapturaGuiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Texto */}
            <div>
              <span className="mb-4 inline-block rounded-full border border-gold-500/40 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-600">
                E-book gratuito
              </span>
              <h1 className="font-serif text-3xl font-bold leading-tight text-dark-900 md:text-4xl">
                Controle a ansiedade na era digital — com um guia prático e gratuito
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Receba agora o <strong>Guia Definitivo</strong>: 20 técnicas comprovadas e
                exercícios para acalmar a mente no dia a dia. É só deixar seu nome e e-mail.
              </p>

              <ul className="mt-6 space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-0.5 text-primary-500" aria-hidden>
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulário */}
            <div className="lg:pl-6">
              <GuiaCaptureForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Reforço / autor */}
      <section className="py-14">
        <Container className="max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-dark-900">
            Escrito por quem cuida de pessoas
          </h2>
          <p className="mt-4 text-gray-600">
            O Guia Definitivo foi escrito por <strong>Francisco Gomes</strong>, pastor e terapeuta
            em TRG e ETF, unindo acolhimento e ferramentas práticas para ajudar você a viver com
            mais calma.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            ⚠️ Conteúdo educativo — não substitui acompanhamento profissional de saúde. Em caso de
            crise, ligue para o CVV: 188 (24h, gratuito).
          </p>
        </Container>
      </section>
    </>
  );
}
