/**
 * ROTA DE API — CAPTURA DE LEAD (Guia Definitivo)
 * Arquivo: src/app/api/captura-guia/route.ts
 *
 * Fluxo:
 * 1. Recebe { nome, email } do formulário da landing page.
 * 2. Adiciona o lead ao MailerLite (opcionalmente a um grupo específico).
 * 3. A entrega do PDF é feita:
 *    - na hora, pelo botão de download revelado na própria página; e/ou
 *    - por e-mail, via uma AUTOMAÇÃO do MailerLite (recomendado):
 *      "Quando o assinante entra no grupo X → enviar e-mail de entrega".
 *      (O HTML pronto do e-mail está em src/lib/email-guia.ts.)
 *
 * Variáveis de ambiente (.env.local):
 *   MAILERLITE_API_KEY=...        (obrigatória — SERVER-SIDE, sem NEXT_PUBLIC)
 *   MAILERLITE_GROUP_ID=...       (opcional — grupo do Guia Definitivo)
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { nome, email } = await req.json();

    // ── Validação básica ────────────────────────────────────────
    if (!nome || typeof nome !== 'string' || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error('[captura-guia] MAILERLITE_API_KEY não configurada.');
      return NextResponse.json(
        { error: 'Serviço de e-mail indisponível no momento.' },
        { status: 503 },
      );
    }

    // ── MailerLite: cria/atualiza o assinante ───────────────────
    const payload: Record<string, unknown> = {
      email,
      fields: { name: nome },
    };
    if (process.env.MAILERLITE_GROUP_ID) {
      payload.groups = [process.env.MAILERLITE_GROUP_ID];
    }

    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    // MailerLite retorna 200/201 ao criar ou atualizar o assinante.
    if (!mlRes.ok) {
      const detail = await mlRes.text();
      console.error('[captura-guia] MailerLite erro:', mlRes.status, detail);
      return NextResponse.json(
        { error: 'Não foi possível concluir agora. Tente novamente em instantes.' },
        { status: 502 },
      );
    }

    console.log(`[captura-guia] Novo lead: ${nome} <${email}>`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[captura-guia] Erro:', err);
    return NextResponse.json({ error: 'Erro interno. Tente novamente.' }, { status: 500 });
  }
}
