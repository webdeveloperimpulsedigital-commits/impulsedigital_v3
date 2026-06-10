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
    "question": "What does Impulse Digital do for brands in Navi Mumbai?",
    "answer": "As a trusted digital marketing agency in Navi Mumbai, Impulse Digital plans and executes digital marketing strategies that align closely with business goals. Our team blends strategy, creative, media, web, content, and analytics to build strong visibility, meaningful engagement, and consistent conversions."
  },
  {
    "question": "How do you create a strategy that matches our goals and timelines?",
    "answer": "We begin with discovery and an audit of your market and current performance, define clear objectives, and build a roadmap that prioritizes actions by expected impact and required effort."
  },
  {
    "question": "Which services can you manage within one engagement?",
    "answer": "We manage performance marketing, search engine optimization, social media, content creation, branding, website design and development, video production, and analytics under one coordinated plan."
  },
  {
    "question": "Do you work only with brands in Navi Mumbai or across regions as well?",
    "answer": "While we are a digital marketing agency in Navi Mumbai, we partner with clients across India and overseas. Our collaborations are supported through shared workspaces, regular reviews, and clear points of contact to ensure seamless communication and execution across regions."
  },
  {
    "question": "How do you measure success and report progress?",
    "answer": "Success is defined through agreed KPIs such as reach, engagement, qualified leads, sales, and return on investment. Dashboards and review calls translate data into actions for the next cycle."
  },
  {
    "question": "How quickly can we expect results after launch?",
    "answer": "Paid campaigns can show early signals within days once tracking is verified, while organic growth builds over weeks and months as technical fixes, content, and community programs take effect."
  },
  {
    "question": "Will you handle content creation and production or do we need other partners?",
    "answer": "Our in-house teams produce copy, design, and video so execution stays consistent with strategy. We can also collaborate with your existing partners where preferred."
  },
  {
    "question": "Can you share case studies from your work as a digital marketing agency in Navi Mumbai?",
    "answer": "Yes. As the best digital marketing agency in Navi Mumbai for enterprise brands, Impulse Digital publishes case studies across FMCG, healthcare, retail, and fintech including results for Mastercard, Qure.ai, Tata Consumer Products, and HUL. Additional references and category benchmarks are available on request subject to confidentiality."
  },
  {
    "question": "How do you ensure brand safety and data privacy?",
    "answer": "We request only the access required, follow your privacy and compliance policies, and document permissions in the agreement. Creative and placements follow platform guidelines and category norms."
  },
  {
    "question": "How do we get a proposal tailored to our needs?",
    "answer": "The conversation starts with your problem, not our rate card. As a digital marketing company in Navi Mumbai that has worked with Amazon India, HUL, and Mastercard, we bring enterprise-level strategic thinking to every discovery session regardless of your business size. Share your objectives, timelines, and current challenges through our contact form. We will set up a discovery call and return with a scoped plan covering objectives, approach, milestones, and measurement."
  }
];

const NaviMumbaiLocation: React.FC = () => {
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

  const headline = `Digital Marketing Agency in Navi Mumbai`;
  const description = `Impulse Digital is the best digital marketing agency in Navi Mumbai for enterprise brands that want growth backed by data, not guesswork. We operate across Growth Intelligence, AI Marketing Systems, and Brand Infrastructure, giving Navi Mumbai businesses the strategic depth and execution capability of an enterprise marketing team. We have delivered measurable results for Amazon India, HUL, Mastercard, Tata Consumer Products, and Aditya Birla Group. We bring that same thinking to every brand we work with.
<br>Ready to grow? Talk to the digital marketing company in Navi Mumbai that connects marketing to business outcomes.`;

  return (
    <main id="main-content">


      <ServiceHero
        headlineParts={[headline]}
        headlineAccent="Navi Mumbai"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in Navi Mumbai & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ data={locationFaqs} />
      <Contact />
    </main>
  );
};

export default NaviMumbaiLocation;
