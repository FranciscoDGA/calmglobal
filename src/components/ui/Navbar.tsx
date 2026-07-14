'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/site';
import { LanguageSelector } from './LanguageSelector';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-lg text-white ring-1 ring-gold-500/40"
            aria-hidden
          >
            🧘
          </span>
          <span className="font-serif text-xl font-bold text-dark-900">{siteConfig.name}</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-primary-500"
                >
                  {item.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-hover:rotate-180"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[190px] overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-500"
              >
                {item.label}
              </Link>
            ),
          )}
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
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 border-l border-gray-100 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm text-gray-500 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-2 py-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
