import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoSanpadaLocation from '@/components/pages/seo-locations/SeoSanpadaLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoSanpadaData } from "@/data/seoSanpadaData";

export const metadata: Metadata = {
  title: 'SEO Company in Sanpada | SEO Agency | Impulse Digital',
  description: 'Impulse Digital, the SEO company in Sanpada and SEO agency businesses trust. Proven results, including 737% organic traffic growth for Qure.ai. Talk to us.',
  keywords: 'seo agency in sanpada, seo company in sanpada, local seo, seo services, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Sanpada | SEO Agency | Impulse Digital',
    description: 'Impulse Digital, the SEO company in Sanpada and SEO agency businesses trust. Proven results, including 737% organic traffic growth for Qure.ai. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/sanpada/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Sanpada | SEO Agency | Impulse Digital',
    description: 'Impulse Digital, the SEO company in Sanpada and SEO agency businesses trust. Proven results, including 737% organic traffic growth for Qure.ai. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoSanpadaLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, true), getComplexFAQSchema(seoSanpadaData, true)];

  return <SeoSanpadaLocation />;
}
