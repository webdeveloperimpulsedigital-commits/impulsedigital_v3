import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import B2BSEO from '@/components/pages/B2BSEO';
import { b2bSEOUaeData } from '@/data/ae/b2bSEOData';
import JsonLd from '@/components/JsonLd';
import { buildServicePageGraph } from '@/lib/structuredData';

const path = '/ae/brand-infrastructure/search-engine-optimisation/b2b-seo/';
const title = 'B2B SEO Services in UAE | Impulse Digital';
const description = 'B2B SEO services for UAE organisations covering regional search intent, technical SEO, decision-stage content and verified lead measurement.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'B2B SEO UAE, B2B SEO agency UAE, B2B search engine optimisation Dubai',
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

export default function B2BSEOPage() {
  const schema = buildServicePageGraph({ path, name: title, description, market: 'ae', areaServed: 'UAE' });
  return (
    <>
      <JsonLd data={schema} id="b2b-seo-uae-schema" />
      <B2BSEO data={b2bSEOUaeData} />
    </>
  );
}
