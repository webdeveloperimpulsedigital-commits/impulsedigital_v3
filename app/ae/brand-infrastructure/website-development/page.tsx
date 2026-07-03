import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import WebsiteDevelopment from '@/components/pages/WebsiteDevelopment';
import { websiteDevelopmentData } from '@/data/ae/websiteDevelopmentData';
;
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Website Design & Development Company in Dubai | Impulse Digital',
  description: 'Impulse Digital is a website design and development company in Dubai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a best website development agency in Dubai, we build websites that look sharp, perform smoothly, and support business growth.',
  keywords: 'website development company in Dubai, website development agency in Dubai, website design agency in Dubai, website development company in Dubai, website design company, web development company, Dubai, uae, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Website Design & Development Company in Dubai | Impulse Digital',
    description: 'Impulse Digital is a website design and development company in Dubai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a website development agency in Dubai, we build websites that look sharp, perform smoothly, and support business growth.',
    url: `${SITE_URL}/ae/brand-infrastructure/website-development/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design & Development Company in Dubai | Impulse Digital',
    description: 'Impulse Digital is a website design and development company in Dubai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a website development agency in Dubai, we build websites that look sharp, perform smoothly, and support business growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function WebsiteDevelopmentPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/ae/brand-infrastructure/website-development/#service",
      "name": "Website Development Services",
      "url": "https://www.theimpulsedigital.com/ae/brand-infrastructure/website-development/",
      "description": "Impulse Digital is a website design and development company in Dubai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a website development agency in Dubai, we build websites that look sharp, perform smoothly, and support business growth.",
      "serviceType": [
        "Website Development",
        "Website Design",
        "UI UX Design",
        "Responsive Web Development",
        "CMS Development",
        "Landing Page Development",
        "SEO-Friendly Website Development"
      ],
      "areaServed": [
        "AE",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/ae/"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <WebsiteDevelopment data={websiteDevelopmentData} />
    </>
  );

}
