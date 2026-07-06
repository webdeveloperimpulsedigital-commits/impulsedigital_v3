// @ts-nocheck
'use client';

import React from 'react';
import Link from '@/components/RegionLink';

const Services: React.FC<{ data?: any }> = ({ data }) => {
  // Use data or fallback to defaults
  const servicesData = data || {
    heading: "Three ways growth<br />leaders work with us.",
    items: [
      {
        link: "/growth-intelligence/",
        num: "01",
        title: "Growth Intelligence",
        label: "Find the signal before you make the move.",
        desc: "Marketing analytics, campaign intelligence, consumer insights, and competitive sensing that help enterprise marketing teams act on evidence rather than instinct. This is not a dashboard. It is a decision engine.",
        cta: "Know More"
      },
      {
        link: "/ai-marketing-systems/",
        num: "02",
        title: "AI Marketing Systems",
        label: "AI built into the way marketing actually works.",
        desc: "Agentic AI for marketing operations, fully AI-produced cinematic brand content, and Generative Search Optimisation for brands that need to move faster than their category allows.",
        cta: "Know More"
      },
      {
        link: "/brand-infrastructure/",
        num: "03",
        title: "Brand Infrastructure",
        label: "The assets, channels, and content systems that make your brand visible, credible, and ready for market.",
        desc: "Social media, performance marketing, content, website development, and branding, deployed as the execution layer of a strategic engagement.",
        cta: "Know More"
      }
    ]
  };

  return (
    <section id="services" className="services glass-panel">
      <div className="container">
        <h2 className="section-heading split-text" dangerouslySetInnerHTML={{ __html: servicesData.heading }}></h2>
        <div className="scrub-container">
          {servicesData.items.map((item: any, idx: number) => (
            <Link key={idx} href={item.link} 
              className="scrub-item" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="scrub-left">
                <div className="service-mark-draw" aria-hidden="true">
                  <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path className="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="service-num">{item.num}</span>
              </div>
              <div className="scrub-right">
                <h3 className="scrub-title text-fill">{item.title}</h3>
                <div className="scrub-label">{item.label}</div>
                <p className="scrub-desc">{item.desc}</p>
                <div className="hero-premium-cta" style={{ marginTop: '2rem' }}>
                  {item.cta}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style>{`
        .scrub-item:hover .hero-premium-cta {
          background: rgba(84, 61, 152, 0.25);
          border-color: rgba(138, 92, 246, 1);
          box-shadow: 0 0 20px rgba(138, 92, 246, 0.6), inset 0 0 12px rgba(138, 92, 246, 0.3);
          transform: translateY(-2px);
        }
        .scrub-item:hover .hero-premium-cta::before { opacity: 1; }
        .scrub-item:hover .hero-premium-cta::after { opacity: 0.3; }
      `}</style>
    </section>
  );
};

export default Services;
