import{Vue as e,mixins as t,prop as s}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{normalizeValue as o}from"../../services/utils.js";const l=e.with(class{constructor(){this.modelValue=s({type:Number,default:0}),this.color=s({type:String,default:"primary"}),this.indeterminate=s({type:Boolean,default:!1})}});class r extends(t(l)){get normalizedValue(){return o(this.modelValue)}}export{r as ProgressComponentMixin};
//# sourceMappingURL=ProgressComponentMixin.js.map