import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ThaneLocation from '@/components/pages/ThaneLocation';
import { getFAQSchema } from "@/lib/schemaHelper";
import { thaneLocationFaqs } from "@/lib/data/seoLocations/thaneLocationFaqs";

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Thane | Impulse Digital',
  description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
  keywords: 'digital marketing agency in thane, digital marketing company thane, digital marketing service in thane, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Digital Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
    url: `${SITE_URL}/digital-marketing-agency-in-thane/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function ThaneLocationPage() {
    const schemas = [getFAQSchema(thaneLocationFaqs, false)];

  return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
          
          <ThaneLocation />
        </>
      );

}
