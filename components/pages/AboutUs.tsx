// @ts-nocheck
'use client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect } from 'react';
import { useGsapSafeEffect } from '@/hooks/useGsapSafeEffect';
import Link from '@/components/RegionLink';

import { startHeroCopyReveal } from '@/utils/heroCopyReveal';


const AboutUs: React.FC<{ data?: any }> = ({ data }) => {
  useEffect(() => {
    document.body.classList.add('service-page', 'about-page');

    const stopHeroReveal = startHeroCopyReveal({
      primary: document.querySelector('.ab-hero-h'),
      supporting: [
        document.querySelector('.ab-hero-tagline'),
        document.querySelector('.ab-hero-truths'),
      ],
      actions: document.querySelector('.ab-hero-foot'),
    });

    return () => {
      stopHeroReveal();
      document.body.classList.remove('service-page', 'about-page');
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Use data or fallback to defaults
  const aboutData = data || {
    hero: {
      headlineParts: ["Momentum for", "brands with appetite."],
      tagline: "The best brands are never truly still.",
      truths: [
        "They question what has become routine.",
        "They improve what is already working.",
        "They move before marketing turns into maintenance."
      ],
      lede: "Impulse Digital helps such brands turn ambition into commercial momentum by bringing strategy, creativity, content, search, performance, technology, AI, and execution into formation."
    },
    drift: {
      headlineParts: ["Marketing becomes maintenance quietly.", "It rarely fails all at once."],
      routineGrid: [
        "The calendar keeps<br/>moving.",
        "Campaigns keep<br/>launching.",
        "Reports keep<br/>getting made.",
        "Meetings keep<br/>happening."
      ],
      pivotLoud: "But somewhere along the way, the work starts needing more explanation than it creates movement.",
      pivotQuiet: "Leadership starts asking harder questions.",
      questions: [
        "What is this doing for the<br/>brand",
        "What is this building over<br/>time",
        "What is this helping us<br/>decide",
        "What is this moving for the<br/>business"
      ],
      resist: "That is the drift <span className=\"accent\">Impulse exists to resist.</span>"
    },
    appetite: {
      ghost: "APPETITE",
      headlineL1: "Appetite is not <span className=\"strike\">size</span>.",
      headlineL2: "It is willingness.",
      rows: [
        "A startup can have it.",
        "A legacy business can have it.",
        "A conglomerate can have it.",
        "A founder-led company can have it."
      ],
      def: "Appetite is the willingness to move, question, improve, experiment, challenge default thinking, and expect more from marketing.",
      close: [
        "That is who we work best with.",
        "Brands that do not want marketing to simply continue.",
        "<span className=\"accent\">Brands that want it to create momentum.</span>"
      ]
    },
    formation: {
      heading: "Teams go further in formation.",
      body: [
        "A brand rarely moves because one channel performs in isolation.",
        "Momentum is built when the thinking, the story, the search presence, the media, the website, the data, the technology, and the execution pull in the same direction.",
        "That is why we do not treat strategy as a document and execution as a handoff.",
        "The work has to move together.<em>Otherwise, it becomes activity.</em>"
      ]
    },
    movement: {
      heading: "The service is not the story.<br /><span className=\"accent\">The movement is.</span>",
      tasks: [
        "<strong>Brand strategy</strong>gives the work a commercial foundation.",
        "<strong>Content</strong>builds authority, not just output.",
        "<strong>Search</strong>compounds visibility that the brand owns.",
        "<strong>Performance</strong>makes spend more accountable.",
        "<strong>Social media</strong>builds relevance, not just a posting rhythm.",
        "<strong>Websites</strong>become the place where intent either lands or leaks.",
        "<strong>Analytics</strong>turns data into clearer decisions.",
        "<strong>AI</strong>makes the work faster, sharper, and more scalable without lowering the bar."
      ],
      revealPre: "Used separately, these can become tasks.",
      revealH: "Used with intent,\n<span className=\"accent-block\">they become momentum.</span>"
    },
    clarity: {
      heading: "Less chasing.<br /><span className=\"accent\">More clarity.</span>",
      subheading: "You get strategy before the work, not as a post-rationalisation after the work is questioned. You get content, campaigns, websites, search systems, and AI-enabled workflows built to perform, not just exist.",
      panes: [
        {
          num: "01",
          title: "Behind the scenes, there is process, data, automation, judgment, and senior thinking.",
          items: [
            "Process",
            "Data",
            "Automation",
            "Judgment",
            "Senior thinking"
          ],
          type: "behind"
        },
        {
          num: "02",
          title: "On the surface, it should feel simple.",
          items: [
            "You get fewer loose ends.",
            "Fewer avoidable calls.",
            "Fewer rounds caused by unclear thinking."
          ],
          type: "surface"
        }
      ],
      stack: [
        "The right work.",
        "Moving in the right direction.",
        "With fewer things falling through the cracks."
      ]
    },
    senior: {
      heading: "Senior thinking stays close to the work.",
      subheading: "Impulse is not built on the idea that strategy happens once and execution figures itself out. The work often needs judgment.",
      rows: [
        { trigger: "A campaign", need: "may need a sharper thought." },
        { trigger: "A website", need: "may need a clearer path." },
        { trigger: "A search strategy", need: "may need stronger commercial context." },
        { trigger: "An AI workflow", need: "may need a human filter." },
        { trigger: "A client conversation", need: "may need more honesty than polish." }
      ],
      footLoud: "Not to slow the work down. <em>To keep it pointed in the right direction.</em>"
    },
    founders: {
      heading: "Built by people who refuse to <em>simply continue.</em>",
      list: [
        {
          id: "adwait",
          name: "Adwait Joshi",
          ghostName: "ADWAIT",
          side: "left",
          img: "/images/About%20Us/Adwait-cutout-v2.webp",
          width: 1024,
          height: 1536,
          alt: "Adwait Joshi - Founder and CEO of Impulse Digital Marketing Agency",
          headline: "Restless by design, particular by habit.",
          body: "Somewhere between simplifying what’s complicated, complicating what’s too simple, and informally holding titles like fixer of things, questioner of norms, and quiet instigator at Impulse Digital."
        },
        {
          id: "abhishek",
          name: "Abhishek Arekar",
          ghostName: "ABHISHEK",
          side: "right",
          img: "/images/About%20Us/Abhishek-cutout-v2.webp",
          width: 1086,
          height: 1448,
          alt: "Abhishek Arekar - Co-Founder of Impulse Digital Marketing Agency",
          headline: "The kind of person who can read a dashboard, a room, and a poorly explained problem with the same unsettling accuracy.",
          body: "Somewhere in the background of every smooth process, sharper insight, and better decision at Impulse Digital."
        }
      ]
    },
    fit: {
      heading: "Built for brands that <em style=\"font-style: italic; font-weight: 300; color: var(--impulse-violet)\">expect more.</em>",
      warn: "We are not the right fit for teams looking for a vendor to simply fulfil briefs.",
      yes: "Brands that want a partner who can think with them, build with them, challenge weak assumptions, and reduce the weight marketing places on their internal team.",
      subheading: "The size of the brand matters less than the appetite behind it.",
      attrs: [
        "A sharper question.",
        "A higher standard.",
        "A willingness to improve.",
        "A need for marketing to move the business, not just fill the calendar."
      ],
      close: "That is where Impulse fits best."
    },
    final: {
      stack: [
        "Move sharper.",
        "Move together.",
        "Move the business."
      ],
      cta: {
        link: "/contact-us/",
        text: "Start a conversation"
      }
    }
  };

  useGsapSafeEffect((gsap, ScrollTrigger) => {
    const cleanups: (() => void)[] = [];

    const heads = document.querySelectorAll(
      '.ab-drift-pivot, .ab-drift-resist,' +
      '.ab-appetite-head, .ab-appetite-def, .ab-appetite-close p,' +
      '.ab-formation-body p, .ab-formation-close,' +
      '.ab-bridge, .ab-reveal-pre, .ab-reveal-h,' +
      '.ab-clarity-h-sub, .ab-clarity-stack .row,' +
      '.ab-senior-sub, .ab-senior-foot p,' +
      '.ab-fit-close'
    );
    heads.forEach((el) => {
      gsap.fromTo(el, { y: 26, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.95, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });

    const batches = ['.ab-routine-cell', '.ab-drift-q', '.ab-appetite-row', '.ab-senior-row', '.ab-fit-attr'];
    batches.forEach((sel) => {
      const items = gsap.utils.toArray(sel);
      if (!items.length) return;
      gsap.set(items, { y: 24, opacity: 0 });
      ScrollTrigger.batch(items, {
        start: 'top 90%',
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out' }),
        once: true
      });
    });

    ['.ab-clarity-pane', '.ab-fit-pane'].forEach((sel) => {
      const items = gsap.utils.toArray(sel);
      if (!items.length) return;
      gsap.set(items, { y: 30, opacity: 0 });
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }),
        once: true
      });
    });

    // ===== Movement system: keep the structure, add a living sequence =====
    const movementSystem = document.querySelector('.ab-movement-system');
    if (movementSystem) {
      const movementCards = gsap.utils.toArray('.ab-movement-system .ab-task');
      const revealPanel = document.querySelector('.ab-reveal');
      const movementOrder = [0, 3, 1, 2, 4, 5, 6, 7];

      ScrollTrigger.create({
        trigger: movementSystem,
        start: 'top 72%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          movementOrder.forEach((idx, i) => {
            const card = movementCards[idx];
            if (!card) return;
            tl.fromTo(card, {
              opacity: 0,
              y: 28,
              scale: 0.96
            }, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.62,
              onStart: () => card.classList.add('is-lit'),
              onComplete: () => setTimeout(() => card.classList.remove('is-lit'), 900)
            }, i * 0.08);
          });
          tl.fromTo(revealPanel, {
            opacity: 0,
            y: 24,
            scale: 0.97
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            onStart: () => revealPanel && (revealPanel as HTMLElement).classList.add('is-lit')
          }, 0.32);
          tl.to(revealPanel, { '--shine-x': '160%', duration: 1.2, ease: 'power2.out' }, 0.62);
        }
      });

      movementCards.forEach((card: any) => {
        const onPointerMove = (event: any) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
          card.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
        };
        card.addEventListener('pointermove', onPointerMove);
        cleanups.push(() => card.removeEventListener('pointermove', onPointerMove));
      });
    }

    const strike = document.querySelector('.ab-appetite-head .strike');
    if (strike) {
      ScrollTrigger.create({
        trigger: '.ab-appetite-head',
        start: 'top 70%',
        once: true,
        onEnter: () => (strike as any).style.setProperty('--strike-w', '1')
      });
    }

    // ===== Formation V-flock reveal =====
    const order = ['l3', 'r3', 'l2', 'r2', 'l1', 'r1', 'lead'];
    if (document.querySelector('.ab-form-mark')) {
      ScrollTrigger.create({
        trigger: '.ab-formation-stage',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          order.forEach((pos, i) => {
            const el = document.querySelector(`.ab-form-mark[data-pos="${pos}"]`);
            if (!el) return;
            const isLead = el.classList.contains('lead');
            const isTail = (pos === 'l3' || pos === 'r3');
            gsap.fromTo(el,
              { opacity: 0, scale: 0.6, y: 30 },
              {
                opacity: isLead ? 1 : (isTail ? 0.5 : 0.88),
                scale: 1, y: 0,
                duration: 0.8,
                delay: i * 0.12,
                ease: 'power3.out'
              }
            );
          });
          gsap.to('.ab-form-mark.lead', {
            y: -6, duration: 2.3, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.2
          });
        }
      });
    }

    // ===== Founder section reveals =====
    document.querySelectorAll('.ab-founder-section').forEach((sec) => {
      const ghost = sec.querySelector('.ab-founder-ghost-name');
      const portrait = sec.querySelector('.ab-founder-portrait img');
      const name = sec.querySelector('.ab-founder-name');
      const head = sec.querySelector('.ab-founder-headline');
      const body = sec.querySelector('.ab-founder-body');
      const founderText = [name, head, body].filter(Boolean);

      gsap.set(ghost, { opacity: 0 });
      gsap.set(portrait, { y: 60, opacity: 0 });
      gsap.set(founderText, { y: 24, opacity: 0 });

      ScrollTrigger.create({
        trigger: sec,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.to(ghost, { opacity: 1, duration: 1.4 }, 0.15)
            .to(portrait, { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' }, 0.2)
            .to(name, { y: 0, opacity: 1, duration: 0.9 }, 0.5)
            .to(head, { y: 0, opacity: 1, duration: 0.9 }, 0.65)
            .to(body, { y: 0, opacity: 1, duration: 0.9 }, 0.8);
        }
      });

      gsap.to(ghost, {
        y: -50, ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true }
      });
      gsap.to(portrait, {
        y: -20, ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    const finalCard = document.querySelector('.ab-final-card');
    const finalRows = gsap.utils.toArray('.ab-final-stack .row');
    const finalButton = document.querySelector('.ab-final-cta-row');
    if (finalCard && finalButton) {
      ScrollTrigger.create({
        trigger: finalCard,
        start: 'top 84%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
          tl.fromTo(finalRows, {
            y: 58,
            opacity: 0,
            filter: 'blur(14px)'
          }, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.13
          })
            .fromTo(finalButton, {
              y: 24,
              opacity: 0
            }, {
              y: 0,
              opacity: 1,
              duration: 0.65
            }, '-=0.25');
        }
      });
    }

    // ===== Hero → drift transition =====
    const driftTrigger = document.querySelector('.ab-drift');
    if (driftTrigger) {
      gsap.to(document.body, {
        backgroundColor: '#000000',
        scrollTrigger: { trigger: driftTrigger, start: 'top bottom', end: 'top top', scrub: true }
      });
      if ((window as any).particlesMaterial) {
        gsap.fromTo((window as any).particlesMaterial,
          { opacity: 0.7 },
          { opacity: 0, scrollTrigger: { trigger: driftTrigger, start: 'top 80%', end: 'top 20%', scrub: true } }
        );
      }
    }

    return () => {
      cleanups.forEach((c) => c());

      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t: any) => {
          if (t.trigger && t.trigger.closest && t.trigger.closest('.about-page-container')) {
            t.kill();
          }
        });
      }

      if (gsap && (window as any).particlesMaterial) {
        gsap.killTweensOf((window as any).particlesMaterial);
        gsap.set((window as any).particlesMaterial, { opacity: 0.6 });
      }
    };
  }, []);

  return (
    <main id="main-content" className="about-page-container">
      
      {/* ============================================================
         1. HERO
         ============================================================ */}
      <section className="ab-section ab-hero" id="hero">
        <div className="ab-wrap-full">
          <div className="ab-hero-inner">
            <h1 className="ab-hero-h hero-copy-reveal">{aboutData.hero.headlineParts[0]} {' '}<br/><span style={{ color: 'var(--impulse-violet)' }}>{aboutData.hero.headlineParts[1]}</span></h1>
            <p className="ab-hero-tagline hero-copy-reveal">{aboutData.hero.tagline}</p>

            <div className="ab-hero-truths hero-copy-reveal">
              {aboutData.hero.truths.map((truth: string, idx: number) => (
                <div key={idx} className="ab-truth">
                  <p className="ab-truth-text">{truth}</p>
                </div>
              ))}
            </div>

            <div className="ab-hero-foot hero-copy-reveal">
              <p className="ab-hero-lede">{aboutData.hero.lede}</p>
              <div className="ab-hero-cta-row">
                <Link href="/contact-us/" className="btn" data-cursor="START">
                  <span className="btn-text">Start a conversation</span>
                  <div className="btn-fill"></div>
                </Link>
                <Link href="/case-studies/" className="btn" data-cursor="VIEW">
                  <span className="btn-text">Explore Our Work</span>
                  <div className="btn-fill"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         2. DRIFT
         ============================================================ */}
      <section className="ab-section ab-drift" id="think">
        <div className="ab-wrap-full">

          <div className="ab-drift-head">
            <h2 className="ab-drift-h split-text">
              <span className="l1">{aboutData.drift.headlineParts[0]}</span>
              {aboutData.drift.headlineParts[1] && <span className="l2">{aboutData.drift.headlineParts[1]}</span>}
            </h2>
          </div>

          <div className="ab-routine-grid">
            {aboutData.drift.routineGrid.map((routine: string, idx: number) => (
              <div className="ab-routine-cell" key={idx}>
                <span className="ab-routine-dot"></span>
                <span className="ab-routine-text" dangerouslySetInnerHTML={{ __html: routine }} />
              </div>
            ))}
          </div>

          <div className="ab-drift-pivot">
            <p className="loud">{aboutData.drift.pivotLoud}</p>
            <p>{aboutData.drift.pivotQuiet}</p>
          </div>

          <div className="ab-drift-questions">
            {aboutData.drift.questions.map((question: string, idx: number) => {
              const align = idx === 0 ? "l" : idx === 1 ? "r2" : idx === 2 ? "l2" : "r";
              return (
                <p className="ab-drift-q" data-align={align} key={idx} dangerouslySetInnerHTML={{ __html: question + '<span class="q-mark">?</span>' }} />
              );
            })}
          </div>

          <p className="ab-drift-resist" dangerouslySetInnerHTML={{ __html: aboutData.drift.resist }} />
        </div>
      </section>

      {/* ============================================================
         3. APPETITE
         ============================================================ */}
      <section className="ab-section ab-appetite">
        <div className="ab-appetite-ghost" aria-hidden="true">{aboutData.appetite.ghost}</div>
        <div className="ab-wrap-full ab-appetite-inner">
          <div className="ab-appetite-head">
            <span className="l1" dangerouslySetInnerHTML={{ __html: aboutData.appetite.headlineL1 }} />
            <span className="l2">{aboutData.appetite.headlineL2}</span>
          </div>

          <div className="ab-appetite-list">
            {aboutData.appetite.rows.map((row: string, idx: number) => (
              <div className="ab-appetite-row" key={idx}>
                <span className="num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="text">{row}</span>
              </div>
            ))}
          </div>

          <p className="ab-appetite-def">{aboutData.appetite.def}</p>

          <div className="ab-appetite-close">
            {aboutData.appetite.close.map((closeLine: string, idx: number) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: closeLine }} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         4. FORMATION
         ============================================================ */}
      <section className="ab-section ab-formation">
        <div className="ab-wrap-narrow">

          <div className="ab-formation-head">
            <h2 className="ab-formation-h split-text">{aboutData.formation.heading}</h2>
          </div>

          <div className="ab-formation-stage" aria-hidden="true">
            <div className="ab-form-mark" data-pos="l3"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="l2"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="l1"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark lead" data-pos="lead"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="r1"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="r2"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
            <div className="ab-form-mark" data-pos="r3"><svg viewBox="801 344 274 272">
              <use href="#impulse-mark" />
            </svg></div>
          </div>

          <div className="ab-formation-body">
            {aboutData.formation.body.map((line: string, idx: number) => {
              if (idx === aboutData.formation.body.length - 1) {
                return <p className="ab-formation-close" key={idx} dangerouslySetInnerHTML={{ __html: line }} />
              }
              return <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
         5. MOVEMENT
         ============================================================ */}
      <section className="ab-section ab-movement" id="movement">
        <div className="ab-wrap-full">
          <div className="ab-movement-head">
            <h2 className="ab-movement-h split-text" dangerouslySetInnerHTML={{ __html: aboutData.movement.heading }} />
          </div>

          <div className="ab-movement-system">
            <div className="ab-tasks">
              {aboutData.movement.tasks.map((task: string, idx: number) => (
                <div className="ab-task" key={idx}>
                  <p className="ab-task-text" dangerouslySetInnerHTML={{ __html: task }} />
                </div>
              ))}
            </div>

            <div className="ab-reveal">
              <p className="ab-reveal-pre">{aboutData.movement.revealPre}</p>
              <h3 className="ab-reveal-h" dangerouslySetInnerHTML={{ __html: aboutData.movement.revealH }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         6. CLARITY
         ============================================================ */}
      <section className="ab-section ab-clarity">
        <div className="ab-wrap-full">

          <div className="ab-clarity-head">
            <h2 className="ab-clarity-h split-text" dangerouslySetInnerHTML={{ __html: aboutData.clarity.heading }} />
            <p className="ab-clarity-h-sub">{aboutData.clarity.subheading}</p>
          </div>

          <div className="ab-clarity-split">
            {aboutData.clarity.panes.map((pane: any, idx: number) => (
              <div className={`ab-clarity-pane ${pane.type}`} key={idx}>
                <span className="ab-clarity-pane-num">{pane.num}</span>
                <h3>{pane.title}</h3>
                <ul>
                  {pane.items.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="ab-clarity-stack">
            {aboutData.clarity.stack.map((item: string, idx: number) => (
              <span className="row" key={idx}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         7. SENIOR THINKING
         ============================================================ */}
      <section className="ab-section ab-senior">
        <div className="ab-wrap-full">

          <div className="ab-senior-head">
            <h2 className="ab-senior-h split-text">{aboutData.senior.heading}</h2>
            <p className="ab-senior-sub">{aboutData.senior.subheading}</p>
          </div>

          <div className="ab-senior-list">
            {aboutData.senior.rows.map((row: any, idx: number) => (
              <div className="ab-senior-row" key={idx}>
                <div className="ab-senior-trigger">{row.trigger}</div>
                <div className="ab-senior-arrow"><svg viewBox="0 0 24 24">
                  <use href="#impulse-arrow" />
                </svg></div>
                <div className="ab-senior-need">{row.need}</div>
              </div>
            ))}
          </div>

          <div className="ab-senior-foot">
            <p>That is why senior thinking stays close.</p>
            <p className="loud" dangerouslySetInnerHTML={{ __html: aboutData.senior.footLoud }} />
          </div>
        </div>
      </section>

      {/* ============================================================
         8. FOUNDERS
         ============================================================ */}
      <section className="ab-section ab-founders" id="founders">
        <div className="ab-wrap-full">
          <div className="ab-founders-intro">
            <h2 className="ab-founders-h split-text" dangerouslySetInnerHTML={{ __html: aboutData.founders.heading }} />
          </div>
        </div>

        {aboutData.founders.list.map((founder: any, idx: number) => (
          <article className="ab-founder-section" data-side={founder.side} key={idx}>
            <span className="ab-founder-ghost-name" aria-hidden="true">{founder.ghostName}</span>

            <div className="ab-founder-grid">
              <div className="ab-founder-portrait-wrap">
                <div className="ab-founder-portrait-mark" aria-hidden="true">
                  <svg viewBox="801 344 274 272">
                    <path className="ab-mark-glow ab-mark-glow-outer"
                      d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                    <path className="ab-mark-glow ab-mark-glow-mid"
                      d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                    <path className="ab-mark-glow ab-mark-glow-inner"
                      d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                    <path className="ab-mark-fill"
                      d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
                  </svg>
                </div>
                <div className="ab-founder-portrait" data-portrait>
                  <img src={founder.img} alt={founder.alt} width={founder.width} height={founder.height} loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="ab-founder-copy-wrap">
                <h3 className="ab-founder-name">{founder.name}</h3>
                <p className="ab-founder-headline">{founder.headline}</p>
                <p className="ab-founder-body">{founder.body}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ============================================================
         9. FIT
         ============================================================ */}
      <section className="ab-section ab-fit">
        <div className="ab-wrap-full">

          <div className="ab-fit-head">
            <h2 className="ab-fit-h split-text" dangerouslySetInnerHTML={{ __html: aboutData.fit.heading }} />
          </div>

          <div className="ab-fit-split">
            <div className="ab-fit-pane warn">
              <p>{aboutData.fit.warn}</p>
            </div>
            <div className="ab-fit-pane yes">
              <p>{aboutData.fit.yes}</p>
            </div>
          </div>

          <p className="ab-clarity-h-sub" style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto 4rem" }}>{aboutData.fit.subheading}</p>

          <div className="ab-fit-attrs">
            {aboutData.fit.attrs.map((attr: string, idx: number) => (
              <div className="ab-fit-attr" key={idx}>{attr}</div>
            ))}
          </div>

          <p className="ab-fit-close">{aboutData.fit.close}</p>
        </div>
      </section>

      {/* ============================================================
        10. FINAL CTA
         ============================================================ */}
      <section className="ab-section ab-final glass-panel" id="connect">
        <div className="ab-final-mark" aria-hidden="true">
          <svg viewBox="801 344 274 272">
            <use href="#impulse-mark" />
          </svg>
        </div>
        <div className="ab-final-inner">
          <div className="ab-wrap-narrow">
            <div className="ab-final-card">
              <div className="ab-final-stack">
                {aboutData.final.stack.map((item: string, idx: number) => (
                  <div className="row" key={idx}>{item}</div>
                ))}
              </div>
              <div className="ab-final-cta-row">
                <Link href={aboutData.final.cta.link} className="btn" data-cursor="START">
                  <span className="btn-text">{aboutData.final.cta.text}</span>
                  <div className="btn-fill"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
