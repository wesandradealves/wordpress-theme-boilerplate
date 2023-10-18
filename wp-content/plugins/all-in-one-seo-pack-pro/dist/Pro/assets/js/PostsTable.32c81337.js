import{D as w,c as x,A as C,k as A}from"./links.4ebb20e1.js";import{n as P}from"./numbers.18b50505.js";import{r as c,o as l,c as u,g as p,y as n,b as h,a as i,w as r,f as T,C as f,d as b}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as v}from"./_plugin-vue_export-helper.d7c6d548.js";import"./index.63c9ec9d.js";import{C as F}from"./Index.a392ec8a.js";import"./default-i18n.cb62c1e5.js";import"./constants.3cff9bad.js";/* empty css                                              */import{C as O,W as I}from"./Table.0f38f24b.js";import{P as D}from"./PostTypes.9ab32454.js";import{V as L,S as U,T as B,c as V}from"./Statistic.1c5eb614.js";import{C as N}from"./ScoreButton.897fb37d.js";import{a as j}from"./addons.ece7eb50.js";import{S as E,a as H,b as M,c as W}from"./Affiliate.0dd91887.js";import{S as Z}from"./Suggestion.c0978aa8.js";const q={components:{apexchart:L},props:{points:{type:Object,required:!0},peak:{type:Number,default(){return 0}},recovering:{type:Boolean,default(){return!1}},height:{type:Number,default(){return 50}}},data(){return{strings:{recovering:this.$t.__("Slowly Recovering",this.$td),peak:this.$t.__("Peak",this.$td)}}},computed:{getSeries(){const t=this.points,a=[];return Object.keys(t).forEach(s=>{a.push({x:s,y:t[s]})}),[{data:a}]},chartOptions(){const t=this.peak;return{colors:[function({value:a}){return a===t?"#005AE0":"#99C2FF"}],chart:{type:"bar",sparkline:{enabled:!0},zoom:{enabled:!1},toolbar:{show:!1},parentHeightOffset:0,background:"#fff"},grid:{show:!1,padding:{top:2,right:2,bottom:0,left:2}},plotOptions:{bar:{columnWidth:"85%",barHeight:"100%"}},fill:{type:"solid"},tooltip:{enabled:!0,x:{show:!0,formatter:a=>w.fromFormat(a,"yyyy-MM").setZone(w.zone).toLocaleString({month:"long",year:"numeric"})},y:{formatter:a=>{const s=this.$t.sprintf(this.$t.__("%1$s points",this.$td),P.numberFormat(a,0));let d="";return a===t&&(d=`<span class="peak">${this.strings.peak}</span>`),s+d}},marker:{show:!1}}}}}},z={class:"aioseo-graph-decay"},G={key:0,class:"aioseo-graph-decay-recovering"};function R(t,a,s,d,o,g){const m=c("apexchart");return l(),u("div",z,[p(m,{width:"100%",height:s.height,ref:"apexchart",options:g.chartOptions,series:g.getSeries,class:"aioseo-graph-decay-chart"},null,8,["height","options","series"]),s.recovering?(l(),u("div",G,n(o.strings.recovering),1)):h("",!0)])}const J=v(q,[["render",R]]);const K={components:{SvgLinkAffiliate:E,SvgLinkExternal:H,SvgLinkInternalInbound:M,SvgLinkInternalOutbound:W,SvgLinkSuggestion:Z},props:{row:Object},data(){return{addons:j,strings:{links:this.$t.__("Links:",this.$tdPro)}}}},Q={key:0,class:"post-actions"},X={key:0,class:"link-assistant"},Y={class:"title"},tt={class:"count"},et={class:"total"},st={class:"count"},ot={class:"total"},it={class:"count"},nt={class:"total"},at={class:"count"},rt={class:"total"},lt={class:"count"},ct={class:"total"};function pt(t,a,s,d,o,g){const m=c("svg-link-internal-inbound"),y=c("svg-link-internal-outbound"),_=c("svg-link-external"),k=c("svg-link-affiliate"),S=c("svg-link-suggestion");return s.row.postId?(l(),u("div",Q,[o.addons.isActive("aioseo-link-assistant")&&!o.addons.requiresUpgrade("aioseo-link-assistant")&&s.row.linkAssistant?(l(),u("div",X,[i("div",Y,n(o.strings.links),1),i("div",tt,[p(m),i("span",et,n(s.row.linkAssistant.inboundInternal||0),1)]),i("div",st,[p(y),i("span",ot,n(s.row.linkAssistant.outboundInternal||0),1)]),i("div",it,[p(_),i("span",nt,n(s.row.linkAssistant.external||0),1)]),i("div",at,[p(k),i("span",rt,n(s.row.linkAssistant.affiliate||0),1)]),i("div",lt,[p(S),i("span",ct,n(s.row.linkAssistant.linkSuggestions||0),1)])])):h("",!0)])):h("",!0)}const dt=v(K,[["render",pt]]);const ht={setup(){return{licenseStore:x(),searchStatisticsStore:C(),settingsStore:A()}},components:{CoreScoreButton:N,CoreWpTable:O,Cta:F,GraphDecay:J,PostActions:dt,Statistic:U},mixins:[D,I,B],data(){return{numbers:P,tableId:"aioseo-search-statistics-post-table",changeItemsPerPageSlug:"searchStatisticsSeoStatistics",showUpsell:!1,sortableColumns:[],strings:{position:this.$t.__("Position",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},props:{posts:Object,isLoading:Boolean,showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,columns:{type:Array,default(){return["postTitle","seoScore","clicks","impressions","position"]}},appendColumns:{type:Object,default(){return{}}},defaultSorting:{type:Object,default(){return{}}},initialFilter:{type:String,default(){return""}},updateAction:{type:String,default(){return"updateSeoStatistics"}}},computed:{allColumns(){var s,d;const t=V(this.columns),a=((d=(s=this.posts)==null?void 0:s.filters)==null?void 0:d.find(o=>o.active))||{};return this.appendColumns[a.slug||"all"]&&t.push(this.appendColumns[a.slug||"all"]),t.map(o=>(o.endsWith("Sortable")&&(o=o.replace("Sortable",""),this.sortableColumns.push(o)),o))},tableColumns(){return[{slug:"row",label:"#",width:"40px"},{slug:"postTitle",label:this.$t.__("Title",this.$td),width:"100%"},{slug:"seoScore",label:this.$t.__("TruSEO Score",this.$td),width:"130px"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"110px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"90px"},{slug:"lastUpdated",label:this.$t.__("Last Updated On",this.$td),width:"160px"},{slug:"decay",label:this.$t.__("Loss",this.$td),width:"140px"},{slug:"decayPercent",label:this.$t.__("Drop (%)",this.$td),width:"120px"},{slug:"performance",label:this.$t.__("Performance Score",this.$td),width:"150px"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"}].filter(t=>this.allColumns.includes(t.slug)).map(t=>(t.sortable=this.isSortable&&this.sortableColumns.includes(t.slug),t.sortable&&(t.sortDir=t.slug===this.orderBy?this.orderDir:"asc",t.sorted=t.slug===this.orderBy),t))},isSortable(){return this.filter==="all"&&this.$isPro&&!this.licenseStore.isUnlicensed}},methods:{resetSelectedFilters(){this.selectedFilters.postType="",this.processAdditionaFilterOptionSelected({name:"postType",selectedValue:""})},fetchData(t){if(typeof this.searchStatisticsStore[this.updateAction]=="function")return this.searchStatisticsStore[this.updateAction](t)}},mounted(){this.initialFilter&&this.processFilter({slug:this.initialFilter})}},ut={class:"aioseo-search-statistics-post-table"},_t={class:"post-row"},ft={class:"post-title"},gt=["onClick"],mt={key:1,class:"post-title"},bt={key:0,class:"row-actions"},yt=["href"],kt=["href"];function St(t,a,s,d,o,g){const m=c("post-actions"),y=c("core-score-button"),_=c("statistic"),k=c("graph-decay"),S=c("cta"),$=c("core-wp-table");return l(),u("div",ut,[p($,{ref:"table",class:"posts-table",id:o.tableId,columns:g.tableColumns,rows:Object.values(s.posts.rows),totals:s.posts.totals,filters:s.posts.filters,"additional-filters":s.posts.additionalFilters,"selected-filters":t.selectedFilters,loading:s.isLoading||d.searchStatisticsStore.loading.seoStatistics,"initial-page-number":t.pageNumber,"initial-search-term":t.searchTerm,"initial-items-per-page":d.settingsStore.settings.tablePagination[o.changeItemsPerPageSlug],"show-header":s.showHeader,"show-bulk-actions":!1,"show-table-footer":s.showTableFooter,"show-items-per-page":s.showItemsPerPage,"show-pagination":"","blur-rows":o.showUpsell,onFilterTable:t.processFilter,onProcessAdditionalFilters:t.processAdditionalFilters,onAdditionalFilterOptionSelected:t.processAdditionaFilterOptionSelected,onPaginate:t.processPagination,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:t.processSearch,onSortColumn:t.processSort},{row:r(({index:e})=>[i("div",_t,n(e+1),1)]),postTitle:r(({row:e})=>[i("div",ft,[e.postId?(l(),u("a",{key:0,href:"#",onClick:T(vt=>t.openPostDetail(e),["prevent"])},n(e.postTitle),9,gt)):(l(),u("span",mt,n(e.postTitle),1))]),p(m,{row:e},null,8,["row"]),e.postId?(l(),u("div",bt,[i("span",null,[i("a",{class:"view",href:e.context.permalink,target:"_blank"},[i("span",null,n(t.viewPost(e.context.postType.singular)),1)],8,yt),f(" | ")]),i("span",null,[i("a",{class:"edit",href:e.context.editLink,target:"_blank"},[i("span",null,n(t.editPost(e.context.postType.singular)),1)],8,kt)])])):h("",!0)]),seoScore:r(({row:e})=>[e.seoScore?(l(),b(y,{key:0,class:"table-score-button",score:e.seoScore},null,8,["score"])):h("",!0)]),clicks:r(({row:e})=>[f(n(o.numbers.compactNumber(e.clicks)),1)]),impressions:r(({row:e})=>[f(n(o.numbers.compactNumber(e.impressions)),1)]),position:r(({row:e})=>[f(n(Math.round(e.position).toFixed(0)),1)]),lastUpdated:r(({row:e})=>[f(n(e.context.lastUpdated||"-"),1)]),decay:r(({row:e})=>[p(_,{type:"decay","show-difference":!1,total:e.decay,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),decayPercent:r(({row:e})=>[p(_,{type:"decayPercent","show-difference":!1,total:e.decayPercent,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),performance:r(({row:e})=>[p(k,{points:e.points,peak:e.peak,recovering:e.recovering,height:38},null,8,["points","peak","recovering"])]),diffPosition:r(({row:e})=>[e.difference.comparison?(l(),b(_,{key:0,type:"position","show-original":!1,difference:e.difference.position,"tooltip-offset":"-100px,0"},null,8,["difference"])):h("",!0)]),diffDecay:r(({row:e})=>[e.difference.comparison?(l(),b(_,{key:0,type:"diffDecay","show-original":!1,difference:e.difference.decay,"tooltip-offset":"-100px,0"},null,8,["difference"])):h("",!0)]),cta:r(()=>[o.showUpsell?(l(),b(S,{key:0,"cta-link":t.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":o.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("search-statistics","search-statistics-upsell","home")},{"header-text":r(()=>[f(n(o.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link"])):h("",!0)]),_:1},8,["id","columns","rows","totals","filters","additional-filters","selected-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onAdditionalFilterOptionSelected","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const jt=v(ht,[["render",St]]);export{jt as P};
