(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{976:function(e,t,a){"use strict";a.r(t),a.d(t,"applyEdits",(function(){return c})),a.d(t,"isEditableLayer",(function(){return p}));var d=a(12),r=a(8),s=a(14),i=a(3),l=a(7),n=a(21),u=a(94),o=a(303);function p(e){return!0===e.get("capabilities.operations.supportsEditing")}async function c(e,t,a){let r,i;const u={edits:t,result:Object(l.f)((e,t)=>{r=e,i=t})};e.emit("apply-edits",u);try{const i=await async function(e,t,a){await e.load();const d=e.source;if(!function(e){return e&&null!=e.applyEdits}(d))return Object(l.h)(new s.a(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new s.a(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});const r=await async function(e,t,a){const d=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),r=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!d&&!r)throw new s.a(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new s.a(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new s.a(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new s.a(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&r)throw new s.a(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&r)throw new s.a(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...t};i.addFeatures=t&&n.a.isCollection(t.addFeatures)?t.addFeatures.toArray():i.addFeatures||[],i.updateFeatures=t&&n.a.isCollection(t.updateFeatures)?t.updateFeatures.toArray():i.updateFeatures||[],i.deleteFeatures=t&&n.a.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():i.deleteFeatures||[],i.addAttachments=i.addAttachments||[],i.updateAttachments=i.updateAttachments||[],i.deleteAttachments=i.deleteAttachments||[],i.addFeatures=i.addFeatures.map(b),i.updateFeatures=i.updateFeatures.map(b);const l=a&&a.globalIdUsed;return i.addFeatures.forEach(t=>h(t,e,l)),i.updateFeatures.forEach(t=>h(t,e,l)),i.deleteFeatures.forEach(t=>h(t,e,l)),i.addAttachments.forEach(t=>m(t,e)),i.updateAttachments.forEach(t=>m(t,e)),async function(e){const t=e.addFeatures,a=e.updateFeatures,d=t.concat(a).map(e=>e.geometry),r=await Object(o.a)(d),s=t.length,i=a.length;return r.slice(0,s).forEach((t,a)=>{e.addFeatures[a].geometry=t}),r.slice(s,s+i).forEach((t,a)=>{e.updateFeatures[a].geometry=t}),e}(i)}(e,t,a);return r.addFeatures.length||r.updateFeatures.length||r.deleteFeatures.length||r.addAttachments.length||r.updateAttachments.length||r.deleteAttachments.length?d.applyEdits(r,a):{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}(e,t,a),u=e=>e.filter(e=>!e.error).map(d.a),p={addedFeatures:u(i.addFeatureResults),updatedFeatures:u(i.updateFeatureResults),deletedFeatures:u(i.deleteFeatureResults),addedAttachments:u(i.addAttachmentResults),updatedAttachments:u(i.updateAttachmentResults),deletedAttachments:u(i.deleteAttachmentResults)};return(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&e.emit("edits",p),r(p),i}catch(e){throw i(e),e}}function h(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.a(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new s.a(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(r.h)(e.geometry)&&e.geometry.hasZ&&Object(r.h)(t.capabilities.data.supportsZ)&&!1===t.capabilities.data.supportsZ)throw new s.a(t.type+"-layer:z-unsupported","Service does not support z values while feature has z values.")}function m(e,t){const{feature:a,attachment:d}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new s.a(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new s.a(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!d.globalId)throw new s.a(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!d.data&&!d.uploadId)throw new s.a(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(d.data instanceof File&&d.data.name||d.name))throw new s.a(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&d.uploadId)throw new s.a(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof d.data){const e=Object(i.i)(d.data);if(e&&!e.isBase64)throw new s.a(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function b(e){const t=new u.a;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);