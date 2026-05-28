import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import WebsiteDevelopment from '@/components/pages/WebsiteDevelopment';

export const metadata: Metadata = {
  title: 'Website Development Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is a leading website development agency in Mumbai building high-performance, SEO-optimised websites for brands, startups, and enterprises.',
  keywords: 'website development agency mumbai, web development company, website design mumbai',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/website-development/`,
  },
  openGraph: {
    title: 'Website Development Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading website development agency in Mumbai building high-performance, SEO-optimised websites for brands, startups, and enterprises.',
    url: `${SITE_URL}/brand-infrastructure/website-development/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is a leading website development agency in Mumbai building high-performance, SEO-optimised websites for brands, startups, and enterprises.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function WebsiteDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/#faq",
    "url": "https://www.theimpulsedigital.com/brand-infrastructure/website-development/",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Impulse Digital offer in website design & development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a full-service website development company, we cover every phase of discovery, information architecture, design, development, content support, testing, launch, and post-launch maintenance. Each step is aligned to your goals such as brand credibility, performance, SEO readiness, and lead conversion. Our website design and development services ensure your digital presence is visually engaging and performance-driven."
        }
      },
      {
        "@type": "Question",
        "name": "How do you decide on the right platform or CMS for our site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We evaluate your goals, content workflows, integration needs, and budget. Based on these insights, we recommend the right platform such as WordPress, Shopify, React, or a custom build, outlining trade-offs for scalability, security, and ease of management."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure fast load times and strong performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Performance is a core part of our web services. We optimize images and code, manage scripts efficiently, implement caching, and follow clean coding standards. Core Web Vitals are tracked during development and post-launch to ensure speed and responsiveness."
        }
      },
      {
        "@type": "Question",
        "name": "Will the website be mobile-friendly and cross-browser compatible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We follow a mobile-first approach and test across modern browsers and devices. Interfaces are optimized for touch gestures, various screen sizes, and accessibility for a consistent experience across platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How do you make the website search-ready at launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate on-page SEO best practices from day one optimized structure, metadata, internal linking, image alt text, analytics, and Google Search Console setup. XML sitemaps are submitted and guidance is provided for content strategy and organic growth."
        }
      },
      {
        "@type": "Question",
        "name": "What is your approach to security and data protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is built into our development process. We implement secure coding practices, SSL, software updates, backups, CDN, and strict access controls to ensure data privacy for both you and your users."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle content migration and redirects from an existing site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We manage content migration and URL mapping to preserve SEO equity. Redirects are tested to ensure a seamless experience for visitors and search engines."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide hosting and domain support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can recommend or provision hosting, manage domain setup, and configure SSL certificates, ensuring stable performance, security, and clear ownership of digital assets."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the site goes live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Post-launch, our maintenance program covers monitoring, updates, performance reviews, small enhancements, uptime tracking, and traffic analysis. This ensures long-term reliability and continuous improvement of your website."
        }
      },
      {
        "@type": "Question",
        "name": "How long will the project take and what affects the timeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines depend on scope, integrations, and feedback cycles. During discovery, we share a detailed milestone plan and provide regular updates to keep you informed. Our structured process ensures a transparent and efficient journey from concept to completion."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create custom designs or use templates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on custom designs tailored to your brand and audience. Templates may be used for rapid prototyping, but the final design is always unique and aligned with your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party tools and APIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We handle integrations with CRMs, payment gateways, analytics, marketing tools, and other APIs to extend your website’s functionality and business impact."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebsiteDevelopment />
    </>
  );
}
