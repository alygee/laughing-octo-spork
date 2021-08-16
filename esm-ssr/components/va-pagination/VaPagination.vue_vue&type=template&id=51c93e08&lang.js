import{resolveComponent as o,mergeProps as e,withCtx as n,createTextVNode as l,toDisplayString as i,openBlock as a,createBlock as s,createCommentVNode as t,renderSlot as r,Fragment as u,renderList as p,withDirectives as d,withKeys as c,vModelText as $}from"vue";import{ssrRenderComponent as b,ssrRenderSlot as f,ssrRenderList as y,ssrInterpolate as k,ssrRenderStyle as g,ssrRenderClass as v,ssrRenderAttr as h}from"@vue/server-renderer";function V(V,x,I,C){const L=o("va-button-group"),w=o("va-button");V.showPagination?x(b(L,e({class:"va-pagination",flat:V.$props.flat,size:V.$props.size,color:V.$props.color,outline:""},C),{default:n(((o,e,x,I)=>{if(!e)return[V.showBoundaryLinks?(a(),s(w,{key:0,disabled:V.$props.disabled||1===V.currentValue,icon:V.$props.boundaryIconLeft,onClick:o=>V.onUserInput(1)},null,8,["disabled","icon","onClick"])):t("v-if",!0),V.showDirectionLinks?(a(),s(w,{key:1,outline:"",disabled:V.$props.disabled||1===V.currentValue,icon:V.$props.directionIconLeft,onClick:o=>V.onUserInput(V.currentValue-1)},null,8,["disabled","icon","onClick"])):t("v-if",!0),V.$props.input?d((a(),s("input",{key:3,ref:"htmlInput",class:["va-pagination__input va-button",{"va-pagination__input--flat":V.$props.flat}],style:{cursor:"default",color:V.computeColor(V.$props.color),opacity:V.$props.disabled?.4:1},onKeydown:c(V.changeValue,["enter"]),onFocus:V.focusInput,onBlur:V.changeValue,disabled:V.$props.disabled,placeholder:`${V.currentValue}/${V.lastPage}`,"onUpdate:modelValue":o=>V.inputValue=o},null,46,["onKeydown","onFocus","onBlur","disabled","placeholder","onUpdate:modelValue"])),[[$,V.inputValue]]):r(V.$slots,"default",{key:2},(()=>[(a(!0),s(u,null,p(V.paginationRange,((o,e)=>(a(),s(w,{style:V.activeButtonStyle(o),outline:"",key:e,disabled:V.$props.disabled||"..."===o,class:{"va-button--ellipsis":"..."===o},onClick:e=>V.onUserInput(o)},{default:n((()=>[l(i(o),1)])),_:2},1032,["style","disabled","class","onClick"])))),128))])),V.showDirectionLinks?(a(),s(w,{key:4,outline:"",disabled:V.$props.disabled||V.currentValue===V.lastPage,icon:V.$props.directionIconRight,onClick:o=>V.onUserInput(V.currentValue+1)},null,8,["disabled","icon","onClick"])):t("v-if",!0),V.showBoundaryLinks?(a(),s(w,{key:5,outline:"",disabled:V.$props.disabled||V.currentValue===V.lastPage,icon:V.$props.boundaryIconRight,onClick:o=>V.onUserInput(V.lastPage)},null,8,["disabled","icon","onClick"])):t("v-if",!0)];V.showBoundaryLinks?e(b(w,{disabled:V.$props.disabled||1===V.currentValue,icon:V.$props.boundaryIconLeft},null,x,I)):e("\x3c!----\x3e"),V.showDirectionLinks?e(b(w,{outline:"",disabled:V.$props.disabled||1===V.currentValue,icon:V.$props.directionIconLeft},null,x,I)):e("\x3c!----\x3e"),V.$props.input?e(`<input style="${g({cursor:"default",color:V.computeColor(V.$props.color),opacity:V.$props.disabled?.4:1})}" class="${v([{"va-pagination__input--flat":V.$props.flat},"va-pagination__input va-button"])}"${V.$props.disabled?" disabled":""}${h("placeholder",`${V.currentValue}/${V.lastPage}`)}${h("value",V.inputValue)}${I}>`):f(V.$slots,"default",{},(()=>{e("\x3c!--[--\x3e"),y(V.paginationRange,((o,a)=>{e(b(w,{style:V.activeButtonStyle(o),outline:"",key:a,disabled:V.$props.disabled||"..."===o,class:{"va-button--ellipsis":"..."===o}},{default:n(((e,n,a,s)=>{if(!n)return[l(i(o),1)];n(`${k(o)}`)})),_:2},x,I))})),e("\x3c!--]--\x3e")}),e,x,I),V.showDirectionLinks?e(b(w,{outline:"",disabled:V.$props.disabled||V.currentValue===V.lastPage,icon:V.$props.directionIconRight},null,x,I)):e("\x3c!----\x3e"),V.showBoundaryLinks?e(b(w,{outline:"",disabled:V.$props.disabled||V.currentValue===V.lastPage,icon:V.$props.boundaryIconRight},null,x,I)):e("\x3c!----\x3e")})),_:3},I)):x("\x3c!----\x3e")}export{V as ssrRender};
//# sourceMappingURL=VaPagination.vue_vue&type=template&id=51c93e08&lang.js.map
