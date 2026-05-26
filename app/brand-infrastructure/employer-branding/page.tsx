import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EmployerBranding from '@/components/pages/EmployerBranding';

export const metadata: Metadata = {
  title: 'Employer Branding Agency | Impulse Digital',
  description: 'Impulse Digital\'s employer branding services help companies attract, retain, and engage top talent by building a compelling employer value proposition and brand narrative.',
  keywords: 'employer branding agency, employer brand, EVP development',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/employer-branding/`,
  },
  openGraph: {
    title: 'Employer Branding Agency | Impulse Digital',
    description: 'Impulse Digital\'s employer branding services help companies attract, retain, and engage top talent by building a compelling employer value proposition and brand narrative.',
    url: `${SITE_URL}/brand-infrastructure/employer-branding/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employer Branding Agency | Impulse Digital',
    description: 'Impulse Digital\'s employer branding services help companies attract, retain, and engage top talent by building a compelling employer value proposition and brand narrative.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function EmployerBrandingPage() {
  return <EmployerBranding />;
}
