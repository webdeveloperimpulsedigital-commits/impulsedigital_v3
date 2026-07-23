// @ts-nocheck
'use client';

import React, { useEffect } from 'react';
import { initCaseStudyAnimations } from '@/utils/caseStudyAnimations';

const AmazonTalentCommunicationCaseStudy: React.FC = () => {
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
          <h1 className="cs-hero-title">Amazon People-Led Talent Marketing</h1>
          <h2 className="cs-hero-subtitle">Keeping the employer brand alive<br />between hiring moments.</h2>
        </div>
      </section>

      <div className="cs-feature-wrapper">
        <div className="cs-feature-image">
          <img
            src={`${base}case studies/Written Content/Amazon Comms/Amazon Comms Title.webp`}
            alt="Amazon India Talent Communication Engine - Impulse Digital Marketing Case Study"
            fetchPriority="high"
            decoding="async"
           width={1200} height={675} />
        </div>
      </div>

      <section className="cs-intro-block" id="warp-start">
        <p className="cs-intro-text split-text">Employer branding does not live in one campaign.</p>
        <p className="cs-intro-text split-text" style={{ color: 'var(--impulse-violet)' }}>It lives in the repeated signals talent sees over time.</p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px' }}>
          Employee stories, leader conversations, job board pages, referral campaigns, social posts, advocacy content, and the way a company shows up when it is not actively asking someone to apply.
        </p>
        <p className="cs-p split-text" style={{ fontSize: '1.5rem', maxWidth: '900px', marginTop: '2rem' }}>
          Amazon India needed a talent communication engine to keep this momentum moving. Impulse Digital supported Amazon across always-on employer brand content, employee advocacy, social media, job board optimisation, campaign-led storytelling, and internal referral communication.
        </p>
      </section>

      <section className="cs-results-module custom-dashboard">
        <h2 className="cs-results-title split-text" style={{ marginBottom: '1rem' }}>Performance Snapshot</h2>
        
        <div className="dashboard-grid">
          {/* Card 1: Powering Prime Day */}
          <div className="dashboard-card gsap-fade-up">
            <div className="card-header">
              <span className="card-num">01 / CAMPAIGN</span>
              <h3 className="card-title">Powering Prime Day</h3>
            </div>
            <div className="card-metrics">
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="75">0</span>
                  <span className="cs-result-suffix">K+</span>
                </div>
                <div className="metric-label">Organic Views</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="10">0</span>
                  <span className="cs-result-suffix">X</span>
                </div>
                <div className="metric-label">Advocacy Engagement Multiplier</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="2.4">0</span>
                  <span className="cs-result-suffix">X</span>
                </div>
                <div className="metric-label">Social Media Engagement Rate</div>
              </div>
            </div>
          </div>

          {/* Card 2: Employee Advocacy */}
          <div className="dashboard-card gsap-fade-up">
            <div className="card-header">
              <span className="card-num">02 / ADVOCACY</span>
              <h3 className="card-title">Employee Advocacy</h3>
            </div>
            <div className="card-metrics">
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="2.1">0</span>
                  <span className="cs-result-suffix">M+</span>
                </div>
                <div className="metric-label">Impressions</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="67">0</span>
                  <span className="cs-result-suffix">K+</span>
                </div>
                <div className="metric-label">Engagement Generated</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="5">0</span>
                  <span className="cs-result-suffix">-digit ROI ($)</span>
                </div>
                <div className="metric-label">Measured via EveryoneSocial</div>
              </div>
            </div>
          </div>

          {/* Card 3: Social Media Management */}
          <div className="dashboard-card gsap-fade-up">
            <div className="card-header">
              <span className="card-num">03 / ORGANIC</span>
              <h3 className="card-title">Social Media Management</h3>
            </div>
            <div className="card-metrics">
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="2">0</span>
                  <span className="cs-result-suffix">M+</span>
                </div>
                <div className="metric-label">Views & Impressions</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="23">0</span>
                  <span className="cs-result-suffix">K+</span>
                </div>
                <div className="metric-label">Organic Engagements</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="10">0</span>
                  <span className="cs-result-suffix">K+</span>
                </div>
                <div className="metric-label">Followers Gained</div>
              </div>
            </div>
          </div>

          {/* Card 4: Job Board Optimisation */}
          <div className="dashboard-card gsap-fade-up">
            <div className="card-header">
              <span className="card-num">04 / DISCOVERY</span>
              <h3 className="card-title">Job Board Optimisation</h3>
            </div>
            <div className="card-metrics">
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="2.4">0</span>
                  <span className="cs-result-suffix">M+</span>
                </div>
                <div className="metric-label">Platform Search Impressions</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="400">0</span>
                  <span className="cs-result-suffix">K+</span>
                </div>
                <div className="metric-label">Candidate Interaction</div>
              </div>
              <div className="metric-row">
                <div className="metric-value">
                  <span className="counter" data-target="60">0</span>
                  <span className="cs-result-suffix">K+</span>
                </div>
                <div className="metric-label">Career Follower Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-proof-module">
        <div className="cs-proof-media gsap-fade-up">
          <img
            src={`${base}case studies/Written Content/Amazon Comms/Supporting 1.webp`}
            alt="Amazon Powering Prime Day Campaign Spotlight - Impulse Digital Marketing Case Study"
            loading="lazy"
            decoding="async"
           width={1200} height={675} />
        </div>
        <div className="cs-proof-copy">
          <span className="workstream-tag">Campaign Highlight</span>
          <h2 className="cs-proof-title split-text">Powering Prime Day.</h2>
          <p className="cs-proof-text split-text">
            Spotlight content and design creatives created for operations and corporate employees behind the scenes during Amazon India's largest operations milestone, showing the real faces behind Prime Day.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">The Context</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Amazon’s employer brand had to stay active across many talent touchpoints.</p>
            <p className="cs-p highlight split-text">Some content needed to tell employee stories. Some needed to support hiring moments. Some needed to keep job boards fresh.</p>
            <p className="cs-p split-text">
              Some needed to bring employees into advocacy. Some needed to make internal referrals feel more energetic and memorable.
            </p>
            <p className="cs-p split-text">
              The work was not one campaign. It was a talent communication system designed to keep the company's employer brand active and human-focused even during non-hiring cycles.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">The Challenge</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Always-on employer branding can easily become fragmented.</p>
            <p className="cs-p highlight split-text">When touchpoints don't sync, consistency falls apart.</p>
            <p className="cs-p split-text">
              Social media can become just a calendar. Job boards can turn into static pages. Employee advocacy can degenerate into a forced sharing request. Referral campaigns can start feeling like nagging internal reminders, and business moments can pass without becoming talent stories.
            </p>
            <p className="cs-p split-text">
              Amazon needed the employer brand to stay coherent and active across all of these disparate layers.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">What needed<br />to change</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">
              The execution layer needed to connect daily talent communication with real culture, people, and business milestones.
            </p>
            <p className="cs-p highlight split-text">
              Prime Day needed to become more than an operations milestone; it needed to show the people powering it.
            </p>
            <p className="cs-p split-text">
              Employee advocacy needed structure, calendar discipline, internal campaigns, and performance tracking. Social media needed sharper content execution, job boards needed active updates, and referral communication required creative energy, including the Superpowers internal referral campaign.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">What Impulse<br />worked on</h2>
          </div>
          <div className="cs-split-right">
            <div className="cs-workstream-list">
              <div className="cs-workstream-item gsap-fade-up">
                <span className="workstream-tag">Milestones</span>
                <h4>Powering Prime Day</h4>
                <p>Created spotlight content and designs highlighting operations and corporate employees behind the scenes, making the work culture tangible.</p>
              </div>
              <div className="cs-workstream-item gsap-fade-up">
                <span className="workstream-tag">Advocacy</span>
                <h4>Employee Advocacy Strategy</h4>
                <p>Managed structured content calendars, internal campaign plans, and performance metric tracking via the EveryoneSocial platform.</p>
              </div>
              <div className="cs-workstream-item gsap-fade-up">
                <span className="workstream-tag">Social</span>
                <h4>Social Media Management</h4>
                <p>Oversaw content conceptualisation, topic relevance, copy execution, and program promotion across Instagram, Facebook, and LinkedIn.</p>
              </div>
              <div className="cs-workstream-item gsap-fade-up">
                <span className="workstream-tag">Discovery</span>
                <h4>Job Board Optimisation</h4>
                <p>Refreshed careers pages and organization-specific job board profiles with modern campaign assets, timely company news, and search optimisation.</p>
              </div>
              <div className="cs-workstream-item gsap-fade-up">
                <span className="workstream-tag">Referrals</span>
                <h4>Superpowers Internal Campaign</h4>
                <p>Designed creative referral messaging that helped employees see referrals as building Amazon's next teams rather than just filling positions.</p>
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
              Amazon’s talent communication became more active, visible, and connected across channels.
            </p>
            <p className="cs-p highlight split-text">
              Prime Day became a people-led story. Employee advocacy became measurable. Social content sustained audience growth.
            </p>
            <p className="cs-p split-text">
              Job board profiles became current, searchable, and useful, and internal referral communications gained a fresh creative layer. The metrics indicate sustained progress: 75K+ views on Prime Day spotlights, 2.1M+ impressions on advocacy, and major follower gains across career channels.
            </p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-split-left">
            <h2 className="cs-h2 split-text">Why this matters<br />for future clients</h2>
          </div>
          <div className="cs-split-right">
            <p className="cs-p split-text">Talent decisions are rarely made from one post. People notice patterns.</p>
            <p className="cs-p highlight split-text">
              They notice how employees speak, how leaders show up, and whether careers pages feel alive between hiring pushes.
            </p>
            <p className="cs-p split-text">
              Amazon’s talent communication shows why employer branding needs rhythm, not just campaigns. When touchpoints move together, the employer brand becomes easier to trust.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-final">
        <h2 className="cs-final-heading split-text">Make every talent touchpoint count.</h2>
        <p className="cs-final-text split-text">
          When the touchpoints move together, the employer brand becomes easier to trust. Amazon's talent communication engine demonstrates how consistent, employee-led narratives shape authentic reputation.
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

      <style>{`
        /* Dashboard styles */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          margin-top: 3rem;
        }

        .dashboard-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .dashboard-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 100% 100%, rgba(138, 92, 246, 0.05) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity 0.4s ease;
          opacity: 0.5;
        }

        .dashboard-card:hover {
          transform: translateY(-5px);
          border-color: rgba(138, 92, 246, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(138, 92, 246, 0.08), inset 0 0 15px rgba(138, 92, 246, 0.03);
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1.2rem;
        }

        .card-num {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.8rem;
          color: var(--impulse-violet);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .card-title {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--white);
          margin: 0;
        }

        .card-metrics {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .metric-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .metric-value {
          display: flex;
          align-items: baseline;
          font-family: var(--font-heading, sans-serif);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
        }

        .metric-label {
          font-size: 0.9rem;
          color: var(--soft-grey);
          font-weight: 450;
          letter-spacing: 0.3px;
        }

        /* Workstream items styling */
        .cs-workstream-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .cs-workstream-item {
          border-left: 2px solid rgba(138, 92, 246, 0.3);
          padding-left: 2rem;
          transition: border-color 0.3s ease;
        }

        .cs-workstream-item:hover {
          border-color: var(--impulse-violet);
        }

        .workstream-tag {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--impulse-violet);
          font-weight: 700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .cs-workstream-item h4 {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 0.5rem 0;
        }

        .cs-workstream-item p {
          color: var(--soft-grey);
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .dashboard-card {
            padding: 1.8rem;
          }
          .metric-value {
            font-size: 1.8rem;
          }
          .cs-workstream-item {
            padding-left: 1.2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default AmazonTalentCommunicationCaseStudy;
