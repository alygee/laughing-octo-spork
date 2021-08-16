import{__decorate as e}from"tslib";import{inject as t,provide as s}from"vue";import{Vue as o,mixins as r,setup as n,Options as i,prop as d}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{FormServiceKey as l}from"./consts.js";const m=o.with(class{constructor(){this.autofocus=d({type:Boolean,default:!1}),this.tag=d({type:String,default:"div"})}});let a=class extends(r(m)){constructor(){super(...arguments),this.nestedFormElements=[],this.parentFormProvider=n((()=>({...t(l,void 0)}))),this.formProvider=n((()=>{const e={onChildMounted:e=>this.childMountedHandler(e),onChildUnmounted:e=>this.childUnmountedHandler(e)};return s(l,e),e}))}childMountedHandler(e){this.nestedFormElements.push(e)}childUnmountedHandler(e){this.nestedFormElements=this.nestedFormElements.filter((t=>t!==e))}mounted(){Object.keys(this.parentFormProvider).length&&this.parentFormProvider.onChildMounted(this),this.autofocus&&this.$nextTick((()=>{this.focus()}))}unmounted(){Object.keys(this.parentFormProvider).length&&this.parentFormProvider.onChildUnmounted(this)}reset(){this.nestedFormElements.filter((({reset:e})=>e)).forEach((e=>{e.reset()}))}resetValidation(){this.nestedFormElements.filter((({resetValidation:e})=>e)).forEach((e=>{e.resetValidation()}))}focus(){const e=this.nestedFormElements.find((({focus:e})=>e));e&&e.focus()}focusInvalid(){const e=this.nestedFormElements.filter((({hasError:e})=>e)).find((e=>e.hasError()));if(e)e.focus();else{this.nestedFormElements.filter((({nestedFormElements:e})=>e)).forEach((e=>e.focusInvalid()))}}validate(){let e=!0;return this.nestedFormElements.filter((({validate:e})=>e)).forEach((t=>{t.validate()||(e=!1)})),this.$emit("validation",e),e}};a=e([i({name:"VaForm",emits:["validation"]})],a);var h=a;export default h;
//# sourceMappingURL=VaForm.vue_vue&type=script&lang.js.map
