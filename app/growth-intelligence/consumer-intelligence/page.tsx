import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ConsumerIntelligence from '@/components/pages/ConsumerIntelligence';

export const metadata: Metadata = {
  title: 'Consumer Intelligence Services | Impulse Digital',
  description: 'Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions.',
  keywords: 'consumer intelligence, consumer insights, digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/consumer-intelligence/`,
  },
  openGraph: {
    title: 'Consumer Intelligence Services | Impulse Digital',
    description: 'Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions.',
    url: `${SITE_URL}/growth-intelligence/consumer-intelligence/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Intelligence Services | Impulse Digital',
    description: 'Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ConsumerIntelligencePage() {
  return <ConsumerIntelligence />;
}
