import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import LocalSEO from '@/components/pages/LocalSEO';

export const metadata: Metadata = {
  title: 'Local SEO Services in Mumbai | Impulse Digital',
  description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
  keywords: 'local seo, local seo services, local seo agency mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/local-seo/`,
  },
  openGraph: {
    title: 'Local SEO Services in Mumbai | Impulse Digital',
    description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/local-seo/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in Mumbai | Impulse Digital',
    description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function LocalSEOPage() {
  return <LocalSEO />;
}
