import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import SharjahLocation from '@/components/pages/SharjahLocation';
import { getFAQSchema } from "@/lib/schemaHelper";
import { sharjahLocationFaqs } from "@/lib/data/seoLocations/sharjahLocationFaqs";

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Sharjah | Impulse Digital',
  description: 'Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.',
  keywords: 'digital marketing agency in sharjah, digital marketing sharjah, seo sharjah',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Sharjah | Impulse Digital',
    description: 'Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.',
    url: `${SITE_URL}/ae/digital-marketing-agency-in-sharjah/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Sharjah | Impulse Digital',
    description: 'Impulse Digital is best digital marketing agency in Sharjah, combining growth intelligence, ai marketing systems, and brand infrastructure to deliver measurable results for enterprise companies in Sharjah.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function SharjahLocationPage() {
    const schemas = [
      getFAQSchema(sharjahLocationFaqs, true),
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.theimpulsedigital.com/ae/digital-marketing-agency-in-sharjah/#organization",
        "name": "Impulse Digital",
        "url": "https://www.theimpulsedigital.com/ae/digital-marketing-agency-in-sharjah/",
        "image": "https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg",
        "logo": "https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg",
        "description": "Impulse Digital is the best digital marketing agency in Sharjah, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Sharjah.",
        "telephone": "+97145276816",
        "email": "collabs@theimpulsedigital.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Regus Boulevard Tower 1, 9th Floor, Boulevard Plaza Tower 1, Shk. Mohammed Bin Rashid Blvd.",
          "postOfficeBoxNumber": "P.O. Box 340733",
          "addressLocality": "Downtown Dubai",
          "addressRegion": "Dubai",
          "postalCode": "340733",
          "addressCountry": "AE"
        },
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:30",
          "closes": "19:30"
        }],
        "areaServed": [{"@type": "City", "name": "Sharjah"}, {"@type": "Country", "name": "United Arab Emirates"}],
        "sameAs": [
          "https://www.facebook.com/theimpulsedigital",
          "https://twitter.com/impulsedigi",
          "https://www.instagram.com/_impulse_digital/",
          "https://www.linkedin.com/company/impulse-digital-marketing-mumbai",
          "https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services in Sharjah",
          "itemListElement": [
            {"@type": "Service", "name": "Customer Intelligence"},
            {"@type": "Service", "name": "Market and Competitive Intelligence"},
            {"@type": "Service", "name": "Social Intelligence"},
            {"@type": "Service", "name": "Campaign and Performance Intelligence"},
            {"@type": "Service", "name": "Archer AI"},
            {"@type": "Service", "name": "Agentic AI"},
            {"@type": "Service", "name": "AI Video Production"},
            {"@type": "Service", "name": "Generative Search Optimisation"},
            {"@type": "Service", "name": "Search Engine Optimisation"},
            {"@type": "Service", "name": "Social Media Marketing"},
            {"@type": "Service", "name": "Video Production"},
            {"@type": "Service", "name": "Website Development"},
            {"@type": "Service", "name": "Brand Identity"},
            {"@type": "Service", "name": "Employer Branding"}
          ]
        }
      }
    ];

  return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
          
          <SharjahLocation />
        </>
      );

}
