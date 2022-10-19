(function(){var e={8342:function(e,t,n){"use strict";var a=n(9242),o=n(3396);function r(e,t,n,a,r,i){const s=(0,o.up)("Layout");return(0,o.wg)(),(0,o.j4)(s)}const i={class:"bg-white-pastel-medium dark:bg-[#3A3845]"},s={class:"m-auto w-[80%]"};function l(e,t,n,a,r,l){const c=(0,o.up)("Menu"),d=(0,o.up)("Home"),m=(0,o.up)("Article"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c),(0,o.Wm)(d),(0,o._)("main",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.articles,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e.title,title:e.title,text:!!e.text&&e.text,images:!!e.images&&e.images,class:"animate__animated animate__fadeInUp"},null,8,["title","text","images"])))),128))]),(0,o.Wm)(u)])}var c=n(7139),d=n(4427),m=n(2874);const u={class:"sticky top-0 z-10 flex items-center justify-between border-b-[0.01px] border-[#dddcdc] bg-white-pastel-light text-[1.4em] font-semibold tracking-wide text-brown-pastel-dark dark:border-[#815B5B] dark:bg-brown-pastel-darkest dark:text-[#F7CCAC] menu-md:grid menu-md:grid-cols-[minmax(7em,_1fr)_9fr_minmax(7em,_1fr)] menu-md:text-[1.2em]",id:"menu"},f=(0,o._)("div",{class:"hidden menu-md:flex menu-md:flex-row-reverse"},[(0,o._)("img",{class:"block w-[4em] justify-center dark:hidden",src:d}),(0,o._)("img",{class:"hidden w-[4em] justify-center dark:block",src:m})],-1),p={id:"socorro",class:"flex min-w-[4em] justify-end menu-md:hidden"},g={id:"barsIcon"},b={id:"arrowIcon",class:"hidden"},h={class:"flex justify-center"},v=["id","href"],w={class:"flex min-w-[4em]"},x={type:"button",id:"theme",class:"block w-[1.2em]"},k=(0,o._)("div",{id:"sideMenuBackground",class:"after:bg-black-pastel fixed after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:block after:opacity-0 after:transition-opacity after:duration-300 after:ease-in after:content-[''] menu-md:invisible"},null,-1),_={id:"sideMenu",class:"fixed z-40 hidden h-[100vh] w-[70vw] items-start justify-between border-r-[0.01px] border-[#dddcdc] bg-white-pastel-light px-[3em] pt-[2em] dark:border-[#815B5B] dark:bg-brown-pastel-darkest menu-md:invisible"},y={class:"flex flex-col justify-center"},I=["id","href"];function L(e,t,n,a,r,i){const s=(0,o.up)("Bars3Icon"),l=(0,o.up)("ArrowLeftCircleIcon"),d=(0,o.up)("SunIcon"),m=(0,o.up)("MoonIcon");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",u,[f,(0,o._)("div",p,[(0,o._)("button",(0,o.dG)({type:"button"},(0,o.mx)({click:i.toggleSideMenu},!0)),[(0,o._)("div",g,[(0,o.Wm)(s,{class:"w-[1.2em]"})]),(0,o._)("div",b,[(0,o.Wm)(l,{class:"w-[1.2em]"})])],16)]),(0,o._)("nav",null,[(0,o._)("ul",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.menu,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:e.name},[(0,o._)("a",(0,o.dG)({class:[t>0?"hidden menu-md:block":"","block px-7 py-5"],id:e.name,href:e.href},(0,o.mx)(0==t?{click:i.toggleSideMenu}:{},!0)),(0,c.zw)(e.name),17,v)])))),128))])]),(0,o._)("div",w,[(0,o._)("button",x,[(0,o.Wm)(d,{class:"block dark:hidden"}),(0,o.Wm)(m,{class:"hidden dark:block"})])])]),k,(0,o._)("nav",_,[(0,o._)("ul",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.menu,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:e.name},[(0,o._)("a",(0,o.dG)({class:[0==t?"hidden":"","block px-7 py-5 text-[1.5em] font-semibold text-brown-pastel-dark dark:text-[#F7CCAC] "],id:`${e.name}sideBar`,href:e.href},(0,o.mx)({click:i.toggleSideMenu},!0)),(0,c.zw)(e.name),17,I)])))),128))])])],64)}var E=n(3857),B=n(3847),j=n(7148),C=n(6323),O={name:"MenuPortfolio",components:{SunIcon:E.Z,ArrowLeftCircleIcon:B.Z,Bars3Icon:j.Z,MoonIcon:C.Z},mounted(){this.$nextTick((()=>{const e=document.getElementById("sideMenu"),t=document.getElementById("barsIcon"),n=document.getElementById("arrowIcon"),a=document.getElementById("sideMenuBackground"),o=document.documentElement,r=document.getElementById("theme");r.addEventListener("click",(()=>{o.classList.contains("dark")?o.classList.remove("dark"):o.classList.add("dark")})),e.addEventListener("animationend",(o=>{const r=o.target;if(r.classList.contains("animate__slideOutLeft"))return r.classList.remove("animate__animated","animate__slideOutLeft"),t.classList.remove("hidden"),n.classList.add("hidden"),e.classList.add("hidden"),void a.classList.remove("h-[100vh]","w-[100vw]");e.classList.remove("animate__animated","animate__slideInLeft")})),this.menu.forEach((t=>{const n=document.getElementById(t.name),a=document.getElementById(`${t.name}sideBar`);n.addEventListener("click",(e=>{const t=document.getElementById("sideMenu");if(e.preventDefault(),"home"!=e.target.id||t.classList.contains("hidden")){const t=document.getElementById(e.target.id.toUpperCase());t.scrollIntoView({behavior:"smooth",block:"start"})}})),a.addEventListener("click",(n=>{if(n.preventDefault(),e.classList.contains("animate__animated"))return;const a=document.getElementById(t.href);a.scrollIntoView({behavior:"smooth",block:"start"})}))}))}))},data(){return{menu:[{name:"home",href:"HOME"},{name:"sobre",href:"SOBRE"},{name:"experiência",href:"EXPERIÊNCIA"},{name:"projetos",href:"PROJETOS"}]}},methods:{toggleSideMenu(e){const t=document.getElementById("sideMenu"),n=document.getElementById("barsIcon"),a=document.getElementById("arrowIcon"),o=document.getElementById("sideMenuBackground");if(!t.classList.contains("animate__slideInLeft")||!t.classList.contains("animate__slideOutLeft")){if(t.classList.contains("hidden")&&"home"!=e.target.id)return n.classList.add("hidden"),a.classList.remove("hidden"),o.classList.remove("after:opacity-0"),o.classList.add("after:opacity-25","dark:after:opacity-50","z-30"),o.classList.add("h-[100vh]","w-[100vw]"),t.classList.remove("hidden"),t.classList.add("animate__animated","animate__slideInLeft"),void(document.body.style.overflow="hidden");if(!t.classList.contains("hidden")&&"A"==e.target.tagName){let t=document.getElementById(e.target.id.toUpperCase().replace("SIDEBAR",""));t.scrollIntoView({behavior:"smooth",block:"start"})}t.classList.contains("animate__animated")||t.classList.contains("hidden")||t.classList.add("animate__animated","animate__slideOutLeft")}t.classList.contains("animate__slideOutLeft")&&(o.classList.remove("after:opacity-25","dark:after:opacity-50","z-30"),o.classList.add("after:opacity-0"),document.body.style.overflow="auto")}}},S=n(89);const A=(0,S.Z)(O,[["render",L]]);var M=A,D=n(6559);const P={id:"HOME",class:"animate__animated animate__fadeInUp m-auto flex w-[100%] flex-col justify-between py-[3em] pb-0 pt-[5em] text-[1.2em] text-brown-pastel-dark dark:text-[#F7CCAC] md:w-[21.5em] md:flex-row md:pt-[5em] menu-md:text-[1em]"},z=(0,o._)("img",{class:"m-auto w-[8em] rounded-full border-[0.3em] border-white-pastel-light outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:outline-[#815B5B] md:m-0",src:D},null,-1),T={class:"flex h-[6em] flex-col justify-between self-center pt-[1em] text-center md:pt-0 md:text-start"},F=(0,o._)("div",null,[(0,o._)("h1",null,"sarah"),(0,o._)("h2",null,"desenvolvedora & artista.")],-1),Z={class:"flex w-[6em] justify-between self-center md:self-start"},H=(0,o._)("a",{href:"https://github.com/piltie",target:"_blank"},[(0,o._)("i",{class:"fa-brands fa-github flex"})],-1),U={href:"EMAIL",id:"email"},W=(0,o._)("a",{href:"https://www.linkedin.com/in/sarahcarlasouza",target:"_blank"},[(0,o._)("i",{class:"fa-brands fa-linkedin flex"})],-1);function V(e,t,n,a,r,i){const s=(0,o.up)("AtSymbolIcon");return(0,o.wg)(),(0,o.iD)("div",P,[z,(0,o._)("div",T,[F,(0,o._)("div",Z,[H,(0,o._)("a",U,[(0,o.Wm)(s,{class:"w-[1.1em]"})]),W])])])}var N=n(5879),R={name:"HomePortfolio",components:{AtSymbolIcon:N.Z},mounted(){const e=document.getElementById("email");e.addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("EMAIL");t.scrollIntoView({behavior:"smooth",block:"start"})}))}};const q=(0,S.Z)(R,[["render",V]]);var Y=q;const $={class:"m-auto mt-[5em] flex justify-center bg-brown-pastel-light py-[3em] text-[1.3em] font-semibold tracking-wide text-brown-pastel-dark dark:bg-[#594545] dark:text-[#F7CCAC] footer-sm:text-[1em] menu-md:text-[1.2em]"},G={class:"flex h-[15.5em] w-[100%] flex-col items-center justify-between"},J=(0,o._)("img",{class:"self-top block w-[6em] dark:hidden",src:d},null,-1),K=(0,o._)("img",{class:"self-top hidden w-[6em] dark:block",src:m},null,-1),Q={class:"flex h-[12.5em] flex-col flex-wrap justify-between text-center"},X={class:"flex h-[9.5em] flex-col flex-wrap justify-between"},ee=(0,o._)("h1",{class:"text-[1.2em]"},"CONTATO",-1),te={class:"flex flex-col"},ne={href:"./Curriculo.pdf",target:"_blank",class:"flex justify-center py-[0.2em] text-[1em]"},ae=(0,o.Uk)(" currículo (PDF) "),oe=(0,o._)("a",{href:"https://github.com/piltie",target:"_blank",class:"py-[0.2em] text-[1em]"},[(0,o._)("i",{class:"fa-solid fa-code-branch mr-[0.2em] text-[0.8em]"}),(0,o.Uk)("github.com/piltie")],-1),re=(0,o._)("a",{href:"https://www.linkedin.com/in/sarahcarlasouza",target:"_blank",class:"py-[0.2em] text-[1em]"},[(0,o._)("i",{class:"fa-brands fa-linkedin mr-[0.2em] text-[0.8em]"}),(0,o.Uk)("linkedin.com/in/sarahcarlasouza")],-1),ie={class:"flex justify-center py-[0.2em] text-[1em]",id:"EMAIL"},se=(0,o.Uk)(" sarahcarlasouza.info@gmail.com "),le={class:"mt-[0.5em] text-[0.7em]"};function ce(e,t,n,a,r,i){const s=(0,o.up)("PaperClipIcon"),l=(0,o.up)("EnvelopeIcon");return(0,o.wg)(),(0,o.iD)("footer",$,[(0,o._)("div",G,[J,K,(0,o._)("div",Q,[(0,o._)("div",X,[ee,(0,o._)("div",te,[(0,o._)("a",ne,[(0,o.Wm)(s,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),ae]),oe,re,(0,o._)("div",ie,[(0,o.Wm)(l,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),se])])]),(0,o._)("p",le," © "+(0,c.zw)((new Date).getFullYear())+" Portfólio | Criado por Sarah Carla Souza. ",1)])])])}var de=n(7536),me=n(2452),ue={name:"FooterPortfolio",components:{EnvelopeIcon:de.Z,PaperClipIcon:me.Z}};const fe=(0,S.Z)(ue,[["render",ce]]);var pe=fe;const ge=["id"],be={class:"flex justify-center"},he={class:"text-center text-[2.1em] text-brown-pastel-dark dark:text-[#F7CCAC]"},ve=["id"],we={key:1,class:"m-auto flex w-[95%] flex-wrap justify-center pb-[2em] text-center text-[1.2em] project-img:w-[100%] project-img:flex-col"},xe=["href"],ke=["src","alt"],_e={class:"p-[1em] text-[1em] text-[#888787] dark:text-[#cfc4c4]"},ye=(0,o._)("hr",{class:"dark:border-[#815B5B]"},null,-1);function Ie(e,t,a,r,i,s){return(0,o.wg)(),(0,o.iD)("div",{class:"pt-[6em]",id:a.title},[(0,o._)("div",be,[(0,o._)("h1",he,(0,c.zw)(a.title),1)]),(0,o._)("div",null,[a.text?((0,o.wg)(),(0,o.iD)("p",{key:0,id:`${a.title}Texto`,class:"py-[2em] text-[1.2em] font-semibold text-[#7c7b7b] dark:text-[#aaa7a7] menu-md:text-[1em]"},null,8,ve)):(0,o.kq)("",!0),a.images?((0,o.wg)(),(0,o.iD)("div",we,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.images,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.alt,class:"mx-[1em] mt-[2em] w-[38%] border-[0.3em] border-white-pastel-light bg-white-default outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:bg-brown-pastel-darkest dark:outline-[#815B5B] project-img:mx-0 project-img:w-[100%]"},[(0,o._)("a",{href:e.link,target:"_blank"},[(0,o._)("img",{src:n(990)(`./${e.src}`),alt:e.alt},null,8,ke)],8,xe),(0,o._)("h2",_e,(0,c.zw)(e.caption),1)])))),128))])):(0,o.kq)("",!0)]),ye],8,ge)}var Le={name:"ArticleTemplate",props:{title:{String:String},text:{String:String,Boolean:Boolean},images:{Array:Array,Boolean:Boolean}},mounted(){if(this.text){var e=document.getElementById(`${this.title}Texto`);e.innerHTML=this.text}}};const Ee=(0,S.Z)(Le,[["render",Ie]]);var Be=Ee,je={name:"LayoutPortfolio",components:{Menu:M,Home:Y,Article:Be,Footer:pe},data(){return{articles:[{title:"SOBRE",text:"Sou uma Desenvolvedora Júnior com sede de aprendizado, além de ser estudante de Sistemas de Informação. Estou aprendendo na prática tecnologias web, tanto front-end quanto back-end. Comecei a desenvolver em ASP.NET MVC e Vue.js com Tailwind/Bootstrap 5, juntamente com Oracle/SQL Server no banco de dados.<br>Tenho também o pacote básico de linguagens de qualquer desenvolvedor web (Javascript, HTML5 e CSS), enquanto também lido com Python, SQL e C#.<br>Meu objetivo é me estabelecer nessa área web full stack, procurando sempre superar minhas metas."},{title:"EXPERIÊNCIA",text:"Em janeiro de 2021 iniciei minha graduação no curso de S.I, na UniFOA. Em setembro do mesmo ano, comecei um estágio como programadora, também na UniFOA, e atualmente trabalho na mesma como desenvolvedora web full stack júnior, desenvolvendo sistemas webs/APIs em .NET + React/Vue.js com base de dados Oracle e SQL Server (utilizando ferramentas como git e azure), e também dando manutenção em sistemas legado (ASP clássico/VBScript)."},{title:"PROJETOS",images:[{src:"molang.png",alt:"Molang",caption:"html, css e javascript puro",link:"https://github.com/piltie/E-commerce-website"},{src:"gatteria.png",alt:"Gatteria",caption:"vue e tailwind css",link:"https://github.com/piltie/E-commerce-website-Vue-"},{src:"embreve.png",alt:"Em breve",caption:"react e asp.net core mvc"},{src:"embreve.png",alt:"Em breve",caption:"angular e asp.net core mvc"},{src:"embreve.png",alt:"Em breve",caption:" asp.net core web api"}]}]}}};const Ce=(0,S.Z)(je,[["render",l]]);var Oe=Ce,Se={name:"App",components:{Layout:Oe}};const Ae=(0,S.Z)(Se,[["render",r]]);var Me=Ae;(0,a.ri)(Me).mount("#app")},990:function(e,t,n){var a={"./embreve.png":2783,"./gatteria.png":6018,"./logo-dark.png":2874,"./logo.png":4427,"./molang.png":3884,"./sarah.jpg":6559};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=990},2783:function(e,t,n){"use strict";e.exports=n.p+"img/embreve.e2d6d242.png"},6018:function(e,t,n){"use strict";e.exports=n.p+"img/gatteria.b986c747.png"},2874:function(e,t,n){"use strict";e.exports=n.p+"img/logo-dark.5e49cb18.png"},4427:function(e,t,n){"use strict";e.exports=n.p+"img/logo.7ec241c3.png"},3884:function(e,t,n){"use strict";e.exports=n.p+"img/molang.747928f2.png"},6559:function(e,t,n){"use strict";e.exports=n.p+"img/sarah.9200e6ca.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],r=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(a);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8342)}));a=n.O(a)})();
//# sourceMappingURL=app.df756373.js.map