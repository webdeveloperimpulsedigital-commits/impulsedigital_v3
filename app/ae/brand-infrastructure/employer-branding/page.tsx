import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EmployerBranding from '@/components/pages/EmployerBranding';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Employer Branding Agency & Employee Branding Consulting | Impulse',
  description: 'Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.',
  keywords: 'employer branding agency, employer brand, EVP development',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Employer Branding Agency & Employee Branding Consulting | Impulse Digital',
    description: 'Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.',
    url: `${SITE_URL}/ae/brand-infrastructure/employer-branding/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employer Branding Agency & Employee Branding Consulting | Impulse Digital',
    description: 'Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function EmployerBrandingPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/#service",
      "name": "Employer Branding Services",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/employer-branding/",
      "description": "Impulse Digital is a specialist employer branding agency and employee branding consulting firm helping enterprise brands build EVP, culture storytelling, and recruitment marketing. Talk to us.",
      "serviceType": [
        "Employer Branding",
        "EVP Development",
        "Recruitment Marketing",
        "Internal Communication Campaigns",
        "Culture Storytelling",
        "Employee Engagement Content",
        "Talent Attraction Strategy"
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
      getFAQSchema(defaultFaqs, true)
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <EmployerBranding />
    </>
  );

}
