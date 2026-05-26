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
  return <ArcherAI />;
}
