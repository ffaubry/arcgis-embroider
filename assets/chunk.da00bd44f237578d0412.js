(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{412:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return O})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return d}));var i=r(44),a=r(75),n=r(299),s=r(166),o=r(212),l=r(447);const c={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(n.a)(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},u={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},p={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.f}}},y={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},b={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function f(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const g={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},O={...g,json:{...g.json,origins:{"web-document":{...g.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(s.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(s.b)(t.drawingInfo.transparency)}}},h={type:o.a,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(!(null==(e=this.layer)?void 0:e.timeInfo))return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,a=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!a||a.isEmpty)return a;const n=this.layer.timeOffset,s=n?a.offset(-n.value,n.unit):a,o=this._get("timeExtent");return s.equals(o)?o:s}}},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return j}));var i=r(0),a=r(44),n=r(2),s=r(145),o=r(18),l=r(299),c=r(8),u=r(306),p=r(12),d=r(82);class y{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(s.a),this._values=new Map}clone(e){const t=new y,r=this._originStores[0];r&&r.forEach((e,r)=>{t.set(r,Object(p.a)(e),0)});for(let r=2;r<s.a;r++){const i=this._originStores[r];i&&i.forEach((i,a)=>{e&&e.has(a)||t.set(a,Object(p.a)(i),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?Object(d.g)(t):[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||Object(c.c)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),a=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),a!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var b=y;const f=e=>{let t=class extends e{constructor(...e){super(...e);const t=Object(c.c)(Object(a.a)(this)),r=t.metadatas,i=t.store,n=new b;t.store=n,i.keys().forEach(e=>{n.set(e,i.get(e),0)}),Object.keys(r).forEach(e=>{t.internalGet(e)&&n.set(e,t.internalGet(e),0)})}read(e,t){Object(u.a)(this,e,t)}getAtOrigin(e,t){const r=g(this),i=Object(s.d)(t);if("string"==typeof e)return r.get(e,i);const a={};return e.forEach(e=>{a[e]=r.get(e,i)}),a}originOf(e){return Object(s.b)(this.originIdOf(e))}originIdOf(e){return g(this).originOf(e)}revert(e,t){const r=g(this),i=Object(s.d)(t),n=Object(a.a)(this);let o;o="string"==typeof e?"*"===e?r.keys(i):[e]:e,o.forEach(e=>{n.propertyInvalidated(e),r.revert(e,i),n.propertyCommitted(e)})}};return t=Object(i.a)([Object(n.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function g(e){return Object(a.a)(e).store}let O=class extends(f(o.a)){};O=Object(i.a)([Object(n.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],O);const h=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return m(this).delete(e,Object(s.d)(t))}write(e={},t){return Object(l.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(a.a)(this).setAtOrigin(e,t,Object(s.d)(r))}removeOrigin(e){const t=m(this),r=Object(s.d)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=m(this),i=Object(s.d)(t),a=this.get(e);for(let t=i+1;t<s.a;++t)r.delete(e,t);r.set(e,a,i)}toJSON(e){return this.write({},e)}};return t=Object(i.a)([Object(n.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function m(e){return Object(a.a)(e).store}const v=e=>{let t=class extends(h(f(e))){constructor(...e){super(...e)}};return t=Object(i.a)([Object(n.a)("esri.core.MultiOriginJSONSupport")],t),t};let j=class extends(v(o.a)){};j=Object(i.a)([Object(n.a)("esri.core.MultiOriginJSONSupport")],j)},425:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r(0),a=(r(4),r(9),r(5)),n=(r(6),r(1)),s=r(33),o=r(2),l=r(22),c=r(14),u=r(3),p=(r(10),r(7)),d=(r(11),r(100)),y=r(305);const b=a.a.getLogger("esri.layers.mixins.PortalLayer"),f=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new y.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(82).then(r.bind(null,565));return Object(p.t)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw b.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||d.a.getDefault());return r&&i&&!Object(u.q)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return Object(i.a)([Object(n.b)({type:y.default})],t.prototype,"portalItem",null),Object(i.a)([Object(s.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(i.a)([Object(n.b)()],t.prototype,"resourceReferences",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.PortalLayer")],t),t}},429:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),n=r(2),s=r(22),o=r(14),l=(r(3),r(10),r(11),r(306)),c=r(299);const u={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var p=r(412);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.title="Layer"}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&Object(c.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(l.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=u[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new o.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof o.a&&"web-document-write:property-required"===e.name).length;return!this.url&&i?null:r}beforeSave(){}};return Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(i.a)([Object(s.a)("listMode")],t.prototype,"writeListMode",null),Object(i.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(i.a)([Object(a.b)(p.e)],t.prototype,"opacity",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}}})],t.prototype,"title",void 0),Object(i.a)([Object(s.a)("title")],t.prototype,"writeTitle",null),Object(i.a)([Object(a.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.OperationalLayer")],t),t}},437:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(0),a=(r(4),r(9),r(5),r(6),r(1)),n=r(2);r(3),r(10),r(11);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(i.a)([Object(a.b)({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),t=Object(i.a)([Object(n.a)("esri.layers.mixins.ScaleRangeLayer")],t),t}},447:function(e,t,r){"use strict";var i,a=r(0),n=(r(4),r(9),r(8)),s=(r(5),r(6),r(1)),o=r(32),l=r(33),c=r(2),u=r(22),p=(r(3),r(10),r(11),r(15)),d=r(144);let y=i=class extends p.a{async collectRequiredFields(e,t){return Object(d.a)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"expression",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"title",void 0),y=i=Object(a.a)([Object(c.a)("esri.layers.support.FeatureExpressionInfo")],y);var b=y,f=r(403);const g=function(){const e=Object.keys(f.a);return e.sort(),e}();var O;const h=Object(o.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),m=new o.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let v=O=class extends p.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(n.h)(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new O({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(a.a)([Object(s.b)({type:b,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),Object(a.a)([Object(l.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),Object(a.a)([Object(u.a)("featureExpressionInfo",{featureExpressionInfo:{type:b},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),Object(a.a)([Object(s.b)({type:h.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:h.jsonValues,read:h.read,write:{writer:h.write,isRequired:!0}}})],v.prototype,"mode",null),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),Object(a.a)([Object(s.b)({type:g,json:{type:String,read:m.read,write:m.write}})],v.prototype,"unit",null),v=O=Object(a.a)([Object(c.a)("esri.layers.support.ElevationInfo")],v);var j=v;t.a=j},526:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(144),a=(r(84),r(135)),n=(r(227),r(234)),s=r(136),o=r(137),l=(r(138),r(116),r(300));const c=["oid","global-id"],u=["oid","global-id","guid"];function p({displayField:e,editFieldsInfo:t,fields:r,objectIdField:n,title:s},c){if(!r)return null;const u=O({editFieldsInfo:t,fields:r,objectIdField:n},c);if(!u.length)return null;const p=function(e){const t=Object(i.l)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r}({titleBase:s,fields:r,displayField:e}),d=[new o.a,new a.a];return new l.a({title:p,content:d,fieldInfos:u})}const d=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],y=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:i})=>i?i.has(e.name):!(f(e.name,t)||r&&e.name===r||c.indexOf(e.type)>-1||d.some(t=>t.test(e.name)));function b(e,t){return"oid"===e.type?-1:"oid"===t.type?1:m(e)?-1:m(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function f(e,t){if(!e||!t)return!1;const{creationDateField:r,creatorField:i,editDateField:a,editorField:n}=t;return-1!==[r&&r.toLowerCase(),i&&i.toLowerCase(),a&&a.toLowerCase(),n&&n.toLowerCase()].indexOf(e.toLowerCase())}function g(e,t){return e.editable&&-1===u.indexOf(e.type)&&!f(e.name,t)}function O({editFieldsInfo:e,fields:t,objectIdField:r},i){return function(e,t){const r=e;return t&&(e=e.filter(e=>-1===t.indexOf(e.type))),e===r&&(e=e.slice()),e.sort(b),e}(t,(null==i?void 0:i.ignoreFieldTypes)||v).map(t=>new s.a({fieldName:t.name,isEditable:g(t,e),label:t.alias,format:h(t),visible:y(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:null==i?void 0:i.visibleFieldNames})}))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new n.a({digitSeparator:!0,places:0});case"double":return new n.a({digitSeparator:!0,places:2});case"date":return new n.a({dateFormat:"long-month-day-year"});default:return null}}function m(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}const v=["geometry","blob","raster","guid","xml"]}}]);