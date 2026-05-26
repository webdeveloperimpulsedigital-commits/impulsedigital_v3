import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGhansoliLocation from '@/components/pages/seo-locations/SeoGhansoliLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Ghansoli | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Ghansoli to help businesses rank higher and grow their customer base.',
  keywords: 'seo agency ghansoli, local seo ghansoli, digital marketing ghansoli',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ghansoli/`,
  },
  openGraph: {
    title: 'SEO Agency in Ghansoli | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Ghansoli to help businesses rank higher and grow their customer base.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ghansoli/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Ghansoli | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Ghansoli to help businesses rank higher and grow their customer base.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoGhansoliLocationPage() {
  return <SeoGhansoliLocation />;
}
