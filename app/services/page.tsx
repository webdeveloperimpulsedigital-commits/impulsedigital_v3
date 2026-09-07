import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ServicesIndex from '@/components/pages/ServicesIndex';
import { servicesPageData } from '@/data/servicesPageData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/services/';
const title = 'Digital Marketing Services | Impulse Digital';
const description = "Explore Impulse Digital's full range of digital marketing services: SEO, social media, branding, website development, AI marketing, video production, and growth intelligence.";

export const metadata: Metadata = {
  title,
  description,
  keywords: 'digital marketing services, marketing services mumbai, impulse digital services',
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

export default function ServicesIndexPage() {
  const schema = buildServicePageGraph({
    path,
    name: title,
    description,
    market: 'in',
    areaServed: 'India',
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <ServicesIndex data={servicesPageData} />
    </>
  );
}
