// @ts-nocheck
'use client';

import React from 'react';
import Link from '@/components/RegionLink';

const CaseStudies: React.FC<{ data?: any }> = ({ data }) => {
  // Use data or fallback to defaults
  const caseStudiesData = data || {
    heading: "Work that earned its numbers",
    cta: "SEE THE WORK BEHIND THE NUMBERS",
    cases: [
      {
        link: "/case-studies/mastercard/",
        imgSrc: "/case studies/Written Content/Mastercard/Mastercard Title.webp",
        imgAlt: "Mastercard WhatsApp Marketing and Merchant Outreach Strategy",
        client: "Mastercard",
        desc: "101 merchant queries through a channel they already trusted."
      },
      {
        link: "/case-studies/hul/",
        imgSrc: "/case studies/Written Content/HUL 1/HUL 1 Title.webp",
        imgAlt: "Hindustan Unilever Performance Marketing and Coupon Campaign",
        client: "HUL",
        desc: "12,548+ coupon journeys built to move people from click to store."
      },
      {
        link: "/case-studies/shaking-things-up/",
        imgSrc: "/images/case-study-image/salt/tata-cunsumer.webp",
        imgAlt: "Tata Consumer Products Case Study",
        client: "Tata Consumer Products",
        desc: "Decoding category transformation for staple ingredients and mapping diaspora demand to market launch."
      },
      {
        link: "/case-studies/abg-kbc/",
        imgSrc: "/case studies/Written Content/ABG x KBC/ABG x KBC Title.webp",
        imgAlt: "Aditya Birla Group x KBC CSR Campaign Case Study",
        client: "Aditya Birla Group × KBC",
        desc: "A question on KBC became a child’s shot at education."
      },
      {
        link: "/case-studies/qure-ai/",
        imgSrc: "/case studies/Written Content/Qure.ai/QureAI Title.webp",
        imgAlt: "Qure.ai Healthcare AI SEO Traffic Case Study",
        client: "Qure.ai",
        desc: "737% increase in organic traffic from healthcare buyers who search with intent."
      },
      {
        link: "/case-studies/uppercase/",
        imgSrc: "/case studies/Written Content/Uppercase/Uppercase Title.webp",
        imgAlt: "Uppercase AI-Led Social Media Campaign Case Study",
        client: "Uppercase",
        desc: "5.49M plays for a New Year idea built with AI, led by human instinct."
      }
    ]
  };

  const desktopScrollDistance = caseStudiesData.cases.length * 1080;

  return (
    <div
      className="cosmos-scroll-shell"
      style={{ '--cosmos-scroll-distance': `${desktopScrollDistance}px` } as React.CSSProperties}
    >
      <section className="cosmos-section" id="cases-pin">
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '8rem' }}>
          <h2 className="section-heading split-text">{caseStudiesData.heading}</h2>
        </div>
        <div className="cosmos-wrapper">
          {caseStudiesData.cases.map((caseItem: any, idx: number) => (
            <Link key={idx} href={caseItem.link} className="cosmos-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={caseItem.imgSrc} className="hs-card-img" alt={caseItem.imgAlt} loading="lazy" decoding="async" width="600" height="400" />
              <div className="hs-card-inner">
                <h3 className="hs-client">{caseItem.client}</h3>
                <p className="hs-desc">{caseItem.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="cosmos-cta" style={{ position: 'absolute', bottom: '12vh', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <Link href="/case-studies/" className="btn" data-cursor="EXPLORE">{caseStudiesData.cta}</Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
