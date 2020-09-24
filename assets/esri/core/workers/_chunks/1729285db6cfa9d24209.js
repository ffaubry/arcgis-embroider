self.webpackChunkRemoteClient([21],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var r=n(67),o=n(196),a=n(102);const i={year:"numeric",month:"numeric",day:"numeric"},s={year:"numeric",month:"long",day:"numeric"},c={year:"numeric",month:"short",day:"numeric"},u={year:"numeric",month:"long",weekday:"long",day:"numeric"},l={hour:"numeric",minute:"numeric"},f={...l,second:"numeric"},h={"short-date":i,"short-date-short-time":{...i,...l},"short-date-short-time-24":{...i,...l,hour12:!1},"short-date-long-time":{...i,...f},"short-date-long-time-24":{...i,...f,hour12:!1},"short-date-le":i,"short-date-le-short-time":{...i,...l},"short-date-le-short-time-24":{...i,...l,hour12:!1},"short-date-le-long-time":{...i,...f},"short-date-le-long-time-24":{...i,...f,hour12:!1},"long-month-day-year":s,"long-month-day-year-short-time":{...s,...l},"long-month-day-year-short-time-24":{...s,...l,hour12:!1},"long-month-day-year-long-time":{...s,...f},"long-month-day-year-long-time-24":{...s,...f,hour12:!1},"day-short-month-year":c,"day-short-month-year-short-time":{...c,...l},"day-short-month-year-short-time-24":{...c,...l,hour12:!1},"day-short-month-year-long-time":{...c,...f},"day-short-month-year-long-time-24":{...c,...f,hour12:!1},"long-date":u,"long-date-short-time":{...u,...l},"long-date-short-time-24":{...u,...l,hour12:!1},"long-date-long-time":{...u,...f},"long-date-long-time-24":{...u,...f,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":l,"long-time":f},d=Object(r.b)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),b=(d.apiValues,d.toJSON.bind(d),d.fromJSON.bind(d),{ar:"ar-u-nu-latn-ca-gregory"});let g=new o.a,m=h["short-date-short-time"];function O(e){return h[e]||null}function j(e,t){return function(e){const t=e||m;if(!g.has(t)){const e=Object(a.b)(),n=b[Object(a.b)()]||e;g.set(t,new Intl.DateTimeFormat(n,t))}return g.get(t)}(t).format(e)}Object(a.a)(()=>{g=new o.a,m=h["short-date-short-time"]})},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(2),o=n(196),a=n(102);const i={ar:"ar-u-nu-latn"};let s=new o.a,c={};function u(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function l(e,t){return function(e){const t=e||c;if(!s.has(t)){const n=Object(a.b)(),r=i[Object(a.b)()]||n;s.set(t,new Intl.NumberFormat(r,e))}return Object(r.c)(s.get(t))}(t).format(e)}Object(a.a)(()=>{s=new o.a,c={}})},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n(20);var r=n(2),o=n(10),a=n(5),i=n(96),s=n(102),c=n(143);const u=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,l=Object(i.a)(["ar","bs","ca","cs","da","de","el","en","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-BR","pt-PT","ro","ru","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"]),f=new Map;async function h(e){f.has(e)||f.set(e,async function(e){const t=/^(.*)\/t9n\/(.*)$/g.exec(e);if(!t)throw new o.a("esri-intl:invalid-bundle",`Missing "t9n" folder in locale bundle path "${e}"`);const n=t[1]+"/t9n/",r=t[2],a=d(Object(s.b)()),i=`${n}${r}.json`,c=a?`${n}${r}_${a}.json`:i;let u;try{u=await b(c)}catch(t){if(c===i)throw t;try{u=await b(i)}catch{throw new o.a("esri-intl:unknown-bundle",`Bundle "${e}" cannot be loaded`,{error:t})}}return u}(e));const t=f.get(e);return await g.add(t),t}function d(e){if(!u.test(e))return null;const[,t,n]=u.exec(e),r=t+(n?"-"+n.toUpperCase():"");return l.has(r)?r:l.has(t)?t:null}async function b(e){return Object(r.h)(m.fetchBundleAsset)?m.fetchBundleAsset(e):(await Object(c.a)(e,{responseType:"json"})).data}Object(s.a)(()=>{f.clear()});const g=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=Object(a.l)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}},m={cache:f}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(15),o=n(44),a=n(7),i=n(122),s=n(125);const c=a.a.getLogger("esri.intl");function u(e,t,n={}){const{format:a={}}=n;return Object(o.c)(e,e=>function(e,t,n){let o,a;const u=e.indexOf(":");if(-1===u?o=e.trim():(o=e.slice(0,u).trim(),a=e.slice(u+1).trim()),!o)return"";const f=Object(r.b)(o,t);if(null==f)return"";const h=n[a]||n[o];return h?function(e,t){switch(t.type){case"date":return Object(i.b)(e,t.intlOptions);case"number":return Object(s.b)(e,t.intlOptions);default:return c.warn("missing format descriptor for key {key}"),l(e)}}(f,h):a?function(e,t){switch(t.toLowerCase()){case"dateformat":return Object(i.b)(e);case"numberformat":return Object(s.b)(e);default:return c.warn("inline format is unsupported since 4.12: "+t),/^(dateformat|datestring)/i.test(t)?Object(i.b)(e):/^numberformat/i.test(t)?Object(s.b)(e):l(e)}}(f,a):l(f)}(e,t,a))}function l(e){switch(typeof e){case"string":return e;case"number":return Object(s.b)(e);case"boolean":return""+e;default:return e instanceof Date?Object(i.b)(e):""}}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=(n(50),n(33));let a=r.c.WeakMap;if(!Object(r.d)("es6-weakmap")){const e={},t=function(){return Math.floor(1e8*Math.random())},n=function(){let e=Math.floor(Date.now()%1e8);return function(){return"__wm"+t()+e+++"__"}}();a=class{constructor(e){if(this[Symbol.toStringTag]="WeakMap",this._name=n(),this._frozenEntries=[],e)if(Object(o.b)(e))for(let t=0;t<e.length;t++){const n=e[t];this.set(n[0],n[1])}else for(const[t,n]of e)this.set(t,n)}_getFrozenEntryIndex(e){for(let t=0;t<this._frozenEntries.length;t++)if(this._frozenEntries[t].key===e)return t;return-1}delete(t){if(null==t)return!1;const n=t[this._name];if(n&&n.key===t&&n.value!==e)return n.value=e,!0;const r=this._getFrozenEntryIndex(t);return r>=0&&(this._frozenEntries.splice(r,1),!0)}get(t){if(null==t)return;const n=t[this._name];if(n&&n.key===t&&n.value!==e)return n.value;const r=this._getFrozenEntryIndex(t);return r>=0?this._frozenEntries[r].value:void 0}has(t){if(null==t)return!1;const n=t[this._name];return!!Boolean(n&&n.key===t&&n.value!==e)||this._getFrozenEntryIndex(t)>=0}set(e,t){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Invalid value used as weak map key");let n=e[this._name];return n&&n.key===e||(n=Object.create(null,{key:{value:e}}),Object.isFrozen(e)?this._frozenEntries.push(n):Object.defineProperty(e,this._name,{value:n})),n.value=t,this}}}var i=a},198:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=198},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return z}));var r=n(3),o=(n(20),n(10)),a=n(5),i=n(57),s=n(7),c=n(49);const u=s.a.getLogger("esri.core.workers.Connection");var l=n(12),f=n(16),h=n(19),d=n(4),b=n(102);n(122),n(125),n(160),n(154),n(11);const g={};var m=function(e){var t;const n={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages&&e.packages.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(n.async=!0),e.hasOwnProperty("isDebug")||(n.isDebug=!1),e.baseUrl||(n.baseUrl=g.baseUrl),null==(t=g.packages)||t.forEach(e=>{!function(e,t){for(const n of e)if(n.name===t.name)return;e.push(t)}(n.packages,e)}),n},O=n(1);class j{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...n)=>e[t](...n)})}}const w=O.a.MutationObserver||O.a.WebKitMutationObserver,y=function(){let e;if(O.a.process&&O.a.process.nextTick)e=e=>{O.a.process.nextTick(e)};else if(O.a.Promise)e=e=>{O.a.Promise.resolve().then(e)};else if(w){const t=[],n=document.createElement("div");new w(()=>{for(;t.length>0;)t.shift()()}).observe(n,{attributes:!0}),e=e=>{t.push(e),n.setAttribute("queueStatus","1")}}return e}(),p=(()=>{const e=O.a.MessageEvent;try{new e("message",{data:null})}catch{return(e,t={})=>{const{data:n,bubbles:r=!1,cancelable:o=!1}=t,a=document.createEvent("Event");return a.initEvent(e,r,o),a.data=n,a}}return(t,n)=>new e(t,n)})();var E=class{constructor(){this._dispatcher=new j,this._isInitialized=!1,this._workerPostMessage({type:f.a.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){y(()=>{this._workerMessageHandler(p("message",{data:e}))})}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,n){this._dispatcher.addEventListener(e,t,n)}removeEventListener(e,t,n){this._dispatcher.removeEventListener(e,t,n)}_workerPostMessage(e){y(()=>{this.dispatchEvent(p("message",{data:e}))})}async _workerMessageHandler(e){const t=Object(f.d)(e);if(t)switch(t.type){case f.a.CONFIGURE:this._isInitialized||this._workerPostMessage({type:f.a.CONFIGURED});break;case f.a.OPEN:{const{modulePath:e,jobId:r}=t;let o=await i.default.loadWorker(e);o||(o=await n(198)(e));const a=i.default.connect(o);this._workerPostMessage({type:f.a.OPENED,jobId:r,data:a});break}}}};const v=s.a.getLogger("esri.core.workers");r.a.add("esri-workers-arraybuffer-transfer",!Object(r.a)("safari")||Object(r.a)("safari")>=12);const{CONFIGURED:A,CONFIGURE:_,HANDSHAKE:I}=f.a;let k;try{k=URL.createObjectURL(new Blob(['var esriConfig,remoteClientPath,globalId=0,outgoing=new Map,configured=!1,HANDSHAKE=0,CONFIGURE=1,CONFIGURED=2,OPEN=3,OPENED=4,RESPONSE=5,INVOKE=6,ABORT=7;function createAbortError(){var e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,t,r){var o=r&&r.signal,n=globalId++;return new Promise((function(r,i){if(o){if(o.aborted)return i(createAbortError());o.addEventListener("abort",(function(){outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!=o,data:t})}))}function messageHandler(e){var t=receiveMessage(e);if(t){var r=t.jobId;switch(t.type){case CONFIGURE:var o=t.configure;if(configured)return;configured=!0,esriConfig=o.esriConfig,remoteClientPath=esriConfig.workers.remoteClientPath,self.dojoConfig=o.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(o.loaderConfig)),self.postMessage({type:CONFIGURED});break;case OPEN:var n,i=/^https?:\\/\\//i.test(t.modulePath)?t.modulePath:esriConfig.baseUrl+t.modulePath;function a(e){var t=n.connect(e);self.postMessage({type:OPENED,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([remoteClientPath.replace(/\\.js$/,"")],(function(e){(n=e.default||e).loadWorker(t.modulePath).then((function(e){return e||new Promise((function(e){require([t.modulePath],e)}))})).then(a)})):"System"in self&&"function"==typeof System.import?System.import(esriConfig.baseUrl+remoteClientPath).then((function(e){return(n=e.default).loadWorker(t.modulePath)})).then((function(e){return e||System.import(i)})).then(a):(self.RemoteClient||importScripts(esriConfig.baseUrl+remoteClientPath),(n=self.RemoteClient.default||self.RemoteClient).loadWorker(t.modulePath).then(a));break;case RESPONSE:if(outgoing.has(r)){var s=outgoing.get(r);outgoing.delete(r),t.error?s.reject(JSON.parse(t.error)):s.resolve(t.data)}}}}self.addEventListener("message",messageHandler),self.postMessage({type:HANDSHAKE});'],{type:"text/javascript"}))}catch(e){}const N="Failed to create Worker. Fallback to execute module in main thread";async function S(e){return Object(a.f)(t=>{function n(a){const i=Object(f.d)(a);if(i)switch(i.type){case I:!function(e){let t;if(null!=h.a.default){const e={...h.a};delete e.default,t=JSON.parse(JSON.stringify(e))}else t=JSON.parse(JSON.stringify(h.a));t.baseUrl=Object(d.x)(t.baseUrl),t.locale=Object(b.b)(),t.has={"csp-restrictions":Object(r.a)("csp-restrictions"),"esri-2d-debug":Object(r.a)("esri-2d-debug"),"esri-2d-update-debug":Object(r.a)("esri-2d-update-debug"),"esri-atomics":Object(r.a)("esri-atomics"),"esri-secure-context":Object(r.a)("esri-secure-context"),"esri-shared-array-buffer":Object(r.a)("esri-shared-array-buffer"),"esri-tiles-debug":Object(r.a)("esri-tiles-debug"),"esri-webgl-max-texture-size":Object(r.a)("esri-webgl-max-texture-size"),"esri-webgl-texture-float":Object(r.a)("esri-webgl-texture-float"),"esri-workers-arraybuffer-transfer":Object(r.a)("esri-workers-arraybuffer-transfer"),"host-webworker":1},t.workers.loaderUrl&&(t.workers.loaderUrl=Object(d.x)(t.workers.loaderUrl)),t.workers.remoteClientPath||(t.workers.remoteClientPath=h.a.assetsPath+"/esri/core/workers/RemoteClient.js");const n=h.a.workers.loaderConfig,o=m({baseUrl:null==n?void 0:n.baseUrl,locale:Object(b.b)(),has:{"csp-restrictions":Object(r.a)("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==n?void 0:n.has},map:{...null==n?void 0:n.map},paths:{...null==n?void 0:n.paths},packages:(null==n?void 0:n.packages)||[]});e.postMessage({type:_,configure:{esriConfig:t,loaderConfig:o}})}(e);break;case A:e.removeEventListener("message",n),e.removeEventListener("error",o),t(e)}}function o(t){t.preventDefault(),e.removeEventListener("message",n),e.removeEventListener("error",o),v.warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new E).addEventListener("message",n),e.addEventListener("error",o)}e.addEventListener("message",n),e.addEventListener("error",o)})}const P=s.a.getLogger("esri.core.workers"),{ABORT:F,INVOKE:L,OPEN:M,OPENED:x,RESPONSE:C}=f.a;class D{constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",e=>{e.preventDefault(),P.error(e)})}static async create(e){const t=await async function(){if(!Object(r.a)("esri-workers"))return S(new E);let e;if(k)try{e=new Worker(k)}catch(t){v.warn(N,event),e=new E}else v.warn(N,event),e=new E;return S(e)}();return new D(t,e)}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:n}=t,r=Object(f.b)();return Object(a.f)((t,o)=>{const i={resolve:t,reject:o,abortHandle:Object(a.k)(n,()=>{this._outJobs.delete(r),this._post({type:F,jobId:r})})};this._outJobs.set(r,i),this._post({type:M,jobId:r,modulePath:e})})}_onMessage(e){const t=Object(f.d)(e);if(t)switch(t.type){case x:this._onOpenedMessage(t);break;case C:this._onResponseMessage(t);break;case F:this._onAbortMessage(t);break;case L:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,n=e.jobId,r=t.get(n);r&&(r.controller&&r.controller.abort(),t.delete(n))}_onInvokeMessage(e){const{methodName:t,jobId:n,data:r,abortable:o}=e,i=o?Object(a.c)():null,s=this._inJobs,c=l.d[t];let u;try{if("function"!=typeof c)throw new TypeError(t+" is not a function");u=c.call(null,r,{signal:i?i.signal:null})}catch(e){return void this._post({type:C,jobId:n,error:Object(f.e)(e)})}Object(a.i)(u)?(s.set(n,{controller:i,promise:u}),u.then(e=>{s.has(n)&&(s.delete(n),this._post({type:C,jobId:n},e))},e=>{s.has(n)&&(s.delete(n),e||(e={message:"Error encountered at method"+t}),Object(a.b)(e)||this._post({type:C,jobId:n,error:Object(f.e)(e||{message:"Error encountered at method "+t})}))})):this._post({type:C,jobId:n},u)}_onOpenedMessage(e){var t;const{jobId:n,data:r}=e,o=this._outJobs.get(n);o&&(this._outJobs.delete(n),null==(t=o.abortHandle)||t.remove(),o.resolve(r))}_onResponseMessage(e){var t;const{jobId:n,error:r,data:a}=e,i=this._outJobs.get(n);i&&(this._outJobs.delete(n),null==(t=i.abortHandle)||t.remove(),r?i.reject(o.a.fromJSON(JSON.parse(r))):i.resolve(a))}_post(e,t,n){return Object(f.c)(this.worker,e,t,n)}}var R=D;let H=Object(r.a)("esri-workers-debug")?1:Object(r.a)("host-browser")?navigator.hardwareConcurrency-1:0;H||(H=Object(r.a)("safari")&&Object(r.a)("mac")||Object(r.a)("trident")?7:2);let T=0;const U=[];function z(e,t){return J(e,{client:t})}async function J(e,t){const n=new class{constructor(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(e,t){return Object(a.f)((n,r)=>{let o=!0;const s=e=>{Object(a.t)(t.signal),o&&(o=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length;for(let o=0;o<e.length;++o){const c=e[o];Object(a.p)(c)?this._clientPromises[o]=c.then(e=>(this._clients[o]=new i.default(e,t),s(n),this._clients[o]),()=>(s(r),null)):(this._clients[o]=new i.default(c,t),this._clientPromises[o]=Object(a.r)(this._clients[o]),s(n))}})}broadcast(e,t,n){const r=new Array(this._clientPromises.length);for(let o=0;o<this._clientPromises.length;++o){const a=this._clientPromises[o];r[o]=a.then(r=>r.invoke(e,t,n))}return r}close(){for(const e of this._clientPromises)e.then(e=>e.close());this._clients.length=0,this._clientPromises.length=0}getAvailableClient(){let e;for(let t=0;t<this._clients.length;++t){const n=this._clients[t];if(n){if(!n.isBusy())return Object(a.r)(n)}else e=e||[],e.push(this._clientPromises[t])}return e?Object(a.q)(e):(this._clientIdx=(this._clientIdx+1)%this._clients.length,Object(a.r)(this._clients[this._clientIdx]))}invoke(e,t,n){let r=null;return Array.isArray(n)?(u.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),r={transferList:n}):r=n,this.closed?Object(a.h)(new Error("Connection closed")):this.getAvailableClient().then(n=>n.invoke(e,t,r))}on(e,t){return Object(a.a)(this._clientPromises).then(()=>Object(c.a)(this._clients.map(n=>n.on(e,t))))}openPorts(){return Object(a.f)(e=>{const t=new Array(this._clientPromises.length);let n=t.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then(o=>{t[r]=o.openPort(),0==--n&&e(t)})})}get test(){return{numClients:this._clients.length}}};return await n.open(e,t),n}async function W(e,t={}){if("string"!=typeof e)throw new o.a("workers:undefined-module","modulePath is missing");let s=t.strategy||"distributed";if(Object(r.a)("host-webworker")&&!Object(r.a)("esri-workers")&&(s="local"),"local"===s){let r=await i.default.loadWorker(e);r||(r=await n(198)(e)),Object(a.t)(t.signal);const o=t.client||r;return J([i.default.connect(r)],{...t,client:o})}if(await Y(),Object(a.t)(t.signal),"dedicated"===s){const n=T++%H;return J([await U[n].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const n=Math.min(t.maxNumWorkers,H);if(n<H){const r=new Array(n);for(let o=0;o<n;++o){const n=T++%H;r[o]=U[n].open(e,t)}return J(r,t)}}return J(U.map(n=>n.open(e,t)),t)}let B,K=null;async function Y(){if(K)return K;B=Object(a.c)();const e=[];for(let t=0;t<H;t++){const n=R.create(t).then(e=>(U[t]=e,e));e.push(n)}return K=Object(a.a)(e),K}},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return A})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return M})),n.d(t,"l",(function(){return H})),n.d(t,"m",(function(){return P})),n.d(t,"n",(function(){return C})),n.d(t,"o",(function(){return T})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return N})),n.d(t,"t",(function(){return y})),n.d(t,"u",(function(){return D})),n.d(t,"v",(function(){return R})),n.d(t,"w",(function(){return p})),n.d(t,"x",(function(){return L})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return _})),n.d(t,"A",(function(){return O})),n.d(t,"B",(function(){return k})),n.d(t,"C",(function(){return j}));n(76);var r=n(73),o=(n(72),n(210));function a(e){var t;return Array.isArray(e)?null==(t=e[0])?void 0:t.spatialReference:null==e?void 0:e.spatialReference}function i(e){return e?Array.isArray(e)?e.map(i):e.toJSON?e.toJSON():e:e}function s(e){return Array.isArray(e)?e.map(e=>Object(r.a)(e)):Object(r.a)(e)}let c;async function u(e,t){return(await async function(){return c||(c=Object(o.a)("geometryEngineWorker",{strategy:"distributed"})),c}()).invoke("executeGEOperation",{operation:e,parameters:i(t)})}async function l(e,t){return s(await u("clip",[a(e),e,t]))}async function f(e,t){return s(await u("cut",[a(e),e,t]))}function h(e,t){return u("contains",[a(e),e,t])}function d(e,t){return u("crosses",[a(e),e,t])}function b(e,t,n){return u("distance",[a(e),e,t,n])}function g(e,t){return u("equals",[a(e),e,t])}function m(e,t){return u("intersects",[a(e),e,t])}function O(e,t){return u("touches",[a(e),e,t])}function j(e,t){return u("within",[a(e),e,t])}function w(e,t){return u("disjoint",[a(e),e,t])}function y(e,t){return u("overlaps",[a(e),e,t])}function p(e,t,n){return u("relate",[a(e),e,t,n])}function E(e){return u("isSimple",[a(e),e])}async function v(e){return s(await u("simplify",[a(e),e]))}async function A(e,t){return s(await u("difference",[a(e),e,t]))}async function _(e,t){return s(await u("symmetricDifference",[a(e),e,t]))}async function I(e,t){return s(await u("intersect",[a(e),e,t]))}async function k(e,t=null){const n=function(e,t){let n;return Array.isArray(e)?n=e:(n=[],n.push(e),null!=t&&n.push(t)),n}(e,t);return s(await u("union",[a(n),n]))}async function N(e,t,n,r,o,i){return s(await u("offset",[a(e),e,t,n,r,o,i]))}async function S(e,t,n,r=!1){const o=[a(e),e,t,n,r];return s(await u("buffer",o))}async function P(e,t,n,r,o,i){const c=[a(e),e,t,n,r,o,i];return s(await u("geodesicBuffer",c))}function F(e){return"xmin"in e?e.center:"x"in e?e:e.extent.center}async function L(e,t,n){var r;if(null==e)throw new Error("Illegal Argument Exception");const o=e.spatialReference;n=null!=(r=n)?r:F(e);const a=e.constructor.fromJSON(await u("rotate",[o,e,t,n]));return a.spatialReference=o,a}async function M(e,t,n,r){return s(await u("generalize",[a(e),e,t,n,r]))}async function x(e,t,n){return s(await u("densify",[a(e),e,t,n]))}async function C(e,t,n,r=0){return s(await u("geodesicDensify",[a(e),e,t,n,r]))}function D(e,t){return u("planarArea",[a(e),e,t])}function R(e,t){return u("planarLength",[a(e),e,t])}function H(e,t,n){return u("geodesicArea",[a(e),e,t,n])}function T(e,t,n){return u("geodesicLength",[a(e),e,t,n])}},546:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return O}));var r=n(12),o=n(109),a=n(76),i=n(70),s=n(147),c=n(121),u=n(114),l=n(73),f=n(127),h=n(476),d=n(365),b=n(228);function g(e){return 0===r.c.indexOf("4.")?c.a.fromExtent(e):new c.a({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function m(e){if(Object(f.I)(e,2,2),e[0]instanceof o.a&&e[1]instanceof o.a);else if(e[0]instanceof o.a&&null===e[1]);else if(e[1]instanceof o.a&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new Error("Illegal Argument")}function O(e){"async"===e.mode&&(e.functions.disjoint=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null===n[0]||null===n[1]||Object(b.h)(n[0],n[1])}))},e.functions.intersects=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null!==n[1]&&Object(b.q)(n[0],n[1])}))},e.functions.touches=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null!==n[1]&&Object(b.A)(n[0],n[1])}))},e.functions.crosses=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null!==n[1]&&Object(b.d)(n[0],n[1])}))},e.functions.within=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null!==n[1]&&Object(b.C)(n[0],n[1])}))},e.functions.contains=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null!==n[1]&&Object(b.c)(n[0],n[1])}))},e.functions.overlaps=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null!==n[1]&&Object(b.t)(n[0],n[1])}))},e.functions.equals=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return Object(f.I)(n,2,2),n[0]===n[1]||(n[0]instanceof o.a&&n[1]instanceof o.a?Object(b.j)(n[0],n[1]):!(!Object(f.y)(n[0])||!Object(f.y)(n[1]))&&n[0].getTime()===n[1].getTime())}))},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,3,3),n[0]instanceof o.a&&n[1]instanceof o.a)return Object(b.w)(n[0],n[1],Object(f.x)(n[2]));if(n[0]instanceof o.a&&null===n[1])return!1;if(n[1]instanceof o.a&&null===n[0])return!1;if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))},e.functions.intersection=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null===n[0]||null===n[1]?null:Object(b.p)(n[0],n[1])}))},e.functions.union=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){const a=[];if(0===(r=Object(f.h)(r)).length)throw new Error("Function called with wrong number of Parameters");if(1===r.length)if(Object(f.A)(r[0])){const e=Object(f.h)(r[0]);for(let t=0;t<e.length;t++)if(null!==e[t]){if(!(e[t]instanceof o.a))throw new Error("Illegal Argument");a.push(e[t])}}else{if(!Object(f.H)(r[0])){if(r[0]instanceof o.a)return Object(f.K)(Object(d.a)(r[0]),t.spatialReference);if(null===r[0])return null;throw new Error("Illegal Argument")}{const e=Object(f.h)(r[0].toArray());for(let t=0;t<e.length;t++)if(null!==e[t]){if(!(e[t]instanceof o.a))throw new Error("Illegal Argument");a.push(e[t])}}}else for(let e=0;e<r.length;e++)if(null!==r[e]){if(!(r[e]instanceof o.a))throw new Error("Illegal Argument");a.push(r[e])}return 0===a.length?null:Object(b.B)(a)}))},e.functions.difference=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null!==n[0]&&null===n[1]?Object(d.a)(n[0]):null===n[0]?null:Object(b.g)(n[0],n[1])}))},e.functions.symmetricdifference=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return m(n=Object(f.h)(n)),null===n[0]&&null===n[1]?null:null===n[0]?Object(d.a)(n[1]):null===n[1]?Object(d.a)(n[0]):Object(b.z)(n[0],n[1])}))},e.functions.clip=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,2),!(n[1]instanceof i.a)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return null===n[1]?null:Object(b.b)(n[0],n[1])}))},e.functions.cut=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,2),!(n[1]instanceof u.a)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return[];if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return null===n[1]?[Object(d.a)(n[0])]:Object(b.e)(n[0],n[1])}))},e.functions.area=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(f.I)(r,1,2),null===(r=Object(f.h)(r))[0])return 0;if(Object(f.S)(r[0]))return r[0].sumArea(Object(d.c)(Object(f.e)(r[1],-1)),!1,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(f.A)(r[0])||Object(f.H)(r[0])){const e=Object(f.k)(r[0],t.spatialReference);return null===e?0:Object(b.u)(e,Object(d.c)(Object(f.e)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(b.u)(r[0],Object(d.c)(Object(f.e)(r[1],-1)))}))},e.functions.areageodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(f.I)(r,1,2),null===(r=Object(f.h)(r))[0])return 0;if(Object(f.S)(r[0]))return r[0].sumArea(Object(d.c)(Object(f.e)(r[1],-1)),!0,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(f.A)(r[0])||Object(f.H)(r[0])){const e=Object(f.k)(r[0],t.spatialReference);return null===e?0:Object(b.l)(e,Object(d.c)(Object(f.e)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(b.l)(r[0],Object(d.c)(Object(f.e)(r[1],-1)))}))},e.functions.length=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(f.I)(r,1,2),null===(r=Object(f.h)(r))[0])return 0;if(Object(f.S)(r[0]))return r[0].sumLength(Object(d.b)(Object(f.e)(r[1],-1)),!1,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(f.A)(r[0])||Object(f.H)(r[0])){const e=Object(f.j)(r[0],t.spatialReference);return null===e?0:Object(b.v)(e,Object(d.b)(Object(f.e)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(b.v)(r[0],Object(d.b)(Object(f.e)(r[1],-1)))}))},e.functions.lengthgeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(Object(f.I)(r,1,2),null===(r=Object(f.h)(r))[0])return 0;if(Object(f.S)(r[0]))return r[0].sumLength(Object(d.b)(Object(f.e)(r[1],-1)),!0,t.abortSignal).then(e=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e});if(Object(f.A)(r[0])||Object(f.H)(r[0])){const e=Object(f.j)(r[0],t.spatialReference);return null===e?0:Object(b.o)(e,Object(d.b)(Object(f.e)(r[1],-1)))}if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return Object(b.o)(r[0],Object(d.b)(Object(f.e)(r[1],-1)))}))},e.functions.distance=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){r=Object(f.h)(r),Object(f.I)(r,2,3);let a=r[0];(Object(f.A)(r[0])||Object(f.H)(r[0]))&&(a=Object(f.l)(r[0],t.spatialReference));let i=r[1];if((Object(f.A)(r[1])||Object(f.H)(r[1]))&&(i=Object(f.l)(r[1],t.spatialReference)),!(a instanceof o.a))throw new Error("Illegal Argument");if(!(i instanceof o.a))throw new Error("Illegal Argument");return Object(b.i)(a,i,Object(d.b)(Object(f.e)(r[2],-1)))}))},e.functions.distancegeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){n=Object(f.h)(n),Object(f.I)(n,2,3);const r=n[0],o=n[1];if(!(r instanceof a.a))throw new Error("Illegal Argument");if(!(o instanceof a.a))throw new Error("Illegal Argument");const i=new u.a({paths:[],spatialReference:r.spatialReference});return i.addPath([r,o]),Object(b.o)(i,Object(d.b)(Object(f.e)(n[2],-1)))}))},e.functions.densify=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(f.v)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");if(r<=0)throw new Error("Illegal Argument");return n[0]instanceof c.a||n[0]instanceof u.a?Object(b.f)(n[0],r,Object(d.b)(Object(f.e)(n[2],-1))):n[0]instanceof i.a?Object(b.f)(g(n[0]),r,Object(d.b)(Object(f.e)(n[2],-1))):n[0]}))},e.functions.densifygeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(f.v)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");if(r<=0)throw new Error("Illegal Argument");return n[0]instanceof c.a||n[0]instanceof u.a?Object(b.n)(n[0],r,Object(d.b)(Object(f.e)(n[2],-1))):n[0]instanceof i.a?Object(b.n)(g(n[0]),r,Object(d.b)(Object(f.e)(n[2],-1))):n[0]}))},e.functions.generalize=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,4),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(f.v)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");return Object(b.k)(n[0],r,Object(f.w)(Object(f.e)(n[2],!0)),Object(d.b)(Object(f.e)(n[3],-1)))}))},e.functions.buffer=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(f.v)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");return 0===r?Object(d.a)(n[0]):Object(b.a)(n[0],r,Object(d.b)(Object(f.e)(n[2],-1)))}))},e.functions.buffergeodetic=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,3),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");const r=Object(f.v)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");return 0===r?Object(d.a)(n[0]):Object(b.m)(n[0],r,Object(d.b)(Object(f.e)(n[2],-1)))}))},e.functions.offset=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,2,6),null===n[0])return null;if(!(n[0]instanceof c.a||n[0]instanceof u.a))throw new Error("Illegal Argument");const r=Object(f.v)(n[1]);if(isNaN(r))throw new Error("Illegal Argument");const o=Object(f.v)(Object(f.e)(n[4],10));if(isNaN(o))throw new Error("Illegal Argument");const a=Object(f.v)(Object(f.e)(n[5],0));if(isNaN(a))throw new Error("Illegal Argument");return Object(b.s)(n[0],r,Object(d.b)(Object(f.e)(n[2],-1)),Object(f.x)(Object(f.e)(n[3],"round")).toLowerCase(),o,a)}))},e.functions.rotate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){n=Object(f.h)(n),Object(f.I)(n,2,3);let r=n[0];if(null===r)return null;if(!(r instanceof o.a))throw new Error("Illegal Argument");r instanceof i.a&&(r=c.a.fromExtent(r));const s=Object(f.v)(n[1]);if(isNaN(s))throw new Error("Illegal Argument");const u=Object(f.e)(n[2],null);if(null===u)return Object(b.x)(r,s);if(u instanceof a.a)return Object(b.x)(r,s,u);throw new Error("Illegal Argument")}))},e.functions.centroid=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){if(r=Object(f.h)(r),Object(f.I)(r,1,1),null===r[0])return null;let l=r[0];if((Object(f.A)(r[0])||Object(f.H)(r[0]))&&(l=Object(f.l)(r[0],t.spatialReference)),null===l)return null;if(!(l instanceof o.a))throw new Error("Illegal Argument");return l instanceof a.a?Object(f.K)(Object(d.a)(r[0]),t.spatialReference):l instanceof c.a?l.centroid:l instanceof u.a?Object(h.f)(l):l instanceof s.a?Object(h.e)(l):l instanceof i.a?l.center:null}))},e.functions.multiparttosinglepart=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){r=Object(f.h)(r),Object(f.I)(r,1,1);const h=[];if(null===r[0])return null;if(!(r[0]instanceof o.a))throw new Error("Illegal Argument");return r[0]instanceof a.a||r[0]instanceof i.a?[Object(f.K)(Object(d.a)(r[0]),t.spatialReference)]:Object(b.y)(r[0]).then(e=>{if(e instanceof c.a){const t=[],n=[];for(let r=0;r<e.rings.length;r++)if(e.isClockwise(e.rings[r])){const n=Object(l.a)({rings:[e.rings[r]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});t.push(n)}else n.push({ring:e.rings[r],pt:e.getPoint(r,0)});for(let e=0;e<n.length;e++)for(let r=0;r<t.length;r++)if(t[r].contains(n[e].pt)){t[r].addRing(n[e].ring);break}return t}if(e instanceof u.a){const t=[];for(let n=0;n<e.paths.length;n++){const r=Object(l.a)({paths:[e.paths[n]],hasZ:!0===e.hasZ,hazM:!0===e.hasM,spatialReference:e.spatialReference.toJSON()});t.push(r)}return t}if(r[0]instanceof s.a){const e=Object(f.K)(Object(d.a)(r[0]),t.spatialReference);for(let t=0;t<e.points.length;t++)h.push(e.getPoint(t));return h}return null})}))},e.functions.issimple=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,1,1),null===n[0])return!0;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return Object(b.r)(n[0])}))},e.functions.simplify=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=Object(f.h)(n),Object(f.I)(n,1,1),null===n[0])return null;if(!(n[0]instanceof o.a))throw new Error("Illegal Argument");return Object(b.y)(n[0])}))})}}});