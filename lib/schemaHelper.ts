import { FAQItem } from './faqData';

export function getFAQSchema(faqs: FAQItem[], isAe: boolean = false) {
  const displayData = faqs.map(item => {
    if (!isAe) return item;
    return {
      question: item.question.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
      answer: item.answer.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
    };
  });

  return {
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
}

export function getComplexFAQSchema(faqData: any, isAe: boolean = false) {
  if (!faqData || !faqData.faq || !faqData.faq.items) return null;
  const items = faqData.faq.items;
  
  const displayData = items.map((item: any) => {
    let answerText = Array.isArray(item.answer) ? item.answer.join(' ') : item.answer;
    if (isAe) {
      return {
        question: item.question.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
        answer: answerText.replace(/\bMumbai\b/g, 'Dubai').replace(/\bmumbai\b/g, 'dubai'),
      };
    }
    return {
      question: item.question,
      answer: answerText
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayData.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}
