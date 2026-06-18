import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import MarketIntelligence from '@/components/pages/MarketIntelligence';

export const metadata: Metadata = {
  title: 'Market Intelligence Agency | Competitive Intelligence Services',
  description: 'Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.',
  keywords: 'market intelligence, competitive intelligence, market research',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/growth-intelligence/market-intelligence/`,
  },
  openGraph: {
    title: 'Market Intelligence Agency | Competitive Intelligence Services',
    description: 'Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.',
    url: `${SITE_URL}/growth-intelligence/market-intelligence/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Intelligence Agency | Competitive Intelligence Services',
    description: 'Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function MarketIntelligencePage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.theimpulsedigital.com/growth-intelligence/market-intelligence/#service",
      "name": "Market and Competitive Intelligence Services",
      "url": "https://www.theimpulsedigital.com/growth-intelligence/market-intelligence/",
      "description": "Impulse Digital is a specialist market intelligence agency offering competitive intelligence services, category trend mapping, e-commerce benchmarking & search intelligence for enterprise brands.",
      "serviceType": [
        "Market Intelligence",
        "Competitive Intelligence",
        "Category Trend Mapping",
        "Competitor Communication Analysis",
        "E-Commerce Benchmarking",
        "Search Intelligence"
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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Market and Competitive Intelligence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Market and Competitive Intelligence helps brands understand category movement, competitor behaviour, e-commerce performance, and consumer search patterns. It turns external signals into sharper strategy, positioning, communication, and product decisions."
          }
        },
        {
          "@type": "Question",
          "name": "How is this different from competitor analysis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Competitor analysis often looks at what others are doing. Market and Competitive Intelligence connects competitor activity with category trends, consumer search behaviour, marketplace signals, and strategic implications."
          }
        },
        {
          "@type": "Question",
          "name": "What decisions can this support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It can support brand planning, repositioning, category entry, campaign strategy, e-commerce optimisation, product decisions, content strategy, and innovation planning."
          }
        },
        {
          "@type": "Question",
          "name": "What is Category Trend Mapping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Category Trend Mapping identifies rising consumer interests, emerging themes, category shifts, and whitespace opportunities. It helps teams see where the market is moving before strategy is locked."
          }
        },
        {
          "@type": "Question",
          "name": "What is Competitor Communication Analysis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Competitor Communication Analysis studies the narratives, claims, positioning, content themes, and share of voice competitors are building. It helps your brand find clearer differentiation."
          }
        },
        {
          "@type": "Question",
          "name": "What is E-Commerce Benchmarking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-Commerce Benchmarking compares product performance across marketplaces using visible signals such as ratings, reviews, sentiment, listing quality, product claims, and consumer preferences."
          }
        },
        {
          "@type": "Question",
          "name": "What is Search Intelligence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search Intelligence studies what consumers are searching, comparing, asking, and exploring. It helps improve SEO, content, product pages, education journeys, and category strategy."
          }
        },
        {
          "@type": "Question",
          "name": "Is this a one-time project or ongoing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It works best as ongoing intelligence. Markets, competitors, search behaviour, and e-commerce signals keep changing, so the value comes from watching the right signals repeatedly."
          }
        },
        {
          "@type": "Question",
          "name": "What do we receive at the end?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You receive decision-ready outputs such as category maps, competitor narrative analysis, e-commerce benchmarking, search intelligence themes, opportunity areas, and strategic recommendations."
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
      <MarketIntelligence />
    </>
  );

}
