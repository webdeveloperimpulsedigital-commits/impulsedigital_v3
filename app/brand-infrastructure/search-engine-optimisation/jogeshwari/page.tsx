import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoJogeshwariLocation from '@/components/pages/seo-locations/SeoJogeshwariLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Jogeshwari | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Jogeshwari to improve local search rankings and business visibility.',
  keywords: 'seo agency jogeshwari, local seo jogeshwari, digital marketing jogeshwari',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/jogeshwari/`,
  },
  openGraph: {
    title: 'SEO Agency in Jogeshwari | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Jogeshwari to improve local search rankings and business visibility.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/jogeshwari/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Jogeshwari | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Jogeshwari to improve local search rankings and business visibility.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoJogeshwariLocationPage() {
  return <SeoJogeshwariLocation />;
}
