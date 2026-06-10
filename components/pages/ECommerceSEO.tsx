// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import ServiceHero from '@/components/Service/ServiceHero';
import ServiceHandoff from '@/components/Service/ServiceHandoff';
import Logos from '@/components/Logos';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

import {
  ServiceStats,
  ServiceProblem,
  ServiceVs,
  ServiceWhenToUse,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ,
  ServiceTextList
} from '@/components/Service/ServiceTemplate';

import { ecommerceSEOData as data } from '@/data/ecommerceSEOData';


const ECommerceSEO: React.FC = () => {
  useEffect(() => {
    // We use the 'seo-page' class to share the same styling as standard SEO
    document.body.classList.add('service-page', 'seo-page');
    
    return () => {
      document.body.classList.remove('service-page', 'seo-page');
    };
  }, []);

  return (
    <main id="main-content">
      
      <ServiceHero 
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      {data.stats && <ServiceStats data={data.stats} />}
      <ServiceHandoff />
      
      {data.problem && <ServiceProblem data={data.problem} />}
      <ServiceHandoff />
      
      {data.vs && <ServiceVs data={data.vs} />}
      <ServiceHandoff />
      
      {/* CHANNELS */}
      {data.channels && <ServiceTextList data={data.channels} />}

      <ServiceHandoff />
      
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Know Traffic Is Not the Sale" />
      
      <Testimonials />
      <ServiceHandoff />
      
      {data.fit && <ServiceFit data={data.fit} />}
      <ServiceHandoff />
      
      {data.finalCta && <ServiceFinalCTA data={data.finalCta} />}
      <Contact title="Let's make search<br/>sell harder." />
      {data.faq && data.faq.items.length > 0 && <ServiceFAQ data={data.faq} />}
    </main>
  );
};

export default ECommerceSEO;
