1:"$Sreact.fragment"
3:I[79520,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],""]
5:I[89433,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
6:I[79651,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
7:I[62319,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
8:I[39756,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
9:I[37457,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
a:I[36768,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/10dq29k6t3r9..js"],"default"]
b:I[56691,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
c:I[8142,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js","/_next/static/chunks/0bvvwar~0vg4i.js"],"default"]
d:I[69732,["/_next/static/chunks/03htq7z4zumrb.js","/_next/static/chunks/0d3shmwh5_nmn.js"],"default"]
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
})();0:{"rsc":["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0ujqf0ucmygs1.css","precedence":"next"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/0fwx12ld_1jig.css","precedence":"next"}],["$","script","script-0",{"src":"/_next/static/chunks/03htq7z4zumrb.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/0d3shmwh5_nmn.js","async":true}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"icon","type":"image/png","href":"/favicon.png"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Bold.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preload","href":"/fonts/Satoshi-Regular.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://www.googletagmanager.com"}],["$","link",null,{"rel":"preconnect","href":"https://www.google-analytics.com"}],["$","link",null,{"rel":"preconnect","href":"https://cdnjs.cloudflare.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://unpkg.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"}],["$","link",null,{"rel":"preload","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","as":"style","media":"print"}],["$","link",null,{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","media":"print"}],["$","noscript",null,{"children":"$2"}]]}],["$","body",null,{"children":[["$","$L3",null,{"id":"block-zoho-salesiq","strategy":"beforeInteractive","dangerouslySetInnerHTML":{"__html":"$4"}}],["$","$L5",null,{}],["$","$L6",null,{}],["$","$L7",null,{}],["$","$L8",null,{"parallelRouterKey":"children","template":["$","$L9",null,{}],"notFound":[["$","$La",null,{}],[]]}],["$","$Lb",null,{}],["$","$Lc",null,{}],["$","$Ld",null,{}]]}]]}]]}],"isPartial":false,"staleTime":300,"varyParams":null,"buildId":"Wf1MBmI6bC1wSpSW7NBES"}
