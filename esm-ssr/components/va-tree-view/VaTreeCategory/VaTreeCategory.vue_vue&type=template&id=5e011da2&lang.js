import{resolveComponent as e,mergeProps as o}from"vue";import{ssrRenderAttrs as r,ssrRenderComponent as c,ssrRenderSlot as a,ssrInterpolate as t}from"@vue/server-renderer";function i(i,s,l,v){const d=e("square-with-icon"),n=e("va-icon");s(`<div${r(o({class:"va-tree-category"},v))}><div class="va-tree-category__header"><div class="va-tree-category__header-switcher">`),s(c(d,{icon:i.isOpenCached?"remove":"add",color:i.setupContext.treeRoot.color||i.colorComputed},null,l)),s("</div>"),i.$slots.checkbox?(s('<div class="va-tree-category__header-checkbox">'),a(i.$slots,"checkbox",{},null,s,l),s("</div>")):s("\x3c!----\x3e"),i.$props.icon?(s('<div class="va-tree-category__header-icon">'),s(c(n,{name:i.$props.icon,color:i.theme.getColor("info")},null,l)),s("</div>")):s("\x3c!----\x3e"),s(`<div class="va-tree-category__header-label">${t(i.$props.label)}</div></div>`),i.isOpenCached?(s('<div class="va-tree-category__list-container"><div class="va-tree-category__list-internal-container">'),a(i.$slots,"default",{},null,s,l),s("</div></div>")):s("\x3c!----\x3e"),s("</div>")}export{i as ssrRender};
//# sourceMappingURL=VaTreeCategory.vue_vue&type=template&id=5e011da2&lang.js.map
