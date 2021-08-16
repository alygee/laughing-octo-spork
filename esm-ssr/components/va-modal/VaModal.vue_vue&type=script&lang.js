import{__decorate as e}from"tslib";import{h as t,Transition as s,watch as i}from"vue";import{Vue as o,Options as l,mixins as n,prop as a}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{noop as r}from"lodash-es";import d from"../../services/color-config/ColorMixin.js";import{StatefulMixin as u}from"../../mixins/StatefulMixin/StatefulMixin.js";import p from"../../mixins/ClickOutsideMixin/ClickOutsideMixin.js";import h from"../va-button/index.js";import c from"../va-icon/index.js";const m=o.with(class{constructor(){this.modelValue=a({type:Boolean,default:!1}),this.title=a({type:String,default:""}),this.message=a({type:String,default:""}),this.okText=a({type:String,default:"OK"}),this.cancelText=a({type:String,default:"Cancel"}),this.hideDefaultActions=a({type:Boolean,default:!1}),this.fullscreen=a({type:Boolean,default:!1}),this.mobileFullscreen=a({type:Boolean,default:!0}),this.noDismiss=a({type:Boolean,default:!1}),this.noOutsideDismiss=a({type:Boolean,default:!1}),this.noEscDismiss=a({type:Boolean,default:!1}),this.maxWidth=a({type:String,default:""}),this.maxHeight=a({type:String,default:""}),this.size=a({type:String,default:"medium",validator:e=>["medium","small","large"].includes(e)}),this.fixedLayout=a({type:Boolean,default:!1}),this.withoutTransitions=a({type:Boolean,default:!1}),this.overlay=a({type:Boolean,default:!0}),this.overlayOpacity=a({type:[Number,String],default:void 0}),this.zIndex=a({type:[Number,String],default:void 0})}});class f{constructor(){this.isTransition=a({type:Boolean,default:!0})}}let y=class extends(o.with(f)){render(){const e=this.$slots.default?this.$slots.default(this.$attrs):null;return this.$props.isTransition?t(s,{...this.$attrs},this.$slots):e}};y=e([l({name:"ModalElement"})],y);let v=class extends(n(d,u,p,m)){constructor(){super(...arguments),this.clearClickOutsideEvents=r}created(){i((()=>this.valueComputed),(e=>{if(e){window.addEventListener("keyup",this.listenKeyUp);const e={onClickOutside:()=>{this.$emit("click-outside"),this.cancel()},disabled:this.$props.noOutsideDismiss||this.$props.noDismiss||!1,trigger:"mousedown"};this.$nextTick((()=>{const t=this.$refs.modal;this.clearClickOutsideEvents=this.registerClickOutsideEvents(t,e)}))}else this.clearClickOutsideEvents(),window.removeEventListener("keyup",this.listenKeyUp)}))}get computedClass(){return{"va-modal--fullscreen":this.$props.fullscreen,"va-modal--mobile-fullscreen":this.$props.mobileFullscreen,"va-modal--fixed-layout":this.$props.fixedLayout,[`va-modal--size-${this.$props.size}`]:"medium"!==this.$props.size}}get computedOverlayStyles(){return!!document.querySelectorAll(".va-modal__overlay").length?{}:{"background-color":`rgba(0, 0, 0, ${this.$props.overlayOpacity||.6})`,"z-index":null!=this.$props.zIndex?parseInt(this.$props.zIndex)-10:void 0}}get computedModalContainerStyle(){return{"z-index":this.$props.zIndex}}get hasContentSlot(){return this.$slots.default}get hasHeaderSlot(){return this.$slots.header}get hasFooterSlot(){return this.$slots.footer}show(){this.valueComputed=!0}hide(){this.valueComputed=!1}toggle(){this.valueComputed=!this.valueComputed}cancel(){this.hide(),this.$emit("cancel")}ok(){this.hide(),this.$emit("ok")}listenKeyUp(e){"Escape"!==e.code||this.$props.noEscDismiss||this.$props.noDismiss||this.cancel()}onBeforeEnterTransition(e){this.$emit("before-open",e)}onAfterEnterTransition(e){this.$emit("open",e)}onBeforeLeaveTransition(e){this.$emit("before-close",e)}onAfterLeaveTransition(e){this.$emit("close",e)}};v=e([l({name:"VaModal",components:{VaButton:h,VaIcon:c,ModalElement:y},emits:["update:modelValue","cancel","ok","before-open","open","before-close","close","click-outside"]})],v);var $=v;export default $;
//# sourceMappingURL=VaModal.vue_vue&type=script&lang.js.map
