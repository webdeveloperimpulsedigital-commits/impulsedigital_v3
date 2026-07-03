// @ts-nocheck
'use client';

import React, { useLayoutEffect } from 'react';
import Link from '@/components/RegionLink';

import { startHeroCopyReveal } from '../utils/heroCopyReveal';

const Hero: React.FC<{ data?: any }> = ({ data }) => {
  useLayoutEffect(() => {
    return startHeroCopyReveal({
      primary: Array.from(document.querySelectorAll('.hero-headline')),
      supporting: document.querySelector('.hero-desc'),
      actions: document.querySelector('.hero-premium-cta'),
    });
  }, []);

  // Use data or fallback to defaults
  const headlineParts = data?.headlineParts || ["Your Data Knows.", "Your Marketing"];
  const headlineAccent = data?.headlineAccent || "Should Too.";
  const description = data?.description || "Impulse Digital helps enterprise teams turn scattered marketing data into AI-native growth intelligence they can actually act on.";
  const cta = data?.cta || { text: "FIND THE DECISIONS INSIDE YOUR DATA", link: "/growth-intelligence/" };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title-wrapper" style={{ margin: 0, padding: 0 }}>
          {headlineParts.map((part: string, idx: number) => (
            <span key={idx} className="hero-headline title-large hero-copy-reveal" style={{ display: 'block', margin: idx === 0 ? '0 0 0 0' : '0', '--hero-copy-delay': '0ms' } as React.CSSProperties}>
              {part}
            </span>
          ))}
          <span className="hero-headline title-large text-violet hero-copy-reveal" style={{ display: 'block', marginTop: '0', marginBottom: '1.5rem', '--hero-copy-delay': '0ms' } as React.CSSProperties}>
            {headlineAccent}
          </span>
        </h1>

        <div className="hero-bottom" style={{ marginTop: '1rem' }}>
          <p className="hero-desc" style={{ maxWidth: '850px', margin: '0 auto' }}>
            {description}
          </p>
          <Link href={cta.link} className="hero-premium-cta hero-copy-reveal" data-cursor="EXPLORE" style={{ marginTop: '2.5rem', marginBottom: '3rem', '--hero-copy-delay': '220ms' } as React.CSSProperties}>
            <span className="btn-text">{cta.text}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
