import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import LGHingCaseStudy from '@/components/pages/LGHingCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'LG Hing Case Study | Impulse Digital',
  description: 'How Impulse Digital created impactful digital marketing solutions for LG Hing, building brand awareness and driving consumer engagement.',
  keywords: 'lg hing case study, fmcg digital marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'LG Hing Case Study | Impulse Digital',
    description: 'How Impulse Digital created impactful digital marketing solutions for LG Hing, building brand awareness and driving consumer engagement.',
    url: `${SITE_URL}/case-studies/lg-hing/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LG Hing Case Study | Impulse Digital',
    description: 'How Impulse Digital created impactful digital marketing solutions for LG Hing, building brand awareness and driving consumer engagement.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function LGHingCaseStudyPage() {
    const schemas: any[] = [];

  return <LGHingCaseStudy />;
}
