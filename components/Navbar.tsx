'use client';

import React, { useState, useEffect } from 'react';
import Link from '@/components/RegionLink';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownSuspended, setIsDropdownSuspended] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    // iOS Safari: globalLenis is null (we skip Lenis on iOS)
    // Always guard lenis calls with null check
    const toggleLenis = (stop: boolean) => {
      const lenis = (window as any).globalLenis;
      if (!lenis) return true; // null = iOS native scroll, nothing to toggle
      if (stop) lenis.stop();
      else lenis.start();
      return true;
    };

    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add('mobile-menu-active');
      toggleLenis(true);
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
      document.body.classList.remove('mobile-menu-active');
      document.body.style.top = '';
      delete document.body.dataset.scrollY;
      // Restore scroll — must happen AFTER removing position:fixed
      // Use requestAnimationFrame on iOS to ensure layout is recalculated first
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
      // Small delay before restarting Lenis to avoid position jump on non-iOS
      setTimeout(() => { toggleLenis(false); }, 50);
    }

    return () => {
      const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
      document.body.classList.remove('mobile-menu-active');
      document.body.style.top = '';
      delete document.body.dataset.scrollY;
      if (scrollY > 0) {
        requestAnimationFrame(() => { window.scrollTo(0, scrollY); });
      }
      toggleLenis(false);
    };
  }, [isMobileMenuOpen]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setOpenSubMenu(null);
  };

  const handleNavClick = () => {
    closeMobileMenu();
  };

  const handleDropdownNavClick = () => {
    closeMobileMenu();
    if (window.innerWidth > 1024) {
      setIsDropdownSuspended(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownSuspended(false);
  };

  const toggleSubMenu = (menu: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setOpenSubMenu(openSubMenu === menu ? null : menu);
    }
  };

  return (
    <>
      <style>{`
      .region-dropdown-item:hover {
        background: rgba(138, 92, 246, 0.2);
      }
    `}</style>
      <nav id="main-nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link href="/" className="logo" onClick={handleNavClick}>
              <img src="/ImpulseDigital_Logo.svg" alt={`Impulse Digital - Leading Digital Marketing Agency in ${pathname === '/ae' || pathname === '/ae/' ? 'Dubai' : 'Mumbai'}`} width={110} height={110} />
            </Link>

          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} data-lenis-prevent="true">
            <Link href="/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Home</Link>
            <Link href="/about-us/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>About Us</Link>
            <div className="nav-dropdown" onMouseLeave={handleDropdownMouseLeave}>
              <a
                href="#"
                className={`nav-item services-toggle ${isMobileServicesOpen ? 'active' : ''}`}
                data-cursor="GO"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth <= 1024) {
                    setIsMobileServicesOpen(!isMobileServicesOpen);
                  }
                }}
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className={`dropdown-content ${isMobileServicesOpen ? 'mobile-expanded' : ''}`} style={(!isMobileServicesOpen && isDropdownSuspended) ? { display: 'none' } : {}}>
                <div className="dropdown-col">
                  <div className={`dropdown-col-title ${openSubMenu === 'growth' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Link href="/growth-intelligence/" onClick={handleDropdownNavClick} style={{ textDecoration: 'none', flex: 1, paddingRight: '1rem' }}>
                      <span style={{ background: 'linear-gradient(90deg, #b829ea 0%, #e4a2fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                        Growth Intelligence
                      </span>
                    </Link>
                    <button
                      className="submenu-toggle"
                      onClick={(e) => toggleSubMenu('growth', e)}
                      aria-label="Toggle Growth Intelligence submenu"
                    >
                      {openSubMenu === 'growth' ? '−' : '+'}
                    </button>
                  </div>
                  <div className={`dropdown-list ${openSubMenu === 'growth' ? 'mobile-open' : ''}`}>
                    <Link href="/growth-intelligence/customer-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Customer Intelligence</Link>
                    <Link href="/growth-intelligence/market-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Market and Competitive Intelligence</Link>
                    <Link href="/growth-intelligence/social-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Always-On Intelligence</Link>
                    <Link href="/growth-intelligence/campaign-intelligence/" className="dropdown-item" onClick={handleDropdownNavClick}>Campaign and Performance Intelligence</Link>
                  </div>
                </div>
                <div className="dropdown-col">
                  <div className={`dropdown-col-title ${openSubMenu === 'ai' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Link href="/ai-marketing-systems/" onClick={handleDropdownNavClick} style={{ textDecoration: 'none', flex: 1, paddingRight: '1rem' }}>
                      <span style={{ background: 'linear-gradient(90deg, #b829ea 0%, #e4a2fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                        AI Marketing Systems
                      </span>
                    </Link>
                    <button
                      className="submenu-toggle"
                      onClick={(e) => toggleSubMenu('ai', e)}
                      aria-label="Toggle AI Marketing Systems submenu"
                    >
                      {openSubMenu === 'ai' ? '−' : '+'}
                    </button>
                  </div>
                  <div className={`dropdown-list ${openSubMenu === 'ai' ? 'mobile-open' : ''}`}>
                    <Link href="/ai-marketing-systems/archer-ai/" className="dropdown-item" onClick={handleDropdownNavClick}>Archer AI</Link>
                    <Link href="/ai-marketing-systems/agentic-ai/" className="dropdown-item" onClick={handleDropdownNavClick}>Agentic AI</Link>
                    <Link href="/ai-marketing-systems/ai-video-production/" className="dropdown-item" onClick={handleDropdownNavClick}>AI Video Production</Link>
                    <Link href="/ai-marketing-systems/generative-search-optimisation/" className="dropdown-item" onClick={handleDropdownNavClick}>Generative Search Optimisation</Link>
                  </div>
                </div>
                <div className="dropdown-col">
                  <div className={`dropdown-col-title ${openSubMenu === 'brand' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Link href="/brand-infrastructure/" onClick={handleDropdownNavClick} style={{ textDecoration: 'none', flex: 1, paddingRight: '1rem' }}>
                      <span style={{ background: 'linear-gradient(90deg, #b829ea 0%, #e4a2fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                        Brand Infrastructure
                      </span>
                    </Link>
                    <button
                      className="submenu-toggle"
                      onClick={(e) => toggleSubMenu('brand', e)}
                      aria-label="Toggle Brand Infrastructure submenu"
                    >
                      {openSubMenu === 'brand' ? '−' : '+'}
                    </button>
                  </div>
                  <div className={`dropdown-list ${openSubMenu === 'brand' ? 'mobile-open' : ''}`}>
                    <Link href="/brand-infrastructure/search-engine-optimisation/" className="dropdown-item" onClick={handleDropdownNavClick}>Search Engine Optimization</Link>
                    <Link href="/brand-infrastructure/social-media-marketing/" className="dropdown-item" onClick={handleDropdownNavClick}>Social Media</Link>
                    <Link href="/brand-infrastructure/video-production/" className="dropdown-item" onClick={handleDropdownNavClick}>Video Production</Link>
                    <Link href="/brand-infrastructure/website-development/" className="dropdown-item" onClick={handleDropdownNavClick}>Website Development</Link>
                    <Link href="/brand-infrastructure/branding/" className="dropdown-item" onClick={handleDropdownNavClick}>Brand Identity</Link>
                    <Link href="/brand-infrastructure/employer-branding/" className="dropdown-item" onClick={handleDropdownNavClick}>Employer Branding</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/case-studies/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Case Studies</Link>
            <a href="/blog/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Blogs</a>
            <Link href="/careers/" className="nav-item" data-cursor="GO" onClick={handleNavClick}>Careers</Link>
            <Link href="/contact-us/" className="nav-item mobile-contact-item" data-cursor="HI" onClick={handleNavClick}>Contact Us</Link>
          </div>
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/contact-us/" className="btn-nav" data-cursor="HI" onClick={handleNavClick}>Contact Us</Link>

            {/* Region Switcher Dropdown */}
            <div
              className="region-dropdown-container"
              style={{ position: 'relative', height: '100%', display: 'block', alignItems: 'center' }}
              onMouseEnter={() => setIsRegionDropdownOpen(true)}
              onMouseLeave={() => setIsRegionDropdownOpen(false)}
            >
              <button
                className="region-btn"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '0.5rem'
                }}
                aria-label="Select Region"
              >
                {pathname?.startsWith('/uae') ? (
                  <><img src="https://flagcdn.com/w20/ae.png" alt="UAE" width="20" /> UAE</>
                ) : (
                  <><img src="https://flagcdn.com/w20/in.png" alt="India" width="20" /> IN</>
                )}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '2px', transform: isRegionDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isRegionDropdownOpen && (
                <div className="region-dropdown-menu" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(20, 10, 40, 0.98)',
                  border: '1px solid rgba(138, 92, 246, 0.3)',
                  borderRadius: '8px',
                  padding: '8px 0',
                  /* Removed marginTop to close the hover gap, ensuring smooth interaction */
                  minWidth: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 100,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}>
                  {/* Bridge to prevent mouse leave when moving cursor down */}
                  <div style={{ position: 'absolute', top: '-10px', left: 0, width: '100%', height: '10px', background: 'transparent' }} />

                  <NextLink
                    href="/"
                    style={{ padding: '8px 16px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}
                    className="region-dropdown-item"
                    onClick={() => setIsRegionDropdownOpen(false)}
                  >
                    <img src="https://flagcdn.com/w20/in.png" alt="India" width="20" /> India
                  </NextLink>
                  <NextLink
                    href="/uae/"
                    style={{ padding: '8px 16px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}
                    className="region-dropdown-item"
                    onClick={() => setIsRegionDropdownOpen(false)}
                  >
                    <img src="https://flagcdn.com/w20/ae.png" alt="UAE" width="20" /> UAE
                  </NextLink>
                </div>
              )}
            </div>

            <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
