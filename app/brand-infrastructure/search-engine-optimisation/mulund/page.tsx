import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMulundLocation from '@/components/pages/seo-locations/SeoMulundLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Mulund | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Mulund, improving search rankings and driving local business visibility.',
  keywords: 'seo agency mulund, local seo mulund, digital marketing mulund',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mulund/`,
  },
  openGraph: {
    title: 'SEO Agency in Mulund | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Mulund, improving search rankings and driving local business visibility.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mulund/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Mulund | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Mulund, improving search rankings and driving local business visibility.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMulundLocationPage() {
  return <SeoMulundLocation />;
}
