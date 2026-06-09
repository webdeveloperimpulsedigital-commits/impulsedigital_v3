1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
b:I[56691,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
d:I[69732,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
13:I[68027,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","growth-intelligence","campaign-intelligence",""],"q":"","i":false,"f":[[["",{"children":["growth-intelligence",{"children":["campaign-intelligence",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0h5x6cyshcji0.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$La",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":"$Le","templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["$Lf",{"children":["$L10",{},null,false,null]},null,false,"$@11"]},null,false,"$@11"]},null,false,null],"$L12",false]],"m":"$undefined","G":["$13",["$L14","$L15"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"i07sOdURMOkmBEb3Xnb7r"}
17:I[91374,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10~670beu_mw0.js","/_next/static/chunks/13a~z62jyobht.js"],"default"]
1a:I[97367,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
1c:I[97367,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
1d:"$Sreact.suspense"
e:["$","$L9",null,{}]
f:["$","$1","c",{"children":[null,["$","$L8",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
16:Tbcd,[{"@context":"https://schema.org","@type":"Service","@id":"https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/#service","name":"Campaign and Performance Intelligence Services","url":"https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/","description":"Impulse Digital provides Campaign and Performance Intelligence services to evaluate campaign impact, audience response, brand perception movement, influencer fit, engagement quality, and marketing decision value.","serviceType":["Campaign Intelligence","Performance Intelligence","Campaign Effectiveness Evaluation","Influencer Fit Analysis","Strategic Insight Reports","Marketing Performance Analysis"],"areaServed":["IN","US"],"provider":{"@type":"Organization","name":"Impulse Digital","url":"https://www.theimpulsedigital.com/"}},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Campaign and Performance Intelligence?","acceptedAnswer":{"@type":"Answer","text":"Campaign and Performance Intelligence measures whether marketing activity created meaningful audience response, brand perception movement, recall, engagement quality, and decision value."}},{"@type":"Question","name":"How is this different from a campaign report?","acceptedAnswer":{"@type":"Answer","text":"A campaign report usually records what happened. Campaign Intelligence explains what it means and what should change before the next campaign."}},{"@type":"Question","name":"What does Campaign Effectiveness Evaluation measure?","acceptedAnswer":{"@type":"Answer","text":"It looks at sentiment movement, content recall, audience response, message clarity, engagement behaviour, and channel-level resonance."}},{"@type":"Question","name":"How do you evaluate influencer fit?","acceptedAnswer":{"@type":"Answer","text":"We assess relevance, credibility, audience quality, content performance, engagement quality, and fit with the brand's category and communication objective."}},{"@type":"Question","name":"Can this be done before an influencer campaign?","acceptedAnswer":{"@type":"Answer","text":"Yes. Influencer Fit and Impact Study can support both pre-campaign selection and post-campaign evaluation."}},{"@type":"Question","name":"What do Strategic Insight Reports include?","acceptedAnswer":{"@type":"Answer","text":"They include executive summaries, key findings, what worked, what did not, what to repeat, what to stop, and what to change in the next cycle."}},{"@type":"Question","name":"Who should use this inside the organisation?","acceptedAnswer":{"@type":"Answer","text":"CMOs, Heads of Digital, campaign planning teams, media teams, influencer marketing teams, brand managers, and leadership teams."}},{"@type":"Question","name":"When should this be done?","acceptedAnswer":{"@type":"Answer","text":"After a major campaign, before the next campaign brief, before influencer budget allocation, or when leadership needs a sharper view of what marketing spend actually achieved."}}]}]10:["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$16"}}],["$","$L17",null,{}]],[["$","script","script-0",{"src":"/_next/static/chunks/10~670beu_mw0.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/13a~z62jyobht.js","async":true,"nonce":"$undefined"}]],"$L18"]}]
19:[]
11:"$W19"
12:["$","$1","h",{"children":[null,["$","$L1a",null,{"children":"$L1b"}],["$","div",null,{"hidden":true,"children":["$","$L1c",null,{"children":["$","$1d",null,{"name":"Next.Metadata","children":"$L1e"}]}]}],null]}]
14:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
15:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1f:I[97367,["/_next/static/chunks/0h5x6cyshcji0.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
18:["$","$L1f",null,{"children":["$","$1d",null,{"name":"Next.MetadataOutlet","children":"$@20"}]}]
1b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1e:[["$","title","0",{"children":"Campaign & Performance Intelligence | Impulse Digital"}],["$","meta","1",{"name":"description","content":"Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact."}],["$","meta","2",{"name":"keywords","content":"campaign intelligence, performance intelligence, campaign analytics"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/"}],["$","meta","5",{"property":"og:title","content":"Campaign & Performance Intelligence | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/growth-intelligence/campaign-intelligence/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"Campaign & Performance Intelligence | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"Campaign and performance intelligence services from Impulse Digital help brands measure, analyse, and optimise every campaign for maximum impact."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
20:null
