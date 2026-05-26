import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Branding from '@/components/pages/Branding';

export const metadata: Metadata = {
  title: 'Brand Identity & Branding Agency | Impulse Digital',
  description: 'Impulse Digital is a branding agency in Mumbai that builds strong brand identities through strategy, visual design, messaging, and brand systems that last.',
  keywords: 'branding agency mumbai, brand identity, brand design agency',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/branding/`,
  },
  openGraph: {
    title: 'Brand Identity & Branding Agency | Impulse Digital',
    description: 'Impulse Digital is a branding agency in Mumbai that builds strong brand identities through strategy, visual design, messaging, and brand systems that last.',
    url: `${SITE_URL}/brand-infrastructure/branding/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity & Branding Agency | Impulse Digital',
    description: 'Impulse Digital is a branding agency in Mumbai that builds strong brand identities through strategy, visual design, messaging, and brand systems that last.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function BrandingPage() {
  return <Branding />;
}
