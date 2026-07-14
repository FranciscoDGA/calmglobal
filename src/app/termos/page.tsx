import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: `Termos e condições de uso do site ${siteConfig.name}.`,
};

export default function TermosPage() {
  return (
    <Container className="max-w-3xl py-12">
      <h1 className="mb-6 text-3xl font-bold">Termos de Uso</h1>
      <div className="prose prose-lg max-w-none prose-a:text-primary-600">
        <p>
          Ao acessar e utilizar o site <strong>{siteConfig.name}</strong>, você concorda com os
          termos descritos abaixo. Leia com atenção.
        </p>

        <h2>1. Natureza do conteúdo</h2>
        <p>
          Todo o conteúdo do {siteConfig.name} tem caráter <strong>informativo e educativo</strong>.
          Ele <strong>não substitui</strong> o diagnóstico, o aconselhamento ou o tratamento de
          profissionais de saúde qualificados. Em caso de crises frequentes ou sofrimento intenso,
          procure um psicólogo ou médico.
        </p>

        <h2>2. Propriedade intelectual</h2>
        <p>
          Textos, imagens, e-books e demais materiais são protegidos por direitos autorais. É
          proibida a reprodução sem autorização prévia.
        </p>

        <h2>3. Produtos e pagamentos</h2>
        <p>
          Produtos pagos (e-books, cursos) são descritos em suas respectivas páginas. As condições
          de pagamento e a política de reembolso serão informadas no momento da compra.
        </p>

        <h2>4. Links externos</h2>
        <p>
          O site pode conter links para sites de terceiros, inclusive de parceiros afiliados. Não
          nos responsabilizamos pelo conteúdo ou pelas práticas desses sites.
        </p>

        <h2>5. Limitação de responsabilidade</h2>
        <p>
          O {siteConfig.name} não se responsabiliza por decisões tomadas com base no conteúdo
          publicado. O uso das informações é de responsabilidade do leitor.
        </p>

        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </Container>
  );
}
