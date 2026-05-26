import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AIVideoProduction from '@/components/pages/AIVideoProduction';

export const metadata: Metadata = {
  title: 'AI Video Production Services | Impulse Digital',
  description: 'Impulse Digital\'s AI Video Production service creates high-quality cinematic videos using AI tools, combining creative direction with AI-powered production capabilities.',
  keywords: 'ai video production, ai cinematic production, ai video agency',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/ai-video-production/`,
  },
  openGraph: {
    title: 'AI Video Production Services | Impulse Digital',
    description: 'Impulse Digital\'s AI Video Production service creates high-quality cinematic videos using AI tools, combining creative direction with AI-powered production capabilities.',
    url: `${SITE_URL}/ai-marketing-systems/ai-video-production/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Production Services | Impulse Digital',
    description: 'Impulse Digital\'s AI Video Production service creates high-quality cinematic videos using AI tools, combining creative direction with AI-powered production capabilities.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AIVideoProductionPage() {
  return <AIVideoProduction />;
}
