import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import DMartCaseStudy from '@/components/pages/DMartCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'DMart Case Study | Impulse Digital',
  description: 'How Impulse Digital supported DMart\'s digital marketing efforts, building online presence and driving consumer engagement for India\'s largest retail chain.',
  keywords: 'dmart case study, retail digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'DMart Case Study | Impulse Digital',
    description: 'How Impulse Digital supported DMart\'s digital marketing efforts, building online presence and driving consumer engagement for India\'s largest retail chain.',
    url: `${SITE_URL}/case-studies/dmart/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMart Case Study | Impulse Digital',
    description: 'How Impulse Digital supported DMart\'s digital marketing efforts, building online presence and driving consumer engagement for India\'s largest retail chain.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function DMartCaseStudyPage() {
    const schemas: any[] = [];

  return <DMartCaseStudy />;
}
