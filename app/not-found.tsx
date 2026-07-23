import type { Metadata } from 'next';

import NotFound from '@/components/pages/NotFound';

export const metadata: Metadata = {
  title: 'Page Not Found | Impulse Digital',
  robots: { index: false, follow: false, nocache: true },
  alternates: {},
};

export default function NotFoundPage() {
  return <NotFound />;
}
