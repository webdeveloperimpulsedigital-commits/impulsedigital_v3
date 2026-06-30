import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoVashiLocation from '@/components/pages/seo-locations/SeoVashiLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoVashiData } from "@/data/seoVashiData";

export const metadata: Metadata = {
  title: 'SEO Services in Vashi | SEO Company | Impulse Digital',
  description: 'Impulse Digital is a trusted SEO company in Vashi offering SEO services backed by 3,500% impression growth for ElectroMech. As an SEO agency in Vashi, we build for lasting visibility.',
  keywords: 'seo services in vashi, seo agency in vashi, seo company in vashi, local seo, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Services in Vashi | SEO Company | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Vashi offering SEO services backed by 3,500% impression growth for ElectroMech. As an SEO agency in Vashi, we build for lasting visibility.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/vashi/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in Vashi | SEO Company | Impulse Digital',
    description: 'Impulse Digital is a trusted SEO company in Vashi offering SEO services backed by 3,500% impression growth for ElectroMech. As an SEO agency in Vashi, we build for lasting visibility.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoVashiLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, false), getComplexFAQSchema(seoVashiData, false)];

  return <SeoVashiLocation />;
}
