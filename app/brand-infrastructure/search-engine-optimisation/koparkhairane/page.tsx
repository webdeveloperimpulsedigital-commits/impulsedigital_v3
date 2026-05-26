import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKoparkhairaneLocation from '@/components/pages/seo-locations/SeoKoparkhairaneLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Koparkhairane | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Koparkhairane to help businesses rank higher and attract more customers.',
  keywords: 'seo agency koparkhairane, local seo koparkhairane, digital marketing koparkhairane',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/koparkhairane/`,
  },
  openGraph: {
    title: 'SEO Agency in Koparkhairane | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Koparkhairane to help businesses rank higher and attract more customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/koparkhairane/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Koparkhairane | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Koparkhairane to help businesses rank higher and attract more customers.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoKoparkhairaneLocationPage() {
  return <SeoKoparkhairaneLocation />;
}
