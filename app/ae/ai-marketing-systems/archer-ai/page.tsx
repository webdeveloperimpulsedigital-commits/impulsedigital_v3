import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ArcherAI from '@/components/pages/ArcherAI';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Archer AI: AI Outbound Sales Agent | Impulse Digital',
  description: 'Meet Archer AI, an AI outbound sales agent built by Impulse Digital. We build AI outbound agents that turn live market signals into qualified conversations.',
  keywords: 'archer ai, ai outbound sales agent, ai outbound agent, b2b outbound ai, mumbai, thane, navi mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Archer AI: AI Outbound Sales Agent | Impulse Digital',
    description: 'Meet Archer AI, an AI outbound sales agent built by Impulse Digital. We build AI outbound agents that turn live market signals into qualified conversations.',
    url: `${SITE_URL}/ae/ai-marketing-systems/archer-ai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archer AI: AI Outbound Sales Agent | Impulse Digital',
    description: 'Meet Archer AI, an AI outbound sales agent built by Impulse Digital. We build AI outbound agents that turn live market signals into qualified conversations.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ArcherAIPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ae/ai-marketing-systems/archer-ai/#service",
      "name": "Archer AI Services",
      "url": "https://www.theimpulsedigital.com/ae/ai-marketing-systems/archer-ai/",
      "description": "Meet Archer AI, an AI outbound sales agent built by Impulse Digital. We build AI outbound agents that turn live market signals into qualified conversations.",
      "serviceType": [
        "Archer AI",
        "AI Outbound Engine",
        "B2B Lead Intelligence",
        "ICP Diagnostic",
        "Prospect Discovery",
        "LinkedIn Outreach",
        "Email Outreach"
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
      <ArcherAI />
    </>
  );

}
