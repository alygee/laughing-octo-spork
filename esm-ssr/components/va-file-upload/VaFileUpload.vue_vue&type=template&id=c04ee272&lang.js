import{resolveComponent as e,mergeProps as l,withCtx as i,createTextVNode as o}from"vue";import{ssrRenderAttrs as d,ssrRenderComponent as a,ssrRenderAttr as t}from"@vue/server-renderer";function p(p,s,f,r){const u=e("va-button"),n=e("va-file-upload-list"),c=e("va-modal");s(`<div${d(l({class:["va-file-upload",{"va-file-upload--dropzone":p.dropzone}],style:p.computedStyle},r))}><div class="va-file-upload__field">`),p.dropzone?s('<div class="va-file-upload__field__text"> Drag’n’drop files or </div>'):s("\x3c!----\x3e"),s(a(u,{class:"va-file-upload__field__button",disabled:p.disabled,color:p.colorComputed,icon:"","icon-right":""},{default:i(((e,l,i,d)=>{if(!l)return[o(" Upload file ")];l(" Upload file ")})),_:1},f)),s(`<input type="file" class="va-file-upload__field__input"${t("accept",p.fileTypes)}${"single"!==p.type?" multiple":""}${p.disabled?" disabled":""}></div>`),p.files.length?s(a(n,{type:p.type,files:p.files,color:p.colorComputed},null,f)):s("\x3c!----\x3e"),s(a(c,{modelValue:p.modal,"onUpdate:modelValue":e=>p.modal=e,"hide-default-actions":"",title:"File validation",message:"File type is incorrect!"},null,f)),s("</div>")}export{p as ssrRender};
//# sourceMappingURL=VaFileUpload.vue_vue&type=template&id=c04ee272&lang.js.map