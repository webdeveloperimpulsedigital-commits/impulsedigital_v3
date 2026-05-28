import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import ECommerceSEO from '@/components/pages/ECommerceSEO';

export const metadata: Metadata = {
  title: 'Ecommerce SEO Services | Impulse Digital',
  description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
  keywords: 'ecommerce seo, ecommerce seo agency, ecommerce seo services',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ecommerce-seo/`,
  },
  openGraph: {
    title: 'Ecommerce SEO Services | Impulse Digital',
    description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
    url: `${SITE_URL}/brand-infrastructure/search-engine-optimisation/ecommerce-seo/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce SEO Services | Impulse Digital',
    description: 'Impulse Digital\'s ecommerce SEO services help online stores rank higher, drive organic traffic, and grow revenue through strategic search engine optimisation.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function ECommerceSEOPage() {

      const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/#service",
        "name": "eCommerce SEO Services",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/",
        "description": "Impulse Digital provides eCommerce SEO services to improve product visibility, category rankings, technical performance, organic traffic, and conversions for online stores.",
        "serviceType": [
          "eCommerce SEO",
          "Product Page SEO",
          "Category Page SEO",
          "Technical SEO for eCommerce",
          "Online Store SEO",
          "Conversion-Focused SEO"
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
        "@id": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/#faq",
        "url": "https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/ecommerce-seo/",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an eCommerce SEO service and how is it different from traditional SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An eCommerce SEO service focuses on optimizing online stores for higher visibility, usability, and conversions. Unlike traditional SEO, which targets business websites, eCommerce SEO enhances product and category pages, site architecture, and technical elements. A professional eCommerce SEO company in Mumbai ensures every product page ranks well and converts visitors into buyers by refining descriptions, images, and schema markup."
            }
          },
          {
            "@type": "Question",
            "name": "How does Impulse Digital approach eCommerce SEO for a new or existing store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As a results-driven eCommerce SEO agency in Mumbai, we begin with a detailed audit covering technical health, keyword opportunities, and user experience. Based on the insights, we design a custom strategy that includes keyword mapping, product-page optimization, internal linking, and performance reporting making our approach one of the best eCommerce SEO services for sustained growth in traffic and conversions."
            }
          },
          {
            "@type": "Question",
            "name": "How do you improve the performance of product and category pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our eCommerce SEO services optimize every key element from titles, meta descriptions, and product images to reviews and call-to-action placement. We add structured data for better indexing and create smart internal links between related categories and products. These enhancements improve visibility, discoverability, and the overall shopping experience."
            }
          },
          {
            "@type": "Question",
            "name": "What technical aspects of an eCommerce store do you optimize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As an experienced eCommerce SEO company, we focus on site architecture, crawl efficiency, Core Web Vitals, mobile responsiveness, and duplicate content control. Each optimization is prioritized for measurable impact, ensuring faster page loads, better crawlability, and smoother navigation critical for search ranking and customer retention."
            }
          },
          {
            "@type": "Question",
            "name": "How do you make eCommerce stores more mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mobile-first optimization is a core part of our eCommerce SEO services in India. We compress media, improve layout responsiveness, and refine navigation flow for touch devices. This ensures your store performs seamlessly across all screen sizes, driving higher engagement and conversions on mobile."
            }
          },
          {
            "@type": "Question",
            "name": "Can you manage SEO for international or multi-language eCommerce stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our eCommerce SEO team specializes in international SEO services. We implement Hreflang tags, perform region-specific keyword research, and localize product details to align with cultural and linguistic nuances. This ensures your brand remains globally consistent while connecting authentically with local audiences."
            }
          },
          {
            "@type": "Question",
            "name": "How does SEO help in reducing cart abandonment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our marketplace SEO services address key friction points across the purchase journey. We build trust through transparent product information, clear CTAs, user-friendly navigation, and optimized checkout flows. By improving credibility and experience, we reduce bounce and abandonment rates significantly."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure the success of an eCommerce SEO campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track metrics such as organic sessions, click-through rate, add-to-cart ratio, conversions, and average order value. As a data-driven eCommerce SEO agency, we use analytics and search-console insights to refine strategy continuously ensuring consistent performance and long-term growth."
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
          <ECommerceSEO />
        </>
      );
        
}
