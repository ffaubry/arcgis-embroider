(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{424:function(e,t,s){"use strict";var i,a=s(0),r=(s(4),s(9),s(5),s(6)),o=s(1),n=s(32),l=s(2),c=(s(3),s(10),s(11),s(15)),p=s(56),u=s(12),h=s(33);let b=i=class extends c.a{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new i({minValue:this.minValue,maxValue:this.maxValue})}};Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],b.prototype,"minValue",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],b.prototype,"maxValue",void 0),b=i=Object(a.a)([Object(l.a)("esri.renderer.support.AuthoringInfoClassBreakInfo")],b);var d,y=b;let m=d=class extends c.a{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=[]}clone(){return new d({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:Object(u.a)(this.classBreakInfos)})}};Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],m.prototype,"field",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],m.prototype,"normalizationField",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],m.prototype,"label",void 0),Object(a.a)([Object(o.b)({type:[y],json:{write:!0}})],m.prototype,"classBreakInfos",void 0),m=d=Object(a.a)([Object(l.a)("esri.renderers.support.AuthoringInfoFieldInfo")],m);var j,O=m,v=s(38);const f=new n.a({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),g=new n.a({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),_={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},V=["high-to-low","above-and-below","centered-on","extremes"],w=["seconds","minutes","hours","days","months","years"];let z=j=class extends c.a{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new j({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};Object(a.a)([Object(o.b)({types:_,json:{write:!0}})],z.prototype,"endTime",void 0),Object(a.a)([Object(v.a)("endTime")],z.prototype,"castEndTime",null),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],z.prototype,"field",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],z.prototype,"maxSliderValue",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],z.prototype,"minSliderValue",void 0),Object(a.a)([Object(o.b)({types:_,json:{write:!0}})],z.prototype,"startTime",void 0),Object(a.a)([Object(v.a)("startTime")],z.prototype,"castStartTime",null),Object(a.a)([Object(o.b)({type:f.apiValues,value:null,dependsOn:["type"],json:{type:f.jsonValues,read:f.read,write:f.write}})],z.prototype,"style",null),Object(a.a)([Object(o.b)({type:V,value:null,dependsOn:["type"],json:{type:V,write:!0}})],z.prototype,"theme",null),Object(a.a)([Object(o.b)({type:g.apiValues,json:{type:g.jsonValues,read:g.read,write:g.write}})],z.prototype,"type",void 0),Object(a.a)([Object(o.b)({type:w,json:{type:w,write:!0}})],z.prototype,"units",void 0),z=j=Object(a.a)([Object(l.a)("esri.renderers.support.AuthoringInfoVisualVariable")],z);var x,S=z,F=s(654);const E=new n.a({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),R=new n.a({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),T=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"];let k=x=class extends c.a{constructor(e){super(e),this.colorRamp=null,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){if(e)return Object(F.a)(e)}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get standardDeviationInterval(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}clone(){return new x({classificationMethod:this.classificationMethod,colorRamp:Object(u.a)(this.colorRamp),fields:this.fields&&this.fields.slice(0),field1:Object(u.a)(this.field1),field2:Object(u.a)(this.field2),focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(e=>e.clone())})}};Object(a.a)([Object(o.b)({type:E.apiValues,value:null,dependsOn:["type"],json:{type:E.jsonValues,read:E.read,write:E.write,origins:{"web-document":{default:"manual",type:E.jsonValues,read:E.read,write:E.write}}}})],k.prototype,"classificationMethod",null),Object(a.a)([Object(o.b)({types:F.b,json:{write:!0}})],k.prototype,"colorRamp",void 0),Object(a.a)([Object(h.a)("colorRamp")],k.prototype,"readColorRamp",null),Object(a.a)([Object(o.b)({type:[String],value:null,dependsOn:["type"],json:{write:!0}})],k.prototype,"fields",null),Object(a.a)([Object(o.b)({type:O,value:null,dependsOn:["type"],json:{write:!0}})],k.prototype,"field1",null),Object(a.a)([Object(o.b)({type:O,value:null,dependsOn:["type"],json:{write:!0}})],k.prototype,"field2",null),Object(a.a)([Object(o.b)({type:["HH","HL","LH","LL"],value:null,dependsOn:["type"],json:{write:!0}})],k.prototype,"focus",null),Object(a.a)([Object(o.b)({type:Number,value:null,dependsOn:["type"],json:{type:r.a,write:!0}})],k.prototype,"numClasses",null),Object(a.a)([Object(o.b)({type:T,json:{type:T,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],k.prototype,"lengthUnit",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],k.prototype,"maxSliderValue",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],k.prototype,"minSliderValue",void 0),Object(a.a)([Object(o.b)({type:[.25,.33,.5,1],value:null,dependsOn:["classificationMethod","type"],json:{type:[.25,.33,.5,1],write:!0}})],k.prototype,"standardDeviationInterval",null),Object(a.a)([Object(o.b)({type:String,value:null,json:{type:R.jsonValues,read:R.read,write:R.write}})],k.prototype,"type",null),Object(a.a)([Object(o.b)({type:[S],json:{write:!0}})],k.prototype,"visualVariables",void 0),k=x=Object(a.a)([Object(l.a)("esri.renderers.support.AuthoringInfo")],k);var I=k;const C=new n.a({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0});let M=class extends c.a{constructor(e){super(e),this.authoringInfo=null,this.type=null}async getRequiredFields(e){if(!this.collectRequiredFields)return[];const t=new Set;return await this.collectRequiredFields(t,e),Object(p.c)(t).sort()}getSymbol(e,t){}async getSymbolAsync(e,t){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};Object(a.a)([Object(o.b)({type:I,json:{write:!0}})],M.prototype,"authoringInfo",void 0),Object(a.a)([Object(o.b)({type:C.apiValues,readOnly:!0,json:{type:C.jsonValues,read:!1,write:{writer:C.write,ignoreOrigin:!0}}})],M.prototype,"type",void 0),M=Object(a.a)([Object(l.a)("esri.renderers.Renderer")],M);var A=M;t.a=A},520:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return l}));var i=s(78),a=s(153),r=s(125);const o=-3;class n{constructor(e,t,s){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)}put(e,t,s,i=0){this._storage.put(this._namespace+e,t,s,i)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,s){this._storage.updateSize(this._namespace+e,t,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class l{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new a.a}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs=this._removeFuncs.filter(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,s,i){const a=this._db.get(e);if(a&&(this._size-=a.size,this._db.delete(e),a.entry!==t&&this._notifyRemoved(e,a.entry)),s>this._maxSize)return void this._notifyRemoved(e,t);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const r=1+Math.max(i,-3)- -3;this._db.set(e,{entry:t,size:s,lifetime:r,lives:r}),this._size+=s,this._checkSizeLimit()}updateSize(e,t,s){const i=this._db.get(e);i&&i.entry===t&&(this._size-=i.size,s>this._maxSize?this._notifyRemoved(e,t):(i.size=s,this._size+=s,this._checkSizeLimit()))}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach((e,a)=>{const r=e.lifetime;s[r]=(s[r]||0)+e.size,this._users.forEachSimple(s=>{const r=s.namespace;if(Object(i.e)(a,r)){const s=t[r]||0;t[r]=s+e.size}})});const a={};this._users.forEachSimple(e=>{const s=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const i=t[s]||0;t[s]=i,a[s]=Math.round(100*e.hitRate)+"%"}else a[s]="0%"});const r=Object.keys(t);r.forEach(e=>t[e]=t[e]/this._size*100),r.sort((e,s)=>t[s]-t[e]),r.forEach(s=>e[s]=Math.round(t[s])+"% / "+a[s]);for(let t=s.length-1;t>=0;--t){const i=s[t];i&&(e["Priority "+(t+-3-1)]=Math.round(i/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forEachSimple(e=>e.resetHitRate())}clear(e){this._db.forEach((t,s)=>{Object(i.e)(s,e)&&(this._size-=t.size,this._db.delete(s),this._notifyRemoved(s,t.entry))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemoved(t,e.entry)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(e,t){this._removeFuncs.forEach(s=>{Object(i.e)(e,s[0])&&s[1](t)})}_checkSizeLimit(){this._size<=this._maxSize||Object(r.d)(this._db,(e,t)=>(this._db.delete(t),e.lives<=1?(this._size-=e.size,this._notifyRemoved(t,e.entry)):(--e.lives,this._db.set(t,e)),this._size<=.9*this.maxSize))}}},533:function(e,t,s){"use strict";s.d(t,"a",(function(){return A}));var i,a=s(0),r=(s(4),s(9),s(5)),o=s(6),n=s(1),l=s(33),c=s(2),p=s(22),u=(s(3),s(10),s(11),s(144)),h=s(528),b=s(414);let d=i=class extends h.a{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};Object(a.a)([Object(n.b)({readOnly:!0,dependsOn:["valueExpression","stops"]})],d.prototype,"cache",null),Object(a.a)([Object(n.b)({type:["color"],json:{type:["colorInfo"]}})],d.prototype,"type",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],d.prototype,"normalizationField",void 0),Object(a.a)([Object(n.b)({type:[b.a],json:{write:!0}})],d.prototype,"stops",null),d=i=Object(a.a)([Object(c.a)("esri.renderers.visualVariables.ColorVariable")],d);var y,m=d,j=s(15),O=s(166);let v=y=class extends j.a{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,t){return Object(O.b)(t.transparency)}writeOpacity(e,t,s){t[s]=Object(O.a)(e)}clone(){return new y({label:this.label,opacity:this.opacity,value:this.value})}};Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],v.prototype,"label",void 0),Object(a.a)([Object(n.b)({type:Number,json:{type:o.a,write:{target:"transparency"}}})],v.prototype,"opacity",void 0),Object(a.a)([Object(l.a)("opacity",["transparency"])],v.prototype,"readOpacity",null),Object(a.a)([Object(p.a)("opacity")],v.prototype,"writeOpacity",null),Object(a.a)([Object(n.b)({type:Number,json:{write:!0}})],v.prototype,"value",void 0),v=y=Object(a.a)([Object(c.a)("esri.renderers.visualVariables.support.OpacityStop")],v);var f,g=v;let _=f=class extends h.a{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(e=>!!e)).sort((e,t)=>e.value-t.value),this._set("stops",e)}clone(){return new f({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(e=>e.clone()),legendOptions:this.legendOptions&&this.legendOptions.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};Object(a.a)([Object(n.b)({readOnly:!0,dependsOn:["valueExpression","stops"]})],_.prototype,"cache",null),Object(a.a)([Object(n.b)({type:["opacity"],json:{type:["transparencyInfo"]}})],_.prototype,"type",void 0),Object(a.a)([Object(n.b)({type:String,json:{write:!0}})],_.prototype,"normalizationField",void 0),Object(a.a)([Object(n.b)({type:[g],json:{write:!0}})],_.prototype,"stops",null),_=f=Object(a.a)([Object(c.a)("esri.renderers.visualVariables.OpacityVariable")],_);var V=_,w=s(718),z=s(468),x=s(32),S=s(113),F=s(18);const E=r.a.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),R={color:m,size:z.a,opacity:V,rotation:w.a},T=new x.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),k=/^\[([^\]]+)\]$/i;let I=class extends F.a{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(e){if(this._resetVariables(),(e=e&&e.filter(e=>!!e))&&e.length){for(const t of e)switch(t.type){case"color":this.colorVariables.push(t);break;case"opacity":this.opacityVariables.push(t);break;case"rotation":this.rotationVariables.push(t);break;case"size":this.sizeVariables.push(t)}this.sizeVariables.length&&this.sizeVariables.some(e=>!!e.target)&&e.sort((e,t)=>{let s=null;return s=e.target===t.target?0:e.target?1:-1,s});for(let t=0;t<e.length;t++)e[t].index=t;this._set("visualVariables",e)}else this._set("visualVariables",e)}readVariables(e,t,s){const{rotationExpression:i,rotationType:a}=t,r=i&&i.match(k),o=r&&r[1];if(o&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:a,field:o})),e)return e.map(e=>{const t=T.read(e.type),i=R[t];i||(E.warn("Unknown variable type: "+t),s&&s.messages&&s.messages.push(new S.a("visual-variable:unsupported",`visualVariable of type '${t}' is not supported`,{definition:e,context:s})));const a=new i;return a.read(e,s),a})}writeVariables(e,t){const s=[];for(const i of e){const e=i.toJSON(t);e&&s.push(e)}return s}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};Object(a.a)([Object(n.b)()],I.prototype,"visualVariables",null),I=Object(a.a)([Object(c.a)("esri.renderers.visualVariables.VisualVariableFactory")],I);var C=I;const M={base:h.a,key:"type",typeMap:{opacity:V,color:m,rotation:w.a,size:z.a}},A=e=>{let t=class extends e{constructor(){super(...arguments),this._vvFactory=new C}set visualVariables(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(e,t,s){return this._vvFactory.readVariables(e,t,s)}writeVisualVariables(e,t,s,i){t[s]=this._vvFactory.writeVariables(e,i)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const e of this.visualVariables)if(e.arcadeRequired)return!0;return!1}hasVisualVariables(e,t){return e?!!this.getVisualVariablesForType(e,t):!!(this.getVisualVariablesForType("size",t)||this.getVisualVariablesForType("color",t)||this.getVisualVariablesForType("opacity",t)||this.getVisualVariablesForType("rotation",t))}getVisualVariablesForType(e,t){const s=this.visualVariables;if(!s)return;const i=s.filter(s=>s.type===e&&("string"==typeof t?s.target===t:!1!==t||!s.target));return i&&0===i.length?void 0:i}async collectVVRequiredFields(e,t){let s=[];this.visualVariables&&(s=s.concat(this.visualVariables));for(const i of s)i&&(i.field&&Object(u.d)(e,t,i.field),i.normalizationField&&Object(u.d)(e,t,i.normalizationField),i.valueExpression&&await Object(u.a)(e,t,i.valueExpression))}};return Object(a.a)([Object(n.b)({types:[M],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),Object(a.a)([Object(l.a)("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),Object(a.a)([Object(p.a)("visualVariables")],t.prototype,"writeVisualVariables",null),t=Object(a.a)([Object(c.a)("esri.renderers.mixins.VisualVariablesMixin")],t),t}},654:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return o}));var i=s(717),a=s(748),r=s(749);const o={key:"type",base:i.a,typeMap:{algorithmic:a.a,multipart:r.a}};function n(e){return e&&e.type?"algorithmic"===e.type?a.a.fromJSON(e):"multipart"===e.type?r.a.fromJSON(e):null:null}},717:function(e,t,s){"use strict";var i=s(0),a=(s(4),s(9),s(5),s(6),s(1)),r=s(2),o=(s(3),s(10),s(11),s(15));let n=class extends o.a{constructor(e){super(e),this.type=null}};Object(i.a)([Object(a.b)({readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=Object(i.a)([Object(r.a)("esri.tasks.support.ColorRamp")],n);var l=n;t.a=l},718:function(e,t,s){"use strict";var i,a=s(0),r=(s(4),s(9),s(5),s(6),s(1)),o=s(2),n=s(22),l=s(14),c=(s(3),s(10),s(11),s(528));let p=i=class extends c.a{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic",this.valueExpressionTitle=null}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}writeValueExpressionTitleWebScene(e,t,s,i){if(i&&i.messages){const e=`visualVariables[${this.index}]`;i.messages.push(new l.a("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:e+".valueExpressionTitle",context:i}))}}clone(){return new i({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})}};Object(a.a)([Object(r.b)({readOnly:!0,dependsOn:["valueExpression"]})],p.prototype,"cache",null),Object(a.a)([Object(r.b)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],p.prototype,"axis",void 0),Object(a.a)([Object(r.b)({type:["rotation"],json:{type:["rotationInfo"]}})],p.prototype,"type",void 0),Object(a.a)([Object(r.b)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],p.prototype,"rotationType",void 0),Object(a.a)([Object(r.b)({type:String,json:{write:!0}})],p.prototype,"valueExpressionTitle",void 0),Object(a.a)([Object(n.a)("web-scene","valueExpressionTitle")],p.prototype,"writeValueExpressionTitleWebScene",null),p=i=Object(a.a)([Object(o.a)("esri.renderers.visualVariables.RotationVariable")],p);var u=p;t.a=u},748:function(e,t,s){"use strict";var i,a=s(0),r=(s(4),s(9),s(12)),o=(s(5),s(6)),n=s(1),l=s(19),c=s(2),p=(s(3),s(10),s(11),s(35)),u=s(717);let h=i=class extends u.a{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new i({fromColor:Object(r.a)(this.fromColor),toColor:Object(r.a)(this.toColor),algorithm:this.algorithm})}};Object(a.a)([Object(l.a)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],h.prototype,"algorithm",void 0),Object(a.a)([Object(n.b)({type:p.a,json:{type:[o.a],write:!0}})],h.prototype,"fromColor",void 0),Object(a.a)([Object(n.b)({type:p.a,json:{type:[o.a],write:!0}})],h.prototype,"toColor",void 0),Object(a.a)([Object(n.b)({type:["algorithmic"]})],h.prototype,"type",void 0),h=i=Object(a.a)([Object(c.a)("esri.tasks.support.AlgorithmicColorRamp")],h);var b=h;t.a=b},749:function(e,t,s){"use strict";var i,a=s(0),r=(s(4),s(9),s(12)),o=(s(5),s(6),s(1)),n=s(2),l=(s(3),s(10),s(11),s(717)),c=s(748);let p=i=class extends l.a{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new i({colorRamps:Object(r.a)(this.colorRamps)})}};Object(a.a)([Object(o.b)({type:[c.a],json:{write:!0}})],p.prototype,"colorRamps",void 0),Object(a.a)([Object(o.b)({type:["multipart"]})],p.prototype,"type",void 0),p=i=Object(a.a)([Object(n.a)("esri.tasks.support.MultipartColorRamp")],p);var u=p;t.a=u}}]);