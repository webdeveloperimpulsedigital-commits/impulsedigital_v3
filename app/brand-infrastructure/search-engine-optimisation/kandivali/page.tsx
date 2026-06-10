import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKandivaliLocation from '@/components/pages/seo-locations/SeoKandivaliLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Kandivali | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
  keywords: 'seo agency kandivali, local seo kandivali, digital marketing kandivali',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kandivali/`,
  },
  openGraph: {
    title: 'SEO Agency in Kandivali | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kandivali/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Kandivali | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKandivaliLocationPage() {
  return <SeoKandivaliLocation />;
}
