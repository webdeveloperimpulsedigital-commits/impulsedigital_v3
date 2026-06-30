import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/siteUrl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import ClientProviders from '@/components/ClientProviders';
import ChatbotWrapper from '@/components/Chatbot/ChatbotWrapper';
import InteractionLoader from '@/components/InteractionLoader';
import GlobalFAQSchema from '@/components/GlobalFAQSchema';
import './globals.css';
import './styles/resources.css';

import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const region = headersList.get('x-region') || 'in';
  const pathname = headersList.get('x-pathname') || '/';
  const isAe = region === 'ae';

  const baseUrl = isAe ? `${SITE_URL}/ae` : SITE_URL;
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  // Dynamically build cross-region URLs for hreflang tags
  const basePath = pathname.startsWith('/ae') 
    ? pathname.replace(/^\/ae/, '') 
    : pathname;
  const normalizedBasePath = basePath || '/';

  let inBasePath = normalizedBasePath;
  let aeBasePath = normalizedBasePath;

  // Custom routing for regional pages
  if (normalizedBasePath === '/digital-marketing-agency-in-india/') {
    aeBasePath = '/digital-marketing-agency-in-uae/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-uae/') {
    inBasePath = '/digital-marketing-agency-in-india/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-thane/') {
    aeBasePath = '/digital-marketing-agency-in-abu-dhabi/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-abu-dhabi/') {
    inBasePath = '/digital-marketing-agency-in-thane/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-navi-mumbai/') {
    aeBasePath = '/digital-marketing-agency-in-sharjah/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-sharjah/') {
    inBasePath = '/digital-marketing-agency-in-navi-mumbai/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-pune/') {
    aeBasePath = '/digital-marketing-agency-in-ajman/';
  } else if (normalizedBasePath === '/digital-marketing-agency-in-ajman/') {
    inBasePath = '/digital-marketing-agency-in-pune/';
  }

  const inUrl = `${SITE_URL}${inBasePath === '/' ? '' : inBasePath}`;
  const aeUrl = `${SITE_URL}/ae${aeBasePath === '/' ? '' : aeBasePath}`;

  return {
    title: {
      default: isAe ? 'Best Digital Marketing Agency in UAE | Impulse Digital' : 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
      template: '%s',
    },
    description: isAe 
      ? 'Impulse Digital is a top digital marketing agency in UAE that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions.'
      : 'Impulse Digital is a top digital marketing agency in Mumbai that helps businesses expand their reach in the digital space with strategy, performance marketing, SEO, social media, content, and creative solutions.',
    keywords: isAe 
      ? ['digital marketing agency in uae', 'digital marketing company', 'impulse digital']
      : ['digital marketing agency in mumbai', 'digital marketing company', 'impulse digital'],
    robots: isAe ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { 
      canonical: canonicalUrl,
      languages: {
        'en-IN': inUrl,
        'en-AE': aeUrl,
        'x-default': inUrl,
      }
    },
    openGraph: {
      type: 'website',
      siteName: 'Impulse Digital',
      title: isAe ? 'Best Digital Marketing Agency in UAE | Impulse Digital' : 'Best Digital Marketing Agency in Mumbai | Impulse Digital',
      description: isAe 
        ? 'Impulse Digital is a top digital marketing agency in UAE helping brands with SEO, social media, performance marketing, content, website development, branding, Agentic AI, and AI video production.'
        : 'Impulse Digital is a top digital marketing agency in Mumbai helping brands with SEO, social media, performance marketing, content, website development, branding, Agentic AI, and AI video production.',
      url: baseUrl,
      images: [{ url: `https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@impulsedigi',
    },
    verification: {
      google: 'L2DP6cEE1zUFFR1Sf-AMVqeFURObeTfpBRPnTOGZ6xw',
    },
    metadataBase: new URL(SITE_URL),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const region = headersList.get('x-region') || 'in';
  const lang = region === 'ae' ? 'en-AE' : 'en-IN';

  return (
    <html lang={lang}>
      <head>
        <GlobalFAQSchema isAe={region === 'ae'} />
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

        {/* Google Analytics directly in head for SEO verification */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EFFQ2YYFN8');
            `,
          }}
        />
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

        {/* Hotjar Tracking Code for https://theimpulsedigital.com */}
        <Script
          id="hotjar-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5340267,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
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
        
        {/* AI Chatbot Widget */}
        <ChatbotWrapper />

        {/* Interaction Loader: Defers heavy animation scripts until user interaction */}
        <InteractionLoader />

        {/* Google Tag Manager and GA are now deferred via InteractionLoader */}
        {/* FontAwesome media switch is deferred via InteractionLoader */}
      </body>
    </html>
  );
}
