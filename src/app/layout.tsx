import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components/ui';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'hg0mAAEfUhJoXaGNgvTE6DlkvTVjRlj_xmdg06ya1qY',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.tiktok,
    siteConfig.social.linkedin,
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/blog?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#FAFAFA] font-sans text-gray-800 antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
