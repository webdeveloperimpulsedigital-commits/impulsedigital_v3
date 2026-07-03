import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AlwaysOnIntelligence from '@/components/pages/AlwaysOnIntelligence';
import { alwaysOnIntelligenceData } from '@/data/alwaysOnIntelligenceData';
;
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Social Intelligence Agency | Impulse Digital',
  description: 'Impulse Digital is a social intelligence agency that tracks brand conversations, sentiment shifts, and competitor moves before they become problems on social media.',
  keywords: 'social intelligence agency, social media intelligence company, always on intelligence, continuous monitoring, brand intelligence, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Intelligence Agency | Impulse Digital',
    description: 'Impulse Digital is a social intelligence agency that tracks brand conversations, sentiment shifts, and competitor moves before they become problems on social media.',
    url: `${SITE_URL}/growth-intelligence/social-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Intelligence Agency | Impulse Digital',
    description: 'Impulse Digital is a social intelligence agency that tracks brand conversations, sentiment shifts, and competitor moves before they become problems on social media.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialIntelligencePage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/growth-intelligence/social-intelligence/#service",
      "name": "Social Intelligence Services",
      "url": "https://www.theimpulsedigital.com/growth-intelligence/social-intelligence/",
      "description": "Impulse Digital is a social intelligence agency that tracks brand conversations, sentiment shifts, and competitor moves before they become problems on social media.",
      "serviceType": [
        "Social Intelligence",
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
      <AlwaysOnIntelligence data={alwaysOnIntelligenceData} />
    </>
  );

}
