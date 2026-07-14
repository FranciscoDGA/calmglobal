import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: `Saiba como o ${siteConfig.name} coleta, usa e protege seus dados pessoais.`,
};

export default function PrivacidadePage() {
  return (
    <Container className="max-w-3xl py-12">
      <h1 className="mb-6 text-3xl font-bold">Política de Privacidade</h1>
      <div className="prose prose-lg max-w-none prose-a:text-primary-600">
        <p>
          Esta Política de Privacidade descreve como o <strong>{siteConfig.name}</strong> coleta,
          usa e protege as informações dos visitantes deste site, em conformidade com a Lei Geral
          de Proteção de Dados (LGPD – Lei nº 13.709/2018).
        </p>

        <h2>1. Dados que coletamos</h2>
        <ul>
          <li>
            <strong>Dados fornecidos por você:</strong> nome e e-mail, quando você preenche o
            formulário de contato ou se inscreve na newsletter.
          </li>
          <li>
            <strong>Dados de navegação:</strong> páginas visitadas, tempo de permanência e origem
            do acesso, coletados por ferramentas de análise (ex.: Google Analytics).
          </li>
          <li>
            <strong>Cookies:</strong> pequenos arquivos usados para melhorar sua experiência e
            exibir anúncios relevantes.
          </li>
        </ul>

        <h2>2. Como usamos seus dados</h2>
        <ul>
          <li>Responder a solicitações enviadas pelo formulário de contato;</li>
          <li>Enviar conteúdos e novidades, quando você autoriza;</li>
          <li>Melhorar o site e entender o comportamento dos visitantes;</li>
          <li>Exibir anúncios por meio de parceiros como o Google AdSense.</li>
        </ul>

        <h2>3. Cookies e publicidade</h2>
        <p>
          Utilizamos cookies próprios e de terceiros. Provedores externos, incluindo o Google,
          podem usar cookies para exibir anúncios com base em visitas anteriores a este e a outros
          sites. Você pode desativar os cookies nas configurações do seu navegador.
        </p>

        <h2>4. Seus direitos</h2>
        <p>
          Você pode solicitar, a qualquer momento, o acesso, a correção ou a exclusão dos seus
          dados pessoais entrando em contato conosco pela página de{' '}
          <a href="/contato">Contato</a>.
        </p>

        <h2>5. Alterações</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Recomendamos revisá-la de tempos em
          tempos.
        </p>

        <p className="text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </Container>
  );
}
