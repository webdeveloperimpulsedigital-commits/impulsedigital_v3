import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { socialMediaMaladData } from '@/data/socialMediaMaladData';
import { getServiceFAQSchema } from "@/lib/schemaHelper";

export const metadata: Metadata = {
  title: 'Social Media Agency in Malad | Impulse Digital',
  description: 'Hire the best social media marketing agency in Malad. Impulse Digital replaces vanity metrics with strategic systems built for commercial accountability.',
  keywords: 'social media agency in malad, social media marketing agency in malad, social media marketing company in malad, smm agency in malad, smm company, social media management, impulse digital, malad, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Agency in Malad | Impulse Digital',
    description: 'Hire the best social media marketing agency in Malad. Impulse Digital replaces vanity metrics with strategic systems built for commercial accountability.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/malad/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Agency in Malad | Impulse Digital',
    description: 'Hire the best social media marketing agency in Malad. Impulse Digital replaces vanity metrics with strategic systems built for commercial accountability.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaMaladLocationPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/malad/#service",
      "name": "Social Media Marketing Services in Malad",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/malad/",
      "description": "Impulse Digital provides social media marketing services in Malad including strategy, creative engineering, platform alignment, community response, paid campaigns, and performance learning.",
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
          "name": "Malad"
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
    getServiceFAQSchema(socialMediaMaladData.faq, false)
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement data={socialMediaMaladData} />
    </>
  );
}
