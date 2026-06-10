import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import HULCaseStudy from '@/components/pages/HULCaseStudy';

export const metadata: Metadata = {
  title: 'HUL Case Study | Impulse Digital',
  description: 'How Impulse Digital partnered with Hindustan Unilever to deliver effective digital marketing campaigns that reached millions and drove measurable impact.',
  keywords: 'hul case study, hindustan unilever digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/hul/`,
  },
  openGraph: {
    title: 'HUL Case Study | Impulse Digital',
    description: 'How Impulse Digital partnered with Hindustan Unilever to deliver effective digital marketing campaigns that reached millions and drove measurable impact.',
    url: `${SITE_URL}/case-studies/hul/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUL Case Study | Impulse Digital',
    description: 'How Impulse Digital partnered with Hindustan Unilever to deliver effective digital marketing campaigns that reached millions and drove measurable impact.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function HULCaseStudyPage() {
  return <HULCaseStudy />;
}
