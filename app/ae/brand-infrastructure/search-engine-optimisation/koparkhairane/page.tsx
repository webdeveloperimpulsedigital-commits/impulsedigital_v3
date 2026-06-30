import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SeoKoparkhairaneLocation from '@/components/pages/seo-locations/SeoKoparkhairaneLocation';
import { getFAQSchema, getComplexFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";
import { seoKoparkhairaneData } from "@/data/seoKoparkhairaneData";

export const metadata: Metadata = {
  title: 'SEO Company in Koparkhairane | SEO Services by Impulse Digital',
  description: 'Impulse Digital is an SEO company in Koparkhairane helping businesses improve Google rankings, local visibility, website traffic, and qualified enquiries through technical SEO, content optimisation, local SEO, and clear performance reporting. A results-driven SEO services.',
  keywords: 'seo agency in koparkhairane, local seo in koparkhairane, seo company in koparkhairane, seo service, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SEO Company in Koparkhairane | SEO Services by Impulse Digital',
    description: 'Impulse Digital is an SEO company in Koparkhairane helping businesses improve Google rankings, local visibility, website traffic, and qualified enquiries through technical SEO, content optimisation, local SEO, and clear performance reporting. A results-driven SEO services.',
    url: `${SITE_URL}/ae/brand-infrastructure/search-engine-optimisation/koparkhairane/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Koparkhairane | SEO Services by Impulse Digital',
    description: 'Impulse Digital is an SEO company in Koparkhairane helping businesses improve Google rankings, local visibility, website traffic, and qualified enquiries through technical SEO, content optimisation, local SEO, and clear performance reporting. A results-driven SEO services.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SeoKoparkhairaneLocationPage() {
    const schemas = [getFAQSchema(defaultFaqs, true), getComplexFAQSchema(seoKoparkhairaneData, true)];

  return <SeoKoparkhairaneLocation />;
}
