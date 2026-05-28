import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ConsumerIntelligence from '@/components/pages/ConsumerIntelligence';

export const metadata: Metadata = {
  title: 'Consumer Intelligence Services | Impulse Digital',
  description: 'Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions.',
  keywords: 'consumer intelligence, consumer insights, digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/consumer-intelligence/`,
  },
  openGraph: {
    title: 'Consumer Intelligence Services | Impulse Digital',
    description: 'Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions.',
    url: `${SITE_URL}/growth-intelligence/consumer-intelligence/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Intelligence Services | Impulse Digital',
    description: 'Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ConsumerIntelligencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/#service",
    "name": "Consumer Intelligence Services",
    "url": "https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/",
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsumerIntelligence />
    </>
  );
}
