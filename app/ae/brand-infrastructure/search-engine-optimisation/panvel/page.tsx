import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoPanvelLocation from '@/components/pages/seo-locations/SeoPanvelLocation';

export const metadata: Metadata = {
  title: 'SEO Company in Panvel | SEO Agency | Impulse Digital',
  description: 'Impulse Digital is a trusted SEO company in Panvel backed by 737% organic traffic growth for Qure.ai. As an SEO agency in Panvel, we focus on lasting visibility.',
  keywords: 'seo company in panvel, seo agency in panvel, seo services, local seo, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Panvel | SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Panvel backed by 737% organic traffic growth for Qure.ai. As an SEO agency in Panvel, we focus on lasting visibility.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/panvel/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Panvel | SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Panvel backed by 737% organic traffic growth for Qure.ai. As an SEO agency in Panvel, we focus on lasting visibility.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoPanvelLocationPage() {
  return <SeoPanvelLocation />;
}
