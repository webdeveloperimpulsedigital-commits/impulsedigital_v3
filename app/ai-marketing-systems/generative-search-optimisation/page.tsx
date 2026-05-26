import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import GenerativeSearchOptimisation from '@/components/pages/GenerativeSearchOptimisation';

export const metadata: Metadata = {
  title: 'AI SEO Agency in India | Advanced AI SEO Service',
  description: 'Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization.',
  keywords: 'ai seo agency, ai seo service, ai seo company, mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
  },
  openGraph: {
    title: 'AI SEO Agency in India | Advanced AI SEO Service',
    description: 'Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization.',
    url: `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
    images: [{ url: `${SITE_URL}/AI-SEO-Agency.png` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Agency in India | Advanced AI SEO Service',
    description: 'Partner with a top AI SEO agency in Mumbai, India that delivers data-driven AI SEO services to boost organic rankings, enhance search visibility, and accelerate business growth with intelligent automation and strategic optimization.',
    images: [`${SITE_URL}/AI-SEO-Agency.png`],
    site: '@impulsedigi',
  },
};

export default function GenerativeSearchOptimisationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/#service`,
    "name": "Generative Search Optimisation Services",
    "url": `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
    "description": "Impulse Digital provides Generative Search Optimisation services to help brands improve visibility across AI search engines, answer engines, large language models, and generative discovery platforms.",
    "serviceType": [
      "Generative Search Optimisation",
      "GEO",
      "AI SEO",
      "Answer Engine Optimisation",
      "Entity SEO",
      "Structured Data Optimisation"
    ],
    "areaServed": ["IN", "US"],
    "provider": {
      "@type": "Organization",
      "name": "Impulse Digital",
      "url": SITE_URL
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/#faq`,
    "url": `${SITE_URL}/ai-marketing-systems/generative-search-optimisation/`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI SEO and how is it different from traditional SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI SEO applies machine learning, predictive analytics, and automation to decisions that traditionally relied on manual research. It accelerates insight discovery, improves targeting, and adapts in real time while still maintaining the fundamentals of relevance, authority, and user experience."
        }
      },
      {
        "@type": "Question",
        "name": "What are AEO and GEO and why do they matter now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO (Answer Engine Optimization) focuses on improving visibility across voice assistants and AI-driven answer experiences. GEO (Generative Engine Optimization) focuses on gaining visibility inside AI summaries, recommendations, and generated responses. Both are essential as users increasingly expect direct answers rather than browsing multiple links."
        }
      },
      {
        "@type": "Question",
        "name": "How do you use AI for keyword and intent research?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We analyze intent clusters, entities, query patterns, and user journeys to surface high-intent themes and conversion-ready opportunities. AI-driven models help identify gaps, emerging trends, and supporting topics that guide page structure and internal linking."
        }
      },
      {
        "@type": "Question",
        "name": "How do you optimize content for AI answers and summaries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We create authoritative, conversational, and well-structured content with verified facts, examples, and clear formatting. Content is aligned to common questions, use cases, and real-world outcomes so AI systems can extract accurate, helpful responses."
        }
      },
      {
        "@type": "Question",
        "name": "What is entity optimization and how does it improve results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entity optimization clarifies your brand’s identity, offerings, attributes, and relationships with products, people, and locations. By standardizing this information across your website and profiles, AI systems can better connect your brand with relevant queries."
        }
      },
      {
        "@type": "Question",
        "name": "Do you implement structured data and schema, and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We implement schema markup for products, services, FAQs, reviews, how-to guides, and more. Structured data helps AI and search engines understand page meaning clearly, increasing eligibility for rich results and answer experiences."
        }
      },
      {
        "@type": "Question",
        "name": "How do you align content with large language models like GPT or Gemini?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We structure content using model-friendly patterns including concise definitions, step-by-step lists, comparisons, and evidence-backed explanations. By removing ambiguity and adding contextual depth, we ensure LLMs interpret and summarize your information accurately."
        }
      },
      {
        "@type": "Question",
        "name": "How is performance tracked and reported in an AI SEO program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We monitor visibility across search and AI answer surfaces, track entity coverage, measure engagement and conversions, and analyze cross-channel impact. Dashboards highlight trends and insights, guiding the next stage of optimization."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GenerativeSearchOptimisation />
    </>
  );
}
