(window.webpackJsonp=window.webpackJsonp||[]).push([[5,96],{389:function(e,t,i){"use strict";i.r(t),i.d(t,"fetchStyle",(function(){return j})),i.d(t,"fetchSymbolFromStyle",(function(){return g})),i.d(t,"resolveWebStyleSymbol",(function(){return O})),i.d(t,"styleNameFromItem",(function(){return w}));var s=i(14),a=i(3),n=i(39),l=i(7),r=i(65),o=i(75),u=(i(126),i(120)),c=i(100),p=i(239),b=i(230),d=i(214),y=i(651),h=i(4);const f=()=>{return e="jschmid",t="force-wosr",!!Object(h.a)(`enable-feature:${e}/${t}`);var e,t},m={};function j(e,t,i){return e.styleUrl?function(e,t){return S(e,t).then(t=>({data:t.data,baseUrl:Object(a.D)(e),styleUrl:e}))}(e.styleUrl,i):e.styleName?function(e,t,i){const a=t.portal||c.a.getDefault();let n;const l=`${a.url} - ${a.user&&a.user.username} - ${e}`;return m[l]||(m[l]=function(e,t,i){return t.load(i).then(()=>{const s=new u.a({disableExtraQuery:!0,query:`owner:${x} AND type:${V} AND typekeywords:"${e}"`});return t.queryItems(s,i)}).then(({results:t})=>{let a=null;const n=e.toLowerCase();if(t&&Array.isArray(t))for(const e of t)if(e.typeKeywords.some(e=>e.toLowerCase()===n)&&e.type===V&&e.owner===x){a=e;break}if(!a)throw new s.a("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return a.load(i)})}(e,a,i).then(e=>(n=e,e.fetchData())).then(t=>({data:t,baseUrl:n.itemUrl,styleName:e}))),m[l]}(e.styleName,t,i):Object(l.h)(new s.a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function O(e,t,i,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,i){const s=I.replace(/\{SymbolName\}/gi,e.name);return S(s,i).then(e=>{const i=v(e.data);return Object(d.f)(i,{portal:t.portal,url:Object(a.H)(Object(a.D)(s)),origin:"portal-item"})})}(e,t,n):j(e,t,n).then(s=>g(s,e.name,t,i,n)):Object(l.h)(new s.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function g(e,t,i,r,u){const c=e.data,h={portal:i.portal,url:Object(a.H)(e.baseUrl),origin:"portal-item"},m=Object(n.d)(c.items,e=>e.name===t);if(!m)return Object(l.h)(new s.a("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t}));let j=Object(o.a)(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!f())for(const t of e.formatInfos)if("gltf"===t.type)return t.href;return e.webRef}(m,r),h),O=m.thumbnail&&m.thumbnail.href;const g=m.thumbnail&&m.thumbnail.imageData;Object(y.b)()&&(j=Object(y.a)(j),O=Object(y.a)(O));const w={portal:i.portal,url:Object(a.H)(Object(a.D)(j)),origin:"portal-item"};return S(j,u).then(s=>{const a="cimRef"===r?v(s.data):s.data,n=Object(d.f)(a,w);if(n&&Object(d.h)(n)){if(O){const e=Object(o.a)(O,h);n.thumbnail=new b.a({url:e})}else g&&(n.thumbnail=new b.a({url:"data:image/png;base64,"+g}));e.styleUrl?n.styleOrigin=new p.a({portal:i.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(n.styleOrigin=new p.a({portal:i.portal,styleName:e.styleName,name:t}))}return n})}function v(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function w(e){for(const t of e.typeKeywords)if(/^Esri.*Style$/.test(t)&&"Esri Style"!==t)return t}function S(e,t){const i={responseType:"json",query:{f:"json"},...t};return Object(r.default)(Object(a.A)(e),i)}const x="esri_en",V="Style",I="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},468:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(5)),l=i(1),r=i(38),o=i(32),u=i(33),c=i(2),p=i(22),b=i(14),d=(i(3),i(10),i(11),i(23)),y=i(528),h=i(503),f=(i(6),i(504));let m=s=class extends f.a{constructor(){super(...arguments),this.customValues=null}clone(){return new s({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})}};Object(a.a)([Object(l.b)({type:[Number],json:{write:!0}})],m.prototype,"customValues",void 0),m=s=Object(a.a)([Object(c.a)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],m);var j,O=m,g=i(416),v=i(438);const w=n.a.getLogger("esri.renderers.visualVariables.SizeVariable"),S=new o.a({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),x=new o.a({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function V(e){if(null!=e)return"string"==typeof e||"number"==typeof e?Object(d.j)(e):"size"===e.type?Object(g.c)(e)?e:(delete(e={...e}).type,new z(e)):void 0}function I(e,t,i){if("object"!=typeof e)return e;const s=new z;return s.read(e,i),s}let z=j=class extends y.a{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:v.g.test(this.valueExpression)}}set expression(e){w.warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)}set index(e){Object(g.c)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),Object(g.c)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return Object(g.a)(this)}set maxDataValue(e){e&&this.stops&&(w.warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(w.warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return V(e)}readMaxSize(e,t,i){return I(e,0,i)}set minDataValue(e){e&&this.stops&&(w.warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(w.warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return V(e)}readMinSize(e,t,i){return I(e,0,i)}get arcadeRequired(){return!!this.valueExpression||this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value):e&&(w.warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return Object(g.b)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,t,i,s){if("$view.scale"===e){if(s&&s.messages){const e=this.index,t="string"==typeof e?e:`visualVariables[${e}]`;s.messages.push(new b.a("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:t+".valueExpression",context:s}))}}else t[i]=e}readValueUnit(e){return e?x.read(e):null}clone(){return new j({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(g.c)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(g.c)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})}flipSizes(){if("clamped-linear"===this.transformationType){const{minSize:e,maxSize:t}=this;return this.minSize=t,this.maxSize=e,this}if("stops"===this.transformationType){const e=this.stops,t=e.map(e=>e.size).reverse(),i=e.length;for(let s=0;s<i;s++)e[s].size=t[s];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};Object(a.a)([Object(l.b)({readOnly:!0,dependsOn:["valueExpression","stops"]})],z.prototype,"cache",null),Object(a.a)([Object(l.b)({type:S.apiValues,json:{type:S.jsonValues,origins:{"web-map":{read:!1}},read:S.read,write:S.write}})],z.prototype,"axis",void 0),Object(a.a)([Object(l.b)({type:String,value:null,json:{read:!1}})],z.prototype,"expression",null),Object(a.a)([Object(l.b)()],z.prototype,"index",null),Object(a.a)([Object(l.b)({type:String,readOnly:!0,dependsOn:["field","valueExpression"]})],z.prototype,"inputValueType",null),Object(a.a)([Object(l.b)({type:O,json:{write:!0}})],z.prototype,"legendOptions",void 0),Object(a.a)([Object(l.b)({type:Number,value:null,json:{write:!0}})],z.prototype,"maxDataValue",null),Object(a.a)([Object(l.b)({type:Number,value:null,json:{write:!0}})],z.prototype,"maxSize",null),Object(a.a)([Object(r.a)("maxSize")],z.prototype,"castMaxSize",null),Object(a.a)([Object(u.a)("maxSize")],z.prototype,"readMaxSize",null),Object(a.a)([Object(l.b)({type:Number,value:null,json:{write:!0}})],z.prototype,"minDataValue",null),Object(a.a)([Object(l.b)({type:Number,value:null,json:{write:!0}})],z.prototype,"minSize",null),Object(a.a)([Object(r.a)("minSize")],z.prototype,"castMinSize",null),Object(a.a)([Object(u.a)("minSize")],z.prototype,"readMinSize",null),Object(a.a)([Object(l.b)({type:String,json:{write:!0}})],z.prototype,"normalizationField",void 0),Object(a.a)([Object(l.b)({readOnly:!0,dependsOn:["valueExpression","minSize.arcadeRequired","maxSize.arcadeRequired"]})],z.prototype,"arcadeRequired",null),Object(a.a)([Object(l.b)({type:String})],z.prototype,"scaleBy",void 0),Object(a.a)([Object(l.b)({type:[h.a],value:null,json:{write:!0}})],z.prototype,"stops",null),Object(a.a)([Object(l.b)({type:["outline"],json:{write:!0}})],z.prototype,"target",void 0),Object(a.a)([Object(l.b)({type:String,readOnly:!0,dependsOn:["minDataValue","maxDataValue","minSize","maxSize","valueUnit","inputValueType","stops"]})],z.prototype,"transformationType",null),Object(a.a)([Object(l.b)({type:["size"],json:{type:["sizeInfo"]}})],z.prototype,"type",void 0),Object(a.a)([Object(l.b)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],z.prototype,"useSymbolValue",void 0),Object(a.a)([Object(l.b)({type:String,json:{write:!0}})],z.prototype,"valueExpression",void 0),Object(a.a)([Object(u.a)("valueExpression",["valueExpression","expression"])],z.prototype,"readValueExpression",null),Object(a.a)([Object(p.a)("web-scene","valueExpression")],z.prototype,"writeValueExpressionWebScene",null),Object(a.a)([Object(l.b)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],z.prototype,"valueRepresentation",void 0),Object(a.a)([Object(l.b)({type:x.apiValues,json:{write:x.write,origins:{"web-map":{read:!1},"web-scene":{write:!0}}}})],z.prototype,"valueUnit",void 0),Object(a.a)([Object(u.a)("valueUnit")],z.prototype,"readValueUnit",null),z=j=Object(a.a)([Object(c.a)("esri.renderers.visualVariables.SizeVariable")],z);var E=z;t.a=E},475:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(12)),l=i(8),r=i(5),o=i(6),u=i(1),c=i(38),p=i(32),b=i(19),d=i(33),y=i(2),h=i(22),f=(i(3),i(10),i(7)),m=(i(11),i(301)),j=i(144),O=i(214),g=i(481),v=i(424),w=i(533),S=i(719),x=i(591);const V=r.a.getLogger("esri.renderers.ClassBreaksRenderer"),I=new p.a({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),z=Object(o.m)(S.a);let E=s=class extends(Object(w.a)(v.a)){constructor(e){super(e),this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}get _cache(){return{compiledFunc:null}}readClassBreakInfos(e,t,i){if(!Array.isArray(e))return;let s=t.minValue;return e.map(e=>{const t=new S.a;return t.read(e,i),null==t.minValue&&(t.minValue=s),null==t.maxValue&&(t.maxValue=t.minValue),s=t.maxValue,t})}writeClassBreakInfos(e,t,i,s){const a=e.map(e=>e.write({},s));this._areClassBreaksConsecutive()&&a.forEach(e=>delete e.classMinValue),t[i]=a}castField(e){return null==e?e:"function"==typeof e?(V.error(".field: field must be a string value"),null):Object(o.l)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const t=!!this.normalizationField,i=null!=this.normalizationTotal;return t||i?(e=(t?"field":i&&"percent-of-total")||null,t&&i&&V.warn("warning: both normalizationField and normalizationTotal are set!")):"field"!==e&&"percent-of-total"!==e||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,i){let s=null;s="number"==typeof e?new S.a({minValue:e,maxValue:t,symbol:Object(O.e)(i)}):z(Object(n.a)(e)),this.classBreakInfos.push(s),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,t){const i=this.classBreakInfos.length;for(let s=0;s<i;s++){const i=[this.classBreakInfos[s].minValue,this.classBreakInfos[s].maxValue];if(i[0]===e&&i[1]===t){this.classBreakInfos.splice(s,1);break}}}getBreakIndex(e,t){return this.valueExpression&&(Object(l.g)(t)||Object(l.g)(t.arcade))&&V.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)}async getClassBreakInfo(e,t){let i=t;this.valueExpression&&(Object(l.g)(t)||Object(l.g)(t.arcade))&&(i={...i,arcade:await Object(m.e)()});const s=this.getBreakIndex(e,i);return-1!==s?this.classBreakInfos[s]:null}getSymbol(e,t){if(this.valueExpression&&(Object(l.g)(t)||Object(l.g)(t.arcade)))return void V.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const i=this.getBreakIndex(e,t);return i>-1?this.classBreakInfos[i].symbol:this.defaultSymbol}async getSymbolAsync(e,t){let i=t;this.valueExpression&&(Object(l.g)(t)||Object(l.g)(t.arcade))&&(i={...i,arcade:await Object(m.e)()});const s=this.getBreakIndex(e,i);return s>-1?this.classBreakInfos[s].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach(t=>{t.symbol&&e.push(t.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),i=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${t}.${this.classBreakInfos.reduce((e,t)=>e+t.getMeshHash(),"")}.${i}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new s({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:Object(n.a)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:Object(n.a)(this.visualVariables),legendOptions:Object(n.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,t){const i=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Object(f.a)(i)}async collectSymbolFields(e,t){const i=[...this.getSymbols().map(i=>i.collectRequiredFields(e,t)),Object(j.a)(e,t,this.valueExpression)];Object(j.d)(e,t,this.field),Object(j.d)(e,t,this.normalizationField),await Object(f.a)(i)}_getBreakIndexForExpression(e,t){const{viewingMode:i,scale:s,spatialReference:a,arcade:n}=Object(l.n)(t,{});let r=this._cache.compiledFunc;const o=Object(l.m)(n).arcadeUtils;if(!r){const e=o.createSyntaxTree(this.valueExpression);r=o.createFunction(e),this._cache.compiledFunc=r}const u=o.executeFunction(r,o.createExecContext(e,o.getViewInfo({viewingMode:i,scale:s,spatialReference:a})));return this._getBreakIndexfromInfos(u)}_getBreakIndexForField(e){const t=this.field,i=e.attributes,s=this.normalizationType;let a=parseFloat(i[t]);if(s){const e=this.normalizationTotal,t=parseFloat(i[this.normalizationField]);if("log"===s)a=Math.log(a)*Math.LOG10E;else if("percent-of-total"!==s||isNaN(e)){if("field"===s&&!isNaN(t)){if(isNaN(a)||isNaN(t))return-1;a/=t}}else a=a/e*100}return this._getBreakIndexfromInfos(a)}_getBreakIndexfromInfos(e){const t=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let i=0;i<this.classBreakInfos.length;i++){const s=[this.classBreakInfos[i].minValue,this.classBreakInfos[i].maxValue];if(s[0]<=e&&(t?e<=s[1]:e<s[1]))return i}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,t=e.length;for(let i=1;i<t;i++)if(e[i-1].maxValue!==e[i].minValue)return!1;return!0}};Object(a.a)([Object(u.b)({readOnly:!0,dependsOn:["valueExpression"]})],E.prototype,"_cache",null),Object(a.a)([Object(u.b)(x.a)],E.prototype,"backgroundFillSymbol",void 0),Object(a.a)([Object(u.b)({type:[S.a]})],E.prototype,"classBreakInfos",void 0),Object(a.a)([Object(d.a)("classBreakInfos")],E.prototype,"readClassBreakInfos",null),Object(a.a)([Object(h.a)("classBreakInfos")],E.prototype,"writeClassBreakInfos",null),Object(a.a)([Object(u.b)({type:String,json:{write:!0}})],E.prototype,"defaultLabel",void 0),Object(a.a)([Object(u.b)(x.b)],E.prototype,"defaultSymbol",void 0),Object(a.a)([Object(u.b)({type:String,json:{write:!0}})],E.prototype,"field",void 0),Object(a.a)([Object(c.a)("field")],E.prototype,"castField",null),Object(a.a)([Object(u.b)({type:Boolean})],E.prototype,"isMaxInclusive",void 0),Object(a.a)([Object(u.b)({type:g.a,json:{write:!0}})],E.prototype,"legendOptions",void 0),Object(a.a)([Object(u.b)({type:Number,readOnly:!0,value:null,dependsOn:["classBreakInfos"],json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],E.prototype,"minValue",null),Object(a.a)([Object(u.b)({type:String,json:{write:!0}})],E.prototype,"normalizationField",void 0),Object(a.a)([Object(u.b)({type:Number,cast:e=>Object(o.i)(e),json:{write:!0}})],E.prototype,"normalizationTotal",void 0),Object(a.a)([Object(u.b)({type:I.apiValues,value:null,dependsOn:["normalizationField","normalizationTotal"],json:{type:I.jsonValues,read:I.read,write:I.write}})],E.prototype,"normalizationType",null),Object(a.a)([Object(b.a)({classBreaks:"class-breaks"})],E.prototype,"type",void 0),Object(a.a)([Object(u.b)({type:String,json:{write:!0}})],E.prototype,"valueExpression",void 0),Object(a.a)([Object(u.b)({type:String,json:{write:!0}})],E.prototype,"valueExpressionTitle",void 0),E=s=Object(a.a)([Object(y.a)("esri.renderers.ClassBreaksRenderer")],E);var k=E;t.a=k},481:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(5),i(6),i(1)),l=i(2),r=(i(3),i(10),i(11),i(15));let o=s=class extends r.a{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],o.prototype,"title",void 0),o=s=Object(a.a)([Object(l.a)("esri.renderers.support.LegendOptions")],o);var u=o;t.a=u},484:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(12)),l=i(52),r=i(8),o=i(5),u=i(6),c=i(1),p=i(38),b=i(19),d=i(33),y=i(2),h=i(22),f=i(14),m=(i(3),i(10),i(39)),j=i(7),O=(i(11),i(75)),g=(i(126),i(301)),v=i(144),w=i(100),S=i(155),x=i(214),V=i(481),I=i(424),z=i(533),E=i(591),k=i(522),F=i(750),q=i(389);const _=o.a.getLogger("esri.renderers.UniqueValueRenderer"),N=Object(u.m)(F.a);let B=s=class extends(Object(z.a)(I.a)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this.type="unique-value",this.backgroundFillSymbol=null,this.field=null,this.field2=null,this.field3=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.fieldDelimiter=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let i=!1;const s={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let a=0;a<t.length;a++){const n=Object(m.d)(e,e=>e.value===t[a].value);n?Object(k.a)(n,t[a])?(s.changed.push({type:"complete",oldValue:n,newValue:t[a]}),i=!0):s.unchanged.push({oldValue:n,newValue:t[a]}):(s.added.push(t[a]),i=!0)}for(let a=0;a<e.length;a++)Object(m.d)(t,t=>t.value===e[a].value)||(s.removed.push(e[a]),i=!0);return i?s:void 0}},this._set("uniqueValueInfos",[])}get _cache(){return{compiledFunc:null}}castField(e){return null==e||"function"==typeof e?e:Object(u.l)(e)}writeField(e,t,i,s){"string"==typeof e?t[i]=e:s&&s.messages?s.messages.push(new f.a("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):_.error(".field: cannot write field to JSON since it's not a string value")}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}readPortal(e,t,i){return i.portal||w.a.getDefault()}readStyleOrigin(e,t,i){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=Object(O.a)(t.styleUrl,i);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,i,s){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=Object(O.e)(e.styleUrl,s))}set uniqueValueInfos(e){this.styleOrigin?_.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap())}addUniqueValueInfo(e,t){if(this.styleOrigin)return void _.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let i;i="object"==typeof e?N(e):new F.a({value:e,symbol:Object(x.e)(t)}),this.uniqueValueInfos.push(i),this._valueInfoMap[i.value]=i}removeUniqueValueInfo(e){if(this.styleOrigin)_.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(let t=0;t<this.uniqueValueInfos.length;t++)if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}}async getUniqueValueInfo(e,t){let i=t;return this.valueExpression&&(Object(r.g)(t)||Object(r.g)(t.arcade))&&(i={...i,arcade:await Object(g.e)()}),this._getUniqueValueInfo(e,i)}getSymbol(e,t){if(this.valueExpression&&(Object(r.g)(t)||Object(r.g)(t.arcade)))return void _.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const i=this._getUniqueValueInfo(e,t);return i&&i.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let i=t;this.valueExpression&&(Object(r.g)(i)||Object(r.g)(i.arcade))&&(i={...i,arcade:await Object(g.e)()});const s=this._getUniqueValueInfo(e,i);return s&&s.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos)t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${JSON.stringify(this.backgroundFillSymbol)}.${JSON.stringify(this.defaultSymbol)}.${this.uniqueValueInfos.reduce((e,t)=>e+t.getMeshHash(),"")}.${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}.${this.valueExpression}`}clone(){const e=new s({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:Object(n.a)(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:Object(n.a)(this.visualVariables),legendOptions:Object(n.a)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:Object(n.a)(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=Object(n.a)(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(Object(n.a)(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const i=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Object(j.a)(i)}async collectSymbolFields(e,t){const i=[...this.getSymbols().map(i=>i.collectRequiredFields(e,t)),Object(v.a)(e,t,this.valueExpression)];Object(v.d)(e,t,this.field),Object(v.d)(e,t,this.field2),Object(v.d)(e,t,this.field3),await Object(j.a)(i)}populateFromStyle(){return Object(q.fetchStyle)(this.styleOrigin,{portal:this.portal}).then(e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach(i=>{const s=new S.a({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:i.name});this.defaultSymbol||i.name!==e.data.defaultItem||(this.defaultSymbol=s,this._isDefaultSymbolDerived=!0);const a=new F.a({value:i.name,symbol:s});t.push(a),this._valueInfoMap[i.name]=a}),this._set("uniqueValueInfos",Object.freeze(t)),!this.defaultSymbol&&this.uniqueValueInfos.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this})}_updateValueInfoMap(){this._valueInfoMap={},this.uniqueValueInfos.forEach(e=>this._valueInfoMap[e.value+""]=e)}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:i,scale:s,spatialReference:a,arcade:n}=Object(r.n)(t,{});let l=this._cache.compiledFunc;const o=Object(r.m)(n).arcadeUtils;if(!l){const e=o.createSyntaxTree(this.valueExpression);l=o.createFunction(e),this._cache.compiledFunc=l}const u=o.executeFunction(l,o.createExecContext(e,o.getViewInfo({viewingMode:i,scale:s,spatialReference:a})));return this._valueInfoMap[u+""]}_getUnqiueValueInfoForFields(e){const t=this.field,i=e.attributes;let s;if("function"!=typeof t&&this.field2){const e=this.field2,a=this.field3,n=[];t&&n.push(i[t]),e&&n.push(i[e]),a&&n.push(i[a]),s=n.join(this.fieldDelimiter||"")}else"function"==typeof t?s=t(e):t&&(s=i[t]);return this._valueInfoMap[s+""]}static fromPortalStyle(e,t){const i=new s(t&&t.properties);i._set("styleOrigin",Object.freeze({styleName:e})),i._set("portal",t&&t.portal||w.a.getDefault());const a=i.populateFromStyle();return a.catch(t=>{_.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)}),a}static fromStyleUrl(e,t){const i=new s(t&&t.properties);i._set("styleOrigin",Object.freeze({styleUrl:e}));const a=i.populateFromStyle();return a.catch(t=>{_.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)}),a}};Object(a.a)([Object(c.b)({readOnly:!0,dependsOn:["valueExpression"]})],B.prototype,"_cache",null),Object(a.a)([Object(b.a)({uniqueValue:"unique-value"})],B.prototype,"type",void 0),Object(a.a)([Object(c.b)(E.a)],B.prototype,"backgroundFillSymbol",void 0),Object(a.a)([Object(c.b)({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],B.prototype,"field",void 0),Object(a.a)([Object(p.a)("field")],B.prototype,"castField",null),Object(a.a)([Object(h.a)("field")],B.prototype,"writeField",null),Object(a.a)([Object(c.b)({type:String,json:{write:!0}})],B.prototype,"field2",void 0),Object(a.a)([Object(c.b)({type:String,json:{write:!0}})],B.prototype,"field3",void 0),Object(a.a)([Object(c.b)({type:String,json:{write:!0}})],B.prototype,"valueExpression",void 0),Object(a.a)([Object(c.b)({type:String,json:{write:!0}})],B.prototype,"valueExpressionTitle",void 0),Object(a.a)([Object(c.b)({type:V.a,json:{write:!0}})],B.prototype,"legendOptions",void 0),Object(a.a)([Object(c.b)({type:String,json:{write:!0}})],B.prototype,"defaultLabel",void 0),Object(a.a)([Object(c.b)(Object(l.a)({...E.b},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],B.prototype,"defaultSymbol",null),Object(a.a)([Object(c.b)({type:String,json:{write:!0}})],B.prototype,"fieldDelimiter",void 0),Object(a.a)([Object(c.b)({type:w.a,readOnly:!0})],B.prototype,"portal",void 0),Object(a.a)([Object(d.a)("portal",["styleName"])],B.prototype,"readPortal",null),Object(a.a)([Object(c.b)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],B.prototype,"styleOrigin",void 0),Object(a.a)([Object(d.a)("styleOrigin",["styleName","styleUrl"])],B.prototype,"readStyleOrigin",null),Object(a.a)([Object(h.a)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],B.prototype,"writeStyleOrigin",null),Object(a.a)([Object(c.b)({type:[F.a],json:{write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],B.prototype,"uniqueValueInfos",null),B=s=Object(a.a)([Object(y.a)("esri.renderers.UniqueValueRenderer")],B);var D=B;t.a=D},503:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(5),i(6),i(1)),l=i(2),r=(i(3),i(10),i(11),i(15)),o=i(23);let u=s=class extends r.a{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new s({label:this.label,size:this.size,value:this.value})}};Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(a.a)([Object(n.b)({type:Number,cast:o.j,json:{write:!0}})],u.prototype,"size",void 0),Object(a.a)([Object(n.b)({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=s=Object(a.a)([Object(l.a)("esri.renderers.visualVariables.support.SizeStop")],u);var c=u;t.a=c},504:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(5),i(6),i(1)),l=i(2),r=(i(3),i(10),i(11),i(481));let o=s=class extends r.a{constructor(){super(...arguments),this.showLegend=null}clone(){return new s({title:this.title,showLegend:this.showLegend})}};Object(a.a)([Object(n.b)({type:Boolean,json:{write:!0}})],o.prototype,"showLegend",void 0),o=s=Object(a.a)([Object(l.a)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],o);var u=o;t.a=u},522:function(e,t,i){"use strict";i.d(t,"a",(function(){return y})),i.d(t,"b",(function(){return b})),i.d(t,"c",(function(){return d}));var s=i(8),a=i(44),n=i(18),l=i(21);const r=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function o(e){return e instanceof n.a}function u(e){return e instanceof l.a?Object.keys(e.items):o(e)?Object(a.a)(e).keys():e?Object.keys(e):[]}function c(e,t){return e instanceof l.a?e.items[t]:e[t]}function p(e){return e?e.declaredClass:null}function b(e,t){if(Object(s.g)(e))return!1;const i=t.split(".");let a=e;for(const e of i){if("complete"===a.type)return!0;if("partial"!==a.type)return!1;{const t=a.diff[e];if(!t)return!1;a=t}}return!0}function d(e,t){for(const i of t)if(b(e,i))return!0;return!1}function y(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&p(e)!==p(t)?{type:"complete",oldValue:e,newValue:t}:function e(t,i){const a=t.diff;if(a&&"function"==typeof a)return a(t,i);const n=u(t),l=u(i);if(0===n.length&&0===l.length)return;if(!n.length||!l.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(t,i))return{type:"complete",oldValue:t,newValue:i};const b=l.filter(e=>-1===n.indexOf(e)),d=n.filter(e=>-1===l.indexOf(e)),y=n.filter(e=>l.indexOf(e)>-1&&c(t,e)!==c(i,e)).concat(b,d).sort(),h=p(t);if(h&&r.indexOf(h)>-1&&y.length)return{type:"complete",oldValue:t,newValue:i};let f;const m=o(t)&&o(i);for(const n of y){const l=c(t,n),r=c(i,n);let o;(m||"function"!=typeof l&&"function"!=typeof r)&&l!==r&&(null==l&&null==r||(o=a&&a[n]&&"function"==typeof a[n]?a[n](l,r):"object"==typeof l&&"object"==typeof r&&p(l)===p(r)?e(l,r):{type:"complete",oldValue:l,newValue:r},Object(s.h)(o)&&(Object(s.h)(f)?f.diff[n]=o:f={type:"partial",diff:{[n]:o}})))}return f}(e,t)}},528:function(e,t,i){"use strict";var s=i(0),a=(i(4),i(9),i(5)),n=i(6),l=i(1),r=i(38),o=i(32),u=i(2),c=(i(3),i(10),i(11),i(15)),p=i(504);const b=a.a.getLogger("esri.renderers.visualVariables.VisualVariable"),d=new o.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let y=class extends c.a{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(b.error(".field: field must be a string value"),null):Object(n.l)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};Object(s.a)([Object(l.b)()],y.prototype,"index",void 0),Object(s.a)([Object(l.b)({type:d.apiValues,readOnly:!0,json:{read:d.read,write:d.write}})],y.prototype,"type",void 0),Object(s.a)([Object(l.b)({type:String,json:{write:!0}})],y.prototype,"field",void 0),Object(s.a)([Object(r.a)("field")],y.prototype,"castField",null),Object(s.a)([Object(l.b)({type:String,json:{write:!0}})],y.prototype,"valueExpression",void 0),Object(s.a)([Object(l.b)({type:String,json:{write:!0}})],y.prototype,"valueExpressionTitle",void 0),Object(s.a)([Object(l.b)({readOnly:!0,dependsOn:["valueExpression"]})],y.prototype,"arcadeRequired",null),Object(s.a)([Object(l.b)({type:p.a,json:{write:!0}})],y.prototype,"legendOptions",void 0),y=Object(s.a)([Object(u.a)("esri.renderers.visualVariables.VisualVariable")],y);var h=y;t.a=h},591:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return l}));var s=i(64),a=i(182),n=i(214);const l={types:n.a,json:{write:{writer:n.j},origins:{"web-scene":{types:n.b,write:{writer:n.j}}}}},r={types:{base:s.a,key:"type",typeMap:{"simple-fill":n.i.typeMap["simple-fill"],"picture-fill":n.i.typeMap["picture-fill"],"polygon-3d":n.i.typeMap["polygon-3d"]}},json:{write:{writer:n.j},origins:{"web-scene":{type:a.a,write:{writer:n.j}}}}}},651:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var s=i(24);function a(e){return e=e||s.a.location.hostname,c.some(t=>{var i;return null!=(null==(i=e)?void 0:i.match(t))})}function n(e,t){return e&&(t=t||s.a.location.hostname)?null!=t.match(l)||null!=t.match(o)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(u)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}const l=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,u=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,r,/^jsapps.esri.com$/,o,u]},719:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(5),i(6),i(1)),l=i(2),r=(i(3),i(10),i(11),i(15)),o=i(214);let u=s=class extends r.a{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new s({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${e}`}};Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"description",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(a.a)([Object(n.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],u.prototype,"minValue",void 0),Object(a.a)([Object(n.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],u.prototype,"maxValue",void 0),Object(a.a)([Object(n.b)({types:o.a,json:{origins:{"web-scene":{types:o.b,write:o.j}},write:o.j}})],u.prototype,"symbol",void 0),u=s=Object(a.a)([Object(l.a)("esri.renderers.support.ClassBreakInfo")],u);var c=u;t.a=c},750:function(e,t,i){"use strict";var s,a=i(0),n=(i(4),i(9),i(5),i(6),i(1)),l=i(2),r=(i(3),i(10),i(11),i(15)),o=i(214);let u=s=class extends r.a{constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new s({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON());return`${this.value}.${e}`}};Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"description",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"label",void 0),Object(a.a)([Object(n.b)({types:o.a,json:{origins:{"web-scene":{types:o.b,write:o.j}},write:o.j}})],u.prototype,"symbol",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],u.prototype,"value",void 0),u=s=Object(a.a)([Object(l.a)("esri.renderers.support.UniqueValueInfo")],u);var c=u;t.a=c}}]);