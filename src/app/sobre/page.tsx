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
            Por <strong className="text-gray-700">Francisco Gomes</strong> · Autor e fundador
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
          Olá, eu sou <strong>Francisco Gomes</strong>, autor e fundador do {siteConfig.name}.
          Assim como muita gente, senti na pele como a vida digital — o excesso de notificações, a
          comparação nas redes sociais e a pressão por estar sempre disponível — pode alimentar a
          ansiedade no dia a dia.
        </p>
        <p>
          Foi essa experiência que me motivou a criar este espaço: um lugar para reunir, de forma
          simples e acessível, técnicas e informações que realmente ajudam a lidar com a ansiedade
          na era digital.
        </p>
        <p className="text-sm text-gray-500">
          {/* Substitua pelo seu texto real */}
          <em>
            (Espaço reservado para você contar sua jornada pessoal, sua formação e o que te
            trouxe até aqui.)
          </em>
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
