self.webpackChunkRemoteClient([202],{555:function(e,t,r){"use strict";r.r(t),r.d(t,"createLabelFunction",(function(){return b})),r.d(t,"formatField",(function(){return y}));r(20);var n=r(7),a=r(10),u=r(180),l=r(82),i=r(122),s=r(125),o=r(104),c=r(120);const p=n.a.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},f={getAttribute:(e,t)=>e.field(t)};async function b(e,t,n){if(!e||!e.symbol)return d;const i=e.where,s=Object(c.b)(e),b=i?await Promise.resolve().then(r.bind(null,137)):null;let m;if("arcade"===s.type){const e=await Object(u.c)(s.expression,n,t);m={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=r)return r.toString()}catch(e){p.error(new a.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:s}))}return null},needsHydrationToEvaluate:()=>null==Object(c.e)(s.expression)}}else m={type:"simple",evaluate:e=>s.expression.replace(/{[^}]*}/g,r=>{const n=r.slice(1,-1),a=Object(l.i)(t,n);if(!a)return r;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":y(u,a)})};if(i){let r;try{r=b.WhereClause.create(i,new o.a(t))}catch(e){return d}const n=m.evaluate;m.evaluate=e=>{const t="attributes"in e?void 0:f;return r.testFeature(e,t)?n(e):null}}return m}function y(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,n="range"in r?r.range[0]:r.minValue,a="range"in r?r.range[1]:r.maxValue;if(n<=t&&t<=a)return r.name}let n=e;return"date"===t.type||"esriFieldTypeDate"===t.type?n=Object(i.b)(n,Object(i.a)("short-date")):Object(l.l)(t)&&(n=Object(s.b)(+n)),n||""}}});