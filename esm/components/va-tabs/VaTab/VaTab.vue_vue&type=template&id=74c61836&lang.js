import{resolveComponent as e,openBlock as t,createBlock as a,resolveDynamicComponent as c,withCtx as s,createVNode as n,mergeProps as o,toHandlers as l,withKeys as i,renderSlot as r,createCommentVNode as u,toDisplayString as v}from"vue";function d(d,x){const b=e("va-icon");return t(),a(c(d.tagComputed),{class:["va-tab",d.classComputed],href:d.hrefComputed,target:d.target,to:d.to,replace:d.replace,exact:d.exact,"active-class":d.activeClass,"exact-active-class":d.exactActiveClass},{default:s((()=>[n("div",o({class:"va-tab__content"},l(d.context.keyboardFocusListeners),{tabindex:d.tabIndexComputed,onFocus:x[1]||(x[1]=e=>d.onFocus()),onClick:x[2]||(x[2]=e=>d.onTabClick()),onKeydown:x[3]||(x[3]=i((e=>d.onTabKeydown()),["enter"]))}),[r(d.$slots,"default",{},(()=>[d.icon?(t(),a(b,{key:0,class:"va-tab__icon",name:d.icon,size:"small"},null,8,["name"])):u("v-if",!0),n("span",{class:"va-tab__label",textContent:v(d.label)},null,8,["textContent"])]))],16,["tabindex"])])),_:3},8,["href","target","to","replace","exact","active-class","exact-active-class","class"])}export{d as render};
//# sourceMappingURL=VaTab.vue_vue&type=template&id=74c61836&lang.js.map