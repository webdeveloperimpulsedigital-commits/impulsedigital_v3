1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
12:I[68027,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default",1]
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
})();0:{"P":null,"c":["","case-studies","abg-brut-india",""],"q":"","i":false,"f":[[["",{"children":["case-studies",{"children":["abg-brut-india",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/02g5lbtljairp.js","async":true,"nonce":"$undefined"}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}],["$","script",null,{"async":true,"src":"https://www.googletagmanager.com/gtag/js?id=G-EFFQ2YYFN8"}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-EFFQ2YYFN8');\n            "}}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],"$L5","$L6","$L7","$L8","$L9","$La","$Lb","$Lc"]}]]}]]}],{"children":["$Ld",{"children":["$Le",{"children":["$Lf",{},null,false,null]},null,false,"$@10"]},null,false,null]},null,false,null],"$L11",false]],"m":"$undefined","G":["$12",["$L13","$L14"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"6WwDyd-_EBlTOn1H6D3AW"}
15:I[89433,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
16:I[79651,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
17:I[62319,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
18:I[39756,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
19:I[37457,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1a:I[36768,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
1b:I[56691,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1c:I[8142,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1d:I[69732,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
1e:I[41801,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/09mqhai741hin.js"],"default"]
1f:I[97367,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"OutletBoundary"]
20:"$Sreact.suspense"
23:I[97367,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"ViewportBoundary"]
25:I[97367,["/_next/static/chunks/02g5lbtljairp.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"MetadataBoundary"]
:HL["/css/case-study.css?v=27","style"]
5:["$","$L3",null,{"id":"hotjar-tracking","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n              (function(h,o,t,j,a,r){\n                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                  h._hjSettings={hjid:5340267,hjsv:6};\n                  a=o.getElementsByTagName('head')[0];\n                  r=o.createElement('script');r.async=1;\n                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                  a.appendChild(r);\n              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n            "}}]
6:["$","$L15",null,{}]
7:["$","$L16",null,{}]
8:["$","$L17",null,{}]
9:["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","$L1a",null,{}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]
a:["$","$L1b",null,{}]
b:["$","$L1c",null,{}]
c:["$","$L1d",null,{}]
d:["$","$1","c",{"children":[null,[["$","link",null,{"rel":"stylesheet","href":"/css/case-study.css?v=27"}],["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]]}]
e:["$","$1","c",{"children":[null,["$","$L18",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L19",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
f:["$","$1","c",{"children":[["$","$L1e",null,{}],[["$","script","script-0",{"src":"/_next/static/chunks/09mqhai741hin.js","async":true,"nonce":"$undefined"}]],["$","$L1f",null,{"children":["$","$20",null,{"name":"Next.MetadataOutlet","children":"$@21"}]}]]}]
22:[]
10:"$W22"
11:["$","$1","h",{"children":[null,["$","$L23",null,{"children":"$L24"}],["$","div",null,{"hidden":true,"children":["$","$L25",null,{"children":["$","$20",null,{"name":"Next.Metadata","children":"$L26"}]}]}],null]}]
13:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0-l1_spz2e8sc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
14:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
24:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
21:null
26:[["$","title","0",{"children":"ABG Brut India Case Study | Impulse Digital"}],["$","meta","1",{"name":"description","content":"How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns."}],["$","meta","2",{"name":"keywords","content":"abg brut india case study, digital marketing case study"}],["$","meta","3",{"name":"robots","content":"index, follow"}],["$","link","4",{"rel":"canonical","href":"https://www.theimpulsedigital.com/case-studies/abg-brut-india/"}],["$","meta","5",{"property":"og:title","content":"ABG Brut India Case Study | Impulse Digital"}],["$","meta","6",{"property":"og:description","content":"How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns."}],["$","meta","7",{"property":"og:url","content":"https://www.theimpulsedigital.com/case-studies/abg-brut-india/"}],["$","meta","8",{"property":"og:site_name","content":"Impulse Digital"}],["$","meta","9",{"property":"og:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}],["$","meta","10",{"property":"og:type","content":"website"}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:site","content":"@impulsedigi"}],["$","meta","13",{"name":"twitter:title","content":"ABG Brut India Case Study | Impulse Digital"}],["$","meta","14",{"name":"twitter:description","content":"How Impulse Digital helped ABG Brut India build digital brand presence and drive consumer engagement through creative digital marketing campaigns."}],["$","meta","15",{"name":"twitter:image","content":"https://www.theimpulsedigital.com/ImpulseDigital_Logo.svg"}]]
