import{__decorate as t}from"tslib";import{Vue as o,mixins as e,Options as i,prop as n}from"../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import s from"../../services/color-config/ColorMixin.js";import{SizeMixin as l}from"../../mixins/SizeMixin.js";import a from"../va-dropdown/index.js";import r from"../va-button/index.js";import d from"../va-button-group/index.js";const p=o.with(class{constructor(){this.modelValue=n({type:Boolean,default:!1}),this.color=n({type:String,default:"primary"}),this.outline=n({type:Boolean,default:!1}),this.disableButton=n({type:Boolean,default:!1}),this.disableDropdown=n({type:Boolean,default:!1}),this.flat=n({type:Boolean,default:!1}),this.disabled=n({type:Boolean,default:!1}),this.size=n({type:String,default:"medium",validator:t=>["medium","small","large"].includes(t)}),this.keepAnchorWidth=n({type:Boolean,default:!1}),this.split=n({type:Boolean}),this.splitTo=n({type:String,default:""}),this.icon=n({type:String,default:"expand_more"}),this.openedIcon=n({type:String,default:"expand_less"}),this.position=n({type:String,default:"bottom"}),this.label=n({type:String}),this.offset=n({type:[Array,Number],default:()=>[]}),this.closeOnContentClick=n({type:Boolean,default:!0}),this.stateful=n({type:Boolean,default:!0})}});let u=class extends(e(l,s,p)){get computedIcon(){return this.showDropdown?this.$props.openedIcon:this.$props.icon}get computedClass(){return{"va-button-dropdown":!0,"va-button-dropdown--split":this.split,"va-button-dropdown--normal":"normal"===this.size,"va-button-dropdown--large":"large"===this.size,"va-button-dropdown--small":"small"===this.size}}get showDropdown(){return this.modelValue}set showDropdown(t){this.$emit("update:modelValue",t)}click(t){this.$emit("click",t)}mainButtonClick(t){this.$emit("main-button-click",t)}};u=t([i({name:"VaButtonDropdown",components:{VaButtonGroup:d,VaButton:r,VaDropdown:a},emits:["click","main-button-click","update:modelValue"]})],u);var m=u;export default m;
//# sourceMappingURL=VaButtonDropdown.vue_vue&type=script&lang.js.map