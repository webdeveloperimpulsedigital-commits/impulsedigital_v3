import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAiroliLocation from '@/components/pages/seo-locations/SeoAiroliLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Airoli | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Airoli, helping businesses in Airoli rank higher and attract more customers through search.',
  keywords: 'seo agency airoli, local seo airoli, digital marketing airoli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/airoli/`,
  },
  openGraph: {
    title: 'SEO Agency in Airoli | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Airoli, helping businesses in Airoli rank higher and attract more customers through search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/airoli/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Airoli | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Airoli, helping businesses in Airoli rank higher and attract more customers through search.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoAiroliLocationPage() {
  return <SeoAiroliLocation />;
}
