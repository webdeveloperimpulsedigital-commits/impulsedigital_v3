import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import UaeLocation from '@/components/pages/UaeLocation';
import JsonLd from "@/components/JsonLd";
import { buildServicePageGraph } from "@/lib/structuredData";

const title = 'Digital Marketing Agency in UAE | Impulse Digital';
const description = 'Digital marketing services across the UAE connecting market intelligence, AI-enabled systems, campaigns, SEO, social media, websites, brand systems, and measurement.';

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/ae/digital-marketing-agency-in-uae/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function UaeLocationPage() {
  const schema = buildServicePageGraph({
    path: "/ae/digital-marketing-agency-in-uae/",
    name: title,
    description,
    market: "ae",
    areaServed: "UAE",
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <UaeLocation />
    </>
  );
}
