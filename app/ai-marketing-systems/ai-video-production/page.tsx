import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AIVideoProduction from '@/components/pages/AIVideoProduction';
import { aiVideoProductionData } from '@/data/aiVideoProductionData';
;
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'AI Video Production Agency & Services | Impulse Digital',
  description: 'Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.',
  keywords: 'ai video production, ai cinematic production, ai video production agency, ai video production service, mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Video Production Agency & Services | Impulse Digital',
    description: 'Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.',
    url: `${SITE_URL}/ai-marketing-systems/ai-video-production/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Production Agency & Services | Impulse Digital',
    description: 'Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function AIVideoProductionPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/#service",
      "name": "AI Video Production Services",
      "url": "https://www.theimpulsedigital.com/ai-marketing-systems/ai-video-production/",
      "description": "Impulse Digital is an AI video production agency offering AI video production services for campaign films, product explainers, social media videos, training videos, multilingual content, and digital ads. Create faster, scalable, brand-ready videos with human creative direction and AI-enabled production.",
      "serviceType": [
        "AI Video Production",
        "AI Generated Videos",
        "Product Videos",
        "Social Media Videos",
        "Campaign Videos",
        "Digital Video Content"
      ],
      "areaServed": [
        "IN",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/"
      }
    }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AIVideoProduction data={aiVideoProductionData} />
    </>
  );

}
