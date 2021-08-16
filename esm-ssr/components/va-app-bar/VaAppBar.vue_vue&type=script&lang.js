import{__decorate as o}from"tslib";import{Vue as t,mixins as e,setup as r,Options as s,prop as i}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{setupScroll as l}from"../../mixins/ScrollMixin/ScrollMixin.js";import{getBoxShadowColor as d,getGradientBackground as h}from"../../services/color-config/color-functions.js";import a from"../../services/color-config/ColorMixin.js";const n=t.with(class{constructor(){this.gradient=i({type:Boolean,default:!1}),this.bottom=i({type:Boolean,default:!1}),this.target=i({type:[Object,String],default:""}),this.hideOnScroll=i({type:Boolean,default:!1}),this.shadowOnScroll=i({type:Boolean,default:!1}),this.shadowColor=i({type:String,default:""}),this.color=i({type:String,default:void 0})}});let p=class extends(e(a,n)){constructor(){super(...arguments),this.isHidden=!1,this.doShowShadow=!1,this.scrollRoot=r((()=>{let o=0;return l(this.target,(t=>{o<t.target.scrollTop?(this.isHidden=!!this.hideOnScroll,this.doShowShadow=!!this.shadowOnScroll):(this.isHidden=!1,this.doShowShadow=!1),o=t.target.scrollTop}))}))}get colorComputed(){return this.theme.getColor(this.color,"primary")}get shadowColorComputed(){return this.theme.getColor(this.shadowColor,this.colorComputed)}get computedShadow(){if(!this.doShowShadow)return"";return`0px 0px 12px 2px ${d(this.shadowColor?this.shadowColorComputed:this.colorComputed)}`}get transformComputed(){return this.isHidden?this.bottom?"translateY(100%)":"translateY(-100%)":""}get computedStyle(){return{background:this.gradient?h(this.colorComputed):this.colorComputed,"box-shadow":this.computedShadow,transform:this.transformComputed}}get computedClass(){return{"va-app-bar":!0,"va-app-bar--bottom":this.bottom}}};p=o([s({name:"VaAppBar"})],p);var c=p;export default c;
//# sourceMappingURL=VaAppBar.vue_vue&type=script&lang.js.map