import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/siteUrl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import ClientProviders from '@/components/ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  // Default metadata — overridden by each page's own metadata export
  title: {
    default: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    template: '%s | Impulse Digital',
  },
  description:
    'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions.',
  keywords: ['digital marketing agency in mumbai', 'digital marketing company', 'impulse digital'],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: 'Impulse Digital',
    title: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    description:
      'Impulse Digital is a top digital marketing agency in Mumbai helping brands with SEO, social media, performance marketing, content, website development, branding, Agentic AI, and AI video production.',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/img/logo-id-new.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@impulsedigi',
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/ImpulseDigital_Logo.svg" />

        {/* Font preloads */}
        <link
          rel="preload"
          href="/fonts/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preconnect for Google Fonts (if any inline usage) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* External CSS */}
        <link rel="stylesheet" href="/css/styles.css?v=40" />
        <link rel="stylesheet" href="/css/about.css?v=4" />
        <link rel="stylesheet" href="/css/case-study.css?v=27" />
        <link rel="stylesheet" href="/css/blog.css?v=1" />

        {/* FontAwesome — preload for performance, applied via Script after page loads */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
          media="print"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          media="print"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </noscript>

      </head>
      <body>
        {/* Block Zoho SalesIQ — removes any Zoho elements GTM tries to inject */}
        <Script
          id="block-zoho-salesiq"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  function removeZoho(node){
    if(!node||!node.parentNode)return;
    var src=node.src||'';
    var id=node.id||'';
    var cls=(node.className&&typeof node.className==='string')?node.className:'';
    var label=(node.getAttribute&&node.getAttribute('aria-label'))||'';
    if(src.indexOf('zohopublic')>-1||src.indexOf('salesiq.zoho')>-1||
       id.indexOf('zsiq')>-1||id.indexOf('zsales')>-1||
       id.indexOf('siq_')>-1||id==='siq_chatwindow'||
       cls.indexOf('zsiq')>-1||cls.indexOf('siq_')>-1||
       label.toLowerCase().indexOf('salesiq')>-1){
      node.parentNode.removeChild(node);
    }
  }
  var obs=new MutationObserver(function(muts){
    muts.forEach(function(m){
      m.addedNodes.forEach(function(n){
        removeZoho(n);
        if(n.querySelectorAll){
          n.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],[class*="siq_"],iframe[src*="zohopublic"],script[src*="zohopublic"],iframe[aria-label*="SalesIQ"]')
           .forEach(removeZoho);
        }
      });
    });
  });
  obs.observe(document.documentElement,{childList:true,subtree:true});
  /* Also clean up anything already in the DOM */
  document.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],iframe[aria-label*="SalesIQ"]').forEach(removeZoho);
})();`,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');`,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4TW43X3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Client-side providers: scroll restoration, route animation */}
        <ClientProviders />

        {/* 3D Background, cursor, noise overlay */}
        <Background />

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Vanilla-tilt */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"
          strategy="beforeInteractive"
        />

        {/* Lenis smooth scroll */}
        <Script
          src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"
          strategy="beforeInteractive"
        />

        {/* GSAP core */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="beforeInteractive"
        />

        {/* GSAP ScrollTrigger — after GSAP loads */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />

        {/* SplitType */}
        <Script
          src="https://unpkg.com/split-type"
          strategy="beforeInteractive"
        />

        {/* Three.js — loaded after interactive to not block LCP */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="afterInteractive"
        />

        {/* WebGL Canvas Particles & Animations script */}
        <Script
          src="/js/script.js?v=70"
          strategy="afterInteractive"
        />


        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8"
          strategy="lazyOnload"
        />
        <Script
          id="ga4-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');`,
          }}
        />
        {/* FontAwesome — switch from print to all media after load */}
        <Script
          id="fa-media-switch"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll('link[rel="stylesheet"][media="print"]').forEach(function(l){l.media='all';});`,
          }}
        />
      </body>
    </html>
  );
}
