'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { FAQItem, defaultFaqs, aeFaqs } from '@/lib/faqData';
import { getFAQSchema } from '@/lib/schemaHelper';

interface FAQProps {
  data?: FAQItem[];
}



const FAQ: React.FC<FAQProps> = ({ data }) => {
  const pathname = usePathname();
  const isAe = pathname === '/ae' || (pathname && pathname.startsWith('/ae/'));

  const activeData = data || (isAe ? aeFaqs : defaultFaqs);

  const displayData = activeData.map(item => {
    if (!isAe) return item;
    return {
      question: item.question.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
      answer: item.answer.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(activeData, isAe)) }}
      />
      <section className="faq glass-panel">
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
    </>
  );
};

export default FAQ;
