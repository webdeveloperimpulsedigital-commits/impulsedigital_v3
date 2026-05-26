import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AlwaysOnIntelligence from '@/components/pages/AlwaysOnIntelligence';

export const metadata: Metadata = {
  title: 'Always-On Intelligence | Impulse Digital',
  description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
  keywords: 'always on intelligence, continuous monitoring, brand intelligence',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/always-on-intelligence/`,
  },
  openGraph: {
    title: 'Always-On Intelligence | Impulse Digital',
    description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
    url: `${SITE_URL}/growth-intelligence/always-on-intelligence/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Always-On Intelligence | Impulse Digital',
    description: 'Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AlwaysOnIntelligencePage() {
  return <AlwaysOnIntelligence />;
}
