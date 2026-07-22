'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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
      }
      modifiedHref = `/ae${mappedHref}`;
    }

    return <Link ref={ref} href={modifiedHref} {...props} />;
  }
);

RegionLink.displayName = 'RegionLink';

export default RegionLink;
