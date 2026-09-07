import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKandivaliLocation from '@/components/pages/seo-locations/SeoKandivaliLocation';
import { seoKandivaliData } from "@/data/seoKandivaliData";

export const metadata: Metadata = {
  title: 'SEO Company in Kandivali | SEO Services | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
  keywords: 'seo agency in kandivali, seo company in kandivali, seo services in kandivali, local seo, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Kandivali | SEO Services | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kandivali/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Kandivali | SEO Services | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kandivali, helping businesses attract more customers through local search.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKandivaliLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path: '/brand-infrastructure/search-engine-optimisation/kandivali/',
    name: 'SEO Services in Kandivali | Impulse Digital',
    description: 'Comprehensive SEO services in Kandivali covering local search, technical SEO, B2B search marketing, and organic growth.',
    market: 'in',
    areaServed: 'Kandivali, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoKandivaliLocation />
    </>
  );
}
