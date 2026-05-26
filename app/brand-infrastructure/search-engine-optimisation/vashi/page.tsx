import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoVashiLocation from '@/components/pages/seo-locations/SeoVashiLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Vashi | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Vashi, helping businesses rank higher in local search and attract more customers.',
  keywords: 'seo agency vashi, local seo vashi, digital marketing vashi',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/vashi/`,
  },
  openGraph: {
    title: 'SEO Agency in Vashi | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Vashi, helping businesses rank higher in local search and attract more customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/vashi/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Vashi | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Vashi, helping businesses rank higher in local search and attract more customers.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoVashiLocationPage() {
  return <SeoVashiLocation />;
}
