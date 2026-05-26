import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ChingsFoodfarmerCaseStudy from '@/components/pages/ChingsFoodfarmerCaseStudy';

export const metadata: Metadata = {
  title: 'Chings Foodfarmer Case Study | Impulse Digital',
  description: 'How Impulse Digital helped Chings Foodfarmer connect with food lovers through creative digital storytelling and targeted social media marketing.',
  keywords: 'chings foodfarmer case study, food brand digital marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/chings-foodfarmer/`,
  },
  openGraph: {
    title: 'Chings Foodfarmer Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Chings Foodfarmer connect with food lovers through creative digital storytelling and targeted social media marketing.',
    url: `${SITE_URL}/case-studies/chings-foodfarmer/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chings Foodfarmer Case Study | Impulse Digital',
    description: 'How Impulse Digital helped Chings Foodfarmer connect with food lovers through creative digital storytelling and targeted social media marketing.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ChingsFoodfarmerCaseStudyPage() {
  return <ChingsFoodfarmerCaseStudy />;
}
