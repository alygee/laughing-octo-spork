import{resolveComponent as e,mergeProps as o,withCtx as r,createVNode as t,toDisplayString as l}from"vue";import{ssrRenderAttrs as a,ssrRenderList as i,ssrRenderComponent as p,ssrRenderStyle as s,ssrInterpolate as n}from"@vue/server-renderer";function c(c,u,d,m){const v=e("va-rating-item");u(`<div${a(o({class:["va-rating",c.classList]},m))}><div class="va-rating__item-wrapper">`),c.$props.numbers?(u("\x3c!--[--\x3e"),i(c.$props.max,(e=>{u(p(v,{key:e,class:"va-rating__number-item",halves:c.$props.halves,hover:c.hoverEnabled,size:c.$props.size,color:c.$props.color,"empty-icon-color":c.$props.unselectedColor,tabindex:c.tabIndex,modelValue:c.getItemValue(e)},{default:r((({props:o},r,a,i)=>{if(!r)return[t("button",{onClick:o.onClick,class:"va-rating__number-item",tabindex:"-1",style:{background:.5===o.value?`linear-gradient(90deg, ${c.colorComputed} 50%, ${c.focusColor} 50%`:o.value?c.colorComputed:c.focusColor,color:o.value?"#fff":c.colorComputed,width:c.sizeComputed,height:c.sizeComputed,fontSize:c.fontSizeComputed,borderRadius:.125*c.SizeMixin_fontSize+"rem"}},l(e),13,["onClick"])];r(`<button class="va-rating__number-item" tabindex="-1" style="${s({background:.5===o.value?`linear-gradient(90deg, ${c.colorComputed} 50%, ${c.focusColor} 50%`:o.value?c.colorComputed:c.focusColor,color:o.value?"#fff":c.colorComputed,width:c.sizeComputed,height:c.sizeComputed,fontSize:c.fontSizeComputed,borderRadius:.125*c.SizeMixin_fontSize+"rem"})}"${i}>${n(e)}</button>`)})),_:2},d))})),u("\x3c!--]--\x3e")):(u("\x3c!--[--\x3e"),i(c.$props.max,(e=>{u(p(v,{key:e,halves:c.$props.halves,hover:c.hoverEnabled,"filled-icon-name":c.$props.icon,"half-icon-name":c.$props.halfIcon,"empty-icon-name":c.$props.emptyIcon,size:c.$props.size,color:c.$props.color,"empty-icon-color":c.$props.unselectedColor,tabindex:c.tabIndex,modelValue:c.getItemValue(e)},null,d))})),u("\x3c!--]--\x3e")),u("</div>"),c.$props.texts.length===c.$props.max?u(`<span class="va-rating__text-wrapper" style="${s({color:c.computeColor(c.$props.textColor)})}">${n(c.$props.texts[Math.round(c.valueProxy)-1])}</span>`):u("\x3c!----\x3e"),u("</div>")}export{c as ssrRender};
//# sourceMappingURL=VaRating.vue_vue&type=template&id=10f2d130&lang.js.map