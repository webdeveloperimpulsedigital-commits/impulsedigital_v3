import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { socialMediaAndheriData } from '@/data/socialMediaAndheriData';
import { getServiceFAQSchema } from "@/lib/schemaHelper";

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Andheri | Impulse Digital',
  description: 'Hire the leading social media marketing agency in Andheri. Impulse Digital builds custom relevance systems designed to scale brand reach and commercial growth.',
  keywords: 'social media marketing agency in andheri, social media marketing company in andheri, smm agency in andheri, smm company, social media management, social media agency, impulse digital, andheri, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Marketing Agency in Andheri | Impulse Digital',
    description: 'Hire the leading social media marketing agency in Andheri. Impulse Digital builds custom relevance systems designed to scale brand reach and commercial growth.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/andheri/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Andheri | Impulse Digital',
    description: 'Hire the leading social media marketing agency in Andheri. Impulse Digital builds custom relevance systems designed to scale brand reach and commercial growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaAndheriLocationPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/andheri/#service",
      "name": "Social Media Marketing Services in Andheri",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/andheri/",
      "description": "Impulse Digital provides social media marketing services in Andheri including strategy, creative engineering, platform alignment, community response, paid campaigns, and performance learning.",
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
          "name": "Andheri"
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
    getServiceFAQSchema(socialMediaAndheriData.faq, false)
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement data={socialMediaAndheriData} />
    </>
  );
}
