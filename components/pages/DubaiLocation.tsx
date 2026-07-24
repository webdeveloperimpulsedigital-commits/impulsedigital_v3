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
import { dubaiLocationFaqs } from '@/lib/data/seoLocations/dubaiLocationFaqs';

const DubaiLocation: React.FC = () => {
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

  const headline = 'Digital Marketing Agency in Dubai';
  const description = 'Impulse Digital helps organisations targeting Dubai connect market intelligence, marketing systems, and brand execution in one measurable programme. The scope can include audience and competitor research, campaigns, SEO, social media, websites, content, and AI-enabled workflows. Strategy is shaped around Dubai’s category, audience, language, and channel conditions without inventing local proof or relying on guaranteed outcomes.';

  return (
    <main id="main-content">
      <ServiceHero
        headlineParts={[headline]}
        headlineAccent="Dubai"
        description={description}
        buttons={[
          { text: 'Connect Now', link: '/contact-us/', cursor: 'GO' }
        ]}
      />

      <CaseStudies />
      <Logos title="Trusted by Teams in Dubai & Beyond" />
      <BrandFilm />
      <Services />
      <Testimonials />
      <FAQ data={dubaiLocationFaqs} />
      <Contact />
    </main>
  );
};

export default DubaiLocation;
