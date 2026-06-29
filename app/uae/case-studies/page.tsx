import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import CaseStudies from '@/components/pages/CaseStudies';

export const metadata: Metadata = {
  title: 'Digital Marketing Case Studies | Impulse Digital',
  description: 'Browse Impulse Digital\'s case studies showcasing successful digital marketing campaigns, SEO wins, branding projects, and measurable results for leading brands.',
  keywords: 'digital marketing case studies, impulse digital work, marketing results',
  alternates: {
    canonical: `${SITE_URL}/case-studies/`,
  },
  openGraph: {
    title: 'Digital Marketing Case Studies | Impulse Digital',
    description: 'Browse Impulse Digital\'s case studies showcasing successful digital marketing campaigns, SEO wins, branding projects, and measurable results for leading brands.',
    url: `${SITE_URL}/case-studies/`,
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
  return <CaseStudies />;
}
