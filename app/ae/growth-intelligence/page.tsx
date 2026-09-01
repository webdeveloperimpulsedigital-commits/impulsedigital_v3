import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import GrowthIntelligence from '@/components/pages/GrowthIntelligence';
import { growthIntelligenceHubData } from '@/data/ae/serviceHubData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/ae/growth-intelligence/';
const title = 'Growth Intelligence Services in UAE | Impulse Digital';
const description = 'Growth intelligence services for UAE organisations covering customer, market, campaign and social intelligence for clearer regional decisions.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'growth intelligence UAE, customer intelligence UAE, market intelligence UAE, campaign intelligence UAE',
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

export default function GrowthIntelligencePage() {
  const schema = buildServicePageGraph({ path, name: title, description, market: 'ae', areaServed: 'UAE' });
  return (
    <>
      <JsonLd data={schema} id="growth-intelligence-uae-schema" />
      <GrowthIntelligence data={growthIntelligenceHubData} />
    </>
  );
}
