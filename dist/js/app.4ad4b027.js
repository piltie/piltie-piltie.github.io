(function(){var e={5275:function(e,t,n){"use strict";var i=n(9242),r=n(3396);function s(e,t,n,i,s,o){const a=(0,r.up)("Layout");return(0,r.wg)(),(0,r.j4)(a)}const o={class:"bg-white-pastel-medium"},a={class:"flex flex-row-reverse justify-between bg-white-pastel-light font-JosefinSlab tracking-wide font-semibold text-[1.4em] border-[#dddcdc] border-[0.01px] text-brown-pastel-dark md:grid md:grid-cols-[minmax(4em,_1fr)_9fr_minmax(4em,_1fr)] items-center sticky top-0 z-10"},l={class:"w-[80%] m-auto animate__animated animate__fadeInUp"};function u(e,t,n,i,s,u){const c=(0,r.up)("Menu"),m=(0,r.up)("Home"),d=(0,r.up)("Sobre"),p=(0,r.up)("Experiencia"),f=(0,r.up)("Projetos");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("header",a,[(0,r.Wm)(c)]),(0,r.Wm)(m,{id:"#home"}),(0,r._)("main",l,[(0,r.Wm)(d),(0,r.Wm)(p),(0,r.Wm)(f)])])}const c={class:"flex justify-center min-w-[4em]"},m={type:"button"},d={class:"flex justify-center"},p=(0,r._)("li",null,[(0,r._)("a",{class:"block px-7 py-5 hover:text-brown-pastel-medium",href:"#home"},"home")],-1),f={key:0},b=(0,r._)("a",{class:"block px-7 py-5 hover:text-brown-pastel-medium",href:"#sobre"},"sobre",-1),h=[b],v={key:1},w=(0,r._)("a",{class:"block px-7 py-5 hover:text-brown-pastel-medium",href:"#experiencia"},"experiência",-1),g=[w],x={key:2},y=(0,r._)("a",{class:"block px-7 py-5 hover:text-brown-pastel-medium",href:"#projetos"},"projetos",-1),_=[y],k={key:0,class:"flex justify-center"},j=(0,r._)("button",{class:"flex",type:"button"},[(0,r._)("i",{class:"fa-solid fa-paw hover:text-brown-pastel-medium"})],-1),S=[j],W={key:1,class:"flex justify-center min-w-[4em]"},D={type:"button"};function P(e,t,n,i,s,o){const a=(0,r.up)("SunIcon"),l=(0,r.up)("Bars3Icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",c,[(0,r._)("button",m,[(0,r.Wm)(a,{class:"w-[1.2em] hover:text-brown-pastel-medium"})])]),(0,r._)("nav",null,[(0,r._)("ul",d,[p,s.windowWidth>=s.mdWidth?((0,r.wg)(),(0,r.iD)("li",f,h)):(0,r.kq)("",!0),s.windowWidth>=s.mdWidth?((0,r.wg)(),(0,r.iD)("li",v,g)):(0,r.kq)("",!0),s.windowWidth>=s.mdWidth?((0,r.wg)(),(0,r.iD)("li",x,_)):(0,r.kq)("",!0)])]),s.windowWidth>=s.mdWidth?((0,r.wg)(),(0,r.iD)("div",k,S)):(0,r.kq)("",!0),s.windowWidth<s.mdWidth?((0,r.wg)(),(0,r.iD)("div",W,[(0,r._)("button",D,[(0,r.Wm)(l,{class:"w-[1.2em] hover:text-brown-pastel-medium"})])])):(0,r.kq)("",!0)],64)}var O=n(3857),C=n(7148),q=n(2906),B=n.n(q),E=n(9410),I=n.n(E),A={name:"MenuHeader",components:{SunIcon:O.Z,Bars3Icon:C.Z},data(){return{windowWidth:window.innerWidth,mdWidth:0}},mounted(){const e=B()(I()),t=parseInt(e.theme.screens.md.replace("px",""));this.mdWidth=t,this.$nextTick((()=>{window.onresize=()=>{this.windowWidth=window.innerWidth}}))}},J=n(89);const Z=(0,J.Z)(A,[["render",P]]);var M=Z,T=n.p+"img/sarah.9200e6ca.jpg";const F={class:"md:py-[8em] py-[3em] font-JosefinSlab text-[1.12em] text-brown-pastel-dark"},U={class:"flex md:flex-row flex-col m-auto w-[21.5em] justify-between animate__animated animate__fadeInUp"},H=(0,r._)("div",{clas:"rounded-full"},[(0,r._)("img",{class:"m-auto w-[8em] rounded-full outline outline-[0.01px] outline-[#dddcdc] border-[0.3em] border-white-pastel-light after:content-[''] after:rounded-full after:border-red-500 after:border-[3em]",src:T})],-1),L={class:"flex flex-col self-center justify-between h-[6em] md:pt-0 pt-[1em] md:text-start text-center"},V=(0,r._)("div",null,[(0,r._)("h1",{class:"font-bold h-[1.7em]"},"sarah"),(0,r._)("h2",{class:"font-medium"},"desenvolvedora & artista.")],-1),z={class:"flex justify-between w-[6em] md:self-start self-center"},N=(0,r._)("a",{href:"https://github.com/piltie",target:"_blank",class:"hover:text-brown-pastel-medium flex items-center"},[(0,r._)("i",{class:"fa-brands fa-github"})],-1),R={href:"#footer",class:"hover:text-brown-pastel-medium"},X=(0,r._)("a",{href:"https://www.linkedin.com/in/sarah-carla-souza-31166b207",target:"_blank",class:"hover:text-brown-pastel-medium flex items-center"},[(0,r._)("i",{class:"fa-brands fa-linkedin"})],-1);function Y(e,t,n,i,s,o){const a=(0,r.up)("AtSymbolIcon");return(0,r.wg)(),(0,r.iD)("div",F,[(0,r._)("div",U,[H,(0,r._)("div",L,[V,(0,r._)("div",z,[N,(0,r._)("a",R,[(0,r.Wm)(a,{class:"w-[1.1em]"})]),X])])])])}var $=n(5879),G={name:"MenuHeader",components:{AtSymbolIcon:$.Z}};const K=(0,J.Z)(G,[["render",Y]]);var Q=K;const ee={class:"pb-[3em]"},te=(0,r._)("div",{class:"flex justify-center h-[2em] px-[0.5em]"},[(0,r._)("h1",{class:"px-[1em] text-center font-JosefinSlab tracking-[0.2em] font-semibold text-[1.7em] text-brown-pastel-darker bg-brown-pastel-light"}," SOBRE ")],-1),ne=(0,r._)("p",{class:"py-[2em]"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec volutpat ex, sed sodales risus. Sed libero odio, porttitor eget hendrerit non, sollicitudin a quam. Cras consequat, tortor vel congue lacinia, enim nisi ultrices augue, a imperdiet metus lacus et nulla. Sed interdum vitae dolor in dapibus. Cras vulputate convallis ligula, at semper velit tempus vitae. Fusce ac lacus vel ligula euismod dapibus. Fusce sit amet placerat orci. Vestibulum vel orci libero. Vestibulum nec vehicula elit, nec fermentum justo. Mauris vulputate augue nec massa pellentesque, id ultricies risus rutrum. Sed rutrum ligula non libero elementum, ac bibendum nunc posuere. Phasellus non lobortis turpis. Ut iaculis urna convallis est vulputate iaculis. Sed nec convallis sem. ",-1),ie=(0,r._)("hr",{class:"py-[1em]"},null,-1),re=[te,ne,ie];function se(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",ee,re)}var oe={name:"SobreBody"};const ae=(0,J.Z)(oe,[["render",se]]);var le=ae;const ue={class:"pb-[3em]"},ce=(0,r._)("div",{class:"flex justify-center h-[2em] px-[0.5em]"},[(0,r._)("h1",{class:"px-[1em] text-center font-JosefinSlab tracking-[0.2em] font-semibold text-[1.7em] text-brown-pastel-darker bg-brown-pastel-light"}," EXPERIÊNCIA ")],-1),me=(0,r._)("p",{class:"py-[2em]"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec volutpat ex, sed sodales risus. Sed libero odio, porttitor eget hendrerit non, sollicitudin a quam. Cras consequat, tortor vel congue lacinia, enim nisi ultrices augue, a imperdiet metus lacus et nulla. Sed interdum vitae dolor in dapibus. Cras vulputate convallis ligula, at semper velit tempus vitae. Fusce ac lacus vel ligula euismod dapibus. Fusce sit amet placerat orci. Vestibulum vel orci libero. Vestibulum nec vehicula elit, nec fermentum justo. Mauris vulputate augue nec massa pellentesque, id ultricies risus rutrum. Sed rutrum ligula non libero elementum, ac bibendum nunc posuere. Phasellus non lobortis turpis. Ut iaculis urna convallis est vulputate iaculis. Sed nec convallis sem. ",-1),de=(0,r._)("hr",{class:"py-[1em]"},null,-1),pe=[ce,me,de];function fe(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",ue,pe)}var be={name:"SobreBody"};const he=(0,J.Z)(be,[["render",fe]]);var ve=he,we=n.p+"img/molang.747928f2.png",ge=n.p+"img/gatteria.b986c747.png";const xe={class:"pb-[3em]"},ye=(0,r.uE)('<div class="flex justify-center h-[2em] px-[0.5em]"><h1 class="px-[1em] text-center font-JosefinSlab tracking-[0.2em] font-semibold text-[1.7em] text-brown-pastel-darker bg-brown-pastel-light"> PROJETOS </h1></div><div class="flex py-[2em] m-auto project-img:justify-center justify-between flex-wrap"><div class="w-[50%] min-w-[25.2em] pr-[1em] project-img:pb-[2em] pb-0 project-img:pr-0"><img class="m-auto outline outline-[0.01px] outline-[#dddcdc] border-[0.3em] border-white-pastel-light after:content-[&#39;&#39;] after:rounded-full after:border-red-500 after:border-[3em]" src="'+we+'"></div><div class="w-[50%] min-w-[25.2em] pb-0 project-img:pb-[2em] project-img:pl-0 pl-[1em]"><img class="m-auto outline outline-[0.01px] outline-[#dddcdc] border-[0.3em] border-white-pastel-light after:content-[&#39;&#39;] after:rounded-full after:border-red-500 after:border-[3em]" src="'+ge+'"></div></div><hr class="py-[1em]">',3),_e=[ye];function ke(e,t,n,i,s,o){return(0,r.wg)(),(0,r.iD)("div",xe,_e)}var je={name:"ProjetosBody"};const Se=(0,J.Z)(je,[["render",ke]]);var We=Se,De={name:"App",components:{Menu:M,Home:Q,Sobre:le,Experiencia:ve,Projetos:We}};const Pe=(0,J.Z)(De,[["render",u]]);var Oe=Pe,Ce={name:"App",components:{Layout:Oe}};const qe=(0,J.Z)(Ce,[["render",s]]);var Be=qe;(0,i.ri)(Be).mount("#app")},9410:function(e,t,n){e.exports={content:["./public/**/*.html","./src/**/*.{vue,js,ts,jsx,tsx}"],theme:{extend:{fontFamily:{Poppins:"Poppins",JosefinSlab:"Josefin Slab",NotoSansMono:"Noto Sans Mono",JosefinSans:"Josefin Sans",PTSans:"PT Sans",PTSerif:"PT Serif"},screens:{"project-img":{max:"1024px"}},colors:{yellow:{"pastel-greenish":"#D6D5A8"},black:{pastel:"#1B2430"},blue:{"pastel-dark":"#495C83"},purple:{"pastel-medium":"#816797","pastel-light":"#7A86B6","pastel-dark":"#51557E"},lilac:{"pastel-light":"#A8A4CE"},pink:{"pastel-light":"#C8B6E2"},white:{"pastel-light":"#fffefd","pastel-medium":"#f7f5f2"},brown:{"pastel-light":"#DFD3C3","pastel-dark":"#7b6d57","pastel-medium":"#CDBBA7","pastel-darker":"#472D2D"}}}},plugins:[n(4455)]}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],s=e[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,o=i[0],a=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(t&&t(i);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5275)}));i=n.O(i)})();
//# sourceMappingURL=app.4ad4b027.js.map