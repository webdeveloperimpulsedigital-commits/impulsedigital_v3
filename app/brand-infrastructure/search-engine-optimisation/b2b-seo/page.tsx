import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import B2BSEO from '@/components/pages/B2BSEO';

export const metadata: Metadata = {
  title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
  description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
  keywords: 'b2b seo, b2b seo agency, b2b search engine optimisation',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/b2b-seo/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B SEO Services | B2B Search Engine Optimisation | Impulse Digital',
    description: 'Impulse Digital\'s B2B SEO services help business-to-business companies rank for high-intent commercial keywords and generate qualified leads through organic search.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function B2BSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/#service",
        "name": "B2B SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/",
        "description": "Impulse Digital provides B2B SEO services focused on improving search visibility, qualified lead generation, industry authority, technical optimisation, and content strategy for business-to-business brands.",
        "serviceType": [
          "B2B SEO",
          "Lead Generation SEO",
          "Technical SEO",
          "B2B Content SEO",
          "Authority Building",
          "Search Strategy"
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
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/#faq",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/b2b-seo/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is B2B SEO Service and how is it different from B2C or D2C SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "B2B SEO focuses on reaching business decision-makers through targeted search visibility, high-value content, and long-term trust building. Unlike B2C, which targets immediate consumer action, B2B SEO supports a longer sales cycle and prioritizes authority, credibility, and qualified B2B lead generation."
            }
          },
          {
            "@type": "Question",
            "name": "How does Impulse Digital align SEO with the B2B buyer journey?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We design strategies around the three stages of the buyer’s journey: awareness, consideration, and decision. Each content piece is mapped to these stages to ensure your audience finds relevant, informative, and persuasive information at every step of their decision-making process."
            }
          },
          {
            "@type": "Question",
            "name": "How do you reach and influence multiple decision-makers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create role-specific content that speaks to different stakeholders such as technical heads, financial officers, and executive leadership. This ensures that every decision-maker finds information that matches their priorities, strengthening your overall conversion potential."
            }
          },
          {
            "@type": "Question",
            "name": "What is your approach to keyword research for niche B2B industries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine qualitative and quantitative research to identify intent-based, industry-specific keywords. The focus is on discovering phrases that indicate genuine buying intent or problem-solving queries rather than generic high-volume keywords."
            }
          },
          {
            "@type": "Question",
            "name": "How do you establish authority and trust for B2B brands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build trust by producing expert-led content, earning backlinks from credible industry sources, showcasing case studies, and maintaining a consistent digital footprint. This approach positions your brand as an authoritative voice in your niche."
            }
          },
          {
            "@type": "Question",
            "name": "What technical elements are part of B2B SEO optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team improves technical health by addressing site architecture, load speed, indexation, schema markup, and various on-page & off-page SEO strategies. We also streamline navigation and ensure all pages are crawlable, improving discoverability and user experience."
            }
          },
          {
            "@type": "Question",
            "name": "How do Impulse Digital measure success in B2B SEO campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure performance across multiple metrics such as organic visibility, lead quality, engagement rate, and conversion from target segments. Tracking is done using Google Analytics (GA4) & Google Tag Manager to ensure every improvement aligns with long-term business goals."
            }
          },
          {
            "@type": "Question",
            "name": "Can you manage SEO for global or region-specific B2B operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop multilingual and multi-regional SEO strategies using correct Hreflang implementation and localized content. This ensures your message resonates with diverse markets while maintaining a unified global brand voice."
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
          <B2BSEO />
        </>
      );
        
}
