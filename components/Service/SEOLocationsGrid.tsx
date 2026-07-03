// @ts-nocheck
'use client';


import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/RegionLink';
import { seoLocations } from '@/data/seoLocationsList';
import { aeSeoLocations } from '@/data/aeSeoLocationsList';

export const SEOLocationsGrid: React.FC<{ currentLocation?: string }> = ({ currentLocation }) => {
  const pathname = usePathname() || '';
  const isAe = pathname.startsWith('/ae');
  const [isOpen, setIsOpen] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listToUse = isAe ? aeSeoLocations : seoLocations;
  const locationsToShow = listToUse.filter(loc => loc.name !== currentLocation);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="svc-section" style={{ paddingBottom: '8rem', position: 'relative', zIndex: 9999, overflow: 'visible' }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <h2 className="svc-h2" style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            textAlign: 'center',
            margin: '0 auto 3.5rem auto',
            width: '100%',
            padding: 0
          }}>
            Explore More <span style={{ color: 'var(--impulse-violet)' }}>Locations</span>
          </h2>
        </div>

        <style>{`
          .loc-dropdown-container {
            max-width: 400px;
            margin: 0 auto;
            position: relative;
            z-index: 99999;
          }
          
          .loc-dropdown-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.2rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: var(--white);
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            font-family: var(--font-heading);
            font-size: 1.2rem;
            letter-spacing: 0.5px;
            user-select: none;
          }

          .loc-dropdown-header:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(124, 58, 237, 0.5);
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
          }

          .loc-dropdown-icon {
            transition: transform 0.3s ease;
          }

          .loc-dropdown-icon.open {
            transform: rotate(180deg);
          }

          .loc-dropdown-list {
            position: absolute;
            top: calc(100% + 0.5rem);
            bottom: auto;
            left: 0;
            width: 100%;
            background: #0f0f0f;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            max-height: 450px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
            overscroll-behavior: auto !important;
            z-index: 99999;
          }

          .loc-dropdown-list.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          /* Custom Scrollbar for dropdown */
          .loc-dropdown-list::-webkit-scrollbar {
            width: 8px;
          }
          .loc-dropdown-list::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
            margin: 4px 0;
          }
          .loc-dropdown-list::-webkit-scrollbar-thumb {
            background: rgba(124, 58, 237, 0.6);
            border-radius: 8px;
            border: 2px solid rgba(15, 15, 15, 0.98);
          }
          .loc-dropdown-list::-webkit-scrollbar-thumb:hover {
            background: rgba(124, 58, 237, 0.9);
          }

          .loc-dropdown-item {
            display: block;
            padding: 1rem 2rem;
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-family: var(--font-heading);
            font-size: 1.1rem;
            transition: all 0.2s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .loc-dropdown-item:last-child {
            border-bottom: none;
          }

          .loc-dropdown-item:hover {
            background: rgba(124, 58, 237, 0.15);
            color: #fff;
            padding-left: 2.5rem;
          }

          .loc-show-all-btn {
            display: block;
            width: 100%;
            padding: 1rem 2rem;
            color: var(--impulse-violet);
            background: rgba(124, 58, 237, 0.05);
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-family: var(--font-heading);
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
            transition: all 0.2s ease;
          }

          .loc-show-all-btn:hover {
            background: rgba(124, 58, 237, 0.15);
            color: #fff;
          }

          @media (max-width: 768px) {
            .loc-dropdown-list {
              position: absolute;
              max-height: 320px;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
              top: calc(100% + 0.5rem);
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
            }
          }
        `}</style>

        <div className="loc-dropdown-container" ref={dropdownRef}>
          <div
            className="loc-dropdown-header"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Select a Location</span>
            <svg
              className={`loc-dropdown-icon ${isOpen ? 'open' : ''}`}
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          <div className={`loc-dropdown-list ${isOpen ? 'open' : ''}`} data-lenis-prevent="true">
            {locationsToShow.slice(0, showAllLocations ? undefined : 5).map((loc) => (
              <Link
                key={loc.slug}
                href={isAe ? `/ae/brand-infrastructure/search-engine-optimisation/${loc.slug}/` : `/brand-infrastructure/search-engine-optimisation/${loc.slug}/`}
                className="loc-dropdown-item"
                onClick={() => setIsOpen(false)}
              >
                {loc.name}
              </Link>
            ))}
            {!showAllLocations && locationsToShow.length > 5 && (
              <button
                className="loc-show-all-btn"
                onClick={() => setShowAllLocations(true)}
              >
                + Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

