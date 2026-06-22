import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import Branding from '@/components/pages/Branding';

export const metadata: Metadata = {
  title: 'Best Branding Agency in Mumbai | Impulse Digital',
  description: 'Impulse Digital is the best branding agency in Mumbai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
  keywords: 'branding agency in mumbai, best branding company in mumbai, brand identity, brand design agency, mumbai, thane, navi mumbai, india, impulse digital',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/brand-infrastructure/branding/`,
  },
  openGraph: {
    title: 'Best Branding Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is the best branding agency in Mumbai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
    url: `${SITE_URL}/brand-infrastructure/branding/`,
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    type: 'website',
    siteName: 'Impulse Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Branding Agency in Mumbai | Impulse Digital',
    description: 'Impulse Digital is the best branding agency in Mumbai building brand identity and logo systems. Trusted branding company for enterprise brands. Talk to us.',
    images: [`https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg`],
    site: '@impulsedigi',
  },
};

export default function BrandingPage() {

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Impulse Digital offer in branding services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We create brand strategy, visual identity, logo systems, brand guidelines, lookbooks, packaging, collaterals, campaign design assets, and communication systems that help brands show up consistently."
          }
        },
        {
          "@type": "Question",
          "name": "How is branding different from logo design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A logo is one part of your identity. Branding is the complete system that defines how your business is recognised, remembered, and understood across touchpoints."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in a brand style guide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A brand style guide usually includes logo usage, colour palette, typography, layout rules, imagery direction, tone guidance, iconography, templates, and usage examples."
          }
        },
        {
          "@type": "Question",
          "name": "Can you refresh an existing brand instead of creating one from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can audit the current identity, identify what should be retained, refined, or retired, and modernise the brand without losing useful existing equity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you design product packaging?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We design packaging that supports brand recognition, product clarity, shelf presence, claim hierarchy, and customer experience."
          }
        },
        {
          "@type": "Question",
          "name": "What are brand collaterals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand collaterals are communication assets such as brochures, presentations, business cards, social templates, print material, sales decks, ads, and other branded touchpoints."
          }
        },
        {
          "@type": "Question",
          "name": "How do you keep the brand consistent after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We create guidelines, templates, usage rules, and handover assets so internal teams, external partners, and future campaigns can apply the brand correctly."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure branding success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branding can be evaluated through recognition, engagement, branded search, consistency across touchpoints, conversion movement on key pages, and audience recall where measurement is required."
          }
        },
        {
          "@type": "Question",
          "name": "Who should be involved from our side?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Leadership, marketing, communications, product, sales, and any team responsible for applying the brand should usually be involved in the process."
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
      <Branding />
    </>
  );

}
