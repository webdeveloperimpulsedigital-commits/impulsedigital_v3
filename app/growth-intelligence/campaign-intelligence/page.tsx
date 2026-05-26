import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import CampaignIntelligence from '@/components/pages/CampaignIntelligence';

export const metadata: Metadata = {
  title: 'Campaign & Performance Intelligence | Impulse Digital',
  description: 'Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact.',
  keywords: 'campaign intelligence, performance intelligence, campaign analytics',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/campaign-intelligence/`,
  },
  openGraph: {
    title: 'Campaign & Performance Intelligence | Impulse Digital',
    description: 'Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact.',
    url: `${SITE_URL}/growth-intelligence/campaign-intelligence/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campaign & Performance Intelligence | Impulse Digital',
    description: 'Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function CampaignIntelligencePage() {
  return <CampaignIntelligence />;
}
