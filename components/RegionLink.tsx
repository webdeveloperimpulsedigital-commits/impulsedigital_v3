'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const seoMap: Record<string, string> = {
  'mumbai': 'uae',
  'navi-mumbai': 'abu-dhabi',
  'thane': 'sharjah',
  'andheri': 'deira',
  'ghansoli': 'ajman',
  'vashi': 'al-ain',
  'borivali': 'ras-al-khaimah',
  'malad': 'fujairah',
  'mansarovar': 'business-bay',
};

/**
 * RegionLink acts exactly like Next.js <Link>, but automatically prepends /ae 
 * to internal URLs if the user is currently browsing the /ae/ region.
 */
const RegionLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(
  ({ href, ...props }, ref) => {
    const pathname = usePathname() || '';
    const isAe = pathname.startsWith('/ae');

    // Only modify internal relative paths (starting with /)
    let modifiedHref = href;
    if (isAe && typeof href === 'string' && href.startsWith('/') && !href.startsWith('/ae')) {
      let mappedHref = href === '/' ? '' : href;
      if (mappedHref === '/digital-marketing-agency-in-india/') {
        mappedHref = '/digital-marketing-agency-in-uae/';
      } else if (mappedHref === '/digital-marketing-agency-in-india') {
        mappedHref = '/digital-marketing-agency-in-uae';
      } else if (mappedHref === '/digital-marketing-agency-in-thane/') {
        mappedHref = '/digital-marketing-agency-in-abu-dhabi/';
      } else if (mappedHref === '/digital-marketing-agency-in-thane') {
        mappedHref = '/digital-marketing-agency-in-abu-dhabi';
      } else if (mappedHref === '/digital-marketing-agency-in-navi-mumbai/') {
        mappedHref = '/digital-marketing-agency-in-sharjah/';
      } else if (mappedHref === '/digital-marketing-agency-in-navi-mumbai') {
        mappedHref = '/digital-marketing-agency-in-sharjah';
      } else if (mappedHref === '/digital-marketing-agency-in-pune/') {
        mappedHref = '/digital-marketing-agency-in-ajman/';
      } else if (mappedHref === '/digital-marketing-agency-in-pune') {
        mappedHref = '/digital-marketing-agency-in-ajman';
      } else if (mappedHref.startsWith('/brand-infrastructure/search-engine-optimisation/')) {
        const parts = mappedHref.split('/').filter(Boolean);
        const city = parts[2];
        if (city && seoMap[city]) {
          mappedHref = `/brand-infrastructure/search-engine-optimisation/${seoMap[city]}${mappedHref.endsWith('/') ? '/' : ''}`;
        }
      }
      modifiedHref = `/ae${mappedHref}`;
    }

    return <Link ref={ref} href={modifiedHref} {...props} />;
  }
);

RegionLink.displayName = 'RegionLink';

export default RegionLink;
