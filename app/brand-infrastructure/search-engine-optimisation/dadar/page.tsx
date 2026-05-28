import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoDadarLocation from '@/components/pages/seo-locations/SeoDadarLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Dadar | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Dadar, helping businesses improve rankings and attract local customers.',
  keywords: 'seo agency dadar, local seo dadar, digital marketing dadar',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/dadar/`,
  },
  openGraph: {
    title: 'SEO Agency in Dadar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Dadar, helping businesses improve rankings and attract local customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/dadar/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Dadar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Dadar, helping businesses improve rankings and attract local customers.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoDadarLocationPage() {
  return <SeoDadarLocation />;
}
