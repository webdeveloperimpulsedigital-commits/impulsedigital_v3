import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AutomagBajajAutoCaseStudy from '@/components/pages/AutomagBajajAutoCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Automag Bajaj Auto Case Study | Impulse Digital',
  description: 'How Impulse Digital and Automag partnered with Bajaj Auto to execute high-impact digital campaigns that drove brand engagement and sales.',
  keywords: 'bajaj auto case study, automotive digital marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Automag Bajaj Auto Case Study | Impulse Digital',
    description: 'How Impulse Digital and Automag partnered with Bajaj Auto to execute high-impact digital campaigns that drove brand engagement and sales.',
    url: `${SITE_URL}/ae/case-studies/automag-bajaj-auto/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automag Bajaj Auto Case Study | Impulse Digital',
    description: 'How Impulse Digital and Automag partnered with Bajaj Auto to execute high-impact digital campaigns that drove brand engagement and sales.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AutomagBajajAutoCaseStudyPage() {
    const schemas = [getFAQSchema(defaultFaqs, true)];

  return <AutomagBajajAutoCaseStudy />;
}
