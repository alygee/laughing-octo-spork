import{__decorate as t}from"tslib";import{watch as e}from"vue";import{Vue as o,mixins as i,Options as s,prop as r}from"../../../node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js";import{getHoverColor as p}from"../../../services/color-config/color-functions.js";import n from"../../../services/color-config/ColorMixin.js";import h from"../../va-icon/index.js";const d=o.with(class{constructor(){this.options=r({type:Array,default:()=>[]}),this.noOptionsText=r({type:String,default:"Items not found"}),this.getSelectedState=r({type:Function,default:()=>!1}),this.getText=r({type:Function}),this.getTrackBy=r({type:Function}),this.multiple=r({type:Boolean,default:!1}),this.search=r({type:String,default:""}),this.hoveredOption=r({type:[String,Object],default:null}),this.tabindex=r({type:Number,default:0})}});let l=class extends(i(n,d)){constructor(){super(...arguments),this.itemRefs={}}created(){e((()=>this.$props.hoveredOption),(t=>{t&&this.scrollToOption(t)}))}beforeUpdate(){this.itemRefs={}}setItemRef(t){return e=>{e&&(this.itemRefs[t]=e)}}get hoveredOptionComputed(){return this.hoveredOption||null}set hoveredOptionComputed(t){this.$emit("update:hoveredOption",t)}get filteredOptions(){return this.$props.search?this.$props.options.filter((t=>{const e=this.$props.getText(t).toUpperCase(),o=this.$props.search.toUpperCase();return e.includes(o)})):this.$props.options}selectOption(t){this.$emit("select-option",t)}getOptionClass(t){return{"va-select-option-list__option":!0,"va-select-option-list__option--selected":this.$props.getSelectedState(t)}}getOptionStyle(t){return{color:this.$props.getSelectedState(t)?this.colorComputed:"inherit",backgroundColor:this.isHovered(t)?p(this.colorComputed):"transparent"}}isHovered(t){return!!this.hoveredOptionComputed&&("string"==typeof t?t===this.hoveredOptionComputed:!!this.getTrackBy&&this.getTrackBy(this.hoveredOptionComputed)===this.getTrackBy(t))}updateHoveredOption(t){this.hoveredOptionComputed=t||null}hoverPreviousOption(){if(this.hoveredOptionComputed){const t=this.filteredOptions.findIndex((t=>this.$props.getText(t)===this.$props.getText(this.hoveredOptionComputed)));this.filteredOptions[t-1]?this.hoveredOptionComputed=this.filteredOptions[t-1]:this.$emit("no-previous-option-to-hover")}else this.filteredOptions.length&&this.updateHoveredOption(this.filteredOptions[this.filteredOptions.length-1])}hoverNextOption(){if(this.hoveredOptionComputed){const t=this.filteredOptions.findIndex((t=>this.$props.getText(t)===this.$props.getText(this.hoveredOptionComputed)));this.filteredOptions[t+1]&&(this.hoveredOptionComputed=this.filteredOptions[t+1])}else this.filteredOptions.length&&this.updateHoveredOption(this.filteredOptions[0])}hoverFirstOption(){this.filteredOptions.length>0&&this.updateHoveredOption(this.filteredOptions[0])}scrollToOption(t){const e=this.itemRefs[this.$props.getTrackBy(t)];e&&e.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}focus(){this.$refs.el&&this.$refs.el.focus()}};l=t([s({name:"VaSelectOptionList",components:{VaIcon:h},emits:["select-option","update:hoveredOption","no-previous-option-to-hover"]})],l);var u=l;export default u;
//# sourceMappingURL=VaSelectOptionList.vue_vue&type=script&lang.js.map
