'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Chatbot = dynamic(() => import('./Chatbot'), {
  ssr: false,
});

export default function ChatbotWrapper() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }

  return <Chatbot />;
}
