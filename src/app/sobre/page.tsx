import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { AuthorAvatar } from '@/components/marketing/AuthorAvatar';
import { Testimonials } from '@/components/marketing/Testimonials';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre',
  description: `Conheça o ${siteConfig.name} e Francisco Gomes, o autor por trás do blog dedicado a ajudar você a controlar a ansiedade na era digital.`,
};

export default function SobrePage() {
  return (
    <Container className="max-w-3xl py-12">
      {/* Autor */}
      <div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <AuthorAvatar name="Francisco Gomes" size={128} />
        <div>
          <h1 className="font-serif text-3xl font-bold text-dark-900">Sobre o {siteConfig.name}</h1>
          <p className="mt-1 text-gray-500">
            Por <strong className="text-gray-700">Francisco Gomes</strong> · Pastor e Terapeuta em
            TRG e ETF
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none prose-a:text-primary-600">
        {/*
          NOTA PARA O FRANCISCO: personalize os parágrafos abaixo com a SUA
          história real. Evite afirmações não verificáveis (números de pessoas
          atendidas, títulos que você não possua). Autenticidade constrói autoridade.
        */}
        <h2>Minha história</h2>
        <p>
          Olá, eu sou <strong>Francisco Gomes</strong>, autor e fundador do {siteConfig.name}. Sou{' '}
          <strong>pastor</strong> e <strong>terapeuta em TRG</strong> (Terapia de Reprocessamento
          Generativo) <strong>e ETF</strong> (Técnicas de Libertação Emocional). Ao longo da minha
          caminhada, aprendi que o cuidado com as emoções e o acolhimento fazem toda a diferença na
          vida das pessoas.
        </p>
        <p>
          Criei este espaço para reunir, de forma simples e acessível, técnicas e informações que
          realmente ajudam a lidar com a ansiedade na era digital — e para oferecer apoio a quem
          precisa de uma escuta cuidadosa.
        </p>
        <p className="text-sm text-gray-500">
          {/* Francisco: personalize com mais detalhes reais da sua trajetória, se quiser. */}
          <em>
            (Você pode acrescentar aqui mais detalhes da sua jornada pessoal e da sua formação.)
          </em>
        </p>
        <p>
          👉 Precisa de apoio individual?{' '}
          <a href="/atendimento">Conheça meu atendimento e agende uma conversa gratuita</a>.
        </p>

        <h2>Nossa missão</h2>
        <p>
          A missão do {siteConfig.name} é oferecer <strong>conteúdo prático, acessível e baseado
          em evidências</strong> para ajudar você a entender e controlar a ansiedade — sem
          promessas milagrosas e sem jargão complicado.
        </p>

        <h2>O que você encontra aqui</h2>
        <ul>
          <li>Técnicas práticas para reduzir a ansiedade no dia a dia</li>
          <li>Conteúdo sobre ansiedade causada por IA e redes sociais</li>
          <li>Guias, e-books e materiais gratuitos e pagos</li>
        </ul>

        <blockquote>
          ⚠️ O conteúdo do {siteConfig.name} é informativo e educativo. Ele não substitui o
          diagnóstico ou o tratamento de profissionais de saúde. Em caso de crises frequentes,
          procure um psicólogo ou médico.
        </blockquote>
      </div>

      {/* Depoimentos reais (renderiza apenas quando houver) */}
      <Testimonials />
    </Container>
  );
}
