import React from 'react';
import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Impulse Digital',
  description: 'Privacy Policy for Impulse Digital',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
