import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AgenticAI from '@/components/pages/AgenticAI';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Agentic AI Agency | Agentic AI Services by Impulse Digital',
  description: 'Impulse Digital is an Agentic AI agency in Mumbai, India. We build AI agents that respond, qualify leads, follow up, update CRMs, and automate business workflows. Our Agentic AI services shaped around sales, customer engagement, marketing operations, and internal workflow automation.',
  keywords: 'agentic ai agency, agentic ai services, agentic ai company, mumbai, india, thane, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Agentic AI Agency | Agentic AI Services by Impulse Digital',
    description: 'Impulse Digital is an Agentic AI agency in Mumbai, India. We build AI agents that respond, qualify leads, follow up, update CRMs, and automate business workflows. Our Agentic AI services shaped around sales, customer engagement, marketing operations, and internal workflow automation.',
    url: `${SITE_URL}/ai-marketing-systems/agentic-ai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI Agency | Agentic AI Services by Impulse Digital',
    description: 'Impulse Digital is an Agentic AI agency in Mumbai, India. We build AI agents that respond, qualify leads, follow up, update CRMs, and automate business workflows. Our Agentic AI services shaped around sales, customer engagement, marketing operations, and internal workflow automation.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AgenticAIPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/agentic-ai/#service",
      "name": "Agentic AI Services",
      "url": "https://www.theimpulsedigital.com/ai-marketing-systems/agentic-ai/",
      "description": "Impulse Digital is an Agentic AI agency in Mumbai, India. We build AI agents that respond, qualify leads, follow up, update CRMs, and automate business workflows. Our Agentic AI services shaped around sales, customer engagement, marketing operations, and internal workflow automation.",
      "serviceType": [
        "Agentic AI Services",
        "AI Marketing Automation",
        "Agentic AI Company",
        "Lead Nurturing Automation",
        "Workflow Automation"
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
      <AgenticAI />
    </>
  );

}
