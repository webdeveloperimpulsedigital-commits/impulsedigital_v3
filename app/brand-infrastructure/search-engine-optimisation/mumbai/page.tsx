import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMumbaiLocation from '@/components/pages/seo-locations/SeoMumbaiLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital provides expert SEO services in Mumbai, helping businesses rank higher on Google and drive organic traffic and leads.',
  keywords: 'seo agency mumbai, local seo mumbai, digital marketing mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mumbai/`,
  },
  openGraph: {
    title: 'SEO Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital provides expert SEO services in Mumbai, helping businesses rank higher on Google and drive organic traffic and leads.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mumbai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital provides expert SEO services in Mumbai, helping businesses rank higher on Google and drive organic traffic and leads.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMumbaiLocationPage() {
  return <SeoMumbaiLocation />;
}
