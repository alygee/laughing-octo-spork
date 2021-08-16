import t from"cleave.js";import{watch as e}from"vue";import{Vue as i,mixins as s,setup as n,prop as o}from"../../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{StatefulMixin as u}from"../../../mixins/StatefulMixin/StatefulMixin.js";import{FormComponentMixin as a}from"../../../mixins/FormComponent/FormComponentMixin.js";const l={creditCard:{creditCard:!0},date:{date:!0,datePattern:["d","m","Y"]},time:{time:!0,timePattern:["h","m"],timeFormat:"24"},numeral:{numeral:!0,numeralThousandsGroupStyle:"thousand"}};const h=i.with(class{constructor(){this.mask=o({type:[String,Object],default:()=>({})}),this.returnRaw={type:Boolean,default:!0},this.clearable=o({type:Boolean,default:!1}),this.clearableIcon=o({type:String,default:"highlight_off"}),this.loading=o({type:Boolean,default:!1}),this.canBeFocused=o({type:Boolean,default:!0}),this.focused=o({type:Boolean,default:void 0}),this.modelValue=o({type:[String,Number],default:""})}});class r extends(s(a,u,h)){constructor(){super(...arguments),this.inputElement=null,this.eventListeners={},this.isFocused=!1,this.context=n((()=>(e((()=>this.$props.mask),(e=>{this.destroyCleaveInstance(),this.inputElement=new t(this.$refs.input,this.getMask(e)),this.inputElement.setRawValue(this.modelValue)})),{})))}get isFocusedComputed(){return void 0===this.$props.focused?this.isFocused:this.$props.focused}set isFocusedComputed(t){void 0===this.$props.focused&&(this.isFocused=t),this.$emit("update:focused",t)}get computedValue(){return this.inputElement&&this.returnRaw&&this.modelValue===this.inputElement.getRawValue()?this.inputElement.getFormattedValue():this.modelValue}get showIcon(){return this.success||this.computedError||this.canBeCleared||this.loading}get canBeCleared(){return this.hasContent&&this.clearable}get hasContent(){return![null,void 0,""].includes(this.modelValue)}onInput(t){("string"==typeof this.mask||Object.keys(this.mask).length)&&this.inputElement&&(this.inputElement.setRawValue(t.target.value),this.returnRaw)?this.$emit("update:modelValue",this.inputElement.getRawValue()):this.$emit("update:modelValue",t.target.value)}onChange(t){("string"==typeof this.mask||Object.keys(this.mask).length)&&this.inputElement&&(this.inputElement.setRawValue(t.target.value),this.returnRaw)?this.$emit("change",this.inputElement.getRawValue()):this.$emit("change",t.target.value)}onClick(t){this.$emit("click",t)}onPrependClick(t){this.$emit("click-prepend",t)}onPrependInnerClick(t){this.$emit("click-prepend-inner",t)}onAppendClick(t){this.$emit("click-append",t)}onAppendInnerClick(t){this.$emit("click-append-inner",t)}onFocus(t){this.canBeFocused&&(this.isFocusedComputed=!0),this.$emit("focus",t)}onBlur(t){this.isFocusedComputed=!1,this.ValidateMixin_onBlur(),this.$emit("blur",t)}onKeyup(t){this.$emit("keyup",t)}onKeydown(t){this.$emit("keydown",t)}getMask(t){return"string"==typeof t?l[t]?{...l[t]}:{}:{...t}}destroyCleaveInstance(){this.inputElement&&this.inputElement.destroy()}initInput(){this.$refs.input&&(this.inputElement=new t(this.$refs.input,this.getMask(this.mask))),this.setEventListeners()}setEventListeners(){this.eventListeners={input:this.onInput,change:this.onChange,click:this.onClick,focus:this.onFocus,blur:this.onBlur,keyup:this.onKeyup,keydown:this.onKeydown}}mounted(){this.initInput()}beforeUnmount(){this.destroyCleaveInstance()}}export{r as InputMixin};
//# sourceMappingURL=InputMixin.js.map
