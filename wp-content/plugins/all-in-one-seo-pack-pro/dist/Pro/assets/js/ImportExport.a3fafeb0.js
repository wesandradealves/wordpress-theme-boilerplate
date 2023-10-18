import{I as G,u as I,D as R,p as N,c as J}from"./links.4ebb20e1.js";import{l as K}from"./license.f68289d9.js";import{C as M,S as Q}from"./index.63c9ec9d.js";import{C as $}from"./Card.fb1280a3.js";import{C as X}from"./Index.7805c951.js";import{C as D}from"./NetworkSiteSelector.4c99c0f2.js";import{C as ee}from"./Tooltip.f932ed03.js";import{S as te}from"./Plus.cf4682aa.js";import{S as se}from"./Caret.833cbb47.js";import{S as oe}from"./History.9a15ab15.js";import{S as ie}from"./Refresh.6c1a0eff.js";import{r as i,o as n,d as m,w as s,g as o,c as k,a as f,y as c,b as p,C as u,F as O,D as A,n as F,f as re}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as E}from"./_plugin-vue_export-helper.d7c6d548.js";import{G as T,a as U}from"./Row.eead99c7.js";import{a as z}from"./allowed.e7d024f1.js";/* empty css                                              */import"./default-i18n.cb62c1e5.js";import"./constants.3cff9bad.js";import{T as ne}from"./ToolsSettings.3b91081b.js";/* empty css                                              */import{B as j}from"./Checkbox.349747c9.js";import{S as le}from"./Upload.020413fd.js";import{S as L}from"./Download.1267020b.js";import{C as ae}from"./Blur.718f6c18.js";import{C as ce}from"./Index.a392ec8a.js";import"./isArrayLikeObject.86aee886.js";import"./upperFirst.feef3474.js";import"./_stringToArray.4de3b1f3.js";import"./toString.0b0abfad.js";import"./Slide.b264e916.js";import"./params.f0608262.js";/* empty css                                            */import"./Network.8f632a26.js";import"./deburr.a5d10bf3.js";import"./addons.ece7eb50.js";import"./Checkmark.f214118b.js";const ue={setup(){return{backupsStore:G(),rootStore:I()}},components:{CoreAlert:M,CoreCard:$,CoreModal:X,CoreNetworkSiteSelector:D,CoreTooltip:ee,SvgCirclePlus:te,SvgClose:se,SvgHistory:oe,SvgRefresh:ie,SvgTrash:Q},data(){return{site:null,timeout:null,backupToDelete:null,backupToRestore:null,backupsDeleteSuccess:!1,showModal:!1,backupsRestoreSuccess:!1,loading:!1,strings:{backupSettings:this.$t.__("Backup Settings",this.$td),areYouSureDeleteBackup:this.$t.__("Are you sure you want to delete this backup?",this.$td),areYouSureRestoreBackup:this.$t.__("Are you sure you want to restore this backup?",this.$td),yesDeleteBackup:this.$t.__("Yes, I want to delete this backup",this.$td),yesRestoreBackup:this.$t.__("Yes, I want to restore this backup",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$td),noBackups:this.$t.__("You have no saved backups.",this.$td),createBackup:this.$t.__("Create Backup",this.$td),restore:this.$t.__("Restore",this.$td),delete:this.$t.__("Delete",this.$td),backupSuccessfullyDeleted:this.$t.__("Success! The backup was deleted.",this.$td),backupSuccessfullyRestored:this.$t.__("Success! The backup was restored.",this.$td)}}},computed:{getBackups(){return this.site?this.backupsStore.networkBackups[this.site.blog_id]||[]:this.backupsStore.backups},areYouSure(){return this.backupToDelete?this.strings.areYouSureDeleteBackup:this.strings.areYouSureRestoreBackup},iAmSure(){return this.backupToDelete?this.strings.yesDeleteBackup:this.strings.yesRestoreBackup}},methods:{processCreateBackup(){this.loading=!0,this.backupsStore.createBackup({siteId:this.site?this.site.blog_id:null}).then(()=>{this.loading=!1})},maybeDeleteBackup(r){this.showModal=!0,this.backupToRestore=null,this.backupToDelete=r},maybeRestoreBackup(r){this.showModal=!0,this.backupToDelete=null,this.backupToRestore=r},processDeleteBackup(){this.loading=!0,this.backupsStore.deleteBackup({backup:this.backupToDelete,siteId:this.site?this.site.blog_id:null}).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToDelete=null,this.backupsDeleteSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},processRestoreBackup(){this.loading=!0,this.backupsStore.restoreBackup({backup:this.backupToRestore,siteId:this.site?this.site.blog_id:null}).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToRestore=null,this.backupsRestoreSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},getBackupName(r){const t=R.fromMillis(r*1e3).setZone(R.local().zoneName);return this.$t.sprintf(this.$t.__("%1$s at %2$s",this.$td),"<strong>"+t.toFormat("MMMM d, yyyy")+"</strong>","<strong>"+t.toFormat("h:mma ZZZZ")+"</strong>")},processBackupAction(){return this.backupToDelete?this.processDeleteBackup():this.processRestoreBackup()}}},pe={key:0,class:"aioseo-settings-row"},de={class:"select-site"},_e={key:3,class:"aioseo-section-description"},me={key:4,class:"backups-table"},he={class:"backups-rows"},ge=["innerHTML"],fe={class:"backup-actions"},ke={class:"aioseo-modal-body"},be=["innerHTML"];function Se(r,t,C,l,e,a){const S=i("svg-history"),y=i("core-network-site-selector"),d=i("core-alert"),b=i("svg-refresh"),g=i("core-tooltip"),w=i("svg-trash"),v=i("svg-circle-plus"),_=i("base-button"),B=i("svg-close"),h=i("core-modal"),V=i("core-card");return n(),m(V,{class:"aioseo-backup-settings",slug:"backupSettings",toggles:!1,"no-slide":"","header-text":e.strings.backupSettings},{"header-icon":s(()=>[o(S)]),default:s(()=>[l.rootStore.aioseo.data.isNetworkAdmin?(n(),k("div",pe,[f("div",de,c(e.strings.selectSite),1),o(y,{onSelectedSite:t[0]||(t[0]=x=>e.site=x)})])):p("",!0),e.backupsDeleteSuccess?(n(),m(d,{key:1,type:"green"},{default:s(()=>[u(c(e.strings.backupSuccessfullyDeleted),1)]),_:1})):p("",!0),e.backupsRestoreSuccess?(n(),m(d,{key:2,type:"green"},{default:s(()=>[u(c(e.strings.backupSuccessfullyRestored),1)]),_:1})):p("",!0),a.getBackups.length?p("",!0):(n(),k("div",_e,c(e.strings.noBackups),1)),a.getBackups.length&&!(l.rootStore.aioseo.data.isNetworkAdmin&&!e.site)?(n(),k("div",me,[f("div",he,[(n(!0),k(O,null,A(a.getBackups,(x,P)=>(n(),k("div",{class:F(["backup-row",{even:P%2===0}]),key:P},[f("div",{class:"backup-name",innerHTML:a.getBackupName(x)},null,8,ge),f("div",fe,[o(g,{type:"action"},{tooltip:s(()=>[u(c(e.strings.restore),1)]),default:s(()=>[o(b,{onClick:Z=>a.maybeRestoreBackup(x)},null,8,["onClick"])]),_:2},1024),o(g,{type:"action"},{tooltip:s(()=>[u(c(e.strings.delete),1)]),default:s(()=>[o(w,{onClick:Z=>a.maybeDeleteBackup(x)},null,8,["onClick"])]),_:2},1024)])],2))),128))])])):p("",!0),o(_,{type:"blue",size:"medium",onClick:a.processCreateBackup,loading:e.loading,disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{default:s(()=>[o(v),u(" "+c(e.strings.createBackup),1)]),_:1},8,["onClick","loading","disabled"]),e.showModal?(n(),m(h,{key:5,"no-header":"",onClose:t[4]||(t[4]=x=>e.showModal=!1)},{body:s(()=>[f("div",ke,[f("button",{class:"close",onClick:t[2]||(t[2]=re(x=>e.showModal=!1,["stop"]))},[o(B,{onClick:t[1]||(t[1]=x=>e.showModal=!1)})]),f("h3",null,c(a.areYouSure),1),f("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,be),o(_,{type:"blue",size:"medium",onClick:a.processBackupAction},{default:s(()=>[u(c(a.iAmSure),1)]),_:1},8,["onClick"]),o(_,{type:"gray",size:"medium",onClick:t[3]||(t[3]=x=>e.showModal=!1)},{default:s(()=>[u(c(e.strings.noChangedMind),1)]),_:1})])]),_:1})):p("",!0)]),_:1},8,["header-text"])}const Y=E(ue,[["render",Se]]);const ye={setup(){return{rootStore:I(),toolsStore:N()}},components:{BaseCheckbox:j,CoreCard:$,CoreNetworkSiteSelector:D,GridColumn:T,GridRow:U,SvgUpload:le},mixins:[ne],data(){return{allowed:z,site:null,options:{},postOptions:{},loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),exportSettings:this.$t.__("Export Settings",this.$td),allSettings:this.$t.__("Export All Settings",this.$td),allPostTypes:this.$t.__("Export All Post Types",this.$td)}}},computed:{canExport(){if(this.rootStore.aioseo.data.isNetworkAdmin&&!this.site)return!1;const r=[];return Object.keys(this.options).forEach(t=>{r.push(this.options[t])}),Object.keys(this.postOptions).forEach(t=>{r.push(this.postOptions[t])}),r.some(t=>t)},canExportPostOptions(){return["aioseo_page_general_settings","aioseo_page_advanced_settings","aioseo_page_schema_settings","aioseo_page_social_settings","aioseo_page_local_seo_settings"].some(r=>z(r))}},methods:{processExportSettings(){const r=[];this.options.all?(this.$isPro&&r.push("general"),r.push("internal"),this.toolsSettings.filter(l=>l.value!=="all").forEach(l=>{r.push(l.value)})):Object.keys(this.options).forEach(l=>{this.options[l]&&r.push(l)});const t=[];this.postOptions.all?this.rootStore.aioseo.postData.postTypes.forEach(l=>{t.push(l.name)}):Object.keys(this.postOptions).forEach(l=>{this.postOptions[l]&&t.push(l)});const C=this.site?`${this.site.domain}${this.site.path.replace("/","-")}`:"";this.loading=!0,this.toolsStore.exportSettings({settings:r,postOptions:t,siteId:this.site?this.site.blog_id:null}).then(l=>{this.loading=!1,this.options={},this.postOptions={};const e=new Blob([JSON.stringify(l.body.settings)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download=`aioseo-export-settings-${C}${R.now().toFormat("yyyy-MM-dd")}.json`,a.click(),URL.revokeObjectURL(a.href)})}}},ve={key:0,class:"aioseo-settings-row"},we={class:"select-site"},xe={key:1,class:"export-post-types"};function Ce(r,t,C,l,e,a){const S=i("svg-upload"),y=i("core-network-site-selector"),d=i("base-checkbox"),b=i("grid-column"),g=i("grid-row"),w=i("base-button"),v=i("core-card");return n(),m(v,{class:"aioseo-export-settings",slug:"exportSettings",toggles:!1,"no-slide":"","header-text":e.strings.exportSettings},{"header-icon":s(()=>[o(S)]),default:s(()=>[l.rootStore.aioseo.data.isNetworkAdmin?(n(),k("div",ve,[f("div",we,c(e.strings.selectSite),1),o(y,{onSelectedSite:t[0]||(t[0]=_=>e.site=_)})])):p("",!0),f("div",{class:F(["export-settings",{"aioseo-settings-row":a.canExportPostOptions}])},[o(g,null,{default:s(()=>[o(b,{class:"export-all"},{default:s(()=>[o(d,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":t[1]||(t[1]=_=>e.options.all=_),disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{default:s(()=>[u(c(e.strings.allSettings),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(n(!0),k(O,null,A(r.toolsSettings,(_,B)=>(n(),m(b,{key:B,sm:"6"},{default:s(()=>[e.options.all?p("",!0):(n(),m(d,{key:0,size:"medium",modelValue:e.options[_.value],"onUpdate:modelValue":h=>e.options[_.value]=h,disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{default:s(()=>[u(c(_.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),_.value!=="all"&&e.options.all?(n(),m(d,{key:1,size:"medium",modelValue:!0,disabled:""},{default:s(()=>[u(c(_.label),1)]),_:2},1024)):p("",!0)]),_:2},1024))),128))]),_:1})],2),a.canExportPostOptions?(n(),k("div",xe,[o(g,null,{default:s(()=>[o(b,{class:"export-all"},{default:s(()=>[o(d,{size:"medium",modelValue:e.postOptions.all,"onUpdate:modelValue":t[2]||(t[2]=_=>e.postOptions.all=_),disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{default:s(()=>[u(c(e.strings.allPostTypes),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(n(!0),k(O,null,A(l.rootStore.aioseo.postData.postTypes,(_,B)=>(n(),m(b,{key:B,sm:"6"},{default:s(()=>[e.postOptions.all?p("",!0):(n(),m(d,{key:0,size:"medium",modelValue:e.postOptions[_.name],"onUpdate:modelValue":h=>e.postOptions[_.name]=h,disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{default:s(()=>[u(c(_.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),_.name!=="all"&&e.postOptions.all?(n(),m(d,{key:1,size:"medium",modelValue:!0,disabled:""},{default:s(()=>[u(c(_.label),1)]),_:2},1024)):p("",!0)]),_:2},1024))),128))]),_:1})])):p("",!0),o(w,{type:"blue",size:"medium",class:"import",onClick:a.processExportSettings,disabled:!a.canExport,loading:e.loading},{default:s(()=>[u(c(e.strings.exportSettings),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["header-text"])}const H=E(ye,[["render",Ce]]);const Be={setup(){return{rootStore:I(),toolsStore:N()}},components:{CoreAlert:M,CoreCard:$,CoreNetworkSiteSelector:D,SvgDownload:L},data(){return{site:null,inputFile:null,filename:null,file:null,uploadError:!1,uploadSuccess:!1,loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),importRestoreAioseoSettings:this.$t.sprintf(this.$t.__("Import / Restore %1$s Settings",this.$td),"AIOSEO"),fileUploadPlaceholder:this.$t.__("Import from a JSON or INI file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),fileUploadDescription:this.$t.__("Imported settings will overwrite existing settings and will not be merged.",this.$td),import:this.$t.__("Import",this.$td),jsonFileTypeRequired:this.$t.__("A JSON or INI file is required to import settings.",this.$td),fileUploadedSuccessfully:this.$t.__("Success! Your settings have been imported.",this.$td),fileUploadFailed:this.$t.__("There was an error importing your settings. Please make sure you are uploading the correct file or it is in the proper format.",this.$td),v3ImportWarning:this.$t.sprintf(this.$t.__("Please note that if you are importing post/term meta from %1$s v3.7.1 or below, this will only be successful if the post/term IDs of this site are identical to those of the source site.",this.$td),"AIOSEO")}}},computed:{importValidated(){return!(this.rootStore.aioseo.data.isNetworkAdmin&&!this.site||!this.file.type||!this.file.name||this.file.type!=="application/json"&&!this.file.name.endsWith(".ini"))}},methods:{reset(){this.uploadError=!1,this.filename=null,this.file=null,this.inputFile=null},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},submitFile(){this.loading=!0,this.toolsStore.uploadFile({file:this.file,filename:this.filename,siteId:this.site?this.site.blog_id:null}).then(()=>{this.reset(),this.uploadSuccess=!0,this.loading=!1}).catch(()=>{this.reset(),this.loading=!1,this.uploadError=this.strings.fileUploadFailed})},handleFileUpload(){this.reset(),this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="application/json"&&!this.file.name.endsWith(".ini")&&(this.uploadError=this.strings.jsonFileTypeRequired))}}},Ee={key:0,class:"aioseo-settings-row"},Ie={class:"select-site"},Oe={class:"file-upload"},Ae={class:"aioseo-description"};function $e(r,t,C,l,e,a){const S=i("svg-download"),y=i("core-network-site-selector"),d=i("core-alert"),b=i("base-input"),g=i("base-button"),w=i("core-card");return n(),m(w,{class:"aioseo-import-aioseo",slug:"importAioseoSettings",toggles:!1,"no-slide":"","header-text":e.strings.importRestoreAioseoSettings},{"header-icon":s(()=>[o(S)]),default:s(()=>[l.rootStore.aioseo.data.isNetworkAdmin?(n(),k("div",Ee,[f("div",Ie,c(e.strings.selectSite),1),o(y,{onSelectedSite:t[0]||(t[0]=v=>e.site=v)})])):p("",!0),e.uploadError?(n(),m(d,{key:1,type:"red",class:"import-alert"},{default:s(()=>[u(c(e.uploadError),1)]),_:1})):p("",!0),e.filename&&e.filename.endsWith(".ini")?(n(),m(d,{key:2,type:"yellow",class:"import-alert"},{default:s(()=>[u(c(e.strings.v3ImportWarning),1)]),_:1})):p("",!0),e.uploadSuccess?(n(),m(d,{key:3,type:"green",class:"import-alert"},{default:s(()=>[u(c(e.strings.fileUploadedSuccessfully),1)]),_:1})):p("",!0),f("div",Oe,[o(b,{modelValue:e.filename,"onUpdate:modelValue":t[1]||(t[1]=v=>e.filename=v),size:"medium",onFocus:a.triggerFileUpload,placeholder:e.strings.fileUploadPlaceholder,class:F({"aioseo-error":e.uploadError}),disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},null,8,["modelValue","onFocus","placeholder","class","disabled"]),o(g,{type:"black",size:"medium",onClick:a.triggerFileUpload,disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{default:s(()=>[u(c(e.strings.chooseAFile),1)]),_:1},8,["onClick","disabled"])]),o(b,{modelValue:e.inputFile,"onUpdate:modelValue":t[2]||(t[2]=v=>e.inputFile=v),type:"file",onClick:a.reset,onChange:a.handleFileUpload,ref:"file"},null,8,["modelValue","onClick","onChange"]),f("div",Ae,c(e.strings.fileUploadDescription),1),o(g,{type:"blue",size:"medium",class:"import",onClick:a.submitFile,disabled:!e.file||!a.importValidated,loading:e.loading},{default:s(()=>[u(c(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["header-text"])}const q=E(Be,[["render",$e]]);const De={setup(){return{rootStore:I(),toolsStore:N()}},components:{BaseCheckbox:j,CoreAlert:M,CoreCard:$,CoreNetworkSiteSelector:D,GridColumn:T,GridRow:U,SvgDownload:L},data(){return{site:null,importSuccess:!1,importError:!1,options:{},plugin:null,loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),importSettingsFromOtherPlugins:this.$t.__("Import Settings From Other Plugins",this.$td),importOthersDescription:this.$t.sprintf(this.$t.__("Choose a plugin to import SEO data directly into %1$s.",this.$td),"AIOSEO"),selectPlugin:this.$t.__("Select a plugin...",this.$td),import:this.$t.__("Import",this.$td),allSettings:this.$t.__("All Settings",this.$td),notInstalled:this.$t.__("not installed",this.$td)}}},watch:{plugin(){this.importSuccess=!1,this.importError=!1,this.options={}}},computed:{settings(){const r=[{value:"settings",label:this.$t.__("SEO Settings",this.$td)},{value:"postMeta",label:this.$t.__("Post Meta",this.$td)}];return this.$isPro&&r.push({value:"termMeta",label:this.$t.__("Term Meta",this.$td)}),r},plugins(){const r=[];return this.rootStore.aioseo.importers.forEach(t=>{r.push({value:t.slug,label:t.name,canImport:t.canImport,version:t.version,$isDisabled:!t.installed})}),r},canImport(){if(this.rootStore.aioseo.data.isNetworkAdmin&&!this.site)return!1;const r=[];return Object.keys(this.options).forEach(t=>{r.push(this.options[t])}),r.some(t=>t)},importSuccessful(){return this.$t.sprintf(this.$t.__("%1$s was successfully imported!",this.$td),this.plugin.label)},importErrorMessage(){return this.$t.sprintf(this.$t.__("An error occurred while importing %1$s. Please try again.",this.$td),this.plugin.label)}},methods:{processImportPlugin(){this.importSuccess=!1,this.importError=!1,this.loading=!0;const r=[];this.options.all?this.settings.filter(t=>t.value!=="all").forEach(t=>{r.push(t.value)}):Object.keys(this.options).forEach(t=>{this.options[t]&&r.push(t)}),this.toolsStore.importPlugins({plugins:[{plugin:this.plugin.value,settings:r}],siteId:this.site?this.site.blog_id:null}).then(()=>{this.loading=!1,this.importSuccess=!0,this.options={}}).catch(()=>{this.loading=!1,this.importError=!0,this.options={}})},invalidVersion(r){return this.$t.sprintf(this.$t.__("We do not support importing from the currently installed version of %1$s (%2$s). Please upgrade to the latest version and try again.",this.$td),r.label,r.version)}}},Te={key:0,class:"aioseo-settings-row"},Ue={class:"select-site"},Ve={class:"aioseo-section-description"},Re={class:"import-plugin-label"},Ne={class:"plugin-label"},Me={key:0,class:"plugin-status"},Fe={key:3,class:"import-settings"};function Pe(r,t,C,l,e,a){const S=i("svg-download"),y=i("core-network-site-selector"),d=i("core-alert"),b=i("base-select"),g=i("base-checkbox"),w=i("grid-column"),v=i("grid-row"),_=i("base-button"),B=i("core-card");return n(),m(B,{id:"aioseo-import-others",class:"aioseo-import-others",slug:"importOtherPlugins",toggles:!1,"no-slide":"","header-text":e.strings.importSettingsFromOtherPlugins},{"header-icon":s(()=>[o(S)]),default:s(()=>[l.rootStore.aioseo.data.isNetworkAdmin?(n(),k("div",Te,[f("div",Ue,c(e.strings.selectSite),1),o(y,{onSelectedSite:t[0]||(t[0]=h=>e.site=h)})])):p("",!0),f("div",Ve,c(e.strings.importOthersDescription),1),e.importSuccess?(n(),m(d,{key:1,class:"import-success",type:"green"},{default:s(()=>[u(c(a.importSuccessful),1)]),_:1})):p("",!0),e.importError?(n(),m(d,{key:2,class:"import-error",type:"red"},{default:s(()=>[u(c(a.importErrorMessage),1)]),_:1})):p("",!0),o(b,{size:"medium",modelValue:e.plugin,"onUpdate:modelValue":t[1]||(t[1]=h=>e.plugin=h),options:a.plugins,placeholder:e.strings.selectPlugin,disabled:l.rootStore.aioseo.data.isNetworkAdmin&&!e.site},{option:s(({option:h})=>[f("div",Re,[f("span",Ne,c(h.label),1),h.$isDisabled?(n(),k("span",Me,c(e.strings.notInstalled),1)):p("",!0)])]),_:1},8,["modelValue","options","placeholder","disabled"]),e.plugin?(n(),k("div",Fe,[e.plugin.canImport?(n(),m(v,{key:0},{default:s(()=>[o(w,null,{default:s(()=>[o(g,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":t[2]||(t[2]=h=>e.options.all=h)},{default:s(()=>[u(c(e.strings.allSettings),1)]),_:1},8,["modelValue"])]),_:1}),(n(!0),k(O,null,A(a.settings,(h,V)=>(n(),m(w,{key:V,sm:"6"},{default:s(()=>[e.options.all?p("",!0):(n(),m(g,{key:0,size:"medium",modelValue:e.options[h.value],"onUpdate:modelValue":x=>e.options[h.value]=x},{default:s(()=>[u(c(h.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])),h.value!=="all"&&e.options.all?(n(),m(g,{key:1,size:"medium",modelValue:!0,disabled:""},{default:s(()=>[u(c(h.label),1)]),_:2},1024)):p("",!0)]),_:2},1024))),128))]),_:1})):p("",!0),e.plugin.canImport?p("",!0):(n(),m(d,{key:1,type:"red"},{default:s(()=>[u(c(a.invalidVersion(e.plugin)),1)]),_:1}))])):p("",!0),o(_,{type:"blue",size:"medium",class:"import",onClick:a.processImportPlugin,disabled:!e.plugin||!a.canImport,loading:e.loading},{default:s(()=>[u(c(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["header-text"])}const W=E(De,[["render",Pe]]);const ze={components:{BackupSettings:Y,GridColumn:T,GridRow:U,ExportSettings:H,ImportAioseo:q,ImportOthers:W}},je={class:"aioseo-tools-import-export"};function Le(r,t,C,l,e,a){const S=i("import-aioseo"),y=i("import-others"),d=i("grid-column"),b=i("export-settings"),g=i("grid-row"),w=i("backup-settings");return n(),k("div",je,[o(g,null,{default:s(()=>[o(d,{md:"6"},{default:s(()=>[o(S),o(y)]),_:1}),o(d,{md:"6"},{default:s(()=>[o(b)]),_:1})]),_:1}),o(g,null,{default:s(()=>[o(d,null,{default:s(()=>[o(w)]),_:1})]),_:1})])}const Ye=E(ze,[["render",Le]]);const He={components:{BackupSettings:Y,CoreBlur:ae,Cta:ce,GridColumn:T,GridRow:U,ExportSettings:H,ImportAioseo:q,ImportOthers:W},data(){return{strings:{ctaHeader:this.$t.sprintf(this.$t.__("This feature is not available in your current plan.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade Your Plan and Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},qe={class:"aioseo-tools-import-export"};function We(r,t,C,l,e,a){const S=i("import-aioseo"),y=i("import-others"),d=i("grid-column"),b=i("export-settings"),g=i("grid-row"),w=i("backup-settings"),v=i("core-blur"),_=i("cta");return n(),k("div",qe,[o(v,null,{default:s(()=>[o(g,null,{default:s(()=>[o(d,{md:"6"},{default:s(()=>[o(S),o(y)]),_:1}),o(d,{md:"6"},{default:s(()=>[o(b)]),_:1})]),_:1}),o(g,null,{default:s(()=>[o(d,null,{default:s(()=>[o(w)]),_:1})]),_:1})]),_:1}),o(_,{"cta-link":r.$links.getPricingUrl("network-tools","import-export"),"button-text":e.strings.ctaButtonText,"learn-more-link":r.$links.getUpsellUrl("network-tools","import-export","home")},{"header-text":s(()=>[u(c(e.strings.ctaHeader),1)]),description:s(()=>[u(c(e.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])])}const Ze=E(He,[["render",We]]),Ge={setup(){return{licenseStore:J(),rootStore:I()}},components:{ImportExport:Ye,LiteImportExport:Ze},data(){return{license:K}}};function Je(r,t,C,l,e,a){const S=i("import-export",!0),y=i("lite-import-export");return n(),k("div",null,[!l.rootStore.aioseo.data.isNetworkAdmin||!l.licenseStore.isUnlicensed&&e.license.hasCoreFeature("tools","network-tools-import-export")?(n(),m(S,{key:0})):p("",!0),l.rootStore.aioseo.data.isNetworkAdmin&&(l.licenseStore.isUnlicensed||!e.license.hasCoreFeature("tools","network-tools-import-export"))?(n(),m(y,{key:1})):p("",!0)])}const Tt=E(Ge,[["render",Je]]);export{Tt as default};
