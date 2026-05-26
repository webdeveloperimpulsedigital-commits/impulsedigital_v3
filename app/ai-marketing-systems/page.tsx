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
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Systems | Impulse Digital',
    description: 'Impulse Digital\'s AI Marketing Systems help brands harness the power of artificial intelligence for smarter marketing, automation, and scalable growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AIMarketingSystemsPage() {
  return <AIMarketingSystems />;
}
