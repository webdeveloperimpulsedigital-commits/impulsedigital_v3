1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
6:I[89433,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[79651,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[62319,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[39756,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[37457,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
b:I[36768,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
c:I[56691,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[68027,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0mtcuu7cd2iei.css","style"]
:HL["/fonts/Satoshi-Bold.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/fonts/Satoshi-Regular.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/css/styles.css?v=40","style"]
:HL["/css/about.css?v=4","style"]
:HL["/css/case-study.css?v=27","style"]
:HL["/css/blog.css?v=1","style"]
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
})();5:["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=GTM-M4TW43X3","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]
0:{"P":null,"c":["","ai-marketing-systems","archer-ai",""],"q":"","i":false,"f":[[["",{"children":["ai-marketing-systems",{"children":["archer-ai",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0mtcuu7cd2iei.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/13yqdo_neradn.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"/css/styles.css?v=40"}],["$","link",null,{"rel":"stylesheet","href":"/css/about.css?v=4"}],["$","link",null,{"rel":"stylesheet","href":"/css/case-study.css?v=27"}],["$","link",null,{"rel":"stylesheet","href":"/css/blog.css?v=1"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"gtm-script","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');"}}],["$","noscript",null,{"children":"$5"}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{}],["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$Lb",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lc",null,{}],["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js","strategy":"beforeInteractive"}],"$Ld","$Le","$Lf","$L10","$L11","$L12","$L13","$L14","$L15"]}]]}]]}],{"children":["$L16",{"children":["$L17",{"children":["$L18",{},null,false,null]},null,false,"$@19"]},null,false,"$@19"]},null,false,null],"$L1a",false]],"m":"$undefined","G":["$1b",["$L1c"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"e8Gpe3slCZxwm8fw9cbXM"}
1e:I[64111,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0s79xqs0x55kc.js","/_next/static/chunks/0kp7pg.-h4u_s.js"],"default"]
22:I[97367,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
24:I[97367,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
25:"$Sreact.suspense"
d:["$","$L3",null,{"src":"https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js","strategy":"beforeInteractive"}]
e:["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js","strategy":"beforeInteractive"}]
f:["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js","strategy":"beforeInteractive"}]
10:["$","$L3",null,{"src":"https://unpkg.com/split-type","strategy":"beforeInteractive"}]
11:["$","$L3",null,{"src":"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js","strategy":"afterInteractive"}]
12:["$","$L3",null,{"src":"/js/script.js?v=70","strategy":"afterInteractive"}]
13:["$","$L3",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8","strategy":"lazyOnload"}]
14:["$","$L3",null,{"id":"ga4-init","strategy":"lazyOnload","dangerouslySetInnerHTML":{"__html":"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');"}}]
15:["$","$L3",null,{"id":"fa-media-switch","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"document.querySelectorAll('link[rel=\"stylesheet\"][media=\"print\"]').forEach(function(l){l.media='all';});"}}]
16:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
17:["$","$1","c",{"children":[null,["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
1d:Tc13,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/#service","name":"Archer AI Services","url":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/","description":"Impulse Digital provides Archer AI, an AI-powered outbound intelligence engine that detects buying signals, identifies decision-makers, enriches prospect data, and supports personalised B2B outreach.","serviceType":["Archer AI","AI Outbound Engine","B2B Lead Intelligence","ICP Diagnostic","Prospect Discovery","LinkedIn Outreach","Email Outreach"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Archer AI?","acceptedAnswer":{"@type":"Answer","text":"Archer AI is an AI-powered outbound intelligence engine. It detects buying signals, identifies decision-makers, and deploys personalised outreach to create better B2B sales conversations."}},{"@type":"Question","name":"What is an ICP Diagnostic?","acceptedAnswer":{"@type":"Answer","text":"An ICP Diagnostic is a working session where we map your target industries, buyer titles, company profile, geography, offer, and timing signals. It helps determine whether outbound is the right growth channel for you."}},{"@type":"Question","name":"How is Archer AI different from buying a lead list?","acceptedAnswer":{"@type":"Answer","text":"A lead list is static. Archer AI works from live signals, enriched prospect context, verified contacts, and personalised outreach logic."}},{"@type":"Question","name":"What channels does Archer AI use?","acceptedAnswer":{"@type":"Answer","text":"Archer AI supports email and LinkedIn outreach, configured around your buyer behaviour and campaign strategy."}},{"@type":"Question","name":"How soon can outreach begin?","acceptedAnswer":{"@type":"Answer","text":"The ICP diagnostic and engine build come first. Once the signal map, prospect logic, and messaging system are ready, live outreach can begin."}},{"@type":"Question","name":"Does Archer AI replace my sales team?","acceptedAnswer":{"@type":"Answer","text":"No. Archer AI fills the top of the funnel. Your sales team still handles discovery, qualification, negotiation, and closing."}},{"@type":"Question","name":"What does AI handle?","acceptedAnswer":{"@type":"Answer","text":"AI supports signal detection, prospect discovery, contact enrichment, message variation, sequence logic, and performance analysis."}},{"@type":"Question","name":"What do humans handle?","acceptedAnswer":{"@type":"Answer","text":"Human strategists handle ICP logic, positioning, message quality, brand tone, review, and optimisation."}},{"@type":"Question","name":"Is Archer AI right for every business?","acceptedAnswer":{"@type":"Answer","text":"No. Archer AI works best when the buyer is identifiable, the ICP is clear, the deal size justifies precision, and the market shows signals that can be turned into relevant outreach."}}]}]18:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$1d"}}],["$","$L1e",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/0s79xqs0x55kc.js","async":true,"nonce":"$undefined"}],"$L1f"],"$L20"]}]
21:[]
19:"$W21"
1a:["$","$1","h",{"children":[null,["$","$L22",null,{"children":"$L23"}],["$","div",null,{"hidden":true,"children":["$","$L24",null,{"children":["$","$25",null,{"name":"Next.Metadata","children":"$L26"}]}]}],null]}]
1c:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0mtcuu7cd2iei.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
27:I[97367,["/_next/static/chunks/13yqdo_neradn.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
1f:["$","script","script-1",{"src":"/_next/static/chunks/0kp7pg.-h4u_s.js","async":true,"nonce":"$undefined"}]
20:["$","$L27",null,{"children":["$","$25",null,{"name":"Next.MetadataOutlet","children":"$@28"}]}]
23:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
26:[["$","title","0",{"children":"Archer AI: AI Outbound Sales Agent | Impulse Digital | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","2",{"name":"keywords","content":"archer ai, ai outbound sales agent, b2b outbound ai, impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/"}],["$","meta","5",{"property":"og:title","content":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/img/logo-id-new.webp"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/img/logo-id-new.webp"}]]
28:null
