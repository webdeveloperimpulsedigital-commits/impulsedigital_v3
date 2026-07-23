// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import { initCaseStudyAnimations } from '@/utils/caseStudyAnimations';

const AmazonEVPCaseStudy: React.FC = () => {
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
          <h1 className="cs-hero-title">Amazon India EVP</h1>
          <h2 className="cs-hero-subtitle">Making Amazon India’s talent story clearer<br />from the inside.</h2>
        </div>
      </section>

      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img
            src={`${base}case studies/Written Content/Amazon EVP/Amazon EVP Title.webp`}
            alt="Amazon India EVP Strategy - Impulse Digital Marketing Case Study"
            fetchPriority="high"
            decoding="async"
           width={1200} height={675} />
        </div>
      </div>

      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Amazon did not need a louder employer brand.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>It needed a sharper one for India.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>
          The global brand already carried weight. But talent does not choose a workplace only because the parent brand is famous. People want to understand what the experience means for them: the role, the growth, the pressure, the culture, the possibilities, and the truth behind the promise.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px', marginTop: '2rem' }}>
          Amazon India needed an EVP direction rooted in employee understanding, not surface-level employer brand language. Impulse Digital helped bring structure, research, and clarity to that process.
        </p>
      </section>

      <section className="cs-results-module">
        <h2 className="cs-results-title split-text">Research and Strategy Snapshot</h2>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="25">0</span>
          </div>
          <div className="cs-result-label">employees included across Tech, Non-Tech, and Operations</div>
        </div>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="4">0</span>
          </div>
          <div className="cs-result-label">focus groups conducted</div>
        </div>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="60">0</span>
          </div>
          <div className="cs-result-label">minute moderated sessions</div>
        </div>
        <div className="cs-result-item gsap-fade-up">
          <div className="cs-result-number">
            <span className="counter" data-target="3">0</span>
          </div>
          <div className="cs-result-label">EVP directions developed</div>
        </div>
        <div className="cs-result-banner gsap-fade-up">
          <span>Validated EVP messaging framework handed over to Amazon for confidential internal refinement</span>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">The Context</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Amazon India needed to refine and localise its Employer Value Proposition.</p>
            <p className="cs-p highlight split-text">The work was not about inventing a new employer personality. It was about understanding what already existed.</p>
            <p className="cs-p split-text">
              The goal was to decode what employees actually recognised, and how that could be shaped into a more specific India talent narrative.
            </p>
            <p className="cs-p split-text">
              The final EVP statements cannot be published because the work remained confidential and was handed over to Amazon for further internal refinement. The public story, therefore, is not the final line. It is the process that gave Amazon clarity on what the final direction should be.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">The Challenge</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">A global employer brand creates consistency.</p>
            <p className="cs-p highlight split-text">But in a market as large and layered as India, consistency alone is not enough.</p>
            <p className="cs-p split-text">
              The EVP needed to feel relevant across roles, levels, functions, and employee realities. It had to reflect Amazon’s global ethos while still speaking to what people working in India actually experience.
            </p>
            <p className="cs-p split-text">
              The question was clear: What makes Amazon India a meaningful and credible workplace, in language its own people would recognise?
            </p>
          </div>
        </div>
      </section>

      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img
            src={`${base}case studies/Written Content/Amazon EVP/Supporting 1.webp`}
            alt="Amazon India EVP Strategy qualitative research and focus groups - Impulse Digital Marketing Case Study"
            loading="lazy"
            decoding="async"
           width={1200} height={709} />
        </div>
        <div className="cs-proof-copy">
          <h2 className="cs-proof-title split-text">Grounded in employee understanding.</h2>
          <p className="cs-proof-text split-text">
            By conducting qualitative moderated focus groups across Tech, Non-Tech, and Operations roles over 3 days, Impulse parsed employee patterns to build a representative EVP direction.
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
              The EVP process needed to move from assumed strengths to employee-backed clarity.
            </p>
            <p className="cs-p highlight split-text">
              Amazon India needed a structured way to decode what employees valued.
            </p>
            <p className="cs-p split-text">
              This required a clearer understanding of employee perception, sharper alignment between global messaging and India realities, EVP directions grounded in patterns, and a messaging framework that could inform future employer brand communication across channels.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">What Impulse<br />worked on</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">
              Impulse Digital structured the EVP development process across three connected phases:
            </p>
            <p className="cs-p split-text" style={{ marginTop: '2rem' }}>
              <strong>The first phase focused on immersion.</strong> Existing Amazon global EVP material and internal research documents were reviewed to understand the foundation already in place.
            </p>
            <p className="cs-p split-text">
              <strong>The second phase focused on primary research.</strong> Impulse Digital partnered with Amazon India’s internal teams to create a qualitative research plan, targeted survey inputs, and a focus group framework.
            </p>
            <p className="cs-p split-text">
              <strong>The third phase focused on synthesis.</strong> Employee inputs were captured, analysed, and translated into thematic patterns. From this, three EVP directions were developed with detailed rationale. These were then tested through another round of focused group discussions to understand resonance and refine the messaging approach.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-journey-wrapper">
        <div className="cs-journey-container">
          <div className="cs-journey-left">
            <h2 className="cs-journey-title split-text">The Process</h2>
            <p className="cs-journey-desc split-text">
              A structured roadmap built on listening, parsing, and validating before final refinement.
            </p>
          </div>
          <div className="cs-journey-steps">
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">01 / IMMERSION</div>
              <div className="cs-journey-text">Reviewing global brand guidelines and prior internal data.</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">02 / RESEARCH DESIGN</div>
              <div className="cs-journey-text">Structuring targeted focus groups and survey formats.</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">03 / LISTENING SESSIONS</div>
              <div className="cs-journey-text">Conducting moderated discussions across key divisions.</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">04 / THEMATIC SYNTHESIS</div>
              <div className="cs-journey-text">Parsing transcripts to isolate repeating employee values.</div>
            </div>
            <div className="cs-journey-step gsap-fade-up">
              <div className="cs-journey-num">05 / TESTING RESONANCE</div>
              <div className="cs-journey-text">Presenting and refining draft directions in follow-up groups.</div>
            </div>
            <div className="cs-journey-step highlight gsap-fade-up">
              <div className="cs-journey-num" style={{ color: 'rgba(255,255,255,0.5)' }}>06 / HANDOVER</div>
              <div className="cs-journey-text">
                Delivering a validated, employee-backed India EVP messaging framework.
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
              Amazon India gained a clearer view of what its employer story could become.
            </p>
            <p className="cs-p highlight split-text">
              The value was not in publishing a line. The value was in finding the truth the line needed to carry.
            </p>
            <p className="cs-p split-text">
              The work produced employee-backed insight, India-specific EVP direction, a stronger foundation for employer communication, and a validated messaging framework for internal refinement and omni-channel employer brand communication.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">Why this matters<br />for future clients</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">A credible EVP is not written first. It is listened into.</p>
            <p className="cs-p highlight split-text">
              For large organisations, the employer story becomes stronger when it is shaped by the people already living it.
            </p>
            <p className="cs-p split-text">
              That is what makes the difference between a polished employer brand and one talent can actually trust. Amazon India’s EVP work shows the value of slowing down before speaking louder. When the insight is sharper, the talent narrative becomes harder to ignore.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Slowing down<br />before speaking louder.</h2>
        <p className="cs-final-text split-text">
          A credible EVP is not written first; it is listened into. The work helped Amazon India discover and structure a localized talent story grounded in employee realities.
        </p>
        <div className="cs-final-punch gsap-fade-up">
          From global ethos.<br />To employee research. To thematic synthesis.<br /><span>To a validated talent story.</span>
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

export default AmazonEVPCaseStudy;
