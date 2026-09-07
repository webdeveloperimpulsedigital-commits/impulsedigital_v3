import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKoparkhairaneLocation from '@/components/pages/seo-locations/SeoKoparkhairaneLocation';
import { seoKoparkhairaneData } from "@/data/seoKoparkhairaneData";

export const metadata: Metadata = {
  title: 'SEO Company in Koparkhairane | SEO Services by Impulse Digital',
  description: 'Impulse Digital is an SEO company in Koparkhairane helping businesses improve Google rankings, local visibility, website traffic, and qualified enquiries through technical SEO, content optimisation, local SEO, and clear performance reporting. A results-driven SEO services.',
  keywords: 'seo agency in koparkhairane, local seo in koparkhairane, seo company in koparkhairane, seo service, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Koparkhairane | SEO Services by Impulse Digital',
    description: 'Impulse Digital is an SEO company in Koparkhairane helping businesses improve Google rankings, local visibility, website traffic, and qualified enquiries through technical SEO, content optimisation, local SEO, and clear performance reporting. A results-driven SEO services.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/koparkhairane/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Koparkhairane | SEO Services by Impulse Digital',
    description: 'Impulse Digital is an SEO company in Koparkhairane helping businesses improve Google rankings, local visibility, website traffic, and qualified enquiries through technical SEO, content optimisation, local SEO, and clear performance reporting. A results-driven SEO services.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKoparkhairaneLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path: '/brand-infrastructure/search-engine-optimisation/koparkhairane/',
    name: 'SEO Services in Koparkhairane | Impulse Digital',
    description: 'Comprehensive SEO services in Koparkhairane covering local search, technical SEO, B2B search marketing, and organic growth.',
    market: 'in',
    areaServed: 'Koparkhairane, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoKoparkhairaneLocation />
    </>
  );
}
