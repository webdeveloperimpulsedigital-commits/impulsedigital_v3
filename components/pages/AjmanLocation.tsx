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
import { ajmanLocationFaqs } from "@/lib/data/seoLocations/ajmanLocationFaqs";

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
  const description = `Impulse Digital supports organisations targeting Ajman with digital strategy and execution tied to a clear business objective. The scope can connect audience and competitor intelligence with campaigns, AI-enabled workflows, SEO, social media, websites, and brand systems. We document the market assumptions, responsibilities, and measurement plan so activity can be reviewed against evidence rather than inflated promises.`;

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
      <FAQ data={ajmanLocationFaqs} />
      <Contact />
    </main>
  );
};

export default AjmanLocation;
