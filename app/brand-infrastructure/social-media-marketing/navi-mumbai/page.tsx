import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { socialMediaNaviMumbaiData } from '@/data/socialMediaNaviMumbaiData';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Navi Mumbai | Impulse Digital',
  description: 'Looking for the best social media marketing agency in Navi Mumbai? Impulse Digital builds commercial relevance systems that drive brand growth and business leverage.',
  keywords: 'social media marketing agency in navi mumbai, social media marketing company in navi mumbai, smm agency in navi mumbai, smm company, social media management, social media agency, impulse digital, navi mumbai, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Looking for the best social media marketing agency in Navi Mumbai? Impulse Digital builds commercial relevance systems that drive brand growth and business leverage.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/navi-mumbai/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Navi Mumbai | Impulse Digital',
    description: 'Looking for the best social media marketing agency in Navi Mumbai? Impulse Digital builds commercial relevance systems that drive brand growth and business leverage.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaNaviMumbaiLocationPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/navi-mumbai/#service",
      "name": "Social Media Marketing Services in Navi Mumbai",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/navi-mumbai/",
      "description": "Impulse Digital provides social media marketing services in Navi Mumbai including strategy, creative engineering, platform alignment, community response, paid campaigns, and performance learning.",
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
          "name": "Navi Mumbai"
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
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement data={socialMediaNaviMumbaiData} />
    </>
  );
}
