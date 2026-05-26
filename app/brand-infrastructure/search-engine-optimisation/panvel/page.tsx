import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoPanvelLocation from '@/components/pages/seo-locations/SeoPanvelLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Panvel | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Panvel, driving better local search rankings and business visibility.',
  keywords: 'seo agency panvel, local seo panvel, digital marketing panvel',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/panvel/`,
  },
  openGraph: {
    title: 'SEO Agency in Panvel | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Panvel, driving better local search rankings and business visibility.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/panvel/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Panvel | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Panvel, driving better local search rankings and business visibility.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoPanvelLocationPage() {
  return <SeoPanvelLocation />;
}
