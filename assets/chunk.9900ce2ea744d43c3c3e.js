(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{403:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(5),i=(r(82),r(70)),s=r(50);r(414),r(55),r(66),r(85),r(111);o.a.getLogger("esri.renderers.support.utils");const a={inches:Object(s.a)(1,"meters","inches"),feet:Object(s.a)(1,"meters","feet"),"us-feet":Object(s.a)(1,"meters","us-feet"),yards:Object(s.a)(1,"meters","yards"),miles:Object(s.a)(1,"meters","miles"),"nautical-miles":Object(s.a)(1,"meters","nautical-miles"),millimeters:Object(s.a)(1,"meters","millimeters"),centimeters:Object(s.a)(1,"meters","centimeters"),decimeters:Object(s.a)(1,"meters","decimeters"),meters:Object(s.a)(1,"meters","meters"),kilometers:Object(s.a)(1,"meters","kilometers"),"decimal-degrees":1/Object(s.h)(1,"meters")};Object(i.a)("short-date")},414:function(e,t,r){"use strict";var o,i=r(0),s=(r(4),r(9),r(5),r(6)),a=r(1),n=r(2),l=r(22),c=(r(3),r(10),r(11),r(15)),p=r(35);let d=o=class extends c.a{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,r){t[r]=null==e?0:e}clone(){return new o({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};Object(i.a)([Object(a.b)({type:p.a,json:{type:[s.a],write:!0}})],d.prototype,"color",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],d.prototype,"label",void 0),Object(i.a)([Object(a.b)({type:Number,json:{write:{allowNull:!0}}})],d.prototype,"value",void 0),Object(i.a)([Object(l.a)("value")],d.prototype,"writeValue",null),d=o=Object(i.a)([Object(n.a)("esri.renderers.visualVariables.support.ColorStop")],d);var u=d;t.a=u},417:function(e,t,r){"use strict";function o(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function i(e){return e.toLowerCase().trim()}t.a=class{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const r of e){const e=r&&r.name;if(e){const s=i(e);this._fieldsMap.set(e,r),this._fieldsMap.set(s,r),t.push(s),o(r)&&(this.dateFields.push(r),this._dateFieldsSet.add(r))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(i(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}},462:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(0),i=(r(4),r(9),r(5)),s=(r(6),r(1)),a=r(2),n=(r(3),r(10),r(11),r(302));const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=Object(n.e)(this.url);if(e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",Object(n.f)(e,i.a.getLogger(this.declaredClass)))}};return Object(o.a)([Object(s.b)({dependsOn:["url"]})],t.prototype,"title",null),Object(o.a)([Object(s.b)({type:String})],t.prototype,"url",null),t=Object(o.a)([Object(a.a)("esri.layers.mixins.ArcGISService")],t),t}},481:function(e,t,r){"use strict";var o,i=r(0),s=(r(4),r(9),r(5),r(6),r(1)),a=r(2),n=(r(3),r(10),r(11),r(15));let l=o=class extends n.a{constructor(){super(...arguments),this.title=null}clone(){return new o({title:this.title})}};Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=o=Object(i.a)([Object(a.a)("esri.renderers.support.LegendOptions")],l);var c=l;t.a=c},511:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(5),i=r(39),s=r(144),a=r(218);const n=o.a.getLogger("esri.layers.support.fieldProperties");function l(){return{fields:{type:[a.a],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(Object(i.e)(e,"*"))return["*"];if(!this.fields)return e;for(const t of e)Object(s.p)(this.fields,t)||n.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return Object(s.i)(this.fields,e)}}}}},578:function(e,t,r){"use strict";var o,i=r(0),s=(r(4),r(9),r(12)),a=(r(5),r(6),r(1)),n=r(32),l=r(2),c=(r(3),r(10),r(11),r(15));let p=o=class extends c.a{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(i.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=o=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorModulation")],p);var d=p;const u=new n.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends c.a{};Object(i.a)([Object(a.b)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],b.prototype,"type",void 0),b=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);var y,h=b,j=r(19);let O=y=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(i.a)([Object(j.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],O.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"size",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{write:!0}})],O.prototype,"useRealWorldSymbolSizes",void 0),O=y=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],O);var f,m=O;let v=f=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new f({scaleFactor:this.scaleFactor})}};Object(i.a)([Object(j.a)({pointCloudSplatAlgorithm:"splat"})],v.prototype,"type",void 0),Object(i.a)([Object(a.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],v.prototype,"scaleFactor",void 0),v=f=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],v);const g={key:"type",base:h,typeMap:{"fixed-size":m,splat:v}},w=Object(n.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let S=class extends c.a{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(s.a)(this.pointSizeAlgorithm),colorModulation:Object(s.a)(this.colorModulation),pointsPerInch:Object(s.a)(this.pointsPerInch)}}};Object(i.a)([Object(a.b)({type:w.apiValues,readOnly:!0,nonNullable:!0,json:{type:w.jsonValues,read:!1,write:w.write}})],S.prototype,"type",void 0),Object(i.a)([Object(a.b)({types:g,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),Object(i.a)([Object(a.b)({type:d,json:{write:!0}})],S.prototype,"colorModulation",void 0),Object(i.a)([Object(a.b)({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=Object(i.a)([Object(l.a)("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new n.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var I=S;t.a=I},584:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},597:function(e,t,r){"use strict";r.d(t,"a",(function(){return F}));var o=r(0),i=r(4),s=(r(9),r(5)),a=(r(6),r(1)),n=r(33),l=r(2),c=r(22),p=r(14),d=r(3),u=r(10),b=r(7),y=r(65),h=r(11),j=r(28),O=r(36),f=r(100),m=r(305),v=r(584);function g(e){e&&e.writtenProperties&&e.writtenProperties.forEach(e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(v.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)})}var w=r(302),S=r(150),I=r(56),x=r(184);async function T(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?Object(I.a)(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const i=Object(I.a)(t.resources.toKeep.map(e=>e.resource.path)),s=new Set,a=[];i.forEach(t=>{o.delete(t),e.paths.push(t)});for(const n of t.resources.toUpdate)if(o.delete(n.resource.path),i.has(n.resource.path)||s.has(n.resource.path)){const{resource:t,content:o,finish:i,error:s}=n,l=Object(h.getSiblingOfSameTypeI)(t,Object(u.a)());e.paths.push(l.path),a.push(R({resource:l,content:o,finish:i,error:s},r))}else e.paths.push(n.resource.path),a.push(C(n,r)),s.add(n.resource.path);for(const o of t.resources.toAdd)a.push(R(o,r)),e.paths.push(o.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);a.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===a.length)return;const n=await Object(b.m)(a);Object(b.t)(r);const l=n.filter(e=>"error"in e).map(e=>e.error);if(l.length>0)throw new p.a("save:resources","Failed to save one or more resources",{errors:l})}async function R(e,t){const r=await Object(x.c)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function C(e,t){const r=await Object(x.c)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var _=r(412);const N=s.a.getLogger("esri.layers.mixins.SceneService"),F=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this._debouncedSaveOperations=Object(b.n)(async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return j.a.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new j.a(o):null}}readFullExtent(e,t){const r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some(e=>e<P)?null:new O.a({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},s=o.split(".");return s.length>=2&&(i.major=parseInt(s[0],10),i.minor=parseInt(s[1],10)),i}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(w.h)(this.url,t.name);let o=t.name||Object(w.e)(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(w.a)(o)}set url(e){const t=Object(w.g)(this,e,N);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(w.i)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(d.H)(e);return null!=this.layerId&&Object(w.b)(t.path)&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _verifyRootNodeAndUpdateExtent(e,t){if(e)try{return this._updateExtentFromRootPage(e,await this._fetchRootPage(e,t))}catch(e){}return this._updateExtentFromRootNode(await this._fetchRootNode(t))}async _fetchRootPage(e,t){if(!e)return Object(b.h)();const r=Math.floor(e.rootIndex/e.nodesPerPage),o=`${this.parsedUrl.path}/nodepages/${r}`;return(await Object(y.default)(o,{responseType:"json",signal:t})).data}_updateExtentFromRootPage(e,t){if(null==t||null==t.nodes)throw new p.a("sceneservice:invalid-node-page","Inavlid node page.");const r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new p.a("sceneservice:invalid-node-page","Inavlid node page.");if(r.obb.center[0]<P)return;const o=r.obb.halfSize,i=r.obb.center[2],s=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-s,this.fullExtent.zmax=i+s}_updateExtentFromRootNode(e){if(null==e||null==this.fullExtent||this.fullExtent.hasZ)return;if(!Array.isArray(e.mbs)||4!==e.mbs.length||e.mbs[0]<P)return;const t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}async _fetchRootNode(e){if(!this.rootNode)return;const t=Object(d.w)(this.parsedUrl.path,this.rootNode);try{return(await Object(y.default)(t,{query:{f:"json"},responseType:"json",signal:e})).data}catch(e){throw new p.a("sceneservice:root-node-missing","Root node missing.",{error:e,url:t})}}async _fetchService(e){if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(y.default)(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(y.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),1===r&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...A,...t};let o=m.default.from(e);o||(N.error("_saveAs(): requires a portal item parameter"),await Object(b.h)(new p.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const i=o.portal||f.a.getDefault();await this._ensureLoadBeforeSave(),o.type=q,o.portal=i;const s={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},a={layers:[this.write(null,s)]};return await Object(b.a)(s.resources.pendingOperations),await this._validateAgainstJSONSchema(a,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await i._signIn(),await i.user.addItem({item:o,folder:r&&r.folder,data:a}),await T(this.resourceReferences,s,null),this.portalItem=o,g(s),s.portalItem=o,o}async _save(e){const t={...A,...e};this.portalItem||(N.error("_save(): requires the .portalItem property to be set"),await Object(b.h)(new p.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==q&&(N.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+q),await Object(b.h)(new p.a("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${q}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(d.H)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||f.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Object(b.a)(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await T(this.resourceReferences,r,null),g(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages.filter(e=>"error"===e.type).map(e=>new p.a(e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(i=i.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||V){const t=(await r.e(159).then(r.bind(null,989))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(N.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new p.a("sceneservice:schema-validation",e)).concat(i);throw new p.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new p.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return Object(o.a)([Object(a.b)({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],t.prototype,"id",void 0),Object(o.a)([Object(a.b)({type:j.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(n.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o.a)([Object(a.b)({type:O.a})],t.prototype,"fullExtent",void 0),Object(o.a)([Object(n.a)("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o.a)([Object(a.b)({readOnly:!0,type:S.a})],t.prototype,"heightModelInfo",void 0),Object(o.a)([Object(a.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o.a)([Object(a.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o.a)([Object(a.b)({readOnly:!0})],t.prototype,"version",void 0),Object(o.a)([Object(n.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(o.a)([Object(a.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(a.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o.a)([Object(a.b)({type:String})],t.prototype,"title",void 0),Object(o.a)([Object(n.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o.a)([Object(n.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(o.a)([Object(a.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o.a)([Object(a.b)(_.j)],t.prototype,"url",null),Object(o.a)([Object(c.a)("url")],t.prototype,"writeUrl",null),Object(o.a)([Object(a.b)({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),Object(o.a)([Object(a.b)({readOnly:!0})],t.prototype,"store",void 0),Object(o.a)([Object(a.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o.a)([Object(l.a)("esri.layers.mixins.SceneService")],t),t},P=-1e38,V=Object(i.a)("esri-debug-messages"),q="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},684:function(e,t,r){"use strict";r.r(t);var o=r(0),i=(r(4),r(9),r(12)),s=r(52),a=r(8),n=r(5),l=(r(6),r(1)),c=r(33),p=r(2),d=r(22),u=r(14),b=r(3),y=(r(10),r(39)),h=r(7),j=r(65),O=(r(11),r(126),r(238)),f=r(300),m=r(215),v=r(419),g=r(218),w=r(417),S=r(462),I=r(412),x=r(429),T=r(425),R=r(437),C=r(511),_=r(526),N=r(597),F=r(15);let P=class extends F.a{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};Object(o.a)([Object(l.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"field",void 0),Object(o.a)([Object(l.b)({readOnly:!0,nonNullable:!0,json:{read:!1}})],P.prototype,"type",void 0),P=Object(o.a)([Object(p.a)("esri.layers.pointCloudFilters.PointCloudFilter")],P);var V,q=P,A=r(19);let K=V=class extends q{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new V({field:this.field,requiredClearBits:Object(i.a)(this.requiredClearBits),requiredSetBits:Object(i.a)(this.requiredSetBits)})}};Object(o.a)([Object(l.b)({type:[Number],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],K.prototype,"requiredClearBits",void 0),Object(o.a)([Object(l.b)({type:[Number],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],K.prototype,"requiredSetBits",void 0),Object(o.a)([Object(A.a)({pointCloudBitfieldFilter:"bitfield"})],K.prototype,"type",void 0),K=V=Object(o.a)([Object(p.a)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],K);var B,E=K;let M=B=class extends q{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new B({field:this.field,includedReturns:Object(i.a)(this.includedReturns)})}};Object(o.a)([Object(l.b)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"includedReturns",void 0),Object(o.a)([Object(A.a)({pointCloudReturnFilter:"return"})],M.prototype,"type",void 0),M=B=Object(o.a)([Object(p.a)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],M);var z,L=M;let U=z=class extends q{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new z({field:this.field,mode:this.mode,values:Object(i.a)(this.values)})}};Object(o.a)([Object(l.b)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"mode",void 0),Object(o.a)([Object(A.a)({pointCloudValueFilter:"value"})],U.prototype,"type",void 0),Object(o.a)([Object(l.b)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"values",void 0),U=z=Object(o.a)([Object(p.a)("esri.layers.pointCloudFilters.PointCloudValueFilter")],U);const k={key:"type",base:q,typeMap:{value:U,bitfield:E,return:L}};var D,$=r(578),G=r(739);let J=D=class extends $.a{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new D({...this.cloneProperties(),field:Object(i.a)(this.field)})}};Object(o.a)([Object(A.a)({pointCloudRGBRenderer:"point-cloud-rgb"})],J.prototype,"type",void 0),Object(o.a)([Object(l.b)({type:String,json:{write:!0}})],J.prototype,"field",void 0),J=D=Object(o.a)([Object(p.a)("esri.renderers.PointCloudRGBRenderer")],J);var W=J,H=r(740),Z=r(741);const Q={key:"type",base:$.a,typeMap:{"point-cloud-class-breaks":G.a,"point-cloud-rgb":W,"point-cloud-stretch":H.a,"point-cloud-unique-value":Z.a},errorContext:"renderer"},X=n.a.getLogger("esri.layers.PointCloudLayer"),Y=Object(C.a)();let ee=class extends(Object(N.a)(Object(S.a)(Object(x.a)(Object(T.a)(Object(R.a)(Object(v.a)(m.a))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new w.a(this.fields)}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map(e=>{const t=new g.a;return"FieldTypeInteger"===e.type&&((e=Object(i.a)(e)).type="esriFieldTypeInteger"),t.read(e,r),t}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(e=>new g.a({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,o){Object(s.c)("layerDefinition.drawingInfo.renderer",e.write(null,o),t)}load(e){const t=Object(a.h)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t));return this.addResolvingPromise(r),Object(h.r)(this)}createPopupTemplate(e){const t=Object(_.a)(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=Object(y.d)(e.fieldInfos,e=>e.fieldName===t.name);if(!r)return;const o=new O.a({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=Object(y.d)(e.fieldInfos,e=>e.fieldName===t.name);if(!r)return;const o=new O.a({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new u.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new u.a("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===r.name){const r=Object(b.w)(this.parsedUrl.path,"./statistics/"+e.key);return Object(j.default)(r,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then(e=>e.data)}throw new u.a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new u.a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new u.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&X.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&X.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};Object(o.a)([Object(l.b)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),Object(o.a)([Object(l.b)(I.g)],ee.prototype,"popupEnabled",void 0),Object(o.a)([Object(l.b)({type:f.a,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),Object(o.a)([Object(l.b)({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],ee.prototype,"defaultPopupTemplate",null),Object(o.a)([Object(l.b)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),Object(o.a)([Object(l.b)({type:["show","hide"]})],ee.prototype,"listMode",void 0),Object(o.a)([Object(l.b)({types:[k],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),Object(o.a)([Object(l.b)({type:[g.a]})],ee.prototype,"fields",void 0),Object(o.a)([Object(l.b)({readOnly:!0,dependsOn:["fields"]})],ee.prototype,"fieldsIndex",null),Object(o.a)([Object(c.a)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),Object(o.a)([Object(l.b)(Y.outFields)],ee.prototype,"outFields",void 0),Object(o.a)([Object(l.b)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),Object(o.a)([Object(l.b)(I.b)],ee.prototype,"elevationInfo",null),Object(o.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),Object(o.a)([Object(l.b)(I.d)],ee.prototype,"legendEnabled",void 0),Object(o.a)([Object(l.b)({types:Q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:Q},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),Object(o.a)([Object(d.a)("renderer")],ee.prototype,"writeRenderer",null),Object(o.a)([Object(l.b)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=Object(o.a)([Object(p.a)("esri.layers.PointCloudLayer")],ee);var te=ee;t.default=te},739:function(e,t,r){"use strict";var o,i=r(0),s=(r(4),r(9),r(12)),a=(r(5),r(6)),n=r(1),l=r(19),c=r(2),p=(r(3),r(10),r(11),r(578)),d=r(481),u=r(15),b=r(35);let y=o=class extends u.a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(s.a)(this.color)})}};Object(i.a)([Object(n.b)({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(i.a)([Object(n.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i.a)([Object(n.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),Object(i.a)([Object(n.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),Object(i.a)([Object(n.b)({type:b.a,json:{type:[a.a],write:!0}})],y.prototype,"color",void 0),y=o=Object(i.a)([Object(c.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);var h,j=y;let O=h=class extends p.a{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(s.a)(this.colorClassBreakInfos),legendOptions:Object(s.a)(this.legendOptions)})}};Object(i.a)([Object(l.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],O.prototype,"type",void 0),Object(i.a)([Object(n.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(i.a)([Object(n.b)({type:d.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(i.a)([Object(n.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(i.a)([Object(n.b)({type:[j],json:{write:!0}})],O.prototype,"colorClassBreakInfos",void 0),O=h=Object(i.a)([Object(c.a)("esri.renderers.PointCloudClassBreaksRenderer")],O);var f=O;t.a=f},740:function(e,t,r){"use strict";var o,i=r(0),s=(r(4),r(9),r(12)),a=(r(5),r(6)),n=r(1),l=r(19),c=r(2),p=(r(3),r(10),r(11),r(578)),d=r(481),u=r(15),b=r(35);let y=o=class extends u.a{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null}clone(){return new o({label:this.label,value:this.value,color:Object(s.a)(this.color)})}};Object(i.a)([Object(n.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i.a)([Object(n.b)({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"value",void 0),Object(i.a)([Object(n.b)({type:b.a,json:{type:[a.a],write:!0}})],y.prototype,"color",void 0),y=o=Object(i.a)([Object(c.a)("esri.renderers.support.pointCloud.StopInfo")],y);var h,j=y;let O=h=class extends p.a{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new h({...this.cloneProperties(),field:Object(s.a)(this.field),fieldTransformType:Object(s.a)(this.fieldTransformType),stops:Object(s.a)(this.stops),legendOptions:Object(s.a)(this.legendOptions)})}};Object(i.a)([Object(l.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],O.prototype,"type",void 0),Object(i.a)([Object(n.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(i.a)([Object(n.b)({type:d.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(i.a)([Object(n.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(i.a)([Object(n.b)({type:[j],json:{write:!0}})],O.prototype,"stops",void 0),O=h=Object(i.a)([Object(c.a)("esri.renderers.PointCloudStretchRenderer")],O);var f=O;t.a=f},741:function(e,t,r){"use strict";var o,i=r(0),s=(r(4),r(9),r(12)),a=(r(5),r(6)),n=r(1),l=r(19),c=r(2),p=(r(3),r(10),r(11),r(578)),d=r(481),u=r(15),b=r(35);let y=o=class extends u.a{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:Object(s.a)(this.values),color:Object(s.a)(this.color)})}};Object(i.a)([Object(n.b)({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(i.a)([Object(n.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i.a)([Object(n.b)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),Object(i.a)([Object(n.b)({type:b.a,json:{type:[a.a],write:!0}})],y.prototype,"color",void 0),y=o=Object(i.a)([Object(c.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);var h,j=y;let O=h=class extends p.a{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(s.a)(this.field),fieldTransformType:Object(s.a)(this.fieldTransformType),colorUniqueValueInfos:Object(s.a)(this.colorUniqueValueInfos),legendOptions:Object(s.a)(this.legendOptions)})}};Object(i.a)([Object(l.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],O.prototype,"type",void 0),Object(i.a)([Object(n.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(i.a)([Object(n.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(i.a)([Object(n.b)({type:[j],json:{write:!0}})],O.prototype,"colorUniqueValueInfos",void 0),Object(i.a)([Object(n.b)({type:d.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),O=h=Object(i.a)([Object(c.a)("esri.renderers.PointCloudUniqueValueRenderer")],O);var f=O;t.a=f}}]);