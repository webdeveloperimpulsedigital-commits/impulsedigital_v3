import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EmployerBrandingCaseStudy from '@/components/pages/EmployerBrandingCaseStudy';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Employer Branding Case Study | Impulse Digital',
  description: 'How Impulse Digital helped leading brands build compelling employer brands that attract top talent and strengthen their position as employers of choice.',
  keywords: 'employer branding case study, talent marketing case study',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Employer Branding Case Study | Impulse Digital',
    description: 'How Impulse Digital helped leading brands build compelling employer brands that attract top talent and strengthen their position as employers of choice.',
    url: `${SITE_URL}/ae/case-studies/employer-branding/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employer Branding Case Study | Impulse Digital',
    description: 'How Impulse Digital helped leading brands build compelling employer brands that attract top talent and strengthen their position as employers of choice.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function EmployerBrandingCaseStudyPage() {
    const schemas: any[] = [];

  return <EmployerBrandingCaseStudy />;
}
