(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{592:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return w})),t.d(n,"f",(function(){return o}));var r=t(73);const a=new RegExp("__begin__","ig"),s=new RegExp("__end__","ig"),u=new RegExp("^__begin__","i"),i=new RegExp("__end__$","i");function o(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function l(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function c(e){const n=l(e);if(!n)return null;switch(n.type){case"conventional":return f(n.expression);case"arcade":return n.expression}return null}function p(e){const n=l(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(d);return n&&n[1].trim()||null}(n.expression);case"arcade":return w(n.expression)}return null}function f(e){let n;return e?(n=Object(r.c)(e,e=>'__begin__$feature["'+e+'"]__end__'),n=u.test(n)?n.replace(u,""):'"'+n,n=i.test(n)?n.replace(i,""):n+'"',n=n.replace(a,'" + ').replace(s,' + "')):n='""',n}const d=/^\s*\{([^}]+)\}\s*$/i;const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function w(e){if(!e)return null;let n=b.exec(e)||x.exec(e);return n?n[1]||n[3]:(n=g.exec(e),n?n[2]:null)}},975:function(e,n,t){"use strict";t.r(n),t.d(n,"createLabelFunction",(function(){return b})),t.d(n,"formatField",(function(){return x}));t(9);var r=t(5),a=t(14),s=t(301),u=t(144),i=t(70),o=t(66),l=t(417),c=t(592);const p=r.a.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},d={getAttribute:(e,n)=>e.field(n)};async function b(e,n,r){if(!e||!e.symbol)return f;const i=e.where,o=Object(c.b)(e),b=i?await t.e(10).then(t.bind(null,387)):null;let g;if("arcade"===o.type){const e=await Object(s.c)(o.expression,r,n);g={type:"arcade",evaluate(n){try{const t=e.evaluate({$feature:"attributes"in n?e.repurposeFeature(n):e.repurposeAdapter(n)});if(null!=t)return t.toString()}catch(e){p.error(new a.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:n,expression:o}))}return null},needsHydrationToEvaluate:()=>null==Object(c.e)(o.expression)}}else g={type:"simple",evaluate:e=>o.expression.replace(/{[^}]*}/g,t=>{const r=t.slice(1,-1),a=Object(u.n)(n,r);if(!a)return t;let s=null;return"attributes"in e?e&&e.attributes&&(s=e.attributes[a.name]):s=e.field(a.name),null==s?"":x(s,a)})};if(i){let t;try{t=b.WhereClause.create(i,new l.a(n))}catch(e){return f}const r=g.evaluate;g.evaluate=e=>{const n="attributes"in e?void 0:d;return t.testFeature(e,n)?r(e):null}}return g}function x(e,n){if(null==e)return"";const t=n.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const n=e;for(const e of t.codedValues)if(e.code===n)return e.name}else if("range"===t.type){const n=+e,r="range"in t?t.range[0]:t.minValue,a="range"in t?t.range[1]:t.maxValue;if(r<=n&&n<=a)return t.name}let r=e;return"date"===n.type||"esriFieldTypeDate"===n.type?r=Object(i.b)(r,Object(i.a)("short-date")):Object(u.q)(n)&&(r=Object(o.b)(+r)),r||""}}}]);