import{d as u,u as _}from"./links.138c5ae5.js";import{B as m}from"./Editor.2cae2b86.js";import{C as h}from"./index.63c9ec9d.js";import{C as f}from"./Card.c35b3a6c.js";import{C as g}from"./SettingsRow.7db26b8a.js";import{r as t,c as y,g as s,w as r,o as a,a as w,d as v,C as b,y as C,b as x}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as E}from"./_plugin-vue_export-helper.d7c6d548.js";import"./default-i18n.cb62c1e5.js";import"./isArrayLikeObject.7cab3d31.js";import"./tags.8f0eae2d.js";import"./Caret.833cbb47.js";import"./Tooltip.f932ed03.js";import"./Slide.b264e916.js";import"./Row.eead99c7.js";/* empty css                                            */const S={setup(){return{optionsStore:u(),rootStore:_()}},components:{BaseEditor:m,CoreAlert:h,CoreCard:f,CoreSettingsRow:g},data(){return{strings:{htaccessEditor:this.$t.__(".htaccess Editor",this.$td),editHtaccess:this.$t.__("Edit .htaccess",this.$td),description:this.$t.sprintf(this.$t.__("This allows you to edit the .htaccess file for your site. All WordPress sites on an Apache server have a .htaccess file and we have provided you with a convenient way of editing it. Care should always be taken when editing important files from within WordPress as an incorrect change could cause WordPress to become inaccessible. %1$sBe sure to make a backup before making changes and ensure that you have FTP access to your web server and know how to access and edit files via FTP.%2$s",this.$td),"<strong>","</strong>")}}}},k={class:"aioseo-tools-htaccess-editor"},B=["innerHTML"];function H(V,n,A,e,o,P){const i=t("core-alert"),c=t("base-editor"),d=t("core-settings-row"),l=t("core-card");return a(),y("div",k,[s(l,{slug:"htaccessEditor","header-text":o.strings.htaccessEditor},{default:r(()=>[w("div",{class:"aioseo-settings-row aioseo-section-description",innerHTML:o.strings.description},null,8,B),s(d,{name:o.strings.editHtaccess,align:""},{content:r(()=>[e.optionsStore.htaccessError?(a(),v(i,{key:0,type:"red"},{default:r(()=>[b(C(e.optionsStore.htaccessError),1)]),_:1})):x("",!0),s(c,{class:"htaccess-editor",disabled:!e.rootStore.aioseo.user.unfilteredHtml,modelValue:e.rootStore.aioseo.data.htaccess,"onUpdate:modelValue":n[0]||(n[0]=p=>e.rootStore.aioseo.data.htaccess=p),"line-numbers":"",monospace:"","preserve-whitespace":""},null,8,["disabled","modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const I=E(S,[["render",H]]);export{I as default};
