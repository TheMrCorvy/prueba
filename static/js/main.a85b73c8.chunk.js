(this["webpackJsonpsalud-y-derechos"]=this["webpackJsonpsalud-y-derechos"]||[]).push([[3],{136:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n.n(a),c=n(10),i=n.n(c),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,262)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},u=n(22),j=n(40),b=n(18),m=n(55),h={open:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.b:return{open:!0};case m.a:return{open:!1};default:return Object(b.a)({},e)}},p=n(34),f={infoModalOpen:{open:!1,service:{title:"",sub_title:"",summary:"",list:[""],description:"",regulatory_frame:""}},formModalOpen:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.a:return Object(b.a)(Object(b.a)({},e),{},{formModalOpen:!1});case p.b:return Object(b.a)(Object(b.a)({},e),{},{infoModalOpen:{open:!1,service:t.payload.service}});case p.c:return Object(b.a)(Object(b.a)({},e),{},{formModalOpen:!0});case p.d:return Object(b.a)(Object(b.a)({},e),{},{infoModalOpen:{open:!0,service:t.payload.service}});default:return Object(b.a)({},e)}},g=n(78),v={isGenericNavbar:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.a:return{isGenericNavbar:!0};case g.b:return{isGenericNavbar:!1};default:return Object(b.a)({},e)}},w=Object(j.combineReducers)({modal:x,drawer:O,navbar:y}),N=n(103),C=n(104),k=Object(j.createStore)(w,Object(N.composeWithDevTools)(Object(j.applyMiddleware)(C.a))),A=n(196),S=n(110),_=n(77),L=n(75),E=n(76),T=Object(S.a)({palette:{primary:{main:_.a.A400,light:_.a.A200,dark:_.a.A700},secondary:{dark:L.a.A400,main:E.a.A400,light:E.a.A200}}}),D=n(88),R=n(15),B=n(109),F=n.n(B),W=n(194),M=n(188),I=n(195),P=n(198),z=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,266))})),G=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,268))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,269))})),q=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,270))}));function V(){return Object(u.c)((function(e){return e.navbar.isGenericNavbar}))?Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(P.a,{smDown:!0,children:Object(r.jsx)(U,{})}),Object(r.jsx)(P.a,{mdUp:!0,children:Object(r.jsx)(q,{})})]}):Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(P.a,{smDown:!0,children:Object(r.jsx)(z,{})}),Object(r.jsx)(P.a,{mdUp:!0,children:Object(r.jsx)(G,{})})]})}var J=n(174),Y=n(200),H=n(175),K=n(176),$=Object(J.a)((function(e){return Object(Y.a)({root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}})}));function Q(e){var t=e.children,n=$(),o=Object(H.a)({disableHysteresis:!0,threshold:100});return Object(r.jsx)(a.Fragment,{children:Object(r.jsx)(K.a,{in:o,children:Object(r.jsx)("div",{onClick:function(e){window.scrollTo({top:0,behavior:"smooth"})},role:"presentation",className:n.root,children:t})})})}var X=n(20),Z=n.n(X),ee=n(31),te=n(24),ne=n(29),re=n(177),ae=n(179),oe=n(180),ce=n(181),ie=n(197),se=n(184),le=n(201),de=n(58),ue=n(186),je=n(187),be=n(38),me=n(111),he=Object(J.a)((function(){return{grid:{display:"flex",justifyContent:"space-around"},dialogContent:{overflowY:"hidden"},dialogActions:{justifyContent:"space-between",paddingRight:25,paddingLeft:25,paddingBottom:15},alertDanger:{textAlign:"center"},alertSuccess:{textAlign:"center",color:"#25D366"}}}));function Oe(){var e,t,n,c,i=he(),s=Object(a.useState)(""),l=Object(ne.a)(s,2),d=l[0],j=l[1],m=Object(u.b)(),h=function(){m(Object(be.a)())},O=Object(u.c)((function(e){return e.modal.formModalOpen})),p=o.a.useState({checkbox:!1}),f=Object(ne.a)(p,2),x=f[0],g=f[1],v=Object(me.a)(),y=v.register,w=v.handleSubmit,N=v.errors,C=function(e){return"El campo ".concat(e," es obligatorio.")},k=function(){var e=Object(ee.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j("loading"),e.next=3,fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_7e47vhb",template_id:"template_xx5a4bc",user_id:"user_mMNITIgF6TFcu7x2W2gCo",template_params:{name:t.name,email:t.email,phoneNumber:t.phoneNumber,message:t.message}})}).then((function(e){return e.text()})).then((function(e){console.log(e),j("ok"===e?"success":"error")})).catch((function(e){j("error"),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(a.Fragment,{children:Object(r.jsxs)(re.a,{open:O,onClose:h,maxWidth:"lg",fullWidth:!0,scroll:"body","aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(ae.a,{id:"form-dialog-title",children:"Complete este formulario para enviar su consulta"}),Object(r.jsxs)("form",{onSubmit:w((function(e,t){t.target.reset(),k(e)})),id:"form-email",children:[Object(r.jsx)(oe.a,{className:i.dialogContent,children:Object(r.jsxs)(ce.a,{container:!0,spacing:4,className:i.grid,children:[Object(r.jsx)(ce.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(r.jsx)(ie.a,{id:"name",label:"\xbfCu\xe1l es su Nombre?",variant:"outlined",name:"name",fullWidth:!0,error:!!(null===N||void 0===N?void 0:N.name),helperText:null===(e=N.name)||void 0===e?void 0:e.message,inputRef:y({required:{value:!0,message:C("Nombre")},maxLength:{value:50,message:"No puede haber m\xe1s de 50 caract\xe9res"},minLength:{value:5,message:"Debe haber un m\xednimo de 5 caract\xe9res"}})})}),Object(r.jsx)(ce.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(r.jsx)(ie.a,{id:"email",label:"Un email de contacto",variant:"outlined",name:"email",type:"email",error:!!(null===N||void 0===N?void 0:N.email),helperText:null===(t=N.email)||void 0===t?void 0:t.message,fullWidth:!0,inputRef:y({required:{value:!0,message:C("Email")},maxLength:{value:50,message:"No puede haber m\xe1s de 50 car\xe1cteres"},minLength:{value:5,message:"Dehe haber un m\xednimo de 5 car\xe1cteres"}})})}),Object(r.jsx)(ce.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(r.jsx)(ie.a,{id:"phoneNumber",label:"Su n\xfamero de tel\xe9fono",variant:"outlined",name:"phoneNumber",error:!!(null===N||void 0===N?void 0:N.phoneNumber),helperText:null===(n=N.phoneNumber)||void 0===n?void 0:n.message,fullWidth:!0,inputRef:y({required:{value:!0,message:C("N\xfamero de Tel\xe9fono")},maxLength:{value:16,message:"El n\xfamero no puede tener m\xe1s de 16 d\xedgitos"},minLength:{value:8,message:"El n\xfamero debe tener un m\xednimo de 8 d\xedgitos"}})})}),Object(r.jsx)(ce.a,{item:!0,xs:12,children:Object(r.jsx)(ie.a,{id:"message",label:"Detalle aqu\xed su consulta",variant:"outlined",name:"message",error:!!(null===N||void 0===N?void 0:N.message),helperText:null===(c=N.message)||void 0===c?void 0:c.message,multiline:!0,rows:4,rowsMax:8,fullWidth:!0,inputRef:y({required:{value:!0,message:C("Consulta")},maxLength:{value:190,message:"No puede haber m\xe1s de 190 caract\xe9res"},minLength:{value:10,message:"Debe haber un m\xednimo de 10 caract\xe9res"}})})}),Object(r.jsx)(ce.a,{item:!0,xs:12,children:Object(r.jsx)(se.a,{control:Object(r.jsx)(le.a,{checked:x.checkbox,onChange:function(e){g(Object(b.a)(Object(b.a)({},x),{},Object(te.a)({},e.target.name,e.target.checked)))},name:"checkbox",color:"primary",required:!0}),label:"Ya he revisado la documentaci\xf3n b\xe1sica."})}),Object(r.jsxs)(ce.a,{item:!0,xs:12,children:["error"===d&&Object(r.jsx)(de.a,{variant:"overline",display:"block",gutterBottom:!0,color:"secondary",className:i.alertDanger,children:"Vaya! parece que hubo un error, por favor intenta de nuevo en unos momentos."}),"success"===d&&Object(r.jsx)(de.a,{variant:"overline",display:"block",gutterBottom:!0,className:i.alertSuccess,children:"\xc9xito! Su consulta fue enviada sin problemas"}),"loading"===d&&Object(r.jsx)(de.a,{variant:"overline",display:"block",gutterBottom:!0,color:"primary",className:i.alertDanger,children:"Cargando... Por favor espere"})]})]})}),Object(r.jsxs)(ue.a,{className:i.dialogActions,children:[Object(r.jsx)(je.a,{variant:"outlined",onClick:h,color:"secondary",children:"volver"}),Object(r.jsx)(je.a,{variant:"outlined",color:"primary",type:"submit",children:"enviar"})]})]})]})})}function pe(){var e=Object(u.b)(),t=function(){e(Object(be.b)())},n=Object(u.c)((function(e){return e.modal.infoModalOpen.open})),a=Object(u.c)((function(e){return e.modal.infoModalOpen.service}));return Object(r.jsx)("div",{children:Object(r.jsxs)(re.a,{open:n,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",scroll:"paper",maxWidth:"md",children:[Object(r.jsx)(ae.a,{id:"alert-dialog-title",children:null===a||void 0===a?void 0:a.title}),Object(r.jsxs)(oe.a,{children:[Object(r.jsx)("ol",{id:"alert-dialog-description",children:null===a||void 0===a?void 0:a.list.map((function(e,t){return Object(r.jsx)("li",{style:{marginBottom:20},children:Object(r.jsx)(de.a,{variant:"body1",color:"initial",gutterBottom:!0,children:e})},t)}))}),Object(r.jsx)(de.a,{variant:"subtitle1",gutterBottom:!0,children:null===a||void 0===a?void 0:a.description}),Object(r.jsx)(de.a,{variant:"h5",gutterBottom:!0,style:{marginTop:40},children:"Marco Normativo"}),Object(r.jsx)(de.a,{variant:"body2",gutterBottom:!0,children:null===a||void 0===a?void 0:a.regulatory_frame})]}),Object(r.jsx)(ue.a,{children:Object(r.jsx)(je.a,{onClick:t,color:"primary",autoFocus:!0,children:"Volver al Sitio"})})]})})}var fe,xe=n(189),ge=Object(J.a)((function(){return{footerContainer:{paddingTop:"5rem",paddingBottom:"5rem",background:"#fff",marginTop:"7rem",marginBottom:"7rem",borderRadius:10},footerItem:{textAlign:"center",marginBottom:20,display:"flex",justifyContent:"center"},footerEnd:{textAlign:"center",marginTop:40},actionArea:{paddingTop:10,paddingLeft:10,paddingRight:10,borderRadius:10,width:"auto"}}})),ve=function(){var e=Object(u.b)(),t=ge();return Object(r.jsx)(a.Fragment,{children:Object(r.jsx)(M.a,{className:t.footerContainer,children:Object(r.jsxs)(ce.a,{container:!0,justify:"center",children:[Object(r.jsx)(ce.a,{item:!0,xs:12,className:t.footerItem,children:Object(r.jsx)(de.a,{variant:"h4",gutterBottom:!0,children:"Gracias por Visitarnos!"})}),Object(r.jsx)(ce.a,{item:!0,xs:12,className:t.footerItem,children:Object(r.jsx)(xe.a,{onClick:function(){return e(Object(be.c)())},className:t.actionArea,children:Object(r.jsx)(de.a,{variant:"h4",component:"h5",gutterBottom:!0,color:"primary",children:"CLICK PARA CONTACTARNOS"})})}),Object(r.jsx)(ce.a,{item:!0,xs:12,className:t.footerItem,children:Object(r.jsxs)(de.a,{variant:"body2",gutterBottom:!0,children:["Esta p\xe1gina fue hecha por"," ",Object(r.jsx)(de.a,{variant:"body2",gutterBottom:!0,component:"a",color:"primary",href:"http://corvalangonzalo.xyz",target:"_blank",children:"Gonzalo Salvador Corval\xe1n"})]})}),Object(r.jsx)(ce.a,{item:!0,xs:12,className:t.footerEnd,children:Object(r.jsx)(de.a,{variant:"h6",component:"h6",gutterBottom:!0,color:"secondary",children:"Salud y Derechos \xa9 2021 Todos los Derechos Reservados"})})]})})})},ye=n(199),we=n(139),Ne=n(190),Ce=n(191),ke=n(192),Ae=n(193),Se=n(93),_e=n.n(Se),Le=n(94),Ee=n.n(Le),Te=n(95),De=n.n(Te),Re=n(91),Be=n.n(Re),Fe=n(92),We=n.n(Fe),Me=n(108),Ie=n.n(Me),Pe=n(68);function ze(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.drawer.open})),n=Object(a.useState)(!1),o=Object(ne.a)(n,2),c=o[0],i=o[1];Object(a.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),fe=e,i(!0)})),window.addEventListener("appinstalled",(function(){console.log("INSTALL: Success")}))}),[]);return Object(r.jsx)(ye.a,{anchor:"right",open:t,onClose:function(){return e(Object(Pe.a)())},onOpen:function(){return e(Object(Pe.b)())},children:Object(r.jsx)("div",{role:"presentation",children:Object(r.jsxs)(we.a,{children:[Object(r.jsxs)(Ne.a,{button:!0,onClick:function(){e(Object(Pe.a)()),e(Object(be.c)())},children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(Be.a,{})}),Object(r.jsx)(ke.a,{primary:"Contacto"})]}),Object(r.jsx)(Ae.a,{}),Object(r.jsxs)(Ne.a,{button:!0,component:"a",href:"https://ar.linkedin.com/in/juan-pablo-corvalan",target:"_blank",children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(We.a,{})}),Object(r.jsx)(ke.a,{primary:"Encu\xe9ntranos en Linkedin"})]}),Object(r.jsx)(Ae.a,{}),Object(r.jsxs)(Ne.a,{button:!0,component:"a",href:"https://www.facebook.com/sharer/sharer.php?u=https://themrcorvy.github.io/salud-y-derechos",target:"_blank",children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(_e.a,{})}),Object(r.jsx)(ke.a,{primary:"Compartir en Facebook"})]}),Object(r.jsx)(Ae.a,{}),Object(r.jsxs)(Ne.a,{button:!0,component:"a",href:"https://twitter.com/intent/tweet?text=P\xe1gina%20web%20de%20Salud%20y%20derechos%20&amp;url=https://themrcorvy.github.io/salud-y-derechos",target:"_blank",children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(Ee.a,{})}),Object(r.jsx)(ke.a,{primary:"Compartir en Twitter"})]}),Object(r.jsx)(Ae.a,{}),Object(r.jsxs)(Ne.a,{button:!0,component:"a",href:"https://api.whatsapp.com/send?text=P\xe1gina%20web%20de%20Salud%20y%20Derechos%20&amp;https://themrcorvy.github.io/salud-y-derechos",target:"_blank",children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(De.a,{})}),Object(r.jsx)(ke.a,{primary:"Compartir en Whatsapp"})]}),Object(r.jsx)(Ae.a,{}),c&&Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(Ne.a,{button:!0,onClick:function(){i(!1),fe.prompt(),fe.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))},children:[Object(r.jsx)(Ce.a,{children:Object(r.jsx)(Ie.a,{})}),Object(r.jsx)(ke.a,{primary:"Instalar App"})]}),Object(r.jsx)(Ae.a,{})]})]})})})}function Ge(e){return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(W.a,{}),Object(r.jsx)(V,{}),Object(r.jsx)(M.a,{children:Object(r.jsx)("div",{id:"back-to-top-anchor",children:e.children})}),Object(r.jsx)(ve,{}),Object(r.jsx)(Q,Object(b.a)(Object(b.a)({},e),{},{children:Object(r.jsx)(I.a,{color:"secondary",size:"small","aria-label":"Volver Arriba",children:Object(r.jsx)(F.a,{})})})),Object(r.jsx)(Oe,{}),Object(r.jsx)(pe,{}),Object(r.jsx)(ze,{})]})}var Ue=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(8)]).then(n.bind(null,271))})),qe=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,273))})),Ve=function(){return Object(r.jsx)(D.a,{children:Object(r.jsx)(Ge,{children:Object(r.jsxs)(R.c,{children:[Object(r.jsx)(R.a,{exact:!0,path:"/conocenos",component:qe}),Object(r.jsx)(R.a,{path:"/",component:Ue})]})})})},Je=n(86),Ye=n.n(Je),He=Object(J.a)((function(e){return{root:{padding:e.spacing(3,2),height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}}));function Ke(){var e=He();return Object(r.jsx)(a.Fragment,{children:Object(r.jsx)(M.a,{children:Object(r.jsx)(ce.a,{container:!0,justify:"center",children:Object(r.jsxs)(ce.a,{item:!0,xs:12,className:e.root,children:[Object(r.jsx)("h3",{children:"Cargando..."}),Object(r.jsx)(Ye.a,{})]})})})})}i.a.render(Object(r.jsx)(u.a,{store:k,children:Object(r.jsx)(A.a,{theme:T,children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(Ke,{}),children:Object(r.jsx)(Ve,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(t,e)}))}}(),d(console.log)},34:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r="OPEN_INFO_MODAL",a="OPEN_FORM_MODAL",o="CLOSE_INFO_MODAL",c="CLOSE_FORM_MODAL"},38:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(34),a=function(e){return function(t){t({type:r.d,payload:{open:!0,service:e}})}},o=function(){return function(e){e({type:r.c,payload:!0})}},c=function(e){return function(t){t({type:r.b,payload:{open:!1,service:e}})}},i=function(){return function(e){e({type:r.a,payload:!1})}}},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="OPEN_DRAWER",a="CLOSE_DRAWER"},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(55),a=function(){return function(e){e({type:r.b})}},o=function(){return function(e){e({type:r.a})}}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="IS_GENERIC_NAVBAR",a="NOT_GENERIC_NAVBAR"}},[[136,4,5]]]);
//# sourceMappingURL=main.a85b73c8.chunk.js.map