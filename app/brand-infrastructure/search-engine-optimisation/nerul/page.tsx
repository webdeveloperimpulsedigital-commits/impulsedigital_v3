import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoNerulLocation from '@/components/pages/seo-locations/SeoNerulLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Nerul | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Nerul, helping businesses rank higher and attract more local customers.',
  keywords: 'seo agency nerul, local seo nerul, digital marketing nerul',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/nerul/`,
  },
  openGraph: {
    title: 'SEO Agency in Nerul | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Nerul, helping businesses rank higher and attract more local customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/nerul/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Nerul | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Nerul, helping businesses rank higher and attract more local customers.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoNerulLocationPage() {
  return <SeoNerulLocation />;
}
