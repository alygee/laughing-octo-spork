import{resolveComponent as e,mergeProps as n,withCtx as a,createVNode as o,toHandlers as s,withModifiers as l,renderSlot as c,createTextVNode as r,toDisplayString as i}from"vue";import{ssrRenderComponent as t,ssrRenderStyle as d,ssrRenderAttr as u,ssrRenderSlot as b,ssrInterpolate as p}from"@vue/server-renderer";function m(m,v,x,_){const k=e("va-input-wrapper"),h=e("va-icon");v(t(k,n({class:["va-checkbox",m.computedClass],disabled:m.disabled,success:m.success,messages:m.messages,error:m.computedError,"error-messages":m.computedErrorMessages,"error-count":m.errorCount},_),{default:a(((e,a,v,x)=>{if(!a)return[o("div",{class:"va-checkbox__input-container",onClick:e=>m.onWrapperClick(),tabindex:"-1",onBlur:m.onBlur,ref:"container"},[o("div",{class:"va-checkbox__square",style:m.inputStyle},[o("input",n({ref:"input",id:m.id,name:m.name,type:"checkbox",role:"checkbox",readonly:""},s(m.SetupContext.keyboardFocusListeners),{onFocus:m.onFocus,onBlur:e=>m.onBlur(e),class:"va-checkbox__input",onKeypress:l((e=>m.toggleSelection()),["prevent"]),disabled:m.disabled,indeterminate:m.indeterminate}),null,16,["id","name","onFocus","onBlur","onKeypress","disabled","indeterminate"]),o(h,{class:"va-checkbox__icon",name:m.computedIconName,size:"20px"},null,8,["name"])],4),o("div",{class:"va-checkbox__label",style:m.labelStyle,ref:"label",tabindex:"-1",onBlur:m.onBlur},[c(m.$slots,"label",{},(()=>[r(i(m.label),1)]))],44,["onBlur"])],40,["onClick","onBlur"])];a(`<div class="va-checkbox__input-container" tabindex="-1"${x}><div class="va-checkbox__square" style="${d(m.inputStyle)}"${x}><input${u("id",m.id)}${u("name",m.name)} type="checkbox" role="checkbox" readonly class="va-checkbox__input"${m.disabled?" disabled":""}${u("indeterminate",m.indeterminate)}${x}>`),a(t(h,{class:"va-checkbox__icon",name:m.computedIconName,size:"20px"},null,v,x)),a(`</div><div class="va-checkbox__label" style="${d(m.labelStyle)}" tabindex="-1"${x}>`),b(m.$slots,"label",{},(()=>{a(`${p(m.label)}`)}),a,v,x),a("</div></div>")})),_:3},x))}export{m as ssrRender};
//# sourceMappingURL=VaCheckbox.vue_vue&type=template&id=828af530&lang.js.map