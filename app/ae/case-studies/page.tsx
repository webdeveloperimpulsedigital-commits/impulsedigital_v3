import JsonLd from '@/components/JsonLd';
import { buildCaseStudyPageGraph } from '@/lib/structuredData';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import CaseStudies from '@/components/pages/CaseStudies';
import { caseStudiesPageData } from '@/data/ae/caseStudiesPageData';
export const metadata: Metadata = {
  title: 'Digital Marketing Case Studies | Impulse Digital',
  description: 'Browse Impulse Digital\'s case studies showcasing successful digital marketing campaigns, SEO wins, branding projects, and measurable results for leading brands.',
  keywords: 'digital marketing case studies, impulse digital work, marketing results',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Digital Marketing Case Studies | Impulse Digital',
    description: 'Browse Impulse Digital\'s case studies showcasing successful digital marketing campaigns, SEO wins, branding projects, and measurable results for leading brands.',
    url: `${SITE_URL}/ae/case-studies/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Case Studies | Impulse Digital',
    description: 'Browse Impulse Digital\'s case studies showcasing successful digital marketing campaigns, SEO wins, branding projects, and measurable results for leading brands.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function CaseStudiesPage() {
  const schema = buildCaseStudyPageGraph({
    path: '/ae/case-studies/',
    name: "Digital Marketing Case Studies | Impulse Digital",
    description: "Browse Impulse Digital\\",
    market: 'ae',
    isIndex: true,
  });

  return (
    <>
      <JsonLd data={schema} id="case-study-index-schema" />
      <CaseStudies data={caseStudiesPageData} />
    </>
  );
}
