1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
b:I[56691,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
d:I[69732,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
12:I[68027,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","ai-marketing-systems","archer-ai",""],"q":"","i":false,"f":[[["",{"children":["ai-marketing-systems",{"children":["archer-ai",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0hbxs-bzehfbj.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["$Le",{"children":["$Lf",{},null,false,null]},null,false,"$@10"]},null,false,"$@10"]},null,false,null],"$L11",false]],"m":"$undefined","G":["$12",["$L13","$L14"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"rGrfje39DnqiENeZePuBp"}
16:I[64111,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0s79xqs0x55kc.js","/_next/static/chunks/0l8x1sz7-jp37.js"],"default"]
1a:I[97367,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1c:I[97367,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
1d:"$Sreact.suspense"
e:["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
15:Tc13,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/#service","name":"Archer AI Services","url":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/","description":"Impulse Digital provides Archer AI, an AI-powered outbound intelligence engine that detects buying signals, identifies decision-makers, enriches prospect data, and supports personalised B2B outreach.","serviceType":["Archer AI","AI Outbound Engine","B2B Lead Intelligence","ICP Diagnostic","Prospect Discovery","LinkedIn Outreach","Email Outreach"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Archer AI?","acceptedAnswer":{"@type":"Answer","text":"Archer AI is an AI-powered outbound intelligence engine. It detects buying signals, identifies decision-makers, and deploys personalised outreach to create better B2B sales conversations."}},{"@type":"Question","name":"What is an ICP Diagnostic?","acceptedAnswer":{"@type":"Answer","text":"An ICP Diagnostic is a working session where we map your target industries, buyer titles, company profile, geography, offer, and timing signals. It helps determine whether outbound is the right growth channel for you."}},{"@type":"Question","name":"How is Archer AI different from buying a lead list?","acceptedAnswer":{"@type":"Answer","text":"A lead list is static. Archer AI works from live signals, enriched prospect context, verified contacts, and personalised outreach logic."}},{"@type":"Question","name":"What channels does Archer AI use?","acceptedAnswer":{"@type":"Answer","text":"Archer AI supports email and LinkedIn outreach, configured around your buyer behaviour and campaign strategy."}},{"@type":"Question","name":"How soon can outreach begin?","acceptedAnswer":{"@type":"Answer","text":"The ICP diagnostic and engine build come first. Once the signal map, prospect logic, and messaging system are ready, live outreach can begin."}},{"@type":"Question","name":"Does Archer AI replace my sales team?","acceptedAnswer":{"@type":"Answer","text":"No. Archer AI fills the top of the funnel. Your sales team still handles discovery, qualification, negotiation, and closing."}},{"@type":"Question","name":"What does AI handle?","acceptedAnswer":{"@type":"Answer","text":"AI supports signal detection, prospect discovery, contact enrichment, message variation, sequence logic, and performance analysis."}},{"@type":"Question","name":"What do humans handle?","acceptedAnswer":{"@type":"Answer","text":"Human strategists handle ICP logic, positioning, message quality, brand tone, review, and optimisation."}},{"@type":"Question","name":"Is Archer AI right for every business?","acceptedAnswer":{"@type":"Answer","text":"No. Archer AI works best when the buyer is identifiable, the ICP is clear, the deal size justifies precision, and the market shows signals that can be turned into relevant outreach."}}]}]f:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$15"}}],["$","$L16",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/0s79xqs0x55kc.js","async":true,"nonce":"$undefined"}],"$L17"],"$L18"]}]
19:[]
10:"$W19"
11:["$","$1","h",{"children":[null,["$","$L1a",null,{"children":"$L1b"}],["$","div",null,{"hidden":true,"children":["$","$L1c",null,{"children":["$","$1d",null,{"name":"Next.Metadata","children":"$L1e"}]}]}],null]}]
13:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
14:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1f:I[97367,["/_next/static/chunks/0hbxs-bzehfbj.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
17:["$","script","script-1",{"src":"/_next/static/chunks/0l8x1sz7-jp37.js","async":true,"nonce":"$undefined"}]
18:["$","$L1f",null,{"children":["$","$1d",null,{"name":"Next.MetadataOutlet","children":"$@20"}]}]
1b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1e:[["$","title","0",{"children":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","2",{"name":"keywords","content":"archer ai, ai outbound sales agent, b2b outbound ai, impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/"}],["$","meta","5",{"property":"og:title","content":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/ai-marketing-systems/archer-ai/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Archer AI: AI Outbound Sales Agent | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Meet Archer AI, a leading AI outbound sales agent. We build AI outbound agents that engage prospects with authentic conversations to drive real growth."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
20:null
