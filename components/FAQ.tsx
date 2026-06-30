'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { FAQItem, defaultFaqs } from '@/lib/faqData';

interface FAQProps {
  data?: FAQItem[];
}



const FAQ: React.FC<FAQProps> = ({ data = defaultFaqs }) => {
  const pathname = usePathname();
  const isAeHome = pathname === '/ae' || pathname === '/ae/';

  const displayData = data.map(item => {
    if (!isAeHome) return item;
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
    <section className="faq glass-panel">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <h2 className="section-heading split-text">Questions we hear<br />from growth leaders.</h2>
        <div className="accordion">
          {displayData.map((item, index) => (
            <div className="acc-item" key={index}>
              <div className="acc-header">
                <h3>{item.question}</h3><span className="acc-icon">+</span>
              </div>
              <div className="acc-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
