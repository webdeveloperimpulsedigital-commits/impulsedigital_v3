1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
15:I[68027,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","ai-marketing-systems","archer-ai",""],"q":"","i":false,"f":[[["",{"children":["ai-marketing-systems",{"children":["archer-ai",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0dvbfi7o62pne.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0n__e7jb9u5fz.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"gtm-script","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M4TW43X3');"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb","$Lc","$Ld","$Le","$Lf"]}]]}]]}],{"children":["$L10",{"children":["$L11",{"children":["$L12",{},null,false,null]},null,false,"$@13"]},null,false,"$@13"]},null,false,null],"$L14",false]],"m":"$undefined","G":["$15",["$L16","$L17"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"5fsN2mvfp1qvRXjDTGAg5"}
19:I[89433,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1a:I[79651,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[62319,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1c:I[39756,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1d:I[37457,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1e:I[36768,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
1f:I[56691,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
20:I[8142,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
21:I[69732,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
23:I[64111,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0s79xqs0x55kc.js","/_next/static/chunks/0szj25mljqim8.js"],"default"]
27:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
29:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
2a:"$Sreact.suspense"
18:["$","iframe",null,{"src":"https://www.googletagmanager.com/ns.html?id=GTM-M4TW43X3","height":"0","width":"0","style":{"display":"none","visibility":"hidden"}}]
5:["$","noscript",null,{"children":"$18"}]
6:["$","$L19",null,{}]
7:["$","$L1a",null,{}]
8:["$","$L1b",null,{}]
9:["$","$L1c",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1d",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L1e",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
a:["$","$L1f",null,{}]
b:["$","$L20",null,{}]
c:["$","$L21",null,{}]
d:["$","$L3",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8","strategy":"lazyOnload"}]
e:["$","$L3",null,{"id":"ga4-init","strategy":"lazyOnload","dangerouslySetInnerHTML":{"__html":"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EFFQ2YYFN8');"}}]
f:["$","$L3",null,{"id":"fa-media-switch","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"document.querySelectorAll('link[rel=\"stylesheet\"][media=\"print\"]').forEach(function(l){l.media='all';});"}}]
10:["$","$1","c",{"children":[null,["$","$L1c",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1d",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
11:["$","$1","c",{"children":[null,["$","$L1c",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1d",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
22:Tc13,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/#service","name":"Archer AI Services","url":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/","description":"Impulse Digital provides Archer AI, an AI-powered outbound intelligence engine that detects buying signals, identifies decision-makers, enriches prospect data, and supports personalised B2B outreach.","serviceType":["Archer AI","AI Outbound Engine","B2B Lead Intelligence","ICP Diagnostic","Prospect Discovery","LinkedIn Outreach","Email Outreach"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Archer AI?","acceptedAnswer":{"@type":"Answer","text":"Archer AI is an AI-powered outbound intelligence engine. It detects buying signals, identifies decision-makers, and deploys personalised outreach to create better B2B sales conversations."}},{"@type":"Question","name":"What is an ICP Diagnostic?","acceptedAnswer":{"@type":"Answer","text":"An ICP Diagnostic is a working session where we map your target industries, buyer titles, company profile, geography, offer, and timing signals. It helps determine whether outbound is the right growth channel for you."}},{"@type":"Question","name":"How is Archer AI different from buying a lead list?","acceptedAnswer":{"@type":"Answer","text":"A lead list is static. Archer AI works from live signals, enriched prospect context, verified contacts, and personalised outreach logic."}},{"@type":"Question","name":"What channels does Archer AI use?","acceptedAnswer":{"@type":"Answer","text":"Archer AI supports email and LinkedIn outreach, configured around your buyer behaviour and campaign strategy."}},{"@type":"Question","name":"How soon can outreach begin?","acceptedAnswer":{"@type":"Answer","text":"The ICP diagnostic and engine build come first. Once the signal map, prospect logic, and messaging system are ready, live outreach can begin."}},{"@type":"Question","name":"Does Archer AI replace my sales team?","acceptedAnswer":{"@type":"Answer","text":"No. Archer AI fills the top of the funnel. Your sales team still handles discovery, qualification, negotiation, and closing."}},{"@type":"Question","name":"What does AI handle?","acceptedAnswer":{"@type":"Answer","text":"AI supports signal detection, prospect discovery, contact enrichment, message variation, sequence logic, and performance analysis."}},{"@type":"Question","name":"What do humans handle?","acceptedAnswer":{"@type":"Answer","text":"Human strategists handle ICP logic, positioning, message quality, brand tone, review, and optimisation."}},{"@type":"Question","name":"Is Archer AI right for every business?","acceptedAnswer":{"@type":"Answer","text":"No. Archer AI works best when the buyer is identifiable, the ICP is clear, the deal size justifies precision, and the market shows signals that can be turned into relevant outreach."}}]}]12:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$22"}}],["$","$L23",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/0s79xqs0x55kc.js","async":true,"nonce":"$undefined"}],"$L24"],"$L25"]}]
26:[]
13:"$W26"
14:["$","$1","h",{"children":[null,["$","$L27",null,{"children":"$L28"}],["$","div",null,{"hidden":true,"children":["$","$L29",null,{"children":["$","$2a",null,{"name":"Next.Metadata","children":"$L2b"}]}]}],null]}]
16:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0dvbfi7o62pne.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
17:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
2c:I[97367,["/_next/static/chunks/0n__e7jb9u5fz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
24:["$","script","script-1",{"src":"/_next/static/chunks/0szj25mljqim8.js","async":true,"nonce":"$undefined"}]
25:["$","$L2c",null,{"children":["$","$2a",null,{"name":"Next.MetadataOutlet","children":"$@2d"}]}]
28:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
2b:[["$","title","0",{"children":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","2",{"name":"keywords","content":"archer ai, ai outbound sales agent, b2b outbound ai, impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/"}],["$","meta","5",{"property":"og:title","content":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
2d:null
