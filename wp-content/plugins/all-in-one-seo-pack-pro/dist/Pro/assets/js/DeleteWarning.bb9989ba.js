import{u as A,A as E,i as R}from"./links.138c5ae5.js";import{U as S,R as C}from"./UserAvatar.a5af6983.js";import{t as x}from"./html.7b614668.js";import{C as D}from"./Caret.833cbb47.js";import{S as I}from"./Eye.e458a9c5.js";import{S as $}from"./index.63c9ec9d.js";import{r as v,o as l,c as d,a as o,y as r,b as u,K as U,P as B,f as _,J as b,g as m,d as P,w as p,C as y}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as V}from"./_plugin-vue_export-helper.d7c6d548.js";import{C as M}from"./Portal.13b69d4d.js";const L={setup(){return{rootStore:A(),searchStatisticsStore:E(),seoRevisionsStore:R()}},components:{CoreLoader:D,SvgEye:I,SvgTrash:$,UtilUserAvatar:S},computed:{itemCompareUrl(){return this.compareTo.id?`${this.rootStore.aioseo.urls.aio.seoRevisions}&from=${this.revision.id}&to=${this.compareTo.id}`:`${this.rootStore.aioseo.urls.aio.seoRevisions}&from=${this.revision.id}&to=${this.seoRevisionsStore.items[0].id}`},itemViewUrl(){return`${this.rootStore.aioseo.urls.aio.seoRevisions}&to=${this.revision.id}`}},methods:{truncate:x,focusInputNote(){setTimeout(()=>{this.$refs.itemWrapper.querySelector("input").focus()},50)},onBlurInputNote(){this.noteElements.input.value!==this.revision.note?this.updateNote():this.onKeyUpEscInputNote()},onKeyUpEnterInputNote(){this.noteElements.input.value!==this.revision.note&&this.updateNote()},onKeyUpEscInputNote(){this.noteElements.input.value=this.revision.note,this.setNoteElementVisibility("input",!1)},onClickBtnAddNote(){this.setNoteElementVisibility("input",!0),this.setNoteElementVisibility("btnAdd",!1),this.focusInputNote()},onClickBtnEditNote(){this.setNoteElementVisibility("input",!0),this.setNoteElementVisibility("btnEdit",!1),this.focusInputNote()},onFocusItem(){this.onMouseEnterItem()},onMouseEnterItem(){this.isNoteElementVisible("input")||(this.revision.note?this.setNoteElementVisibility("btnEdit",!0):this.setNoteElementVisibility("btnAdd",!0))},onMouseLeaveItem(){this.setNoteElementVisibility("btnAdd",!1),this.setNoteElementVisibility("btnEdit",!1)},isNoteElementVisible(n){return this.noteElements[n].visible},setNoteElementVisibility(n,e){this.noteElements[n].visible=e},updateNote(){this.isUpdating=!0,this.seoRevisionsStore.update({id:this.revision.id,payload:{note:this.noteElements.input.value}}).then(n=>{const e=this.seoRevisionsStore.items.findIndex(t=>t.id===n.body.item.id);this.seoRevisionsStore.items.splice(e,1,n.body.item),this.searchStatisticsStore.updateSeoRevision(this.seoRevisionsStore.items),this.setNoteElementVisibility("input",!1)}).finally(()=>{this.isUpdating=!1})}},mixins:[C],props:{isCurrentVersion:{required:!0,type:Boolean,default(){return!1}},revision:{type:Object,default(){return{}}},compareTo:{type:Object,default(){return{}}},context:String},watch:{revision(n){this.noteElements.input.value=n.note}},data(){return{isUpdating:!1,noteElements:{input:{maxlength:this.seoRevisionsStore.noteMaxlength,visible:!1,value:this.revision.note},btnAdd:{visible:!1},btnEdit:{visible:!1}},strings:{addNote:this.$t.__("Add Note",this.$tdPro),compare:this.$t.__("Compare",this.$tdPro),compareAgainstCurrent:this.$t.__("Compare against current version",this.$tdPro),currentVersion:this.$t.__("Current Version",this.$tdPro),deleteRevision:this.$t.__("Delete revision",this.$tdPro),editNote:this.$t.__("Edit Note",this.$tdPro),typeToAddNote:this.$t.__("Type to add note",this.$tdPro),viewRevision:this.$t.__("View revision",this.$tdPro)}}}},T={class:"aioseo-seo-revision-list-item__input-wrapper"},K={key:0,class:"aioseo-seo-revision-list-item__note text-truncate"},W=["maxlength","placeholder"],z={class:"aioseo-seo-revision-list-item__author"},O={class:"aioseo-seo-revision-list-item__author__avatar"},q=["title"],j=["title"],F={class:"aioseo-seo-revision-list-item__action"},Y={class:"aioseo-wrapper"},J={key:0,class:"str-current-version"},G=["href","title"],H={class:"aioseo-wrapper"},Q=["href","title"],X=["title"],Z={key:1,class:"loader"};function ee(n,e,t,k,i,s){const g=v("util-user-avatar"),h=v("svg-eye"),f=v("svg-trash"),c=v("core-loader");return l(),d("div",{role:"listitem",class:"aioseo-seo-revision-list-item",tabindex:"0",ref:"itemWrapper",onFocus:e[9]||(e[9]=a=>s.onFocusItem()),onMouseenter:e[10]||(e[10]=a=>s.onMouseEnterItem()),onMouseleave:e[11]||(e[11]=a=>s.onMouseLeaveItem())},[o("div",T,[t.revision.note&&!s.isNoteElementVisible("input")?(l(),d("span",K,r(t.revision.note),1)):u("",!0),s.isNoteElementVisible("input")?U((l(),d("input",{key:1,type:"text",maxlength:i.noteElements.input.maxlength,placeholder:i.strings.typeToAddNote,"onUpdate:modelValue":e[0]||(e[0]=a=>i.noteElements.input.value=a),onBlur:e[1]||(e[1]=_(a=>s.onBlurInputNote(),["prevent"])),onKeyup:[e[2]||(e[2]=b(_(a=>s.onKeyUpEnterInputNote(),["prevent"]),["enter"])),e[3]||(e[3]=b(_(a=>s.onKeyUpEscInputNote(),["prevent"]),["esc"]))],onKeydown:e[4]||(e[4]=b(_(()=>{},["prevent"]),["enter"]))},null,40,W)),[[B,i.noteElements.input.value]]):u("",!0),s.isNoteElementVisible("btnEdit")?(l(),d("button",{key:2,class:"aioseo-seo-revision-list-item__btn-edit-note",onClick:e[5]||(e[5]=_(a=>s.onClickBtnEditNote(),["prevent"]))},r(i.strings.editNote),1)):u("",!0)]),o("div",z,[o("span",O,[m(g,{src:t.revision.author.avatar.url,size:t.revision.author.avatar.size},null,8,["src","size"])]),t.revision.author.display_name?(l(),d("span",{key:0,title:n.getAuthorEmailAndLogin(t.revision),class:"aioseo-seo-revision-list-item__author__name text-truncate"},r(s.truncate(t.revision.author.display_name,30)),9,q)):u("",!0),s.isNoteElementVisible("btnAdd")&&(t.context||this.$root._data.screenContext)==="sidebar"?(l(),d("button",{key:1,class:"aioseo-seo-revision-list-item__btn-add-note",onClick:e[6]||(e[6]=_(a=>s.onClickBtnAddNote(),["prevent"]))},r(i.strings.addNote),1)):u("",!0)]),o("div",{class:"aioseo-seo-revision-list-item__date text-truncate",title:t.revision.date.created_formatted},r(t.revision.date.created_formatted),9,j),s.isNoteElementVisible("btnAdd")&&(t.context||this.$root._data.screenContext)==="metabox"?(l(),d("button",{key:0,class:"aioseo-seo-revision-list-item__btn-add-note",onClick:e[7]||(e[7]=_(a=>s.onClickBtnAddNote(),["prevent"]))},r(i.strings.addNote),1)):u("",!0),o("div",F,[o("div",Y,[t.isCurrentVersion?(l(),d("div",J,r(i.strings.currentVersion),1)):(l(),d("a",{key:1,href:s.itemCompareUrl,title:i.strings.compareAgainstCurrent,target:"_blank",class:"aioseo-seo-revision-list-item__action__compare"},r(i.strings.compare),9,G)),o("div",H,[o("a",{href:s.itemViewUrl,title:i.strings.viewRevision,target:"_blank",class:"aioseo-seo-revision-list-item__action__view"},[m(h)],8,Q),t.isCurrentVersion?u("",!0):(l(),d("button",{key:0,class:"aioseo-seo-revision-list-item__action__delete",onClick:e[8]||(e[8]=_(a=>n.$emit("maybeDeleteSeoRevision",t.revision),["prevent"])),title:i.strings.deleteRevision},[m(f)],8,X))])])]),i.isUpdating?(l(),d("div",Z,[m(c)])):u("",!0)],544)}const Ce=V(L,[["render",ee],["__scopeId","data-v-04dee5be"]]);const te={setup(){return{searchStatisticsStore:E(),seoRevisionsStore:R()}},components:{CoreModalPortal:M,UtilUserAvatar:S},methods:{initDelete(){this.btnDeleteRevisionLoading=!0,this.seoRevisionsStore.delete(this.revision.id).then(n=>{this.$parent.modalOpenDeleteRevisionWarning=!1,this.seoRevisionsStore.items=n.body.items,this.searchStatisticsStore.deleteSeoRevision(this.revision)}).finally(()=>{this.btnDeleteRevisionLoading=!1})},truncate:x},mixins:[C],props:{modalOpenDeleteRevisionWarning:{type:Boolean,required:!0},revision:{type:Object,required:!0}},data(){return{btnDeleteRevisionLoading:!1,strings:{areYouSureDeleteRevision:this.$t.__("Are you sure you want to delete the following revision? This cannot be undone.",this.$tdPro),deleteRevision:this.$t.__("Delete Revision",this.$tdPro),noChangedMind:this.$t.__("No, I changed my mind",this.$tdPro),revisionBy:this.$t.__("Revision by",this.$tdPro),yesDeleteRevision:this.$t.__("Yes, delete revision",this.$tdPro)}}}},ie={class:"aioseo-seo-revisions-delete-warning__body"},se={class:"aioseo-seo-revisions-delete-warning__text"},oe={class:"aioseo-seo-revisions-delete-warning__revision"},ne={class:"aioseo-seo-revisions-delete-warning__revision__avatar"},re={class:"aioseo-seo-revisions-delete-warning__revision__data text-truncate"},ae=["title"],le=["textContent"],de=o("span",null," ",-1),ue=["textContent"],_e=["textContent"],ve={class:"aioseo-seo-revisions-delete-warning__revision__data__date"},me=o("br",null,null,-1),ce={class:"aioseo-seo-revisions-delete-warning__action"};function he(n,e,t,k,i,s){const g=v("util-user-avatar"),h=v("base-button"),f=v("core-modal-portal");return n.$parent.modalOpenDeleteRevisionWarning?(l(),P(f,{key:0,onClose:e[2]||(e[2]=c=>n.$parent.modalOpenDeleteRevisionWarning=!1),classes:["aioseo-seo-revisions-delete-warning"]},{headerTitle:p(()=>[y(r(i.strings.deleteRevision),1)]),body:p(()=>{var c,a,N;return[o("div",ie,[o("p",se,r(i.strings.areYouSureDeleteRevision),1),o("div",oe,[o("div",ne,[m(g,{src:t.revision.author.avatar.url,size:t.revision.author.avatar.size},null,8,["src","size"])]),o("div",re,[o("span",{title:n.getAuthorEmailAndLogin(t.revision),class:"aioseo-seo-revisions-delete-warning__revision__data__author"},[o("span",{textContent:r(i.strings.revisionBy)},null,8,le),de,o("span",{textContent:r(s.truncate(t.revision.author.display_name,30))},null,8,ue)],8,ae),(c=t.revision)!=null&&c.note?(l(),d("span",{key:0,class:"aioseo-seo-revisions-delete-warning__revision__data__note",textContent:r(t.revision.note)},null,8,_e)):u("",!0),o("span",ve,[me,y(" "+r((N=(a=t.revision)==null?void 0:a.date)==null?void 0:N.created_formatted),1)])])]),o("div",ce,[m(h,{type:"gray",size:"medium",onClick:e[0]||(e[0]=_(w=>n.$parent.modalOpenDeleteRevisionWarning=!1,["prevent","exact"]))},{default:p(()=>[y(r(i.strings.noChangedMind),1)]),_:1}),m(h,{type:"blue",size:"medium",loading:i.btnDeleteRevisionLoading,onClick:e[1]||(e[1]=_(w=>s.initDelete(),["prevent","exact"]))},{default:p(()=>[y(r(i.strings.yesDeleteRevision),1)]),_:1},8,["loading"])])])]}),_:1})):u("",!0)}const xe=V(te,[["render",he]]);export{xe as S,Ce as a};
