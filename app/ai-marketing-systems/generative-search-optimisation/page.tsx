import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import GenerativeSearchOptimisation from '@/components/pages/GenerativeSearchOptimisation';

export const metadata: Metadata = {
  title: 'Generative Search Optimisation (GEO) | Impulse Digital',
  description: 'Impulse Digital\'s Generative Search Optimisation (GEO) service helps brands rank and appear in AI-generated search results, answer engines, and LLM citations.',
  keywords: 'generative search optimisation, GEO, AI search optimisation, answer engine optimisation',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
  },
  openGraph: {
    title: 'Generative Search Optimisation (GEO) | Impulse Digital',
    description: 'Impulse Digital\'s Generative Search Optimisation (GEO) service helps brands rank and appear in AI-generated search results, answer engines, and LLM citations.',
    url: `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative Search Optimisation (GEO) | Impulse Digital',
    description: 'Impulse Digital\'s Generative Search Optimisation (GEO) service helps brands rank and appear in AI-generated search results, answer engines, and LLM citations.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function GenerativeSearchOptimisationPage() {
  return <GenerativeSearchOptimisation />;
}
