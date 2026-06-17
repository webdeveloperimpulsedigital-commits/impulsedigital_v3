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

  return (
    <main className="resources-page" id="main-content">
      <div className="resources-container">
        
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
