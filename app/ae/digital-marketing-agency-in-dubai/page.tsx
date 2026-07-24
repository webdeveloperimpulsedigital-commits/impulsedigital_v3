import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import DubaiLocation from '@/components/pages/DubaiLocation';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/ae/digital-marketing-agency-in-dubai/';
const title = 'Digital Marketing Agency in Dubai | Impulse Digital';
const description = 'Digital marketing services for Dubai connecting market intelligence, campaigns, SEO, social media, websites, brand systems, AI-enabled workflows, and measurement.';

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

export default function DubaiLocationPage() {
  const schema = buildServicePageGraph({
    path,
    name: title,
    description,
    market: 'ae',
    areaServed: 'Dubai',
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <DubaiLocation />
    </>
  );
}
