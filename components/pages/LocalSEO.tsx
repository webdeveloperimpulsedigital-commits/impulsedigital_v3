// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import ServiceHero from '@/components/Service/ServiceHero';
import ServiceHandoff from '@/components/Service/ServiceHandoff';
import { 
  ServiceProblem, 
  ServiceVs, 
  ServiceUses, 
  ServiceProcess, 
  ServiceFit, 
  ServiceFinalCTA, 
  ServiceFAQ, 
  ServiceStats,
  ServiceTextList,
  ServiceWhenToUse,
  ServiceGuardrails
} from '@/components/Service/ServiceTemplate';
import Logos from '@/components/Logos';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { localSEOData as data } from '@/data/localSEOData';

const LocalSEO: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('service-page', 'seo-page');

    return () => {
      document.body.classList.remove('service-page', 'seo-page');
    };
  }, []);

  return (
    <main id="main-content">
      
      <ServiceHero 
        headlineHtml={data.hero.headlineHtml}
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

      {/* CHANNELS Section */}
      {data.channels && <ServiceTextList data={data.channels} />}
      <ServiceHandoff />

      {/* Connected Systems */}
      {data.whenToUse && <ServiceWhenToUse data={data.whenToUse} />}
      <ServiceHandoff />
      
      {data.guardrails && (
        <>
          <ServiceGuardrails data={data.guardrails} />
          <ServiceHandoff />
        </>
      )}

      {/* @ts-ignore */}
      {(data as any).uses && (
        <>
          <ServiceUses data={(data as any).uses} />
          <ServiceHandoff />
        </>
      )}

      {data.process && <ServiceProcess data={data.process} />}
      
      <Logos title="Trusted by Brands That Need Local Search to Bring People In" />
      
      <Testimonials />
      <ServiceHandoff />
      
      <ServiceFit data={data.fit} />
      <ServiceHandoff />

      <ServiceFinalCTA data={data.finalCta} />
      <Contact title="Let’s make<br/>&ldquo;near me&rdquo; lead to you" />
      <ServiceFAQ data={data.faq} />
    </main>
  );
};

export default LocalSEO;
