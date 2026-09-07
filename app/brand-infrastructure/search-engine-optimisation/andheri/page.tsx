import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAndheriLocation from '@/components/pages/seo-locations/SeoAndheriLocation';
import { seoAndheriData } from "@/data/seoAndheriData";

export const metadata: Metadata = {
  title: 'SEO Company in Andheri | Best SEO Agency | Impulse Digital',
  description: 'Impulse Digital is a trusted SEO company in Andheri offering Technical SEO, Local SEO, B2B SEO and eCommerce SEO services. We are helping businesses rank higher in SEO & attract more customers.',
  keywords: 'seo agency in andheri, seo company in andheri, seo services in andheri, local seo andheri, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Andheri | Best SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Andheri offering Technical SEO, Local SEO, B2B SEO and eCommerce SEO services. We are helping businesses rank higher in SEO & attract more customers.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/andheri/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Andheri | Best SEO Agency | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Andheri offering Technical SEO, Local SEO, B2B SEO and eCommerce SEO services. We are helping businesses rank higher in SEO & attract more customers.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoAndheriLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path: '/brand-infrastructure/search-engine-optimisation/andheri/',
    name: 'SEO Services in Andheri | Impulse Digital',
    description: 'Comprehensive SEO services in Andheri covering local search, technical SEO, B2B search marketing, and organic growth.',
    market: 'in',
    areaServed: 'Andheri, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoAndheriLocation />
    </>
  );
}
