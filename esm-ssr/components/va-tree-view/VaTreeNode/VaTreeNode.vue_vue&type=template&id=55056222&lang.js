import{resolveComponent as e,mergeProps as o}from"vue";import{ssrRenderAttrs as i,ssrRenderSlot as r,ssrRenderComponent as c,ssrRenderAttr as l}from"@vue/server-renderer";function n(n,s,t,d){const v=e("va-icon");s(`<div${i(o({class:["va-tree-node",{"va-tree-node--highlighted":n.$props.highlighted}]},d))}>`),n.$slots.checkbox?(s('<div class="va-tree-node__checkbox">'),r(n.$slots,"checkbox",{},null,s,t),s("</div>")):s("\x3c!----\x3e"),n.$props.icon?(s('<div class="va-tree-node__icon">'),s(c(v,{name:n.$props.icon,color:n.theme.getColor("info"),size:24},null,t)),s("</div>")):s("\x3c!----\x3e"),s('<div class="va-tree-node__label">'),r(n.$slots,"default",{},null,s,t),s("</div>"),n.$props.iconRight?(s(`<div class="va-tree-node__icon-right"${l("size",24)}>`),s(c(v,{name:n.$props.iconRight,color:n.theme.getColor("info")},null,t)),s("</div>")):s("\x3c!----\x3e"),s("</div>")}export{n as ssrRender};
//# sourceMappingURL=VaTreeNode.vue_vue&type=template&id=55056222&lang.js.map