import JsonLd from '@/components/JsonLd';
import { buildCaseStudyPageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import FoursForGoodCaseStudy from '@/components/pages/FoursForGoodCaseStudy';
export const metadata: Metadata = {
  title: 'Fours For Good Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.',
  keywords: 'fours for good case study, social impact marketing',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Fours For Good Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.',
    url: `${SITE_URL}/ae/case-studies/fours-for-good/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fours For Good Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function FoursForGoodCaseStudyPage() {
  const schema = buildCaseStudyPageGraph({
    path: '/ae/case-studies/fours-for-good/',
    name: "Fours For Good Case Study | Impulse Digital",
    description: "How Impulse Digital helped Fours For Good build brand awareness and community engagement through strategic digital marketing.",
    market: 'ae',
  });

  return (
    <>
      <JsonLd data={schema} id="case-study-schema" />
      <FoursForGoodCaseStudy />
    </>
  );
}
