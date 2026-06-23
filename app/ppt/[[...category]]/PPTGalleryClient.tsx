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

  const CATEGORY_CONTENT: Record<string, { h1: string; p1: string; p2: string }> = {
    'All PPTs': {
      h1: 'Digital Marketing PPT: Free Presentations and Strategy Decks',
      p1: 'Every digital marketing PowerPoint presentation in this library is built from real campaign experience across enterprise brands, D2C businesses, and B2B organisations.',
      p2: 'Browse free digital marketing PPT decks covering social media strategy, content marketing, Google Ads, SEO, employer branding, and website development. Download, share, and apply the frameworks your team needs.'
    },
    'Social Media PPT': {
      h1: 'Social Media PPT: Free Strategy Presentations and Decks',
      p1: 'Every social media PowerPoint presentation in this library draws from live campaign work across enterprise brands, D2C businesses, and high-growth organisations in India.',
      p2: 'Browse free social media PPT decks covering Instagram strategy, YouTube marketing, Facebook advertising, WhatsApp Business, and social selling. Download, share, and apply what your team needs.'
    },
    'Content Marketing PPT': {
      h1: 'Content Marketing PPT: Free Strategy Presentations and Decks',
      p1: 'Every content marketing PowerPoint presentation in this library is built from real execution work across B2B brands, enterprise organisations, and D2C businesses in India.',
      p2: 'Browse free content marketing PPT decks covering blog strategy, SEO content, B2B content frameworks, content calendars, and brand storytelling. Download, share, and apply what your team needs.'
    },
    'Employer Branding PPT': {
      h1: 'Employer Branding PPT: Free Strategy Presentations and Decks',
      p1: 'Every employer branding PowerPoint presentation in this library draws from live mandates with enterprise organisations, including work on EVP design, employee advocacy, and recruitment marketing.',
      p2: 'Browse free employer branding PPT decks covering EVP strategy, talent attraction, culture storytelling, and recruitment campaigns. Download, share, and apply what your team needs.'
    },
    'Google Ads / SEM PPT': {
      h1: 'Google Ads PPT: Free SEM Presentations and Strategy Decks',
      p1: 'Every Google Ads PowerPoint presentation in this library is built from live SEM campaign work across D2C brands, enterprise businesses, and B2B organisations in India.',
      p2: 'Browse free Google Ads PPT decks covering search campaigns, display advertising, Shopping ads, Performance Max, and SEM strategy. Download, share, and apply what your team needs.'
    },
    'Website Design Development PPT': {
      h1: 'Web Design and Development PPT: Free Presentations and Strategy Decks',
      p1: 'Every web design and development PowerPoint presentation in this library is drawn from live build and optimisation work across enterprise websites, D2C stores, and B2B platforms in India.',
      p2: 'Browse free web design and development PPT decks covering UX strategy, conversion optimisation, website architecture, and development best practices. Download, share, and apply what your team needs.'
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
