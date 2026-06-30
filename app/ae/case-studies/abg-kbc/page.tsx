import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ABGKBCCaseStudy from '@/components/pages/ABGKBCCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'ABG KBC Case Study | Impulse Digital',
  description: 'How Impulse Digital delivered impactful digital marketing for ABG KBC, driving brand awareness and audience engagement.',
  keywords: 'abg kbc case study, entertainment digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'ABG KBC Case Study | Impulse Digital',
    description: 'How Impulse Digital delivered impactful digital marketing for ABG KBC, driving brand awareness and audience engagement.',
    url: `${SITE_URL}/ae/case-studies/abg-kbc/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABG KBC Case Study | Impulse Digital',
    description: 'How Impulse Digital delivered impactful digital marketing for ABG KBC, driving brand awareness and audience engagement.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ABGKBCCaseStudyPage() {
    const schemas = [getFAQSchema(defaultFaqs, true)];

  return <ABGKBCCaseStudy />;
}
