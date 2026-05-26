/**
 * Global type declarations for CDN-injected browser libraries.
 *
 * These are loaded in app/layout.tsx via <Script strategy="afterInteractive">,
 * so they are NOT available at SSR time — only in browser contexts.
 * All access must be guarded: `if (typeof window !== 'undefined') ...`
 */

interface Window {
  /** GSAP animation library — https://greensock.com/gsap/ */
  gsap: any;
  /** GSAP ScrollTrigger plugin */
  ScrollTrigger: any;
  /** Three.js — https://threejs.org/ */
  THREE: any;
  /** SplitType — text splitting library */
  SplitType: any;
  /** Lenis smooth scroll instance */
  globalLenis: any;
  /** Three.js particles material (custom) */
  particlesMaterial: any;
  /** Custom impulse background controller */
  impulseBackground: {
    resetForRoute?: (pathname: string) => void;
  };
  /** Vanilla-tilt library */
  VanillaTilt: any;
  /** Google Tag Manager data layer */
  dataLayer: any[];
  /** Google Analytics */
  gtag: (...args: any[]) => void;
  /** Zoho SalesIQ */
  $zoho: any;
}
