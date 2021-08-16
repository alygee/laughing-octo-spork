import{__decorate as t}from"tslib";import{watch as e}from"vue";import{Vue as o,mixins as s,setup as i,Options as r,prop as a}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{getBoxShadowColor as l,getFocusColor as u,getHoverColor as d,getTextColor as n}from"../../services/color-config/color-functions.js";import h from"../../services/color-config/ColorMixin.js";import{RouterLinkMixin as c}from"../../mixins/RouterLinkMixin/RouterLinkMixin.js";import{StatefulMixin as m}from"../../mixins/StatefulMixin/StatefulMixin.js";import p from"../../composables/useKeyboardOnlyFocus.js";import f from"../va-icon/index.js";const b=o.with(class{constructor(){this.modelValue=a({type:Boolean,default:!0}),this.closeable=a({type:Boolean,default:!1}),this.color=a({type:String,default:"primary"}),this.outline=a({type:Boolean,default:!1}),this.flat=a({type:Boolean,default:!1}),this.icon=a({type:String,default:""}),this.disabled=a({type:Boolean,default:!1}),this.square=a({type:Boolean,default:!1}),this.tag=a({type:String,default:"span"}),this.size=a({type:String,default:"medium",validator:t=>["medium","small","large"].includes(t)}),this.shadow=a({type:Boolean,default:!1})}});let y=class extends(s(c,m,h,b)){constructor(){super(...arguments),this.SetupContext=i((()=>{const{hasKeyboardFocus:t,keyboardFocusListeners:e}=p();return{hasKeyboardFocus:t,keyboardFocusListeners:e}})),this.hoverState=!1,this.focusState=!1}created(){e((()=>this.hoverState),(t=>{this.updateHoverState(t)}))}get iconSize(){return{small:"0.875rem",medium:"1rem",large:"1.25rem"}[this.size]}get indexComputed(){return this.disabled?-1:0}get computedClass(){return{"va-chip--small":"small"===this.size,"va-chip--large":"large"===this.size,"va-chip--square":this.square,"va-chip--disabled":this.disabled}}get shadowStyle(){if(!(!this.shadow||this.flat||this.outline||this.disabled||this.SetupContext.hasKeyboardFocus))return"0 0.125rem 0.19rem 0 "+l(this.colorComputed)}get computedStyle(){const t=this.outline?this.colorComputed:"",e={color:this.colorComputed,borderColor:t,background:"",boxShadow:this.shadowStyle};return this.outline||this.flat?this.SetupContext.hasKeyboardFocus?e.background=u(this.colorComputed):this.hoverState&&(e.background=d(this.colorComputed)):(e.color=n(this.colorComputed),e.background=this.colorComputed),e}updateHoverState(t){this.hoverState=t}close(){this.disabled||(this.valueComputed=!1)}};y=t([r({name:"VaChip",components:{VaIcon:f},emits:["focus"]})],y);var S=y;export default S;
//# sourceMappingURL=VaChip.vue_vue&type=script&lang.js.map