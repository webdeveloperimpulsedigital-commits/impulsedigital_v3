import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoNaviMumbaiLocation from '@/components/pages/seo-locations/SeoNaviMumbaiLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Navi Mumbai | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Navi Mumbai to improve local search visibility and drive business growth.',
  keywords: 'seo agency navi-mumbai, local seo navi-mumbai, digital marketing navi-mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/navi-mumbai/`,
  },
  openGraph: {
    title: 'SEO Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Navi Mumbai to improve local search visibility and drive business growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/navi-mumbai/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Navi Mumbai to improve local search visibility and drive business growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoNaviMumbaiLocationPage() {
  return <SeoNaviMumbaiLocation />;
}
