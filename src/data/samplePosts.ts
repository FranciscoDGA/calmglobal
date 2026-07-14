import type { Post } from '@/types';

/**
 * Posts de exemplo usados quando o Supabase ainda não está configurado.
 * Assim o site é totalmente navegável em desenvolvimento.
 * Depois, estes mesmos dados podem ser migrados para o banco (ver supabase/schema.sql).
 */
export const samplePosts: Post[] = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    title: '10 Técnicas Científicas para Controlar a Ansiedade em 5 Minutos (Funciona!)',
    slug: '10-tecnicas-para-ansiedade',
    category: 'tecnicas-para-ansiedade',
    language: 'pt-br',
    featured_image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    excerpt:
      'Descubra 10 técnicas comprovadas pela ciência para reduzir a ansiedade em minutos, sem remédios ou terapias caras.',
    published_at: '2026-07-14T09:00:00Z',
    updated_at: '2026-07-14T09:00:00Z',
    content: `**Sabia que cerca de 30% dos brasileiros convivem com ansiedade?** E o pior: a maioria não sabe como lidar com isso. Se você já sentiu o coração acelerado, suor frio ou pensamentos negativos em looping, saiba que **não está sozinho** — e que **existem soluções práticas** para controlar a ansiedade **em minutos**.

Neste post você vai aprender **10 técnicas comprovadas pela ciência** para acalmar a mente rapidamente.

## O que é ansiedade?

A ansiedade é uma **reação natural do corpo** a situações de estresse ou perigo. Ela ativa o sistema nervoso simpático, liberando hormônios como **cortisol e adrenalina** (a famosa resposta de "luta ou fuga").

**Sintomas comuns:**
- Taquicardia
- Suor excessivo
- Tremores
- Pensamentos acelerados
- Dificuldade para dormir

**Causas modernas:** redes sociais (comparação, FOMO), trabalho remoto (isolamento), IA e automação (medo de perder o emprego) e excesso de informação.

## 10 técnicas para controlar a ansiedade

### 1. Respiração 4-7-8
Inspire pelo nariz contando até 4, segure por 7 e expire pela boca em 8. Repita 4 vezes. Ativa o sistema nervoso parassimpático, responsável pelo relaxamento.

### 2. Meditação guiada
Comece com 5 minutos por dia usando um app de meditação. Reduz o cortisol e melhora o foco.

### 3. Exercícios físicos
30 minutos de atividade liberam endorfina e serotonina, reduzindo a tensão muscular típica das crises.

### 4. Journaling
Escreva 3 coisas pelas quais você é grato e 1 preocupação com um possível caminho de solução. Organiza os pensamentos.

### 5. Limite de cafeína e açúcar
A cafeína eleva o cortisol; o açúcar causa picos e quedas de energia. Prefira chá de camomila ou água com limão.

### 6. Sono de qualidade
Evite telas 1 hora antes de dormir, mantenha horários regulares e um quarto fresco (18–22 °C).

### 7. Terapia cognitivo-comportamental (TCC)
Identifique pensamentos automáticos negativos e substitua por versões realistas.

### 8. Aromaterapia
Lavanda, camomila e bergamota ajudam a reduzir a frequência cardíaca e o cortisol.

### 9. Música relaxante
Sons da natureza e batidas binaurais reduzem o cortisol e aumentam a sensação de bem-estar.

### 10. Desconexão digital
Desative notificações e reserve 1 dia por semana longe das redes sociais.

## Como aplicar no dia a dia

1. **De manhã:** respiração 4-7-8 + journaling (5–10 min).
2. **Durante o dia:** pausas para caminhar a cada 2 horas.
3. **À noite:** meditação + desconexão digital 1 hora antes de dormir.

## Conclusão

A ansiedade **não é uma sentença**. Com as técnicas certas você pode reduzi-la em minutos e prevenir crises a longo prazo. Comece com 1 ou 2 técnicas e vá adicionando conforme se sentir confortável.

> ⚠️ Este conteúdo é informativo e não substitui acompanhamento profissional. Em caso de crises frequentes, procure um psicólogo ou médico.`,
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    title: 'Ansiedade por Redes Sociais: Como o Instagram Pode Estar Te Adoecendo',
    slug: 'ansiedade-por-redes-sociais',
    category: 'ansiedade-redes-sociais',
    language: 'pt-br',
    featured_image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
    excerpt:
      'A comparação constante e o FOMO das redes sociais alimentam a ansiedade. Entenda o mecanismo e veja como se proteger.',
    published_at: '2026-07-12T09:00:00Z',
    updated_at: '2026-07-12T09:00:00Z',
    content: `As redes sociais foram feitas para prender sua atenção — e isso tem um custo para a saúde mental. Neste artigo explicamos por que elas aumentam a ansiedade e o que fazer a respeito.

## O ciclo da comparação

Cada rolagem apresenta versões editadas da vida alheia. O cérebro compara essa "vitrine" com a sua realidade e conclui, injustamente, que você está ficando para trás.

## FOMO: o medo de ficar de fora

O *Fear of Missing Out* mantém você conectado por medo de perder algo. O resultado é atenção fragmentada e sensação constante de urgência.

## Sinais de alerta

- Ansiedade ao ficar sem o celular
- Checagem compulsiva de notificações
- Comparação frequente com outras pessoas
- Sono prejudicado pelo uso noturno

## Como se proteger

1. Desative notificações não essenciais.
2. Defina horários fixos para usar redes.
3. Faça um "detox digital" de 24h por semana.
4. Siga menos contas que geram comparação e mais que informam ou acalmam.

A tecnologia deve trabalhar para você — não o contrário.`,
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    title: 'Medo de Ser Substituído pela IA? Como Lidar com Essa Ansiedade',
    slug: 'medo-de-ser-substituido-por-ia',
    category: 'ansiedade-ia',
    language: 'pt-br',
    featured_image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    excerpt:
      'A ascensão da inteligência artificial trouxe uma nova forma de ansiedade. Veja como transformar o medo em adaptação.',
    published_at: '2026-07-10T09:00:00Z',
    updated_at: '2026-07-10T09:00:00Z',
    content: `A cada avanço da IA surge a mesma pergunta: "meu trabalho está seguro?". Esse medo é real e legítimo — mas pode ser canalizado de forma produtiva.

## Por que a IA gera ansiedade

- Incerteza sobre o futuro profissional
- Ritmo acelerado de mudanças
- Excesso de notícias alarmistas

## Reenquadrando o medo

A IA automatiza **tarefas**, não necessariamente **profissões**. Quem aprende a usá-la como ferramenta ganha vantagem competitiva.

## Plano prático de adaptação

1. **Identifique** quais tarefas suas são repetitivas.
2. **Aprenda** a usar ferramentas de IA no seu campo.
3. **Desenvolva** habilidades humanas: criatividade, empatia, pensamento crítico.
4. **Atualize-se** com pequenas doses de estudo semanal.

Transformar ansiedade em ação é o melhor antídoto contra a paralisia do medo.`,
  },
];
