import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Branding from '@/components/pages/Branding';

export const metadata: Metadata = {
  title: 'Best Branding Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is the best branding agency in Mumbai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
  keywords: 'branding agency in mumbai, best branding company in mumbai, brand identity, brand design agency, mumbai, thane, navi mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Branding Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is the best branding agency in Mumbai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
    url: `${SITE_URL}/brand-infrastructure/branding/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Branding Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is the best branding agency in Mumbai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function BrandingPage() {
  return (
    <>
      
      <Branding />
    </>
  );

}
