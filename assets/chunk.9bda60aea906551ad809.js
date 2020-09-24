(window.webpackJsonp=window.webpackJsonp||[]).push([[103,160],{705:function(e,t,r){"use strict";var o=r(0),a=(r(4),r(9),r(5)),n=(r(6),r(1)),i=r(2),s=(r(3),r(10),r(11),r(15)),c=r(59);const u=a.a.getLogger("esri.tasks.support.ProjectParameters");let l=class extends s.a{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}get outSR(){return u.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference}set outSR(e){u.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=e}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(c.c)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o.a)([Object(n.b)()],l.prototype,"geometries",void 0),Object(o.a)([Object(n.b)({json:{read:{source:"outSR"}}})],l.prototype,"outSpatialReference",void 0),Object(o.a)([Object(n.b)({json:{read:!1}})],l.prototype,"outSR",null),Object(o.a)([Object(n.b)()],l.prototype,"transformation",void 0),Object(o.a)([Object(n.b)()],l.prototype,"transformForward",void 0),l=Object(o.a)([Object(i.a)("esri.tasks.support.ProjectParameters")],l);var p=l;t.a=p},952:function(e,t,r){"use strict";r.r(t),r.d(t,"create",(function(){return s})),r.d(t,"projectGeometry",(function(){return c}));r(9);var o=r(46),a=r(14),n=r(100),i=r(705);async function s(e=null,t){if(o.a.geometryServiceUrl)return new(0,(await r.e(16).then(r.bind(null,897))).default)({url:o.a.geometryServiceUrl});if(!e)throw new a.a("internal:geometry-service-url-not-configured");let i;if(i="portal"in e?e.portal||n.a.getDefault():e,await i.load({signal:t}),i.helperServices&&i.helperServices.geometry&&i.helperServices.geometry.url)return new(0,(await r.e(16).then(r.bind(null,897))).default)({url:i.helperServices.geometry.url});throw new a.a("internal:geometry-service-url-not-configured")}async function c(e,t,r=null,o){const n=await s(r,o),c=new i.a;c.geometries=[e],c.outSpatialReference=t;const u=await n.project(c,{signal:o});if(u&&Array.isArray(u)&&1===u.length)return u[0];throw new a.a("internal:geometry-service-projection-failed")}}}]);