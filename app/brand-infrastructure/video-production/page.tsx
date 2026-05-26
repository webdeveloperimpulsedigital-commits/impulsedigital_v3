import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import VideoProduction from '@/components/pages/VideoProduction';

export const metadata: Metadata = {
  title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
  description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
  keywords: 'video production company in mumbai, video production agency in mumbai, video production services',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/video-production/`,
  },
  openGraph: {
    title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
    description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
    url: `${SITE_URL}/brand-infrastructure/video-production/`,
    images: [{ url: `${SITE_URL}/video-production.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Production Company in Mumbai | Production Agency | Impulse Digital',
    description: 'Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact.',
    images: [`${SITE_URL}/video-production.webp`],
    site: '@impulsedigi',
  },
};

export default function VideoProductionPage() {
  return <VideoProduction />;
}
