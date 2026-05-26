import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMaladLocation from '@/components/pages/seo-locations/SeoMaladLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Malad | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Malad, helping businesses improve local search visibility and attract customers.',
  keywords: 'seo agency malad, local seo malad, digital marketing malad',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/malad/`,
  },
  openGraph: {
    title: 'SEO Agency in Malad | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Malad, helping businesses improve local search visibility and attract customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/malad/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Malad | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Malad, helping businesses improve local search visibility and attract customers.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoMaladLocationPage() {
  return <SeoMaladLocation />;
}
