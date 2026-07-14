'use client';

import { useState } from 'react';
import { languages } from '@/lib/site';
import type { Language } from '@/types';

/**
 * Seletor de idioma. Apenas PT-BR está ativo; EN/ES aparecem como "em breve".
 * Terreno preparado para a internacionalização futura (i18n).
 */
export function LanguageSelector() {
  const [locale, setLocale] = useState<Language>('pt-br');

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Language)}
      aria-label="Selecionar idioma"
      className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-700 focus:border-primary-500 focus:outline-none"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code} disabled={!lang.enabled}>
          {lang.flag} {lang.label}
          {!lang.enabled ? ' (em breve)' : ''}
        </option>
      ))}
    </select>
  );
}
