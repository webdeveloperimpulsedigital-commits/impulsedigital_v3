import JsonLd from '@/components/JsonLd';
import { buildCaseStudyPageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SaltCaseStudy from '@/components/pages/SaltCaseStudy';
export const metadata: Metadata = {
  title: 'Salt Case Study | Shaking Things Up | Impulse Digital',
  description: 'How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.',
  keywords: 'salt case study, fmcg brand marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Salt Case Study | Shaking Things Up | Impulse Digital',
    description: 'How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.',
    url: `${SITE_URL}/ae/case-studies/shaking-things-up/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salt Case Study | Shaking Things Up | Impulse Digital',
    description: 'How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SaltCaseStudyPage() {
  const schema = buildCaseStudyPageGraph({
    path: '/ae/case-studies/shaking-things-up/',
    name: "Salt Case Study | Shaking Things Up | Impulse Digital",
    description: "How Impulse Digital helped a challenger salt brand shake things up through creative storytelling and strategic digital marketing.",
    market: 'ae',
  });

  return (
    <>
      <JsonLd data={schema} id="case-study-schema" />
      <SaltCaseStudy />
    </>
  );
}
