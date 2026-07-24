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
  const description = `Impulse Digital helps organisations plan and run connected digital marketing across the UAE. Our work can combine Growth Intelligence, AI Marketing Systems, and Brand Infrastructure so research, campaigns, search, social, websites, and measurement support the same business objective. We define the market, audience, responsibilities, and success measures before execution, then use evidence from the programme to decide what should improve next.`;

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
