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
import { abuDhabiLocationFaqs } from "@/lib/data/seoLocations/abuDhabiLocationFaqs";

const AbuDhabiLocation: React.FC = () => {
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

  const headline = `Digital Marketing Agency in Abu Dhabi`;
  const description = `The world has gone digital, and your brand needs more than a presence, it needs a strategy that delivers. At Impulse Digital, we are more than a digital marketing agency in Abu Dhabi. We are growth partners who combine data-driven intelligence, AI-powered systems, and proven brand execution to help businesses boost visibility, increase engagement, and win online. We believe in long-term partnerships built on deep industry understanding not one-time transactions. Every strategy we build is designed to deliver measurable results, not just digital noise.
<br>Choose Impulse Digital - your trusted digital marketing company in Abu Dhabi.`;

  return (
    <main id="main-content">


      <ServiceHero
        headlineParts={[headline]}
        headlineAccent="Abu Dhabi"
        description={description}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title={`Trusted by Teams in Abu Dhabi & Beyond`} />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ data={abuDhabiLocationFaqs} />
      <Contact />
    </main>
  );
};

export default AbuDhabiLocation;
