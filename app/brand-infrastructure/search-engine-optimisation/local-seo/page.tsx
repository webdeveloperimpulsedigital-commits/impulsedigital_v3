import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import LocalSEO from '@/components/pages/LocalSEO';

export const metadata: Metadata = {
  title: 'Local SEO Services in Mumbai | Impulse Digital',
  description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
  keywords: 'local seo, local seo services, local seo agency mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/local-seo/`,
  },
  openGraph: {
    title: 'Local SEO Services in Mumbai | Impulse Digital',
    description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/local-seo/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in Mumbai | Impulse Digital',
    description: 'Impulse Digital\'s local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function LocalSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/#service",
        "name": "Local SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/",
        "description": "Impulse Digital provides local SEO services including Google Business Profile optimisation, local keyword targeting, citation building, map ranking improvements, review optimisation, and location-based search visibility.",
        "serviceType": [
          "Local SEO",
          "Google Business Profile Optimisation",
          "Maps SEO",
          "Local Citation Building",
          "Review Optimisation",
          "Location-Based SEO"
        ],
        "areaServed": "IN",
        "provider": {
          "@type": "Organization",
          "name": "Impulse Digital",
          "url": "https://www.theimpulsedigital.com/"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/#faq",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Local SEO and how does it help my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO focuses on improving your visibility for searches performed in a specific area or for services “near me.” It ensures your business appears in relevant map results, local listings, and search queries made by nearby customers ready to visit or purchase."
            }
          },
          {
            "@type": "Question",
            "name": "What does Local SEO service with Impulse Digital include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our best Local SEO services cover Google Business Profile optimization, citation management, NAP consistency, local keyword research, on-page and off-page optimization, and review strategy. Each activity is designed to increase visibility, credibility, and foot traffic."
            }
          },
          {
            "@type": "Question",
            "name": "How do you optimize a Google Business Profile effectively?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We verify and update all business details including name, address, contact number, and business hours. We also optimize descriptions, categories, photos, and attributes, while managing reviews and Q&A to ensure the profile stays active and trustworthy."
            }
          },
          {
            "@type": "Question",
            "name": "Why is NAP consistency important for Local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Name, address, and phone number consistency signals reliability to search engines. Inconsistent data can confuse both users and algorithms. We audit and correct all citations across listings to maintain complete accuracy and strengthen ranking signals."
            }
          },
          {
            "@type": "Question",
            "name": "How do you find and target the right local keywords?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We research search terms specific to your service area and customer intent, such as “best [service] near me” or “[product] in [city].” These keywords are then integrated into your website and Google Business Profile to improve discoverability and engagement."
            }
          },
          {
            "@type": "Question",
            "name": "Can Local SEO help my business appear in Google’s Map Pack?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A combination of profile optimization, local content creation, positive reviews, and citation accuracy increases your likelihood of ranking in the Map Pack. The stronger your overall local authority, the better your placement in local search results."
            }
          },
          {
            "@type": "Question",
            "name": "How do online reviews impact Local SEO performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reviews act as signals of trust and relevance. We help you establish a review acquisition plan, monitor feedback, and manage responses to maintain positive sentiment and enhance your business reputation in local searches."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure the success of Local SEO efforts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track local keyword rankings, profile insights, calls, direction requests, and leads or conversions. Reports also include traffic trends from nearby areas, helping you understand how effectively Local SEO contributes to business growth."
            }
          }
        ]
      }
    ];

      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          />
          <LocalSEO />
        </>
      );
        
}
