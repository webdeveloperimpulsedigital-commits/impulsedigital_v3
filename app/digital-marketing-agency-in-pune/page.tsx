import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import PuneLocation from '@/components/pages/PuneLocation';
import { getFAQSchema } from "@/lib/schemaHelper";
import { puneLocationFaqs } from "@/lib/data/seoLocations/puneLocationFaqs";

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Pune | Impulse Digital',
  description: 'Impulse Digital is the best digital marketing company in Pune, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Pune.',
  keywords: 'digital marketing agency in pune, digital marketing company in pune, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Pune | Impulse Digital',
    description: 'Impulse Digital is the best digital marketing company in Pune, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Pune.',
    url: `${SITE_URL}/digital-marketing-agency-in-pune/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Pune | Impulse Digital',
    description: 'Impulse Digital is the best digital marketing company in Pune, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Pune.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function PuneLocationPage() {
    const schemas = [getFAQSchema(puneLocationFaqs, false)];

  return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
          
          <PuneLocation />
        </>
      );

}
