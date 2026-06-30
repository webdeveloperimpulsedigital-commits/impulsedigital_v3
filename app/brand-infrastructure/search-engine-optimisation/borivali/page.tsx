import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoBorivaliLocation from '@/components/pages/seo-locations/SeoBorivaliLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoBorivaliData } from "@/data/seoBorivaliData";

export const metadata: Metadata = {
  title: 'SEO Agency in Borivali | Best SEO Company | Impulse Digital',
  description: 'Impulse Digital is a leading SEO company in Borivali that helps businesses rank higher and drive more organic traffic. Contact us for best SEO services in Borivali.',
  keywords: 'seo agency in borivali, seo company in borivali, seo services in borivali, local seo borivali, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Agency in Borivali | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is a leading SEO company in Borivali that helps businesses rank higher and drive more organic traffic. Contact us for best SEO services in Borivali.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/borivali/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in Borivali | Best SEO Company | Impulse Digital',
    description: 'Impulse Digital is a leading SEO company in Borivali that helps businesses rank higher and drive more organic traffic. Contact us for best SEO services in Borivali.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoBorivaliLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, false), getComplexFAQSchema(seoBorivaliData, false)];

  return <SeoBorivaliLocation />;
}
