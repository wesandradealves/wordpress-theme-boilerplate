import{_ as s}from"./js/_plugin-vue_export-helper.d7c6d548.js";import{c as a,y as r,f as c,b as l,o as p,G as u}from"./js/vue.runtime.esm-bundler.a2ae84e1.js";import{l as f}from"./js/links.138c5ae5.js";import{t as m}from"./js/translations.2cd8c3d1.js";import"./js/default-i18n.cb62c1e5.js";import"./js/isArrayLikeObject.7cab3d31.js";const d={data(){return{interval:null,display:!1,strings:{newNotifications:this.$t.__("You have new notifications!",this.$td)}}},methods:{showNotificationsPopup(){if(this.interval&&window.aioseoNotifications&&parseInt(window.aioseoNotifications.newNotifications)){this.display=!0;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.add("new-notifications")}},hideNotificationsPopup(){this.interval=null,setTimeout(()=>{this.display=!1;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.remove("new-notifications")},500)}},created(){this.interval=setInterval(this.showNotificationsPopup,500),this.showNotificationsPopup(),setTimeout(()=>{this.interval=null,this.display=!1},5e3)}};function _(o,i,h,N,e,t){return e.display?(p(),a("div",{key:0,onClick:i[0]||(i[0]=c((...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n),["stop"])),onMouseover:i[1]||(i[1]=(...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n)),class:"aioseo-menu-new-notifications"},r(e.strings.newNotifications),33)):l("",!0)}const w=s(d,[["render",_]]),y=document.querySelector("#aioseo-menu-new-notifications");if(y){const o=u({...w,name:"Standalone/Notifications"});f(o),o.config.globalProperties.$t=m,o.config.globalProperties.$td="all-in-one-seo-pack",o.config.globalProperties.$tdPro="aioseo-pro",o.mount("#aioseo-menu-new-notifications")}