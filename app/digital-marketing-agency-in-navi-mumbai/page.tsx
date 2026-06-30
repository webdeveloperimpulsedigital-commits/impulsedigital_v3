import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import NaviMumbaiLocation from '@/components/pages/NaviMumbaiLocation';
import { getFAQSchema } from "@/lib/schemaHelper";
import { naviMumbaiLocationFaqs } from "@/lib/data/seoLocations/naviMumbaiLocationFaqs";

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Navi Mumbai | Impulse Digital',
  description: 'Impulse Digital is best digital marketing agency in Navi Mumbai, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Navi Mumbai.',
  keywords: 'digital marketing agency in navi mumbai, digital marketing navi mumbai, seo navi mumbai',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is best digital marketing agency in Navi Mumbai, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Navi Mumbai.',
    url: `${SITE_URL}/digital-marketing-agency-in-navi-mumbai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Impulse Digital is best digital marketing agency in Navi Mumbai, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Navi Mumbai.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function NaviMumbaiLocationPage() {
    const schemas = [getFAQSchema(naviMumbaiLocationFaqs, false)];

  return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
          
          <NaviMumbaiLocation />
        </>
      );

}
