import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ECommerceSEO from '@/components/pages/ECommerceSEO';

export const metadata: Metadata = {
  title: 'Ecommerce SEO Services | Impulse Digital',
  description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
  keywords: 'ecommerce seo, ecommerce seo agency, ecommerce seo services',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ecommerce-seo/`,
  },
  openGraph: {
    title: 'Ecommerce SEO Services | Impulse Digital',
    description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ecommerce-seo/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Services | Impulse Digital',
    description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ECommerceSEOPage() {
  return <ECommerceSEO />;
}
