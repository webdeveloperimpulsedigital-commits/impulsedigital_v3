import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import AgenticAI from '@/components/pages/AgenticAI';

export const metadata: Metadata = {
  title: 'Agentic AI Marketing Solutions | Impulse Digital',
  description: 'Impulse Digital\'s Agentic AI solutions bring autonomous AI agents to marketing workflows, enabling smarter, faster, and more scalable brand operations.',
  keywords: 'agentic ai, ai agents marketing, autonomous ai marketing',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/ai-marketing-systems/agentic-ai/`,
  },
  openGraph: {
    title: 'Agentic AI Marketing Solutions | Impulse Digital',
    description: 'Impulse Digital\'s Agentic AI solutions bring autonomous AI agents to marketing workflows, enabling smarter, faster, and more scalable brand operations.',
    url: `${SITE_URL}/ai-marketing-systems/agentic-ai/`,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI Marketing Solutions | Impulse Digital',
    description: 'Impulse Digital\'s Agentic AI solutions bring autonomous AI agents to marketing workflows, enabling smarter, faster, and more scalable brand operations.',
    images: [`${SITE_URL}/img/logo-id-new.webp`],
    site: '@impulsedigi',
  },
};

export default function AgenticAIPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.theimpulsedigital.com/ai-marketing-systems/agentic-ai/#faq",
    "url": "https://www.theimpulsedigital.com/ai-marketing-systems/agentic-ai/",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is agentic AI and how is it different from traditional automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agentic AI uses intelligent agents that can analyze data, make contextual decisions, and execute tasks in real time. Unlike rule-based automation, agents learn from outcomes, adapt to new inputs, and coordinate actions across multiple channels."
        }
      },
      {
        "@type": "Question",
        "name": "Which use cases do your AI agents support today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our agents support lead qualification, customer support, appointment booking, pricing and offer responses, reactivation journeys, win-back flows, campaign reporting, and creative testing. Supported channels include WhatsApp, email, voice notes, Facebook Messenger, Instagram DM, and SMS."
        }
      },
      {
        "@type": "Question",
        "name": "How do agents integrate with our tools and data sources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate with your CRM, marketing platforms, analytics tools, and data warehouses through secure APIs and Webhooks. A unified data layer enables agents to read context, write events, and maintain synchronized records across all connected systems."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure brand voice, accuracy, and multilingual experiences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design brand-specific AI personas, conversation flows, and approval rules. Translation workflows and content libraries support multiple languages, ensuring responses remain accurate, culturally aligned, and consistent with your approved brand voice."
        }
      },
      {
        "@type": "Question",
        "name": "How are risks controlled and when do humans step in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guardrails, allow/deny lists, and verification checks restrict agent actions to approved scopes. Confidence thresholds trigger human review, and escalation paths seamlessly hand conversations to live teams when needed."
        }
      },
      {
        "@type": "Question",
        "name": "What does a typical implementation timeline look like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our timeline includes discovery, integration, conversation design, pilot launch, and scale-up. Actual duration depends on scope and data readiness. We share a milestone-based project plan with owners and acceptance criteria."
        }
      },
      {
        "@type": "Question",
        "name": "How is performance measured and improved over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track response quality, resolution rate, time to action, conversion lift, channel cost, and customer satisfaction. Continuous feedback loops and controlled experiments refine prompts, flows, and policies for steady improvements."
        }
      },
      {
        "@type": "Question",
        "name": "What do you need from us to get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We require your business goals, KPIs, access to key systems, sample customer conversations, and approved tone/action guidelines. Once provided, we configure the pilot and align on the scale-up roadmap."
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
      <AgenticAI />
    </>
  );
}
