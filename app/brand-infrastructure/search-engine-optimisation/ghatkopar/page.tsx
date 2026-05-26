import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGhatkoparLocation from '@/components/pages/seo-locations/SeoGhatkoparLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Ghatkopar | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Ghatkopar, driving better search rankings and local visibility.',
  keywords: 'seo agency ghatkopar, local seo ghatkopar, digital marketing ghatkopar',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ghatkopar/`,
  },
  openGraph: {
    title: 'SEO Agency in Ghatkopar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Ghatkopar, driving better search rankings and local visibility.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ghatkopar/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Ghatkopar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Ghatkopar, driving better search rankings and local visibility.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoGhatkoparLocationPage() {
  return <SeoGhatkoparLocation />;
}
