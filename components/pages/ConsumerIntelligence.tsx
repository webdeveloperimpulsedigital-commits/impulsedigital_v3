// @ts-nocheck
'use client';


import React from 'react';

import { ServiceTemplate } from '@/components/Service/ServiceTemplate';
const ConsumerIntelligence: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      
      <ServiceTemplate data={data} />
    </>
  );
};

export default ConsumerIntelligence;
