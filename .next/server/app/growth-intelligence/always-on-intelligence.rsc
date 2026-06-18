1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
12:I[68027,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0-l1_spz2e8sc.css","style"]
:HL["/_next/static/chunks/0fwx12ld_1jig.css","style"]
:HL["/_next/static/chunks/0-__qisv14fbg.css","style"]
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
})();0:{"P":null,"c":["","growth-intelligence","always-on-intelligence",""],"q":"","i":false,"f":[[["",{"children":["growth-intelligence",{"children":["always-on-intelligence",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","2",{"rel":"stylesheet","href":"/_next/static/chunks/0-__qisv14fbg.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/04kbneh3-57za.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}],["$","script",null,{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-EFFQ2YYFN8');\n            "}}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb","$Lc"]}]]}]]}],{"children":["$Ld",{"children":["$Le",{"children":["$Lf",{},null,false,null]},null,false,"$@10"]},null,false,"$@10"]},null,false,null],"$L11",false]],"m":"$undefined","G":["$12",["$L13","$L14","$L15"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"v6Foenc9ceGD4QojOeyTu"}
16:I[89433,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
17:I[79651,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
18:I[62319,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
19:I[39756,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1a:I[37457,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[36768,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
1c:I[56691,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1d:I[8142,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1e:I[69732,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
20:I[46750,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0g6yfa28gyjqt.js","/_next/static/chunks/13a~z62jyobht.js"],"default"]
21:I[97367,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
22:"$Sreact.suspense"
25:I[97367,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
27:I[97367,["/_next/static/chunks/04kbneh3-57za.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
5:["$","$L3",null,{"id":"hotjar-tracking","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n              (function(h,o,t,j,a,r){\n                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                  h._hjSettings={hjid:5340267,hjsv:6};\n                  a=o.getElementsByTagName('head')[0];\n                  r=o.createElement('script');r.async=1;\n                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                  a.appendChild(r);\n              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n            "}}]
6:["$","$L16",null,{}]
7:["$","$L17",null,{}]
8:["$","$L18",null,{}]
9:["$","$L19",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1a",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L1b",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
a:["$","$L1c",null,{}]
b:["$","$L1d",null,{}]
c:["$","$L1e",null,{}]
d:["$","$1","c",{"children":[null,["$","$L19",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1a",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
e:["$","$1","c",{"children":[null,["$","$L19",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L1a",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
1f:Tb0c,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/#service","name":"Always-On Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/","description":"Impulse Digital provides Always-On Intelligence services that continuously monitor brand mentions, category movement, competitor activity, reviews, reputation signals, and digital market risks.","serviceType":["Always-On Intelligence","Reputation Tracking","Crisis Monitoring","Social Listening","E-Commerce Review Intelligence","Brand Health Monitoring"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Always-On Intelligence?","acceptedAnswer":{"@type":"Answer","text":"It is a continuous monitoring system that tracks brand mentions, category movement, competitor activity, reviews, and reputation signals across digital platforms to help teams act early."}},{"@type":"Question","name":"How is this different from standard social listening?","acceptedAnswer":{"@type":"Answer","text":"Standard listening often provides raw dashboard metrics. Always-On Intelligence filters out noise, connects multiple platforms (social, news, e-commerce), and adds human interpretation so the output is decision-ready."}},{"@type":"Question","name":"What decisions can this support?","acceptedAnswer":{"@type":"Answer","text":"It can support crisis management, campaign tracking, e-commerce optimisation, brand health monitoring, leadership reporting, and rapid response planning."}},{"@type":"Question","name":"What is Reputation and Crisis Tracking?","acceptedAnswer":{"@type":"Answer","text":"It is a specialized layer of monitoring designed to catch negative sentiment, complaint spikes, and risky conversations before they escalate into larger brand issues."}},{"@type":"Question","name":"What is E-Commerce and Review Intelligence?","acceptedAnswer":{"@type":"Answer","text":"It tracks product feedback, reviews, ratings, and sentiment across marketplaces, helping teams understand what drives or blocks conversion at the point of sale."}},{"@type":"Question","name":"What do we receive?","acceptedAnswer":{"@type":"Answer","text":"Outputs depend on the rhythm you need—ranging from live dashboards and instant risk alerts to weekly summaries, monthly insight reports, and quarterly deep dives."}},{"@type":"Question","name":"Who should use this?","acceptedAnswer":{"@type":"Answer","text":"Brand teams, corporate communications, digital marketing, e-commerce managers, and leadership teams who need real-time visibility into brand health and market risks."}}]}]f:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$1f"}}],["$","$L20",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/0g6yfa28gyjqt.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/13a~z62jyobht.js","async":true,"nonce":"$undefined"}]],["$","$L21",null,{"children":["$","$22",null,{"name":"Next.MetadataOutlet","children":"$@23"}]}]]}]
24:[]
10:"$W24"
11:["$","$1","h",{"children":[null,["$","$L25",null,{"children":"$L26"}],["$","div",null,{"hidden":true,"children":["$","$L27",null,{"children":["$","$22",null,{"name":"Next.Metadata","children":"$L28"}]}]}],null]}]
13:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
14:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
15:["$","link","2",{"rel":"stylesheet","href":"/_next/static/chunks/0-__qisv14fbg.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
26:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
23:null
28:[["$","title","0",{"children":"Always-On Intelligence | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support."}],["$","meta","2",{"name":"keywords","content":"always on intelligence, continuous monitoring, brand intelligence"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/"}],["$","meta","5",{"name":"google-site-verification","content":"L2DP6cEE1zUFFR1Sf-AMVqeFURObeTfpBRPnTOGZ6xw"}],["$","meta","6",{"property":"og:title","content":"Always-On Intelligence | Impulse Digital"}],["$","meta","7",{"property":"og:description","content":"Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support."}],["$","meta","8",{"property":"og:url","content":"https://www.theimpulsedigital.com/growth-intelligence/always-on-intelligence/"}],["$","meta","9",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","10",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","11",{"property":"og:type","content":"website"}],["$","meta","12",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","13",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","14",{"name":"twitter:title","content":"Always-On Intelligence | Impulse Digital"}],["$","meta","15",{"name":"twitter:description","content":"Always-on intelligence from Impulse Digital keeps your brand informed with continuous data monitoring, insight generation, and real-time decision support."}],["$","meta","16",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
