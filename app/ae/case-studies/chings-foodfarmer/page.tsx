import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ChingsFoodfarmerCaseStudy from '@/components/pages/ChingsFoodfarmerCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Chings Foodfarmer Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Chings Foodfarmer connect with food lovers through creative digital storytelling and targeted social media marketing.',
  keywords: 'chings foodfarmer case study, food brand digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Chings Foodfarmer Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Chings Foodfarmer connect with food lovers through creative digital storytelling and targeted social media marketing.',
    url: `${SITE_URL}/ae/case-studies/chings-foodfarmer/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chings Foodfarmer Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Chings Foodfarmer connect with food lovers through creative digital storytelling and targeted social media marketing.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ChingsFoodfarmerCaseStudyPage() {
    const schemas = [];

  return <ChingsFoodfarmerCaseStudy />;
}
