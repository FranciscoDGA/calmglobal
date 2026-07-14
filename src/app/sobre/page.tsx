import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre',
  description: `Conheça o ${siteConfig.name}, o blog dedicado a ajudar você a controlar a ansiedade na era digital.`,
};

export default function SobrePage() {
  return (
    <Container className="max-w-3xl py-12">
      <h1 className="mb-6 text-3xl font-bold">Sobre o {siteConfig.name}</h1>
      <div className="prose prose-lg max-w-none prose-a:text-primary-600">
        <p>
          O <strong>{siteConfig.name}</strong> nasceu de uma constatação simples: a vida moderna,
          com sua avalanche de notificações, comparações nas redes sociais e a rápida ascensão da
          inteligência artificial, tem deixado milhões de pessoas ansiosas.
        </p>
        <p>
          Nossa missão é oferecer <strong>conteúdo prático, acessível e baseado em ciência</strong>{' '}
          para ajudar você a entender e controlar a ansiedade — sem promessas milagrosas.
        </p>
        <h2>O que você encontra aqui</h2>
        <ul>
          <li>Técnicas comprovadas para reduzir a ansiedade no dia a dia</li>
          <li>Conteúdo sobre ansiedade causada por IA e redes sociais</li>
          <li>Guias, e-books e materiais gratuitos e pagos</li>
        </ul>
        <blockquote>
          ⚠️ O conteúdo do {siteConfig.name} é informativo e educativo. Ele não substitui o
          diagnóstico ou o tratamento de profissionais de saúde. Em caso de crises frequentes,
          procure um psicólogo ou médico.
        </blockquote>
      </div>
    </Container>
  );
}
