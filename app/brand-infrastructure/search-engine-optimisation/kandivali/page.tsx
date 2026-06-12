import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKandivaliLocation from '@/components/pages/seo-locations/SeoKandivaliLocation';

export const metadata: Metadata = {
  title: 'SEO Company in Kandivali | SEO Services | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
  keywords: 'seo agency in kandivali, seo company in kandivali, seo services in kandivali, local seo, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kandivali/`,
  },
  openGraph: {
    title: 'SEO Company in Kandivali | SEO Services | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kandivali/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Kandivali | SEO Services | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKandivaliLocationPage() {
  return <SeoKandivaliLocation />;
}
