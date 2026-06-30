import React from 'react';
import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Privacy Policy | Impulse Digital',
  description: 'Privacy Policy for Impulse Digital',
};

export default function PrivacyPolicyPage() {
    const schemas = [getFAQSchema(defaultFaqs, false)];

  return <PrivacyPolicy />;
}
