(self.webpackChunklandrick_angular=self.webpackChunklandrick_angular||[]).push([[953],{2953:function(t,e,s){"use strict";s.r(e),s.d(e,{FolderStatusModule:function(){return O}});var i=s(40098),r=s(10384),a=s(58348),n=s(94753),o=s(19061),l=s(70661),c=s(8114),g=s(89004),d=s(36020),p=s(95040),u=s(91111);const m=["folderForm"];function Z(t,e){1&t&&(a.TgZ(0,"small",48),a._uU(1),a.ALo(2,"translate"),a.ALo(3,"translate"),a.qZA()),2&t&&(a.xp6(1),a.AsE(" ",a.lcZ(2,2,"FOLDER.NUM")," ",a.lcZ(3,4,"ISREQ"),""))}function h(t,e){1&t&&(a.TgZ(0,"small",48),a._uU(1),a.ALo(2,"translate"),a.ALo(3,"translate"),a.ALo(4,"translate"),a.qZA()),2&t&&(a.xp6(1),a.lnq(" ",a.lcZ(2,3,"FOLDER.NUM")," ",a.lcZ(3,5,"MUST")," 10 ",a.lcZ(4,7,"CHAR"),"."))}function A(t,e){if(1&t&&(a.TgZ(0,"div",46),a.YNc(1,Z,4,6,"small",47),a.YNc(2,h,5,9,"small",47),a.qZA()),2&t){a.oxw();const t=a.MAs(21);a.xp6(1),a.Q6J("ngIf",null==t.errors?null:t.errors.required),a.xp6(1),a.Q6J("ngIf",null==t.errors?null:t.errors.minlength)}}function T(t,e){1&t&&(a.TgZ(0,"small",48),a._uU(1),a.ALo(2,"translate"),a.ALo(3,"translate"),a.qZA()),2&t&&(a.xp6(1),a.AsE(" ",a.lcZ(2,2,"PERSON.DOC_NUM")," ",a.lcZ(3,4,"ISREQ"),""))}function _(t,e){1&t&&(a.TgZ(0,"small",48),a._uU(1),a.ALo(2,"translate"),a.ALo(3,"translate"),a.ALo(4,"translate"),a.qZA()),2&t&&(a.xp6(1),a.lnq(" ",a.lcZ(2,3,"PERSON.DOC_NUM")," ",a.lcZ(3,5,"MUST")," 6 ",a.lcZ(4,7,"CHAR"),"."))}function f(t,e){if(1&t&&(a.TgZ(0,"div",46),a.YNc(1,T,4,6,"small",47),a.YNc(2,_,5,9,"small",47),a.qZA()),2&t){a.oxw();const t=a.MAs(32);a.xp6(1),a.Q6J("ngIf",null==t.errors?null:t.errors.required),a.xp6(1),a.Q6J("ngIf",null==t.errors?null:t.errors.minlength)}}function E(t,e){1&t&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&t&&(a.xp6(1),a.hij(" ",a.lcZ(2,1,"PERSON.SUBMIT")," "))}function q(t,e){1&t&&(a.TgZ(0,"span"),a._UZ(1,"i",49),a.qZA())}function b(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div",24),a.TgZ(1,"div",25),a.TgZ(2,"h4",26),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.TgZ(5,"p",27),a._uU(6),a.ALo(7,"translate"),a.qZA(),a.TgZ(8,"form",28,29),a.TgZ(10,"div",30),a.TgZ(11,"div",31),a.TgZ(12,"div",32),a.TgZ(13,"div",33),a.TgZ(14,"label",34),a._uU(15),a.ALo(16,"translate"),a.TgZ(17,"span",35),a._uU(18,"*"),a.qZA(),a.qZA(),a.TgZ(19,"div",36),a.TgZ(20,"input",37,38),a.NdJ("input",function(){return a.CHM(t),a.oxw().autoSave()})("ngModelChange",function(e){return a.CHM(t),a.oxw().folderID=e}),a.ALo(22,"translate"),a.qZA(),a.YNc(23,A,3,2,"div",39),a.qZA(),a.qZA(),a.TgZ(24,"div",33),a.TgZ(25,"label",34),a._uU(26),a.ALo(27,"translate"),a.TgZ(28,"span",35),a._uU(29,"*"),a.qZA(),a.qZA(),a.TgZ(30,"div",36),a.TgZ(31,"input",40,41),a.NdJ("input",function(){return a.CHM(t),a.oxw().autoSave()})("ngModelChange",function(e){return a.CHM(t),a.oxw().personPassport=e}),a.ALo(33,"translate"),a.qZA(),a.qZA(),a.YNc(34,f,3,2,"div",39),a.qZA(),a.TgZ(35,"div"),a.TgZ(36,"p-captcha",42),a.NdJ("onResponse",function(e){return a.CHM(t),a.oxw().captchaResponse(e)}),a.qZA(),a.qZA(),a.TgZ(37,"div",43),a.TgZ(38,"button",44),a.NdJ("click",function(){return a.CHM(t),a.oxw().getStatus()}),a.YNc(39,E,3,3,"span",45),a.YNc(40,q,2,0,"span",45),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=a.MAs(21),e=a.MAs(32),s=a.oxw();a.xp6(3),a.Oqu(a.lcZ(4,13,"FOLDER.TRACK")),a.xp6(3),a.hij(" ",a.lcZ(7,15,"FOLDER.TRACK_TXT")," "),a.xp6(9),a.Oqu(a.lcZ(16,17,"FOLDER.NUM")),a.xp6(5),a.s9C("placeholder",a.lcZ(22,19,"PERSON.NUM")),a.Q6J("ngModel",s.folderID),a.xp6(3),a.Q6J("ngIf",t.invalid&&(t.dirty||t.touched)),a.xp6(3),a.Oqu(a.lcZ(27,21,"PERSON.DOC_NUM")),a.xp6(5),a.s9C("placeholder",a.lcZ(33,23,"PERSON.DOC_NUM")),a.Q6J("ngModel",s.personPassport),a.xp6(3),a.Q6J("ngIf",e.invalid&&(e.dirty||e.touched)),a.xp6(4),a.Q6J("disabled",!s.formsValid||s.submitted),a.xp6(1),a.Q6J("ngIf",!s.submitted),a.xp6(1),a.Q6J("ngIf",s.submitted)}}function S(t,e){if(1&t&&(a.TgZ(0,"div",24),a.TgZ(1,"div",25),a.TgZ(2,"h4",26),a._uU(3),a.ALo(4,"translate"),a.qZA(),a.TgZ(5,"p",27),a._uU(6),a.ALo(7,"translate"),a.qZA(),a.TgZ(8,"form",28),a.TgZ(9,"div",50),a.TgZ(10,"h4",51),a.TgZ(11,"span",27),a._uU(12),a.ALo(13,"translate"),a.qZA(),a._uU(14),a.qZA(),a.TgZ(15,"h4",6),a.TgZ(16,"span",27),a._uU(17),a.ALo(18,"translate"),a.qZA(),a._UZ(19,"br"),a._uU(20),a.ALo(21,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(3),a.Oqu(a.lcZ(4,7,"FOLDER.TRACK")),a.xp6(3),a.hij(" ",a.lcZ(7,9,"FOLDER.TRACK_TXT")," "),a.xp6(6),a.hij(" ",a.xi3(13,11,"FOLDER.SIMPLE","{count: 1}"),": "),a.xp6(2),a.hij(" ",t.folder.folderId," "),a.xp6(3),a.hij(" ",a.lcZ(18,14,"FOLDER.STATUS"),": "),a.xp6(3),a.AsE(" ",a.lcZ(21,16,"MSG."+t.status_msg)," ",t.site," ")}}const v=[{path:"",component:(()=>{class t{constructor(t,e,s,i,r){this.messageService=t,this.folderService=e,this.tService=s,this._renderer2=i,this._document=r,this.step=1,this.submitted=!1,this.formsValid=!1,this.captchaResponded=!1,this.validityEmitter=new a.vpe;let n=JSON.parse(localStorage.getItem("FOLDER"));null!=n&&(this.folderID=n);let o=JSON.parse(localStorage.getItem("STICKER"));null!=o&&(this.personPassport=o)}ngOnInit(){this.appendCaptchaScript(),this.tService.setTitle("FOLDER.STATUS"),this.stat=[{msg:"CREATED",site:""},{msg:"TREATMENT",site:"--"},{msg:"OS_SP_HUB",site:""},{msg:"IS_HUB_SP",site:""},{msg:"OS_HUB_CONS",site:""},{msg:"IS_CONS",site:""},{msg:"OS_CONS_HUB",site:"--"},{msg:"IS_HUB",site:"--"},{msg:"OS_HUB_SP",site:"--"},{msg:"IS_SP",site:"--"},{msg:"OS_SP_CLI",site:"--"},{msg:"OS_HUB_CR",site:""}]}getStatus(){this.submitted=!0,this.folderService.getFolderByFolderIDAndPersonPassport(this.folderID,this.personPassport).subscribe(t=>{t?(this.folder=t,this.step++,this.messages(),console.log("site",this.folder.site)):(this.messageService.add({severity:"error",summary:"Error",detail:"Folder not found: "+this.folderID,life:3e3}),this.submitted=!1)},t=>{this.submitted=!1,this.messageService.add({severity:"error",summary:"Error",detail:t.message,life:3e3})})}messages(){switch(this.folder.status){case n.qb.CREATED:case n.qb.RECEIVED:case n.qb.CASHOUT_RECEPTION:case n.qb.CASHOUT_WAITING:case n.qb.WAITING_ROOM:this.status_msg=this.stat[0].msg;break;case n.qb.TREATMENT:case n.qb.CALLED:case n.qb.COMPLIANT_QUALITY:case n.qb.COMPLIANT_VALIDITY:case n.qb.NON_COMPLIANT_QUALITY:case n.qb.NON_COMPLIANT_VALIDITY:this.status_msg=this.stat[1].msg,this.site=this.group.site.name;break;case n.qb.DELIVERED_TO_HUB:this.status_msg=this.stat[2].msg;break;case n.qb.RECEIVED_IN_HUB:this.status_msg=this.stat[3].msg;break;case n.qb.DELIVERED_EMBASSY:case n.qb.ADD_REC_DELIVERED:case n.qb.ADD_REC_RECEPTION:this.status_msg=this.stat[4].msg;break;case n.qb.EMBASSY_RECEIVED:this.status_msg=this.stat[5].msg;break;case n.qb.EMBASSY_DELIVERED_CENTER:this.status_msg=this.stat[6].msg,this.site=this.group.site.name;break;case n.qb.EMBASSY_RETURNED:this.status_msg=this.stat[7].msg,this.site=this.group.site.name;break;case n.qb.DELIVERED_TO_SITE:this.status_msg=this.stat[8].msg,this.site=this.group.site.name;break;case n.qb.RECEIVED_FROM_HUB:this.status_msg=this.stat[9].msg,this.site=this.group.site.name;break;case n.qb.DELIVERED_CLIENT:this.status_msg=this.stat[10].msg,this.site=this.group.site.name;break;case n.qb.PACKAGE_DELIVERED:this.status_msg=this.stat[11].msg;break;default:this.status_msg=this.stat[0].msg}}autoSave(){localStorage.setItem("FOLDER",JSON.stringify(this.folderID)),localStorage.setItem("STICKER",JSON.stringify(this.personPassport)),this.formCheck()}captchaResponse(t){this.captchaResponded=!0,this.formCheck()}formCheck(){this.formsValid=!1,this.folderForm.form.valid&&this.captchaResponded&&(this.formsValid=!0)}appendCaptchaScript(){let t=this._renderer2.createElement("script");t.setAttribute("id","reCaptcha"),t.setAttribute("src","https://www.google.com/recaptcha/api.js?render=explicit&onload=initRecaptcha"),t.setAttribute("async",""),t.setAttribute("defer",""),this._renderer2.appendChild(this._document.body,t)}ngOnDestroy(){this.tService.unsetTitle(),this._renderer2.removeChild(this._document.body,this._document.getElementById("reCaptcha"))}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(l.ez),a.Y36(c.s),a.Y36(g.y),a.Y36(a.Qsj),a.Y36(i.K0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-folder-status"]],viewQuery:function(t,e){if(1&t&&a.Gf(m,5,o.F),2&t){let t;a.iGM(t=a.CRH())&&(e.folderForm=t.first)}},outputs:{validityEmitter:"validityEmitter"},decls:36,vars:14,consts:[["id","home",1,"bg-half","bg-light","d-table","w-100",2,"background-image","url('assets/images/enterprise.webp')"],[1,"bg-overlay","bg-overlay-white"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-12","text-center"],[1,"page-next-level"],[1,"title"],[1,"page-next"],["aria-label","breadcrumb",1,"d-inline-block"],[1,"breadcrumb","bg-white","rounded","shadow","mb-0"],[1,"breadcrumb-item"],["routerLink",""],[1,"breadcrumb-item","active"],["aria-current","page",1,"breadcrumb-item","active"],[1,"position-relative"],[1,"shape","overflow-hidden","text-white"],["viewBox","0 0 2880 48","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z","fill","currentColor"],[1,"section"],[1,"row","align-items-center"],[1,"col-md-6"],["src","assets/images/illustrator/analyze_report_4.svg","alt","",1,"me-md-4"],["class","col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0",4,"ngIf"],["position","bottom-center"],[1,"col-md-6","mt-4","mt-sm-0","pt-2","pt-sm-0"],[1,"section-title","ms-lg-5"],[1,"title","mb-4"],[1,"text-muted"],[1,"margin-auto","w-form"],["folderForm","ngForm"],[1,"bg-light","component-wrapper","rounded","shadow"],[1,"p-4"],[1,"row"],[1,"mb-3"],[1,"form-label"],[1,"text-danger"],[1,"form-icon","position-relative"],["name","folderid","id","folderid","type","text","required","","minlength","10",1,"form-control","ps-5",3,"placeholder","ngModel","input","ngModelChange"],["folderid","ngModel"],["class","alert",4,"ngIf"],["name","sticker","id","sticker","type","text","required","","minlength","6",1,"form-control","ps-5",3,"placeholder","ngModel","input","ngModelChange"],["sticker","ngModel"],["siteKey","6LexX0gdAAAAALgAIyyaU_D9d3TS5if-hutvoAxS",3,"onResponse"],[1,"p-4",2,"padding-bottom","0 !important"],[1,"btn","btn-primary",2,"float","right",3,"disabled","click"],[4,"ngIf"],[1,"alert"],["class","p-error",4,"ngIf"],[1,"p-error"],[1,"pi","pi-spin","pi-spinner",2,"font-size","1.5rem"],[1,"bg-light","component-wrapper","rounded","shadow",2,"padding","1rem"],[1,"title","mb-2"]],template:function(t,e){1&t&&(a.TgZ(0,"section",0),a._UZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a.TgZ(6,"h4",6),a._uU(7),a.ALo(8,"translate"),a.qZA(),a.TgZ(9,"div",5),a.TgZ(10,"div",7),a.TgZ(11,"nav",8),a.TgZ(12,"ul",9),a.TgZ(13,"li",10),a.TgZ(14,"a",11),a._uU(15),a.ALo(16,"translate"),a.qZA(),a.qZA(),a.TgZ(17,"li",12),a.TgZ(18,"a"),a._uU(19),a.ALo(20,"translate"),a.qZA(),a.qZA(),a.TgZ(21,"li",13),a._uU(22),a.ALo(23,"translate"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(24,"div",14),a.TgZ(25,"div",15),a.O4$(),a.TgZ(26,"svg",16),a._UZ(27,"path",17),a.qZA(),a.qZA(),a.qZA(),a.kcU(),a.TgZ(28,"section",18),a.TgZ(29,"div",2),a.TgZ(30,"div",19),a.TgZ(31,"div",20),a._UZ(32,"img",21),a.qZA(),a.YNc(33,b,41,25,"div",22),a.YNc(34,S,22,18,"div",22),a.qZA(),a.qZA(),a.qZA(),a._UZ(35,"p-toast",23)),2&t&&(a.xp6(7),a.Oqu(a.lcZ(8,6,"FOLDER.STATUS")),a.xp6(8),a.Oqu(a.lcZ(16,8,"HOME")),a.xp6(4),a.Oqu(a.lcZ(20,10,"PROCEDURE")),a.xp6(3),a.hij(" ",a.lcZ(23,12,"FOLDER.STATUS")," "),a.xp6(11),a.Q6J("ngIf",1==e.step),a.xp6(1),a.Q6J("ngIf",2==e.step))},directives:[r.yS,i.O5,d.FN,o._Y,o.JL,o.F,o.Fj,o.Q7,o.wO,o.JJ,o.On,p.U],pipes:[u.X$],styles:["[_nghost-%COMP%]     p-captcha>div>div{float:right}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.Bz.forChild(v)],r.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,I,u.aw,o.u5,d.EV,p.N]]}),t})()}}]);