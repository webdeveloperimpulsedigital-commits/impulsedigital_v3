import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoDadarLocation from '@/components/pages/seo-locations/SeoDadarLocation';
import { seoDadarData } from "@/data/seoDadarData";

export const metadata: Metadata = {
  title: 'SEO Agency in Dadar | Best SEO Company | Impulse Digital',
  description: 'Impulse Digital is the best SEO agency in Dadar and we are offering B2b, Local, Ecommerce & Enterprice seo service in Dadar. We are helping businesses improve rankings and attract customers via search.',
  keywords: 'seo agency in dadar, seo company in dadar, seo services in dadar, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Dadar | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is the best SEO agency in Dadar and we are offering B2b, Local, Ecommerce & Enterprice seo service in Dadar. We are helping businesses improve rankings and attract customers via search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/dadar/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Dadar | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is the best SEO agency in Dadar and we are offering B2b, Local, Ecommerce & Enterprice seo service in Dadar. We are helping businesses improve rankings and attract customers via search.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoDadarLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path: '/brand-infrastructure/search-engine-optimisation/dadar/',
    name: 'SEO Services in Dadar | Impulse Digital',
    description: 'Comprehensive SEO services in Dadar covering local search, technical SEO, B2B search marketing, and organic growth.',
    market: 'in',
    areaServed: 'Dadar, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoDadarLocation />
    </>
  );
}
