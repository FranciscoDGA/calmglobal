/**
 * Gera um PDF a partir de um markdown, com a identidade visual do Calma Global.
 *
 * Uso:
 *   node scripts/build-ebook.mjs <input.md> <output.pdf> "<Título capa>" "<Subtítulo capa>" "<Selo>"
 *
 * ⚠️ NÃO gere e-books PAGOS dentro de /public — eles ficariam acessíveis por URL.
 *    Gere em uma pasta local e faça o upload manual para a Hotmart.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { marked } from 'marked';
import { chromium } from 'playwright-core';

const [input, output, coverTitle, coverSubtitle, badge] = process.argv.slice(2);
if (!input || !output) {
  console.error('Uso: node scripts/build-ebook.mjs <input.md> <output.pdf> "<Título>" "<Subtítulo>" "<Selo>"');
  process.exit(1);
}

let md = readFileSync(input, 'utf8');
md = md.replace(/<!--[\s\S]*?-->/g, '');            // remove comentários de layout
md = md.replace(/#\s*CAPA[\s\S]*?\n---\n/i, '');     // remove bloco de capa (usamos capa custom)
md = md.trim();

marked.setOptions({ gfm: true, breaks: false });
const body = marked.parse(md);

const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #1f2937; line-height: 1.6; font-size: 12pt; }
  h1, h2, h3 { font-family: Georgia, serif; color: #111827; line-height: 1.25; }
  h1 { page-break-before: always; color: #1E3A8A; font-size: 21pt; margin: 0 0 14px; padding-bottom: 8px; border-bottom: 3px solid #D4AF37; }
  h2 { font-size: 15pt; color: #1E3A8A; margin: 20px 0 8px; }
  h3 { font-size: 12.5pt; margin: 14px 0 6px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 12px; padding-left: 22px; }
  li { margin: 4px 0; }
  strong { color: #111827; }
  hr { display: none; }
  blockquote { margin: 12px 0; padding: 10px 16px; background: #f0f4ff; border-left: 4px solid #D4AF37; border-radius: 4px; color: #374151; }
  blockquote p { margin: 0; }
  a { color: #1E3A8A; }
  table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 10pt; }
  th, td { border: 1px solid #d1d5db; padding: 6px 8px; text-align: center; }
  th { background: #1E3A8A; color: #fff; }
  h2, h3 { page-break-after: avoid; }
  table, blockquote { page-break-inside: avoid; }
  .cover { page-break-after: always; height: 245mm; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    background: linear-gradient(160deg, #1E3A8A 0%, #111827 100%); color: #fff; border-radius: 10px; padding: 30px; }
  .cover .emoji { font-size: 46pt; }
  .cover .pill { border: 1px solid rgba(212,175,55,.7); color: #D4AF37; text-transform: uppercase;
    letter-spacing: 3px; font-size: 9pt; padding: 6px 14px; border-radius: 999px; margin-bottom: 26px; font-family: Arial, sans-serif; }
  .cover h1 { border: 0; page-break-before: avoid; color: #fff; font-size: 34pt; margin: 0 0 12px; }
  .cover .sub { font-size: 14pt; color: rgba(255,255,255,.9); max-width: 85%; margin: 0 auto 30px; }
  .cover .author { font-family: Arial, sans-serif; font-size: 12pt; color: #D4AF37; }
  .cover .brand { margin-top: 40px; font-family: Arial, sans-serif; font-size: 11pt; color: rgba(255,255,255,.75); }
</style></head><body>
  <section class="cover">
    <div class="emoji">🧘</div>
    <div class="pill">${badge || 'Calma Global'}</div>
    <h1>${coverTitle || 'Calma Global'}</h1>
    <p class="sub">${coverSubtitle || ''}</p>
    <div class="author">por Francisco Gomes</div>
    <div class="brand">calmaglobal.com.br</div>
  </section>
  ${body}
</body></html>`;

const htmlTmp = output.replace(/\.pdf$/i, '.html');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(htmlTmp, html);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage();
await page.goto('file://' + htmlTmp, { waitUntil: 'networkidle' });
await page.pdf({ path: output, format: 'A4', printBackground: true });
await browser.close();
console.log('PDF gerado:', output);
