'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { slideshareData } from '@/data/slidesharePpts';
import PdfThumbnail from '@/components/PdfThumbnail';
import '@/app/styles/resources.css';

export const CATEGORIES = [
  { name: 'All PPTs', slug: '' },
  { name: 'Social Media PPT', slug: 'social-media' },
  { name: 'Google Ads / SEM PPT', slug: 'google-ads-sem' },
  { name: 'Content Marketing PPT', slug: 'content-marketing' },
  { name: 'Employer Branding PPT', slug: 'employer-branding' },
  { name: 'Website Design Development PPT', slug: 'website-design-development' }
];

export default function PPTGalleryClient() {
  const params = useParams();

  // The current active slug from the URL (e.g., 'social-media')
  const categoryParam = params?.category;
  const currentSlug = Array.isArray(categoryParam) ? categoryParam[0] : (categoryParam || '');

  // Find the category object that matches the current slug
  const activeCategoryObj = CATEGORIES.find(c => c.slug === currentSlug) || CATEGORIES[0];
  const activeCategoryName = activeCategoryObj.name;

  // Filter the PPTs based on the active category
  let filteredPPTs = slideshareData;
  if (activeCategoryName !== 'All PPTs') {
    filteredPPTs = slideshareData.filter((ppt: any) => ppt.category === activeCategoryName);
  }

  // Pagination state
  const [visibleCount, setVisibleCount] = useState(8);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(8);
  }, [currentSlug]);

  const visiblePPTs = filteredPPTs.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const CATEGORY_CONTENT: Record<string, { h1: string; p1: string; p2: React.ReactNode }> = {
    'All PPTs': {
      h1: 'Digital Marketing PPT: Presentations and Strategy Decks',
      p1: 'This digital marketing PPT library holds presentations built from real campaign work across enterprise brands, D2C businesses, and B2B organisations. Every digital marketing PowerPoint presentation here breaks down a working framework rather than a generic theory slide, covering social media strategy, content marketing, SEO, Google Ads, employer branding, and website development.',
      p2: 'Marketing teams, founders, and students use these decks to see what actually moved a campaign forward, then apply the same structure to their own brand. Browse by category, download the slides relevant to the project at hand, and check back as new presentations get added to the library.'
    },
    'Social Media PPT': {
      h1: 'Social Media PPT: Strategy Presentations and Decks',
      p1: 'Platforms change faster than most strategy decks can keep up with. Every social media PPT in this library comes directly from active campaign work, not a textbook framework, covering what is actually working on Instagram, YouTube, Facebook, and WhatsApp Business right now, not what worked two algorithm updates ago.',
      p2: (
        <>
          This is also where the proof lives. The same strategic thinking behind these decks helped a single LinkedIn post for Grasim Industries (Aditya Birla Group) reach 959,000 impressions and a 31% engagement rate. <Link href="https://www.theimpulsedigital.com/case-studies/" style={{ color: '#fff', textDecoration: 'underline' }}>Read the full case study</Link> to see exactly how that result was built, then download the deck covering the same approach for your own campaign.
        </>
      )
    },
    'Content Marketing PPT': {
      h1: 'Content Marketing PPT: Strategy Presentations and Decks',
      p1: 'Content marketing is the only channel in this library where the work still earns attention after the budget stops. A paid campaign ends the day spend ends. A social post has a shelf life measured in hours. Every content marketing PPT here is built around the opposite principle, content that keeps earning search visibility, trust, and leads long after it was published.',
      p2: 'That same content-led thinking sits behind a 737% increase in organic traffic for Qure.ai, where content built around real buyer questions, not keyword density, is what made that growth compound rather than plateau. Browse the decks covering blog strategy, SEO content, B2B frameworks, content calendars, and brand storytelling, and apply the same long-term thinking to your own content library.'
    },
    'Employer Branding PPT': {
      h1: 'Employer Branding PPT: Strategy Presentations and Decks',
      p1: 'Every other channel in this library tries to convince someone who has never worked here. Employer branding has to convince people who already have, your own employees, before a single candidate ever reads the message. An employer branding PPT that skips this step becomes a glossy claim a Glassdoor review can quietly undo within a month.',
      p2: "This is the same thinking behind more than 9.5 million impressions and over 1.2 million views on Amazon's Unplugged podcast, a result built on EVP work grounded in real qualitative research, not assumptions about what employees want to hear.Download the frameworks covering EVP development, candidate journey mapping, and culture storytelling, and test them against what your own team would actually say about working there."
    },
    'Google Ads / SEM PPT': {
      h1: 'Google Ads PPT: SEM Presentations and Strategy Decks',
      p1: 'Every Google Ads PPT in this library comes from campaigns where the result was visible within days, not guessed at over a quarter. Paid search does not give a strategist the slow feedback loop of a content calendar. A wrong bid, the wrong match type, or a weak landing page shows up as wasted spend before the week is out.',
      p2: 'That immediacy is what these decks are built around, what actually moves cost-per-acquisition and quality score, not theory borrowed from a channel where cause and effect are harder to trace. Download the frameworks covering search campaigns, Shopping, display, and Performance Max, and test them against your own account before your next budget review, not after it.'
    },
    'Website Design Development PPT': {
      h1: 'Web Design and Development PPT: Presentations and Strategy Decks',
      p1: 'Every other category in this library is about earning attention, on social, in search, through content, or as a candidate. A web design and development PPT belongs to a different job entirely, what happens once that attention actually arrives. A slow page or a confusing layout can undo months of work from every other channel in a single visit.',
      p2: 'That difference is why these decks focus on structure before style, page speed, user journeys, and conversion paths that hold up under real traffic, not a portfolio screenshot. Our own e-commerce clients have seen a 30% or higher increase in sales within six months of a redesigned website launch, the kind of result that only shows up when design and development decisions are made together. Download the frameworks covering UX strategy, responsive development, CMS structure, and conversion-focused design, and apply them before your next redesign, not after it underperforms.'
    }
  };

  const currentContent = CATEGORY_CONTENT[activeCategoryName];

  return (
    <main className="resources-page" id="main-content">
      <div className="resources-container">

        {currentContent && (
          <div className="resources-header-box" style={{
            marginBottom: '4rem',
            textAlign: 'center',
            maxWidth: '850px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <h1 className="resources-title-huge" style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              marginBottom: '1.5rem',
              textTransform: 'none',
              fontWeight: 700
            }}>
              {currentContent.h1}
            </h1>
            <p className="resources-subtitle-text" style={{
              textTransform: 'none',
              letterSpacing: 'normal',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              {currentContent.p1}
            </p>
            <p className="resources-subtitle-text" style={{
              textTransform: 'none',
              letterSpacing: 'normal',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              fontWeight: 400
            }}>
              {currentContent.p2}
            </p>
          </div>
        )}

        <div className="resources-layout">
          {/* Sticky Sidebar for Categories */}
          <aside className="resources-sidebar">
            <h3 className="sidebar-title">Categories</h3>
            <div className="resources-tabs-vertical">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/ppt/${cat.slug}`}
                  className={`tab-btn-vertical ${currentSlug === cat.slug ? 'active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </aside>

          {/* Main Grid Content */}
          <div className="resources-main-grid">
            <div className="ppt-simple-grid">
              {visiblePPTs.map((ppt: any) => (
                <a
                  key={ppt.id}
                  href={ppt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ppt-grid-card"
                >
                  <div className="ppt-card-image-wrapper">
                    <PdfThumbnail url={ppt.url} alt={ppt.title} />
                  </div>
                  <div className="ppt-card-content">
                    <h3 className="ppt-card-title">{ppt.title}</h3>
                    <span className="ppt-card-category">{ppt.category}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredPPTs.length && (
              <div className="load-more-container">
                <button onClick={handleLoadMore} className="load-more-btn">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
