import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AIMarketingSystems from '@/components/pages/AIMarketingSystems';
import { aiMarketingSystemsHubData } from '@/data/ae/serviceHubData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/ae/ai-marketing-systems/';
const title = 'AI Marketing Systems in UAE | Impulse Digital';
const description = 'AI marketing systems for UAE teams covering market intelligence, agentic workflows, AI video production and generative search optimisation.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'AI marketing systems UAE, AI marketing agency UAE, agentic AI UAE, AI video production UAE',
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

export default function AIMarketingSystemsPage() {
  const schema = buildServicePageGraph({ path, name: title, description, market: 'ae', areaServed: 'UAE' });
  return (
    <>
      <JsonLd data={schema} id="ai-marketing-systems-uae-schema" />
      <AIMarketingSystems data={aiMarketingSystemsHubData} />
    </>
  );
}
