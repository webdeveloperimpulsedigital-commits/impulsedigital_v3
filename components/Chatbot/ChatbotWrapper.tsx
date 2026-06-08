'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Chatbot = dynamic(() => import('./Chatbot'), {
  ssr: false,
});

export default function ChatbotWrapper() {
  const pathname = usePathname();

  // Only render on the testing path
  if (pathname !== '/test-chatbot' && pathname !== '/test-chatbot/') {
    return null;
  }

  return <Chatbot />;
}
