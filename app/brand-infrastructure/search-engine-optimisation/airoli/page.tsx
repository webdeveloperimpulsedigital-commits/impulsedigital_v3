import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoAiroliLocation from '@/components/pages/seo-locations/SeoAiroliLocation';
import { seoAiroliData } from "@/data/seoAiroliData";

export const metadata: Metadata = {
  title: 'SEO Agency in Airoli | Best SEO Company | Impulse Digital',
  description: 'Impulse Digital is the best SEO agency in Airoli offering Technical SEO, Local SEO, and B2B SEO for businesses across Airoli. Get higher rank  and attract more customers through our SEO service in Airoli.',
  keywords: 'seo agency in airoli, seo company in airoli, seo services in airoli, local seo airoli, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Airoli | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is the best SEO agency in Airoli offering Technical SEO, Local SEO, and B2B SEO for businesses across Airoli. Get higher rank  and attract more customers through our SEO service in Airoli.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/airoli/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Airoli | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is the best SEO agency in Airoli offering Technical SEO, Local SEO, and B2B SEO for businesses across Airoli. Get higher rank  and attract more customers through our SEO service in Airoli.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoAiroliLocationPage() {
  const serviceSchema = buildServicePageGraph({
    path: '/brand-infrastructure/search-engine-optimisation/airoli/',
    name: 'SEO Services in Airoli | Impulse Digital',
    description: 'Comprehensive SEO services in Airoli covering local search, technical SEO, B2B search marketing, and organic growth.',
    market: 'in',
    areaServed: 'Airoli, Mumbai',
  });

  return (
    <>
      <JsonLd data={serviceSchema} id="service-page-schema" />
      <SeoAiroliLocation />
    </>
  );
}
