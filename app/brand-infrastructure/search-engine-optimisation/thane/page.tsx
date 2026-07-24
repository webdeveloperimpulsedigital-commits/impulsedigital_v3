import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SearchEngineOptimisation from '@/components/pages/SearchEngineOptimisation';
import { searchEngineOptimisationThaneData } from '@/data/searchEngineOptimisationThaneData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/brand-infrastructure/search-engine-optimisation/thane/';
const title = 'SEO Agency in Thane | SEO Services | Impulse Digital';
const description = 'SEO services in Thane covering technical SEO, local search, content planning, ecommerce SEO, B2B SEO, and measurable organic search improvement.';

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    images: [{ url: `${SITE_URL}/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${SITE_URL}/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ThaneSeoPage() {
  const schema = buildServicePageGraph({
    path,
    name: title,
    description,
    market: 'in',
    areaServed: 'Thane',
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <SearchEngineOptimisation data={searchEngineOptimisationThaneData} />
    </>
  );
}
