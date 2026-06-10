// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import { initCaseStudyAnimations } from '@/utils/caseStudyAnimations';

const AmazonUnpluggedCaseStudy: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('case-study-page');
    const cleanup = initCaseStudyAnimations();
    return () => {
      document.body.classList.remove('case-study-page');
      cleanup();
    };
  }, []);

  const base = "/";
  const svgPath = "M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z";

  return (
    <main id="main-content">
      <section className="cs-hero">
        <div className="cs-hero-header">
          <h1 className="cs-hero-title">Amazon Unplugged</h1>
          <h2 className="cs-hero-subtitle">Letting talent hear Amazon from<br />the people who shape it.</h2>
        </div>
      </section>

      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img
            src={`${base}case studies/Written Content/Amazon Unplugged/Amazon Unplugged Title.webp`}
            alt="Amazon Unplugged Employer Brand Video Series - Impulse Digital Marketing Case Study"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Employer brands often sound too managed.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>Amazon Unplugged took a different route.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>
          It gave candidates, employees, and talent audiences a closer view of Amazon through conversations between senior leaders. The format was hosted by Talent Acquisition Director Rajiv Sharma and featured senior Amazon leaders across people, HR, technology, payments, operations, and leadership functions.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px', marginTop: '2rem' }}>
          The aim was clear: make Amazon’s employer brand feel more open, useful, and human. Not through slogans. Through answers.
        </p>
      </section>

      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">The Outcome</h2>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="6">0</span>
          </div>
          <div className="cs-result-label">video podcast episodes</div>
        </div>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="1.2">0</span>
            <span className="cs-result-suffix">M+</span>
          </div>
          <div className="cs-result-label">views</div>
        </div>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="9.5">0</span>
            <span className="cs-result-suffix">M+</span>
          </div>
          <div className="cs-result-label">impressions</div>
        </div>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="10">0</span>
            <span className="cs-result-suffix">K+</span>
          </div>
          <div className="cs-result-label">engagement</div>
        </div>
        <div className="cs-result-banner gsap-fade-up">
          <span>Distributed across Amazon’s global and India-specific social ecosystem</span>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">The Context</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Talent does not only want to know that a company is big.</p>
            <p className="cs-p highlight split-text">It wants to know how people inside that company think.</p>
            <p className="cs-p split-text">
              Amazon Unplugged was created as a video-led employer brand property built around leadership conversations, workplace stories, and hiring transparency.
            </p>
            <p className="cs-p split-text">
              The series gave audiences access to senior voices and practical answers around what Amazon looks for in talent, how candidates are evaluated, and what people should prepare for when they want to build a career with Amazon.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">The Challenge</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Employer brand content can become too polished to be useful.</p>
            <p className="cs-p highlight split-text">When every message sounds like a campaign, talent stops listening.</p>
            <p className="cs-p split-text">
              Amazon needed a format that could carry senior leadership thinking without feeling distant. The conversations had to feel structured, but not lifeless. They had to reveal useful truths without becoming a recruitment manual.
            </p>
            <p className="cs-p split-text">
              The strength of the series came from its format: two leaders in conversation, answering the questions candidates actually care about.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img
            src={`${base}case studies/Written Content/Amazon Unplugged/Supporting 1.webp`}
            alt="Amazon Unplugged video podcast episodes production proof - Impulse Digital Marketing Case Study"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">A video-led concept built to humanize the brand.</h2>
          <p className="cs-proof-text split-text">
            By mapping actual candidate questions directly to leaders, the format created a structured, transparent conversation that candidates valued.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">What needed<br />to change</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">
              Amazon’s employer brand needed a more direct and human-facing content property.
            </p>
            <p className="cs-p highlight split-text">
              The content had to move from saying "this is who we are" to showing how leaders think, what hiring teams value, and what candidates can expect.
            </p>
            <p className="cs-p split-text">
              The audience needed to feel closer to the organisation before applying, joining, or even considering Amazon seriously.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">What Impulse<br />worked on</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">
              Impulse Digital oversaw the concept and execution of the Amazon Unplugged series. The work covered:
            </p>
            <ul className="cs-list" style={{ marginTop: '2rem' }}>
              <li className="gsap-item">Video podcast format development</li>
              <li className="gsap-item">Episode planning & structuring</li>
              <li className="gsap-item">Shoot execution & set design</li>
              <li className="gsap-item">Edits across 6 episodes</li>
              <li className="gsap-item">Structuring leadership conversations for social platforms</li>
              <li className="gsap-item">Shaping the property as an employer brand content series</li>
            </ul>
            <p className="cs-p split-text" style={{ marginTop: '3rem' }}>
              The series featured senior leaders including Luli, Vice President, HR, North American Operations, Deepti Verma, Vice President, People Experience and Technology, Amazon India, and Mahendra Nerurkar, Vice President, Payments for Emerging Markets.
            </p>
            <p className="cs-p highlight split-text">
              Each conversation was built to make Amazon’s hiring expectations, leadership thinking, and workplace culture easier to understand.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Signals</h2>
            <p className="cs-journey-desc split-text">
              Candidates look for signals that job descriptions cannot communicate.
            </p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">01 / LEADERSHIP</div>
              <div className="cs-journey-text">Who leads here?</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">02 / VALUES</div>
              <div className="cs-journey-text">What do they value?</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">03 / CRITERIA</div>
              <div className="cs-journey-text">How do they judge people?</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">04 / CULTURE</div>
              <div className="cs-journey-text">What does the workplace reward?</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">05 / PERSPECTIVE</div>
              <div className="cs-journey-text">Can I see myself here?</div>
            </div>
            <div className="cs-journey-step highlight gsap-fade-up">
              <div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / OUTCOME</div>
              <div className="cs-journey-text">
                Amazon Unplugged made those signals easier to read before the first interview.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">What changed</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">
              Amazon Unplugged created a content property that made the employer brand feel closer.
            </p>
            <p className="cs-p highlight split-text">
              It gave Amazon a way to speak to talent through conversation instead of campaign language.
            </p>
            <p className="cs-p split-text">
              The numbers show strong audience response: <strong>1.2M+ views, 9.5M+ impressions, and 10K+ engagement.</strong>
            </p>
            <p className="cs-p split-text">
              For an employer brand property, that matters because the content was not built around entertainment alone. It was built around trust, access, and clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-proof-module reverse">
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">Conversations between senior leaders built around transparency.</h2>
          <p className="cs-proof-text split-text">
            The series features insights on career paths, interview prep, and leadership values directly from Amazon's top leadership.
          </p>
        </div>
        <div className="cs-proof-media gsap-fade-up">
          <img
            src={`${base}case studies/Written Content/Amazon Unplugged/Supporting 2.webp`}
            alt="Amazon Unplugged interview set with Rajiv Sharma and Deepti Verma - Impulse Digital Marketing Case Study"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">Why this matters<br />for future clients</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Talent is not only evaluating job descriptions. It is evaluating signals.</p>
            <p className="cs-p highlight split-text">
              For companies competing for serious talent, this kind of content can do what polished employer claims cannot.
            </p>
            <p className="cs-p split-text">
              It makes the workplace feel real before the first interview. It builds trust through transparency and sets clear expectations for both sides.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img
            src={`${base}case studies/Written Content/Amazon Unplugged/Supporting 3.webp`}
            alt="Amazon Unplugged video content on social platform with engagement details - Impulse Digital Marketing Case Study"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">A strong message distributed across global channels.</h2>
          <p className="cs-proof-text split-text">
            Optimized for both global and local audiences, the series reached over 9.5 million impressions through strategic digital distribution.
          </p>
        </div>
      </section>

      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Letting talent hear Amazon<br />from the people who shape it.</h2>
        <p className="cs-final-text split-text">
          Amazon Unplugged worked because it made essential leadership and culture signals easier to read. For companies competing for serious talent, this kind of content makes the workplace feel real before the first interview.
        </p>
        <div className="cs-final-punch gsap-fade-up">
          From job description.<br />To leader conversation. To culture signal.<br /><span>To trust and clarity.</span>
        </div>
      </section>

      <section className="svc-final-cta" id="connect">
        <div className="svc-final-cta-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
            <path className="svc-final-cta-path" d={svgPath} fill="none" />
          </svg>
        </div>
        <div className="container">
          <h2 className="split-text">Your Problem Next?</h2>
          <div className="svc-final-cta-actions gsap-fade-up">
            <a href="/contact-us" className="btn" data-cursor="START">
              <span className="btn-text">START A CONVERSATION</span>
              <div className="btn-fill"></div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AmazonUnpluggedCaseStudy;
