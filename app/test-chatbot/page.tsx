import type { Metadata } from 'next';
import Home from '@/components/pages/Home';

export const metadata: Metadata = {
  title: 'Chatbot Testing Page | Impulse Digital',
  description: 'Impulse Digital Chatbot testing environment.',
  robots: { index: false, follow: false }, // Prevent search engine indexing for test page
};

export default function TestChatbotPage() {
  return <Home />;
}
