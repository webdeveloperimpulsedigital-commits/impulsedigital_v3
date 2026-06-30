import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SocialMediaManagement from '@/components/pages/SocialMediaManagement';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Mumbai | Best SMM Company | Impulse Digital',
  description: 'Impulse Digital is the best social media marketing agency in Mumbai and a trusted SMM agency for enterprise brands. We are offering content creation, community management, paid social, and social media strategy.',
  keywords: 'social media marketing agency in mumbai, social media marketing company in mumbai, smm agency in mumbai, smm company, social media management, social media agency, impulse digital, mumbai, navi mumbai, thane, india',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Social Media Marketing Agency in Mumbai | Best SMM Company | Impulse Digital',
    description: 'Impulse Digital is the best social media marketing agency in Mumbai and a trusted SMM agency for enterprise brands. We are offering content creation, community management, paid social, and social media strategy.',
    url: `${SITE_URL}/brand-infrastructure/social-media-marketing/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Agency in Mumbai | Best SMM Company | Impulse Digital',
    description: 'Impulse Digital is the best social media marketing agency in Mumbai and a trusted SMM agency for enterprise brands. We are offering content creation, community management, paid social, and social media strategy.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SocialMediaManagementPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/#service",
      "name": "Social Media Marketing Services",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/social-media-marketing/",
      "description": "Impulse Digital provides social media marketing services including social media strategy, content creation, campaign planning, community management, paid social campaigns, analytics, and platform-specific brand communication.",
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
        "IN",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/"
      }
    },
      getFAQSchema(defaultFaqs, false)
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SocialMediaManagement />
    </>
  );

}
