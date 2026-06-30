import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import WebsiteDevelopment from '@/components/pages/WebsiteDevelopment';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Website Design & Development Company in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a website design and development company in Mumbai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a best website development agency in Mumbai, we build websites that look sharp, perform smoothly, and support business growth.',
  keywords: 'website development company in mumbai, website development agency in mumbai, website design agency in mumbai, website development company in mumbai, website design company, web development company, mumbai, thane, india impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Website Design & Development Company in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a website design and development company in Mumbai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a website development agency in Mumbai, we build websites that look sharp, perform smoothly, and support business growth.',
    url: `${SITE_URL}/brand-infrastructure/website-development/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design & Development Company in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a website design and development company in Mumbai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a website development agency in Mumbai, we build websites that look sharp, perform smoothly, and support business growth.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function WebsiteDevelopmentPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/#service",
      "name": "Website Development Services",
      "url": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/",
      "description": "Impulse Digital is a website design and development company in Mumbai creating SEO-friendly, mobile-responsive, fast-loading, and conversion-focused websites for brands, startups, and enterprises. As a website development agency in Mumbai, we build websites that look sharp, perform smoothly, and support business growth.",
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
        "IN",
        "US"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com"
      }
    }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <WebsiteDevelopment />
    </>
  );

}
