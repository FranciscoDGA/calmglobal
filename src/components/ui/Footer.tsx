import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-primary-700">
            <span aria-hidden>🧘</span> {siteConfig.name}
          </div>
          <p className="mt-3 text-sm text-gray-600">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Navegação</h3>
          <ul className="mt-3 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Redes sociais</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={siteConfig.social.instagram} className="text-sm text-gray-600 hover:text-primary-600">
                Instagram
              </a>
            </li>
            <li>
              <a href={siteConfig.social.tiktok} className="text-sm text-gray-600 hover:text-primary-600">
                TikTok
              </a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin} className="text-sm text-gray-600 hover:text-primary-600">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. Conteúdo informativo — não substitui acompanhamento
            profissional de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
