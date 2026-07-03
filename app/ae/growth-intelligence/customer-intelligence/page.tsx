import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ConsumerIntelligence from '@/components/pages/ConsumerIntelligence';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Consumer Intelligence Agency | Customer Intelligence Service | Impulse Digital',
  description: 'Impulse Digital is a consumer intelligence agency helping brands decode consumer behaviour, motivations, tensions, and decision triggers through a customer intelligence service built for sharper briefs, messaging, and growth strategy.',
  keywords: 'consumer intelligence agency, customer intelligence service, customer intelligence consultant, dubai, uae, united arab emirates, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Consumer Intelligence Agency | Customer Intelligence Service | Impulse Digital',
    description: 'Impulse Digital is a consumer intelligence agency helping brands decode consumer behaviour, motivations, tensions, and decision triggers through a customer intelligence service built for sharper briefs, messaging, and growth strategy.',
    url: `${SITE_URL}/ae/growth-intelligence/customer-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Intelligence Agency | Customer Intelligence Service | Impulse Digital',
    description: 'Impulse Digital is a consumer intelligence agency helping brands decode consumer behaviour, motivations, tensions, and decision triggers through a customer intelligence service built for sharper briefs, messaging, and growth strategy.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ConsumerIntelligencePage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/growth-intelligence/customer-intelligence/#service",
      "name": "Consumer Intelligence Services",
      "url": "https://www.theimpulsedigital.com/growth-intelligence/customer-intelligence/",
      "description": "Impulse Digital provides Consumer Intelligence services to help brands understand consumer behaviour, motivations, triggers, barriers, expectations, and decision-making patterns.",
      "serviceType": [
        "Consumer Intelligence",
        "Usage and Attitude Studies",
        "Trigger and Barrier Analysis",
        "Consumer Behaviour Research",
        "Innovation Funnel Support"
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
      <ConsumerIntelligence />
    </>
  );

}
