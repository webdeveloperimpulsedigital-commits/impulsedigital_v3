import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoNerulLocation from '@/components/pages/seo-locations/SeoNerulLocation';

export const metadata: Metadata = {
  title: 'SEO Company in Nerul | SEO Agency | Impulse Digital',
  description: 'Impulse Digital is a results-focused SEO company in Nerul with 34 years of marketing experience. Our SEO agency in Nerul has delivered a 3,500% impression increase for ElectroMech in 5 months.',
  keywords: 'seo agency in nerul, seo company in nerul, seo services, local seo, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/nerul/`,
  },
  openGraph: {
    title: 'SEO Company in Nerul | SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a results-focused SEO company in Nerul with 34 years of marketing experience. Our SEO agency in Nerul has delivered a 3,500% impression increase for ElectroMech in 5 months.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/nerul/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Nerul | SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a results-focused SEO company in Nerul with 34 years of marketing experience. Our SEO agency in Nerul has delivered a 3,500% impression increase for ElectroMech in 5 months.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoNerulLocationPage() {
  return <SeoNerulLocation />;
}
