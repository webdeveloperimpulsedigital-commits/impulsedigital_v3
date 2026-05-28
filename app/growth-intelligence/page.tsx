import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import GrowthIntelligence from '@/components/pages/GrowthIntelligence';

export const metadata: Metadata = {
  title: 'Growth Intelligence Services | Impulse Digital',
  description: 'Impulse Digital\'s Growth Intelligence division helps brands use data, insights, and intelligence to drive smarter growth across all marketing channels.',
  keywords: 'growth intelligence, data-driven marketing, brand intelligence',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/`,
  },
  openGraph: {
    title: 'Growth Intelligence Services | Impulse Digital',
    description: 'Impulse Digital\'s Growth Intelligence division helps brands use data, insights, and intelligence to drive smarter growth across all marketing channels.',
    url: `${SITE_URL}/growth-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Intelligence Services | Impulse Digital',
    description: 'Impulse Digital\'s Growth Intelligence division helps brands use data, insights, and intelligence to drive smarter growth across all marketing channels.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function GrowthIntelligencePage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/growth-intelligence/#service",
        "name": "Growth Intelligence Services",
        "url": "https://www.theimpulsedigital.com/growth-intelligence/",
        "description": "Impulse Digital provides Growth Intelligence services that help brands make sharper marketing, consumer, market, campaign, and performance decisions through data-backed insights.",
        "serviceType": [
          "Growth Intelligence",
          "Consumer Intelligence",
          "Market Intelligence",
          "Campaign Intelligence",
          "Performance Intelligence"
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
          <GrowthIntelligence />
        </>
      );
        
}
