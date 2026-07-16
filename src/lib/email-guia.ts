/**
 * TEMPLATE DE E-MAIL DE ENTREGA — Guia Definitivo
 *
 * Use este HTML de duas formas:
 *  A) Cole no editor de e-mail do MailerLite (automação "entrou no grupo → enviar").
 *  B) Envie via Resend/Nodemailer chamando emailTemplate(nome).
 *
 * O placeholder {{unsubscribe}} é substituído automaticamente pelo MailerLite.
 */
export function emailTemplate(nome: string, siteUrl?: string) {
  const base = siteUrl || process.env.SITE_URL || 'https://calmaglobal.com.br';
  const pdfUrl = `${base}/downloads/guia-definitivo-ansiedade.pdf`;

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Seu Guia Definitivo chegou!</title>
</head>
<body style="margin:0;padding:0;background:#F5F0E8;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F0E8;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:16px;overflow:hidden;max-width:100%;">

          <tr>
            <td style="background:#0D4F4F;padding:28px 32px;">
              <p style="margin:0;color:#C8A96E;font-size:12px;letter-spacing:2px;
                font-family:Arial,sans-serif;text-transform:uppercase;">
                🧘 Calma Global
              </p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;
                font-family:Georgia,serif;font-weight:bold;">
                Seu Guia Definitivo<br/>chegou, ${nome}!
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;color:#333;font-size:15px;line-height:1.7;">
                Que alegria ter você aqui. Este guia foi escrito com cuidado
                — e espero que seja um companheiro nos seus dias, tanto nos bons
                quanto nos difíceis.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td align="center">
                    <a href="${pdfUrl}"
                      style="display:inline-block;background:#C8A96E;color:#0D4F4F;
                        font-family:Arial,sans-serif;font-weight:bold;font-size:16px;
                        padding:16px 36px;border-radius:10px;text-decoration:none;">
                      📥 Baixar o Guia Definitivo (PDF)
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 12px;color:#555;font-size:14px;line-height:1.7;">
                <strong style="color:#0D4F4F;">Dica para começar:</strong><br/>
                Não tente aplicar as 20 técnicas de uma vez. Escolha <strong>2 ou 3</strong>
                que mais fazem sentido para você agora, pratique por uma semana e depois
                adicione outras.
              </p>

              <p style="margin:16px 0 0;color:#555;font-size:14px;line-height:1.7;">
                Nos próximos dias vou te enviar mais conteúdo prático sobre ansiedade.
                Se em algum momento quiser parar de receber, é só clicar em cancelar
                inscrição no rodapé — sem julgamento. 🙏
              </p>

              <hr style="border:none;border-top:1px solid #E8E4DC;margin:24px 0;"/>

              <p style="margin:0 0 8px;color:#0D4F4F;font-size:14px;font-weight:bold;">
                Precisa de um apoio mais próximo?
              </p>
              <p style="margin:0 0 16px;color:#555;font-size:13px;line-height:1.6;">
                Ofereço sessões individuais online (TRG + ETF).
                A primeira conversa é gratuita e sem compromisso.
              </p>
              <a href="${base}/atendimento"
                style="color:#1A7A6E;font-size:13px;font-family:Arial,sans-serif;">
                calmaglobal.com.br/atendimento →
              </a>
            </td>
          </tr>

          <tr>
            <td style="background:#0D4F4F;padding:20px 32px;">
              <p style="margin:0;color:#A8D5CC;font-size:12px;line-height:1.6;
                font-family:Arial,sans-serif;">
                Com carinho,<br/>
                <strong style="color:#C8A96E;">Francisco Gomes</strong><br/>
                Pastor · Terapeuta TRG &amp; ETF · Calma Global
              </p>
              <p style="margin:12px 0 0;color:#ffffff30;font-size:10px;
                font-family:Arial,sans-serif;">
                Conteúdo educativo — não substitui acompanhamento profissional.
                Em crise: CVV 188 (24h, gratuito).<br/>
                <a href="${base}/privacidade" style="color:#ffffff40;">Política de Privacidade</a>
                · <a href="{{unsubscribe}}" style="color:#ffffff40;">Cancelar inscrição</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
