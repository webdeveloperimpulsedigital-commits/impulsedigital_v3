import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SharjahLocation from '@/components/pages/SharjahLocation';
import JsonLd from "@/components/JsonLd";
import { buildServicePageGraph } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Sharjah | Impulse Digital',
  description: 'Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.',
  keywords: 'digital marketing agency in sharjah, digital marketing sharjah, seo sharjah',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Sharjah | Impulse Digital',
    description: 'Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.',
    url: `${SITE_URL}/ae/digital-marketing-agency-in-sharjah/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Sharjah | Impulse Digital',
    description: 'Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SharjahLocationPage() {
  const schema = buildServicePageGraph({
    path: "/ae/digital-marketing-agency-in-sharjah/",
    name: "Best Digital Marketing Agency in Sharjah | Impulse Digital",
    description: "Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.",
    market: "ae",
    areaServed: "Sharjah",
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <SharjahLocation />
    </>
  );
}
