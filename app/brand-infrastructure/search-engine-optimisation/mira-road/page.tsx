import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMiraRoadLocation from '@/components/pages/seo-locations/SeoMiraRoadLocation';

export const metadata: Metadata = {
  title: 'SEO Company in Mira Road | SEO Services by Impulse Digital',
  description: 'Impulse Digital is trusted SEO company in Mira Road. We brings 34 years of marketing experience and delivers SEO services in Mira Road built on a track record that includes 737% organic traffic growth for Qure.ai.',
  keywords: 'seo company in mira road, seo agency in mira road, seo services, local seo, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mira-road/`,
  },
  openGraph: {
    title: 'SEO Company in Mira Road | SEO Services by Impulse Digital',
    description: 'Impulse Digital is trusted SEO company in Mira Road. We brings 34 years of marketing experience and delivers SEO services in Mira Road built on a track record that includes 737% organic traffic growth for Qure.ai.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mira-road/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Mira Road | SEO Services by Impulse Digital',
    description: 'Impulse Digital is trusted SEO company in Mira Road. We brings 34 years of marketing experience and delivers SEO services in Mira Road built on a track record that includes 737% organic traffic growth for Qure.ai.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMiraRoadLocationPage() {
  return <SeoMiraRoadLocation />;
}
