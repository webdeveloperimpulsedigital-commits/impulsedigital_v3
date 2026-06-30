import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMumbaiLocation from '@/components/pages/seo-locations/SeoMumbaiLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Mumbai | SEO Company | Impulse Digital',
  description: 'Impulse Digital is a top SEO agency in Mumbai with transparent SEO packages and proven results. Trusted SEO service providers for enterprise and growth brands. Talk to us.',
  keywords: 'seo agency in mumbai, seo company in mumbai, SEO services, seo packages, best seo agency, mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Mumbai | SEO Company | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Mumbai with transparent SEO packages and proven results. Trusted SEO service providers for enterprise and growth brands. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/mumbai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mumbai | SEO Company | Impulse Digital',
    description: 'Impulse Digital is a top SEO agency in Mumbai with transparent SEO packages and proven results. Trusted SEO service providers for enterprise and growth brands. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMumbaiLocationPage() {
  return <SeoMumbaiLocation />;
}
