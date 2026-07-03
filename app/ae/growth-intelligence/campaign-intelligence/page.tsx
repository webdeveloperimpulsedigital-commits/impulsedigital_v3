import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import CampaignIntelligence from '@/components/pages/CampaignIntelligence';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Performance Intelligence Agency | Campaign Intelligence | Impulse Digital',
  description: 'Impulse Digital is a specialist campaign & performance intelligence agency in Dubai, helping brands decode campaign recall, sentiment, influencer fit, and next-brief decisions. Trusted by HUL, Tata and Mastercard. Talk to us.',
  keywords: 'campaign intelligence, performance intelligence agency, campaign analytics, company, services, mumbai, thane, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Performance Intelligence Agency | Campaign Intelligence | Impulse Digital',
    description: 'Impulse Digital is a specialist campaign & performance intelligence agency in Dubai, helping brands decode campaign recall, sentiment, influencer fit, and next-brief decisions. Trusted by HUL, Tata and Mastercard. Talk to us.',
    url: `${SITE_URL}/ae/growth-intelligence/campaign-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Intelligence Agency | Campaign Intelligence | Impulse Digital',
    description: 'Impulse Digital is a specialist campaign & performance intelligence agency in Dubai, helping brands decode campaign recall, sentiment, influencer fit, and next-brief decisions. Trusted by HUL, Tata and Mastercard. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function CampaignIntelligencePage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ae/growth-intelligence/campaign-intelligence/#service",
      "name": "Campaign and Performance Intelligence Services",
      "url": "https://www.theimpulsedigital.com/ae/growth-intelligence/campaign-intelligence/",
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
        "AE",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/ae/"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CampaignIntelligence />
    </>
  );

}
