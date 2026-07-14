'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Foto do autor com fallback para iniciais.
 * Coloque o arquivo em `public/images/autor-francisco-gomes.jpg`.
 * Enquanto o arquivo não existir, exibe um avatar com as iniciais.
 */
export function AuthorAvatar({
  src = '/images/autor-francisco-gomes.jpg',
  name = 'Francisco Gomes',
  size = 128,
}: {
  src?: string;
  name?: string;
  size?: number;
}) {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Cobre o caso em que a imagem falha ANTES da hidratação do React
  // (o evento onError não dispararia novamente).
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setError(true);
    }
  }, []);

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');

  if (error) {
    return (
      <div
        className="flex shrink-0 items-center justify-center rounded-full bg-primary-500 font-serif font-bold text-white ring-2 ring-gold-500/40"
        style={{ width: size, height: size, fontSize: size / 3 }}
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={`Foto de ${name}, autor do Calma Global`}
      width={size}
      height={size}
      onError={() => setError(true)}
      className="shrink-0 rounded-full object-cover ring-2 ring-gold-500/40"
      style={{ width: size, height: size }}
    />
  );
}
