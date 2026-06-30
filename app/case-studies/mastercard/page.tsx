import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import MastercardCaseStudy from '@/components/pages/MastercardCaseStudy';

export const metadata: Metadata = {
  title: 'Mastercard Case Study | Impulse Digital',
  description: 'How Impulse Digital delivered impactful digital marketing campaigns for Mastercard, driving brand engagement and measurable results.',
  keywords: 'mastercard case study, fintech digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mastercard Case Study | Impulse Digital',
    description: 'How Impulse Digital delivered impactful digital marketing campaigns for Mastercard, driving brand engagement and measurable results.',
    url: `${SITE_URL}/case-studies/mastercard/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mastercard Case Study | Impulse Digital',
    description: 'How Impulse Digital delivered impactful digital marketing campaigns for Mastercard, driving brand engagement and measurable results.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function MastercardCaseStudyPage() {
  return <MastercardCaseStudy />;
}
