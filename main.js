(()=>{"use strict";var e={4:e=>{e.exports=JSON.parse('[{"Nome":"Vinícius Lemos Miranda","Cargo":"Supervisor Técnico de Seção","Telefone":"(12) 3123-2733","Email":"vinicius.lemos@unesp.br","Funções":"Supervisor;Compras;"},{"Nome":"Anderson Luiz Comunian","Cargo":"Assistente Administrativo I","Telefone":"(12) 3123-2861","Email":"anderson.luiz@unesp.br","Funções":"Almoxarifado;"},{"Nome":"Andréa dos Santos Chaves","Cargo":"Assistente Administrativo I","Telefone":"(12) 3123-2781","Email":"andrea.chaves@unesp.br","Funções":""},{"Nome":"João Batista do Carmo","Cargo":"Assistente Administrativo II","Telefone":"(12) 3123-2732","Email":"joao.carmo@unesp.br","Funções":""},{"Nome":"Marco Antonio Ruzene","Cargo":"Assistente Administrativo II","Telefone":"(12) 3123-2850","Email":"marco.ruzene@unesp.br","Funções":"Compras"},{"Nome":"Rosilda Molina da Silva","Cargo":"Assistente Administrativo II","Telefone":"(12) 3123-2810","Email":"rosilda.molina@unesp.br","Funções":""}]')}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={};n.r(e),n.d(e,{comoPedir:()=>c,contato:()=>s,equipe:()=>d,inicio:()=>o,sobre:()=>r,visualizar:()=>i});const t=document.createElement("main");t.classList.add("pt-7","pb-6","flex","flex-col","items-center");const o=()=>{t.textContent="";const e=document.createElement("h1");e.textContent="Transparência de Compras";const n=document.createElement("div");return n.classList.add("content","drop-shadow-lg"),n.innerHTML="<h3>Início</h3>",n.innerHTML+="<p class='group'>Bem-vindo ao site Transparência de Compras, feito pela Seção Técnica de Materiais da FEG! Aqui você poderá encontrar:</p>",n.innerHTML+="<ul class='p'><li>como realizar pedidos</li><li>o status dos seus pedidos</li><li>informações sobre a STMA</li><li>contato da seção e da equipe</li><li>esclarecimento de dúvidas</li></ul>",n.innerHTML+="",n.innerHTML+="<h3 class='faq'>Perguntas Frequentes</h3>",n.innerHTML+="<h4 id='realizarPedido'>Como posso realizar um pedido?</h4>",n.innerHTML+="<div><p>Abcd</p></div>",n.innerHTML+="<h4 id='statusPedido'>Como posso saber o status do meu pedido?</h4>",n.innerHTML+="<div><p>Abcd</p></div>",n.innerHTML+="<h4 id='inexigibilidade'>O que é inexigibilidade?</h4>",n.innerHTML+="<div><p class='group'><b>Inexigibilidade</b> de um produto ou serviço acontece quando este item é ofertado por <b>apenas uma empresa</b> em todo o Brasil, ou seja, não há competição ou outras ofertas desse material / serviço.</p><p>Isso é bem comum no caso de <b>assistências técnicas especializadas</b>, onde em muitos casos só a marca responsável pela criação do produto realiza a assistência técnica do mesmo.</p></div>",n.innerHTML+="<h4 id='fazerInexigibildade'>O que devo fazer se houver inexigibilidade?</h4>",n.innerHTML+="<div><p>Abcd</p></div>",t.appendChild(e),t.appendChild(n),t},i=()=>{t.textContent="";const e=document.createElement("h1");e.textContent="Pedidos";const n=document.createElement("button");return n.classList.add("drop-shadow-lg","pedidos"),n.textContent="Visualizar Pedidos",t.appendChild(e),t.appendChild(n),t},s=()=>{t.textContent="";const e=document.createElement("h1");e.classList.add("contato"),e.textContent="Contato da STMA";const n=document.createElement("div");return n.classList.add("grid","drop-shadow-lg","contact"),n.innerHTML="<p>STMA</p>",n.innerHTML+="<p class='telefone'>(12) 3123-2733</p>",n.innerHTML+="<p><a href='mailto:sma.feg@unesp.br'>sma.feg@unesp.br</a></p>",t.appendChild(e),t.appendChild(n),t},a=n(4),d=()=>{t.textContent="";const e=document.createElement("h1");e.textContent="Equipe";const n=document.createElement("div");return n.classList.add("grid","funcionarios"),a.forEach((e=>{const t=document.createElement("div");t.classList.add("drop-shadow-lg"),Object.keys(e).forEach((n=>{if("Funções"==n)return;const o=document.createElement("p");o.classList.add(n.toLowerCase()),"Nome"==n&&o.classList.add("highlight"),o.innerHTML="Email"==n?`<a href='mailto:${e[n]}'>${e[n]}</a>`:e[n],t.appendChild(o)})),n.appendChild(t)})),t.appendChild(e),t.appendChild(n),t},r=()=>{t.textContent="";const e=document.createElement("h1");return e.textContent="STMA",t.appendChild(e),t},c=()=>{t.textContent="";const e=document.createElement("h1");e.textContent="Como Pedir";const n=document.createElement("img");return n.classList.add("fluxograma"),n.setAttribute("src","./img/fluxograma.png"),t.appendChild(e),t.appendChild(n),t},l=(()=>{const e=document.querySelector("nav div.ul"),t=document.querySelectorAll(".dropdown > li"),n=document.querySelectorAll(".dropdown ul");t.forEach((e=>{e.addEventListener("mouseenter",(()=>{e.classList.add("visible"),document.querySelector("ul#"+e.id+"s").classList.add("visible")})),e.addEventListener("click",(()=>{e.classList.contains("visible")?(e.classList.remove("visible"),document.querySelector("ul#"+e.id+"s").classList.remove("visible")):(e.classList.add("visible"),document.querySelector("ul#"+e.id+"s").classList.add("visible"))}))})),n.forEach((e=>{e.parentNode.addEventListener("mouseleave",(()=>{document.querySelector("li#"+e.id.slice(0,-1)).classList.remove("visible"),e.classList.remove("visible")}))}));const o=document.querySelector("nav #mobileButton span"),i=()=>{o.textContent="menu",o.classList.remove("selected"),e.classList.remove("selected")},s=()=>{"menu"==o.textContent?(o.textContent="close",o.classList.add("selected"),e.classList.add("selected")):i()};return o.addEventListener("click",s),{toggleMenu:s,closeMenu:i}})(),u=(()=>{const t=document.querySelector("div#container"),n=document.querySelectorAll("li.page"),o=document.querySelector("#logo"),i=e=>{let t=document.querySelector(".content h4#"+e.target.id),n=document.querySelector(".content h4#"+e.target.id+" + div");t.classList.toggle("selected"),n.classList.toggle("selected")};return n.forEach((e=>{e.addEventListener("click",(()=>{m.switchPage(e.id)}))})),o.addEventListener("click",(()=>{m.switchPage("inicio")})),{changePage:n=>{const o=e[n]();t.insertBefore(o,t.children[1]);try{l.closeMenu()}catch(e){}},cleanMain:()=>{t.children.length>2&&t.removeChild(t.children[1])},highlightLi:e=>{document.querySelectorAll("nav li").forEach((e=>{e.classList.remove("selected")}));const t=document.querySelector("#"+e);let n=t.getAttribute("data-drop");null!=n&&document.querySelector("nav #"+n).classList.add("selected"),t.classList.add("selected")},addContent:()=>{Array.from(document.querySelectorAll("main .content h4")).forEach((e=>{e.innerHTML="<span class='material-symbols-outlined'>expand_more</span>"+e.textContent,e.addEventListener("click",i)}))}}})(),m={switchPage:e=>{u.cleanMain(),u.changePage(e),u.highlightLi(e),"inicio"==e&&u.addContent()}};m.switchPage("inicio")})()})();