(function(){"use strict";var o={6717:function(o,t,e){var n=e(9242),r=e(3396);const s={class:"container mt-5 mb-5"};function i(o,t,e,n,i,a){const c=(0,r.up)("AddBook"),d=(0,r.up)("LoadingApp"),l=(0,r.up)("BookList");return(0,r.wg)(),(0,r.iD)("main",s,[(0,r.Wm)(c,{onEmitrefreshBooks:a.loadBooks},null,8,["onEmitrefreshBooks"]),i.loading?((0,r.wg)(),(0,r.j4)(d,{key:0})):((0,r.wg)(),(0,r.j4)(l,{key:1,books:{books:i.books},load:"true",onEmitLoading:a.setLoading,onEmitReadBook:a.loadBooks},null,8,["books","onEmitLoading","onEmitReadBook"]))])}function a(o,t,e,n,s,i){const a=(0,r.up)("ButtonRegister"),c=(0,r.up)("FormRegister");return s.registering?((0,r.wg)(),(0,r.j4)(c,{key:1,onEmitRefreshBook:i.refreshBook},null,8,["onEmitRefreshBook"])):((0,r.wg)(),(0,r.j4)(a,{key:0,onClick:i.onRegistering},null,8,["onClick"]))}const c={class:"border rounded p-3 mb-3"},d=(0,r._)("button",{class:"btn btn-primary"},"Registrar Nuevo",-1),l=[d];function u(o,t,e,n,s,i){return(0,r.wg)(),(0,r.iD)("section",c,l)}var b={name:"ButtonRegister"},f=e(89);const g=(0,f.Z)(b,[["render",u]]);var k=g;const h={class:"mb-3"},p={class:"card"},m=(0,r._)("div",{class:"card-header pb-1"},[(0,r._)("h5",null,"Información del libro")],-1),v={class:"card-body"},w={class:"form-group"},y=(0,r._)("label",{for:"title"},"Titúlo",-1),B={class:"form-group"},_=(0,r._)("label",{for:"author"},"Autor",-1),R={class:"card-footer"},j=["disabled"];function x(o,t,e,s,i,a){return(0,r.wg)(),(0,r.iD)("section",h,[(0,r._)("div",p,[m,(0,r._)("div",v,[(0,r._)("div",w,[y,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control form-control-lg","onUpdate:modelValue":t[0]||(t[0]=o=>i.book.title=o)},null,512),[[n.nr,i.book.title]])]),(0,r._)("div",B,[_,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control form-control-lg","onUpdate:modelValue":t[1]||(t[1]=o=>i.book.author=o)},null,512),[[n.nr,i.book.author]])])]),(0,r._)("div",R,[(0,r._)("button",{class:"btn btn-success",onClick:t[2]||(t[2]=(...o)=>a.sendBookData&&a.sendBookData(...o)),disabled:a.blockButtonRegister}," Registrar ",8,j)])])])}var O=e(6780);e(4406);const L={apiKey:"AIzaSyBZFs3MHriMup6d5Rnt3o2OrHjUpH5RXOs",authDomain:"books-read-e9b9b.firebaseapp.com",databaseURL:"https://books-read-e9b9b-default-rtdb.firebaseio.com",projectId:"books-read-e9b9b",storageBucket:"books-read-e9b9b.appspot.com",messagingSenderId:"508357986549",appId:"1:508357986549:web:457e66cd12bda3e1b3ddbc"};O.Z.initializeApp(L);const D=O.Z.firestore();O.Z;const A=async()=>{let o=[];return await D.collection("books").get().then((t=>{t.forEach((t=>{o.push({id:t.id,author:t.data().author,title:t.data().title,read:t.data().read})}))})),o},E=async o=>{let t;return await D.collection("books").add({title:o.title,author:o.author,read:!1}).then((o=>{console.log("Document written with ID: ",o.id),t=!0})).catch((o=>{console.error("Error adding document: ",o),t=null})),t},Z=async o=>{let t;const e=D.collection("books").doc(o),n=await e.get();return n.exists?await e.set({author:"Marco Aurelio",title:"Meditaciones",read:!n.data().read}).then((()=>t=!0)).catch((()=>t=!1)):t=!1,t};var C={name:"FormRegister",data(){return{book:{title:"",author:""}}},methods:{async sendBookData(){const o={title:this.book.title,author:this.book.author,read:!1},t=await E(o);t&&this.$emit("emitRefreshBook")}},computed:{blockButtonRegister(){return""===this.book.title.trim()||""===this.book.author.trim()}}};const z=(0,f.Z)(C,[["render",x]]);var I=z,M={name:"AddBook",components:{ButtonRegister:k,FormRegister:I},data(){return{registering:!1}},methods:{onRegistering(){this.registering=!0},refreshBook(){this.$emit("emitrefreshBooks"),this.registering=!1}}};const S=(0,f.Z)(M,[["render",a]]);var T=S;const F={class:"d-flex justify-content-center border mb-3 py-5 rounded"},H=(0,r._)("div",{class:"spinner-border text-secondary",role:"status"},[(0,r._)("span",{class:"sr-only"},"Loading...")],-1),P=[H];function U(o,t,e,n,s,i){return(0,r.wg)(),(0,r.iD)("div",F,P)}var N={name:"LoadingApp"};const $=(0,f.Z)(N,[["render",U]]);var K=$,V=e(7139);const q={class:"card"},W={class:"list-group list-hight border-0"},X={key:0,class:"mt-4 text-center"},Y={class:"mb-0"},G={class:"text-muted font-italic"},J=["onClick"],Q={class:"card-footer"},oo={class:"d-flex flex-column"},to={class:"badge badge-success"},eo={class:"badge badge-warning"};function no(o,t,e,n,s,i){return(0,r.wg)(),(0,r.iD)("section",q,[(0,r._)("div",W,[i.existBooks?((0,r.wg)(),(0,r.iD)("h4",X,"No hay registro")):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.books.books,(o=>((0,r.wg)(),(0,r.iD)("article",{key:o.id,class:(0,V.C_)(["list-group-item d-flex justify-content-between align-items-center",o.read?"list-group-item-success":""])},[(0,r._)("div",null,[(0,r._)("h5",Y,(0,V.zw)(o.title),1),(0,r._)("span",G,(0,V.zw)(o.author),1)]),(0,r._)("button",{class:(0,V.C_)(["btn",[o.read?"btn-dark":"btn-info"]]),onClick:t=>i.onReadBook(o.id)},(0,V.zw)(o.read?"Reiniciar":"Terminar"),11,J)],2)))),128))]),(0,r._)("div",Q,[(0,r._)("div",oo,[(0,r._)("h5",null,[(0,r._)("span",to,(0,V.zw)(i.reads)+" Lecturas terminadas",1)]),(0,r._)("h5",null,[(0,r._)("span",eo,(0,V.zw)(i.pendings)+" Lecturas pendientes",1)])])])])}var ro={name:"BookList",props:{books:Object},methods:{async onReadBook(o){const t=await Z(o);t&&this.$emit("emitReadBook")}},computed:{existBooks(){return null==this.books.books||0==this.books.books.length},reads(){return this.books.books.filter((o=>!0===o.read)).length},pendings(){return this.books.books.filter((o=>!1===o.read)).length}}};const so=(0,f.Z)(ro,[["render",no],["__scopeId","data-v-b8ece7a6"]]);var io=so,ao={name:"App",components:{AddBook:T,LoadingApp:K,BookList:io},data(){return{books:[],loading:!0}},methods:{async addNewBook(o){await E(o),alert("Libro registrado correctamente!"),this.loadBooks()},async loadBooks(){this.loading=!0,this.books=await A(),this.loading=!1},setLoading(o){this.loading=o}},created(){this.loadBooks()}};const co=(0,f.Z)(ao,[["render",i]]);var lo=co;(0,n.ri)(lo).mount("#app")}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return o[n](s,s.exports,e),s.exports}e.m=o,function(){var o=[];e.O=function(t,n,r,s){if(!n){var i=1/0;for(l=0;l<o.length;l++){n=o[l][0],r=o[l][1],s=o[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(e.O).every((function(o){return e.O[o](n[c])}))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){o.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=o.length;l>0&&o[l-1][2]>s;l--)o[l]=o[l-1];o[l]=[n,r,s]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var r,s,i=n[0],a=n[1],c=n[2],d=0;if(i.some((function(t){return 0!==o[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var l=c(e)}for(t&&t(n);d<i.length;d++)s=i[d],e.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return e.O(l)},n=self["webpackChunkbooks_read"]=self["webpackChunkbooks_read"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(6717)}));n=e.O(n)})();
//# sourceMappingURL=app.36e5e3e8.js.map