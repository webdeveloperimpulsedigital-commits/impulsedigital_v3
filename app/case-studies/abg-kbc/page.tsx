import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ABGKBCCaseStudy from '@/components/pages/ABGKBCCaseStudy';

export const metadata: Metadata = {
  title: 'ABG KBC Case Study | Impulse Digital',
  description: 'How Impulse Digital delivered impactful digital marketing for ABG KBC, driving brand awareness and audience engagement.',
  keywords: 'abg kbc case study, entertainment digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/abg-kbc/`,
  },
  openGraph: {
    title: 'ABG KBC Case Study | Impulse Digital',
    description: 'How Impulse Digital delivered impactful digital marketing for ABG KBC, driving brand awareness and audience engagement.',
    url: `${SITE_URL}/case-studies/abg-kbc/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABG KBC Case Study | Impulse Digital',
    description: 'How Impulse Digital delivered impactful digital marketing for ABG KBC, driving brand awareness and audience engagement.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ABGKBCCaseStudyPage() {
  return <ABGKBCCaseStudy />;
}
