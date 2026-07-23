import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AjmanLocation from '@/components/pages/AjmanLocation';
import JsonLd from "@/components/JsonLd";
import { buildServicePageGraph } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Ajman | Impulse Digital',
  description: 'Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.',
  keywords: 'digital marketing agency in ajman, digital marketing company in ajman, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Ajman | Impulse Digital',
    description: 'Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.',
    url: `${SITE_URL}/ae/digital-marketing-agency-in-ajman/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Ajman | Impulse Digital',
    description: 'Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AjmanLocationPage() {
  const schema = buildServicePageGraph({
    path: "/ae/digital-marketing-agency-in-ajman/",
    name: "Best Digital Marketing Agency in Ajman | Impulse Digital",
    description: "Impulse Digital is the best digital marketing company in Ajman, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Ajman.",
    market: "ae",
    areaServed: "Ajman",
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <AjmanLocation />
    </>
  );
}
