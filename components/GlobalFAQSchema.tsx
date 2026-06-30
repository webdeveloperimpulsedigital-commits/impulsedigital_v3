import React from 'react';
import { defaultFaqs } from './FAQ';

interface GlobalFAQSchemaProps {
  isAe?: boolean;
}

export default function GlobalFAQSchema({ isAe = false }: GlobalFAQSchemaProps) {
  const displayData = defaultFaqs.map(item => {
    if (!isAe) return item;
    return {
      question: item.question.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
      answer: item.answer.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
