import{resolveComponent as o,mergeProps as e,withCtx as p,createVNode as r,openBlock as s,createBlock as t,createCommentVNode as v,toDisplayString as i,renderSlot as l}from"vue";import{ssrRenderComponent as a,ssrRenderStyle as c,ssrInterpolate as d,ssrRenderSlot as $}from"@vue/server-renderer";function n(n,u,_,m){const f=o("va-dropdown"),x=o("va-icon");u(a(f,e({class:"va-popover",position:n.$props.placement,disabled:n.$props.disabled,trigger:n.$props.trigger,hoverOverTimeout:n.$props.hoverOverTimeout,hoverOutTimeout:n.$props.hoverOutTimeout,"close-on-click-outside":n.$props.autoHide,modelValue:n.modelValue},m),{default:p(((o,e,p,l)=>{if(!e)return[r("div",{class:"va-popover__content-wrapper"},[r("div",{class:"va-popover__content",style:n.computedPopoverStyle},[n.$props.icon?(s(),t("div",{key:0,class:"va-popover__icon"},[r(x,{name:n.$props.icon,color:n.$props.color},null,8,["name","color"])])):v("v-if",!0),n.$props.title||n.$props.message?(s(),t("div",{key:1},[n.$props.title?(s(),t("div",{key:0,class:"va-popover__title"},i(n.$props.title),1)):v("v-if",!0),r("div",{class:"va-popover__text"},i(n.$props.message),1)])):v("v-if",!0)],4)])];e(`<div class="va-popover__content-wrapper"${l}><div class="va-popover__content" style="${c(n.computedPopoverStyle)}"${l}>`),n.$props.icon?(e(`<div class="va-popover__icon"${l}>`),e(a(x,{name:n.$props.icon,color:n.$props.color},null,p,l)),e("</div>")):e("\x3c!----\x3e"),n.$props.title||n.$props.message?(e(`<div${l}>`),n.$props.title?e(`<div class="va-popover__title"${l}>${d(n.$props.title)}</div>`):e("\x3c!----\x3e"),e(`<div class="va-popover__text"${l}>${d(n.$props.message)}</div></div>`)):e("\x3c!----\x3e"),e("</div></div>")})),anchor:p(((o,e,p,r)=>{if(!e)return[l(n.$slots,"default")];$(n.$slots,"default",{},null,e,p,r)})),_:1},_))}export{n as ssrRender};
//# sourceMappingURL=VaPopover.vue_vue&type=template&id=7c5e74de&lang.js.map
