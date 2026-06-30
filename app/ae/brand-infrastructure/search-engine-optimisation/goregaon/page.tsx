import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoGoregaonLocation from '@/components/pages/seo-locations/SeoGoregaonLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoGoregaonData } from "@/data/seoGoregaonData";

export const metadata: Metadata = {
  title: 'SEO Company in Goregaon | Best SEO Services | Impulse Digital',
  description: 'Stop losing Goregaon customers to competitors who rank higher. Impulse Digital is a specialist SEO company in Goregaon with 34 years of experience and a free first audit. Talk to us.',
  keywords: 'seo agency in goregaon, seo company in goregaon, seo services, local seo goregaon, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Goregaon | Impulse Digital',
    description: 'Stop losing Goregaon customers to competitors who rank higher. Impulse Digital is a specialist SEO company in Goregaon with 34 years of experience and a free first audit. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/goregaon/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Goregaon | Impulse Digital',
    description: 'Stop losing Goregaon customers to competitors who rank higher. Impulse Digital is a specialist SEO company in Goregaon with 34 years of experience and a free first audit. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoGoregaonLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, true), getComplexFAQSchema(seoGoregaonData, true)];

  return <SeoGoregaonLocation />;
}
