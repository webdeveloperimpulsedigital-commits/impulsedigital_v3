import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import WebsiteDevelopment from '@/components/pages/WebsiteDevelopment';

export const metadata: Metadata = {
  title: 'Website Development Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a leading website development agency in Mumbai building high-performance, SEO-optimised websites for brands, startups, and enterprises.',
  keywords: 'website development agency mumbai, web development company, website design mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/website-development/`,
  },
  openGraph: {
    title: 'Website Development Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading website development agency in Mumbai building high-performance, SEO-optimised websites for brands, startups, and enterprises.',
    url: `${SITE_URL}/brand-infrastructure/website-development/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading website development agency in Mumbai building high-performance, SEO-optimised websites for brands, startups, and enterprises.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function WebsiteDevelopmentPage() {
  return <WebsiteDevelopment />;
}
