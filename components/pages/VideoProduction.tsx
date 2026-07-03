// @ts-nocheck
'use client';

import React from 'react';
import ServiceHero from '@/components/Service/ServiceHero';
import ServiceHandoff from '@/components/Service/ServiceHandoff';
import Logos from '@/components/Logos';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { useServicePageBackground } from '@/hooks/useServicePageBackground';

import {
  ServiceStats,
  ServiceProblem,
  ServiceVs,
  ServiceUses,
  ServiceWhenToUse,
  ServiceGuardrails,
  ServiceProcess,
  ServiceFit,
  ServiceFinalCTA,
  ServiceFAQ
} from '@/components/Service/ServiceTemplate';

const VideoProduction: React.FC<{ data: any }> = ({ data }) => {
  useServicePageBackground();

  return (
    <main id="main-content">


      <ServiceHero
        headlineParts={data.hero.headlineParts}
        headlineAccent={data.hero.headlineAccent}
        description={data.hero.description}
        buttons={data.hero.buttons}
      />

      <ServiceStats data={data.stats} />

      <ServiceHandoff />

      <ServiceProblem data={data.problem} />
      <ServiceHandoff />

      <ServiceVs data={data.vs} />
      <ServiceHandoff />

      <ServiceUses data={data.uses} />
      <ServiceHandoff />

      <ServiceWhenToUse data={data.whenToUse} />
      <ServiceHandoff />

      <ServiceGuardrails data={data.guardrails} />
      <ServiceHandoff />

      <ServiceProcess data={data.process} />

      <Logos title="Video Production Agency in Mumbai Trusted by Leading Enterprise Brands" />

      <Testimonials />
      <ServiceHandoff />

      <ServiceFit data={data.fit} />
      <ServiceHandoff />

      <ServiceFinalCTA data={data.finalCta} />
      <Contact title="Let’s turn the message<br/>into a memory." />
      <ServiceFAQ data={data.faq} />
    </main>
  );
};

export default VideoProduction;
