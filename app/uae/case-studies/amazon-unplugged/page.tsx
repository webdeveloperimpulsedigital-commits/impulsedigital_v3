import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AmazonUnpluggedCaseStudy from '@/components/pages/AmazonUnpluggedCaseStudy';

export const metadata: Metadata = {
  title: 'Amazon Unplugged Case Study | Employer Brand Video Series by Impulse Digital',
  description: 'See how Impulse Digital helped build Amazon Unplugged, a 6-part employer brand video series featuring senior leadership conversations, with 1.2M+ views and 9.5M+ impressions.',
  keywords: 'amazon unplugged, employer brand video series, leadership conversations, talent acquisition',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/amazon-unplugged/`,
  },
  openGraph: {
    title: 'Amazon Unplugged Case Study | Employer Brand Video Series by Impulse Digital',
    description: 'See how Impulse Digital helped build Amazon Unplugged, a 6-part employer brand video series featuring senior leadership conversations, with 1.2M+ views and 9.5M+ impressions.',
    url: `${SITE_URL}/case-studies/amazon-unplugged/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Unplugged Case Study | Employer Brand Video Series by Impulse Digital',
    description: 'See how Impulse Digital helped build Amazon Unplugged, a 6-part employer brand video series featuring senior leadership conversations, with 1.2M+ views and 9.5M+ impressions.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AmazonUnpluggedPage() {
  return <AmazonUnpluggedCaseStudy />;
}
