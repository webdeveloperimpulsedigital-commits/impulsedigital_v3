import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { socialMediaMumbaiData } from '@/data/socialMediaMumbaiData';
import { getServiceFAQSchema } from "@/lib/schemaHelper";

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a strategic digital growth partner in Mumbai. We replace routine posting habits with a commercial relevance system designed for enterprise momentum.',
  keywords: 'social media marketing agency in mumbai, social media marketing company in mumbai, smm agency in mumbai, smm company, social media management, social media agency, impulse digital, mumbai, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a strategic digital growth partner in Mumbai. We replace routine posting habits with a commercial relevance system designed for enterprise momentum.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/mumbai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a strategic digital growth partner in Mumbai. We replace routine posting habits with a commercial relevance system designed for enterprise momentum.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaMumbaiLocationPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/mumbai/#service",
      "name": "Social Media Marketing Services in Mumbai",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/mumbai/",
      "description": "Impulse Digital provides social media marketing services in Mumbai including social media strategy, content creation, campaign planning, community management, paid social campaigns, analytics, and platform-specific brand communication.",
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
          "name": "Mumbai"
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
    getServiceFAQSchema(socialMediaMumbaiData.faq, false)
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement data={socialMediaMumbaiData} />
    </>
  );
}
