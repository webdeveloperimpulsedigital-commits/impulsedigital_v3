import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoBandraLocation from '@/components/pages/seo-locations/SeoBandraLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Bandra | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Bandra, helping businesses improve their search rankings and attract local customers.',
  keywords: 'seo agency bandra, local seo bandra, digital marketing bandra',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/bandra/`,
  },
  openGraph: {
    title: 'SEO Agency in Bandra | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Bandra, helping businesses improve their search rankings and attract local customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/bandra/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Bandra | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Bandra, helping businesses improve their search rankings and attract local customers.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoBandraLocationPage() {
  return <SeoBandraLocation />;
}
