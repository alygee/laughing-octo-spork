import{resolveComponent as e,openBlock as l,createBlock as o,createVNode as i,createCommentVNode as a,withCtx as d,createTextVNode as t}from"vue";const n={class:"va-file-upload__field"},p={key:0,class:"va-file-upload__field__text"},s=t(" Upload file ");function u(t,u){const c=e("va-button"),f=e("va-file-upload-list"),r=e("va-modal");return l(),o("div",{class:["va-file-upload",{"va-file-upload--dropzone":t.dropzone}],style:t.computedStyle},[i("div",n,[t.dropzone?(l(),o("div",p," Drag’n’drop files or ")):a("v-if",!0),i(c,{class:"va-file-upload__field__button",disabled:t.disabled,color:t.colorComputed,onClick:u[1]||(u[1]=e=>t.callFileDialogue()),icon:"","icon-right":""},{default:d((()=>[s])),_:1},8,["disabled","color"]),i("input",{ref:"fileInput",type:"file",class:"va-file-upload__field__input",accept:t.fileTypes,multiple:"single"!==t.type,disabled:t.disabled,onChange:u[2]||(u[2]=(...e)=>t.changeFieldValue&&t.changeFieldValue(...e))},null,40,["accept","multiple","disabled"])]),t.files.length?(l(),o(f,{key:0,type:t.type,files:t.files,color:t.colorComputed,onRemove:t.removeFile,onRemoveSingle:t.removeSingleFile},null,8,["type","files","color","onRemove","onRemoveSingle"])):a("v-if",!0),i(r,{modelValue:t.modal,"onUpdate:modelValue":u[3]||(u[3]=e=>t.modal=e),"hide-default-actions":"",title:"File validation",message:"File type is incorrect!"},null,8,["modelValue"])],6)}export{u as render};
//# sourceMappingURL=VaFileUpload.vue_vue&type=template&id=c04ee272&lang.js.map
