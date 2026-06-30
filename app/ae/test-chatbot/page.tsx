import type { Metadata } from 'next';
import Home from '@/components/pages/Home';
import ChatbotWrapper from '@/components/Chatbot/ChatbotWrapper';
import { getFAQSchema } from "@/lib/schemaHelper";
import { defaultFaqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: 'Chatbot Testing Page | Impulse Digital',
  description: 'Impulse Digital Chatbot testing environment.',
  robots: { index: false, follow: false }, // Prevent search engine indexing for test page
};

export default function TestChatbotPage() {
    const schemas = [getFAQSchema(defaultFaqs, true)];

  return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
          <Home />
          <ChatbotWrapper />
        </>
      );
}
