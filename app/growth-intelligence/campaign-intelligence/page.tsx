import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import CampaignIntelligence from '@/components/pages/CampaignIntelligence';

export const metadata: Metadata = {
  title: 'Campaign & Performance Intelligence | Impulse Digital',
  description: 'Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact.',
  keywords: 'campaign intelligence, performance intelligence, campaign analytics',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/campaign-intelligence/`,
  },
  openGraph: {
    title: 'Campaign & Performance Intelligence | Impulse Digital',
    description: 'Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact.',
    url: `${SITE_URL}/growth-intelligence/campaign-intelligence/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campaign & Performance Intelligence | Impulse Digital',
    description: 'Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function CampaignIntelligencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/#service",
    "name": "Campaign and Performance Intelligence Services",
    "url": "https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/",
    "description": "Impulse Digital provides Campaign and Performance Intelligence services to evaluate campaign impact, audience response, brand perception movement, influencer fit, engagement quality, and marketing decision value.",
    "serviceType": [
      "Campaign Intelligence",
      "Performance Intelligence",
      "Campaign Effectiveness Evaluation",
      "Influencer Fit Analysis",
      "Strategic Insight Reports",
      "Marketing Performance Analysis"
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
      <CampaignIntelligence />
    </>
  );
}
