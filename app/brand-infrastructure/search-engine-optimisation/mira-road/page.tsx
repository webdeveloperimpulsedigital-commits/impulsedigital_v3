import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMiraRoadLocation from '@/components/pages/seo-locations/SeoMiraRoadLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Mira Road | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Mira Road, helping businesses rank higher and attract more local customers.',
  keywords: 'seo agency mira-road, local seo mira-road, digital marketing mira-road',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mira-road/`,
  },
  openGraph: {
    title: 'SEO Agency in Mira Road | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Mira Road, helping businesses rank higher and attract more local customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mira-road/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mira Road | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Mira Road, helping businesses rank higher and attract more local customers.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMiraRoadLocationPage() {
  return <SeoMiraRoadLocation />;
}
