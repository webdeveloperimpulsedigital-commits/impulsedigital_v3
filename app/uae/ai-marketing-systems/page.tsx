import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AIMarketingSystems from '@/components/pages/AIMarketingSystems';

export const metadata: Metadata = {
  title: 'AI Marketing Systems | Impulse Digital',
  description: 'Impulse Digital\'s AI Marketing Systems help brands harness the power of artificial intelligence for smarter marketing, automation, and scalable growth.',
  keywords: 'ai marketing systems, artificial intelligence marketing, ai marketing agency',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/`,
  },
  openGraph: {
    title: 'AI Marketing Systems | Impulse Digital',
    description: 'Impulse Digital\'s AI Marketing Systems help brands harness the power of artificial intelligence for smarter marketing, automation, and scalable growth.',
    url: `${SITE_URL}/ai-marketing-systems/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Systems | Impulse Digital',
    description: 'Impulse Digital\'s AI Marketing Systems help brands harness the power of artificial intelligence for smarter marketing, automation, and scalable growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AIMarketingSystemsPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/#service",
        "name": "AI Marketing Systems",
        "url": "https://www.theimpulsedigital.com/ai-marketing-systems/",
        "description": "Impulse Digital builds AI marketing systems for brands, including agentic AI, AI-powered outbound engines, AI video production, and generative search optimisation.",
        "serviceType": [
          "AI Marketing Systems",
          "Agentic AI",
          "AI Video Production",
          "Generative Search Optimisation",
          "AI Outbound Automation"
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
          <AIMarketingSystems />
        </>
      );
        
}
