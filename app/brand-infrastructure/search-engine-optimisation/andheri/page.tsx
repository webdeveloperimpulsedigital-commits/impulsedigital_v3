import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAndheriLocation from '@/components/pages/seo-locations/SeoAndheriLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Andheri | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Andheri, helping businesses rank higher in local search and attract more customers.',
  keywords: 'seo agency andheri, local seo andheri, digital marketing andheri',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/andheri/`,
  },
  openGraph: {
    title: 'SEO Agency in Andheri | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Andheri, helping businesses rank higher in local search and attract more customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/andheri/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Andheri | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Andheri, helping businesses rank higher in local search and attract more customers.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoAndheriLocationPage() {
  return <SeoAndheriLocation />;
}
