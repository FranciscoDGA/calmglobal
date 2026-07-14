'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site';

export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/blog/${slug}`;
  const text = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${text}%20${encodedUrl}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-6">
      <span className="text-sm font-medium text-gray-600">Compartilhar:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-primary-400 hover:text-primary-600"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="rounded-full border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-primary-400 hover:text-primary-600"
      >
        {copied ? '✓ Copiado!' : 'Copiar link'}
      </button>
    </div>
  );
}
