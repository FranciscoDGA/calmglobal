import { Button, Container } from '@/components/ui';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-6xl">🧘</p>
      <h1 className="mt-6 text-3xl font-bold">Página não encontrada</h1>
      <p className="mt-3 text-gray-600">
        Respire fundo — a página que você procura não existe ou foi movida.
      </p>
      <div className="mt-8">
        <Button href="/">Voltar ao início</Button>
      </div>
    </Container>
  );
}
