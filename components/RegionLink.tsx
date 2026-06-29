'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

/**
 * RegionLink acts exactly like Next.js <Link>, but automatically prepends /uae 
 * to internal URLs if the user is currently browsing the /uae/ region.
 */
const RegionLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(
  ({ href, ...props }, ref) => {
    const pathname = usePathname() || '';
    const isUae = pathname.startsWith('/uae');

    // Only modify internal relative paths (starting with /)
    let modifiedHref = href;
    if (isUae && typeof href === 'string' && href.startsWith('/') && !href.startsWith('/uae')) {
      modifiedHref = `/uae${href === '/' ? '' : href}`;
    }

    return <Link ref={ref} href={modifiedHref} {...props} />;
  }
);

RegionLink.displayName = 'RegionLink';

export default RegionLink;
