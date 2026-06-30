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
import { naviMumbaiLocationFaqs } from "@/lib/data/seoLocations/naviMumbaiLocationFaqs";

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
      <FAQ data={naviMumbaiLocationFaqs} />
      <Contact />
    </main>
  );
};

export default NaviMumbaiLocation;
