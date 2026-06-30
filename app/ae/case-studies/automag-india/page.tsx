import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AutomagIndiaCaseStudy from '@/components/pages/AutomagIndiaCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Automag India Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Automag India build their digital brand presence and drive engagement through strategic digital marketing.',
  keywords: 'automag india case study, digital marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Automag India Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Automag India build their digital brand presence and drive engagement through strategic digital marketing.',
    url: `${SITE_URL}/ae/case-studies/automag-india/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automag India Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Automag India build their digital brand presence and drive engagement through strategic digital marketing.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AutomagIndiaCaseStudyPage() {
    const schemas: any[] = [];

  return <AutomagIndiaCaseStudy />;
}
