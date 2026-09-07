import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoMulundLocation from '@/components/pages/seo-locations/SeoMulundLocation';
import { seoMulundData } from "@/data/seoMulundData";

export const metadata: Metadata = {
  title: 'SEO Company in Mulund | SEO Services for Impulse Digital',
  description: 'Impulse Digital is an SEO company in Mulund offering SEO services for stronger Google rankings, local visibility, relevant traffic, and qualified enquiries through technical SEO, content optimisation, and local search strategy.',
  keywords: 'seo company in mulund, seo services in mulund, seo agency, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Mulund | SEO Services for Impulse Digital',
    description: 'Impulse Digital is an SEO company in Mulund offering SEO services for stronger Google rankings, local visibility, relevant traffic, and qualified enquiries through technical SEO, content optimisation, and local search strategy.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/mulund/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Mulund | SEO Services for Impulse Digital',
    description: 'Impulse Digital is an SEO company in Mulund offering SEO services for stronger Google rankings, local visibility, relevant traffic, and qualified enquiries through technical SEO, content optimisation, and local search strategy.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoMulundLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path: '/brand-infrastructure/search-engine-optimisation/mulund/',
    name: 'SEO Services in Mulund | Impulse Digital',
    description: 'Comprehensive SEO services in Mulund covering local search, technical SEO, B2B search marketing, and organic growth.',
    market: 'in',
    areaServed: 'Mulund, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoMulundLocation />
    </>
  );
}
