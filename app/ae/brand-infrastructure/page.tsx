import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import BrandInfrastructure from '@/components/pages/BrandInfrastructure';
import { brandInfrastructureHubData } from '@/data/ae/serviceHubData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/ae/brand-infrastructure/';
const title = 'Brand Infrastructure Services in UAE | Impulse Digital';
const description = 'Brand infrastructure services for UAE organisations across SEO, websites, social media, branding, employer branding and video production.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'brand infrastructure UAE, digital brand services UAE, SEO and website services UAE',
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}${path}`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function BrandInfrastructurePage() {
  const schema = buildServicePageGraph({ path, name: title, description, market: 'ae', areaServed: 'UAE' });
  return (
    <>
      <JsonLd data={schema} id="brand-infrastructure-uae-schema" />
      <BrandInfrastructure data={brandInfrastructureHubData} />
    </>
  );
}
