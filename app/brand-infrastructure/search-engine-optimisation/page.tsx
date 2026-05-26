import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SearchEngineOptimisation from '@/components/pages/SearchEngineOptimisation';

export const metadata: Metadata = {
  title: 'SEO Agency in Mumbai | Search Engine Optimisation | Impulse Digital',
  description: 'Impulse Digital is a leading SEO agency in Mumbai offering enterprise, ecommerce, B2B and local SEO services to improve search rankings and drive organic growth.',
  keywords: 'seo agency in mumbai, search engine optimisation, seo services',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/`,
  },
  openGraph: {
    title: 'SEO Agency in Mumbai | Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital is a leading SEO agency in Mumbai offering enterprise, ecommerce, B2B and local SEO services to improve search rankings and drive organic growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mumbai | Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital is a leading SEO agency in Mumbai offering enterprise, ecommerce, B2B and local SEO services to improve search rankings and drive organic growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SearchEngineOptimisationPage() {
  return <SearchEngineOptimisation />;
}
