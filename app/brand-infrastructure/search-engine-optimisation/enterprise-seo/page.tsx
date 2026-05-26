import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EnterpriseSEO from '@/components/pages/EnterpriseSEO';

export const metadata: Metadata = {
  title: 'Enterprise SEO Services | Impulse Digital',
  description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
  keywords: 'enterprise seo, enterprise seo agency, large scale seo services',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/enterprise-seo/`,
  },
  openGraph: {
    title: 'Enterprise SEO Services | Impulse Digital',
    description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/enterprise-seo/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise SEO Services | Impulse Digital',
    description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function EnterpriseSEOPage() {
  return <EnterpriseSEO />;
}
