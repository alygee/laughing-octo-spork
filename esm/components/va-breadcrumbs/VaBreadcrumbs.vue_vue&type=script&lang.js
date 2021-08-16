import{__decorate as t}from"tslib";import{h as o,Fragment as e}from"vue";import{Vue as r,mixins as s,Options as l,prop as i}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{hasOwnProperty as a}from"../../services/utils.js";import u from"../../services/color-config/ColorMixin.js";import{AlignMixin as c}from"../../mixins/AlignMixin.js";const n=r.with(class{constructor(){this.separator=i({type:String,default:"/"}),this.color=i({type:String,default:"gray"}),this.activeColor=i({type:String,default:null}),this.separatorColor=i({type:String,default:null})}});let d=class extends(s(u,c,n)){get computedStyles(){return this.alignComputed}get computedThemesSeparatorColor(){return this.separatorColor?this.computeColor(this.separatorColor):this.colorComputed}get computedThemesActiveColor(){return this.activeColor?this.computeColor(this.activeColor):this.colorComputed}render(){var t,r;const s=(null===(r=null===(t=this.$slots)||void 0===t?void 0:t.default())||void 0===r?void 0:r.reduce(((t,o)=>[...t,...(o&&o.type===e&&o.children?o.children:[o]).filter((t=>{var o,e;return!!(null===(e=null===(o=null==t?void 0:t.type)||void 0===o?void 0:o.name)||void 0===e?void 0:e.match(/VaBreadcrumbsItem$/))}))]),[]))||[],l=s.length,i=t=>t===l-1,u=()=>{const t=(this.$slots.separator?this.$slots.separator():0)||[this.separator];return o("span",{class:["va-breadcrumbs__separator"],style:[{color:this.computedThemesSeparatorColor}]},t)},c=t=>{const o=null==t?void 0:t.props;return!(!o||!a(o,"disabled"))&&(""===o.disabled||Boolean(o.disabled))},n=(t,e)=>o("span",{class:"va-breadcrumbs__item",style:{color:i(e)||c(t)?null:this.computedThemesActiveColor}},[t]),d=[];return l&&s.forEach(((t,o)=>{d.push(n(t,o)),i(o)||d.push(u())})),o("div",{class:"va-breadcrumbs",style:{...this.computedStyles}},d)}};d=t([l({name:"VaBreadcrumbs"})],d);var m=d;export default m;
//# sourceMappingURL=VaBreadcrumbs.vue_vue&type=script&lang.js.map
