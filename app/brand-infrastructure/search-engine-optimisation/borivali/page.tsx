import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoBorivaliLocation from '@/components/pages/seo-locations/SeoBorivaliLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Borivali | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Borivali, helping businesses rank higher and drive more organic traffic.',
  keywords: 'seo agency borivali, local seo borivali, digital marketing borivali',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/borivali/`,
  },
  openGraph: {
    title: 'SEO Agency in Borivali | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Borivali, helping businesses rank higher and drive more organic traffic.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/borivali/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Borivali | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Borivali, helping businesses rank higher and drive more organic traffic.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoBorivaliLocationPage() {
  return <SeoBorivaliLocation />;
}
