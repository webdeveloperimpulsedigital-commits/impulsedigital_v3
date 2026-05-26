import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a leading social media marketing agency in Mumbai offering content creation, community management, paid social, and social media strategy.',
  keywords: 'social media marketing agency mumbai, social media management, social media agency',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/social-media-marketing/`,
  },
  openGraph: {
    title: 'Social Media Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading social media marketing agency in Mumbai offering content creation, community management, paid social, and social media strategy.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading social media marketing agency in Mumbai offering content creation, community management, paid social, and social media strategy.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaManagementPage() {
  return <SocialMediaManagement />;
}
