import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ArcherAI from '@/components/pages/ArcherAI';

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
      "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/#service",
      "name": "Archer AI Services",
      "url": "https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/",
      "description": "Impulse Digital provides Archer AI, an AI-powered outbound intelligence engine that detects buying signals, identifies decision-makers, enriches prospect data, and supports personalised B2B outreach.",
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
          "name": "What is Archer AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Archer AI is an AI-powered outbound intelligence engine. It detects buying signals, identifies decision-makers, and deploys personalised outreach to create better B2B sales conversations."
          }
        },
        {
          "@type": "Question",
          "name": "What is an ICP Diagnostic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ICP Diagnostic is a working session where we map your target industries, buyer titles, company profile, geography, offer, and timing signals. It helps determine whether outbound is the right growth channel for you."
          }
        },
        {
          "@type": "Question",
          "name": "How is Archer AI different from buying a lead list?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lead list is static. Archer AI works from live signals, enriched prospect context, verified contacts, and personalised outreach logic."
          }
        },
        {
          "@type": "Question",
          "name": "What channels does Archer AI use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Archer AI supports email and LinkedIn outreach, configured around your buyer behaviour and campaign strategy."
          }
        },
        {
          "@type": "Question",
          "name": "How soon can outreach begin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ICP diagnostic and engine build come first. Once the signal map, prospect logic, and messaging system are ready, live outreach can begin."
          }
        },
        {
          "@type": "Question",
          "name": "Does Archer AI replace my sales team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Archer AI fills the top of the funnel. Your sales team still handles discovery, qualification, negotiation, and closing."
          }
        },
        {
          "@type": "Question",
          "name": "What does AI handle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI supports signal detection, prospect discovery, contact enrichment, message variation, sequence logic, and performance analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What do humans handle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Human strategists handle ICP logic, positioning, message quality, brand tone, review, and optimisation."
          }
        },
        {
          "@type": "Question",
          "name": "Is Archer AI right for every business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Archer AI works best when the buyer is identifiable, the ICP is clear, the deal size justifies precision, and the market shows signals that can be turned into relevant outreach."
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
      <ArcherAI />
    </>
  );

}
