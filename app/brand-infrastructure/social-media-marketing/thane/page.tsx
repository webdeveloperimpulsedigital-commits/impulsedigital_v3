import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { socialMediaThaneData } from '@/data/socialMediaThaneData';
import { getServiceFAQSchema } from "@/lib/schemaHelper";

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Thane | Impulse Digital',
  description: 'Impulse Digital is a strategic digital growth partner operating from Thane. We replace marketing maintenance with commercial relevance systems for enterprise brands.',
  keywords: 'social media marketing agency in thane, social media marketing company in thane, smm agency in thane, smm company, social media management, social media agency, impulse digital, thane, wagle estate, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a strategic digital growth partner operating from Thane. We replace marketing maintenance with commercial relevance systems for enterprise brands.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/thane/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Thane | Impulse Digital',
    description: 'Impulse Digital is a strategic digital growth partner operating from Thane. We replace marketing maintenance with commercial relevance systems for enterprise brands.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaThaneLocationPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/thane/#service",
      "name": "Social Media Marketing Services in Thane",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/thane/",
      "description": "Impulse Digital provides social media marketing services in Thane including social media strategy, content creation, campaign planning, community management, paid social campaigns, analytics, and platform-specific brand communication.",
      "serviceType": [
        "Social Media Marketing",
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Campaigns",
        "Social Media Analytics",
        "Brand Communication"
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Thane"
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
    getServiceFAQSchema(socialMediaThaneData.faq, false)
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement data={socialMediaThaneData} />
    </>
  );
}
