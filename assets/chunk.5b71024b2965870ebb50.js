(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{963:function(e,t,s){"use strict";s.r(t),s.d(t,"Colorize",(function(){return a}));s(404),s(405);var i=s(406),r=(s(407),s(408),s(409),s(411),s(550));class a{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){this._createOrResizeResources(e);const{context:i,state:r,painter:a,pixelRatio:n}=e,{size:o}=r,{materialManager:u}=a,c=this._programDesc,d=this._quad,l=[Math.round(n*o[0]),Math.round(n*o[1])],h=s.colorMatrix;d.bind();const p=this._layerFBOTexture;i.bindFramebuffer(t),t.copyToTexture(0,0,l[0],l[1],0,0,p),i.setBlendingEnabled(!1),i.setStencilTestEnabled(!1);const _=u.getProgram(e,c);i.bindProgram(_),i.bindTexture(p,2),_.setUniformMatrix4fv("u_coefficients",h),_.setUniform1i("u_colorTexture",2),d.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(1,771),i.setStencilTestEnabled(!0),d.unbind()}_createOrResizeResources(e){const{context:t,state:s,pixelRatio:a}=e,{size:n}=s,o=Math.round(a*n[0]),u=Math.round(a*n[1]);this._layerFBOTexture&&this._size[0]===o&&this._size[1]===u||(this._size[0]=o,this._size[1]=u,this._layerFBOTexture?this._layerFBOTexture.resize(o,u):this._layerFBOTexture=new i.a(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o,height:u}),this._quad||(this._quad=new r.a(t,[-1,-1,1,-1,-1,1,1,1])))}}}}]);