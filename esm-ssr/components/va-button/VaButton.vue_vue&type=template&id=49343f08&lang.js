import{resolveComponent as e,createVNode as t,resolveDynamicComponent as n,mergeProps as i,toHandlers as o,withCtx as a,openBlock as l,createBlock as s,createCommentVNode as c,renderSlot as r}from"vue";import{ssrRenderVNode as d,ssrRenderClass as u,ssrRenderComponent as v,ssrRenderSlot as _}from"@vue/server-renderer";function p(p,m,g,z){const b=e("va-icon"),f=e("va-progress-circle");d(m,t(n(p.tagComputed),i({class:["va-button",p.computedClass],style:p.computedStyle,disabled:p.disabled,type:p.computedType,href:p.hrefComputed,target:p.target,to:p.to,replace:p.replace,append:p.append,"active-class":p.activeClass,exact:p.exact,"exact-active-class":p.exactActiveClass,tabindex:p.loading?-1:0},o(p.inputListeners),z),{default:a(((e,n,i,o)=>{if(!n)return[t("div",{class:["va-button__content",{"va-button__content--loading":p.loading}]},[p.icon?(l(),s(b,{key:0,name:p.icon,size:p.size,class:"va-button__left-icon"},null,8,["name","size"])):c("v-if",!0),r(p.$slots,"default"),p.iconRight?(l(),s(b,{key:1,name:p.iconRight,size:p.size,class:"va-button__right-icon"},null,8,["name","size"])):c("v-if",!0)],2),p.loading?(l(),s(f,{key:0,class:"va-button__loader",indeterminate:"",size:p.loaderSize,color:p.computedStyle.color,thickness:.15},null,8,["size","color","thickness"])):c("v-if",!0)];n(`<div class="${u([{"va-button__content--loading":p.loading},"va-button__content"])}"${o}>`),p.icon?n(v(b,{name:p.icon,size:p.size,class:"va-button__left-icon"},null,i,o)):n("\x3c!----\x3e"),_(p.$slots,"default",{},null,n,i,o),p.iconRight?n(v(b,{name:p.iconRight,size:p.size,class:"va-button__right-icon"},null,i,o)):n("\x3c!----\x3e"),n("</div>"),p.loading?n(v(f,{class:"va-button__loader",indeterminate:"",size:p.loaderSize,color:p.computedStyle.color,thickness:.15},null,i,o)):n("\x3c!----\x3e")})),_:3}),g)}export{p as ssrRender};
//# sourceMappingURL=VaButton.vue_vue&type=template&id=49343f08&lang.js.map