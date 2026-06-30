import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AlwaysOnIntelligence from '@/components/pages/AlwaysOnIntelligence';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Always-On Intelligence | Impulse Digital',
  description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
  keywords: 'always on intelligence, continuous monitoring, brand intelligence',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Always-On Intelligence | Impulse Digital',
    description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
    url: `${SITE_URL}/ae/growth-intelligence/always-on-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Always-On Intelligence | Impulse Digital',
    description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AlwaysOnIntelligencePage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/#service",
        "name": "Always-On Intelligence Services",
        "url": "https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/",
        "description": "Impulse Digital provides Always-On Intelligence services that continuously monitor brand mentions, category movement, competitor activity, reviews, reputation signals, and digital market risks.",
        "serviceType": [
          "Always-On Intelligence",
          "Reputation Tracking",
          "Crisis Monitoring",
          "Social Listening",
          "E-Commerce Review Intelligence",
          "Brand Health Monitoring"
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
          <AlwaysOnIntelligence />
        </>
      );
        
}
