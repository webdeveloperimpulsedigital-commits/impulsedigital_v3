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
import { uaeLocationFaqs } from "@/lib/data/seoLocations/uaeLocationFaqs";

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
      <FAQ data={uaeLocationFaqs} />
      <Contact />
    </main>
  );
};

export default UaeLocation;
