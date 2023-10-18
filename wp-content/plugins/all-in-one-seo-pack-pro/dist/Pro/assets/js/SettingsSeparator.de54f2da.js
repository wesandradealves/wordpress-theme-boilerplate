import{k as C}from"./links.4ebb20e1.js";import{d}from"./isArrayLikeObject.86aee886.js";import{G as x,a as L}from"./Row.eead99c7.js";import{r as m,o,d as n,w as i,a as s,y as c,b as l,c as _,D as f,n as g,F as w,f as M,C as q,g as V}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as b}from"./_plugin-vue_export-helper.d7c6d548.js";const B={setup(){return{settingsStore:C()}},emits:["update:separator"],components:{GridColumn:x,GridRow:L},props:{optionsSeparator:{type:String,required:!0},showMoreSlug:{type:String,required:!0}},data(){return{strings:{custom:this.$t.__("Custom separator:",this.$td),showMore:this.$t.__("Show More",this.$td),showLess:this.$t.__("Show Less",this.$td)},showMoreSeparators:!1,showMoreInitial:!0,customSeparator:null,separators:["&ndash;","&raquo;","&rsaquo;","&#x2023;","&rarr;","&bull;","&#47;","&#124;"],moreSeparators:["&#45;","&mdash;","&laquo;","&larr;","&gt;","&ge;","&#92;","&#43;","&#9658;"]}},watch:{showMoreSeparators(e){if(this.showMoreInitial){this.showMoreInitial=!1;return}this.settingsStore.toggleRadio({slug:this.showMoreSlug,value:e})},customSeparator(e){e!==null&&(this.$emit("update:separator",d(e)),this.separators.concat(this.moreSeparators).concat(this.decodedSeparators).concat(this.decodedMoreSeparators).includes(e)&&(this.customSeparator=null))}},computed:{hiddenSeparator(){return this.optionsSeparator===this.customSeparator||this.decodedMoreSeparators.includes(this.optionsSeparator)?this.optionsSeparator:null},decodedSeparators(){return this.separators.map(e=>d(e))},decodedMoreSeparators(){return this.moreSeparators.map(e=>d(e))},decodedCustomSeparator(){return d(this.hiddenSeparator)}},methods:{setSeparator(e){this.customSeparator=null,this.$emit("update:separator",e)}},mounted(){this.showMoreSeparators=this.settingsStore.settings.toggledRadio[this.showMoreSlug],this.customSeparator=this.decodedSeparators.concat(this.decodedMoreSeparators).includes(this.optionsSeparator)?null:this.optionsSeparator}},N={class:"active separator"},R=["onClick"],A=["onClick"],G={class:"show-more"},I={class:"custom-separator"},z={class:"show-more"};function D(e,u,S,E,t,a){const p=m("grid-column"),y=m("base-input"),v=m("grid-row");return o(),n(v,{class:"aioseo-separators"},{default:i(()=>[!t.showMoreSeparators&&a.hiddenSeparator?(o(),n(p,{key:0,xs:"2",sm:"1"},{default:i(()=>[s("div",N,c(a.decodedCustomSeparator),1)]),_:1})):l("",!0),(o(!0),_(w,null,f(a.decodedSeparators,(r,h)=>(o(),n(p,{xs:"2",sm:"1",key:h},{default:i(()=>[s("div",{onClick:k=>a.setSeparator(r),class:g(["separator",{active:S.optionsSeparator===r}])},c(r),11,R)]),_:2},1024))),128)),t.showMoreSeparators?(o(!0),_(w,{key:1},f(a.decodedMoreSeparators,(r,h)=>(o(),n(p,{xs:"2",sm:"1",key:`m_${h}`},{default:i(()=>[s("div",{onClick:k=>a.setSeparator(r),class:g(["separator",{active:S.optionsSeparator===r}])},c(r),11,A)]),_:2},1024))),128)):l("",!0),t.showMoreSeparators?l("",!0):(o(),n(p,{key:2,xs:a.hiddenSeparator?"3":"4"},{default:i(()=>[s("div",G,[s("a",{href:"#",onClick:u[0]||(u[0]=M(r=>t.showMoreSeparators=!0,["prevent"]))},c(t.strings.showMore)+"… ",1)])]),_:1},8,["xs"])),t.showMoreSeparators?(o(),n(p,{key:3,class:"custom-separator-col"},{default:i(()=>[s("div",I,[q(c(t.strings.custom)+" ",1),V(y,{spellcheck:!1,size:"medium",modelValue:t.customSeparator,"onUpdate:modelValue":u[1]||(u[1]=r=>t.customSeparator=r)},null,8,["modelValue"])])]),_:1})):l("",!0),t.showMoreSeparators?(o(),n(p,{key:4,xs:"2"},{default:i(()=>[s("div",z,[s("a",{href:"#",onClick:u[2]||(u[2]=M(r=>t.showMoreSeparators=!1,["prevent"]))},c(t.strings.showLess)+"… ",1)])]),_:1})):l("",!0)]),_:1})}const j=b(B,[["render",D]]);export{j as C};
