import{resolveComponent as e,mergeProps as r}from"vue";import{ssrRenderAttrs as o,ssrRenderSlot as t,ssrRenderComponent as c,ssrRenderAttr as i}from"@vue/server-renderer";function a(a,s,l,n){const m=e("va-progress-circle"),v=e("va-icon");s(`<div${o(r({class:"va-avatar",ref:"avatar",style:a.computedStyle},n))}>`),t(a.$slots,"default",{},(()=>{a.loading?s(c(m,{indeterminate:"",size:a.sizeComputed,color:a.colorComputed},null,l)):a.src?s(`<img${i("src",a.src)}>`):a.icon?s(c(v,{name:a.icon},null,l)):s("\x3c!----\x3e")}),s,l),s("</div>")}export{a as ssrRender};
//# sourceMappingURL=VaAvatar.vue_vue&type=template&id=98de6a30&lang.js.map