(()=>{"use strict";module.exports=[52122,e=>{var t=e.i(89171),r=e.i(60101);async function a(e){try{let{name:a,company:o,email:i,phone:n,preferredTime:l,userRequirement:s,recommendedDirection:d,chatHistory:c,sessionId:p}=await e.json();if(p){let t=e.headers.get("x-forwarded-for")?.split(",")[0].trim()||e.headers.get("x-real-ip")||"127.0.0.1";c&&Array.isArray(c)&&await (0,r.A)(p,c,{name:a,company:o,email:i,phone:n,preferredTime:l,userRequirement:s,recommendedDirection:d},t)}let u=!1,h="";try{let e=process.env.RESEND_API_KEY;if(e){let t=new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata",dateStyle:"medium",timeStyle:"short"})+" (IST)",r="";c&&Array.isArray(c)&&(r=`
            <h2 style="font-size: 15px; font-weight: 600; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Chat Transcript</h2>
            <div style="font-size: 13px; color: #4b5563; background-color: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb; max-height: 250px; overflow-y: auto;">
              ${c.map(e=>{let t="user"===e.role?"Client":"Assistant (Adwait)",r="user"===e.role?"#8a5cf6":"#1f2937";return`<div style="margin-bottom: 10px;">
                  <strong style="color: ${r};">${t}:</strong>
                  <span style="white-space: pre-wrap;">${e.content}</span>
                </div>`}).join("")}
            </div>
          `);let p=`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>New Chatbot Lead</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #111827;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
              <tr>
                <td style="background: linear-gradient(135deg, #8a5cf6 0%, #b829ea 100%); padding: 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Chatbot Lead Captured</h1>
                  <p style="color: rgba(255, 255, 255, 0.85); margin: 4px 0 0 0; font-size: 13px;">Impulse Digital Growth Assistant (Adwait)</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px;">
                  <h2 style="font-size: 15px; font-weight: 600; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Contact Information</h2>
                  <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px; color: #4b5563;">
                    <tr>
                      <td width="35%" style="font-weight: 600; color: #374151;">Name:</td>
                      <td>${a}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Company:</td>
                      <td>${o}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Email:</td>
                      <td><a href="mailto:${i}" style="color: #8a5cf6; text-decoration: none;">${i}</a></td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Phone Number:</td>
                      <td><a href="tel:${n}" style="color: #8a5cf6; text-decoration: none;">${n}</a></td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Preferred Time:</td>
                      <td>${l}</td>
                    </tr>
                  </table>

                  <h2 style="font-size: 15px; font-weight: 600; margin-bottom: 12px; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; color: #1f2937;">Consultation Details</h2>
                  <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #4b5563;">
                    <tr>
                      <td width="35%" style="font-weight: 600; color: #374151;">Requirement:</td>
                      <td>${s||"Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Recommended Path:</td>
                      <td>${d||"Not specified"}</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 600; color: #374151;">Captured Time:</td>
                      <td>${t}</td>
                    </tr>
                  </table>

                  ${r}
                </td>
              </tr>
              <tr>
                <td style="background-color: #f3f4f6; padding: 14px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
                  This notification was generated automatically from the chat widget on <a href="https://www.theimpulsedigital.com" target="_blank" style="color: #9ca3af; text-decoration: underline;">www.theimpulsedigital.com</a>.
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,f=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({from:"Impulse Digital Chatbot <onboarding@resend.dev>",to:["adwait@theimpulsedigital.com","abhishek@theimpulsedigital.com"],subject:`New Chatbot Lead - ${o}`,html:p})});if(f.ok)u=!0,console.log("Lead email notification sent successfully");else{let e=await f.text();console.error("Resend API error response:",e),h=`Resend API error status ${f.status}`}}else console.error("RESEND_API_KEY is not defined in environment variables."),h="RESEND_API_KEY is missing"}catch(e){console.error("Error sending Resend email alert:",e),h=e.message||"Error executing Resend email alert"}return t.NextResponse.json({success:!0,emailSent:u,emailError:h||void 0})}catch(e){return console.error("Error in lead email API route:",e),t.NextResponse.json({error:e.message||"Internal server error"},{status:500})}}e.s(["POST",0,a,"dynamic",0,"force-dynamic"])},84931,e=>{var t=e.i(47909),r=e.i(74017),a=e.i(96250),o=e.i(59756),i=e.i(61916),n=e.i(74677),l=e.i(69741),s=e.i(16795),d=e.i(87718),c=e.i(95169),p=e.i(47587),u=e.i(66012),h=e.i(70101),f=e.i(26937),m=e.i(10372),g=e.i(93695),w=e.i(9580);e.i(52474);var x=e.i(220);let b=new t.AppRouteRouteModule({definition:{kind:r.f.APP_ROUTE,page:"/api/lead/route",pathname:"/api/lead",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/lead/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(52122),...{}}),{workAsyncStorage:y,workUnitAsyncStorage:v,serverHooks:R}=b;async function E(e,t,a){a.requestMeta&&(0,o.R)(e,a.requestMeta),b.isDev&&(0,o.i)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let y="/api/lead/route";y=y.replace(/\/index$/,"")||"/";let v=await b.prepare(e,t,{srcPage:y,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:R,deploymentId:E,params:C,nextConfig:A,parsedUrl:P,isDraftMode:S,prerenderManifest:T,routerServerContext:k,isOnDemandRevalidate:$,revalidateOnlyGenerated:I,resolvedPathname:N,clientReferenceManifest:O,serverActionsManifest:U,previewProps:D}=v,_=(0,l.f)(y),q=!!T.routes[N]&&(b.isDev||(0,w.f)(N,b.cacheOwner,T.routes[N])),M=!!(T.dynamicRoutes[_]||q),j=async()=>((null==k?void 0:k.render404)?await k.render404(e,t,P,!1):t.end("This page could not be found"),null);if(M&&!S){let e=T.dynamicRoutes[_];if(e&&!1===e.fallback&&!q){if(A.adapterPath)return await j();throw new g.NoFallbackError}}let L=null;!M||b.isDev||S||(L="/index"===(L=N)?"/":L),U&&O&&(0,n.f)({page:y,clientReferenceManifest:O,serverActionsManifest:U});let z=e.method||"GET",H=(0,i.v)(),G=H.getActiveScopeSpan(),K=!!(null==k?void 0:k.isWrappedByNextServer),B=!!(0,o.w)(e,"minimalMode"),F=(0,o.w)(e,"incrementalCache")||await b.getIncrementalCache(e,A,D,T,B);null==F||F.resetRequestCache(),globalThis.__incrementalCache=F;let Y={params:C,previewProps:D,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts,useCacheTimeout:A.experimental.useCacheTimeout,durableUseCacheEntries:!!A.experimental.durableUseCacheEntries},cacheComponents:!!A.cacheComponents,validationLevel:A.experimental.instantInsights.validationLevel,isDraftMode:S,incrementalCache:F,hmrRefreshHash:(0,o.w)(e,"hmrRefreshHash"),cacheLifeProfiles:A.cacheLife,staticPageGenerationTimeout:A.staticPageGenerationTimeout,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0},sharedContext:{buildId:R,deploymentId:E}},J=new s.x(e),V=new s.e(t),Q=d.k.fromNodeNextRequest(J,(0,d.t)(t)),W=async({previousCacheEntry:r})=>{try{if(!B&&$&&I&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=null===L?await b.handle(Q,Y):await b.prerender(Q,Y);e.fetchMetrics=Y.renderOpts.fetchMetrics;let i=Y.renderOpts.pendingWaitUntil;i&&a.waitUntil&&(a.waitUntil(i),i=void 0);let n=Y.renderOpts.collectedTags;if(!M)return await (0,u.f)(J,V,o,i),null;{let e=await o.blob(),t=(0,h.S)(o.headers);n&&(t[m.M]=n),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==Y.renderOpts.collectedRevalidate&&!(Y.renderOpts.collectedRevalidate>=m.Q)&&Y.renderOpts.collectedRevalidate,a=void 0===Y.renderOpts.collectedExpire||Y.renderOpts.collectedExpire>=m.Q?!1!==r&&r>0?A.expireTime:void 0:Y.renderOpts.collectedExpire;return{value:{kind:x.x.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await b.onRequestError(e,t,{routerKind:"App Router",routePath:y,routeType:"route",revalidateReason:(0,p.f)({isStaticGeneration:null!==L,isOnDemandRevalidate:$})},!1,k),t}},Z=async(o,n)=>{try{var l,s;let o=await b.handleResponse({req:e,nextConfig:A,cacheKey:L,routeKind:r.f.APP_ROUTE,isFallback:!1,previewProps:D,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:$,revalidateOnlyGenerated:I,responseGenerator:W,waitUntil:a.waitUntil,isMinimalMode:B});if(null!==o&&"error"in o)throw o.error;if(!M)return;if((null==o||null==(l=o.value)?void 0:l.kind)!==x.x.APP_ROUTE)throw Error(`Invariant: app-route received invalid cache entry ${null==o||null==(s=o.value)?void 0:s.kind}`);B||t.setHeader("x-nextjs-cache",$?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let i=(0,h.G)(o.value.headers);B&&M||i.delete(m.M),!o.cacheControl||t.getHeader("Cache-Control")||i.get("Cache-Control")||i.set("Cache-Control",(0,f.f)(o.cacheControl)),await (0,u.f)(J,V,new Response(o.value.body,{headers:i,status:o.value.status||200}));return}catch(r){if(r instanceof g.NoFallbackError||await b.onRequestError(e,r,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,p.f)({isStaticGeneration:null!==L,isOnDemandRevalidate:$})},!1,k),M)throw r;if(t.headersSent){if(o){let e=r instanceof Error?r:Error("Unknown app route error");o.recordException(e),o.setStatus({code:i.J.ERROR,message:e.message}),o.setAttribute("error.type",e.name)}t.writableEnded||t.destroyed||t.end()}else await (0,u.f)(J,V,new Response(null,{status:500}));return}finally{(()=>{if(!o)return;let e=t.statusCode;o.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(o.setStatus({code:i.J.ERROR}),o.setAttribute("error.type",e.toString()));let r=H.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.q.handleRequest)return console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route")||_,l=`${z} ${a}`;o.setAttributes({"next.route":a,"http.route":a,"next.span_name":l}),o.updateName(l),n&&n!==o&&(n.setAttribute("http.route",a),n.updateName(l))})()}};if(K&&G)await Z(G,void 0);else{let t=H.getActiveScopeSpan();await H.withPropagatedContext(e.headers,()=>H.trace(c.q.handleRequest,{spanName:`${z} ${y}`,kind:i.C.SERVER,attributes:{"http.method":z,"http.target":e.url}},e=>Z(e,t)),void 0,!K)}}e.s(["handler",0,E,"patchFetch",0,function(){return(0,a.f)({workAsyncStorage:y,workUnitAsyncStorage:v})},"routeModule",0,b,"serverHooks",0,R,"workAsyncStorage",0,y,"workUnitAsyncStorage",0,v])}]})();

//# sourceMappingURL=_06ekfcc80rooo._.js.map