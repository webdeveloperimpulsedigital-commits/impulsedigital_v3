// @ts-nocheck
'use client';

import React, { useRef, useState, useEffect } from 'react';

const Testimonials: React.FC<{ data?: any }> = ({ data }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Use data or fallback to defaults
  const testimonialsData = data || {
    heading: "What Good Work Leaves Behind",
    items: [
      {
        quote: "\"I have worked with Impulse Digital team across different organizations and different kinds of business problems over the years. What I have always valued is that they do not look at a brief as just a task to complete. They try to understand what the brand needs, what the business is trying to achieve, and then come back with ideas that are practical, sharp, and executable.<br /><br />From campaigns and creative work to tech-led implementation, the team has shown strong range, ownership, and consistency. Impulse Digital has been a partner I have gone back to across organizations because they bring both thinking and execution to the table.\"",
        authorImg: "/images/Sairam%20Krishnamurthy.webp",
        authorName: "Sairam Krishnamurthy",
        authorRole: "Chief Executive Officer",
        authorCompany: "Bombay Shirt Company"
      },
      {
        quote: "\"Impulse Digital has been a reliable partner in our social media journey. The team is innovative, dependable, humble, and highly collaborative, always taking full ownership of their work. With their creative insights and strong understanding of trends and technology in the social media space, they help us drive campaigns that deliver maximum impact.\"",
        authorImg: "/images/Rukmani%20Vishwanath.webp",
        authorName: "Rukmani Vishwanath",
        authorRole: "Head of Corporate Communications",
        authorCompany: "Grasim Industries Limited | Pulp and Fibre"
      },
      {
        quote: "\"Impulse Digital has been a dependable partner for our social listening and category landscape needs. What stands out is their agility and flexibility, they consistently deliver high-quality outputs, often within tight timelines. They’ve also played a key role in tracking and tracking our main campaign last year - Agent Chings - where their structured weekly updates on social presence, growth, and sentiment were particularly useful. Their approach is practical, client-centric, and focused on delivering actionable insights. Overall, they are reliable and easy to work with.\"",
        authorImg: "/images/Pratik%20Shetty.webp",
        authorName: "Pratik Shetty",
        authorRole: "Senior Manager, Consumer Insights",
        authorCompany: "Tata Consumer Products"
      },
      {
        quote: "\"I have had the opportunity to work with Impulse Digital team across different organizations and mandates over the years. What stands out for me is the way they approach a brief. They do not look at it as just another task to execute. They take the time to understand the business context, ask the right questions, and come back with ideas that are practical as well as well thought through. Across digital strategy, brand communication, content, and performance-led initiatives, the team has consistently brought clarity, creativity, and a strong sense of ownership. They are dependable, collaborative, and easy to work with.\"",
        authorImg: "/images/Ankit%20Meena.webp",
        authorName: "Ankit Meena",
        authorRole: "Lead - Digital Marketing and Transformation",
        authorCompany: "Himalaya Wellness Company"
      },
      {
        quote: "\"Working with Impulse Digital on our corporate video was a very positive experience. The team took the time to understand our business, the technical details behind it, and the message we wanted to communicate. They brought together technical accuracy and storytelling in a way that made the film both credible and engaging.\"",
        authorImg: "/images/Sachin.webp",
        authorName: "Sachin Mane",
        authorRole: "Marketing Insights Manager",
        authorCompany: "Croda"
      },
      {
        quote: "\"Working with Impulse Digital on our USA SEO mandate has been a very positive experience. The team took the time to understand our business, our audience, and the complexity of healthcare search before building the strategy. Their approach went beyond rankings and focused on building the right SEO foundation, website structure, content ecosystem, and technical improvements. Their understanding of SEO fundamentals, website architecture, and lead generation made a clear difference. We have seen strong organic growth, and the team has been proactive, thoughtful, and dependable throughout.\"",
        authorImg: "/images/Richa.webp",
        authorName: "Richa Dholi",
        authorRole: "Global Marketing Director",
        authorCompany: "Qure.ai"
      }
    ]
  };

  useEffect(() => {
    const { gsap, ScrollTrigger, SplitType } = window as any;
    if (!gsap || !ScrollTrigger) return;
    const ctx = gsap.context(() => {
      // SplitType for Testimonials heading
      const text = sectionRef.current?.querySelector('.split-text') as HTMLElement;
      if (text && SplitType) {
        if (!text.classList.contains('split-done')) {
          const split = new SplitType(text, { types: 'lines, words' });
          if (split.lines) {
            split.lines.forEach((line: any) => {
              const wrapper = document.createElement('div');
              wrapper.classList.add('line-wrapper');
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            });
          }
          text.classList.add('split-done');
          if (split.words && split.words.length) {
            gsap.fromTo(split.words,
              { yPercent: 120, opacity: 0 },
              {
                scrollTrigger: { trigger: text, start: 'top 85%', toggleActions: 'play none none reverse' },
                yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
              }
            );
          }
        }
      }

      // Testimonials Cards Reveal
      const cards = gsap.utils.toArray('.test-card-col');
      if (cards.length) {
        gsap.set(cards, { autoAlpha: 0, y: 40 });
        gsap.to(cards, {
          scrollTrigger: {
            trigger: ".testimonials",
            start: "top 75%",
            toggleActions: "play none none reverse"
          },
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollLeft = slider.scrollLeft;
      const sliderWidth = slider.clientWidth;
      const scrollWidth = slider.scrollWidth;
      const children = Array.from(slider.children);

      if (scrollLeft <= 10) {
        setActiveIndex(0);
        return;
      }

      if (scrollLeft + sliderWidth >= scrollWidth - 10) {
        setActiveIndex(children.length - 1);
        return;
      }

      const sliderCenter = scrollLeft + sliderWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const htmlChild = child as HTMLElement;
        const childCenter = htmlChild.offsetLeft + htmlChild.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const children = Array.from(slider.children);
      const targetChild = children[index] as HTMLElement;
      if (targetChild) {
        const sliderWidth = slider.clientWidth;
        const childCenter = targetChild.offsetLeft + targetChild.offsetWidth / 2;
        const targetScrollLeft = childCenter - sliderWidth / 2;
        slider.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  };


  return (
    <section className="testimonials glass-panel" ref={sectionRef}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-heading split-text">{testimonialsData.heading}</h2>
        <div className="testimonial-grid" ref={sliderRef} onScroll={handleScroll}>
          {testimonialsData.items.map((item: any, idx: number) => (
            <div className="test-card-col" key={idx}>
              <div className="test-card">
                <div className="test-content">
                  <p className="quote" dangerouslySetInnerHTML={{ __html: item.quote }}></p>
                  <div className="author-block">
                    <img src={item.authorImg} alt={`${item.authorName} - Client Review for Impulse Digital`} className="author-img" loading="lazy" decoding="async" width="100" height="100" />
                    <div className="author-info">
                      <h4 className="author">{item.authorName}</h4>
                      <span className="role">{item.authorRole}</span>
                      <span className="company">{item.authorCompany}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="test-slider-controls">
          <button className="test-slider-btn" onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))} aria-label="Previous Testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="slider-dots">
            {testimonialsData.items.map((_, idx: number) => (
              <span
                key={idx}
                className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <button className="test-slider-btn" onClick={() => scrollToSlide(Math.min(testimonialsData.items.length - 1, activeIndex + 1))} aria-label="Next Testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
