1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
b:I[56691,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
d:I[69732,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
13:I[68027,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
:HL["/_next/static/chunks/0ujqf0ucmygs1.css","style"]
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
})();0:{"P":null,"c":["","growth-intelligence","consumer-intelligence",""],"q":"","i":false,"f":[[["",{"children":["growth-intelligence",{"children":["consumer-intelligence",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0.nysi-salznz.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":"$Le","templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["$Lf",{"children":["$L10",{},null,false,null]},null,false,"$@11"]},null,false,"$@11"]},null,false,null],"$L12",false]],"m":"$undefined","G":["$13",["$L14","$L15"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"uA0LVUjZTSP2mX8xHPWoX"}
1c:I[97367,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1e:I[97367,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
1f:"$Sreact.suspense"
e:["$","$L9",null,{}]
f:["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
16:Te08,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/#service","name":"Consumer Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/","description":"Impulse Digital provides Consumer Intelligence services to help brands understand consumer behaviour, motivations, triggers, barriers, expectations, and decision-making patterns.","serviceType":["Consumer Intelligence","Usage and Attitude Studies","Trigger and Barrier Analysis","Consumer Behaviour Research","Innovation Funnel Support"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Consumer Intelligence?","acceptedAnswer":{"@type":"Answer","text":"Consumer Intelligence helps brands understand who their consumers are, what drives their choices, what holds them back, and what they expect next. It turns consumer understanding into sharper brand, product, communication, and growth decisions."}},{"@type":"Question","name":"How is this different from regular market research?","acceptedAnswer":{"@type":"Answer","text":"Regular research often stops at findings. Consumer Intelligence is built to support decisions. It combines consumer inputs, digital signals, category context, and strategic interpretation to create action-ready recommendations."}},{"@type":"Question","name":"What decisions can Consumer Intelligence support?","acceptedAnswer":{"@type":"Answer","text":"It can support brand relaunches, segmentation, campaign strategy, product innovation, pricing decisions, category entry, communication planning, and funnel improvement."}},{"@type":"Question","name":"What do Usage and Attitude Studies help with?","acceptedAnswer":{"@type":"Answer","text":"They help brands understand consumer behaviour, motivations, needs, attitudes, and category relationships. This is useful for segmentation, persona mapping, brand strategy, and communication planning."}},{"@type":"Question","name":"What is Trigger and Barrier Analysis?","acceptedAnswer":{"@type":"Answer","text":"It identifies what pushes consumers toward adoption and what stops them from moving ahead. This helps improve messaging, product design, pricing, funnel interventions, and conversion strategy."}},{"@type":"Question","name":"What is Innovation Funnel Support?","acceptedAnswer":{"@type":"Answer","text":"It helps identify emerging consumer expectations, benefits, claims, ingredients, and opportunity territories that can shape new product ideas or refine an existing innovation pipeline."}},{"@type":"Question","name":"What do we receive at the end?","acceptedAnswer":{"@type":"Answer","text":"You receive decision-ready outputs such as recommendation decks, persona frameworks, trigger and barrier maps, opportunity territories, and action points. The exact output depends on the decision your team needs to make."}},{"@type":"Question","name":"Who should be involved from our side?","acceptedAnswer":{"@type":"Answer","text":"Usually brand teams, consumer insights teams, product teams, innovation teams, marketing heads, and decision-makers who will use the intelligence in planning."}},{"@type":"Question","name":"When should we do this?","acceptedAnswer":{"@type":"Answer","text":"Before a major decision. That could be before a relaunch, campaign reset, product launch, category entry, price change, or innovation pipeline review."}}]}]10:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$16"}}],"$L17"],["$L18","$L19"],"$L1a"]}]
1b:[]
11:"$W1b"
12:["$","$1","h",{"children":[null,["$","$L1c",null,{"children":"$L1d"}],["$","div",null,{"hidden":true,"children":["$","$L1e",null,{"children":["$","$1f",null,{"name":"Next.Metadata","children":"$L20"}]}]}],null]}]
14:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
15:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
21:I[70742,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/15f_j-vt1gd91.js","/_next/static/chunks/0l8x1sz7-jp37.js"],"default"]
22:I[97367,["/_next/static/chunks/0.nysi-salznz.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
17:["$","$L21",null,{}]
18:["$","script","script-0",{"src":"/_next/static/chunks/15f_j-vt1gd91.js","async":true,"nonce":"$undefined"}]
19:["$","script","script-1",{"src":"/_next/static/chunks/0l8x1sz7-jp37.js","async":true,"nonce":"$undefined"}]
1a:["$","$L22",null,{"children":["$","$1f",null,{"name":"Next.MetadataOutlet","children":"$@23"}]}]
1d:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
20:[["$","title","0",{"children":"Consumer Intelligence Services | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions."}],["$","meta","2",{"name":"keywords","content":"consumer intelligence, consumer insights, digital marketing"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/"}],["$","meta","5",{"property":"og:title","content":"Consumer Intelligence Services | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/growth-intelligence/consumer-intelligence/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Consumer Intelligence Services | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital delivers consumer intelligence solutions that help brands understand audiences, uncover insights, and make smarter marketing decisions."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
23:null
