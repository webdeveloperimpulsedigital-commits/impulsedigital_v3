1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
11:I[68027,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","brand-infrastructure","video-production",""],"q":"","i":false,"f":[[["",{"children":["brand-infrastructure",{"children":["video-production",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0tufwc-sue-8r.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L3",null,{"id":"hotjar-tracking","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n              (function(h,o,t,j,a,r){\n                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                  h._hjSettings={hjid:5340267,hjsv:6};\n                  a=o.getElementsByTagName('head')[0];\n                  r=o.createElement('script');r.async=1;\n                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                  a.appendChild(r);\n              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n            "}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb"]}]]}]]}],{"children":["$Lc",{"children":["$Ld",{"children":["$Le",{},null,false,null]},null,false,"$@f"]},null,false,"$@f"]},null,false,null],"$L10",false]],"m":"$undefined","G":["$11",["$L12","$L13"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"882vyWNOzXOnGarBoZS9h"}
14:I[89433,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
15:I[79651,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
16:I[62319,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
17:I[39756,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
18:I[37457,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
19:I[36768,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
1a:I[56691,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1b:I[8142,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1c:I[69732,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
23:I[97367,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
25:I[97367,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
26:"$Sreact.suspense"
5:["$","$L14",null,{}]
6:["$","$L15",null,{}]
7:["$","$L16",null,{}]
8:["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L19",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
9:["$","$L1a",null,{}]
a:["$","$L1b",null,{}]
b:["$","$L1c",null,{}]
c:["$","$1","c",{"children":[null,["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
d:["$","$1","c",{"children":[null,["$","$L17",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L18",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
1d:Tfbb,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/#service","name":"Video Production Services","url":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/","description":"Impulse Digital provides video production services including brand films, corporate videos, product videos, explainer videos, testimonial videos, event videos, animation, motion graphics, and short-form video content.","serviceType":["Video Production","Brand Films","Corporate Videos","Product Videos","Explainer Videos","Testimonial Videos","Event Videos","Animation","Motion Graphics","Short-Form Video Content"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","@id":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/#faq","url":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/","mainEntity":[{"@type":"Question","name":"What does Video Production include?","acceptedAnswer":{"@type":"Answer","text":"Video Production can include concept development, scripting, storyboarding, shoot planning, filming, editing, motion graphics, sound design, subtitles, format adaptation, AI cinematic production, and platform-ready delivery."}},{"@type":"Question","name":"What kind of videos can Impulse Digital create?","acceptedAnswer":{"@type":"Answer","text":"We can create brand films, digital video commercials, concept videos, product videos, service explainers, testimonial videos, reels, social media videos, campaign films, website videos, and AI cinematic productions."}},{"@type":"Question","name":"Is this only for social media videos?","acceptedAnswer":{"@type":"Answer","text":"No. Social media video is one part of the service. The larger focus is video production for brand communication, campaigns, DVCs, concepts, products, websites, social media, and digital distribution."}},{"@type":"Question","name":"Do you handle scripting and concepts?","acceptedAnswer":{"@type":"Answer","text":"Yes. We can build the concept, script, storyboard, visual treatment, shot list, and production plan before filming or editing begins."}},{"@type":"Question","name":"Do you manage shoots?","acceptedAnswer":{"@type":"Answer","text":"Yes. We can manage product shoots, brand shoots, interviews, lifestyle shoots, testimonials, location shoots, and content shoots with the required crew and planning."}},{"@type":"Question","name":"Can you work with existing footage?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you already have footage, we can shape it through editing, storytelling, sound, graphics, subtitles, cutdowns, and platform adaptations."}},{"@type":"Question","name":"What is AI Cinematic Production?","acceptedAnswer":{"@type":"Answer","text":"AI Cinematic Production uses AI tools to create scenes, visual worlds, cinematic shots, animated sequences, and concept-led films faster. The creative direction, judgment, story, and final quality control remain human-led."}},{"@type":"Question","name":"How do you tailor videos for different platforms?","acceptedAnswer":{"@type":"Answer","text":"We adapt pacing, aspect ratio, hook, edit length, subtitle style, thumbnail, title, and format based on whether the video is meant for Instagram, YouTube, LinkedIn, paid ads, websites, or sales journeys."}},{"@type":"Question","name":"How do you measure video performance?","acceptedAnswer":{"@type":"Answer","text":"We look at watch time, retention, completion rate, engagement, clicks, enquiries, audience response, and what each video teaches the next one."}},{"@type":"Question","name":"Is Video Production right for every brand?","acceptedAnswer":{"@type":"Answer","text":"It is right when your brand needs an idea to be seen, understood, remembered, and acted on. If the goal is only to produce more content without a clear thought, this is not the right fit."}}]}]e:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$1d"}}],"$L1e"],["$L1f","$L20"],"$L21"]}]
22:[]
f:"$W22"
10:["$","$1","h",{"children":[null,["$","$L23",null,{"children":"$L24"}],["$","div",null,{"hidden":true,"children":["$","$L25",null,{"children":["$","$26",null,{"name":"Next.Metadata","children":"$L27"}]}]}],null]}]
12:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
13:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
28:I[49500,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0dq0d-n216dg~.js","/_next/static/chunks/13a~z62jyobht.js"],"default"]
29:I[97367,["/_next/static/chunks/0tufwc-sue-8r.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
1e:["$","$L28",null,{}]
1f:["$","script","script-0",{"src":"/_next/static/chunks/0dq0d-n216dg~.js","async":true,"nonce":"$undefined"}]
20:["$","script","script-1",{"src":"/_next/static/chunks/13a~z62jyobht.js","async":true,"nonce":"$undefined"}]
21:["$","$L29",null,{"children":["$","$26",null,{"name":"Next.MetadataOutlet","children":"$@2a"}]}]
24:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
27:[["$","title","0",{"children":"Video Production Company in Mumbai | Production Agency | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact."}],["$","meta","2",{"name":"keywords","content":"video production company in mumbai, video production agency in mumbai, video production services"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/"}],["$","meta","5",{"property":"og:title","content":"Video Production Company in Mumbai | Production Agency | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/brand-infrastructure/video-production/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/video-production.webp"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Video Production Company in Mumbai | Production Agency | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Impulse Digital is a leading video production company in Mumbai offering creative video production services in Mumbai for brands, campaigns, and corporate storytelling with measurable impact."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/video-production.webp"}]]
2a:null
