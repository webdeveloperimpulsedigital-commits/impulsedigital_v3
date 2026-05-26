import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import MarketIntelligence from '@/components/pages/MarketIntelligence';

export const metadata: Metadata = {
  title: 'Market & Competitive Intelligence | Impulse Digital',
  description: 'Market and competitive intelligence services from Impulse Digital help brands track competitors, identify opportunities, and stay ahead in a dynamic market.',
  keywords: 'market intelligence, competitive intelligence, market research',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/market-intelligence/`,
  },
  openGraph: {
    title: 'Market & Competitive Intelligence | Impulse Digital',
    description: 'Market and competitive intelligence services from Impulse Digital help brands track competitors, identify opportunities, and stay ahead in a dynamic market.',
    url: `${SITE_URL}/growth-intelligence/market-intelligence/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market & Competitive Intelligence | Impulse Digital',
    description: 'Market and competitive intelligence services from Impulse Digital help brands track competitors, identify opportunities, and stay ahead in a dynamic market.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function MarketIntelligencePage() {
  return <MarketIntelligence />;
}
