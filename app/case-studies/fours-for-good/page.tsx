import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import FoursForGoodCaseStudy from '@/components/pages/FoursForGoodCaseStudy';

export const metadata: Metadata = {
  title: 'Fours For Good Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.',
  keywords: 'fours for good case study, social impact marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/fours-for-good/`,
  },
  openGraph: {
    title: 'Fours For Good Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.',
    url: `${SITE_URL}/case-studies/fours-for-good/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fours For Good Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function FoursForGoodCaseStudyPage() {
  return <FoursForGoodCaseStudy />;
}
