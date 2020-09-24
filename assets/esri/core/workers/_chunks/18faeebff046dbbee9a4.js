self.webpackChunkRemoteClient([7],{112:function(t,e,n){"use strict";var s=n(24),i=n(49),r=n(25),a=n(30);class o{constructor(){this._emitter=new o.EventEmitter(this)}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(t){class e{constructor(t=null){this.target=t,this._listenersMap=null}clear(){this._listenersMap&&this._listenersMap.clear()}emit(t,e){const n=this._listenersMap&&this._listenersMap.get(t);if(!n)return!1;const s=this.target||this;return[...n].forEach(t=>{t.call(s,e)}),n.length>0}on(t,e){if(Array.isArray(t)){const n=t.map(t=>this.on(t,e));return Object(i.a)(n)}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);const n=this._listenersMap.get(t)||[];return n.push(e),this._listenersMap.set(t,n),{remove:()=>{const n=this._listenersMap&&this._listenersMap.get(t)||[],s=n.indexOf(e);s>=0&&n.splice(s,1)}}}once(t,e){let n;return n=this.on(t,t=>{n.remove(),e.call(null,t)}),n}hasEventListener(t){const e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0}}t.EventEmitter=e,t.EventedMixin=t=>{let n=class extends t{constructor(){super(...arguments),this._emitter=new e}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return n=Object(s.a)([Object(r.a)("esri.core.Evented")],n),n};let n=class extends a.a{constructor(){super(...arguments),this._emitter=new o.EventEmitter(this)}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};n=Object(s.a)([Object(r.a)("esri.core.Evented")],n),t.EventedAccessor=n}(o||(o={}));var c=o;e.a=c},114:function(t,e,n){"use strict";var s,i=n(24),r=(n(3),n(20),n(8)),a=(n(7),n(9),n(26)),o=n(25),c=n(66),h=(n(4),n(41),n(42),n(71)),u=n(109),l=n(76),f=n(70),p=n(218),m=n(231);let g=s=class extends u.a{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,e){let n,s,i=null,r=null;return t&&!Array.isArray(t)?(i=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),n=t.hasZ,s=t.hasM):i=t,i=i||[],e=e||h.a.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),r=i[0]&&i[0][0],r&&(void 0===n&&void 0===s?(n=r.length>2,s=!1):void 0===n?n=!s&&r.length>3:void 0===s&&(s=!n&&r.length>3)),{paths:i,spatialReference:e,hasZ:n,hasM:s}}get extent(){const{spatialReference:t}=this,e=Object(m.c)(this);if(!e)return null;const n=new f.a(e);return n.spatialReference=t,n}writePaths(t,e){e.paths=Object(r.a)(this.paths)}addPath(t){if(!t)return;this.clearCache();const e=this.paths,n=e.length;if(function(t){return!Array.isArray(t[0])}(t)){const s=[];for(let e=0,n=t.length;e<n;e++)s[e]=t[e].toArray();e[n]=s}else e[n]=t.concat();return this}clone(){const t=new s;return t.spatialReference=this.spatialReference,t.paths=Object(r.a)(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,e){if(!this._validateInputs(t,e))return null;const n=this.paths[t][e],s=this.hasZ,i=this.hasM;return s&&!i?new l.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!s?new l.a(n[0],n[1],void 0,n[2],this.spatialReference):s&&i?new l.a(n[0],n[1],n[2],n[3],this.spatialReference):new l.a(n[0],n[1],this.spatialReference)}insertPoint(t,e,n){return this._validateInputs(t,e,!0)?(this.clearCache(),Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[t].splice(e,0,n),this):this}removePath(t){if(!this._validateInputs(t,null))return null;this.clearCache();const e=this.paths.splice(t,1)[0],n=this.spatialReference;return e.map(t=>new l.a(t,n))}removePoint(t,e){return this._validateInputs(t,e)?(this.clearCache(),new l.a(this.paths[t].splice(e,1)[0],this.spatialReference)):null}setPoint(t,e,n){return this._validateInputs(t,e)?(this.clearCache(),Object(p.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.paths[t][e]=n,this):this}_validateInputs(t,e,n=!1){if(null==t||t<0||t>=this.paths.length)return!1;if(null!=e){const s=this.paths[t];if(n&&(e<0||e>s.length))return!1;if(!n&&(e<0||e>=s.length))return!1}return!0}toJSON(t){return this.write(null,t)}};Object(i.a)([Object(a.b)({dependsOn:["hasM","hasZ","paths"]})],g.prototype,"cache",void 0),Object(i.a)([Object(a.b)({dependsOn:["cache"],readOnly:!0})],g.prototype,"extent",null),Object(i.a)([Object(a.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],g.prototype,"paths",void 0),Object(i.a)([Object(c.a)("paths")],g.prototype,"writePaths",null),g=s=Object(i.a)([Object(o.a)("esri.geometry.Polyline")],g),g.prototype.toJSON.isDefaultToJSON=!0;var d=g;e.a=d},121:function(t,e,n){"use strict";var s=n(24),i=(n(3),n(20),n(8)),r=(n(7),n(9),n(26)),a=n(25),o=n(66),c=(n(4),n(41),n(42),n(71)),h=n(109),u=n(138),l=n(76),f=n(242),p=n(270),m=n(70),g=n(218),d=n(230);function y(t){return t?function(t,e){if(!t||!t.length)return null;const n=[],s=[],i=e?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let n=0,r=t.length;n<r;n++){const r=_(t[n],e,i);r&&s.push(r)}if(s.sort((t,n)=>{let s=t[2]-n[2];return 0===s&&e&&(s=t[4]-n[4]),s}),s.length){let t=6*s[0][2];n[0]=s[0][0]/t,n[1]=s[0][1]/t,e&&(t=6*s[0][4],n[2]=0!==t?s[0][3]/t:0),(n[0]<i[0]||n[0]>i[1]||n[1]<i[2]||n[1]>i[3]||e&&(n[2]<i[4]||n[2]>i[5]))&&(n.length=0)}if(!n.length){const s=t[0]&&t[0].length?function(t,e){const n=e?[0,0,0]:[0,0],s=e?[0,0,0]:[0,0];let i=0,r=0,a=0,o=0;for(let c=0,h=t.length;c<h-1;c++){const h=t[c],u=t[c+1];if(h&&u){n[0]=h[0],n[1]=h[1],s[0]=u[0],s[1]=u[1],e&&h.length>2&&u.length>2&&(n[2]=h[2],s[2]=u[2]);const t=Object(d.a)(n,s);if(t){i+=t;const n=Object(d.b)(h,u);r+=t*n[0],a+=t*n[1],e&&n.length>2&&(o+=t*n[2])}}}return i>0?e?[r/i,a/i,o/i]:[r/i,a/i]:t.length?t[0]:null}(t[0],e):null;if(!s)return null;n[0]=s[0],n[1]=s[1],e&&s.length>2&&(n[2]=s[2])}return n}(t.rings,t.hasZ):null}function _(t,e,n){let s=0,i=0,r=0,a=0,o=0;for(let c=0;c<t.length;c++){const h=t[c],[u,l,f]=h,p=t[(c+1)%t.length],[m,g,d]=p;let y=u*g-m*l;a+=y,s+=(u+m)*y,i+=(l+g)*y,e&&h.length>2&&p.length>2&&(y=u*d-m*f,r+=(f+d)*y,o+=y),u<n[0]&&(n[0]=u),u>n[1]&&(n[1]=u),l<n[2]&&(n[2]=l),l>n[3]&&(n[3]=l),e&&(f<n[4]&&(n[4]=f),f>n[5]&&(n[5]=f))}if(a>0&&(a*=-1),o>0&&(o*=-1),!a)return null;const c=[s,i,.5*a];return e&&(c[3]=r,c[4]=.5*o),c}var v,b=n(231);function x(t){return!Array.isArray(t[0])}let O=v=class extends h.a{constructor(...t){super(...t),this.rings=[],this.type="polygon"}static fromExtent(t){const e=t.clone().normalize(),n=t.spatialReference;let s=!1,i=!1;e.map(t=>{t.hasZ&&(s=!0),t.hasM&&(i=!0)});const r={rings:e.map((function(t){const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(s&&t.hasZ){const n=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<e.length;t++)e[t].push(n)}if(i&&t.hasM){const n=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<e.length;t++)e[t].push(n)}return e})),spatialReference:n};return s&&(r.hasZ=!0),i&&(r.hasM=!0),new v(r)}normalizeCtorArgs(t,e){let n,s,i=null,r=null;return t&&!Array.isArray(t)?(i=t.rings?t.rings:null,e||(t.spatialReference?e=t.spatialReference:t.rings||(e=t)),n=t.hasZ,s=t.hasM):i=t,i=i||[],e=e||c.a.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),r=i[0]&&i[0][0],r&&(void 0===n&&void 0===s?(n=r.length>2,s=!1):void 0===n?n=!s&&r.length>3:void 0===s&&(s=!n&&r.length>3)),{rings:i,spatialReference:e,hasZ:n,hasM:s}}get centroid(){const t=y(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const e=new l.a;return e.x=t[0],e.y=t[1],e.spatialReference=this.spatialReference,this.hasZ&&(e.z=t[2]),e}get extent(){const{spatialReference:t}=this,e=Object(b.b)(this);if(!e)return null;const n=new m.a(e);return n.spatialReference=t,n}get isSelfIntersecting(){return Object(p.b)(this.rings)}writePaths(t,e){e.rings=Object(i.a)(this.rings)}addRing(t){if(!t)return;this.clearCache();const e=this.rings,n=e.length;if(x(t)){const s=[];for(let e=0,n=t.length;e<n;e++)s[e]=t[e].toArray();e[n]=s}else e[n]=t.concat();return this}clone(){const t=new v;return t.spatialReference=this.spatialReference,t.rings=Object(i.a)(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}contains(t){return!!t&&(Object(u.a)(t,this.spatialReference)&&(t=Object(u.d)(t,this.spatialReference)),Object(f.g)(this,t))}isClockwise(t){let e;return e=x(t)?t.map(t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]):t,Object(d.c)(e,this.hasM,this.hasZ)}getPoint(t,e){if(!this._validateInputs(t,e))return null;const n=this.rings[t][e],s=this.hasZ,i=this.hasM;return s&&!i?new l.a(n[0],n[1],n[2],void 0,this.spatialReference):i&&!s?new l.a(n[0],n[1],void 0,n[2],this.spatialReference):s&&i?new l.a(n[0],n[1],n[2],n[3],this.spatialReference):new l.a(n[0],n[1],this.spatialReference)}insertPoint(t,e,n){return this._validateInputs(t,e,!0)?(this.clearCache(),Object(g.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t].splice(e,0,n),this):this}removePoint(t,e){return this._validateInputs(t,e)?(this.clearCache(),new l.a(this.rings[t].splice(e,1)[0],this.spatialReference)):null}removeRing(t){if(!this._validateInputs(t,null))return null;this.clearCache();const e=this.rings.splice(t,1)[0],n=this.spatialReference;return e.map(t=>new l.a(t,n))}setPoint(t,e,n){return this._validateInputs(t,e)?(this.clearCache(),Object(g.a)(this,n),Array.isArray(n)||(n=n.toArray()),this.rings[t][e]=n,this):this}_validateInputs(t,e,n=!1){if(null==t||t<0||t>=this.rings.length)return!1;if(null!=e){const s=this.rings[t];if(n&&(e<0||e>s.length))return!1;if(!n&&(e<0||e>=s.length))return!1}return!0}toJSON(t){return this.write(null,t)}};Object(s.a)([Object(r.b)({dependsOn:["hasM","hasZ","rings"]})],O.prototype,"cache",void 0),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["cache"]})],O.prototype,"centroid",null),Object(s.a)([Object(r.b)({dependsOn:["cache"],readOnly:!0})],O.prototype,"extent",null),Object(s.a)([Object(r.b)({dependsOn:["cache"],readOnly:!0})],O.prototype,"isSelfIntersecting",null),Object(s.a)([Object(r.b)({type:[[[Number]]],json:{write:{isRequired:!0}}})],O.prototype,"rings",void 0),Object(s.a)([Object(o.a)("rings")],O.prototype,"writePaths",null),O=v=Object(s.a)([Object(a.a)("esri.geometry.Polygon")],O),O.prototype.toJSON.isDefaultToJSON=!0;var j=O;e.a=j},134:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a}));var s=n(67);function i(t){return"point"===t||"multipoint"===t||"polyline"===t||"polygon"===t}const r=Object(s.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),a=Object(s.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},143:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var s=n(19),i=n(4),r=n(43);function a(t,e){return Object(r.default)(o(t),e)}function o(t){return Object(i.w)(s.a.baseUrl,s.a.assetsPath,t)}},147:function(t,e,n){"use strict";var s,i=n(24),r=(n(3),n(20),n(8)),a=(n(7),n(9),n(26)),o=n(25),c=n(66),h=(n(4),n(41),n(42),n(109)),u=n(76),l=n(70),f=n(218);function p(t){return(e,n)=>null==e?n:null==n?e:t(e,n)}let m=s=class extends h.a{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,e){if(!t&&!e)return null;const n={};var s;Array.isArray(t)?(n.points=t,n.spatialReference=e):!(s=t)||"esri.geometry.SpatialReference"!==s.declaredClass&&null==s.wkid?(t.points&&(n.points=t.points),t.spatialReference&&(n.spatialReference=t.spatialReference),t.hasZ&&(n.hasZ=t.hasZ),t.hasM&&(n.hasM=t.hasM)):n.spatialReference=t;const i=n.points&&n.points[0];return i&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=i.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=i.length>3:void 0===n.hasM&&(n.hasM=i.length>3)),n}get extent(){const t=this.points;if(!t.length)return null;const e=new l.a,n=this.hasZ,s=this.hasM,i=n?3:2,r=t[0],a=p(Math.min),o=p(Math.max);let c,h,u,f,[m,g]=r,[d,y]=r;for(let e=0,r=t.length;e<r;e++){const r=t[e],[l,p]=r;if(m=a(m,l),g=a(g,p),d=o(d,l),y=o(y,p),n&&r.length>2){const t=r[2];c=a(c,t),u=o(u,t)}if(s&&r.length>i){const t=r[i];h=a(h,t),f=o(f,t)}}return e.xmin=m,e.ymin=g,e.xmax=d,e.ymax=y,e.spatialReference=this.spatialReference,n?(e.zmin=c,e.zmax=u):(e.zmin=null,e.zmax=null),s?(e.mmin=h,e.mmax=f):(e.mmin=null,e.mmax=null),e}writePoints(t,e){e.points=Object(r.a)(this.points)}addPoint(t){return this.clearCache(),Object(f.a)(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this}clone(){const t={points:Object(r.a)(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new s(t)}getPoint(t){if(!this._validateInputs(t))return null;const e=this.points[t],n={x:e[0],y:e[1],spatialReference:this.spatialReference};let s=2;return this.hasZ&&(n.z=e[2],s=3),this.hasM&&(n.m=e[s]),new u.a(n)}removePoint(t){return this._validateInputs(t)?(this.clearCache(),new u.a(this.points.splice(t,1)[0],this.spatialReference)):null}setPoint(t,e){return this._validateInputs(t)?(this.clearCache(),Object(f.a)(this,e),Array.isArray(e)||(e=e.toArray()),this.points[t]=e,this):this}toJSON(t){return this.write(null,t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}};Object(i.a)([Object(a.b)({dependsOn:["points","hasZ","hasM","spatialReference"]})],m.prototype,"cache",void 0),Object(i.a)([Object(a.b)({dependsOn:["cache"]})],m.prototype,"extent",null),Object(i.a)([Object(a.b)({type:[[Number]],json:{write:{isRequired:!0}}})],m.prototype,"points",void 0),Object(i.a)([Object(c.a)("points")],m.prototype,"writePoints",null),m=s=Object(i.a)([Object(o.a)("esri.geometry.Multipoint")],m),m.prototype.toJSON.isDefaultToJSON=!0;var g=m;e.a=g},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var s=n(19),i=n(2),r=n(7),a=n(10),o=n(5),c=n(89),h=n(71),u=n(138),l=n(121),f=n(114),p=n(4),m=n(43),g=n(73);n(72);const d=r.a.getLogger("esri.geometry.support.normalizeUtils"),y={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new f.a({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:h.a.WebMercator}),minus180Line:new f.a({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:h.a.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new f.a({paths:[[[180,-180],[180,180]]],spatialReference:h.a.WGS84}),minus180Line:new f.a({paths:[[[-180,-180],[-180,180]]],spatialReference:h.a.WGS84})}};function _(t){return"polygon"===t.type}function v(t){return"polyline"===t[0].type}function b(t){return _(t)?t.rings:t.paths}function x(t,e){return Math.ceil((t-e)/(2*e))}function O(t,e){const n=b(t);for(const t of n)for(const n of t)n[0]+=e;return t}function j(t,e,n){if(e){const e=function(t,e){if(!(t instanceof f.a||t instanceof l.a)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw d.error(t),new a.a(t)}const n=b(t),s=[];for(const t of n){const n=[];s.push(n),n.push([t[0][0],t[0][1]]);for(let s=0;s<t.length-1;s++){const i=t[s][0],r=t[s][1],a=t[s+1][0],o=t[s+1][1],c=Math.sqrt((a-i)*(a-i)+(o-r)*(o-r)),h=(o-r)/c,u=(a-i)/c,l=c/e;if(l>1){for(let t=1;t<=l-1;t++){const s=t*e,a=u*s+i,o=h*s+r;n.push([a,o])}const t=(c+Math.floor(l-1)*e)/2,s=u*t+i,a=h*t+r;n.push([s,a])}n.push([a,o])}}return _(t)?new l.a({rings:s,spatialReference:t.spatialReference}):new f.a({paths:s,spatialReference:t.spatialReference})}(t,1e6);t=Object(u.e)(e,!0)}return n&&(t=O(t,n)),t}function R(t,e,n){if(Array.isArray(t)){const s=t[0];if(s>e){const n=x(s,e);t[0]=s+n*(-2*e)}else if(s<n){const e=x(s,n);t[0]=s+e*(-2*n)}}else{const s=t.x;if(s>e){const n=x(s,e);t=t.clone().offset(n*(-2*e),0)}else if(s<n){const e=x(s,n);t=t.clone().offset(e*(-2*n),0)}}return t}async function M(t,e,n){if(!Array.isArray(t))return M([t],e);const r=e?e.url:s.a.geometryServiceUrl;let a,h,d,_,z,w,S,A,P=0;const Z=[],E=[];for(const e of t)if(Object(i.g)(e))E.push(e);else if(a||(a=e.spatialReference,h=Object(c.d)(a),d=a.isWebMercator,w=d?102100:4326,_=y[w].maxX,z=y[w].minX,S=y[w].plus180Line,A=y[w].minus180Line),h)if("mesh"===e.type)E.push(e);else if("point"===e.type)E.push(R(e.clone(),_,z));else if("multipoint"===e.type){const t=e.clone();t.points=t.points.map(t=>R(t,_,z)),E.push(t)}else if("extent"===e.type){const t=e.clone()._normalize(!1,!1,h);E.push(t.rings?new l.a(t):t)}else if(e.extent){const t=e.extent,n=x(t.xmin,z)*(2*_);let s=0===n?e.clone():O(e.clone(),n);t.offset(n,0),t.intersects(S)&&t.xmax!==_?(P=t.xmax>P?t.xmax:P,s=j(s,d),Z.push(s),E.push("cut")):t.intersects(A)&&t.xmin!==z?(P=t.xmax*(2*_)>P?t.xmax*(2*_):P,s=j(s,d,360),Z.push(s),E.push("cut")):E.push(s)}else E.push(e.clone());else E.push(e);let N=x(P,_),G=-90;const I=N,J=new f.a;for(;N>0;){const t=360*N-180;J.addPath([[t,G],[t,-1*G]]),G*=-1,N--}if(Z.length>0&&I>0){const e=function(t,e){let n=-1;for(let s=0;s<e.cutIndexes.length;s++){const i=e.cutIndexes[s],r=e.geometries[s],a=b(r);for(let t=0;t<a.length;t++){const e=a[t];e.some(n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const s=e[t][0];n=s>n?s:n}n=Number(n.toFixed(9));const s=-360*x(n,180);for(let n=0;n<e.length;n++){const e=r.getPoint(t,n);r.setPoint(t,n,e.clone().offset(s,0))}return!0}})}if(i===n){if("polygon"===t[0].type)for(const e of b(r))t[i]=t[i].addRing(e);else if(v(t))for(const e of b(r))t[i]=t[i].addPath(e)}else n=i,t[i]=r}return t}(Z,await async function(t,e,n,s){const i="string"==typeof t?Object(p.H)(t):t,r=e[0].spatialReference,a={...s,query:{...i.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:Object(g.c)(e[0]),geometries:e}),cutter:JSON.stringify(n)}},o=await Object(m.default)(i.path+"/cut",a),{cutIndexes:c,geometries:h=[]}=o.data;return{cutIndexes:c,geometries:h.map(t=>{const e=Object(g.a)(t);return e.spatialReference=r,e})}}(r,Z,J,n)),s=[],a=[];for(let n=0;n<E.length;n++){const r=E[n];if("cut"!==r)a.push(r);else{const r=e.shift(),o=t[n];Object(i.h)(o)&&"polygon"===o.type&&o.rings&&o.rings.length>1&&r.rings.length>=o.rings.length?(s.push(r),a.push("simplify")):a.push(d?Object(u.b)(r):r)}}if(!s.length)return a;const o=await async function(t,e,n){const s="string"==typeof t?Object(p.H)(t):t,i=e[0].spatialReference,r=Object(g.c)(e[0]),a={...n,query:{...s.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify((o=e,{geometryType:Object(g.c)(o[0]),geometries:o.map(t=>t.toJSON())}))}};var o;return function(t,e,n){const s=Object(g.b)(e);return t.map(t=>{const e=s.fromJSON(t);return e.spatialReference=n,e})}((await Object(m.default)(s.path+"/simplify",a)).data,r,i)}(r,s,n),c=[];for(let t=0;t<a.length;t++){const e=a[t];"simplify"!==e?c.push(e):c.push(d?Object(u.b)(o.shift()):o.shift())}return c}const C=[];for(let t=0;t<E.length;t++){const e=E[t];if("cut"!==e)C.push(e);else{const t=Z.shift();C.push(!0===d?Object(u.b)(t):t)}}return Object(o.r)(C)}},202:function(t,e,n){"use strict";function s(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function i(t){return void 0!==t.points}function r(t){return void 0!==t.x&&void 0!==t.y}function a(t){return void 0!==t.paths}function o(t){return void 0!==t.rings}function c(t){return(e,n)=>null==e?n:null==n?e:t(e,n)}n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return p}));const h=c(Math.min),u=c(Math.max);function l(t,e){return a(e)?p(t,e.paths,!1,!1):o(e)?p(t,e.rings,!1,!1):i(e)?g(t,e.points,!1,!1,!1,!1):s(e)?m(t,e):(r(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.x,t[3]=e.y),t)}function f(t,e){return a(e)?p(t,e.paths,!0,!1):o(e)?p(t,e.rings,!0,!1):i(e)?g(t,e.points,!0,!1,!0,!1):s(e)?m(t,e,!0,!1,!0,!1):(r(e)&&(t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.x,t[4]=e.y,t[5]=e.z),t)}function p(t,e,n,s){const i=n?3:2;if(!e.length||!e[0].length)return null;let[r,a]=e[0][0],[o,c]=e[0][0],l=void 0,f=void 0,p=void 0,m=void 0;for(let t=0;t<e.length;t++){const g=e[t];for(let t=0;t<g.length;t++){const e=g[t],[d,y]=e;if(r=h(r,d),a=h(a,y),o=u(o,d),c=u(c,y),n&&e.length>2){const t=e[2];l=h(l,t),f=u(f,t)}if(s&&e.length>i){const t=e[i];p=h(l,t),m=u(f,t)}}}return n?s?(t[0]=r,t[1]=a,t[2]=l,t[3]=p,t[4]=o,t[5]=c,t[6]=f,t[7]=m,t.length=8,t):(t[0]=r,t[1]=a,t[2]=l,t[3]=o,t[4]=c,t[5]=f,t.length=6,t):s?(t[0]=r,t[1]=a,t[2]=p,t[3]=o,t[4]=c,t[5]=m,t.length=6,t):(t[0]=r,t[1]=a,t[2]=o,t[3]=c,t.length=4,t)}function m(t,e,n,s,i,r){const a=e.xmin,o=e.xmax,c=e.ymin,h=e.ymax;let u=e.zmin,l=e.zmax,f=e.mmin,p=e.mmax;return i?(u=u||0,l=l||0,r?(f=f||0,p=p||0,t[0]=a,t[1]=c,t[2]=u,t[3]=f,t[4]=o,t[5]=h,t[6]=l,t[7]=p,t):(t[0]=a,t[1]=c,t[2]=u,t[3]=o,t[4]=h,t[5]=l,t)):r?(f=f||0,p=p||0,t[0]=a,t[1]=c,t[2]=f,t[3]=o,t[4]=h,t[5]=p,t):(t[0]=a,t[1]=c,t[2]=o,t[3]=h,t)}function g(t,e,n,s,i,r){const a=n?3:2,o=s&&r,c=n&&i;if(!e.length||!e[0].length)return null;let[l,f]=e[0],[p,m]=e[0],g=void 0,d=void 0,y=void 0,_=void 0;for(let t=0;t<e.length;t++){const n=e[t],[s,i]=n;if(l=h(l,s),f=h(f,i),p=u(p,s),m=u(m,i),c&&n.length>2){const t=n[2];g=h(g,t),d=u(d,t)}if(o&&n.length>a){const t=n[a];y=h(g,t),_=u(d,t)}}return i?(g=g||0,d=d||0,r?(y=y||0,_=_||0,t[0]=l,t[1]=f,t[2]=g,t[3]=y,t[4]=p,t[5]=m,t[6]=d,t[7]=_,t):(t[0]=l,t[1]=f,t[2]=g,t[3]=p,t[4]=m,t[5]=d,t)):r?(y=y||0,_=_||0,t[0]=l,t[1]=f,t[2]=y,t[3]=p,t[4]=m,t[5]=_,t):(t[0]=l,t[1]=f,t[2]=p,t[3]=m,t)}},212:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c}));n(2);const s=Map.prototype.entries?function(t,e){const n=t.entries();for(let t=n.next();!t.done;t=n.next())if(e(t.value[1],t.value[0]))return!0;return!1}:function(t,e){let n=!0;return t.forEach((t,s)=>{n&&(n=!e(t,s))}),!n},i=!!Map.prototype.values,r=!!Map.prototype.keys,a=!!Array.from;function o(t){const e=[];return t.forEach((t,n)=>e.push([n,t])),e}const c=i&&a?function(t){return Array.from(t.values())}:function(t){const e=new Array(t.size);let n=0;return t.forEach(t=>e[n++]=t),e},h=r&&a?function(t){return Array.from(t.keys())}:function(t){const e=new Array(t.size);let n=0;return t.forEach((t,s)=>e[n++]=s),e},u=i?function(t){return new Map(t)}:function(t){const e=new Map;for(const n of t)e.set(n[0],n[1]);return e}},218:function(t,e,n){"use strict";function s(t,e,n=!1){let{hasM:s,hasZ:i}=t;Array.isArray(e)?4!==e.length||s||i?3===e.length&&n&&!s?(i=!0,s=!1):3===e.length&&s&&i&&(s=!1,i=!1):(s=!0,i=!0):(i=!i&&e.hasZ&&(!s||e.hasM),s=!s&&e.hasM&&(!i||e.hasZ)),t.hasZ=i,t.hasM=s}n.d(e,"a",(function(){return s}))},230:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a}));n(89);function s(t,e){const n=e[0]-t[0],s=e[1]-t[1];if(t.length>2&&e.length>2){const i=t[2]-e[2];return Math.sqrt(n*n+s*s+i*i)}return Math.sqrt(n*n+s*s)}function i(t,e,n){const s=t[0]+n*(e[0]-t[0]),i=t[1]+n*(e[1]-t[1]);return t.length>2&&e.length>2?[s,i,t[2]+n*(e[2]-t[2])]:[s,i]}function r(t,e){return i(t,e,.5)}function a(t,e,n){const s=t.length;let i=0,r=0,a=0;for(let o=0;o<s;o++){const c=t[o],h=t[(o+1)%s];let u=2;i+=c[0]*h[1]-h[0]*c[1],c.length>2&&h.length>2&&n&&(r+=c[0]*h[2]-h[0]*c[2],u=3),c.length>u&&h.length>u&&e&&(a+=c[0]*h[u]-h[0]*c[u])}return i<=0&&r<=0&&a<=0}},231:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f}));var s=n(202);const i=[];function r(t,e,n,s){return{xmin:t,ymin:e,xmax:n,ymax:s}}function a(t,e,n,s,i,r){return{xmin:t,ymin:e,zmin:n,xmax:s,ymax:i,zmax:r}}function o(t,e,n,s,i,r){return{xmin:t,ymin:e,mmin:n,xmax:s,ymax:i,mmax:r}}function c(t,e,n,s,i,r,a,o){return{xmin:t,ymin:e,zmin:n,mmin:s,xmax:i,ymax:r,zmax:a,mmax:o}}function h(t,e=!1,n=!1){return e?n?c(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]):a(t[0],t[1],t[2],t[3],t[4],t[5]):n?o(t[0],t[1],t[2],t[3],t[4],t[5]):r(t[0],t[1],t[2],t[3])}function u(t){return t?void 0!==(e=t).xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax?t:function(t){return void 0!==t.x&&void 0!==t.y}(t)?function(t){const{x:e,y:n,z:s,m:i}=t,h=null!=i;return null!=s?h?c(e,n,s,i,e,n,s,i):a(e,n,s,e,n,s):h?o(e,n,i,e,n,i):r(e,n,e,n)}(t):function(t){return void 0!==t.rings}(t)?l(t):function(t){return void 0!==t.paths}(t)?f(t):function(t){return void 0!==t.points}(t)?function(t){const{hasZ:e,hasM:n,points:r}=t;return h(Object(s.c)(i,r,e,n),e,n)}(t):null:null;var e}function l(t){const{hasZ:e,hasM:n,rings:r}=t,a=Object(s.d)(i,r,e,n);return a?h(a,e,n):null}function f(t){const{hasZ:e,hasM:n,paths:r}=t,a=Object(s.d)(i,r,e,n);return a?h(a,e,n):null}},243:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var s=n(11),i=n(23),r=n(212);class a{constructor(t,e,n){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",n&&(this._storage.registerRemoveFunc(this._namespace,n),this._removeFunc=!0)}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)}put(t,e,n,s=0){this._storage.put(this._namespace+t,e,n,s)}get(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,n){this._storage.updateSize(this._namespace+t,e,n)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class o{constructor(t=10485760){this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new i.a}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs=this._removeFuncs.filter(e=>e[0]!==t)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,e,n,s){const i=this._db.get(t);if(i&&(this._size-=i.size,this._db.delete(t),i.entry!==e&&this._notifyRemoved(t,i.entry)),n>this._maxSize)return void this._notifyRemoved(t,e);if(void 0===e)return void console.warn("Refusing to cache undefined entry ");if(!n||n<0)return void console.warn("Refusing to cache entry with invalid size "+n);const r=1+Math.max(s,-3)- -3;this._db.set(t,{entry:e,size:n,lifetime:r,lives:r}),this._size+=n,this._checkSizeLimit()}updateSize(t,e,n){const s=this._db.get(t);s&&s.entry===e&&(this._size-=s.size,n>this._maxSize?this._notifyRemoved(t,e):(s.size=n,this._size+=n,this._checkSizeLimit()))}pop(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},n=new Array;this._db.forEach((t,i)=>{const r=t.lifetime;n[r]=(n[r]||0)+t.size,this._users.forEachSimple(n=>{const r=n.namespace;if(Object(s.e)(i,r)){const n=e[r]||0;e[r]=n+t.size}})});const i={};this._users.forEachSimple(t=>{const n=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const s=e[n]||0;e[n]=s,i[n]=Math.round(100*t.hitRate)+"%"}else i[n]="0%"});const r=Object.keys(e);r.forEach(t=>e[t]=e[t]/this._size*100),r.sort((t,n)=>e[n]-e[t]),r.forEach(n=>t[n]=Math.round(e[n])+"% / "+i[n]);for(let e=n.length-1;e>=0;--e){const s=n[e];s&&(t["Priority "+(e+-3-1)]=Math.round(s/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forEachSimple(t=>t.resetHitRate())}clear(t){this._db.forEach((e,n)=>{Object(s.e)(n,t)&&(this._size-=e.size,this._db.delete(n),this._notifyRemoved(n,e.entry))})}clearAll(){this._db.forEach((t,e)=>this._notifyRemoved(e,t.entry)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(t,e){this._removeFuncs.forEach(n=>{Object(s.e)(t,n[0])&&n[1](e)})}_checkSizeLimit(){this._size<=this._maxSize||Object(r.d)(this._db,(t,e)=>(this._db.delete(e),t.lives<=1?(this._size-=t.size,this._notifyRemoved(e,t.entry)):(--t.lives,this._db.set(e,t)),this._size<=.9*this.maxSize))}}},333:function(t,e,n){"use strict";var s=n(243);e.a=class{constructor(t,e){this._storage=new s.b,this._storage.maxSize=t,e&&this._storage.registerRemoveFunc("",e)}put(t,e){this._storage.put(t,e,1,1)}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll()}destroy(){this._storage.clearAll()}}},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n(9),i=(n(71),n(109)),r=n(76),a=n(70),o=n(147),c=n(121),h=n(114);n(134),n(73);const u={base:i.a,key:"type",typeMap:{extent:a.a,multipoint:o.a,point:r.a,polyline:h.a,polygon:c.a}};Object(s.k)(u)},73:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return f}));var s=n(109),i=n(76),r=n(70),a=n(147),o=n(121),c=n(114);function h(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function u(t){return void 0!==t.points}function l(t){return void 0!==t.x&&void 0!==t.y}function f(t){return void 0!==t.paths}function p(t){return void 0!==t.rings}function m(t){return t?t instanceof s.a?t:l(t)?i.a.fromJSON(t):f(t)?c.a.fromJSON(t):p(t)?o.a.fromJSON(t):u(t)?a.a.fromJSON(t):h(t)?r.a.fromJSON(t):null:null}function g(t){return t?l(t)?"esriGeometryPoint":f(t)?"esriGeometryPolyline":p(t)?"esriGeometryPolygon":h(t)?"esriGeometryEnvelope":u(t)?"esriGeometryMultipoint":null:null}const d={esriGeometryPoint:i.a,esriGeometryPolyline:c.a,esriGeometryPolygon:o.a,esriGeometryEnvelope:r.a,esriGeometryMultipoint:a.a};function y(t){return t&&d[t]||null}}});