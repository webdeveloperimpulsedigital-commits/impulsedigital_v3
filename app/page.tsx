import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Home from '@/components/pages/Home';
import { homeData } from '@/data/homeData';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
  keywords: 'digital marketing agency in mumbai, digital marketing company, impulse digital',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
    url: `${SITE_URL}/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions for brands like Amazon, HUL, OLA, Dmart, HDFC and more.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function HomePage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.theimpulsedigital.com/#organization",
      "name": "Impulse Digital",
      "url": "https://www.theimpulsedigital.com/",
      "logo": "https://www.theimpulsedigital.com/header-logo.png",
      "description": "Impulse Digital is a digital marketing agency offering social media marketing, performance marketing, content, website development, branding, Agentic AI, AI video production, and generative search optimisation services.",
      "telephone": "+91-9769285224",
      "email": "collabs@theimpulsedigital.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304 - 305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate",
        "addressLocality": "Thane",
        "addressRegion": "Maharashtra",
        "postalCode": "400604",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Thane"
        },
        {
          "@type": "City",
          "name": "Mumbai"
        },
        {
          "@type": "City",
          "name": "Pune"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/theimpulsedigital",
        "https://twitter.com/impulsedigi",
        "https://www.instagram.com/_impulse_digital/",
        "https://www.linkedin.com/company/impulse-digital-marketing-mumbai",
        "https://www.youtube.com/channel/UCzQglQAeXGI99Z-LZI9jBkw"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9769285224",
        "email": "collabs@theimpulsedigital.com",
        "contactType": "business enquiries",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Hindi"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.theimpulsedigital.com/#webpage",
      "url": "https://www.theimpulsedigital.com/",
      "name": "Impulse Digital: Best Digital Marketing Agency in Mumbai",
      "description": "Impulse Digital is a digital marketing agency helping brands with social media, performance marketing, content, website development, branding, Agentic AI, AI video production, and generative search optimisation.",
      "isPartOf": {
        "@id": "https://www.theimpulsedigital.com/#website"
      },
      "about": {
        "@id": "https://www.theimpulsedigital.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.theimpulsedigital.com/header-logo.png"
      },
      "publisher": {
        "@id": "https://www.theimpulsedigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.theimpulsedigital.com/#website",
      "url": "https://www.theimpulsedigital.com/",
      "name": "Impulse Digital",
      "alternateName": "Impulse Digital",
      "description": "Impulse Digital is a digital marketing agency offering social media, performance marketing, content, website development, branding, Agentic AI, AI video production, and generative search optimisation services.",
      "publisher": {
        "@id": "https://www.theimpulsedigital.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.theimpulsedigital.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Home data={homeData} />
    </>
  );

}
