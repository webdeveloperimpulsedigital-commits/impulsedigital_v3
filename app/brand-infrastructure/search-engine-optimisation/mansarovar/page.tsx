import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMansarovarLocation from '@/components/pages/seo-locations/SeoMansarovarLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Mansarovar | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Mansarovar to drive better local search rankings and business growth.',
  keywords: 'seo agency mansarovar, local seo mansarovar, digital marketing mansarovar',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mansarovar/`,
  },
  openGraph: {
    title: 'SEO Agency in Mansarovar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Mansarovar to drive better local search rankings and business growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mansarovar/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mansarovar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Mansarovar to drive better local search rankings and business growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMansarovarLocationPage() {
  return <SeoMansarovarLocation />;
}
