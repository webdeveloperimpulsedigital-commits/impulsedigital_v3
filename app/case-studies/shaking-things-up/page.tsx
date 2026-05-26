import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SaltCaseStudy from '@/components/pages/SaltCaseStudy';

export const metadata: Metadata = {
  title: 'Salt Case Study | Shaking Things Up | Impulse Digital',
  description: 'How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.',
  keywords: 'salt case study, fmcg brand marketing case study',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/shaking-things-up/`,
  },
  openGraph: {
    title: 'Salt Case Study | Shaking Things Up | Impulse Digital',
    description: 'How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.',
    url: `${SITE_URL}/case-studies/shaking-things-up/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salt Case Study | Shaking Things Up | Impulse Digital',
    description: 'How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SaltCaseStudyPage() {
  return <SaltCaseStudy />;
}
