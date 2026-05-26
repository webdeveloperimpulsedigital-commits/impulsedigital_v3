import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import B2BSEO from '@/components/pages/B2BSEO';

export const metadata: Metadata = {
  title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
  description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
  keywords: 'b2b seo, b2b seo agency, b2b search engine optimisation',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/b2b-seo/`,
  },
  openGraph: {
    title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/b2b-seo/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function B2BSEOPage() {
  return <B2BSEO />;
}
