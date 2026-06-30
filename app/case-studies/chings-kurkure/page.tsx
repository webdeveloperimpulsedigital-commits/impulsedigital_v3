import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ChingsKurkureCaseStudy from '@/components/pages/ChingsKurkureCaseStudy';

export const metadata: Metadata = {
  title: 'Chings Kurkure Case Study | Impulse Digital',
  description: 'How Impulse Digital created engaging digital campaigns for Chings Kurkure, driving brand awareness and consumer engagement across digital platforms.',
  keywords: 'chings kurkure case study, snack brand digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Chings Kurkure Case Study | Impulse Digital',
    description: 'How Impulse Digital created engaging digital campaigns for Chings Kurkure, driving brand awareness and consumer engagement across digital platforms.',
    url: `${SITE_URL}/case-studies/chings-kurkure/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chings Kurkure Case Study | Impulse Digital',
    description: 'How Impulse Digital created engaging digital campaigns for Chings Kurkure, driving brand awareness and consumer engagement across digital platforms.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ChingsKurkureCaseStudyPage() {
  return <ChingsKurkureCaseStudy />;
}
