1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
16:I[68027,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0dvbfi7o62pne.css","style"]
:HL["/_next/static/chunks/0fwx12ld_1jig.css","style"]
:HL["/fonts/Satoshi-Bold.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/fonts/Satoshi-Regular.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap","style"]
:HL["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","style",{"media":"print"}]
2:["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"}]
4:T504,(function(){
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
})();0:{"P":null,"c":["","brand-infrastructure","search-engine-optimisation","local-seo",""],"q":"","i":false,"f":[[["",{"children":["brand-infrastructure",{"children":["search-engine-optimisation",{"children":["local-seo",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0dvbfi7o62pne.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0n__e7jb9u5fz.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"gtm-script","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb","$Lc","$Ld","$Le","$Lf"]}]]}]]}],{"children":["$L10",{"children":["$L11",{"children":["$L12",{"children":["$L13",{},null,false,null]},null,false,"$@14"]},null,false,"$@14"]},null,false,"$@14"]},null,false,null],"$L15",false]],"m":"$undefined","G":["$16",["$L17","$L18"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"5fsN2mvfp1qvRXjDTGAg5"}
1a:I[89433,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[79651,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1c:I[62319,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1d:I[39756,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1e:I[37457,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1f:I[36768,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
20:I[56691,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
21:I[8142,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
22:I[69732,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
29:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
2b:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
2c:"$Sreact.suspense"
19:["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=GTM-M4TW43X3","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]
5:["$","noscript",null,{"children":"$19"}]
6:["$","$L1a",null,{}]
7:["$","$L1b",null,{}]
8:["$","$L1c",null,{}]
9:["$","$L1d",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1e",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L1f",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
a:["$","$L20",null,{}]
b:["$","$L21",null,{}]
c:["$","$L22",null,{}]
d:["$","$L3",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8","strategy":"lazyOnload"}]
e:["$","$L3",null,{"id":"ga4-init","strategy":"lazyOnload","dangerouslySetInnerHTML":{"__html":"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');"}}]
f:["$","$L3",null,{"id":"fa-media-switch","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"document.querySelectorAll('link[rel=\"stylesheet\"][media=\"print\"]').forEach(function(l){l.media='all';});"}}]
10:["$","$1","c",{"children":[null,["$","$L1d",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1e",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
11:["$","$1","c",{"children":[null,["$","$L1d",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1e",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
12:["$","$1","c",{"children":[null,["$","$L1d",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1e",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
23:T1027,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/#service","name":"Local SEO Services","url":"https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/","description":"Impulse Digital provides local SEO services including Google Business Profile optimisation, local keyword targeting, citation building, map ranking improvements, review optimisation, and location-based search visibility.","serviceType":["Local SEO","Google Business Profile Optimisation","Maps SEO","Local Citation Building","Review Optimisation","Location-Based SEO"],"areaServed":"IN","provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","@id":"https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/#faq","url":"https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/","mainEntity":[{"@type":"Question","name":"What is Local SEO and how does it help my business?","acceptedAnswer":{"@type":"Answer","text":"Local SEO focuses on improving your visibility for searches performed in a specific area or for services “near me.” It ensures your business appears in relevant map results, local listings, and search queries made by nearby customers ready to visit or purchase."}},{"@type":"Question","name":"What does Local SEO service with Impulse Digital include?","acceptedAnswer":{"@type":"Answer","text":"Our best Local SEO services cover Google Business Profile optimization, citation management, NAP consistency, local keyword research, on-page and off-page optimization, and review strategy. Each activity is designed to increase visibility, credibility, and foot traffic."}},{"@type":"Question","name":"How do you optimize a Google Business Profile effectively?","acceptedAnswer":{"@type":"Answer","text":"We verify and update all business details including name, address, contact number, and business hours. We also optimize descriptions, categories, photos, and attributes, while managing reviews and Q&A to ensure the profile stays active and trustworthy."}},{"@type":"Question","name":"Why is NAP consistency important for Local SEO?","acceptedAnswer":{"@type":"Answer","text":"Name, address, and phone number consistency signals reliability to search engines. Inconsistent data can confuse both users and algorithms. We audit and correct all citations across listings to maintain complete accuracy and strengthen ranking signals."}},{"@type":"Question","name":"How do you find and target the right local keywords?","acceptedAnswer":{"@type":"Answer","text":"We research search terms specific to your service area and customer intent, such as “best [service] near me” or “[product] in [city].” These keywords are then integrated into your website and Google Business Profile to improve discoverability and engagement."}},{"@type":"Question","name":"Can Local SEO help my business appear in Google’s Map Pack?","acceptedAnswer":{"@type":"Answer","text":"Yes. A combination of profile optimization, local content creation, positive reviews, and citation accuracy increases your likelihood of ranking in the Map Pack. The stronger your overall local authority, the better your placement in local search results."}},{"@type":"Question","name":"How do online reviews impact Local SEO performance?","acceptedAnswer":{"@type":"Answer","text":"Reviews act as signals of trust and relevance. We help you establish a review acquisition plan, monitor feedback, and manage responses to maintain positive sentiment and enhance your business reputation in local searches."}},{"@type":"Question","name":"How do you measure the success of Local SEO efforts?","acceptedAnswer":{"@type":"Answer","text":"We track local keyword rankings, profile insights, calls, direction requests, and leads or conversions. Reports also include traffic trends from nearby areas, helping you understand how effectively Local SEO contributes to business growth."}}]}]13:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$23"}}],"$L24"],["$L25","$L26"],"$L27"]}]
28:[]
14:"$W28"
15:["$","$1","h",{"children":[null,["$","$L29",null,{"children":"$L2a"}],["$","div",null,{"hidden":true,"children":["$","$L2b",null,{"children":["$","$2c",null,{"name":"Next.Metadata","children":"$L2d"}]}]}],null]}]
17:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0dvbfi7o62pne.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
18:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
2e:I[96809,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0~tqumru6nr_r.js","/_next/static/chunks/0szj25mljqim8.js"],"default"]
2f:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
24:["$","$L2e",null,{}]
25:["$","script","script-0",{"src":"/_next/static/chunks/0~tqumru6nr_r.js","async":true,"nonce":"$undefined"}]
26:["$","script","script-1",{"src":"/_next/static/chunks/0szj25mljqim8.js","async":true,"nonce":"$undefined"}]
27:["$","$L2f",null,{"children":["$","$2c",null,{"name":"Next.MetadataOutlet","children":"$@30"}]}]
2a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
2d:[["$","title","0",{"children":"Local SEO Services in Mumbai | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital's local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries."}],["$","meta","2",{"name":"keywords","content":"local seo, local seo services, local seo agency mumbai"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/"}],["$","meta","5",{"property":"og:title","content":"Local SEO Services in Mumbai | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital's local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/brand-infrastructure/search-engine-optimisation/local-seo/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Local SEO Services in Mumbai | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital's local SEO services help businesses in Mumbai and across India rank higher in local search results, Google Maps, and location-based queries."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
30:null
