import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKhargharLocation from '@/components/pages/seo-locations/SeoKhargharLocation';

export const metadata: Metadata = {
  title: 'SEO Agency in Kharghar | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Kharghar to improve search rankings and drive local business growth.',
  keywords: 'seo agency kharghar, local seo kharghar, digital marketing kharghar',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kharghar/`,
  },
  openGraph: {
    title: 'SEO Agency in Kharghar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kharghar to improve search rankings and drive local business growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kharghar/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Kharghar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kharghar to improve search rankings and drive local business growth.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function SeoKhargharLocationPage() {
  return <SeoKhargharLocation />;
}
