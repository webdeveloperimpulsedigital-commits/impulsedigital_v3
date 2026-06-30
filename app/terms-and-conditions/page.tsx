import React from 'react';
import type { Metadata } from 'next';
import TermsAndConditions from '@/components/pages/TermsAndConditions';
import { getFAQSchema } from "@/lib/schemaHelper";
export const metadata: Metadata = {
  title: 'Terms & Conditions | Impulse Digital',
  description: 'Terms and Conditions for Impulse Digital',
};

export default function TermsAndConditionsPage() {
    const schemas: any[] = [];

  return <TermsAndConditions />;
}
