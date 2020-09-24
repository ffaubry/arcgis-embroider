(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{403:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(5),a=(r(82),r(70)),s=r(50);r(414),r(55),r(66),r(85),r(111);i.a.getLogger("esri.renderers.support.utils");const n={inches:Object(s.a)(1,"meters","inches"),feet:Object(s.a)(1,"meters","feet"),"us-feet":Object(s.a)(1,"meters","us-feet"),yards:Object(s.a)(1,"meters","yards"),miles:Object(s.a)(1,"meters","miles"),"nautical-miles":Object(s.a)(1,"meters","nautical-miles"),millimeters:Object(s.a)(1,"meters","millimeters"),centimeters:Object(s.a)(1,"meters","centimeters"),decimeters:Object(s.a)(1,"meters","decimeters"),meters:Object(s.a)(1,"meters","meters"),kilometers:Object(s.a)(1,"meters","kilometers"),"decimal-degrees":1/Object(s.h)(1,"meters")};Object(a.a)("short-date")},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return j})),r.d(t,"g",(function(){return p})),r.d(t,"h",(function(){return O})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return b}));var i=r(44),a=r(75),s=r(299),n=r(166),o=r(212),l=r(447);const c={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(s.a)(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},u={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},b={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.f}}},d={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},y={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function O(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const h={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},j={...h,json:{...h.json,origins:{"web-document":{...h.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(n.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(n.b)(t.drawingInfo.transparency)}}},f={type:o.a,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(!(null==(e=this.layer)?void 0:e.timeInfo))return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,a=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!a||a.isEmpty)return a;const s=this.layer.timeOffset,n=s?a.offset(-s.value,s.unit):a,o=this._get("timeExtent");return n.equals(o)?o:n}}},414:function(e,t,r){"use strict";var i,a=r(0),s=(r(4),r(9),r(5),r(6)),n=r(1),o=r(2),l=r(22),c=(r(3),r(10),r(11),r(15)),p=r(35);let u=i=class extends c.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,r){t[r]=null==e?0:e}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};Object(a.a)([Object(n.b)({type:p.a,json:{type:[s.a],write:!0}})],u.prototype,"color",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(a.a)([Object(n.b)({type:Number,json:{write:{allowNull:!0}}})],u.prototype,"value",void 0),Object(a.a)([Object(l.a)("value")],u.prototype,"writeValue",null),u=i=Object(a.a)([Object(o.a)("esri.renderers.visualVariables.support.ColorStop")],u);var b=u;t.a=b},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return v}));var i=r(0),a=r(44),s=r(2),n=r(145),o=r(18),l=r(299),c=r(8),p=r(306),u=r(12),b=r(82);class d{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(n.a),this._values=new Map}clone(e){const t=new d,r=this._originStores[0];r&&r.forEach((e,r)=>{t.set(r,Object(u.a)(e),0)});for(let r=2;r<n.a;r++){const i=this._originStores[r];i&&i.forEach((i,a)=>{e&&e.has(a)||t.set(a,Object(u.a)(i),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?Object(b.g)(t):[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||Object(c.c)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),a=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),a!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var y=d;const O=e=>{let t=class extends e{constructor(...e){super(...e);const t=Object(c.c)(Object(a.a)(this)),r=t.metadatas,i=t.store,s=new y;t.store=s,i.keys().forEach(e=>{s.set(e,i.get(e),0)}),Object.keys(r).forEach(e=>{t.internalGet(e)&&s.set(e,t.internalGet(e),0)})}read(e,t){Object(p.a)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=Object(n.d)(t);if("string"==typeof e)return r.get(e,i);const a={};return e.forEach(e=>{a[e]=r.get(e,i)}),a}originOf(e){return Object(n.b)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=Object(n.d)(t),s=Object(a.a)(this);let o;o="string"==typeof e?"*"===e?r.keys(i):[e]:e,o.forEach(e=>{s.propertyInvalidated(e),r.revert(e,i),s.propertyCommitted(e)})}};return t=Object(i.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return Object(a.a)(e).store}let j=class extends(O(o.a)){};j=Object(i.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],j);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return m(this).delete(e,Object(n.d)(t))}write(e={},t){return Object(l.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(a.a)(this).setAtOrigin(e,t,Object(n.d)(r))}removeOrigin(e){const t=m(this),r=Object(n.d)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=m(this),i=Object(n.d)(t),a=this.get(e);for(let t=i+1;t<n.a;++t)r.delete(e,t);r.set(e,a,i)}toJSON(e){return this.write({},e)}};return t=Object(i.a)([Object(s.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function m(e){return Object(a.a)(e).store}const g=e=>{let t=class extends(f(O(e))){constructor(...e){super(...e)}};return t=Object(i.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],t),t};let v=class extends(g(o.a)){};v=Object(i.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],v)},425:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var i=r(0),a=(r(4),r(9),r(5)),s=(r(6),r(1)),n=r(33),o=r(2),l=r(22),c=r(14),p=r(3),u=(r(10),r(7)),b=(r(11),r(100)),d=r(305);const y=a.a.getLogger("esri.layers.mixins.PortalLayer"),O=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new d.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(82).then(r.bind(null,565));return Object(u.t)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw y.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||b.a.getDefault());return r&&i&&!Object(p.q)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return Object(i.a)([Object(s.b)({type:d.default})],t.prototype,"portalItem",null),Object(i.a)([Object(n.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(i.a)([Object(s.b)()],t.prototype,"resourceReferences",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.PortalLayer")],t),t}},429:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),s=r(2),n=r(22),o=r(14),l=(r(3),r(10),r(11),r(306)),c=r(299);const p={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var u=r(412);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.title="Layer"}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&Object(c.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(l.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=p[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new o.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof o.a&&"web-document-write:property-required"===e.name).length;return!this.url&&i?null:r}beforeSave(){}};return Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(i.a)([Object(n.a)("listMode")],t.prototype,"writeListMode",null),Object(i.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(i.a)([Object(n.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(i.a)([Object(a.b)(u.e)],t.prototype,"opacity",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}}})],t.prototype,"title",void 0),Object(i.a)([Object(n.a)("title")],t.prototype,"writeTitle",null),Object(i.a)([Object(a.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.OperationalLayer")],t),t}},435:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),s=r(2);r(3),r(10),r(11);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return Object(i.a)([Object(a.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),Object(i.a)([Object(a.b)({type:String})],t.prototype,"effect",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.BlendLayer")],t),t}},437:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),s=r(2);r(3),r(10),r(11);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(i.a)([Object(a.b)({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),t=Object(i.a)([Object(s.a)("esri.layers.mixins.ScaleRangeLayer")],t),t}},447:function(e,t,r){"use strict";var i,a=r(0),s=(r(4),r(9),r(8)),n=(r(5),r(6),r(1)),o=r(32),l=r(33),c=r(2),p=r(22),u=(r(3),r(10),r(11),r(15)),b=r(144);let d=i=class extends u.a{async collectRequiredFields(e,t){return Object(b.a)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=i=Object(a.a)([Object(c.a)("esri.layers.support.FeatureExpressionInfo")],d);var y=d,O=r(403);const h=function(){const e=Object.keys(O.a);return e.sort(),e}();var j;const f=Object(o.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),m=new o.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let g=j=class extends u.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(s.h)(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new j({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(a.a)([Object(n.b)({type:y,json:{write:!0}})],g.prototype,"featureExpressionInfo",void 0),Object(a.a)([Object(l.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],g.prototype,"readFeatureExpressionInfo",null),Object(a.a)([Object(p.a)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],g.prototype,"writeFeatureExpressionInfo",null),Object(a.a)([Object(n.b)({type:f.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:f.jsonValues,read:f.read,write:{writer:f.write,isRequired:!0}}})],g.prototype,"mode",null),Object(a.a)([Object(n.b)({type:Number,json:{write:!0}})],g.prototype,"offset",void 0),Object(a.a)([Object(n.b)({type:h,json:{type:String,read:m.read,write:m.write}})],g.prototype,"unit",null),g=j=Object(a.a)([Object(c.a)("esri.layers.support.ElevationInfo")],g);var v=g;t.a=v},456:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),s=r(2);r(3),r(10),r(11);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.refreshInterval=0}refresh(){this.emit("refresh")}};return Object(i.a)([Object(a.b)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.RefreshableLayer")],t),t}},605:function(e,t,r){"use strict";r.r(t);var i=r(0),a=(r(4),r(9),r(12)),s=r(73),n=(r(5),r(6),r(1)),o=r(33),l=r(2),c=r(22),p=r(14),u=r(3),b=(r(10),r(7)),d=r(65),y=(r(11),r(28)),O=r(29),h=r(36),j=(r(54),r(215)),f=r(419),m=r(435),g=r(429),v=r(425),w=r(456),S=r(437),I=r(169),L=r(304),x=r(760);let T=class extends(Object(m.a)(Object(w.a)(Object(S.a)(Object(g.a)(Object(v.a)(Object(f.a)(j.a))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new h.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,y.a.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=y.a.WebMercator,this.subDomains=null,this.tileInfo=new L.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new O.a({x:-20037508.342787,y:20037508.342787,spatialReference:y.a.WebMercator}),spatialReference:y.a.WebMercator,lods:[new I.a({level:0,scale:591657527.591555,resolution:156543.033928}),new I.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new I.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new I.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new I.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new I.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new I.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new I.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new I.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new I.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new I.a({level:10,scale:577790.554289,resolution:152.874056570411}),new I.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new I.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new I.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new I.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new I.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new I.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new I.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new I.a({level:18,scale:2256.994353,resolution:.597164283559817}),new I.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?Object(a.d)({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new u.a(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.a("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Object(b.r)(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&y.a.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new u.a(t),a=i.scheme?i.scheme+"://":"//",s=a+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(s);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const t of r)e.push(a+i.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(u.u)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(u.A)(e)),t.templateUrl=e}fetchTile(e,t,r,i={}){const{signal:a,timestamp:s}=i,n=this.getTileUrl(e,t,r),o={responseType:"image",signal:a};return null!=s&&(o.query={_ts:i.timestamp}),Object(d.default)(n,o).then(e=>e.data)}getTileUrl(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(s.c)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}};Object(i.a)([Object(n.b)({type:String,value:"",json:{write:!0}})],T.prototype,"copyright",void 0),Object(i.a)([Object(n.b)({type:h.a,json:{write:!0}})],T.prototype,"fullExtent",void 0),Object(i.a)([Object(n.b)({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"legendEnabled",void 0),Object(i.a)([Object(n.b)({type:["show","hide"]})],T.prototype,"listMode",void 0),Object(i.a)([Object(n.b)({dependsOn:["tileInfo"]})],T.prototype,"levelValues",null),Object(i.a)([Object(n.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],T.prototype,"isReference",void 0),Object(i.a)([Object(n.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],T.prototype,"operationalLayerType",void 0),Object(i.a)([Object(n.b)({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"popupEnabled",void 0),Object(i.a)([Object(n.b)({type:y.a})],T.prototype,"spatialReference",void 0),Object(i.a)([Object(o.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],T.prototype,"readSpatialReference",null),Object(i.a)([Object(n.b)({type:[String],json:{write:!0}})],T.prototype,"subDomains",void 0),Object(i.a)([Object(n.b)({type:L.a,json:{write:!0}})],T.prototype,"tileInfo",void 0),Object(i.a)([Object(n.b)({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],T.prototype,"tileServers",null),Object(i.a)([Object(n.b)({json:{read:!1}})],T.prototype,"type",void 0),Object(i.a)([Object(n.b)({dependsOn:["urlTemplate"]})],T.prototype,"urlPath",null),Object(i.a)([Object(n.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],T.prototype,"urlTemplate",void 0),Object(i.a)([Object(o.a)("urlTemplate",["urlTemplate","templateUrl"])],T.prototype,"readUrlTemplate",null),Object(i.a)([Object(c.a)("urlTemplate",{templateUrl:{type:String}})],T.prototype,"writeUrlTemplate",null),Object(i.a)([Object(n.b)({type:x.a,json:{write:!0}})],T.prototype,"wmtsInfo",void 0),T=Object(i.a)([Object(l.a)("esri.layers.WebTileLayer")],T);var M=T;t.default=M},760:function(e,t,r){"use strict";var i,a=r(0),s=(r(4),r(9),r(12)),n=(r(5),r(6),r(1)),o=r(2),l=(r(3),r(10),r(11),r(15));let c=i=class extends l.a{constructor(e){super(e)}clone(){return new i({customLayerParameters:Object(s.a)(this.customLayerParameters),customParameters:Object(s.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(a.a)([Object(n.b)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(a.a)([Object(n.b)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=i=Object(a.a)([Object(o.a)("esri.layer.support.WMTSLayerInfo")],c);var p=c;t.a=p}}]);