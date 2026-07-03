// @ts-nocheck
'use client';


import React, { useEffect } from 'react';

import ServiceHero from '@/components/Service/ServiceHero';
import CaseStudies from '@/components/CaseStudies';
import Logos from '@/components/Logos';
import BrandFilm from '@/components/BrandFilm';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import SEOLocationTemplate from '@/components/Service/SEOLocationTemplate';
import { seoAlAinData } from '@/data/seoAlAinData';

const SeoAlAinLocation: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    if (typeof window !== 'undefined' && (window as any).initHomeDOMAnimations) {
      setTimeout(() => {
        (window as any).initHomeDOMAnimations();
      }, 100);
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

  const { hero } = seoAlAinData;

  return (
    <main id="main-content">
      

      <ServiceHero 
        headlineParts={[hero.headline]}
        headlineAccent="Al Ain"
        description={hero.description.join('\n\n')}
        buttons={[
          { text: "Connect Now", link: "/contact-us/", cursor: "GO" }
        ]}
      />

      <CaseStudies />
      <Logos title="Trusted by Teams in Al Ain & Beyond" />
      <BrandFilm />
      
      <SEOLocationTemplate data={seoAlAinData} />

      <Testimonials />
      <Contact />
    </main>
  );
};

export default SeoAlAinLocation;
