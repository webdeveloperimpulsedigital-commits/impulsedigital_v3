'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { getMarketDestination } from '@/seo/registries/pages';

/**
 * RegionLink acts exactly like Next.js <Link>, but automatically prepends /ae 
 * to internal URLs if the user is currently browsing the /ae/ region.
 */
const RegionLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(
  ({ href, ...props }, ref) => {
    const pathname = usePathname() || '';
    const isAe = pathname.startsWith('/ae');

    // Only modify internal relative paths. The publication registry prevents
    // links from fabricating a market counterpart that does not exist.
    let modifiedHref = href;
    if (isAe && typeof href === 'string' && href.startsWith('/') && !href.startsWith('/ae')) {
      modifiedHref = getMarketDestination(href, 'ae');
    }

    return <Link ref={ref} href={modifiedHref} {...props} />;
  }
);

RegionLink.displayName = 'RegionLink';

export default RegionLink;
