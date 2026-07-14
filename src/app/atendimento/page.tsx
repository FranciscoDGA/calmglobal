import type { Metadata } from 'next';
import { Button, Container } from '@/components/ui';
import { AuthorAvatar } from '@/components/marketing/AuthorAvatar';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Atendimento Individual',
  description:
    'Sessões individuais de apoio emocional com Francisco Gomes, pastor e terapeuta em TRG e ETF. Agende uma conversa inicial gratuita de 15 minutos.',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Francisco Gomes',
  jobTitle: 'Pastor e Terapeuta (TRG e ETF)',
  url: `${siteConfig.url}/atendimento`,
  worksFor: { '@type': 'Organization', name: siteConfig.name },
};

export default function AtendimentoPage() {
  return (
    <Container className="max-w-3xl py-12">
      <JsonLd data={personSchema} />

      {/* Cabeçalho */}
      <div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <AuthorAvatar name="Francisco Gomes" size={128} />
        <div>
          <h1 className="font-serif text-3xl font-bold text-dark-900">Atendimento individual</h1>
          <p className="mt-2 text-gray-600">
            Sessões de apoio emocional com <strong>Francisco Gomes</strong> — pastor e terapeuta
            em <strong>TRG</strong> e <strong>ETF</strong>.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none prose-a:text-primary-600">
        <p>
          Conviver com ansiedade, medo ou angústia pode ser solitário — mas você não precisa
          passar por isso sozinho. Nas sessões individuais, ofereço um espaço de{' '}
          <strong>acolhimento e escuta</strong>, unindo experiência pastoral a técnicas
          terapêuticas complementares para ajudar você a atravessar esse momento.
        </p>

        <h2>Para quem é</h2>
        <ul>
          <li>Pessoas que sentem ansiedade, angústia ou estresse no dia a dia</li>
          <li>Quem está passando por um momento difícil e precisa de apoio</li>
          <li>Quem busca autoconhecimento e equilíbrio emocional</li>
        </ul>

        <h2>Como funciona</h2>
        <ol>
          <li>
            <strong>Conversa inicial gratuita (15 min).</strong> Um primeiro contato, sem
            compromisso, para nos conhecermos e entender como posso ajudar.
          </li>
          <li>
            <strong>Sessões individuais online.</strong> Encontros conduzidos com acolhimento, no
            seu ritmo.
          </li>
          <li>
            <strong>Acompanhamento.</strong> Seguimos com um plano que faça sentido para a sua
            necessidade e disponibilidade.
          </li>
        </ol>

        <h2>Sobre as abordagens (TRG e ETF)</h2>
        <p>
          A <strong>TRG</strong> (Terapia de Reprocessamento Generativo) e a <strong>ETF</strong>{' '}
          (Técnicas de Libertação Emocional) são abordagens <strong>complementares</strong>,
          voltadas ao equilíbrio emocional. Elas não substituem tratamento médico ou psicológico,
          mas podem somar como apoio no seu cuidado.
        </p>

        <blockquote>
          ⚠️ As sessões têm caráter de apoio e acolhimento emocional e <strong>não substituem</strong>{' '}
          diagnóstico, tratamento médico ou psicológico. Se você estiver em sofrimento intenso ou
          com pensamentos de se machucar, procure ajuda imediatamente: ligue para o{' '}
          <strong>CVV — 188</strong> (24h, gratuito e sigiloso) ou vá a um serviço de emergência.
        </blockquote>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary-700 to-dark-900 p-8 text-center text-white ring-1 ring-gold-500/30">
        <h2 className="font-serif text-2xl font-bold">Vamos conversar?</h2>
        <p className="mx-auto mt-2 max-w-xl text-white/90">
          A primeira conversa é <strong>gratuita</strong> e sem compromisso. As vagas são
          limitadas — deixe sua mensagem e eu retorno para combinarmos o melhor horário.
        </p>
        <div className="mt-6">
          <Button
            href="/contato?assunto=Quero%20agendar%20uma%20conversa%20de%20triagem%20gratuita"
            variant="secondary"
            size="lg"
          >
            Agendar conversa gratuita
          </Button>
        </div>
      </div>
    </Container>
  );
}
