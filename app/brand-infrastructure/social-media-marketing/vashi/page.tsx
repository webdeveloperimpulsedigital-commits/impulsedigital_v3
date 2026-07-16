import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { socialMediaVashiData } from '@/data/socialMediaVashiData';
import { getServiceFAQSchema } from "@/lib/schemaHelper";

export const metadata: Metadata = {
  title: 'Social Media Agency in Vashi | Impulse Digital',
  description: 'Looking for the best social media agency in Vashi? Impulse Digital partners with brands to build strategic social systems that drive commercial momentum.',
  keywords: 'social media agency in vashi, social media marketing agency in vashi, social media marketing company in vashi, smm agency in vashi, smm company, social media management, impulse digital, vashi, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Agency in Vashi | Impulse Digital',
    description: 'Looking for the best social media agency in Vashi? Impulse Digital partners with brands to build strategic social systems that drive commercial momentum.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/vashi/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Agency in Vashi | Impulse Digital',
    description: 'Looking for the best social media agency in Vashi? Impulse Digital partners with brands to build strategic social systems that drive commercial momentum.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaVashiLocationPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/vashi/#service",
      "name": "Social Media Marketing Services in Vashi",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/vashi/",
      "description": "Impulse Digital provides social media marketing services in Vashi including strategy, creative engineering, platform alignment, community response, paid campaigns, and performance learning.",
      "serviceType": [
        "Social Media Marketing",
        "Social Media Strategy",
        "Creative production",
        "Community Management",
        "Paid Social Campaigns",
        "Social Media Analytics"
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Vashi"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Maharashtra"
        },
        {
          "@type": "AdministrativeArea",
          "name": "India"
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/"
      }
    },
    getServiceFAQSchema(socialMediaVashiData.faq, false)
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement data={socialMediaVashiData} />
    </>
  );
}
