import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ABGBrutIndiaCaseStudy from '@/components/pages/ABGBrutIndiaCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'ABG Brut India Case Study | Impulse Digital',
  description: 'How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns.',
  keywords: 'abg brut india case study, digital marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ABG Brut India Case Study | Impulse Digital',
    description: 'How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns.',
    url: `${SITE_URL}/case-studies/abg-brut-india/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABG Brut India Case Study | Impulse Digital',
    description: 'How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ABGBrutIndiaCaseStudyPage() {
    const schemas: any[] = [];

  return <ABGBrutIndiaCaseStudy />;
}
