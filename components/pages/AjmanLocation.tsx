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
    "question": "What does it mean that Impulse Digital is a growth partner rather than a vendor?",
    "answer": "As the best digital marketing agency in Ajman for enterprise brands, it means we work as an extension of your team, aligning strategy and execution with your specific business goals. Our Growth Intelligence practice maps your market and buyer behaviour before we build anything. Our AI Marketing Systems automate execution without adding headcount. Our Brand Infrastructure delivers the SEO, social media, and content that make your brand visible and credible. Collaboration, transparency, and measurable outcomes drive every decision we make together."
  },
  {
    "question": "How do you build a strategy that fits my brand and market?",
    "answer": "We begin with discovery and a performance audit, define clear objectives, and map audience journeys. From there we create a test and learn roadmap that prioritizes initiatives by impact and effort."
  },
  {
    "question": "How will success be measured and reported to us?",
    "answer": "At our digital marketing agency in Ajman, we set KPIs at the start and track visibility, engagement, conversions, and return on investment. Dashboards and review calls convert the data into actions for the next cycle."
  },
  {
    "question": "As a digital marketing company in Ajman, do you work with businesses outside the city too?",
    "answer": "While we are a digital marketing company in Ajman, we support clients across the UAE and overseas. Our delivery models remain flexible so collaboration stays smooth regardless of location."
  },
  {
    "question": "What digital marketing services in Ajman does Impulse Digital manage under one engagement?",
    "answer": "Impulse Digital manages the full range of digital marketing services in Ajman under one coordinated engagement. This includes Search Engine Optimisation, Social Media Marketing, Performance Marketing, Content Marketing, Brand Identity, Website Development, Video Production, Employer Branding, and AI-powered campaign execution through our Archer AI and Agentic AI systems. You can choose full-service delivery or project-based support depending on your current priorities."
  },
  {
    "question": "How soon can we expect results from a new engagement?",
    "answer": "Paid campaigns can show directional signals within days once tracking is verified. Organic growth compounds over weeks and months as technical and content improvements take effect."
  },
  {
    "question": "What does the process look like from first call to launch?",
    "answer": "We align on goals, run an audit, agree on a plan with milestones, set up tracking, and prepare creative and landing experiences. Launch follows a quality checklist so that data and delivery are reliable from day one."
  },
  {
    "question": "Can you share case studies and references before we decide?",
    "answer": "Yes. As the best digital marketing company in Ajman for enterprise work, Impulse Digital publishes case studies across FMCG, healthcare, retail, and fintech, including documented results for Mastercard, Qure.ai, Tata Consumer Products, HUL, and Aditya Birla Group. Additional references and category-specific benchmarks are available on request, subject to confidentiality. We can also share expected performance benchmarks for your specific industry and market."
  }
];

const AjmanLocation: React.FC = () => {
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

  const headline = `Digital Marketing Agency in Ajman`;
  const description = `Impulse Digital is the best digital marketing agency in Ajman for enterprise brands that want growth backed by data, not guesswork. We operate across three integrated service pillars: Growth Intelligence for consumer and market insights, AI Marketing Systems for autonomous campaign execution, and Brand Infrastructure for SEO, Social Media Marketing, Website Development, and Brand Identity. As a trusted digital marketing company in Ajman, we have delivered measurable results for Amazon India, HUL, Mastercard, Tata Consumer Products, and Aditya Birla Group. We bring that same strategic depth to every engagement, regardless of your size or stage.`;

  return (
    <main id="main-content">


      <ServiceHero
        headlineParts={[headline]}
        headlineAccent="Ajman"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Brands That Trust Our Digital Marketing Services in Ajman & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ data={locationFaqs} />
      <Contact />
    </main>
  );
};

export default AjmanLocation;
