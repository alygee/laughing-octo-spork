import{resolveComponent as e,openBlock as s,createBlock as r,withCtx as o,createVNode as c,mergeProps as a,toHandlers as l,withModifiers as n,renderSlot as i,createTextVNode as t,toDisplayString as p,createCommentVNode as d}from"vue";const u={class:"va-switch__track-label"},v={class:"va-switch__checker-wrapper"},b={class:"va-switch__checker"};function k(k,_){const h=e("va-progress-circle"),m=e("va-input-wrapper");return s(),r(m,{class:["va-switch",k.computedClass],disabled:k.$props.disabled,success:k.$props.success,messages:k.$props.messages,error:k.computedError,"error-messages":k.computedErrorMessages,"error-count":k.$props.errorCount},{default:o((()=>[c("div",{class:"va-switch__container",tabindex:"-1",onBlur:_[7]||(_[7]=(...e)=>k.onBlur&&k.onBlur(...e)),ref:"container"},[c("div",{class:"va-switch__inner",onClick:_[4]||(_[4]=e=>k.onWrapperClick())},[c("input",a({class:"va-switch__input",ref:"input",type:"checkbox",role:"switch","aria-checked":k.isChecked,id:k.$props.id,name:k.$props.name,readonly:"",disabled:k.$props.disabled},l(k.SetupContext.keyboardFocusListeners),{onFocus:_[1]||(_[1]=(...e)=>k.onFocus&&k.onFocus(...e)),onBlur:_[2]||(_[2]=(...e)=>k.onBlur&&k.onBlur(...e)),onKeypress:_[3]||(_[3]=n((e=>k.toggleSelection()),["prevent"]))}),null,16,["aria-checked","id","name","disabled"]),c("div",{class:"va-switch__track",style:k.trackStyle},[c("div",u,[i(k.$slots,"innerLabel",{},(()=>[t(p(k.computedInnerLabel),1)]))]),c("div",v,[c("span",b,[k.$props.loading?(s(),r(h,{key:0,indeterminate:"",size:k.progressCircleSize,color:k.trackStyle.backgroundColor},null,8,["size","color"])):d("v-if",!0)])])],4)]),c("div",{class:"va-switch__label",ref:"label",onBlur:_[5]||(_[5]=(...e)=>k.onBlur&&k.onBlur(...e)),style:k.labelStyle,onClick:_[6]||(_[6]=e=>k.onWrapperClick())},[i(k.$slots,"default",{},(()=>[t(p(k.computedLabel),1)]))],36)],544)])),_:3},8,["class","disabled","success","messages","error","error-messages","error-count"])}export{k as render};
//# sourceMappingURL=VaSwitch.vue_vue&type=template&id=57ce0148&lang.js.map