(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{396:function(t,n,r){"use strict";r.d(n,"a",(function(){return S})),r.d(n,"b",(function(){return _})),r.d(n,"c",(function(){return l})),r.d(n,"d",(function(){return u})),r.d(n,"e",(function(){return f})),r.d(n,"f",(function(){return s})),r.d(n,"g",(function(){return i})),r.d(n,"h",(function(){return N})),r.d(n,"i",(function(){return R})),r.d(n,"j",(function(){return h})),r.d(n,"k",(function(){return d})),r.d(n,"l",(function(){return g})),r.d(n,"m",(function(){return C})),r.d(n,"n",(function(){return c})),r.d(n,"o",(function(){return y})),r.d(n,"p",(function(){return o})),r.d(n,"q",(function(){return e})),r.d(n,"r",(function(){return q})),r.d(n,"s",(function(){return A})),r.d(n,"t",(function(){return I})),r.d(n,"u",(function(){return T})),r.d(n,"v",(function(){return m})),r.d(n,"w",(function(){return E})),r.d(n,"x",(function(){return v})),r.d(n,"y",(function(){return L})),r.d(n,"z",(function(){return w})),r.d(n,"A",(function(){return p})),r.d(n,"B",(function(){return O})),r.d(n,"C",(function(){return b})),r.d(n,"D",(function(){return M})),r.d(n,"E",(function(){return U})),r.d(n,"F",(function(){return a})),r.d(n,"G",(function(){return D})),r.d(n,"H",(function(){return x})),r.d(n,"I",(function(){return P}));const o=1e-30,e=4294967295,a=512,u=128,i=8,c=29,s=1,f=16,d=50,h=10,M=8,l={metrics:{width:15,height:17,left:0,top:-7,advance:14}},b=0,v=0,E=0,A=1,I=2,T=3,m=4,L=5,w=6,p=5,O=6,S=1,_=2,y=2,g=1,R=2,N=4,U=2.5,C=24,P=5,x=6,D=1.15,q=2},397:function(t,n,r){"use strict";var o,e,a,u,i,c,s;r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return a})),r.d(n,"d",(function(){return o})),r.d(n,"e",(function(){return i})),r.d(n,"f",(function(){return c})),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(o||(o={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(e||(e={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(a||(a={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(u||(u={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(i||(i={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(s||(s={}))},398:function(t,n,r){"use strict";r.d(n,"a",(function(){return U})),r.d(n,"b",(function(){return p})),r.d(n,"c",(function(){return O})),r.d(n,"d",(function(){return N})),r.d(n,"e",(function(){return C})),r.d(n,"f",(function(){return F})),r.d(n,"g",(function(){return y})),r.d(n,"h",(function(){return g})),r.d(n,"i",(function(){return D})),r.d(n,"j",(function(){return x})),r.d(n,"k",(function(){return v})),r.d(n,"l",(function(){return R})),r.d(n,"m",(function(){return S})),r.d(n,"n",(function(){return _})),r.d(n,"o",(function(){return w}));var o=r(5),e=r(14),a=(r(69),r(23),r(404),r(405),r(406),r(407),r(408),r(409),r(411),r(397)),u=(r(410),r(90));class i{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,n,r,o,e,a,u,i,c){this.color=t,this.haloColor=n,this.haloSize=r,this.size=o,this.angle=e,this.offsetX=a,this.offsetY=u,this.hAnchor=i,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}i.pool=new u.a(i);const c=o.a.getLogger("esri.views.2d.engine.webgl.Utils");function s(t){const n={};for(const r of t)n[r.name]=r.strideInBytes;return n}const f=s([{name:"geometry",strideInBytes:32,divisor:0}]),d=s([{name:"geometry",strideInBytes:32,divisor:0}]),h=s([{name:"geometry",strideInBytes:12,divisor:0}]),M=s([{name:"geometry",strideInBytes:36,divisor:0}]),l=s([{name:"geometry",strideInBytes:32,divisor:0}]),b=s([{name:"geometry",strideInBytes:36,divisor:0}]);function v(t,n){switch(t){case a.d.MARKER:return f;case a.d.FILL:return n?h:d;case a.d.LINE:return M;case a.d.TEXT:return l;case a.d.LABEL:return b}}const E=["geometry"],A=["geometry"],I=["geometry"],T=["geometry"],m=["geometry"];function L(t){switch(t){case a.d.MARKER:return E;case a.d.FILL:return A;case a.d.LINE:return I;case a.d.TEXT:return T;case a.d.LABEL:return m}}function w(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function p(t,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(t*n/4));case 1:case 3:return new Uint8Array(t*n)}}function O(t,n){switch(n%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function S(t){return null!=t}function _(t){return"number"==typeof t}function y(t,n){switch(t){case"butt":return 0;case"round":return n?2:1;case"square":return 2;default:return c.error(new e.a("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function g(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return c.error(new e.a("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function R(t){switch(t){case"opacity":return a.b.OPACITY;case"color":return a.b.COLOR;case"rotation":return a.b.ROTATION;case"size":return a.b.SIZE;default:return c.error("Cannot interpret unknown vv: "+t),null}}function N(t,n,r,o,e,a,u){for(const n in a){const o=a[n].stride,u=w(o),i=a[n].data,c=r[n].data,s=o*e.vertexCount/u,f=o*t/u,d=o*e.vertexFrom/u;for(let t=0;t<s;++t)c[t+f]=i[t+d]}const i=e.indexCount;for(let r=0;r<i;++r)o[r+n]=u[r+e.indexFrom]-e.vertexFrom+t}const U={geometry:35044};function C(t,n){const r=[];for(let o=0;o<5;++o){const e=L(o),a={};for(const t of e)a[t]={data:n(o,t)};r.push({data:t(o),buffers:a})}return r}function P(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function x(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void c.error(new e.a("webgl-utils","Unable to handle type "+t))}}function D(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void c.error(new e.a("webgl-utils","Unable to handle type "+t))}}const q=new Map,F=(t,n)=>{if(!q.has(t)){const r=function(t){const n={};for(const r in t){const o=t[r];let e=0;n[r]=o.map(t=>{const n={...t,normalized:t.normalized||!1,divisor:t.divisor||0,offset:e,stride:0};return e+=t.count*P(t.type),n}),n[r].forEach(t=>t.stride=e)}return n}(n),o={strides:(t=>{const n={};for(const r in t){const o=t[r];n[r]=o.length?o[0].stride:0}return n})(r),bufferLayouts:r,attributes:(t=>{const n={};for(const r in t)for(const o of t[r])n[o.name]=o.location;return n})(n)};q.set(t,o)}return q.get(t)}},402:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return e}));const o=new Float32Array(1);new Uint32Array(o.buffer);function e(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function a(t,n){return 65535&t|n<<16}function u(t,n,r,o){return 255&t|(255&n)<<8|(255&r)<<16|o<<24}},410:function(t,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return c}));var o=r(402);function e(t,n){return Array.isArray(n)?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3]):(t[0]=n.r,t[1]=n.g,t[2]=n.b,t[3]=n.a),t}function a(t,n=0,r=!1){const o=t[n+3];return t[n+0]*=o,t[n+1]*=o,t[n+2]*=o,r||(t[n+3]*=255),t}function u(t){return a(e([],t))}function i(t){if(!t)return 0;const{r:n,g:r,b:e,a:a}=t;return Object(o.b)(n*a,r*a,e*a,255*a)}function c(t){if(!t)return 0;const[n,r,e,a]=t;return Object(o.b)(n*(a/255),r*(a/255),e*(a/255),a)}},455:function(t,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return c})),r.d(n,"c",(function(){return a})),r.d(n,"d",(function(){return u})),r.d(n,"e",(function(){return l})),r.d(n,"f",(function(){return b})),r.d(n,"g",(function(){return v})),r.d(n,"h",(function(){return i})),r.d(n,"i",(function(){return E})),r.d(n,"j",(function(){return f})),r.d(n,"k",(function(){return L})),r.d(n,"l",(function(){return T})),r.d(n,"m",(function(){return M})),r.d(n,"n",(function(){return h})),r.d(n,"o",(function(){return d}));var o=r(110),e=r(42);function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function u(t,n,r,o,e,a,u,i,c,s,f,d,h,M,l,b,v){return t[0]=n,t[1]=r,t[2]=o,t[3]=e,t[4]=a,t[5]=u,t[6]=i,t[7]=c,t[8]=s,t[9]=f,t[10]=d,t[11]=h,t[12]=M,t[13]=l,t[14]=b,t[15]=v,t}function i(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function c(t,n){if(t===n){const r=n[1],o=n[2],e=n[3],a=n[6],u=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=o,t[9]=a,t[11]=n[14],t[12]=e,t[13]=u,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function s(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],u=n[4],i=n[5],c=n[6],s=n[7],f=n[8],d=n[9],h=n[10],M=n[11],l=n[12],b=n[13],v=n[14],E=n[15],A=r*i-o*u,I=r*c-e*u,T=r*s-a*u,m=o*c-e*i,L=o*s-a*i,w=e*s-a*c,p=f*b-d*l,O=f*v-h*l,S=f*E-M*l,_=d*v-h*b,y=d*E-M*b,g=h*E-M*v;let R=A*g-I*y+T*_+m*S-L*O+w*p;return R?(R=1/R,t[0]=(i*g-c*y+s*_)*R,t[1]=(e*y-o*g-a*_)*R,t[2]=(b*w-v*L+E*m)*R,t[3]=(h*L-d*w-M*m)*R,t[4]=(c*S-u*g-s*O)*R,t[5]=(r*g-e*S+a*O)*R,t[6]=(v*T-l*w-E*I)*R,t[7]=(f*w-h*T+M*I)*R,t[8]=(u*y-i*S+s*p)*R,t[9]=(o*S-r*y-a*p)*R,t[10]=(l*L-b*T+E*A)*R,t[11]=(d*T-f*L-M*A)*R,t[12]=(i*O-u*_-c*p)*R,t[13]=(r*_-o*O+e*p)*R,t[14]=(b*I-l*m-v*A)*R,t[15]=(f*m-d*I+h*A)*R,t):null}function f(t,n,r){const o=n[0],e=n[1],a=n[2],u=n[3],i=n[4],c=n[5],s=n[6],f=n[7],d=n[8],h=n[9],M=n[10],l=n[11],b=n[12],v=n[13],E=n[14],A=n[15];let I=r[0],T=r[1],m=r[2],L=r[3];return t[0]=I*o+T*i+m*d+L*b,t[1]=I*e+T*c+m*h+L*v,t[2]=I*a+T*s+m*M+L*E,t[3]=I*u+T*f+m*l+L*A,I=r[4],T=r[5],m=r[6],L=r[7],t[4]=I*o+T*i+m*d+L*b,t[5]=I*e+T*c+m*h+L*v,t[6]=I*a+T*s+m*M+L*E,t[7]=I*u+T*f+m*l+L*A,I=r[8],T=r[9],m=r[10],L=r[11],t[8]=I*o+T*i+m*d+L*b,t[9]=I*e+T*c+m*h+L*v,t[10]=I*a+T*s+m*M+L*E,t[11]=I*u+T*f+m*l+L*A,I=r[12],T=r[13],m=r[14],L=r[15],t[12]=I*o+T*i+m*d+L*b,t[13]=I*e+T*c+m*h+L*v,t[14]=I*a+T*s+m*M+L*E,t[15]=I*u+T*f+m*l+L*A,t}function d(t,n,r){const o=r[0],e=r[1],a=r[2];let u=void 0,i=void 0,c=void 0,s=void 0,f=void 0,d=void 0,h=void 0,M=void 0,l=void 0,b=void 0,v=void 0,E=void 0;return n===t?(t[12]=n[0]*o+n[4]*e+n[8]*a+n[12],t[13]=n[1]*o+n[5]*e+n[9]*a+n[13],t[14]=n[2]*o+n[6]*e+n[10]*a+n[14],t[15]=n[3]*o+n[7]*e+n[11]*a+n[15]):(u=n[0],i=n[1],c=n[2],s=n[3],f=n[4],d=n[5],h=n[6],M=n[7],l=n[8],b=n[9],v=n[10],E=n[11],t[0]=u,t[1]=i,t[2]=c,t[3]=s,t[4]=f,t[5]=d,t[6]=h,t[7]=M,t[8]=l,t[9]=b,t[10]=v,t[11]=E,t[12]=u*o+f*e+l*a+n[12],t[13]=i*o+d*e+b*a+n[13],t[14]=c*o+h*e+v*a+n[14],t[15]=s*o+M*e+E*a+n[15]),t}function h(t,n,r){const o=r[0],e=r[1],a=r[2];return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=n[3]*o,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function M(t,n,r,o){let a=o[0],u=o[1],i=o[2],c=Math.sqrt(a*a+u*u+i*i),s=void 0,f=void 0,d=void 0,h=void 0,M=void 0,l=void 0,b=void 0,v=void 0,E=void 0,A=void 0,I=void 0,T=void 0,m=void 0,L=void 0,w=void 0,p=void 0,O=void 0,S=void 0,_=void 0,y=void 0,g=void 0,R=void 0,N=void 0,U=void 0;return c<e.a?null:(c=1/c,a*=c,u*=c,i*=c,s=Math.sin(r),f=Math.cos(r),d=1-f,h=n[0],M=n[1],l=n[2],b=n[3],v=n[4],E=n[5],A=n[6],I=n[7],T=n[8],m=n[9],L=n[10],w=n[11],p=a*a*d+f,O=u*a*d+i*s,S=i*a*d-u*s,_=a*u*d-i*s,y=u*u*d+f,g=i*u*d+a*s,R=a*i*d+u*s,N=u*i*d-a*s,U=i*i*d+f,t[0]=h*p+v*O+T*S,t[1]=M*p+E*O+m*S,t[2]=l*p+A*O+L*S,t[3]=b*p+I*O+w*S,t[4]=h*_+v*y+T*g,t[5]=M*_+E*y+m*g,t[6]=l*_+A*y+L*g,t[7]=b*_+I*y+w*g,t[8]=h*R+v*N+T*U,t[9]=M*R+E*N+m*U,t[10]=l*R+A*N+L*U,t[11]=b*R+I*N+w*U,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function l(t,n,r){const o=Math.sin(r),e=Math.cos(r),a=n[4],u=n[5],i=n[6],c=n[7],s=n[8],f=n[9],d=n[10],h=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=a*e+s*o,t[5]=u*e+f*o,t[6]=i*e+d*o,t[7]=c*e+h*o,t[8]=s*e-a*o,t[9]=f*e-u*o,t[10]=d*e-i*o,t[11]=h*e-c*o,t}function b(t,n,r){const o=Math.sin(r),e=Math.cos(r),a=n[0],u=n[1],i=n[2],c=n[3],s=n[8],f=n[9],d=n[10],h=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*e-s*o,t[1]=u*e-f*o,t[2]=i*e-d*o,t[3]=c*e-h*o,t[8]=a*o+s*e,t[9]=u*o+f*e,t[10]=i*o+d*e,t[11]=c*o+h*e,t}function v(t,n,r){const o=Math.sin(r),e=Math.cos(r),a=n[0],u=n[1],i=n[2],c=n[3],s=n[4],f=n[5],d=n[6],h=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*e+s*o,t[1]=u*e+f*o,t[2]=i*e+d*o,t[3]=c*e+h*o,t[4]=s*e-a*o,t[5]=f*e-u*o,t[6]=d*e-i*o,t[7]=h*e-c*o,t}function E(t,n){const r=Math.sin(n),o=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A(t,n,r){const o=n[0],e=n[1],a=n[2],u=n[3],i=o+o,c=e+e,s=a+a,f=o*i,d=o*c,h=o*s,M=e*c,l=e*s,b=a*s,v=u*i,E=u*c,A=u*s;return t[0]=1-(M+b),t[1]=d+A,t[2]=h-E,t[3]=0,t[4]=d-A,t[5]=1-(f+b),t[6]=l+v,t[7]=0,t[8]=h+E,t[9]=l-v,t[10]=1-(f+M),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}const I=Object(o.e)();function T(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function m(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function L(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}let w=f,p=m;Object.freeze({__proto__:null,copy:a,set:u,identity:i,transpose:c,invert:s,adjoint:function(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],u=n[4],i=n[5],c=n[6],s=n[7],f=n[8],d=n[9],h=n[10],M=n[11],l=n[12],b=n[13],v=n[14],E=n[15];return t[0]=i*(h*E-M*v)-d*(c*E-s*v)+b*(c*M-s*h),t[1]=-(o*(h*E-M*v)-d*(e*E-a*v)+b*(e*M-a*h)),t[2]=o*(c*E-s*v)-i*(e*E-a*v)+b*(e*s-a*c),t[3]=-(o*(c*M-s*h)-i*(e*M-a*h)+d*(e*s-a*c)),t[4]=-(u*(h*E-M*v)-f*(c*E-s*v)+l*(c*M-s*h)),t[5]=r*(h*E-M*v)-f*(e*E-a*v)+l*(e*M-a*h),t[6]=-(r*(c*E-s*v)-u*(e*E-a*v)+l*(e*s-a*c)),t[7]=r*(c*M-s*h)-u*(e*M-a*h)+f*(e*s-a*c),t[8]=u*(d*E-M*b)-f*(i*E-s*b)+l*(i*M-s*d),t[9]=-(r*(d*E-M*b)-f*(o*E-a*b)+l*(o*M-a*d)),t[10]=r*(i*E-s*b)-u*(o*E-a*b)+l*(o*s-a*i),t[11]=-(r*(i*M-s*d)-u*(o*M-a*d)+f*(o*s-a*i)),t[12]=-(u*(d*v-h*b)-f*(i*v-c*b)+l*(i*h-c*d)),t[13]=r*(d*v-h*b)-f*(o*v-e*b)+l*(o*h-e*d),t[14]=-(r*(i*v-c*b)-u*(o*v-e*b)+l*(o*c-e*i)),t[15]=r*(i*h-c*d)-u*(o*h-e*d)+f*(o*c-e*i),t},determinant:function(t){const n=t[0],r=t[1],o=t[2],e=t[3],a=t[4],u=t[5],i=t[6],c=t[7],s=t[8],f=t[9],d=t[10],h=t[11],M=t[12],l=t[13],b=t[14],v=t[15];return(n*u-r*a)*(d*v-h*b)-(n*i-o*a)*(f*v-h*l)+(n*c-e*a)*(f*b-d*l)+(r*i-o*u)*(s*v-h*M)-(r*c-e*u)*(s*b-d*M)+(o*c-e*i)*(s*l-f*M)},multiply:f,translate:d,scale:h,rotate:M,rotateX:l,rotateY:b,rotateZ:v,fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,n,r){let o=r[0],a=r[1],u=r[2],i=Math.sqrt(o*o+a*a+u*u),c=void 0,s=void 0,f=void 0;return i<e.a?null:(i=1/i,o*=i,a*=i,u*=i,c=Math.sin(n),s=Math.cos(n),f=1-s,t[0]=o*o*f+s,t[1]=a*o*f+u*c,t[2]=u*o*f-a*c,t[3]=0,t[4]=o*a*f-u*c,t[5]=a*a*f+s,t[6]=u*a*f+o*c,t[7]=0,t[8]=o*u*f+a*c,t[9]=a*u*f-o*c,t[10]=u*u*f+s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:E,fromYRotation:function(t,n){const r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,n){const r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:A,fromQuat2:function(t,n){const r=I,o=-n[0],e=-n[1],a=-n[2],u=n[3],i=n[4],c=n[5],s=n[6],f=n[7],d=o*o+e*e+a*a+u*u;return d>0?(r[0]=2*(i*u+f*o+c*a-s*e)/d,r[1]=2*(c*u+f*e+s*o-i*a)/d,r[2]=2*(s*u+f*a+i*e-c*o)/d):(r[0]=2*(i*u+f*o+c*a-s*e),r[1]=2*(c*u+f*e+s*o-i*a),r[2]=2*(s*u+f*a+i*e-c*o)),A(t,n,r),t},getTranslation:function(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t},getScaling:function(t,n){const r=n[0],o=n[1],e=n[2],a=n[4],u=n[5],i=n[6],c=n[8],s=n[9],f=n[10];return t[0]=Math.sqrt(r*r+o*o+e*e),t[1]=Math.sqrt(a*a+u*u+i*i),t[2]=Math.sqrt(c*c+s*s+f*f),t},getRotation:function(t,n){const r=n[0]+n[5]+n[10];let o=0;return r>0?(o=2*Math.sqrt(r+1),t[3]=.25*o,t[0]=(n[6]-n[9])/o,t[1]=(n[8]-n[2])/o,t[2]=(n[1]-n[4])/o):n[0]>n[5]&&n[0]>n[10]?(o=2*Math.sqrt(1+n[0]-n[5]-n[10]),t[3]=(n[6]-n[9])/o,t[0]=.25*o,t[1]=(n[1]+n[4])/o,t[2]=(n[8]+n[2])/o):n[5]>n[10]?(o=2*Math.sqrt(1+n[5]-n[0]-n[10]),t[3]=(n[8]-n[2])/o,t[0]=(n[1]+n[4])/o,t[1]=.25*o,t[2]=(n[6]+n[9])/o):(o=2*Math.sqrt(1+n[10]-n[0]-n[5]),t[3]=(n[1]-n[4])/o,t[0]=(n[8]+n[2])/o,t[1]=(n[6]+n[9])/o,t[2]=.25*o),t},fromRotationTranslationScale:function(t,n,r,o){const e=n[0],a=n[1],u=n[2],i=n[3],c=e+e,s=a+a,f=u+u,d=e*c,h=e*s,M=e*f,l=a*s,b=a*f,v=u*f,E=i*c,A=i*s,I=i*f,T=o[0],m=o[1],L=o[2];return t[0]=(1-(l+v))*T,t[1]=(h+I)*T,t[2]=(M-A)*T,t[3]=0,t[4]=(h-I)*m,t[5]=(1-(d+v))*m,t[6]=(b+E)*m,t[7]=0,t[8]=(M+A)*L,t[9]=(b-E)*L,t[10]=(1-(d+l))*L,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,n,r,o,e){const a=n[0],u=n[1],i=n[2],c=n[3],s=a+a,f=u+u,d=i+i,h=a*s,M=a*f,l=a*d,b=u*f,v=u*d,E=i*d,A=c*s,I=c*f,T=c*d,m=o[0],L=o[1],w=o[2],p=e[0],O=e[1],S=e[2],_=(1-(b+E))*m,y=(M+T)*m,g=(l-I)*m,R=(M-T)*L,N=(1-(h+E))*L,U=(v+A)*L,C=(l+I)*w,P=(v-A)*w,x=(1-(h+b))*w;return t[0]=_,t[1]=y,t[2]=g,t[3]=0,t[4]=R,t[5]=N,t[6]=U,t[7]=0,t[8]=C,t[9]=P,t[10]=x,t[11]=0,t[12]=r[0]+p-(_*p+R*O+C*S),t[13]=r[1]+O-(y*p+N*O+P*S),t[14]=r[2]+S-(g*p+U*O+x*S),t[15]=1,t},fromQuat:function(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],u=r+r,i=o+o,c=e+e,s=r*u,f=o*u,d=o*i,h=e*u,M=e*i,l=e*c,b=a*u,v=a*i,E=a*c;return t[0]=1-d-l,t[1]=f+E,t[2]=h-v,t[3]=0,t[4]=f-E,t[5]=1-s-l,t[6]=M+b,t[7]=0,t[8]=h+v,t[9]=M-b,t[10]=1-s-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,n,r,o,e,a,u){const i=1/(r-n),c=1/(e-o),s=1/(a-u);return t[0]=2*a*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(e+o)*c,t[10]=(u+a)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*a*2*s,t[15]=0,t},perspective:function(t,n,r,o,e){const a=1/Math.tan(n/2);let u=void 0;return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(u=1/(o-e),t[10]=(e+o)*u,t[14]=2*e*o*u):(t[10]=-1,t[14]=-2*o),t},perspectiveFromFieldOfView:function(t,n,r,o){const e=Math.tan(n.upDegrees*Math.PI/180),a=Math.tan(n.downDegrees*Math.PI/180),u=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(u+i),s=2/(e+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=-(u-i)*c*.5,t[9]=(e-a)*s*.5,t[10]=o/(r-o),t[11]=-1,t[12]=0,t[13]=0,t[14]=o*r/(r-o),t[15]=0,t},ortho:function(t,n,r,o,e,a,u){const i=1/(n-r),c=1/(o-e),s=1/(a-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(n+r)*i,t[13]=(e+o)*c,t[14]=(u+a)*s,t[15]=1,t},lookAt:function(t,n,r,o){let a=void 0,u=void 0,c=void 0,s=void 0,f=void 0,d=void 0,h=void 0,M=void 0,l=void 0,b=void 0;const v=n[0],E=n[1],A=n[2],I=o[0],T=o[1],m=o[2],L=r[0],w=r[1],p=r[2];return Math.abs(v-L)<e.a&&Math.abs(E-w)<e.a&&Math.abs(A-p)<e.a?i(t):(h=v-L,M=E-w,l=A-p,b=1/Math.sqrt(h*h+M*M+l*l),h*=b,M*=b,l*=b,a=T*l-m*M,u=m*h-I*l,c=I*M-T*h,b=Math.sqrt(a*a+u*u+c*c),b?(b=1/b,a*=b,u*=b,c*=b):(a=0,u=0,c=0),s=M*c-l*u,f=l*a-h*c,d=h*u-M*a,b=Math.sqrt(s*s+f*f+d*d),b?(b=1/b,s*=b,f*=b,d*=b):(s=0,f=0,d=0),t[0]=a,t[1]=s,t[2]=h,t[3]=0,t[4]=u,t[5]=f,t[6]=M,t[7]=0,t[8]=c,t[9]=d,t[10]=l,t[11]=0,t[12]=-(a*v+u*E+c*A),t[13]=-(s*v+f*E+d*A),t[14]=-(h*v+M*E+l*A),t[15]=1,t)},targetTo:function(t,n,r,o){const e=n[0],a=n[1],u=n[2],i=o[0],c=o[1],s=o[2];let f=e-r[0],d=a-r[1],h=u-r[2],M=f*f+d*d+h*h;M>0&&(M=1/Math.sqrt(M),f*=M,d*=M,h*=M);let l=c*h-s*d,b=s*f-i*h,v=i*d-c*f;return M=l*l+b*b+v*v,M>0&&(M=1/Math.sqrt(M),l*=M,b*=M,v*=M),t[0]=l,t[1]=b,t[2]=v,t[3]=0,t[4]=d*v-h*b,t[5]=h*l-f*v,t[6]=f*b-d*l,t[7]=0,t[8]=f,t[9]=d,t[10]=h,t[11]=0,t[12]=e,t[13]=a,t[14]=u,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},add:T,subtract:m,multiplyScalar:L,multiplyScalarAndAdd:function(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t[2]=n[2]+r[2]*o,t[3]=n[3]+r[3]*o,t[4]=n[4]+r[4]*o,t[5]=n[5]+r[5]*o,t[6]=n[6]+r[6]*o,t[7]=n[7]+r[7]*o,t[8]=n[8]+r[8]*o,t[9]=n[9]+r[9]*o,t[10]=n[10]+r[10]*o,t[11]=n[11]+r[11]*o,t[12]=n[12]+r[12]*o,t[13]=n[13]+r[13]*o,t[14]=n[14]+r[14]*o,t[15]=n[15]+r[15]*o,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},equals:function(t,n){const r=t[0],o=t[1],a=t[2],u=t[3],i=t[4],c=t[5],s=t[6],f=t[7],d=t[8],h=t[9],M=t[10],l=t[11],b=t[12],v=t[13],E=t[14],A=t[15],I=n[0],T=n[1],m=n[2],L=n[3],w=n[4],p=n[5],O=n[6],S=n[7],_=n[8],y=n[9],g=n[10],R=n[11],N=n[12],U=n[13],C=n[14],P=n[15];return Math.abs(r-I)<=e.a*Math.max(1,Math.abs(r),Math.abs(I))&&Math.abs(o-T)<=e.a*Math.max(1,Math.abs(o),Math.abs(T))&&Math.abs(a-m)<=e.a*Math.max(1,Math.abs(a),Math.abs(m))&&Math.abs(u-L)<=e.a*Math.max(1,Math.abs(u),Math.abs(L))&&Math.abs(i-w)<=e.a*Math.max(1,Math.abs(i),Math.abs(w))&&Math.abs(c-p)<=e.a*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(s-O)<=e.a*Math.max(1,Math.abs(s),Math.abs(O))&&Math.abs(f-S)<=e.a*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(d-_)<=e.a*Math.max(1,Math.abs(d),Math.abs(_))&&Math.abs(h-y)<=e.a*Math.max(1,Math.abs(h),Math.abs(y))&&Math.abs(M-g)<=e.a*Math.max(1,Math.abs(M),Math.abs(g))&&Math.abs(l-R)<=e.a*Math.max(1,Math.abs(l),Math.abs(R))&&Math.abs(b-N)<=e.a*Math.max(1,Math.abs(b),Math.abs(N))&&Math.abs(v-U)<=e.a*Math.max(1,Math.abs(v),Math.abs(U))&&Math.abs(E-C)<=e.a*Math.max(1,Math.abs(E),Math.abs(C))&&Math.abs(A-P)<=e.a*Math.max(1,Math.abs(A),Math.abs(P))},mul:w,sub:p})}}]);