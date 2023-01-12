(function(){var e={8830:function(e,t,n){"use strict";var a=n(9242),i=n(3396);const o={class:"bg-white-pastel-medium dark:bg-[#3A3845]"},r={class:"m-auto w-[80%]"};function s(e,t,n,a,s,c){const l=(0,i.up)("Menu"),d=(0,i.up)("Home"),m=(0,i.up)("Articles"),u=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(l),(0,i.Wm)(d),(0,i._)("main",r,[(0,i.Wm)(m)]),(0,i.Wm)(u)])}var c=n(7139),l=n(4427),d=n(2874);const m={class:"sticky top-0 z-10 flex items-center justify-between border-b-[0.01px] border-[#dddcdc] bg-white-pastel-light text-[1.5em] font-semibold tracking-wide text-brown-pastel-dark dark:border-[#815B5B] dark:bg-brown-pastel-darkest dark:text-[#F7CCAC] menu-md:grid menu-md:grid-cols-[minmax(7em,_1fr)_9fr_minmax(7em,_1fr)]",id:"menu"},u=(0,i._)("div",{class:"hidden menu-md:flex menu-md:flex-row-reverse"},[(0,i._)("img",{class:"block w-[4em] justify-center dark:hidden",src:l}),(0,i._)("img",{class:"hidden w-[4em] justify-center dark:block",src:d})],-1),f={id:"socorro",class:"flex min-w-[4em] justify-end menu-md:hidden"},p={id:"barsIcon"},g={id:"arrowIcon",class:"hidden"},b={class:"flex justify-center"},h=["id","href"],v={class:"flex min-w-[4em]"},w={type:"button",id:"theme",class:"block w-[1.2em]"},k=(0,i._)("div",{id:"sideMenuBackground",class:"fixed after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:block after:bg-black after:opacity-0 after:transition-opacity after:duration-300 after:ease-in after:content-[''] menu-md:invisible"},null,-1),x={id:"sideMenu",class:"fixed z-40 hidden h-[100vh] w-[70vw] items-start justify-between border-r-[0.01px] border-[#dddcdc] bg-white-pastel-light px-[3em] pt-[2em] dark:border-[#815B5B] dark:bg-brown-pastel-darkest menu-md:invisible"},_={class:"flex flex-col justify-center"},y=["id","href"];function I(e,t,n,a,o,r){const s=(0,i.up)("Bars3Icon"),l=(0,i.up)("ArrowLeftCircleIcon"),d=(0,i.up)("SunIcon"),I=(0,i.up)("MoonIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",m,[u,(0,i._)("div",f,[(0,i._)("button",(0,i.dG)({type:"button"},(0,i.mx)({click:r.toggleSideMenu},!0)),[(0,i._)("div",p,[(0,i.Wm)(s,{class:"w-[1.2em]"})]),(0,i._)("div",g,[(0,i.Wm)(l,{class:"w-[1.2em]"})])],16)]),(0,i._)("nav",null,[(0,i._)("ul",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.menu,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:e.name},[(0,i._)("a",(0,i.dG)({class:[t>0?"hidden menu-md:block":"","block px-7 py-5"],id:e.name,href:e.href},(0,i.mx)(0==t?{click:r.toggleSideMenu}:{},!0)),(0,c.zw)(e.name),17,h)])))),128))])]),(0,i._)("div",v,[(0,i._)("button",w,[(0,i.Wm)(d,{class:"block dark:hidden"}),(0,i.Wm)(I,{class:"hidden dark:block"})])])]),k,(0,i._)("nav",x,[(0,i._)("ul",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.menu,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:e.name},[(0,i._)("a",(0,i.dG)({class:[0==t?"hidden":"","block px-7 py-5 text-[1.5em] font-semibold text-brown-pastel-dark dark:text-[#F7CCAC] "],id:`${e.name}sideBar`,href:e.href},(0,i.mx)({click:r.toggleSideMenu},!0)),(0,c.zw)(e.name),17,y)])))),128))])])],64)}var E=n(3857),L=n(3847),j=n(7148),B=n(6323),O={name:"MenuPortfolio",components:{SunIcon:E.Z,ArrowLeftCircleIcon:L.Z,Bars3Icon:j.Z,MoonIcon:B.Z},mounted(){this.$nextTick((()=>{const e=document.getElementById("sideMenu"),t=document.getElementById("barsIcon"),n=document.getElementById("arrowIcon"),a=document.getElementById("sideMenuBackground"),i=document.documentElement,o=document.getElementById("theme");o.addEventListener("click",(()=>{i.classList.contains("dark")?i.classList.remove("dark"):i.classList.add("dark")})),e.addEventListener("animationend",(i=>{const o=i.target;if(o.classList.contains("animate__slideOutLeft"))return o.classList.remove("animate__animated","animate__slideOutLeft"),t.classList.remove("hidden"),n.classList.add("hidden"),e.classList.add("hidden"),void a.classList.remove("h-[100vh]","w-[100vw]");e.classList.remove("animate__animated","animate__slideInLeft")})),this.menu.forEach((t=>{const n=document.getElementById(t.name),a=document.getElementById(`${t.name}sideBar`);n.addEventListener("click",(e=>{const t=document.getElementById("sideMenu");if(e.preventDefault(),"home"!=e.target.id||t.classList.contains("hidden")){const t=document.getElementById(e.target.id.toUpperCase());t.scrollIntoView({behavior:"smooth",block:"start"})}})),a.addEventListener("click",(n=>{if(n.preventDefault(),e.classList.contains("animate__animated"))return;const a=document.getElementById(t.href);a.scrollIntoView({behavior:"smooth",block:"start"})}))}))}))},data(){return{menu:[{name:"home",href:"HOME"},{name:"sobre",href:"SOBRE"},{name:"experiência",href:"EXPERIÊNCIA"},{name:"projetos",href:"PROJETOS"}]}},methods:{toggleSideMenu(e){const t=document.getElementById("sideMenu"),n=document.getElementById("barsIcon"),a=document.getElementById("arrowIcon"),i=document.getElementById("sideMenuBackground");if(!t.classList.contains("animate__slideInLeft")||!t.classList.contains("animate__slideOutLeft")){if(t.classList.contains("hidden")&&"home"!=e.target.id)return n.classList.add("hidden"),a.classList.remove("hidden"),i.classList.remove("after:opacity-0"),i.classList.add("after:opacity-25","dark:after:opacity-50","z-30","h-[100vh]","w-[100vw]"),t.classList.remove("hidden"),t.classList.add("animate__animated","animate__slideInLeft"),void(document.body.style.overflow="hidden");if(!t.classList.contains("hidden")&&"A"==e.target.tagName){let t=document.getElementById(e.target.id.toUpperCase().replace("SIDEBAR",""));t.scrollIntoView({behavior:"smooth",block:"start"})}t.classList.contains("animate__animated")||t.classList.contains("hidden")||t.classList.add("animate__animated","animate__slideOutLeft")}t.classList.contains("animate__slideOutLeft")&&(i.classList.remove("after:opacity-25","dark:after:opacity-50","z-30"),i.classList.add("after:opacity-0"),document.body.style.overflow="auto")}}},C=n(89);const M=(0,C.Z)(O,[["render",I]]);var A=M,S=n(6559);const D={id:"HOME",class:"animate__animated animate__fadeInUp m-auto flex w-[100%] flex-col justify-between py-[3em] pb-0 pt-[5em] text-[1.2em] text-brown-pastel-dark dark:text-[#F7CCAC] md:w-[21.5em] md:flex-row md:pt-[5em]"},P=(0,i._)("img",{class:"m-auto w-[8em] rounded-full border-[0.3em] border-white-pastel-light outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:outline-[#815B5B] md:m-0",src:S},null,-1),T={class:"flex h-[6em] flex-col justify-between self-center pt-[1em] text-center md:pt-0 md:text-start"},z=(0,i._)("div",null,[(0,i._)("h1",null,"sarah"),(0,i._)("h2",null,"desenvolvedora & artista.")],-1),F={class:"flex w-[6em] justify-between self-center md:self-start"},U=(0,i._)("a",{href:"https://github.com/piltie",target:"_blank"},[(0,i._)("i",{class:"fa-brands fa-github flex"})],-1),W={href:"EMAIL",id:"email"},H=(0,i._)("a",{href:"https://www.linkedin.com/in/sarahcarlasouza",target:"_blank"},[(0,i._)("i",{class:"fa-brands fa-linkedin flex"})],-1);function Z(e,t,n,a,o,r){const s=(0,i.up)("AtSymbolIcon");return(0,i.wg)(),(0,i.iD)("div",D,[P,(0,i._)("div",T,[z,(0,i._)("div",F,[U,(0,i._)("a",W,[(0,i.Wm)(s,{class:"w-[1.1em]"})]),H])])])}var R=n(5879),V={name:"HomePortfolio",components:{AtSymbolIcon:R.Z},mounted(){const e=document.getElementById("email");e.addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("EMAIL");t.scrollIntoView({behavior:"smooth",block:"start"})}))}};const q=(0,C.Z)(V,[["render",Z]]);var N=q;const $={class:"m-auto mt-[5em] flex justify-center bg-brown-pastel-light py-[3em] text-[1.3em] font-semibold tracking-wide text-brown-pastel-dark dark:bg-[#594545] dark:text-[#F7CCAC] footer-sm:text-[1em] menu-md:text-[1.2em]"},Y={class:"flex h-[17em] w-[100%] flex-col items-center justify-between"},G=(0,i._)("img",{class:"self-top block w-[6em] dark:hidden",src:l},null,-1),K=(0,i._)("img",{class:"self-top hidden w-[6em] dark:block",src:d},null,-1),J={class:"flex h-[14em] flex-col flex-wrap justify-between text-center"},Q={class:"flex h-[12em] flex-col flex-wrap justify-between"},X=(0,i._)("h1",{class:"text-[1.2em]"},"CONTATO",-1),ee={class:"flex flex-col"},te={href:"./Curriculo.pdf",target:"_blank",class:"flex justify-center py-[0.2em] text-[1em]"},ne=(0,i.Uk)(" currículo (PDF) "),ae={href:"./Curriculum.pdf",target:"_blank",class:"flex justify-center py-[0.2em] text-[1em]"},ie=(0,i.Uk)(" curriculum (english) "),oe=(0,i._)("a",{href:"https://github.com/piltie",target:"_blank",class:"py-[0.2em] text-[1em]"},[(0,i._)("i",{class:"fa-solid fa-code-branch mr-[0.2em] text-[0.8em]"}),(0,i.Uk)("github.com/piltie")],-1),re=(0,i._)("a",{href:"https://www.linkedin.com/in/sarahcarlasouza",target:"_blank",class:"py-[0.2em] text-[1em]"},[(0,i._)("i",{class:"fa-brands fa-linkedin mr-[0.2em] text-[0.8em]"}),(0,i.Uk)("linkedin.com/in/sarahcarlasouza")],-1),se={class:"flex justify-center py-[0.2em] text-[1em]",id:"EMAIL"},ce=(0,i.Uk)(" sarahcarlasouza.info@gmail.com "),le={class:"mt-[0.5em] text-[0.7em]"};function de(e,t,n,a,o,r){const s=(0,i.up)("PaperClipIcon"),l=(0,i.up)("EnvelopeIcon");return(0,i.wg)(),(0,i.iD)("footer",$,[(0,i._)("div",Y,[G,K,(0,i._)("div",J,[(0,i._)("div",Q,[X,(0,i._)("div",ee,[(0,i._)("a",te,[(0,i.Wm)(s,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),ne]),(0,i._)("a",ae,[(0,i.Wm)(s,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),ie]),oe,re,(0,i._)("div",se,[(0,i.Wm)(l,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),ce])])]),(0,i._)("p",le," © "+(0,c.zw)((new Date).getFullYear())+" Portfólio | Criado por Sarah Carla Souza. ",1)])])])}var me=n(7536),ue=n(2452),fe={name:"FooterPortfolio",components:{EnvelopeIcon:me.Z,PaperClipIcon:ue.Z}};const pe=(0,C.Z)(fe,[["render",de]]);var ge=pe;const be=["id"],he={class:"flex justify-center"},ve={class:"text-center text-[2.1em] text-brown-pastel-dark dark:text-[#F7CCAC]"},we=["id"],ke={key:1,class:"m-auto flex w-[95%] flex-wrap justify-center pb-[2em] text-center text-[1.2em] project-img:w-[100%] project-img:flex-col"},xe=["href"],_e=["src","alt"],ye={class:"p-[1em] text-[1.2em] text-[#888787] dark:text-[#cfc4c4]"},Ie=(0,i._)("hr",{class:"dark:border-[#815B5B]"},null,-1);function Ee(e,t,a,o,r,s){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.articles,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.title,id:e.title,class:"animate__animated animate__fadeInUp pt-[6em]"},[(0,i._)("div",he,[(0,i._)("h1",ve,(0,c.zw)(e.title),1)]),(0,i._)("div",null,[e.text?((0,i.wg)(),(0,i.iD)("p",{key:0,id:`${e.title}Texto`,class:"py-[2em] text-[1.2em] font-semibold text-[#7c7b7b] dark:text-[#aaa7a7]"},null,8,we)):(0,i.kq)("",!0),e.images?((0,i.wg)(),(0,i.iD)("div",ke,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.images,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.alt,class:"mx-[1em] mt-[2em] w-[38%] border-[0.3em] border-white-pastel-light bg-white-default outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:bg-brown-pastel-darkest dark:outline-[#815B5B] project-img:mx-0 project-img:w-[100%]"},[(0,i._)("a",{href:e.link,target:"_blank"},[(0,i._)("img",{src:n(990)(`./${e.src}`),alt:e.alt},null,8,_e)],8,xe),(0,i._)("h2",ye,(0,c.zw)(e.caption),1)])))),128))])):(0,i.kq)("",!0)]),Ie],8,be)))),128)}var Le={name:"ArticlesPortfolio",data(){return{articles:[{title:"SOBRE",text:"Sou uma Desenvolvedora com sede de aprendizado, além de ser estudante de Sistemas de Informação.<br>Comecei a desenvolver em ASP.NET MVC e Vue.js com Tailwind/Bootstrap 5, juntamente com Oracle no banco de dados. Tenho o pacote básico de linguagens de qualquer desenvolvedor web (Javascript, HTML5 e CSS), enquanto também lido com Python, SQL e C#. Também comecei a estudar Vue.js, React.js (Typescript), MongoDB e PostgreSQL (C/ Sequelize) Dockers e Tailwind, e a aplicar meus conhecimentos.<br>Em quesito de técnicas de desenvolvimento e afins, tenho conhecimento em OOP e POP, Metodologia Ágil, Web APIs REST, Arquitetura MVC e TDD."},{title:"EXPERIÊNCIA",text:"Em janeiro de 2021 iniciei minha graduação no curso de S.I, na UniFOA. Em setembro do mesmo ano, comecei um estágio como programadora, também na UniFOA, e atualmente trabalho na mesma como desenvolvedora web full stack júnior, desenvolvendo sistemas webs/APIs em .NET + React/Vue.js com base de dados Oracle e SQL Server (utilizando ferramentas como git e azure), e também dando manutenção em sistemas legado (ASP clássico/VBScript)."},{title:"PROJETOS DE PORTFOLIO",images:[{src:"molang.png",alt:"Molang",caption:"html, css e javascript",link:"https://github.com/piltie/E-commerce-website"},{src:"gatteria.png",alt:"Gatteria",caption:"vue e tailwind css",link:"https://github.com/piltie/E-commerce-website-Vue-"},{src:"embreve.png",alt:"Em breve",caption:"react e asp.net core mvc"},{src:"embreve.png",alt:"Em breve",caption:"angular e asp.net core mvc"},{src:"embreve.png",alt:"Em breve",caption:" asp.net core web api"}]}]}},mounted(){this.$nextTick((()=>{this.articles.forEach((e=>{if(e.text){var t=document.getElementById(`${e.title}Texto`);console.log(t),t.innerHTML=e.text}}))}))}};const je=(0,C.Z)(Le,[["render",Ee]]);var Be=je,Oe={name:"App",components:{Menu:A,Home:N,Articles:Be,Footer:ge}};const Ce=(0,C.Z)(Oe,[["render",s]]);var Me=Ce;(0,a.ri)(Me).mount("#app")},990:function(e,t,n){var a={"./embreve.png":2783,"./gatteria.png":6018,"./logo-dark.png":2874,"./logo.png":4427,"./molang.png":3884,"./sarah.jpg":6559};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=990},2783:function(e,t,n){"use strict";e.exports=n.p+"img/embreve.e2d6d242.png"},6018:function(e,t,n){"use strict";e.exports=n.p+"img/gatteria.b986c747.png"},2874:function(e,t,n){"use strict";e.exports=n.p+"img/logo-dark.5e49cb18.png"},4427:function(e,t,n){"use strict";e.exports=n.p+"img/logo.7ec241c3.png"},3884:function(e,t,n){"use strict";e.exports=n.p+"img/molang.747928f2.png"},6559:function(e,t,n){"use strict";e.exports=n.p+"img/sarah.9200e6ca.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],o=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,r=a[0],s=a[1],c=a[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var d=c(n)}for(t&&t(a);l<r.length;l++)o=r[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8830)}));a=n.O(a)})();
//# sourceMappingURL=app.a57a32f3.js.map