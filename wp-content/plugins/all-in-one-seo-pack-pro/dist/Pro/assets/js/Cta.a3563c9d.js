import{A as f}from"./AddonConditions.422a2842.js";import"./default-i18n.cb62c1e5.js";import"./constants.3cff9bad.js";import"./links.4ebb20e1.js";import{r as o,o as l,c as y,g as e,w as r,a as b,y as u,C,d as p,B as w}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as d}from"./_plugin-vue_export-helper.d7c6d548.js";/* empty css                                              */import{C as x}from"./Blur.718f6c18.js";import{C as S}from"./DisplayInfo.d9672dba.js";import{C as $}from"./SettingsRow.7db26b8a.js";import{C as P}from"./index.63c9ec9d.js";import{C as v}from"./Card.fb1280a3.js";import{C as A}from"./Index.a392ec8a.js";const T={components:{CoreBlur:x,CoreDisplayInfo:S,CoreSettingsRow:$},data(){return{strings:{description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:""}}}}},B={class:"aioseo-maps-blur"},I={class:"aioseo-settings-row"};function O(i,_,n,m,t,a){const c=o("base-input"),s=o("core-settings-row"),g=o("core-display-info"),h=o("core-blur");return l(),y("div",B,[e(h,null,{default:r(()=>[b("div",I,u(t.strings.description),1),e(s,{name:t.strings.apiKey,align:""},{content:r(()=>[e(c,{size:"medium"})]),_:1},8,["name"]),e(g,{options:t.displayInfo},null,8,["options"]),e(s,{name:t.strings.mapPreview,align:""},{content:r(()=>[C(u(t.strings.description),1)]),_:1},8,["name"])]),_:1})])}const L=d(T,[["render",O]]),k={mixins:[f],components:{Blur:L,CoreAlert:P,CoreCard:v,Cta:A},props:{cardSlug:{type:String,required:!0},headerText:{type:String,required:!0},alignTop:Boolean},data(){return{addonSlug:"aioseo-local-business",strings:{locationSeoHeader:this.$t.__("Enable Local SEO on your Site",this.$tdPro),ctaDescription:this.$t.__("The Local SEO module is a premium feature that enables businesses to tell Google about their business, including their business name, address and phone number, opening hours and price range.  This information may be displayed as a Knowledge Graph card or business carousel in the search engine sidebar.",this.$tdPro),learnMoreText:this.$t.__("Learn more about Local SEO",this.$tdPro),showOpeningHours:this.$t.__("Show Opening Hours",this.$tdPro),googleMaps:this.$t.__("Google Maps",this.$tdPro),businessType:this.$t.__("Type",this.$tdPro),businessContact:this.$t.__("Contact Info",this.$tdPro),paymentInfo:this.$t.__("Payment Info",this.$tdPro),image:this.$t.__("Image",this.$tdPro)}}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Local SEO",this.$tdPro):this.$t.__("Activate Local SEO",this.$tdPro)}},methods:{addonActivated(){window.location.reload()}}};function E(i,_,n,m,t,a){const c=o("blur"),s=o("core-card");return l(),p(s,{slug:n.cardSlug,"header-text":n.headerText,noSlide:!0},{default:r(()=>[e(c),(l(),p(w(i.ctaComponent),{"addon-slug":t.addonSlug,"cta-header":t.strings.locationSeoHeader,"cta-description":t.strings.ctaDescription,"cta-button-text":a.ctaButtonText,"learn-more-text":t.strings.learnMoreText,"learn-more-link":i.$links.getDocUrl("localSeo"),"feature-list":[t.strings.businessType,t.strings.businessContact,t.strings.paymentInfo,t.strings.image,t.strings.showOpeningHours,t.strings.googleMaps],onAddonActivated:a.addonActivated,"align-top":n.alignTop},null,40,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-text","learn-more-link","feature-list","onAddonActivated","align-top"]))]),_:1},8,["slug","header-text"])}const J=d(k,[["render",E]]);export{L as B,J as C};