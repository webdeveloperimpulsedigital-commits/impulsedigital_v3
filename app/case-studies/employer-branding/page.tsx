import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EmployerBrandingCaseStudy from '@/components/pages/EmployerBrandingCaseStudy';

export const metadata: Metadata = {
  title: 'Employer Branding Case Study | Impulse Digital',
  description: 'How Impulse Digital helped leading brands build compelling employer brands that attract top talent and strengthen their position as employers of choice.',
  keywords: 'employer branding case study, talent marketing case study',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/case-studies/employer-branding/`,
  },
  openGraph: {
    title: 'Employer Branding Case Study | Impulse Digital',
    description: 'How Impulse Digital helped leading brands build compelling employer brands that attract top talent and strengthen their position as employers of choice.',
    url: `${SITE_URL}/case-studies/employer-branding/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employer Branding Case Study | Impulse Digital',
    description: 'How Impulse Digital helped leading brands build compelling employer brands that attract top talent and strengthen their position as employers of choice.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function EmployerBrandingCaseStudyPage() {
  return <EmployerBrandingCaseStudy />;
}
