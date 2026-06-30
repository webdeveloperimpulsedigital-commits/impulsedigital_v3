import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import UppercaseCaseStudy from '@/components/pages/UppercaseCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Uppercase Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Uppercase build digital brand presence and drive growth through strategic digital marketing and content.',
  keywords: 'uppercase case study, digital marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Uppercase Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Uppercase build digital brand presence and drive growth through strategic digital marketing and content.',
    url: `${SITE_URL}/ae/case-studies/uppercase/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uppercase Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Uppercase build digital brand presence and drive growth through strategic digital marketing and content.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function UppercaseCaseStudyPage() {
    const schemas = [getFAQSchema(defaultFaqs, true)];

  return <UppercaseCaseStudy />;
}
