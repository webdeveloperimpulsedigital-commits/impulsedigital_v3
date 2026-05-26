import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoSanpadaLocation from '@/components/pages/seo-locations/SeoSanpadaLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Sanpada | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Sanpada, helping businesses improve local search rankings and attract customers.',
  keywords: 'seo agency sanpada, local seo sanpada, digital marketing sanpada',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/sanpada/`,
  },
  openGraph: {
    title: 'SEO Agency in Sanpada | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Sanpada, helping businesses improve local search rankings and attract customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/sanpada/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Sanpada | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Sanpada, helping businesses improve local search rankings and attract customers.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoSanpadaLocationPage() {
  return <SeoSanpadaLocation />;
}
