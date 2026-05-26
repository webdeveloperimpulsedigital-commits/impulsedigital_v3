import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import DMartCaseStudy from '@/components/pages/DMartCaseStudy';

export const metadata: Metadata = {
  title: 'DMart Case Study | Impulse Digital',
  description: 'How Impulse Digital supported DMart\'s digital marketing efforts, building online presence and driving consumer engagement for India\'s largest retail chain.',
  keywords: 'dmart case study, retail digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/dmart/`,
  },
  openGraph: {
    title: 'DMart Case Study | Impulse Digital',
    description: 'How Impulse Digital supported DMart\'s digital marketing efforts, building online presence and driving consumer engagement for India\'s largest retail chain.',
    url: `${SITE_URL}/case-studies/dmart/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMart Case Study | Impulse Digital',
    description: 'How Impulse Digital supported DMart\'s digital marketing efforts, building online presence and driving consumer engagement for India\'s largest retail chain.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function DMartCaseStudyPage() {
  return <DMartCaseStudy />;
}
