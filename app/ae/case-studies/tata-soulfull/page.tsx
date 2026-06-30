import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import TataSoulfullCaseStudy from '@/components/pages/TataSoulfullCaseStudy';

export const metadata: Metadata = {
  title: 'Tata Soulfull Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Tata Soulfull build digital brand presence and reach health-conscious consumers through targeted content and digital campaigns.',
  keywords: 'tata soulfull case study, health food digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Tata Soulfull Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Tata Soulfull build digital brand presence and reach health-conscious consumers through targeted content and digital campaigns.',
    url: `${SITE_URL}/ae/case-studies/tata-soulfull/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tata Soulfull Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Tata Soulfull build digital brand presence and reach health-conscious consumers through targeted content and digital campaigns.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function TataSoulfullCaseStudyPage() {
  return <TataSoulfullCaseStudy />;
}
