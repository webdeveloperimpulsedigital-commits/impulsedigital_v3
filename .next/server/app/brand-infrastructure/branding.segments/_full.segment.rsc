1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
11:I[68027,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0-l1_spz2e8sc.css","style"]
:HL["/_next/static/chunks/0fwx12ld_1jig.css","style"]
:HL["/fonts/Satoshi-Bold.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["/fonts/Satoshi-Regular.woff2","font",{"crossOrigin":"anonymous","type":"font/woff2"}]
:HL["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap","style"]
:HL["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","style",{"media":"print"}]
2:["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"}]
4:T56f,(function(){
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
})();0:{"P":null,"c":["","brand-infrastructure","branding",""],"q":"","i":false,"f":[[["",{"children":["brand-infrastructure",{"children":["branding",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/14l0kiv22th03.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"hotjar-tracking","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n              (function(h,o,t,j,a,r){\n                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                  h._hjSettings={hjid:5340267,hjsv:6};\n                  a=o.getElementsByTagName('head')[0];\n                  r=o.createElement('script');r.async=1;\n                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                  a.appendChild(r);\n              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n            "}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb"]}]]}]]}],{"children":["$Lc",{"children":["$Ld",{"children":["$Le",{},null,false,null]},null,false,"$@f"]},null,false,"$@f"]},null,false,null],"$L10",false]],"m":"$undefined","G":["$11",["$L12","$L13"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"pYRGC4RWYyuaF8-ieiEXw"}
14:I[89433,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
15:I[79651,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
16:I[62319,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
17:I[39756,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
18:I[37457,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
19:I[36768,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
1a:I[56691,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[8142,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1c:I[69732,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1e:I[9787,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/011q~v7vczw28.js","/_next/static/chunks/13a~z62jyobht.js"],"default"]
1f:I[97367,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
20:"$Sreact.suspense"
23:I[97367,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
25:I[97367,["/_next/static/chunks/14l0kiv22th03.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
5:["$","$L14",null,{}]
6:["$","$L15",null,{}]
7:["$","$L16",null,{}]
8:["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L19",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
9:["$","$L1a",null,{}]
a:["$","$L1b",null,{}]
b:["$","$L1c",null,{}]
c:["$","$1","c",{"children":[null,["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
d:["$","$1","c",{"children":[null,["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
1d:Ta48,[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Impulse Digital offer in branding services?","acceptedAnswer":{"@type":"Answer","text":"We create brand strategy, visual identity, logo systems, brand guidelines, lookbooks, packaging, collaterals, campaign design assets, and communication systems that help brands show up consistently."}},{"@type":"Question","name":"How is branding different from logo design?","acceptedAnswer":{"@type":"Answer","text":"A logo is one part of your identity. Branding is the complete system that defines how your business is recognised, remembered, and understood across touchpoints."}},{"@type":"Question","name":"What is included in a brand style guide?","acceptedAnswer":{"@type":"Answer","text":"A brand style guide usually includes logo usage, colour palette, typography, layout rules, imagery direction, tone guidance, iconography, templates, and usage examples."}},{"@type":"Question","name":"Can you refresh an existing brand instead of creating one from scratch?","acceptedAnswer":{"@type":"Answer","text":"Yes. We can audit the current identity, identify what should be retained, refined, or retired, and modernise the brand without losing useful existing equity."}},{"@type":"Question","name":"Do you design product packaging?","acceptedAnswer":{"@type":"Answer","text":"Yes. We design packaging that supports brand recognition, product clarity, shelf presence, claim hierarchy, and customer experience."}},{"@type":"Question","name":"What are brand collaterals?","acceptedAnswer":{"@type":"Answer","text":"Brand collaterals are communication assets such as brochures, presentations, business cards, social templates, print material, sales decks, ads, and other branded touchpoints."}},{"@type":"Question","name":"How do you keep the brand consistent after launch?","acceptedAnswer":{"@type":"Answer","text":"We create guidelines, templates, usage rules, and handover assets so internal teams, external partners, and future campaigns can apply the brand correctly."}},{"@type":"Question","name":"How do you measure branding success?","acceptedAnswer":{"@type":"Answer","text":"Branding can be evaluated through recognition, engagement, branded search, consistency across touchpoints, conversion movement on key pages, and audience recall where measurement is required."}},{"@type":"Question","name":"Who should be involved from our side?","acceptedAnswer":{"@type":"Answer","text":"Leadership, marketing, communications, product, sales, and any team responsible for applying the brand should usually be involved in the process."}}]}]e:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$1d"}}],["$","$L1e",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/011q~v7vczw28.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/13a~z62jyobht.js","async":true,"nonce":"$undefined"}]],["$","$L1f",null,{"children":["$","$20",null,{"name":"Next.MetadataOutlet","children":"$@21"}]}]]}]
22:[]
f:"$W22"
10:["$","$1","h",{"children":[null,["$","$L23",null,{"children":"$L24"}],["$","div",null,{"hidden":true,"children":["$","$L25",null,{"children":["$","$20",null,{"name":"Next.Metadata","children":"$L26"}]}]}],null]}]
12:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
13:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
24:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
21:null
26:[["$","title","0",{"children":"Brand Identity & Branding Agency | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital is a branding agency in Mumbai that builds strong brand identities through strategy, visual design, messaging, and brand systems that last."}],["$","meta","2",{"name":"keywords","content":"branding agency mumbai, brand identity, brand design agency"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/brand-infrastructure/branding/"}],["$","meta","5",{"property":"og:title","content":"Brand Identity & Branding Agency | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital is a branding agency in Mumbai that builds strong brand identities through strategy, visual design, messaging, and brand systems that last."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/brand-infrastructure/branding/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Brand Identity & Branding Agency | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital is a branding agency in Mumbai that builds strong brand identities through strategy, visual design, messaging, and brand systems that last."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
