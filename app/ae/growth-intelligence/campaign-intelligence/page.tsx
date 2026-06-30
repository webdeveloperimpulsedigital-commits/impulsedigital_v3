import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import CampaignIntelligence from '@/components/pages/CampaignIntelligence';

export const metadata: Metadata = {
  title: 'Performance Intelligence Agency | Campaign Intelligence | Impulse Digital',
  description: 'Impulse Digital is a specialist campaign & performance intelligence agency in India, helping brands decode campaign recall, sentiment, influencer fit, and next-brief decisions. Trusted by HUL, Tata and Mastercard. Talk to us.',
  keywords: 'campaign intelligence, performance intelligence agency, campaign analytics, company, services, mumbai, thane, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Performance Intelligence Agency | Campaign Intelligence | Impulse Digital',
    description: 'Impulse Digital is a specialist campaign & performance intelligence agency in India, helping brands decode campaign recall, sentiment, influencer fit, and next-brief decisions. Trusted by HUL, Tata and Mastercard. Talk to us.',
    url: `${SITE_URL}/ae/growth-intelligence/campaign-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Intelligence Agency | Campaign Intelligence | Impulse Digital',
    description: 'Impulse Digital is a specialist campaign & performance intelligence agency in India, helping brands decode campaign recall, sentiment, influencer fit, and next-brief decisions. Trusted by HUL, Tata and Mastercard. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function CampaignIntelligencePage() {

  const schemas = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Campaign and Performance Intelligence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Campaign and Performance Intelligence measures whether marketing activity created meaningful audience response, brand perception movement, recall, engagement quality, and decision value."
          }
        },
        {
          "@type": "Question",
          "name": "How is this different from a campaign report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A campaign report usually records what happened. Campaign Intelligence explains what it means and what should change before the next campaign."
          }
        },
        {
          "@type": "Question",
          "name": "What does Campaign Effectiveness Evaluation measure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It looks at sentiment movement, content recall, audience response, message clarity, engagement behaviour, and channel-level resonance."
          }
        },
        {
          "@type": "Question",
          "name": "How do you evaluate influencer fit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assess relevance, credibility, audience quality, content performance, engagement quality, and fit with the brand's category and communication objective."
          }
        },
        {
          "@type": "Question",
          "name": "Can this be done before an influencer campaign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Influencer Fit and Impact Study can support both pre-campaign selection and post-campaign evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "What do Strategic Insight Reports include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They include executive summaries, key findings, what worked, what did not, what to repeat, what to stop, and what to change in the next cycle."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use this inside the organisation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CMOs, Heads of Digital, campaign planning teams, media teams, influencer marketing teams, brand managers, and leadership teams."
          }
        },
        {
          "@type": "Question",
          "name": "When should this be done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After a major campaign, before the next campaign brief, before influencer budget allocation, or when leadership needs a sharper view of what marketing spend actually achieved."
          }
        }
      ]
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
