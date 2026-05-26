import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AgenticAI from '@/components/pages/AgenticAI';

export const metadata: Metadata = {
  title: 'Agentic AI Marketing Solutions | Impulse Digital',
  description: 'Impulse Digital\'s Agentic AI solutions bring autonomous AI agents to marketing workflows, enabling smarter, faster, and more scalable brand operations.',
  keywords: 'agentic ai, ai agents marketing, autonomous ai marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/agentic-ai/`,
  },
  openGraph: {
    title: 'Agentic AI Marketing Solutions | Impulse Digital',
    description: 'Impulse Digital\'s Agentic AI solutions bring autonomous AI agents to marketing workflows, enabling smarter, faster, and more scalable brand operations.',
    url: `${SITE_URL}/ai-marketing-systems/agentic-ai/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI Marketing Solutions | Impulse Digital',
    description: 'Impulse Digital\'s Agentic AI solutions bring autonomous AI agents to marketing workflows, enabling smarter, faster, and more scalable brand operations.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AgenticAIPage() {
  return <AgenticAI />;
}
