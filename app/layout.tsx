import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/siteUrl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import ClientProviders from '@/components/ClientProviders';
<<<<<<< HEAD
=======
import ChatbotWrapper from '@/components/Chatbot/ChatbotWrapper';
import InteractionLoader from '@/components/InteractionLoader';
>>>>>>> 0aabcad7fbd8090666af4869807fde1ee7ec63d0
import './globals.css';

export const metadata: Metadata = {
  // Default metadata — overridden by each page's own metadata export
  title: {
    default: 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
    template: '%s',
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
    images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
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
        <link rel="icon" type="image/png" href="/favicon.png" />

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

        {/* Preconnect for Google Fonts & Tag Manager/Analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />


        {/* External CSS is now imported via globals.css for Next.js minification */}


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
        if (n.nodeType === 1) {
          removeZoho(n);
          if (n.tagName === 'DIV' || n.tagName === 'IFRAME' || n.tagName === 'SCRIPT') {
            n.querySelectorAll('[id*="zsiq"],[id*="siq_"],[class*="zsiq"],[class*="siq_"],iframe[src*="zohopublic"],script[src*="zohopublic"],iframe[aria-label*="SalesIQ"]')
             .forEach(removeZoho);
          }
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
        
<<<<<<< HEAD
        {/* Vanilla-tilt */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"
          strategy="afterInteractive"
        />
=======
        {/* AI Chatbot Widget */}
        <ChatbotWrapper />

        {/* Interaction Loader: Defers heavy animation scripts until user interaction */}
        <InteractionLoader />
>>>>>>> 0aabcad7fbd8090666af4869807fde1ee7ec63d0

        {/* Google Tag Manager and GA are now deferred via InteractionLoader */}
        {/* FontAwesome media switch is deferred via InteractionLoader */}
      </body>
    </html>
  );
}
