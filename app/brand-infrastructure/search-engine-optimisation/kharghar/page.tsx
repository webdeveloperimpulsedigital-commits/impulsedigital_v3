import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKhargharLocation from '@/components/pages/seo-locations/SeoKhargharLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { seoKhargharData } from "@/data/seoKhargharData";

export const metadata: Metadata = {
  title: 'SEO Agency in Kharghar | Impulse Digital',
  description: 'Impulse Digital provides expert local SEO services in Kharghar to improve search rankings and drive local business growth.',
  keywords: 'seo agency kharghar, local seo kharghar, digital marketing kharghar',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Kharghar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kharghar to improve search rankings and drive local business growth.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/kharghar/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Kharghar | Impulse Digital',
    description: 'Impulse Digital provides expert local SEO services in Kharghar to improve search rankings and drive local business growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKhargharLocationPage() {
    const schemas = [getComplexFAQSchema(seoKhargharData, false)];

  return <SeoKhargharLocation />;
}
