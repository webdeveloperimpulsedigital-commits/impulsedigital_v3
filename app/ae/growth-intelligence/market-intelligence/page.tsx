import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import MarketIntelligence from '@/components/pages/MarketIntelligence';

export const metadata: Metadata = {
  title: 'Market Intelligence Agency | Competitive Intelligence Services',
  description: 'Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.',
  keywords: 'market intelligence, competitive intelligence, market research',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Market Intelligence Agency | Competitive Intelligence Services',
    description: 'Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.',
    url: `${SITE_URL}/ae/growth-intelligence/market-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Intelligence Agency | Competitive Intelligence Services',
    description: 'Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function MarketIntelligencePage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/growth-intelligence/market-intelligence/#service",
      "name": "Market and Competitive Intelligence Services",
      "url": "https://www.theimpulsedigital.com/growth-intelligence/market-intelligence/",
      "description": "Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.",
      "serviceType": [
        "Market Intelligence",
        "Competitive Intelligence",
        "Category Trend Mapping",
        "Competitor Communication Analysis",
        "E-Commerce Benchmarking",
        "Search Intelligence"
      ],
      "areaServed": [
        "IN",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <MarketIntelligence />
    </>
  );

}
