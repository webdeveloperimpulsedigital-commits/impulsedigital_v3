import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ServicesIndex from '@/components/pages/ServicesIndex';
import { servicesPageData, servicesPageHero } from '@/data/ae/servicesPageData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/ae/services/';
const title = 'Digital Marketing Services in UAE | Impulse Digital';
const description = 'Digital marketing services for UAE organisations across growth intelligence, AI marketing systems, SEO, websites, social media, branding and video.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'digital marketing services UAE, marketing services Dubai, SEO services UAE, AI marketing UAE',
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

export default function ServicesIndexPage() {
  const schema = buildServicePageGraph({ path, name: title, description, market: 'ae', areaServed: 'UAE' });
  return (
    <>
      <JsonLd data={schema} id="services-uae-schema" />
      <ServicesIndex data={servicesPageData} hero={servicesPageHero} />
    </>
  );
}
