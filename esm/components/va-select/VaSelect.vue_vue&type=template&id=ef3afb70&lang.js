import{resolveComponent as e,openBlock as o,createBlock as t,withCtx as n,createVNode as r,withKeys as s,withModifiers as p,createCommentVNode as d,createSlots as l,renderSlot as a}from"vue";const c={class:"va-input__append"},i={class:"va-select__dropdown__content"};function u(u,v,h,m,b,$){const g=e("va-icon"),f=e("va-input"),w=e("va-select-option-list"),x=e("va-dropdown-content"),O=e("va-dropdown"),y=e("va-input-wrapper");return o(),t(y,{success:u.$props.success,messages:u.$props.messages,error:u.$props.error,"error-messages":u.computedErrorMessages,style:{width:u.$props.width}},{default:n((()=>[r(O,{ref:"dropdown",modelValue:u.showDropdownContentComputed,"onUpdate:modelValue":v[18]||(v[18]=e=>u.showDropdownContentComputed=e),position:u.$props.position,disabled:u.$props.disabled,"max-height":u.$props.maxHeight,fixed:u.$props.fixed,"close-on-content-click":u.closeOnContentClick,trigger:"none",class:"va-select__dropdown","keep-anchor-width":"","boundary-body":"",stateful:!1},{anchor:n((()=>[r("div",{class:"va-select",ref:"select",tabindex:u.tabIndexComputed,onFocus:v[1]||(v[1]=(...e)=>u.focus&&u.focus(...e)),onBlur:v[2]||(v[2]=(...e)=>u.blur&&u.blur(...e)),onKeydown:[v[3]||(v[3]=s(p((e=>u.onSelectClick()),["stop","prevent"]),["enter"])),v[4]||(v[4]=s(p((e=>u.onSelectClick()),["stop","prevent"]),["space"]))],onClick:v[5]||(v[5]=p((e=>u.onSelectClick()),["prevent"]))},[d(" We show messages outside of dropdown to draw dropdown content under the input "),r(f,{"model-value":u.valueComputedString,success:u.$props.success,error:u.computedError,clearable:u.showClearIcon,clearableIcon:u.$props.clearableIcon,color:u.$props.color,label:u.$props.label,placeholder:u.$props.placeholder,loading:u.$props.loading,disabled:u.$props.disabled,outline:u.$props.outline,bordered:u.$props.bordered,focused:u.isFocusedComputed,tabindex:-1,readonly:"",onCleared:u.reset},l({appendInner:n((()=>[r("div",c,[u.$slots.appendInner?a(u.$slots,"appendInner",{key:0}):d("v-if",!0),r(g,{color:u.colorComputed,name:u.toggleIcon},null,8,["color","name"])])])),_:2},[u.$slots.prepend?{name:"prepend",fn:n((()=>[a(u.$slots,"prepend")]))}:void 0,u.$slots.append?{name:"append",fn:n((()=>[a(u.$slots,"append")]))}:void 0,u.$slots.prependInner?{name:"prependInner",fn:n((()=>[a(u.$slots,"prependInner")]))}:void 0,u.$slots.content?{name:"content",fn:n((({value:e,focus:o})=>[a(u.$slots,"content",{valueString:e,focus:o,value:u.valueComputed})]))}:void 0]),1032,["model-value","success","error","clearable","clearableIcon","color","label","placeholder","loading","disabled","outline","bordered","focused","onCleared"])],40,["tabindex"])])),default:n((()=>[r(x,{onKeyup:v[17]||(v[17]=s(p((()=>{}),["stop"]),["enter"])),onKeydown:[s(p(u.hideAndFocus,["prevent"]),["esc"]),s(u.hideDropdown,["tab"])]},{default:n((()=>[u.showSearchInput?(o(),t(f,{key:0,id:u.$props.id,ref:"searchBar",modelValue:u.searchInput,"onUpdate:modelValue":v[6]||(v[6]=e=>u.searchInput=e),class:"va-select__input",placeholder:"Search",removable:"",name:u.$props.name,tabindex:u.tabindex+1,bordered:!0,onKeydown:[v[7]||(v[7]=s(p((e=>u.hoverPreviousOption()),["stop","prevent"]),["up"])),v[8]||(v[8]=s(p((e=>u.hoverPreviousOption()),["stop","prevent"]),["left"])),v[9]||(v[9]=s(p((e=>u.hoverNextOption()),["stop","prevent"]),["down"])),v[10]||(v[10]=s(p((e=>u.hoverNextOption()),["stop","prevent"]),["right"])),v[11]||(v[11]=s(p((e=>u.selectOrAddOption()),["prevent"]),["enter"]))],onFocus:v[12]||(v[12]=e=>u.hoveredOption=null)},null,8,["id","modelValue","name","tabindex"])):d("v-if",!0),r("div",i,[r(w,{ref:"optionList",hoveredOption:u.hoveredOption,"onUpdate:hoveredOption":v[13]||(v[13]=e=>u.hoveredOption=e),style:{maxHeight:u.$props.maxHeight},options:u.filteredOptions,"selected-value":u.valueComputed,"get-selected-state":u.checkIsOptionSelected,"get-text":u.getText,"get-track-by":u.getTrackBy,search:u.searchInput,"no-options-text":u.$props.noOptionsText,color:u.$props.color,tabindex:u.tabindex+1,onSelectOption:u.selectOption,onNoPreviousOptionToHover:v[14]||(v[14]=e=>u.focusSearchBar()),onKeydown:[v[15]||(v[15]=s(p((e=>u.selectHoveredOption()),["stop","prevent"]),["enter"])),v[16]||(v[16]=s(p((e=>u.selectHoveredOption()),["stop","prevent"]),["space"])),u.onHintedSearch]},null,8,["hoveredOption","style","options","selected-value","get-selected-state","get-text","get-track-by","search","no-options-text","color","tabindex","onSelectOption","onKeydown"])])])),_:1},8,["onKeydown"])])),_:1},8,["modelValue","position","disabled","max-height","fixed","close-on-content-click"])])),_:1},8,["success","messages","error","error-messages","style"])}export{u as render};
//# sourceMappingURL=VaSelect.vue_vue&type=template&id=ef3afb70&lang.js.map