self.webpackChunkRemoteClient([63,29,204,205],{117:function(e,t,r){"use strict";r.r(t);var a=r(24),i=(r(3),r(20),r(8)),s=r(2),o=r(7),n=r(9),l=r(26),c=r(68),p=r(25),d=r(10),y=r(4),b=(r(41),r(5)),u=(r(42),r(65)),h=r(70),m=r(143),g=r(98),O=r(91),f=r(75),v=r(30);const j=o.a.getLogger("esri.portal.PortalItemResource");let w=class extends v.a{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this.normalizePath(e.path,e.portalItem)}:e}set path(e){Object(s.h)(e)&&Object(y.r)(e)?j.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this.normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const r=this.url;if(Object(s.g)(r))throw new d.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(r,{responseType:e,signal:Object(s.f)(t,"signal")})}async update(e,t){return(await Promise.resolve().then(r.bind(null,42))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(s.h)(this.path)}normalizePath(e,t){return Object(s.g)(e)?e:(e=e.replace(/^\/+/,""),Object(s.h)(t)&&Object(y.r)(e)&&(e=Object(y.z)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};Object(a.a)([Object(l.b)()],w.prototype,"portalItem",void 0),Object(a.a)([Object(l.b)({type:String,value:null})],w.prototype,"path",null),Object(a.a)([Object(f.a)("path")],w.prototype,"_castPath",null),Object(a.a)([Object(l.b)({type:String,readOnly:!0,dependsOn:["portalItem","path"]})],w.prototype,"url",null),Object(a.a)([Object(l.b)({type:String,readOnly:!0,dependsOn:["portalItem","path"]})],w.prototype,"itemRelativeUrl",null),w=Object(a.a)([Object(p.a)("esri.portal.PortalItemResource")],w);var L=w;let S=class extends v.a{constructor(e){super(e),this.created=null,this.rating=null}};Object(a.a)([Object(l.b)()],S.prototype,"created",void 0),Object(a.a)([Object(l.b)()],S.prototype,"rating",void 0),S=Object(a.a)([Object(p.a)("esri.portal.PortalRating")],S);var I,x=S;let T=I=class extends(Object(u.b)(g.a)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return Object(n.d)(I,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return"Feature Service"===e||"Feature Collection"===e?r=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?r=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e&&(r="Tile Package (tpkx)"),r}readExtent(e){return e&&e.length?new h.a(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let r,a=!1,i=!1,s=!1,o=!1,n=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(a=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(i=t.indexOf("Table")>-1,s=t.indexOf("Route Layer")>-1,o=t.indexOf("Markup")>-1,n=-1!==t.indexOf("Spatiotemporal"),r=n&&i?"spatiotemporaltable":i?"table":s?"routelayer":o?"markup":n?"spatiotemporal":a?"featureshosted":"features"):r="map service"===e||"wms"===e||"wmts"===e?a||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"maps",r?Object(m.b)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=O.a.getDefault());const t=this.portal.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:Object(s.h)(e)?e.signal:null}):{}).then(e=>{this.sourceJSON=e,this.read(e)});return this.addResolvingPromise(t),Object(b.r)(this)}addRating(e){const t={method:"post",query:{}};return e instanceof x&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then(()=>new x({rating:e,created:new Date}))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(i.a)(this.applicationProxies),avgRating:this.avgRating,categories:Object(i.a)(this.categories),created:Object(i.a)(this.created),culture:this.culture,description:this.description,extent:Object(i.a)(this.extent),groupCategories:Object(i.a)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(i.a)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(i.a)(this.screenshots),size:this.size,snippet:this.snippet,tags:Object(i.a)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(i.a)(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new I({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then(()=>{})}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",e).then(e=>null!=e.rating?(e.created=new Date(e.created),new x(e)):null)}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:e,...t},I)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+="&w="+e),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e&&e.data,r={method:"post"};r.query=this.createPostQuery();for(const e in r.query)null===r.query[e]&&(r.query[e]="");return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal._request(this.userItemUrl+"/update",r).then(()=>this.reload())}):Object(b.h)(new d.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e.thumbnail,r=e.filename,a={method:"post"};if("string"==typeof t)Object(y.t)(t)?a.query={data:t}:a.query={url:Object(y.x)(t)},Object(s.h)(r)&&(a.query.filename=r);else{const e=new FormData;Object(s.h)(r)?e.append("file",t,r):e.append("file",t),a.body=e}return this.portal._request(this.userItemUrl+"/updateThumbnail",a).then(()=>this.reload())}):Object(b.h)(new d.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await Promise.resolve().then(r.bind(null,42))).fetchResources(this,e,t)}async addResource(e,t,a){const i=await Promise.resolve().then(r.bind(null,42));return e.portalItem=this,i.addOrUpdateResource(e,"add",t,a)}async removeResource(e,t){const a=await Promise.resolve().then(r.bind(null,42));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new d.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return a.removeResource(this,e,t)}async removeAllResources(e){return(await Promise.resolve().then(r.bind(null,42))).removeAllResources(this,e)}resourceFromPath(e){return new L({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return Object(i.c)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new I({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};Object(a.a)([Object(l.b)({type:["private","shared","org","public"]})],T.prototype,"access",void 0),Object(a.a)([Object(l.b)()],T.prototype,"accessInformation",void 0),Object(a.a)([Object(l.b)({json:{read:{source:"appProxies"}}})],T.prototype,"applicationProxies",void 0),Object(a.a)([Object(l.b)()],T.prototype,"avgRating",void 0),Object(a.a)([Object(l.b)()],T.prototype,"categories",void 0),Object(a.a)([Object(l.b)({type:Date})],T.prototype,"created",void 0),Object(a.a)([Object(l.b)()],T.prototype,"culture",void 0),Object(a.a)([Object(l.b)()],T.prototype,"description",void 0),Object(a.a)([Object(l.b)({dependsOn:["type","typeKeywords"],readOnly:!0})],T.prototype,"displayName",null),Object(a.a)([Object(l.b)({type:h.a})],T.prototype,"extent",void 0),Object(a.a)([Object(c.a)("extent")],T.prototype,"readExtent",null),Object(a.a)([Object(l.b)()],T.prototype,"groupCategories",void 0),Object(a.a)([Object(l.b)({dependsOn:["type","typeKeywords"],readOnly:!0})],T.prototype,"iconUrl",null),Object(a.a)([Object(l.b)()],T.prototype,"id",void 0),Object(a.a)([Object(l.b)({dependsOn:["type"],readOnly:!0})],T.prototype,"isLayer",null),Object(a.a)([Object(l.b)()],T.prototype,"itemControl",void 0),Object(a.a)([Object(l.b)({dependsOn:["portal.restUrl","id"],readOnly:!0})],T.prototype,"itemUrl",null),Object(a.a)([Object(l.b)()],T.prototype,"licenseInfo",void 0),Object(a.a)([Object(l.b)({type:Date})],T.prototype,"modified",void 0),Object(a.a)([Object(l.b)()],T.prototype,"name",void 0),Object(a.a)([Object(l.b)()],T.prototype,"numComments",void 0),Object(a.a)([Object(l.b)()],T.prototype,"numRatings",void 0),Object(a.a)([Object(l.b)()],T.prototype,"numViews",void 0),Object(a.a)([Object(l.b)()],T.prototype,"owner",void 0),Object(a.a)([Object(l.b)()],T.prototype,"ownerFolder",void 0),Object(a.a)([Object(l.b)({type:O.a})],T.prototype,"portal",void 0),Object(a.a)([Object(l.b)()],T.prototype,"screenshots",void 0),Object(a.a)([Object(l.b)()],T.prototype,"size",void 0),Object(a.a)([Object(l.b)()],T.prototype,"snippet",void 0),Object(a.a)([Object(l.b)()],T.prototype,"sourceJSON",void 0),Object(a.a)([Object(l.b)()],T.prototype,"tags",void 0),Object(a.a)([Object(l.b)()],T.prototype,"thumbnail",void 0),Object(a.a)([Object(l.b)({dependsOn:["itemUrl","thumbnail","portal.credential.token"],readOnly:!0})],T.prototype,"thumbnailUrl",null),Object(a.a)([Object(l.b)()],T.prototype,"title",void 0),Object(a.a)([Object(l.b)()],T.prototype,"type",void 0),Object(a.a)([Object(l.b)()],T.prototype,"typeKeywords",void 0),Object(a.a)([Object(l.b)()],T.prototype,"url",void 0),Object(a.a)([Object(l.b)({dependsOn:["portal.restUrl","portal.user.username","owner","ownerFolder","id"],readOnly:!0})],T.prototype,"userItemUrl",null),T=I=Object(a.a)([Object(p.a)("esri.portal.PortalItem")],T);var M=T;t.default=M},237:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return l}));var a=r(2),i=r(74),s=r(98),o=r(177);async function n(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],n=(...e)=>{for(const t of e)Object(a.g)(t)||(Array.isArray(t)?n(...t):i.a.isCollection(t)?t.forEach(e=>n(e)):s.a.isLoadable(t)&&r.push(t))};t(n);let l=null;if(await Object(o.b)(r,async e=>{var t;!1!==(await Object(o.c)((t=e,"loadAll"in t&&"function"==typeof t.loadAll?e.loadAll():e.load()))).ok||l||(l=e)}),l)throw l.loadError;return e}},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r(8),i=r(15),s=r(2),o=r(39),n=r(10),l=r(96);const c=Object(l.a)(["bing-maps","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"]),p=Object(l.a)(["feature","group","tile","unknown","unsupported","vector-tile","web-tile"]);function d(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function y(e,t,r){if(!("write"in e)||!e.write)return r&&r.messages&&r.messages.push(new n.a("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(function(e,t){if(t.restrictedWebMapWriting){const r=function(e){return"basemap"===e.layerContainerType?c:"operational-layers"===e.layerContainerType?p:null}(t);return!Object(s.h)(r)||r.has(e.type)&&!d(e)}return!0}(e,r)){const t={};return e.write(t,r)?t:null}return Object(s.h)(t)&&function(e,t){if(function(e,t){if(d(e)){const r=Object(i.b)("featureCollection.layers",t),a=r&&r[0]&&r[0].layerDefinition;a&&("maxScale"in e&&(a.maxScale=Object(o.b)(e.maxScale)),"minScale"in e&&(a.minScale=Object(o.b)(e.minScale)))}else"group"!==e.type&&("maxScale"in e&&(t.maxScale=Object(o.b)(e.maxScale)),"minScale"in e&&(t.minScale=Object(o.b)(e.minScale)))}(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=Object(o.b)(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(d(e)){const r=t.featureCollection;r&&(r.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}(e,t=Object(a.a)(t)),t}},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var a=r(143),i=r(154);async function s(e){if(!e)return;const t=e.indexOf("-vector")>-1?e.slice(0,e.indexOf("-vector")):e,r=await Object(i.a)("esri/t9n/basemaps");return r[e]||r[t]}const o={streets:{id:"streets",thumbnailUrl:Object(a.b)("esri/images/basemap/streets.jpg"),baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",thumbnailUrl:Object(a.b)("esri/images/basemap/satellite.jpg"),baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",thumbnailUrl:Object(a.b)("esri/images/basemap/hybrid.jpg"),baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Boundaries and Places",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",thumbnailUrl:Object(a.b)("esri/images/basemap/terrain.jpg"),baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",thumbnailUrl:Object(a.b)("esri/images/basemap/topo.jpg"),baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",thumbnailUrl:Object(a.b)("esri/images/basemap/gray.jpg"),baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",thumbnailUrl:Object(a.b)("esri/images/basemap/dark-gray.jpg"),baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",thumbnailUrl:Object(a.b)("esri/images/basemap/oceans.jpg"),baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",thumbnailUrl:Object(a.b)("esri/images/basemap/national-geographic.jpg"),baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",thumbnailUrl:Object(a.b)("esri/images/basemap/osm.jpg"),baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/dark-gray-vector.jpg"),baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/gray-vector.jpg"),baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/streets-vector.jpg"),baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/topo-vector.jpg"),baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/streets-night.jpg"),baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/streets-relief.jpg"),baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",showLegend:!1,visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",thumbnailUrl:Object(a.b)("esri/images/basemap/streets-navigation.jpg"),baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]}}},482:function(e,t,r){"use strict";r.r(t);var a,i=r(24),s=(r(3),r(20),r(8)),o=r(2),n=r(7),l=(r(9),r(26)),c=r(25),p=r(66),d=r(4),y=(r(41),r(5)),b=(r(42),r(65)),u=r(71),h=(r(72),r(74)),m=r(222),g=r(98),O=r(91),f=r(237),v=r(117),j=r(417),w=r(366);let L=0;const S=n.a.getLogger("esri.Basemap");let I=a=class extends(Object(b.b)(g.a)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+L++,this.baseLayers=new h.a,this.referenceLayers=new h.a;const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&S.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},r=e=>{e.parent=null};this.baseLayers.on("after-add",e=>t(e.item)),this.referenceLayers.on("after-add",e=>t(e.item)),this.baseLayers.on("after-remove",e=>r(e.item)),this.referenceLayers.on("after-remove",e=>r(e.item))}initialize(){this.when().catch(e=>{S.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e;const t=this.baseLayers.removeAll();for(const e of t)e.destroy();const r=this.referenceLayers.removeAll();for(const e of r)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",Object(m.b)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,r){const a=[];e?(r={...r,layerContainerType:"basemap"},this.baseLayers.forEach(e=>{const t=Object(w.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);Object(o.h)(t)&&a.push(t)}),this.referenceLayers.forEach(e=>{const t=Object(w.a)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);Object(o.h)(t)&&(t.isReference=!0,a.push(t))}),t.baseMapLayers=a):t.baseMapLayers=a}set referenceLayers(e){this._set("referenceLayers",Object(m.b)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Object(y.r)(this)}loadAll(){return Object(f.a)(this,e=>{e(this.baseLayers,this.referenceLayers)})}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new a({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(e=>{const t=Object(s.a)(e);return t.url&&Object(d.u)(t.url)&&(t.url="https:"+t.url),t.templateUrl&&Object(d.u)(t.templateUrl)&&(t.templateUrl="https:"+t.templateUrl),t})),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:r}=this;Object(y.t)(e);const a=[];if(t){const r=t.context?t.context.url:null;if(a.push(this._loadLayersFromJSON(t.data,r,e)),t.data.id&&!t.data.title){const e=t.data.id;a.push(Object(j.b)(e).then(e=>{e&&this.read({title:e},t.context)}))}}else r&&a.push(this._loadFromItem(r,e));await Object(y.a)(a)}async _loadLayersFromJSON(e,t,a){const i=this.resourceInfo&&this.resourceInfo.context,s=this.portalItem&&this.portalItem.portal||i&&i.portal||null,o=i&&"web-scene"===i.origin?"web-scene":"web-map",n=await r.e(25).then(r.bind(null,543)),l=[];if(Object(y.t)(a),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const r={context:{origin:o,url:t,portal:s,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},a=n.populateOperationalLayers(this.baseLayers,e.baseMapLayers.filter(e=>!e.isReference),r);l.push(a);const i=n.populateOperationalLayers(this.referenceLayers,e.baseMapLayers.filter(e=>e.isReference),r);l.push(i)}await Object(y.m)(l)}async _loadFromItem(e,t){const r=await e.load(t),a=await r.fetchData("json",t),i=Object(d.H)(e.itemUrl);return this._set("resourceInfo",{data:a.baseMap,context:{origin:"web-map",portal:e.portal||O.a.getDefault(),url:i}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:a.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||O.a.getDefault(),url:i}),this._loadLayersFromJSON(this.resourceInfo.data,i,t)}static fromId(e){const t=j.a[e];return t?a.fromJSON(t):null}};Object(i.a)([Object(l.b)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,r,a){this._writeBaseLayers(e,t,a)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:h.a}},writer(e,t,r,a){this._writeBaseLayers(e,t,a)}}}}}})],I.prototype,"baseLayers",null),Object(i.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{write:!0}}}})],I.prototype,"id",void 0),Object(i.a)([Object(l.b)({type:v.default})],I.prototype,"portalItem",void 0),Object(i.a)([Object(l.b)()],I.prototype,"referenceLayers",null),Object(i.a)([Object(l.b)({readOnly:!0})],I.prototype,"resourceInfo",void 0),Object(i.a)([Object(l.b)({type:u.a})],I.prototype,"spatialReference",void 0),Object(i.a)([Object(l.b)()],I.prototype,"thumbnailUrl",void 0),Object(i.a)([Object(l.b)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],I.prototype,"title",void 0),Object(i.a)([Object(p.a)("title")],I.prototype,"writeTitle",null),I=a=Object(i.a)([Object(c.a)("esri.Basemap")],I);var x=I;t.default=x}});