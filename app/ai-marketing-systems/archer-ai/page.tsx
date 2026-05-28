import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ArcherAI from '@/components/pages/ArcherAI';

export const metadata: Metadata = {
  title: 'Archer AI: AI Outbound Sales Agent | Impulse Digital',
  description: 'Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth.',
  keywords: 'archer ai, ai outbound sales agent, b2b outbound ai, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/archer-ai/`,
  },
  openGraph: {
    title: 'Archer AI: AI Outbound Sales Agent | Impulse Digital',
    description: 'Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth.',
    url: `${SITE_URL}/ai-marketing-systems/archer-ai/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archer AI: AI Outbound Sales Agent | Impulse Digital',
    description: 'Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ArcherAIPage() {
  const jsonLd = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArcherAI />
    </>
  );
}
