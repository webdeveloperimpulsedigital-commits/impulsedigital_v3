import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import QureAICaseStudy from '@/components/pages/QureAICaseStudy';

export const metadata: Metadata = {
  title: 'Qure.ai Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Qure.ai expand their digital presence and reach healthcare decision-makers through targeted digital marketing.',
  keywords: 'qure ai case study, healthcare digital marketing case study',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/qure-ai/`,
  },
  openGraph: {
    title: 'Qure.ai Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Qure.ai expand their digital presence and reach healthcare decision-makers through targeted digital marketing.',
    url: `${SITE_URL}/case-studies/qure-ai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qure.ai Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Qure.ai expand their digital presence and reach healthcare decision-makers through targeted digital marketing.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function QureAICaseStudyPage() {
  return <QureAICaseStudy />;
}
