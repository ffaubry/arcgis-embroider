(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{590:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return b})),r.d(e,"e",(function(){return h})),r.d(e,"f",(function(){return l})),r.d(e,"g",(function(){return E})),r.d(e,"h",(function(){return T})),r.d(e,"i",(function(){return m})),r.d(e,"j",(function(){return p})),r.d(e,"k",(function(){return i})),r.d(e,"l",(function(){return g}));var n=r(42);function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function i(t,e,r,n,s){return t[0]=e,t[1]=r,t[2]=n,t[3]=s,t}function f(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function u(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function o(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function a(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function d(t,e){const r=e[0]-t[0],n=e[1]-t[1],s=e[2]-t[2],i=e[3]-t[3];return Math.sqrt(r*r+n*n+s*s+i*i)}function y(t,e){const r=e[0]-t[0],n=e[1]-t[1],s=e[2]-t[2],i=e[3]-t[3];return r*r+n*n+s*s+i*i}function h(t){const e=t[0],r=t[1],n=t[2],s=t[3];return Math.sqrt(e*e+r*r+n*n+s*s)}function l(t){const e=t[0],r=t[1],n=t[2],s=t[3];return e*e+r*r+n*n+s*s}function p(t,e){const r=e[0],n=e[1],s=e[2],i=e[3];let f=r*r+n*n+s*s+i*i;return f>0&&(f=1/Math.sqrt(f),t[0]=r*f,t[1]=n*f,t[2]=s*f,t[3]=i*f),t}function b(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function m(t,e,r,n){const s=e[0],i=e[1],f=e[2],u=e[3];return t[0]=s+n*(r[0]-s),t[1]=i+n*(r[1]-i),t[2]=f+n*(r[2]-f),t[3]=u+n*(r[3]-u),t}function g(t,e,r){const n=e[0],s=e[1],i=e[2],f=e[3];return t[0]=r[0]*n+r[4]*s+r[8]*i+r[12]*f,t[1]=r[1]*n+r[5]*s+r[9]*i+r[13]*f,t[2]=r[2]*n+r[6]*s+r[10]*i+r[14]*f,t[3]=r[3]*n+r[7]*s+r[11]*i+r[15]*f,t}function E(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function T(t,e){const r=t[0],s=t[1],i=t[2],f=t[3],u=e[0],o=e[1],c=e[2],a=e[3];return Math.abs(r-u)<=n.a*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-o)<=n.a*Math.max(1,Math.abs(s),Math.abs(o))&&Math.abs(i-c)<=n.a*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(f-a)<=n.a*Math.max(1,Math.abs(f),Math.abs(a))}let B=u,A=o,w=c,O=d,S=y,M=h,L=l;Object.freeze({__proto__:null,copy:s,set:i,add:f,subtract:u,multiply:o,divide:c,ceil:function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t},floor:function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t},min:function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t},max:function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t},round:function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t},scale:a,scaleAndAdd:function(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t},distance:d,squaredDistance:y,length:h,squaredLength:l,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},inverse:function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},normalize:p,dot:b,lerp:m,random:function(t,e){let r,s,i,f,u,o;e=e||1;do{r=2*Object(n.b)()-1,s=2*Object(n.b)()-1,u=r*r+s*s}while(u>=1);do{i=2*Object(n.b)()-1,f=2*Object(n.b)()-1,o=i*i+f*f}while(o>=1);const c=Math.sqrt((1-u)/o);return t[0]=e*r,t[1]=e*s,t[2]=e*i*c,t[3]=e*f*c,t},transformMat4:g,transformQuat:function(t,e,r){const n=e[0],s=e[1],i=e[2],f=r[0],u=r[1],o=r[2],c=r[3],a=c*n+u*i-o*s,d=c*s+o*n-f*i,y=c*i+f*s-u*n,h=-f*n-u*s-o*i;return t[0]=a*c+h*-f+d*-o-y*-u,t[1]=d*c+h*-u+y*-f-a*-o,t[2]=y*c+h*-o+a*-u-d*-f,t[3]=e[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:E,equals:T,sub:B,mul:A,div:w,dist:O,sqrDist:S,len:M,sqrLen:L})},596:function(t,e,r){"use strict";r.d(e,"a",(function(){return y})),r.d(e,"b",(function(){return T})),r.d(e,"c",(function(){return V})),r.d(e,"d",(function(){return q})),r.d(e,"e",(function(){return U})),r.d(e,"f",(function(){return b})),r.d(e,"g",(function(){return m})),r.d(e,"h",(function(){return g})),r.d(e,"i",(function(){return E})),r.d(e,"j",(function(){return v})),r.d(e,"k",(function(){return _})),r.d(e,"l",(function(){return O})),r.d(e,"m",(function(){return h})),r.d(e,"n",(function(){return B})),r.d(e,"o",(function(){return Y})),r.d(e,"p",(function(){return z})),r.d(e,"q",(function(){return k})),r.d(e,"r",(function(){return x})),r.d(e,"s",(function(){return F})),r.d(e,"t",(function(){return S})),r.d(e,"u",(function(){return l})),r.d(e,"v",(function(){return A})),r.d(e,"w",(function(){return D})),r.d(e,"x",(function(){return J})),r.d(e,"y",(function(){return P})),r.d(e,"z",(function(){return I})),r.d(e,"A",(function(){return N})),r.d(e,"B",(function(){return M})),r.d(e,"C",(function(){return p})),r.d(e,"D",(function(){return w})),r.d(e,"E",(function(){return W})),r.d(e,"F",(function(){return G})),r.d(e,"G",(function(){return R})),r.d(e,"H",(function(){return j})),r.d(e,"I",(function(){return C})),r.d(e,"J",(function(){return L}));class n{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===n&&(n=9*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<9;t++)e[t]=this.typedBuffer[r+t];return e}setMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<9;t++)this.typedBuffer[r+t]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,f=r*e.typedBufferStride;for(let t=0;t<9;++t)n[i+t]=s[f+t]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===n&&(n=16*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<16;t++)e[t]=this.typedBuffer[r+t];return e}setMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<16;t++)this.typedBuffer[r+t]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,f=r*e.typedBufferStride;for(let t=0;t<16;++t)n[i+t]=s[f+t]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class i{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===n&&(n=i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var f=r(26);class u{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===n&&(n=2*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(t,e){return Object(f.m)(e,this.typedBuffer[t*this.typedBufferStride],this.typedBuffer[t*this.typedBufferStride+1])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,f=r*e.typedBufferStride;n[i]=s[f],n[i+1]=s[f+1]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var o=r(45);class c{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===n&&(n=3*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(t,e){return Object(o.r)(e,this.typedBuffer[t*this.typedBufferStride],this.typedBuffer[t*this.typedBufferStride+1],this.typedBuffer[t*this.typedBufferStride+2])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1],this.typedBuffer[t*this.typedBufferStride+2]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r,this.typedBuffer[t*this.typedBufferStride+2]=n}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,f=r*e.typedBufferStride;n[i]=s[f],n[i+1]=s[f+1],n[i+2]=s[f+2]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var a=r(590);class d{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===n&&(n=4*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(t,e){return Object(a.k)(e,this.typedBuffer[t*this.typedBufferStride],this.typedBuffer[t*this.typedBufferStride+1],this.typedBuffer[t*this.typedBufferStride+2],this.typedBuffer[t*this.typedBufferStride+3])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1],this.typedBuffer[t*this.typedBufferStride+2]=e[2],this.typedBuffer[t*this.typedBufferStride+3]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n,s){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r,this.typedBuffer[t*this.typedBufferStride+2]=n,this.typedBuffer[t*this.typedBufferStride+3]=s}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,f=r*e.typedBufferStride;n[i]=s[f],n[i+1]=s[f+1],n[i+2]=s[f+2],n[i+3]=s[f+3]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=4;class y extends i{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}y.ElementType="f32";class h extends u{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new h(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}h.ElementType="f32";class l extends c{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new l(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}l.ElementType="f32";class p extends d{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new p(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}p.ElementType="f32";class b extends n{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new b(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}b.ElementType="f32";class m extends n{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}static fromTypedArray(t,e){return new m(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}m.ElementType="f64";class g extends s{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new g(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}g.ElementType="f32";class E extends s{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}static fromTypedArray(t,e){return new E(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}E.ElementType="f64";class T extends i{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}static fromTypedArray(t,e){return new T(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}T.ElementType="f64";class B extends u{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}static fromTypedArray(t,e){return new B(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}B.ElementType="f64";class A extends c{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}static fromTypedArray(t,e){return new A(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}A.ElementType="f64";class w extends d{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}static fromTypedArray(t,e){return new w(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}w.ElementType="f64";class O extends i{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}static fromTypedArray(t,e){return new O(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}O.ElementType="u8";class S extends u{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}static fromTypedArray(t,e){return new S(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}S.ElementType="u8";class M extends c{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}static fromTypedArray(t,e){return new M(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}M.ElementType="u8";class L extends d{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}static fromTypedArray(t,e){return new L(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}L.ElementType="u8";class v extends i{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}static fromTypedArray(t,e){return new v(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}v.ElementType="u16";class x extends u{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}static fromTypedArray(t,e){return new x(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}x.ElementType="u16";class I extends c{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}static fromTypedArray(t,e){return new I(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}I.ElementType="u16";class j extends d{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}static fromTypedArray(t,e){return new j(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}j.ElementType="u16";class _ extends i{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}static fromTypedArray(t,e){return new _(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}_.ElementType="u32";class F extends u{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}static fromTypedArray(t,e){return new F(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}F.ElementType="u32";class N extends c{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}static fromTypedArray(t,e){return new N(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}N.ElementType="u32";class C extends d{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}static fromTypedArray(t,e){return new C(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}C.ElementType="u32";class U extends i{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}static fromTypedArray(t,e){return new U(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}U.ElementType="i8";class k extends u{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}static fromTypedArray(t,e){return new k(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}k.ElementType="i8";class P extends c{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}static fromTypedArray(t,e){return new P(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}P.ElementType="i8";class R extends d{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}static fromTypedArray(t,e){return new R(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}R.ElementType="i8";class V extends i{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}static fromTypedArray(t,e){return new V(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}V.ElementType="i16";class Y extends u{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}static fromTypedArray(t,e){return new Y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Y.ElementType="i16";class D extends c{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}static fromTypedArray(t,e){return new D(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}D.ElementType="i16";class W extends d{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}static fromTypedArray(t,e){return new W(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}W.ElementType="i16";class q extends i{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}static fromTypedArray(t,e){return new q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}q.ElementType="i32";class z extends u{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}static fromTypedArray(t,e){return new z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}z.ElementType="i32";class J extends c{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}static fromTypedArray(t,e){return new J(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}J.ElementType="i32";class G extends d{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}static fromTypedArray(t,e){return new G(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}G.ElementType="i32"},626:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u}));var n=r(49);function s(t){switch(t){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return void Object(n.a)(t)}}function i(t){switch(t){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return void Object(n.a)(t)}}function f(t){switch(t){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return void Object(n.a)(t)}}function u(t){switch(t){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return void Object(n.a)(t)}}},653:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(596),s=r(626);class i{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const e of t.fieldNames){const r=t.fields.get(e);this[e]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const r=this[t];return r&&r.elementCount===e.ElementCount&&r.elementType===e.ElementType?r:null}slice(t,e){return new i(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e,r,n){const s=this.stride;if(s%4==0){const i=new Uint32Array(t.buffer,e*s,n*s/4);new Uint32Array(this.buffer,r*s,n*s/4).set(i)}else{const i=new Uint8Array(t.buffer,e*s,n*s);new Uint8Array(this.buffer,r*s,n*s).set(i)}}}class f{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,e){return this.appendField(t,n.m,e),this}vec2f64(t,e){return this.appendField(t,n.n,e),this}vec3f(t,e){return this.appendField(t,n.u,e),this}vec3f64(t,e){return this.appendField(t,n.v,e),this}vec4f(t,e){return this.appendField(t,n.C,e),this}vec4f64(t,e){return this.appendField(t,n.D,e),this}mat3f(t,e){return this.appendField(t,n.f,e),this}mat3f64(t,e){return this.appendField(t,n.g,e),this}mat4f(t,e){return this.appendField(t,n.h,e),this}mat4f64(t,e){return this.appendField(t,n.i,e),this}vec4u8(t,e){return this.appendField(t,n.J,e),this}f32(t,e){return this.appendField(t,n.a,e),this}f64(t,e){return this.appendField(t,n.b,e),this}u8(t,e){return this.appendField(t,n.l,e),this}u16(t,e){return this.appendField(t,n.j,e),this}i8(t,e){return this.appendField(t,n.e,e),this}vec2i8(t,e){return this.appendField(t,n.q,e),this}vec2i16(t,e){return this.appendField(t,n.o,e),this}vec2u8(t,e){return this.appendField(t,n.t,e),this}vec4u16(t,e){return this.appendField(t,n.H,e),this}u32(t,e){return this.appendField(t,n.k,e),this}appendField(t,e,r){const n=e.ElementCount*Object(s.a)(e.ElementType),i=this.stride;this.fields.set(t,{size:n,constructor:e,offset:i,optional:r}),this.stride+=n,this.fieldNames.push(t)}alignTo(t){return this.stride=Math.floor((this.stride+t-1)/t)*t,this}hasField(t){return this.fieldNames.indexOf(t)>=0}createBuffer(t){return new i(this,t)}createView(t){return new i(this,t)}clone(){const t=new f;return t.stride=this.stride,t.fields=new Map,this.fields.forEach((e,r)=>t.fields.set(r,e)),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t}}function u(){return new f}},988:function(t,e,r){"use strict";r.r(e);var n=r(106),s=r(8),i=r(69);function f(t,e,r){const n=t.byteLength/(4*e),s=new Uint32Array(t,0,n*e);let f=new Uint32Array(n);const d=r&&r.minReduction||0,y=r&&r.originalIndices||null,h=r&&r.componentOffsets||null;let l=0;if(h)for(let t=0;t<h.length-1;t++){const e=h[t+1]-h[t];e>l&&(l=e)}else l=n;const p=Math.floor(1.1*l)+1;(null==a||a.length<2*p)&&(a=new Uint32Array(Object(i.i)(2*p)));for(let t=0;t<2*p;t++)a[t]=0;let b=0;const m=!!h&&!!y,g=m?y.length:n,E=m?new Uint32Array(y.length):null,T=1.96;let B=0!==d?Math.ceil(7.84*T/(d*d)*d*(1-d)):g,A=1,w=h?h[1]:g;for(let t=0;t<g;t++){if(t===B){const e=1-b/t;if(e+T*Math.sqrt(e*(1-e)/t)<d)return null;B*=2}if(t===w){for(let t=0;t<2*p;t++)a[t]=0;if(y)for(let t=h[A-1];t<h[A];t++)E[t]=f[y[t]];w=h[++A]}const r=m?y[t]:t,n=r*e,i=c(s,n,e);let o=i%p,l=b;for(;0!==a[2*o+1];){if(a[2*o]===i){const t=a[2*o+1]-1;if(u(s,n,t*e,e)){l=f[t];break}}o++,o>=p&&(o-=p)}l===b&&(a[2*o]=i,a[2*o+1]=r+1,b++),f[r]=l}if(0!==d&&1-b/n<d)return null;if(m){for(let t=h[A-1];t<E.length;t++)E[t]=f[y[t]];f=E}const O=new Uint32Array(e*b);b=0;for(let t=0;t<g;t++)f[t]===b&&(o(s,(m?y[t]:t)*e,O,b*e,e),b++);if(y&&!m){const t=new Uint32Array(y.length);for(let e=0;e<t.length;e++)t[e]=f[y[e]];f=t}return{buffer:O.buffer,indices:f,uniqueCount:b}}function u(t,e,r,n){for(let s=0;s<n;s++)if(t[e+s]!==t[r+s])return!1;return!0}function o(t,e,r,n,s){for(let i=0;i<s;i++)r[n+i]=t[e+i]}function c(t,e,r){let n=0;for(let s=0;s<r;s++)n=t[e+s]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let a=null;const d={divisor:0};function y(t,e={}){e={...d,...e};const r=t.stride;return t.fieldNames.filter(e=>{const r=t.fields.get(e).optional;return!(r&&r.glPadding)}).map(n=>{const s=t.fields.get(n),i=s.constructor.ElementCount,f=function(t){const e=h[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}(s.constructor.ElementType),u=s.offset,o=!(!s.optional||!s.optional.glNormalized);return{name:n,stride:r,count:i,type:f,offset:u,normalized:o,divisor:e.divisor}})}const h={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};var l=r(653);const p=Object(l.a)().vec3f("position").u16("componentIndex").u16("_padding"),b=(y(Object(l.a)().vec2u8("sideness")),Object(l.a)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0})),m=b.clone().vec3f("normal"),g=b.clone().vec3f("normalA").vec3f("normalB");var E=r(126),T=r(110),B=r(45);class A{updateSettings(t){this.settings=t}write(t,e,r){const n=function(t){const e=w;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],S[0]=5381;for(let t=0;t<O.length;t++)S[0]=31*S[0]+O[t];return S[0]}(r);M.seed=n;const s=M.getIntRange(0,255),i=M.getIntRange(0,this.settings.variants-1),f=M.getFloat(),u=255*(.5*function(t,e){const r=t<0?-1:1;return Math.pow(Math.abs(t),1.2)*r}(-(1-Math.min(f/.7,1))+Math.max(0,f-.7)/(1-.7))+.5);t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1),t.componentIndex.set(e,r.componentIndex),t.variantOffset.set(e,s),t.variantStroke.set(e,i),t.variantExtension.set(e,u)}trim(t,e){return t.slice(0,e)}}const w=new Float32Array(6),O=new Uint32Array(w.buffer),S=new Uint32Array(1),M=new E.a;class L{constructor(){this.commonWriter=new A}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return m.createBuffer(t)}write(t,e,r){this.commonWriter.write(t,e,r),Object(B.c)(x,r.faceNormal0,r.faceNormal1),Object(B.o)(x,x),t.normal.setVec(e,x)}trim(t,e){return this.commonWriter.trim(t,e)}}L.Layout=m,L.glLayout=y(m,{divisor:1});class v{constructor(){this.commonWriter=new A}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return g.createBuffer(t)}write(t,e,r){this.commonWriter.write(t,e,r),t.normalA.setVec(e,r.faceNormal0),t.normalB.setVec(e,r.faceNormal1)}trim(t,e){return this.commonWriter.trim(t,e)}}v.Layout=g,v.glLayout=y(g,{divisor:1});const x=Object(T.e)();function I(t,e){const r=t.length/3,n=new Uint32Array(e+1),s=new Uint32Array(e+1),i=(t,e)=>{t<e?n[t+1]++:s[e+1]++};for(let e=0;e<r;e++){const r=t[3*e],n=t[3*e+1],s=t[3*e+2];i(r,n),i(n,s),i(s,r)}let f=0,u=0;for(let t=0;t<e;t++){const e=n[t+1],r=s[t+1];n[t+1]=f,s[t+1]=u,f+=e,u+=r}const o=new Uint32Array(6*r),c=n[e],a=(t,e,r)=>{if(t<e){const s=n[t+1]++;o[2*s]=e,o[2*s+1]=r}else{const n=s[e+1]++;o[2*c+2*n]=t,o[2*c+2*n+1]=r}};for(let e=0;e<r;e++){const r=t[3*e],n=t[3*e+1],s=t[3*e+2];a(r,n,e),a(n,s,e),a(s,r,e)}const d=(t,e)=>{const r=2*t,n=e-t;for(let t=1;t<n;t++){const e=o[r+2*t],n=o[r+2*t+1];let s=t-1;for(;s>=0&&o[r+2*s]>e;s--)o[r+2*s+2]=o[r+2*s],o[r+2*s+3]=o[r+2*s+1];o[r+2*s+2]=e,o[r+2*s+3]=n}};for(let t=0;t<e;t++)d(n[t],n[t+1]),d(c+s[t],c+s[t+1]);const y=new Int32Array(3*r),h=(e,r)=>e===t[3*r]?0:e===t[3*r+1]?1:e===t[3*r+2]?2:-1,l=(t,e)=>{const r=h(t,e);y[3*e+r]=-1},p=(t,e,r,n)=>{const s=h(t,e);y[3*e+s]=n;const i=h(r,n);y[3*n+i]=e};for(let t=0;t<e;t++){let e=n[t];const r=n[t+1];let i=s[t];const f=s[t+1];for(;e<r&&i<f;){const r=o[2*e],n=o[2*c+2*i];r===n?(p(t,o[2*e+1],n,o[2*c+2*i+1]),e++,i++):r<n?(l(t,o[2*e+1]),e++):(l(n,o[2*c+2*i+1]),i++)}for(;e<r;)l(t,o[2*e+1]),e++;for(;i<f;)l(o[2*c+2*i],o[2*c+2*i+1]),i++}return y}var j=r(596);function _(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:N(t.layout)}}function F(t){return function(t){const e=Object(l.a)();return e.stride=t.stride,e.fieldNames=t.fieldNames,t.fields.forEach(t=>{return e.fields.set(t[0],{...t[1],constructor:(r=t[1].constructor,k.get(r))});var r}),e}(t.layout).createView(t.buffer)}function N(t){const e=new Array;return t.fields.forEach((t,r)=>{const n={...t,constructor:U(t.constructor)};e.push([r,n])}),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const C=[j.a,j.m,j.u,j.C,j.f,j.h,j.b,j.n,j.v,j.D,j.g,j.i,j.l,j.t,j.B,j.J,j.j,j.r,j.z,j.H,j.k,j.s,j.A,j.I,j.e,j.q,j.y,j.G,j.c,j.o,j.w,j.E,j.d,j.p,j.x,j.F];function U(t){return`${t.ElementType}_${t.ElementCount}`}const k=new Map;C.forEach(t=>k.set(U(t),t));var P=r(82),R=r(315);function V(t,e){return t.cosAngle<e}function Y(t,e){return t.cosAngle>e}function D(t,e){const r=Object(i.a)(t.cosAngle),n=W.fwd,s=W.ortho;return Object(R.c)(n,t.position1,t.position0),r*(Object(B.e)(Object(B.d)(s,t.faceNormal0,t.faceNormal1),n)>0?-1:1)>e}const W={edge:{position0:Object(T.e)(),position1:Object(T.e)(),faceNormal0:Object(T.e)(),faceNormal1:Object(T.e)(),componentIndex:0,cosAngle:0},ortho:Object(T.e)(),fwd:Object(T.e)()},q={v0:Object(T.e)(),v1:Object(T.e)(),v2:Object(T.e)()},z={anglePlanar:4,angleSignificantEdge:35};e.default=class{constructor(){this.regularWriter=new L,this.silhouetteWriter=new v}async process(t,e){if(Object(s.g)(e))return this.work(t);const r=new Array,n=this.packInput(t,r),i=await e.invoke("wrappedWork",n,{transferList:r});return this.unpackOutput(i)}async wrappedWork(t){const e=this.unpackInput(t),r=this.work(e),n=new Array;return this.packInputTransferables(e,n),{result:this.packOutput(r,n),transferList:n}}work(t){const e=this.extractEdgeInformation(t.data,t.skipDeduplicate,t.originalIndices);return this.regularWriter.updateSettings(t.writerSettings),this.silhouetteWriter.updateSettings(t.writerSettings),function(t,e,r,s=z){const f=t.vertices.position,u=t.vertices.componentIndex,o=Object(i.d)(s.anglePlanar),c=Object(i.d)(s.angleSignificantEdge),a=Math.cos(c),d=Math.cos(o),y=W.edge,h=y.position0,l=y.position1,p=y.faceNormal0,b=y.faceNormal1,m=function(t){const e=t.faces.length/3,r=t.vertices.position,n=t.faces,s=q.v0,i=q.v1,f=q.v2,u=new Float32Array(3*e);for(let t=0;t<e;t++){const e=n[3*t+0],o=n[3*t+1],c=n[3*t+2];r.getVec(e,s),r.getVec(o,i),r.getVec(c,f),Object(B.g)(i,i,s),Object(B.g)(f,f,s),Object(B.d)(s,i,f),Object(B.o)(s,s),u[3*t+0]=s[0],u[3*t+1]=s[1],u[3*t+2]=s[2]}return u}(t),g=function(t){const e=t.faces.length/3,r=t.faces,n=t.neighbors;let s=0;for(let t=0;t<e;t++){const e=n[3*t+0],i=n[3*t+1],f=n[3*t+2],u=r[3*t+0],o=r[3*t+1],c=r[3*t+2];s+=-1===e||u<o?1:0,s+=-1===i||o<c?1:0,s+=-1===f||c<u?1:0}const i=new Int32Array(4*s);let f=0;for(let t=0;t<e;t++){const e=n[3*t+0],s=n[3*t+1],u=n[3*t+2],o=r[3*t+0],c=r[3*t+1],a=r[3*t+2];(-1===e||o<c)&&(i[f++]=o,i[f++]=c,i[f++]=t,i[f++]=e),(-1===s||c<a)&&(i[f++]=c,i[f++]=a,i[f++]=t,i[f++]=s),(-1===u||a<o)&&(i[f++]=a,i[f++]=o,i[f++]=t,i[f++]=u)}return i}(t),E=g.length/4,T=e.allocate(E);let A=0;const w=E,O=r.allocate(w);let S=0,M=0,L=0;const v=Object(P.h)(0,E),x=new Float32Array(E);Object(n.b)(x,(t,e,r)=>{f.getVec(g[4*e+0],h),f.getVec(g[4*e+1],l),r[e]=Object(B.l)(h,l)}),v.sort((t,e)=>x[e]-x[t]);const I=new Array,j=new Array;for(let t=0;t<E;t++){const n=v[t],s=x[n],i=g[4*n+0],c=g[4*n+1],E=g[4*n+2],w=g[4*n+3],_=-1===w;if(f.getVec(i,h),f.getVec(c,l),_)Object(B.r)(p,m[3*E+0],m[3*E+1],m[3*E+2]),Object(B.h)(b,p),y.componentIndex=u.get(i),y.cosAngle=Object(B.e)(p,b);else{if(Object(B.r)(p,m[3*E+0],m[3*E+1],m[3*E+2]),Object(B.r)(b,m[3*w+0],m[3*w+1],m[3*w+2]),y.componentIndex=u.get(i),y.cosAngle=Object(B.e)(p,b),Y(y,d))continue;y.cosAngle<-.9999&&Object(B.h)(b,p)}M+=s,L++,_||V(y,a)?(e.write(T,A++,y),I.push(s)):D(y,o)&&(r.write(O,S++,y),j.push(s))}const _=new Float32Array(I.reverse()),F=new Float32Array(j.reverse());return{regular:{instancesData:e.trim(T,A),lodInfo:{lengths:_}},silhouette:{instancesData:r.trim(O,S),lodInfo:{lengths:F}},averageEdgeLength:M/L}}(e,this.regularWriter,this.silhouetteWriter)}packInputTransferables(t,e){e.push(t.data.buffer)}packInput(t,e){this.packInputTransferables(t,e);const r={dataBuffer:t.data.buffer,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate};return t.originalIndices&&(r.originalIndicesBuffer=t.originalIndices.buffer,r.originalIndicesType=Object(n.j)(t.originalIndices)?"Uint32Array":"Uint16Array"),r}unpackInput(t){return{data:p.createView(t.dataBuffer),originalIndices:"Uint32Array"===t.originalIndicesType?new Uint32Array(t.originalIndicesBuffer):"Uint16Array"===t.originalIndicesType?new Uint16Array(t.originalIndicesBuffer):void 0,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}packOutput(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:_(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:_(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}unpackOutput(t){return{regular:{instancesData:F(t.regular.instancesData),lodInfo:{lengths:new Float32Array(t.regular.lodInfo.lengths)}},silhouette:{instancesData:F(t.silhouette.instancesData),lodInfo:{lengths:new Float32Array(t.silhouette.lodInfo.lengths)}},averageEdgeLength:t.averageEdgeLength}}extractEdgeInformation(t,e,r){if(e&&r)return{faces:r,neighbors:I(r,t.count),vertices:t};{const e=f(t.buffer,t.stride/4,{originalIndices:r}),n=I(e.indices,e.uniqueCount);return{faces:e.indices,neighbors:n,vertices:p.createView(e.buffer)}}}}}}]);