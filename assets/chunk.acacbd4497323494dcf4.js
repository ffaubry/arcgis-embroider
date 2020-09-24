(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{403:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(5),a=(r(82),r(70)),o=r(50);r(414),r(55),r(66),r(85),r(111);i.a.getLogger("esri.renderers.support.utils");const s={inches:Object(o.a)(1,"meters","inches"),feet:Object(o.a)(1,"meters","feet"),"us-feet":Object(o.a)(1,"meters","us-feet"),yards:Object(o.a)(1,"meters","yards"),miles:Object(o.a)(1,"meters","miles"),"nautical-miles":Object(o.a)(1,"meters","nautical-miles"),millimeters:Object(o.a)(1,"meters","millimeters"),centimeters:Object(o.a)(1,"meters","centimeters"),decimeters:Object(o.a)(1,"meters","decimeters"),meters:Object(o.a)(1,"meters","meters"),kilometers:Object(o.a)(1,"meters","kilometers"),"decimal-degrees":1/Object(o.h)(1,"meters")};Object(a.a)("short-date")},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return O})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return d}));var i=r(44),a=r(75),o=r(299),s=r(166),n=r(212),l=r(447);const c={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(o.a)(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},u={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},p={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.f}}},b={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},y={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function O(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const h={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},f={...h,json:{...h.json,origins:{"web-document":{...h.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(s.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(s.b)(t.drawingInfo.transparency)}}},j={type:n.a,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(!(null==(e=this.layer)?void 0:e.timeInfo))return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,a=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!a||a.isEmpty)return a;const o=this.layer.timeOffset,s=o?a.offset(-o.value,o.unit):a,n=this._get("timeExtent");return s.equals(n)?n:s}}},414:function(e,t,r){"use strict";var i,a=r(0),o=(r(4),r(9),r(5),r(6)),s=r(1),n=r(2),l=r(22),c=(r(3),r(10),r(11),r(15)),u=r(35);let p=i=class extends c.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,r){t[r]=null==e?0:e}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};Object(a.a)([Object(s.b)({type:u.a,json:{type:[o.a],write:!0}})],p.prototype,"color",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(a.a)([Object(s.b)({type:Number,json:{write:{allowNull:!0}}})],p.prototype,"value",void 0),Object(a.a)([Object(l.a)("value")],p.prototype,"writeValue",null),p=i=Object(a.a)([Object(n.a)("esri.renderers.visualVariables.support.ColorStop")],p);var d=p;t.a=d},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return v}));var i=r(0),a=r(44),o=r(2),s=r(145),n=r(18),l=r(299),c=r(8),u=r(306),p=r(12),d=r(82);class b{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(s.a),this._values=new Map}clone(e){const t=new b,r=this._originStores[0];r&&r.forEach((e,r)=>{t.set(r,Object(p.a)(e),0)});for(let r=2;r<s.a;r++){const i=this._originStores[r];i&&i.forEach((i,a)=>{e&&e.has(a)||t.set(a,Object(p.a)(i),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?Object(d.g)(t):[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||Object(c.c)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),a=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),a!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var y=b;const O=e=>{let t=class extends e{constructor(...e){super(...e);const t=Object(c.c)(Object(a.a)(this)),r=t.metadatas,i=t.store,o=new y;t.store=o,i.keys().forEach(e=>{o.set(e,i.get(e),0)}),Object.keys(r).forEach(e=>{t.internalGet(e)&&o.set(e,t.internalGet(e),0)})}read(e,t){Object(u.a)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=Object(s.d)(t);if("string"==typeof e)return r.get(e,i);const a={};return e.forEach(e=>{a[e]=r.get(e,i)}),a}originOf(e){return Object(s.b)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=Object(s.d)(t),o=Object(a.a)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach(e=>{o.propertyInvalidated(e),r.revert(e,i),o.propertyCommitted(e)})}};return t=Object(i.a)([Object(o.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return Object(a.a)(e).store}let f=class extends(O(n.a)){};f=Object(i.a)([Object(o.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);const j=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return g(this).delete(e,Object(s.d)(t))}write(e={},t){return Object(l.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(a.a)(this).setAtOrigin(e,t,Object(s.d)(r))}removeOrigin(e){const t=g(this),r=Object(s.d)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=g(this),i=Object(s.d)(t),a=this.get(e);for(let t=i+1;t<s.a;++t)r.delete(e,t);r.set(e,a,i)}toJSON(e){return this.write({},e)}};return t=Object(i.a)([Object(o.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function g(e){return Object(a.a)(e).store}const m=e=>{let t=class extends(j(O(e))){constructor(...e){super(...e)}};return t=Object(i.a)([Object(o.a)("esri.core.MultiOriginJSONSupport")],t),t};let v=class extends(m(n.a)){};v=Object(i.a)([Object(o.a)("esri.core.MultiOriginJSONSupport")],v)},425:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var i=r(0),a=(r(4),r(9),r(5)),o=(r(6),r(1)),s=r(33),n=r(2),l=r(22),c=r(14),u=r(3),p=(r(10),r(7)),d=(r(11),r(100)),b=r(305);const y=a.a.getLogger("esri.layers.mixins.PortalLayer"),O=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new b.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(82).then(r.bind(null,565));return Object(p.t)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw y.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.a.getDefault());return r&&i&&!Object(u.q)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return Object(i.a)([Object(o.b)({type:b.default})],t.prototype,"portalItem",null),Object(i.a)([Object(s.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(i.a)([Object(o.b)()],t.prototype,"resourceReferences",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.PortalLayer")],t),t}},429:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),o=r(2),s=r(22),n=r(14),l=(r(3),r(10),r(11),r(306)),c=r(299);const u={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var p=r(412);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.title="Layer"}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&Object(c.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(l.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=u[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new n.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof n.a&&"web-document-write:property-required"===e.name).length;return!this.url&&i?null:r}beforeSave(){}};return Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(i.a)([Object(s.a)("listMode")],t.prototype,"writeListMode",null),Object(i.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(i.a)([Object(a.b)(p.e)],t.prototype,"opacity",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}}})],t.prototype,"title",void 0),Object(i.a)([Object(s.a)("title")],t.prototype,"writeTitle",null),Object(i.a)([Object(a.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.OperationalLayer")],t),t}},435:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),o=r(2);r(3),r(10),r(11);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return Object(i.a)([Object(a.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),Object(i.a)([Object(a.b)({type:String})],t.prototype,"effect",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.BlendLayer")],t),t}},437:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),o=r(2);r(3),r(10),r(11);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(i.a)([Object(a.b)({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),t=Object(i.a)([Object(o.a)("esri.layers.mixins.ScaleRangeLayer")],t),t}},447:function(e,t,r){"use strict";var i,a=r(0),o=(r(4),r(9),r(8)),s=(r(5),r(6),r(1)),n=r(32),l=r(33),c=r(2),u=r(22),p=(r(3),r(10),r(11),r(15)),d=r(144);let b=i=class extends p.a{async collectRequiredFields(e,t){return Object(d.a)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],b.prototype,"expression",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],b.prototype,"title",void 0),b=i=Object(a.a)([Object(c.a)("esri.layers.support.FeatureExpressionInfo")],b);var y=b,O=r(403);const h=function(){const e=Object.keys(O.a);return e.sort(),e}();var f;const j=Object(n.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new n.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let m=f=class extends p.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(o.h)(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(a.a)([Object(s.b)({type:y,json:{write:!0}})],m.prototype,"featureExpressionInfo",void 0),Object(a.a)([Object(l.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],m.prototype,"readFeatureExpressionInfo",null),Object(a.a)([Object(u.a)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],m.prototype,"writeFeatureExpressionInfo",null),Object(a.a)([Object(s.b)({type:j.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:j.jsonValues,read:j.read,write:{writer:j.write,isRequired:!0}}})],m.prototype,"mode",null),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],m.prototype,"offset",void 0),Object(a.a)([Object(s.b)({type:h,json:{type:String,read:g.read,write:g.write}})],m.prototype,"unit",null),m=f=Object(a.a)([Object(c.a)("esri.layers.support.ElevationInfo")],m);var v=m;t.a=v},456:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),o=r(2);r(3),r(10),r(11);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.refreshInterval=0}refresh(){this.emit("refresh")}};return Object(i.a)([Object(a.b)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.RefreshableLayer")],t),t}},663:function(e,t,r){"use strict";r.r(t);var i=r(0),a=(r(4),r(9),r(46)),o=r(8),s=(r(5),r(6),r(1)),n=r(33),l=r(2),c=(r(3),r(10),r(7)),u=r(65),p=(r(11),r(104)),d=r(219),b=r(214),y=r(215),O=r(419),h=r(435),f=r(412),j=r(429),g=r(425),m=r(456),v=r(437);let S=class extends(Object(h.a)(Object(m.a)(Object(j.a)(Object(g.a)(Object(v.a)(Object(O.a)(y.a))))))){constructor(...e){super(...e),this.description=null,this.title=null,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")}),t.featureCollection.layers}load(e){const t=Object(o.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Object(c.r)(this)}async _fetchService(e){const{data:t}=await Object(u.default)(a.a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};Object(i.a)([Object(s.b)()],S.prototype,"description",void 0),Object(i.a)([Object(s.b)()],S.prototype,"title",void 0),Object(i.a)([Object(s.b)()],S.prototype,"featureCollections",void 0),Object(i.a)([Object(n.a)("service","featureCollections",["featureCollection.layers"])],S.prototype,"readFeatureCollections",null),Object(i.a)([Object(s.b)({type:p.a})],S.prototype,"lineSymbol",void 0),Object(i.a)([Object(s.b)({type:["show","hide"]})],S.prototype,"listMode",void 0),Object(i.a)([Object(s.b)({types:b.i})],S.prototype,"pointSymbol",void 0),Object(i.a)([Object(s.b)({type:d.a})],S.prototype,"polygonSymbol",void 0),Object(i.a)([Object(s.b)()],S.prototype,"outSpatialReference",void 0),Object(i.a)([Object(s.b)(f.j)],S.prototype,"url",void 0),Object(i.a)([Object(s.b)({readOnly:!0,json:{read:!1},value:"geo-rss"})],S.prototype,"type",void 0),S=Object(i.a)([Object(l.a)("esri.layers.GeoRSSLayer")],S);var w=S;t.default=w}}]);