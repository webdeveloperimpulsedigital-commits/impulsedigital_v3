1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
b:I[56691,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
d:I[69732,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
11:I[68027,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","digital-marketing-agency-in-thane",""],"q":"","i":false,"f":[[["",{"children":["digital-marketing-agency-in-thane",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0i~5kvis45myb.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["$Le",{},null,false,null]},null,false,"$@f"]},null,false,null],"$L10",false]],"m":"$undefined","G":["$11",["$L12","$L13"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"NeSipyiufM4vr99Y33w9k"}
19:I[97367,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1b:I[97367,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
1c:"$Sreact.suspense"
14:Td2e,[{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What services does a digital marketing agency in Thane like Impulse Digital offer?","acceptedAnswer":{"@type":"Answer","text":"Impulse Digital offers a wide range of digital marketing services in thane including Search Engine Optimization (SEO), Social Media Marketing, Website Development, Pay-Per-Click Advertising (PPC), Content Marketing, Branding & Creatives, Employer Branding, and Corporate Communication."}},{"@type":"Question","name":"Why choose a digital marketing agency based in Thane?","acceptedAnswer":{"@type":"Answer","text":"Choosing a Thane-based agency ensures you work with experts who understand the local market and consumer behavior. Impulse Digital combines local insights with national and international digital strategies to deliver real results."}},{"@type":"Question","name":"How much experience does Impulse Digital have in digital marketing?","acceptedAnswer":{"@type":"Answer","text":"Impulse Digital brings over 34 years of experience in advertising and marketing. We’ve helped startups, SMEs, and large corporations grow their digital presence with customized, result-driven strategies."}},{"@type":"Question","name":"What kind of results can clients expect from Impulse Digital?","acceptedAnswer":{"@type":"Answer","text":"Our clients have seen results like a 200-300% increase in organic traffic and 50 to 100+ leads generated per month. We focus on measurable growth, ROI, and long-term brand building."}},{"@type":"Question","name":"Which industries does Impulse Digital serve?","acceptedAnswer":{"@type":"Answer","text":"We work with clients from a wide range of industries including FMCG, education, manufacturing, real estate, health care, e-commerce, and professional services."}},{"@type":"Question","name":"Can Impulse Digital work with clients outside of Thane?","acceptedAnswer":{"@type":"Answer","text":"Yes, we work with clients across Mumbai, Pune, and other cities in India. Our team is equipped to manage projects remotely while maintaining seamless communication and performance tracking."}},{"@type":"Question","name":"How long does it take to see results from digital marketing?","acceptedAnswer":{"@type":"Answer","text":"It depends on the service. SEO typically takes 3 to 6 months to show significant results, while PPC, social media ads, and email marketing can generate leads and traffic in a matter of weeks."}},{"@type":"Question","name":"Do you offer a free consultation or strategy session?","acceptedAnswer":{"@type":"Answer","text":"Yes, we offer a free consultation to understand your business goals and recommend the best digital marketing strategy tailored to your needs."}},{"@type":"Question","name":"How is your pricing structured?","acceptedAnswer":{"@type":"Answer","text":"Our pricing is flexible and based on the services required, campaign goals, and business size. We offer customized packages that align with your marketing objectives and budget."}},{"@type":"Question","name":"Is there a clear process for tracking performance and ROI?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. We provide transparent performance reports using tools like Google Analytics, Search Console, and ad dashboards. You'll always know what’s working, what’s not, and how your investment is performing."}}]}]e:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$14"}}],"$L15"],["$L16"],"$L17"]}]
18:[]
f:"$W18"
10:["$","$1","h",{"children":[null,["$","$L19",null,{"children":"$L1a"}],["$","div",null,{"hidden":true,"children":["$","$L1b",null,{"children":["$","$1c",null,{"name":"Next.Metadata","children":"$L1d"}]}]}],null]}]
12:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
13:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1e:I[32542,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/13-vuol5mz.pg.js"],"default"]
1f:I[97367,["/_next/static/chunks/0i~5kvis45myb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
15:["$","$L1e",null,{}]
16:["$","script","script-0",{"src":"/_next/static/chunks/13-vuol5mz.pg.js","async":true,"nonce":"$undefined"}]
17:["$","$L1f",null,{"children":["$","$1c",null,{"name":"Next.MetadataOutlet","children":"$@20"}]}]
1a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1d:[["$","title","0",{"children":"Digital Marketing Agency in Thane | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane."}],["$","meta","2",{"name":"keywords","content":"digital marketing agency in thane, digital marketing company thane, digital marketing service in thane, impulse digital"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/digital-marketing-agency-in-thane/"}],["$","meta","5",{"property":"og:title","content":"Digital Marketing Agency in Thane | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/digital-marketing-agency-in-thane/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Digital Marketing Agency in Thane | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital is a leading digital marketing agency in Thane offering SEO, social media, content, and performance marketing solutions for businesses in Thane."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
20:null
