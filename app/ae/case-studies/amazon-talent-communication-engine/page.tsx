import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AmazonTalentCommunicationCaseStudy from '@/components/pages/AmazonTalentCommunicationCaseStudy';

export const metadata: Metadata = {
  title: 'Amazon Talent Communication Case Study | Employer Branding by Impulse Digital',
  description: 'See how Impulse Digital supported Amazon’s employer branding engine across Prime Day storytelling, employee advocacy, social media, job boards, and internal referral campaigns.',
  keywords: 'amazon talent communication engine, employer branding, employee advocacy, job board optimisation, social media management',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Amazon Talent Communication Case Study | Employer Branding by Impulse Digital',
    description: 'See how Impulse Digital supported Amazon’s employer branding engine across Prime Day storytelling, employee advocacy, social media, job boards, and internal referral campaigns.',
    url: `${SITE_URL}/ae/case-studies/amazon-talent-communication-engine/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Talent Communication Case Study | Employer Branding by Impulse Digital',
    description: 'See how Impulse Digital supported Amazon’s employer branding engine across Prime Day storytelling, employee advocacy, social media, job boards, and internal referral campaigns.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AmazonTalentCommunicationPage() {
  return <AmazonTalentCommunicationCaseStudy />;
}
