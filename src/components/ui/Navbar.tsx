'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/site';
import { LanguageSelector } from './LanguageSelector';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary-700">
          <span className="text-2xl" aria-hidden>
            🧘
          </span>
          {siteConfig.name}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
          <form action="/blog" method="get" className="relative">
            <input
              type="search"
              name="search"
              placeholder="Buscar..."
              aria-label="Buscar posts"
              className="w-40 rounded-full border border-gray-300 py-1.5 pl-4 pr-9 text-sm focus:w-52 focus:border-primary-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>
          </form>
          <LanguageSelector />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-gray-600 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={cn('border-t border-gray-100 md:hidden', open ? 'block' : 'hidden')}>
        <div className="flex flex-col gap-1 px-4 py-3">
          <form action="/blog" method="get" className="mb-2 px-2">
            <input
              type="search"
              name="search"
              placeholder="Buscar posts..."
              aria-label="Buscar posts"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
            />
          </form>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-2 py-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
