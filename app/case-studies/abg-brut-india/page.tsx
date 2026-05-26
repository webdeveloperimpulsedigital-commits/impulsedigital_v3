import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ABGBrutIndiaCaseStudy from '@/components/pages/ABGBrutIndiaCaseStudy';

export const metadata: Metadata = {
  title: 'ABG Brut India Case Study | Impulse Digital',
  description: 'How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns.',
  keywords: 'abg brut india case study, digital marketing case study',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/abg-brut-india/`,
  },
  openGraph: {
    title: 'ABG Brut India Case Study | Impulse Digital',
    description: 'How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns.',
    url: `${SITE_URL}/case-studies/abg-brut-india/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABG Brut India Case Study | Impulse Digital',
    description: 'How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ABGBrutIndiaCaseStudyPage() {
  return <ABGBrutIndiaCaseStudy />;
}
