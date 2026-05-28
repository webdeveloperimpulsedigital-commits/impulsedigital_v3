import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGoregaonLocation from '@/components/pages/seo-locations/SeoGoregaonLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Goregaon | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Goregaon, helping businesses rank higher in local search results.',
  keywords: 'seo agency goregaon, local seo goregaon, digital marketing goregaon',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/goregaon/`,
  },
  openGraph: {
    title: 'SEO Agency in Goregaon | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Goregaon, helping businesses rank higher in local search results.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/goregaon/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Goregaon | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Goregaon, helping businesses rank higher in local search results.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoGoregaonLocationPage() {
  return <SeoGoregaonLocation />;
}
