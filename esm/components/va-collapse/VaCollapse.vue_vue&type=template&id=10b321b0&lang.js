import{resolveComponent as e,openBlock as o,createBlock as a,createVNode as l,mergeProps as s,toHandlers as c,withKeys as t,renderSlot as n,createCommentVNode as d,toDisplayString as r}from"vue";const u={class:"va-collapse__header__text"};function _(_,i){const p=e("va-icon");return o(),a("div",{class:["va-collapse",_.computedClasses]},[l("div",s({class:"va-collapse__header"},c(_.SetupContext.keyboardFocusListeners),{onClick:i[1]||(i[1]=e=>_.changeValue()),onFocus:i[2]||(i[2]=e=>_.$emit("focus")),onKeydown:[i[3]||(i[3]=t((e=>_.changeValue()),["enter"])),i[4]||(i[4]=t((e=>_.changeValue()),["space"]))],tabindex:_.collapseIndexComputed}),[n(_.$slots,"header",{value:_.valueProxy,hasKeyboardFocus:_.SetupContext.hasKeyboardFocus},(()=>[l("div",{class:"va-collapse__header__content",style:_.contentStyle},[_.icon?(o(),a(p,{key:0,class:"va-collapse__header__icon",name:_.icon,color:_.textColor},null,8,["name","color"])):d("v-if",!0),l("div",u,r(_.header),1),l(p,{class:"va-collapse__header__icon",name:_.valueProxy?"expand_less":"expand_more",color:_.textColor},null,8,["name","color"])],4)]))],16,["tabindex"]),l("div",{class:"va-collapse__body",ref:"body",style:_.stylesComputed},[n(_.$slots,"default")],4)],2)}export{_ as render};
//# sourceMappingURL=VaCollapse.vue_vue&type=template&id=10b321b0&lang.js.map
