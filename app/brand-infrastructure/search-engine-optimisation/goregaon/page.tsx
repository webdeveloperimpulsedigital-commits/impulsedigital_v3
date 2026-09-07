import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGoregaonLocation from '@/components/pages/seo-locations/SeoGoregaonLocation';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/brand-infrastructure/search-engine-optimisation/goregaon/';
const title = 'SEO Company in Goregaon | Top SEO Agency & Services | Impulse Digital';
const description = 'Partner with Impulse Digital, a premier SEO company in Goregaon. Our expert SEO agency delivers revenue-driven SEO services for local, B2B & enterprise brands. Get a free audit!';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'seo company in goregaon, seo agency in goregaon, seo service in goregaon, seo services in goregaon, local seo goregaon, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}${path}`,
  },
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

export default function SeoGoregaonLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path,
    name: 'SEO Services in Goregaon | Impulse Digital',
    description: 'Comprehensive SEO services in Goregaon covering local search, technical SEO, B2B search marketing, Generative AI search optimization, and enterprise organic growth.',
    market: 'in',
    areaServed: 'Goregaon, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoGoregaonLocation />
    </>
  );
}
