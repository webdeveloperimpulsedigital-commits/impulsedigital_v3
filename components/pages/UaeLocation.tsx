// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import ServiceHero from '@/components/Service/ServiceHero';
import CaseStudies from '@/components/CaseStudies';
import Logos from '@/components/Logos';
import BrandFilm from '@/components/BrandFilm';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

const locationFaqs = [
  {
    "question": "What makes Impulse Digital the best digital marketing agency in UAE for enterprise brands?",
    "answer": "Impulse Digital combines 34 years of marketing experience with three integrated capability pillars: Growth Intelligence for data-led decision making, AI Marketing Systems for autonomous execution at scale, and Brand Infrastructure for SEO, Social Media, Website Development, and Brand Identity. We have delivered documented results for Amazon India, HUL, Mastercard, Tata Consumer Products, and Aditya Birla Group, bringing enterprise-level strategic thinking to every brand we work with across UAE."
  },
  {
    "question": "What are the benefits of hiring a digital marketing agency to leverage your business?",
    "answer": "You get senior expertise, speed of execution, cross-channel strategy, creative at scale, and measurable performance without building a large in-house team."
  },
  {
    "question": "What is the role of a result-oriented digital marketing agency in elevating your business?",
    "answer": "A results-driven partner aligns channels to KPIs, runs continuous experiments, optimizes budgets in real-time, and reports outcomes clearly to drive revenue and efficiency."
  },
  {
    "question": "What digital marketing services in UAE does Impulse Digital provide under one engagement? ",
    "answer": "Our digital marketing services in UAE span three integrated pillars. Growth Intelligence covers Consumer Intelligence, Market and Competitive Intelligence, Always-On Intelligence, and Campaign and Performance Intelligence. AI Marketing Systems covers Archer AI, Agentic AI, AI Video Production, and Generative Search Optimisation. Brand Infrastructure covers Search Engine Optimisation, Social Media Marketing, Video Production, Website Development, Brand Identity, and Employer Branding. You can engage one pillar or all three depending on your current priorities."
  },
  {
    "question": "How is a digital marketing company in UAE like Impulse Digital different from a generic agency?",
    "answer": "Most agencies execute campaigns. A digital marketing company in UAE at the level of Impulse Digital builds the intelligence infrastructure behind your campaigns first. Our Consumer Intelligence and Market Intelligence practices map your buyers, your competitors, and your category before a single campaign goes live. Execution follows strategy, not the other way around."
  },
  {
    "question": "How do I choose the best digital marketing company in UAE for my business?",
    "answer": "Look for three things: documented results from brands comparable to yours, transparent reporting that connects marketing activity to business outcomes, and a team that asks questions before proposing solutions. The best digital marketing company in UAE will tell you what they cannot do as clearly as what they can. Ask to see case studies with specific traffic, lead, and revenue data before signing anything."
  },
  {
    "question": "How quickly can an enterprise brand in UAE expect results from a digital marketing programme?",
    "answer": "Performance marketing channels such as Google Ads and paid social can show directional results within 2 to 4 weeks once tracking is verified. SEO typically takes 3 to 6 months to show meaningful ranking improvements, with results compounding significantly from month 4 to 6 onwards. AI Marketing Systems such as Agentic AI can accelerate content production and campaign execution significantly faster than traditional timelines."
  },
  {
    "question": "Is it possible to measure the efficacy of your digital marketing agency's strategies?",
    "answer": "Yes. With clear KPIs, proper tracking, conversion events, and multi-touch attribution, you can measure impact across the funnel."
  },
  {
    "question": "What is the budget to hire a digital marketing agency for your business?",
    "answer": "The budget to hire the best digital marketing agency in UAE depends on your requirements which includes various factors like your scope of services, the industry, the size of your business and, most importantly, your marketing goals and expectations. It is essential to contact the agency directly for any further queries about budget or services to make a better deal. Approximately the budget ranges from 70k to 2 Lakh to hire a good marketing agency for your business.To ensure an informed decision, consider several factors carefully."
  },
  {
    "question": "Before signing up with an agency, should I consider geographic factors like location?",
    "answer": "No, one does not need to consider the agency's location, as digital marketing services are provided online and are certainly not restricted to physical presence or areas. Anyone can easily receive top digital marketing services from UAE to anywhere in the world. However, it is essential to consider the following factors: the agency's expertise in your domain, industry alignment, experience, and facilities they provide for online operations to ensure a smooth working process."
  },
  {
    "question": "Which industries does Impulse Digital serve across UAE?",
    "answer": "We work with brands across FMCG, healthcare, financial services, manufacturing, education, eCommerce, real estate, and professional services. Our enterprise client base includes brands from the Aditya Birla Group, Tata Consumer Products, HUL, Amazon India, HDFC Securities, Himalaya Wellness, and Qure.ai. This cross-industry experience means our team brings pattern recognition from markets that look very different on the surface but share common growth levers."
  },
  {
    "question": "What skills are necessary for an agency before onboarding?",
    "answer": "When onboarding and deciding on an agency, it is essential to prioritize domain expertise, transparent communication that helps build trust, creative design and marketing strategy, and keeping a track record of quality work. The team of people coordinating should have qualities of problem-solving with efficiency. This shows that the agency is highly dependable and trustworthy."
  }
];

const UaeLocation: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');

    // Re-initialize GSAP DOM animations specifically for the page
    if (typeof window !== 'undefined' && (window as any).initHomeDOMAnimations) {
      setTimeout(() => {
        (window as any).initHomeDOMAnimations();
      }, 100); // Slight delay to ensure DOM is fully painted
    }

    return () => {
      document.body.classList.remove('service-page');
      const { ScrollTrigger } = window as any;
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && (t.trigger.closest('.scrub-item') || t.trigger.closest('.logos') || t.trigger.closest('#connect') || t.trigger.closest('#cases-pin'))) {
            t.kill();
          }
        });
      }
    };
  }, []);

  const headline = `Digital Marketing Agency in UAE`;
  const description = `We help businesses boost their online presence and growth with expert SEO, social media, and paid media strategies. We proudly offer top-tier 360° digital marketing services in UAE as well as globally. Our dedicated team works as an extension of your brand, helping you uncover your unique voice, refine your messaging, and build genuine connections with your audience. What sets us apart as a leading digital marketing agency in UAE? It's our ability to combine creativity, strategy, and a client-centric approach to deliver results you can depend on. As a trusted digital marketing company in UAE with 34 years of marketing experience, we have delivered measurable results for Amazon India, HUL, Mastercard, Tata Consumer Products, Aditya Birla Group, and Himalaya. We bring that same strategic depth to every engagement we take on.`;

  return (
    <main id="main-content">


      <ServiceHero
        headlineParts={[headline]}
        headlineAccent="UAE"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in UAE & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ data={locationFaqs} />
      <Contact />
    </main>
  );
};

export default UaeLocation;
