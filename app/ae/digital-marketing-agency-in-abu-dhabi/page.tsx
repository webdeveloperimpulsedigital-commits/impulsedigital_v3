import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AbuDhabiLocation from '@/components/pages/AbuDhabiLocation';
import { getFAQSchema } from "@/lib/schemaHelper";
import { abuDhabiLocationFaqs } from "@/lib/data/seoLocations/abuDhabiLocationFaqs";

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Abu Dhabi | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Abu Dhabi offering SEO, social media, content, and performance marketing solutions for businesses in Abu Dhabi.',
  keywords: 'digital marketing agency in abu dhabi, digital marketing company abu dhabi, digital marketing service in abu dhabi, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Digital Marketing Agency in Abu Dhabi | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Abu Dhabi offering SEO, social media, content, and performance marketing solutions for businesses in Abu Dhabi.',
    url: `${SITE_URL}/ae/digital-marketing-agency-in-abu-dhabi/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Abu Dhabi | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Abu Dhabi offering SEO, social media, content, and performance marketing solutions for businesses in Abu Dhabi.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AbuDhabiLocationPage() {
    const schemas = [getFAQSchema(abuDhabiLocationFaqs, true)];

  return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
          
          <AbuDhabiLocation />
        </>
      );

}
