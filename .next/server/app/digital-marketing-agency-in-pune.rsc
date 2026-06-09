1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0uwksrfmsi3kt.js"],"default"]
b:I[56691,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
d:I[69732,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
11:I[68027,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","digital-marketing-agency-in-pune",""],"q":"","i":false,"f":[[["",{"children":["digital-marketing-agency-in-pune",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0ygjvejh41g7o.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["$Le",{},null,false,null]},null,false,"$@f"]},null,false,null],"$L10",false]],"m":"$undefined","G":["$11",["$L12","$L13"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"cZY3-8p4FD-2ic5ScLdHY"}
15:I[59206,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0you9f9538u.p.js"],"default"]
16:I[97367,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
17:"$Sreact.suspense"
1a:I[97367,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1c:I[97367,["/_next/static/chunks/0ygjvejh41g7o.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
14:Tae8,[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does it mean that Impulse Digital is a growth partner rather than a vendor?","acceptedAnswer":{"@type":"Answer","text":"As a leading digital marketing agency in Pune, it means we work as an extension of your team, aligning strategy and execution with your goals and sharing responsibility for outcomes. Collaboration, transparency, and measurable progress drive every decision."}},{"@type":"Question","name":"How do you build a strategy that fits my brand and market?","acceptedAnswer":{"@type":"Answer","text":"We begin with discovery and a performance audit, define clear objectives, and map audience journeys. From there we create a test and learn roadmap that prioritizes initiatives by impact and effort."}},{"@type":"Question","name":"How will success be measured and reported to us?","acceptedAnswer":{"@type":"Answer","text":"At our digital marketing agency in Pune, we set KPIs at the start and track visibility, engagement, conversions, and return on investment. Dashboards and review calls convert the data into actions for the next cycle."}},{"@type":"Question","name":"Do you serve only Pune based businesses or work across regions as well?","acceptedAnswer":{"@type":"Answer","text":"While we are a digital marketing company in Pune, we support clients across India and overseas. Our delivery models remain flexible so collaboration stays smooth regardless of location."}},{"@type":"Question","name":"What services can you manage under one engagement?","acceptedAnswer":{"@type":"Answer","text":"We offer performance marketing, search engine optimization, social media, content, branding, website design and development, video production, and analytics. You can choose full service or project based support."}},{"@type":"Question","name":"How soon can we expect results from a new engagement?","acceptedAnswer":{"@type":"Answer","text":"Paid campaigns can show directional signals within days once tracking is verified. Organic growth compounds over weeks and months as technical and content improvements take effect."}},{"@type":"Question","name":"What does the process look like from first call to launch?","acceptedAnswer":{"@type":"Answer","text":"We align on goals, run an audit, agree on a plan with milestones, set up tracking, and prepare creative and landing experiences. Launch follows a quality checklist so that data and delivery are reliable from day one."}},{"@type":"Question","name":"Can you share case studies and references before we decide?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a transparent digital marketing company in Pune, we provide public case studies and can share additional references on request, subject to confidentiality terms."}}]}]e:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$14"}}],["$","$L15",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/0you9f9538u.p.js","async":true,"nonce":"$undefined"}]],["$","$L16",null,{"children":["$","$17",null,{"name":"Next.MetadataOutlet","children":"$@18"}]}]]}]
19:[]
f:"$W19"
10:["$","$1","h",{"children":[null,["$","$L1a",null,{"children":"$L1b"}],["$","div",null,{"hidden":true,"children":["$","$L1c",null,{"children":["$","$17",null,{"name":"Next.Metadata","children":"$L1d"}]}]}],null]}]
12:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
13:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
18:null
1d:[["$","title","0",{"children":"Best Digital Marketing Agency in Pune | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital is the best digital marketing company in Pune, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Pune."}],["$","meta","2",{"name":"keywords","content":"digital marketing agency in pune, digital marketing company in pune, impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/digital-marketing-agency-in-pune/"}],["$","meta","5",{"property":"og:title","content":"Best Digital Marketing Agency in Pune | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital is the best digital marketing company in Pune, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Pune."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/digital-marketing-agency-in-pune/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Best Digital Marketing Agency in Pune | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital is the best digital marketing company in Pune, combining Growth Intelligence, AI Marketing Systems, and Brand Infrastructure to deliver measurable results for enterprise companies in Pune."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
