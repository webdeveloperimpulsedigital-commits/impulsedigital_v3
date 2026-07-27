'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { FAQItem, defaultFaqs, aeFaqs } from '@/lib/faqData';
import { getFAQSchema } from '@/lib/schemaHelper';
import JsonLd from '@/components/JsonLd';

interface FAQProps {
  heading?: string;
  data?: FAQItem[];
}



const FAQ: React.FC<FAQProps> = ({ heading = "Questions we hear<br />from growth leaders.", data }) => {
  const pathname = usePathname();
  const isAe = pathname === '/ae' || Boolean(pathname?.startsWith('/ae/'));

  const activeData = data || (isAe ? aeFaqs : defaultFaqs);

  const displayData = activeData.map(item => {
    if (!isAe) return item;
    return {
      question: item.question.replace(/\bMumbai\b/g, 'UAE').replace(/\bmumbai\b/g, 'UAE'),
      answer: item.answer.replace(/\bMumbai\b/g, 'UAE').replace(/\bmumbai\b/g, 'UAE'),
    };
  });

  return (
    <>
      <JsonLd data={getFAQSchema(activeData, isAe)} id="faq-schema" />
      <section className="faq glass-panel">
      <div className="container">
        <h2 className="section-heading split-text" dangerouslySetInnerHTML={{ __html: heading }} />
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
