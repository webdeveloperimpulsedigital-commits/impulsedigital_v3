import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import UppercaseCaseStudy from '@/components/pages/UppercaseCaseStudy';

export const metadata: Metadata = {
  title: 'Uppercase Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Uppercase build digital brand presence and drive growth through strategic digital marketing and content.',
  keywords: 'uppercase case study, digital marketing case study',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/uppercase/`,
  },
  openGraph: {
    title: 'Uppercase Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Uppercase build digital brand presence and drive growth through strategic digital marketing and content.',
    url: `${SITE_URL}/case-studies/uppercase/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uppercase Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Uppercase build digital brand presence and drive growth through strategic digital marketing and content.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function UppercaseCaseStudyPage() {
  return <UppercaseCaseStudy />;
}
