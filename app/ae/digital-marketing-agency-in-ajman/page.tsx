import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AjmanLocation from '@/components/pages/AjmanLocation';
import JsonLd from "@/components/JsonLd";
import { buildServicePageGraph } from "@/lib/structuredData";

const title = 'Digital Marketing Agency in Ajman | Impulse Digital';
const description = 'Digital marketing services for Ajman connecting audience intelligence, campaigns, SEO, social media, websites, brand systems, and measurable execution.';

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/ae/digital-marketing-agency-in-ajman/`,
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

export default function AjmanLocationPage() {
  const schema = buildServicePageGraph({
    path: "/ae/digital-marketing-agency-in-ajman/",
    name: title,
    description,
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
