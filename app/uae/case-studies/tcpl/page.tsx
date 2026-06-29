import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import TcplCaseStudy from '@/components/pages/TcplCaseStudy';

export const metadata: Metadata = {
  title: 'TCPL Case Study | Impulse Digital',
  description: 'How Impulse Digital helped TCPL execute effective digital marketing campaigns that drove brand awareness and consumer engagement.',
  keywords: 'tcpl case study, fmcg digital marketing',
  alternates: {
    canonical: `${SITE_URL}/case-studies/tcpl/`,
  },
  openGraph: {
    title: 'TCPL Case Study | Impulse Digital',
    description: 'How Impulse Digital helped TCPL execute effective digital marketing campaigns that drove brand awareness and consumer engagement.',
    url: `${SITE_URL}/case-studies/tcpl/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCPL Case Study | Impulse Digital',
    description: 'How Impulse Digital helped TCPL execute effective digital marketing campaigns that drove brand awareness and consumer engagement.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function TcplCaseStudyPage() {
  return <TcplCaseStudy />;
}
