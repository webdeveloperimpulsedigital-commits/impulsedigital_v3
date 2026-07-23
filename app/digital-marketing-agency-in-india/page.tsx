import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import IndiaLocation from '@/components/pages/IndiaLocation';
import JsonLd from "@/components/JsonLd";
import { buildServicePageGraph } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in India | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for companies in India.',
  keywords: 'digital marketing agency in india, digital marketing company in india, services, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for companies in India.',
    url: `${SITE_URL}/digital-marketing-agency-in-india/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in India | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for companies in India.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function IndiaLocationPage() {
  const schema = buildServicePageGraph({
    path: "/digital-marketing-agency-in-india/",
    name: "Best Digital Marketing Agency in India | Impulse Digital",
    description: "Impulse Digital is a top digital marketing agency in India offering SEO, social media, content, performance marketing, and branding solutions for companies in India.",
    market: "in",
    areaServed: "India",
  });

  return (
    <>
      <JsonLd data={schema} id="service-page-schema" />
      <IndiaLocation />
    </>
  );
}
