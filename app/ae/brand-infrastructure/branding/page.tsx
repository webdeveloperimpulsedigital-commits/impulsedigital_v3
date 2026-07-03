import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Branding from '@/components/pages/Branding';
import { brandingData } from '@/data/ae/brandingData';
;
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Best Branding Agency in Dubai | Impulse Digital',
  description: 'Impulse Digital is the best branding agency in Dubai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
  keywords: 'branding agency in Dubai, best branding company in Dubai, brand identity, brand design agency, Dubai, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Branding Agency in Dubai | Impulse Digital',
    description: 'Impulse Digital is the best branding agency in Dubai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/branding/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Branding Agency in Dubai | Impulse Digital',
    description: 'Impulse Digital is the best branding agency in Dubai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function BrandingPage() {
  const schemas: any[] = [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <Branding data={brandingData} />
    </>
  );

}
