import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoTurbheLocation from '@/components/pages/seo-locations/SeoTurbheLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Turbhe | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Turbhe to improve search rankings and drive local business growth.',
  keywords: 'seo agency turbhe, local seo turbhe, digital marketing turbhe',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/turbhe/`,
  },
  openGraph: {
    title: 'SEO Agency in Turbhe | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Turbhe to improve search rankings and drive local business growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/turbhe/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Turbhe | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Turbhe to improve search rankings and drive local business growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoTurbheLocationPage() {
  return <SeoTurbheLocation />;
}
