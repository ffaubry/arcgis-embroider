self.webpackChunkRemoteClient([72],{674:function(t,e,n){"use strict";n.r(e);var r=n(18),o=n(2),i=n(93);function c(t,e,n){const r=t.byteLength/(4*e),o=new Uint32Array(t,0,r*e);let c=new Uint32Array(r);const f=n&&n.minReduction||0,g=n&&n.originalIndices||null,d=n&&n.componentOffsets||null;let h=0;if(d)for(let t=0;t<d.length-1;t++){const e=d[t+1]-d[t];e>h&&(h=e)}else h=r;const p=Math.floor(1.1*h)+1;(null==l||l.length<2*p)&&(l=new Uint32Array(Object(i.i)(2*p)));for(let t=0;t<2*p;t++)l[t]=0;let m=0;const b=!!d&&!!g,w=b?g.length:r,y=b?new Uint32Array(g.length):null,I=1.96;let O=0!==f?Math.ceil(7.84*I/(f*f)*f*(1-f)):w,v=1,A=d?d[1]:w;for(let t=0;t<w;t++){if(t===O){const e=1-m/t;if(e+I*Math.sqrt(e*(1-e)/t)<f)return null;O*=2}if(t===A){for(let t=0;t<2*p;t++)l[t]=0;if(g)for(let t=d[v-1];t<d[v];t++)y[t]=c[g[t]];A=d[++v]}const n=b?g[t]:t,r=n*e,i=u(o,r,e);let a=i%p,h=m;for(;0!==l[2*a+1];){if(l[2*a]===i){const t=l[2*a+1]-1;if(s(o,r,t*e,e)){h=c[t];break}}a++,a>=p&&(a-=p)}h===m&&(l[2*a]=i,l[2*a+1]=n+1,m++),c[n]=h}if(0!==f&&1-m/r<f)return null;if(b){for(let t=d[v-1];t<y.length;t++)y[t]=c[g[t]];c=y}const j=new Uint32Array(e*m);m=0;for(let t=0;t<w;t++)c[t]===m&&(a(o,(b?g[t]:t)*e,j,m*e,e),m++);if(g&&!b){const t=new Uint32Array(g.length);for(let e=0;e<t.length;e++)t[e]=c[g[e]];c=t}return{buffer:j.buffer,indices:c,uniqueCount:m}}function s(t,e,n,r){for(let o=0;o<r;o++)if(t[e+o]!==t[n+o])return!1;return!0}function a(t,e,n,r,o){for(let i=0;i<o;i++)n[r+i]=t[e+i]}function u(t,e,n){let r=0;for(let o=0;o<n;o++)r=t[e+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let l=null;const f={divisor:0};function g(t,e={}){e={...f,...e};const n=t.stride;return t.fieldNames.filter(e=>{const n=t.fields.get(e).optional;return!(n&&n.glPadding)}).map(r=>{const o=t.fields.get(r),i=o.constructor.ElementCount,c=function(t){const e=d[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}(o.constructor.ElementType),s=o.offset,a=!(!o.optional||!o.optional.glNormalized);return{name:r,stride:n,count:i,type:c,offset:s,normalized:a,divisor:e.divisor}})}const d={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};var h=n(462);const p=Object(h.a)().vec3f("position").u16("componentIndex").u16("_padding"),m=(g(Object(h.a)().vec2u8("sideness")),Object(h.a)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0})),b=m.clone().vec3f("normal"),w=m.clone().vec3f("normalA").vec3f("normalB");var y=n(45),I=n(90),O=n(115);class v{updateSettings(t){this.settings=t}write(t,e,n){const r=function(t){const e=A;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],k[0]=5381;for(let t=0;t<j.length;t++)k[0]=31*k[0]+j[t];return k[0]}(n);N.seed=r;const o=N.getIntRange(0,255),i=N.getIntRange(0,this.settings.variants-1),c=N.getFloat(),s=255*(.5*function(t,e){const n=t<0?-1:1;return Math.pow(Math.abs(t),1.2)*n}(-(1-Math.min(c/.7,1))+Math.max(0,c-.7)/(1-.7))+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,o),t.variantStroke.set(e,i),t.variantExtension.set(e,s)}trim(t,e){return t.slice(0,e)}}const A=new Float32Array(6),j=new Uint32Array(A.buffer),k=new Uint32Array(1),N=new y.a;class E{constructor(){this.commonWriter=new v}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return b.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),Object(O.c)(U,n.faceNormal0,n.faceNormal1),Object(O.o)(U,U),t.normal.setVec(e,U)}trim(t,e){return this.commonWriter.trim(t,e)}}E.Layout=b,E.glLayout=g(b,{divisor:1});class M{constructor(){this.commonWriter=new v}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return w.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this.commonWriter.trim(t,e)}}M.Layout=w,M.glLayout=g(w,{divisor:1});const U=Object(I.e)();function S(t,e){const n=t.length/3,r=new Uint32Array(e+1),o=new Uint32Array(e+1),i=(t,e)=>{t<e?r[t+1]++:o[e+1]++};for(let e=0;e<n;e++){const n=t[3*e],r=t[3*e+1],o=t[3*e+2];i(n,r),i(r,o),i(o,n)}let c=0,s=0;for(let t=0;t<e;t++){const e=r[t+1],n=o[t+1];r[t+1]=c,o[t+1]=s,c+=e,s+=n}const a=new Uint32Array(6*n),u=r[e],l=(t,e,n)=>{if(t<e){const o=r[t+1]++;a[2*o]=e,a[2*o+1]=n}else{const r=o[e+1]++;a[2*u+2*r]=t,a[2*u+2*r+1]=n}};for(let e=0;e<n;e++){const n=t[3*e],r=t[3*e+1],o=t[3*e+2];l(n,r,e),l(r,o,e),l(o,n,e)}const f=(t,e)=>{const n=2*t,r=e-t;for(let t=1;t<r;t++){const e=a[n+2*t],r=a[n+2*t+1];let o=t-1;for(;o>=0&&a[n+2*o]>e;o--)a[n+2*o+2]=a[n+2*o],a[n+2*o+3]=a[n+2*o+1];a[n+2*o+2]=e,a[n+2*o+3]=r}};for(let t=0;t<e;t++)f(r[t],r[t+1]),f(u+o[t],u+o[t+1]);const g=new Int32Array(3*n),d=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,h=(t,e)=>{const n=d(t,e);g[3*e+n]=-1},p=(t,e,n,r)=>{const o=d(t,e);g[3*e+o]=r;const i=d(n,r);g[3*r+i]=e};for(let t=0;t<e;t++){let e=r[t];const n=r[t+1];let i=o[t];const c=o[t+1];for(;e<n&&i<c;){const n=a[2*e],r=a[2*u+2*i];n===r?(p(t,a[2*e+1],r,a[2*u+2*i+1]),e++,i++):n<r?(h(t,a[2*e+1]),e++):(h(r,a[2*u+2*i+1]),i++)}for(;e<n;)h(t,a[2*e+1]),e++;for(;i<c;)h(a[2*u+2*i],a[2*u+2*i+1]),i++}return g}var V=n(379);function W(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:x(t.layout)}}function D(t){return function(t){const e=Object(h.a)();return e.stride=t.stride,e.fieldNames=t.fieldNames,t.fields.forEach(t=>{return e.fields.set(t[0],{...t[1],constructor:(n=t[1].constructor,T.get(n))});var n}),e}(t.layout).createView(t.buffer)}function x(t){const e=new Array;return t.fields.forEach((t,n)=>{const r={...t,constructor:F(t.constructor)};e.push([n,r])}),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const L=[V.a,V.m,V.u,V.C,V.f,V.h,V.b,V.n,V.v,V.D,V.g,V.i,V.l,V.t,V.B,V.J,V.j,V.r,V.z,V.H,V.k,V.s,V.A,V.I,V.e,V.q,V.y,V.G,V.c,V.o,V.w,V.E,V.d,V.p,V.x,V.F];function F(t){return`${t.ElementType}_${t.ElementCount}`}const T=new Map;L.forEach(t=>T.set(F(t),t));var B=n(21),_=n(295);function z(t,e){return t.cosAngle<e}function C(t,e){return t.cosAngle>e}function P(t,e){const n=Object(i.a)(t.cosAngle),r=R.fwd,o=R.ortho;return Object(_.c)(r,t.position1,t.position0),n*(Object(O.e)(Object(O.d)(o,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>e}const R={edge:{position0:Object(I.e)(),position1:Object(I.e)(),faceNormal0:Object(I.e)(),faceNormal1:Object(I.e)(),componentIndex:0,cosAngle:0},ortho:Object(I.e)(),fwd:Object(I.e)()},q={v0:Object(I.e)(),v1:Object(I.e)(),v2:Object(I.e)()},Z={anglePlanar:4,angleSignificantEdge:35};e.default=class{constructor(){this.regularWriter=new E,this.silhouetteWriter=new M}async process(t,e){if(Object(o.g)(e))return this.work(t);const n=new Array,r=this.packInput(t,n),i=await e.invoke("wrappedWork",r,{transferList:n});return this.unpackOutput(i)}async wrappedWork(t){const e=this.unpackInput(t),n=this.work(e),r=new Array;return this.packInputTransferables(e,r),{result:this.packOutput(n,r),transferList:r}}work(t){const e=this.extractEdgeInformation(t.data,t.skipDeduplicate,t.originalIndices);return this.regularWriter.updateSettings(t.writerSettings),this.silhouetteWriter.updateSettings(t.writerSettings),function(t,e,n,o=Z){const c=t.vertices.position,s=t.vertices.componentIndex,a=Object(i.d)(o.anglePlanar),u=Object(i.d)(o.angleSignificantEdge),l=Math.cos(u),f=Math.cos(a),g=R.edge,d=g.position0,h=g.position1,p=g.faceNormal0,m=g.faceNormal1,b=function(t){const e=t.faces.length/3,n=t.vertices.position,r=t.faces,o=q.v0,i=q.v1,c=q.v2,s=new Float32Array(3*e);for(let t=0;t<e;t++){const e=r[3*t+0],a=r[3*t+1],u=r[3*t+2];n.getVec(e,o),n.getVec(a,i),n.getVec(u,c),Object(O.g)(i,i,o),Object(O.g)(c,c,o),Object(O.d)(o,i,c),Object(O.o)(o,o),s[3*t+0]=o[0],s[3*t+1]=o[1],s[3*t+2]=o[2]}return s}(t),w=function(t){const e=t.faces.length/3,n=t.faces,r=t.neighbors;let o=0;for(let t=0;t<e;t++){const e=r[3*t+0],i=r[3*t+1],c=r[3*t+2],s=n[3*t+0],a=n[3*t+1],u=n[3*t+2];o+=-1===e||s<a?1:0,o+=-1===i||a<u?1:0,o+=-1===c||u<s?1:0}const i=new Int32Array(4*o);let c=0;for(let t=0;t<e;t++){const e=r[3*t+0],o=r[3*t+1],s=r[3*t+2],a=n[3*t+0],u=n[3*t+1],l=n[3*t+2];(-1===e||a<u)&&(i[c++]=a,i[c++]=u,i[c++]=t,i[c++]=e),(-1===o||u<l)&&(i[c++]=u,i[c++]=l,i[c++]=t,i[c++]=o),(-1===s||l<a)&&(i[c++]=l,i[c++]=a,i[c++]=t,i[c++]=s)}return i}(t),y=w.length/4,I=e.allocate(y);let v=0;const A=y,j=n.allocate(A);let k=0,N=0,E=0;const M=Object(B.g)(0,y),U=new Float32Array(y);Object(r.b)(U,(t,e,n)=>{c.getVec(w[4*e+0],d),c.getVec(w[4*e+1],h),n[e]=Object(O.l)(d,h)}),M.sort((t,e)=>U[e]-U[t]);const S=new Array,V=new Array;for(let t=0;t<y;t++){const r=M[t],o=U[r],i=w[4*r+0],u=w[4*r+1],y=w[4*r+2],A=w[4*r+3],W=-1===A;if(c.getVec(i,d),c.getVec(u,h),W)Object(O.r)(p,b[3*y+0],b[3*y+1],b[3*y+2]),Object(O.h)(m,p),g.componentIndex=s.get(i),g.cosAngle=Object(O.e)(p,m);else{if(Object(O.r)(p,b[3*y+0],b[3*y+1],b[3*y+2]),Object(O.r)(m,b[3*A+0],b[3*A+1],b[3*A+2]),g.componentIndex=s.get(i),g.cosAngle=Object(O.e)(p,m),C(g,f))continue;g.cosAngle<-.9999&&Object(O.h)(m,p)}N+=o,E++,W||z(g,l)?(e.write(I,v++,g),S.push(o)):P(g,a)&&(n.write(j,k++,g),V.push(o))}const W=new Float32Array(S.reverse()),D=new Float32Array(V.reverse());return{regular:{instancesData:e.trim(I,v),lodInfo:{lengths:W}},silhouette:{instancesData:n.trim(j,k),lodInfo:{lengths:D}},averageEdgeLength:N/E}}(e,this.regularWriter,this.silhouetteWriter)}packInputTransferables(t,e){e.push(t.data.buffer)}packInput(t,e){this.packInputTransferables(t,e);const n={dataBuffer:t.data.buffer,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate};return t.originalIndices&&(n.originalIndicesBuffer=t.originalIndices.buffer,n.originalIndicesType=Object(r.j)(t.originalIndices)?"Uint32Array":"Uint16Array"),n}unpackInput(t){return{data:p.createView(t.dataBuffer),originalIndices:"Uint32Array"===t.originalIndicesType?new Uint32Array(t.originalIndicesBuffer):"Uint16Array"===t.originalIndicesType?new Uint16Array(t.originalIndicesBuffer):void 0,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}packOutput(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:W(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:W(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}unpackOutput(t){return{regular:{instancesData:D(t.regular.instancesData),lodInfo:{lengths:new Float32Array(t.regular.lodInfo.lengths)}},silhouette:{instancesData:D(t.silhouette.instancesData),lodInfo:{lengths:new Float32Array(t.silhouette.lodInfo.lengths)}},averageEdgeLength:t.averageEdgeLength}}extractEdgeInformation(t,e,n){if(e&&n)return{faces:n,neighbors:S(n,t.count),vertices:t};{const e=c(t.buffer,t.stride/4,{originalIndices:n}),r=S(e.indices,e.uniqueCount);return{faces:e.indices,neighbors:r,vertices:p.createView(e.buffer)}}}}},90:function(t,e,n){"use strict";function r(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,e,n){return[t,e,n]}function c(t){const e=[0,0,0],n=Math.min(3,t.length);for(let r=0;r<n;++r)e[r]=t[r];return e}function s(t,e){return new Float64Array(t,e,3)}function a(){return i(1,1,1)}function u(){return i(1,0,0)}function l(){return i(0,1,0)}function f(){return i(0,0,1)}n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return i}));const g=[0,0,0],d=a(),h=u(),p=l(),m=f();Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,fromArray:c,createView:s,zeros:function(){return[0,0,0]},ones:a,unitX:u,unitY:l,unitZ:f,ZEROS:g,ONES:d,UNIT_X:h,UNIT_Y:p,UNIT_Z:m})},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return o})),n.d(e,"j",(function(){return a})),n.d(e,"k",(function(){return g}));const r=new Float32Array(1);Number.isFinite,Number.isNaN;function o(t){--t;for(let e=1;e<32;e<<=1)t|=t>>e;return t+1}function i(t,e,n){return t<e?e:t>n?n:t}function c(t,e,n){return Math.min(Math.max(t,e),n)}function s(t){return 0==(t&t-1)}function a(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}Math.sign;const u=Math.log2||function(t){return Math.log(t)/Math.LN2};function l(t,e,n){return t+(e-t)*n}function f(t){return t*Math.PI/180}function g(t){return 180*t/Math.PI}function d(t){return Math.acos(i(t,-1,1))}function h(t){return Math.asin(i(t,-1,1))}function p(t){return r[0]=t,r[0]}p(34028234663852886e22)}});