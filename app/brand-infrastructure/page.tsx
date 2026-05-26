import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import BrandInfrastructure from '@/components/pages/BrandInfrastructure';

export const metadata: Metadata = {
  title: 'Brand Infrastructure Services | Impulse Digital',
  description: 'Impulse Digital\'s Brand Infrastructure division builds the digital foundations brands need to grow: SEO, social media, websites, branding, and video production.',
  keywords: 'brand infrastructure, digital marketing services, brand building',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/`,
  },
  openGraph: {
    title: 'Brand Infrastructure Services | Impulse Digital',
    description: 'Impulse Digital\'s Brand Infrastructure division builds the digital foundations brands need to grow: SEO, social media, websites, branding, and video production.',
    url: `${SITE_URL}/brand-infrastructure/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Infrastructure Services | Impulse Digital',
    description: 'Impulse Digital\'s Brand Infrastructure division builds the digital foundations brands need to grow: SEO, social media, websites, branding, and video production.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function BrandInfrastructurePage() {
  return <BrandInfrastructure />;
}
