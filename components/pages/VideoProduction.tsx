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

import { videoProductionData } from '@/data/videoProductionData';

const VideoProduction: React.FC = () => {
  useServicePageBackground();

  return (
    <main id="main-content">


      <ServiceHero
        headlineParts={videoProductionData.hero.headlineParts}
        headlineAccent={videoProductionData.hero.headlineAccent}
        description={videoProductionData.hero.description}
        buttons={videoProductionData.hero.buttons}
      />

      <ServiceStats data={videoProductionData.stats} />

      <ServiceHandoff />

      <ServiceProblem data={videoProductionData.problem} />
      <ServiceHandoff />

      <ServiceVs data={videoProductionData.vs} />
      <ServiceHandoff />

      <ServiceUses data={videoProductionData.uses} />
      <ServiceHandoff />

      <ServiceWhenToUse data={videoProductionData.whenToUse} />
      <ServiceHandoff />

      <ServiceGuardrails data={videoProductionData.guardrails} />
      <ServiceHandoff />

      <ServiceProcess data={videoProductionData.process} />

      <Logos title="Video Production Agency in Mumbai Trusted by Leading Enterprise Brands" />

      <Testimonials />
      <ServiceHandoff />

      <ServiceFit data={videoProductionData.fit} />
      <ServiceHandoff />

      <ServiceFinalCTA data={videoProductionData.finalCta} />
      <Contact title="Let’s turn the message<br/>into a memory." />
      <ServiceFAQ data={videoProductionData.faq} />
    </main>
  );
};

export default VideoProduction;
