import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import EnterpriseSEO from '@/components/pages/EnterpriseSEO';

export const metadata: Metadata = {
  title: 'Enterprise SEO Services | Impulse Digital',
  description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
  keywords: 'enterprise seo, enterprise seo agency, large scale seo services',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Enterprise SEO Services | Impulse Digital',
    description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/enterprise-seo/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise SEO Services | Impulse Digital',
    description: 'Impulse Digital delivers enterprise SEO solutions for large-scale websites, helping businesses improve rankings, drive organic traffic, and dominate competitive search markets.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function EnterpriseSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/#service",
        "name": "Enterprise SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/",
        "description": "Impulse Digital provides enterprise SEO services for large websites, multi-location brands, complex digital ecosystems, multilingual websites, scalable technical SEO, and long-term organic growth.",
        "serviceType": [
          "Enterprise SEO",
          "Large Website SEO",
          "Scalable Technical SEO",
          "Multi-Location SEO",
          "Multilingual SEO",
          "Organic Growth Strategy"
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
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/#faq",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/enterprise-seo/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is enterprise SEO service and how is it different from traditional SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise SEO functions at a much larger scale than traditional SEO. It involves optimizing thousands of pages, coordinating multiple teams, and ensuring consistent visibility across languages, regions, and search engines. It requires structured planning, automation, and governance to achieve sustainable results."
            }
          },
          {
            "@type": "Question",
            "name": "How does Impulse Digital create an enterprise SEO strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As an enterprise SEO agency, we start with a full audit of your digital assets and identify growth opportunities through data analysis. This is followed by a strategic plan covering technical optimization, content clusters, keyword mapping, and reporting frameworks to align with business objectives and measurable outcomes."
            }
          },
          {
            "@type": "Question",
            "name": "How do you manage SEO for large websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team combines technology, automation, and manual oversight to maintain SEO consistency at a scale. We implement templated structures, use advanced tracking tools, and manage content updates through defined workflows that ensure each page performs effectively within the overall site structure."
            }
          },
          {
            "@type": "Question",
            "name": "What are the key components of your enterprise technical SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on improving crawlability, site architecture, Core Web Vitals, duplicate management, structured data, and internal linking. Each technical enhancement is prioritized based on its impact and feasibility, ensuring that search engines can index and understand your content efficiently."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle international and multilingual in the enterprise SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We localize strategy and content for each target market, using Hreflang tagging, culturally relevant messaging, and country-specific keyword research. Our approach ensures that every audience sees content in its preferred language while maintaining consistent brand positioning worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "How do you approach content creation and optimization on a scale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build topic clusters, define a clear message structure, and maintain uniformity through editorial standards. Each piece is reviewed for quality, relevance, and compliance with E E A T principle. This enables content to perform well across search engines and user segments simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "How do Impulse Digital’s ensure ethical and effective link building in enterprise SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We follow an earned-media approach by producing authoritative resources that naturally attract citations. Partnerships and outreach are limited to relevant, credible platforms. Every link is vetted for authenticity, maintaining compliance with search engine guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "How do you collaborate with in-house teams during enterprise projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our processes integrate smoothly with your internal marketing, product, design, and IT teams. We align priorities through shared documentation, scheduled reviews, and transparent communication to ensure that all updates and implementations meet timelines and quality standards."
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
          <EnterpriseSEO />
        </>
      );
        
}
