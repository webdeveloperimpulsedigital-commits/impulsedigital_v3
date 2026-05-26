import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import TcplCaseStudy from '@/components/pages/TcplCaseStudy';

export const metadata: Metadata = {
  title: 'TCPL Case Study | Impulse Digital',
  description: 'How Impulse Digital helped TCPL execute effective digital marketing campaigns that drove brand awareness and consumer engagement.',
  keywords: 'tcpl case study, fmcg digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/tcpl/`,
  },
  openGraph: {
    title: 'TCPL Case Study | Impulse Digital',
    description: 'How Impulse Digital helped TCPL execute effective digital marketing campaigns that drove brand awareness and consumer engagement.',
    url: `${SITE_URL}/case-studies/tcpl/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCPL Case Study | Impulse Digital',
    description: 'How Impulse Digital helped TCPL execute effective digital marketing campaigns that drove brand awareness and consumer engagement.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function TcplCaseStudyPage() {
  return <TcplCaseStudy />;
}
