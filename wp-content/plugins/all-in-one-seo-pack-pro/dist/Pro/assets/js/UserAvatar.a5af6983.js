import{i as a}from"./links.138c5ae5.js";import{S as i}from"./Profile.951fd37d.js";import{r,o as s,c,d as u}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as l}from"./_plugin-vue_export-helper.d7c6d548.js";const S={methods:{getAuthorEmailAndLogin(t){return typeof(t==null?void 0:t.author)!="object"||!t.author.email||!t.author.login?"":t.author.email+" ("+t.author.login+")"}}},R={data(){return{updatingSeoRevisions:!1}},methods:{updateSeoRevisions(){if(window.wp.data.select("core/editor").isSavingPost()&&!window.wp.data.select("core/editor").isAutosavingPost()){this.updatingSeoRevisions=!0;const t=this,o=a();setTimeout(()=>{o.fetch().finally(()=>{t.updatingSeoRevisions=!1})},2500)}},async watchObjectRevisionsOnSavePost(){await this.$nextTick(),window.wp.data.subscribe(()=>{this.updatingSeoRevisions||this.updateSeoRevisions()})}}};const d={components:{SvgDannieProfile:i},props:{src:String,size:{required:!0,type:Number}}},_=["src","width","height"];function p(t,o,e,h,f,g){const n=r("svg-dannie-profile");return e.src?(s(),c("img",{key:0,src:e.src,width:e.size,height:e.size,alt:"avatar",loading:"lazy",decoding:"async",class:"aioseo-user-avatar"},null,8,_)):(s(),u(n,{key:1,width:e.size,height:e.size,class:"aioseo-user-avatar aioseo-user-avatar--dannie"},null,8,["width","height"]))}const x=l(d,[["render",p],["__scopeId","data-v-4705aae0"]]);export{R as O,S as R,x as U};